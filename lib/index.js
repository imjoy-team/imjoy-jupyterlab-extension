import { loadImJoyBasicApp } from "imjoy-core/dist/imjoy-loader";
import { setupRPC } from "imjoy-core/dist/imjoy-rpc";
import {
  IFileBrowserFactory
} from '@jupyterlab/filebrowser';
import { ITranslator } from '@jupyterlab/translation';
import {
  showErrorMessage,
} from '@jupyterlab/apputils';
import { PathExt } from '@jupyterlab/coreutils';

import { ContentsManager } from '@jupyterlab/services';

import { DisposableDelegate } from '@lumino/disposable';

import { ToolbarButton } from '@jupyterlab/apputils';

import { version } from '../package.json';

import { Connection } from './comm-connection.js';


async function patchPyodideKernel(kernel){
  const info = await kernel.info;
  // apply patch for pyolite to make sure we have the kernel id
  if(info.implementation === 'pyodide') {
    const kernel_patch = `
import os
import ipykernel
import micropip
import sys

await micropip.install([ "imjoy-rpc"])
import imjoy_rpc

if 'imjoy' not in sys.modules:
    sys.modules['imjoy'] = sys.modules['imjoy_rpc']

if 'IMJOY_RPC_CONNECTION' not in os.environ:
    os.environ['IMJOY_RPC_CONNECTION'] = 'jupyter'

class Connect():
    def __init__(self, kernel_id):
        self.kernel_id = kernel_id

    def get_connection_file(self):
        return f"kernel-{self.kernel_id}.json"

if not hasattr(ipykernel, 'connect'):
    ipykernel.connect = Connect("${kernel.id}")
`;
    const future = kernel.requestExecute({ code: kernel_patch } );
    await future.done
    console.log('Pyodide kernel patch applied');

  }
}

async function parseURL(app, browser, trans){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urls = urlParams.getAll("load");
  let lastFile = null;
  for(let url of urls){
    let type = '';
    let blob;
    // fetch the file from the URL
    try {
      const req = await fetch(url);
      blob = await req.blob();
      type = req.headers.get('Content-Type') ?? '';
    } catch (reason) {
      if (reason.response && reason.response.status !== 200) {
        reason.message = trans.__('Could not open URL: %1', url);
      }
      return showErrorMessage(trans.__('Cannot fetch'), reason);
    }
    // upload the content of the file to the server
    try {
      const name = PathExt.basename(url).split("?")[0];
      const file = new File([blob], name, { type });
      const model = await browser.model.upload(file);
      lastFile = model.path
      console.log("File uploaded: " + model.path);
    } catch (error) {
      return showErrorMessage(
        trans._p('showErrorMessage', 'Upload Error'),
        error
      );
    }
  }
  let file2Open = urlParams.get("open") 
  if(file2Open === "1" ) file2Open = lastFile;
  if(file2Open){
    setTimeout(()=>{
      app.commands.execute('docmanager:open', {
        path: file2Open
      });
    }, 1000)
  }
}
class ImjoyExtension {
  constructor(jupyterBaseUrl) {
    this.baseUrl = jupyterBaseUrl;
    const isIframe = window.self !== window.top;
    this.notebookHandlerPromise = new Promise((resolve, reject) => {
      this.resolveNotebookHandler = resolve;
      this.rejectNotebookHandler = reject;
    })
    // create an div with id= "window-container"
    const container = document.createElement('div');
    container.id = 'window-container';
    document.body.appendChild(container)
    let imjoy;
    loadImJoyBasicApp({
        process_url_query: true,
        show_window_title: false,
        show_progress_bar: true,
        show_empty_window: true,
        menu_style: { position: "absolute", right: 0, top: "2px" },
        window_style: {width: '100%', height: '100%'},
        main_container: null,
        menu_container: null,
        expose_api: false, // expose api to the iframe
        // window_manager_container: "window-container",
        imjoy_api: {
          async createWindow(_plugin, w, extra_config) {
            if (!document.getElementById(w.window_id)) {
              if (!w.dialog) {
                if (document.getElementById(_plugin.id)) {
                  const elem = document.createElement('div');
                  elem.id = w.window_id;
                  elem.classList.add('imjoy-inline-window');
                  document.getElementById(_plugin.id).appendChild(elem);
                }
              }
            }
            return await imjoy.pm.createWindow(_plugin, w, extra_config);
          },
        }
    }).then(async app=>{
      console.log(`ImJoy Basic App loaded!`)
      imjoy = app.imjoy;
      const kernelInfo = {}
      if(isIframe){
        const contents = new ContentsManager();
        const api = await setupRPC({ name: "ImJoy" });
        api.export({
          setup(){
          },
          async saveContent(name, content){
            await contents.save(name, content);
          },
          async openUrl(url, with_token){
            if(with_token){
              if(url.indexOf('?') === -1){
                url = url + '?token=' + contents.serverSettings.token;
              }else{
                url = url + '&token=' + contents.serverSettings.token;
              }
            }
            window.location.href = url;
          }
        })
      }

      async function connectPlugin(kernel_id) {
        if (!kernelInfo[kernel_id]) {
          console.warn('Kernel is not ready: ' + kernel_id);
          return;
        }
        const kernel = kernelInfo[kernel_id].kernel;
        await kernel.ready;
        const plugin = await imjoy.pm.connectPlugin(
          new Connection({ kernel }),
        );
        kernelInfo[kernel_id].plugin = plugin;
      }
    
      async function runNotebookPlugin(kernel_id) {
        if (!kernelInfo[kernel_id]) {
          console.warn('Kernel is not ready: ' + kernel_id);
          return;
        }
        try {
          const plugin = kernelInfo[kernel_id].plugin;
          if (plugin && plugin.api.run) {
            let config = {};
            if (
              plugin.config.ui &&
              plugin.config.ui.indexOf('{') > -1
            ) {
              config = await app.imjoy.pm.imjoy_api.showDialog(
                plugin,
                plugin.config,
              );
            }
            await plugin.api.run({
              config: config,
              data: {},
            });
          }
        } catch (e) {
          console.error(e);
          app.showMessage(`Failed to load the plugin, error: ${e}`);
        }
      }
      window.connectPlugin = async kernel_id => {
        if (!kernel_id) {
          console.warn(
            'Please upgrade imjoy-rpc(>=0.3.35) by running `pip install -U imjoy-rpc`',
          );
          return;
        }
        await connectPlugin(kernel_id);
        await runNotebookPlugin(kernel_id);
      };
      window._connectPlugin = async kernel_id => {
        await connectPlugin(kernel_id);
      };
      window._runPluginOnly = async kernel_id => {
        await runNotebookPlugin(kernel_id);
      };

      this.resolveNotebookHandler(async (sessionContext, panelNode, buttonNode)=>{
        const { kernel } = sessionContext.session;
        sessionContext.kernelChanged.connect(() => {
          patchPyodideKernel(kernel);
        }, sessionContext);
        await patchPyodideKernel(kernel);
        kernelInfo[kernel._id] = { kernel };
        buttonNode.firstChild.innerHTML = `<img src="https://imjoy.io/static/img/imjoy-logo-black.svg" style="height: 17px;">`;
        buttonNode.firstChild.onclick = () => {
          runNotebookPlugin(kernel._id);
        };
      })
    })
    .catch(e => {
      console.error(e);
      this.rejectNotebookHandler(e);
    });
  }

  /**
   * Create a new extension object.
   */
  createNew(panel, context) {
    const button = new ToolbarButton({
      tooltip: `ImJoy JupyterLab Extension (version: ${version})`,
    });
    panel.toolbar.insertItem(0, 'Run ImJoy Plugin', button);

    context.sessionContext.ready.then(async () => {
      const notebookHandler = await this.notebookHandlerPromise;
      notebookHandler(context.sessionContext, panel.node, button.node);
    });
    return new DisposableDelegate(() => {
      button.dispose();
    });
  }
}


export default {
  id: 'imjoy-jupyterlab-extension',
  requires: [IFileBrowserFactory, ITranslator],
  autoStart: true,
  activate: async function (app, factory, translator) {
    const trans = translator.load('jupyterlab');
    const { defaultBrowser: browser } = factory;
    const jupyterBaseUrl =
    app.serviceManager.settings.serverSettings.baseUrl;
    app.docRegistry.addWidgetExtension(
      'Notebook',
      new ImjoyExtension(jupyterBaseUrl),
    );
    console.log(
      'JupyterLab extension imjoy-jupyterlab-extension is activated!'
    );

    await parseURL(app, browser, trans);
    
  }
}
