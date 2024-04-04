/**
 * Initialization data for the imjoy-jupyterlab-extension extension.
 */

import { loadImJoyBasicApp } from "imjoy-core/dist/imjoy-loader";
import { setupRPC } from "imjoy-core/dist/imjoy-rpc";
import { githubUrlRaw, convertZenodoFileUrl } from "./utils.js";
import "reflect-metadata";

import {
  showErrorMessage, Spinner
} from '@jupyterlab/apputils';
import { PathExt } from '@jupyterlab/coreutils';

import { DisposableDelegate } from '@lumino/disposable';

import { ToolbarButton } from '@jupyterlab/apputils';

// import { version } from '../package.json';

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

export async function parseURL(queryString, app, browser, trans){
  const urlParams = new URLSearchParams(queryString);
  const urls = urlParams.getAll("load");
  let lastFile = null;
  for(let url of urls){
    let type = '';
    let blob;
    // fetch the file from the URL
    try {
      if (url.includes("//zenodo.org/record")) {
          url = await convertZenodoFileUrl(url);
      } else {
        url = await githubUrlRaw(url, ".ipynb") || url;
      }
      const req = await fetch(url);
      blob = await req.blob();
      type = req.headers.get('Content-Type') ?? '';
        // upload the content of the file to the server
      try {
        const name = PathExt.basename(url).split("?")[0];
        const file = new File([blob], name, { type });
        const model = await browser.model.upload(file);
        lastFile = model.path
        console.log("File uploaded: " + model.path);
      } catch (error) {
        showErrorMessage(
          trans._p('showErrorMessage', 'Upload Error'),
          error
        );
      }
    } catch (reason) {
      if (reason.response && reason.response.status !== 200) {
        reason.message = trans.__('Could not open URL: %1', url);
      }
      return showErrorMessage(trans.__('Cannot fetch'), reason);
    }
  }

  let file2Open = urlParams.get("open") 
  if(file2Open === "1" ) file2Open = lastFile;
  if(file2Open){
    await app.commands.execute('docmanager:open', {
      path: file2Open
    });
  }
}

export class ImjoyExtension {
  constructor(jupyterBaseUrl, labApp, fileBrowser) {
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
        const api = await setupRPC({ name: "JupyterLite" });
        api.export({
          setup(){
          },
          run(ctx){
            ctx = ctx || {}
            ctx.config = ctx.config || {}
            ctx.config.left_collapsed = ctx.config.left_collapsed === undefined ? true:false
            if(ctx.config.left_collapsed){
              if(!labApp.shell.leftCollapsed){
                labApp.commands.execute('application:toggle-left-area');
              }
            }
            else{
              if(labApp.shell.leftCollapsed){
                labApp.commands.execute('application:toggle-left-area');
              }
            }
          },
          async fileExists(path){
            try{
              await fileBrowser.model.manager.services.contents.get(path);
              return true;
            }
            catch(e){
              return false;
            }
          },  
          async getFile(path){
            return await fileBrowser.model.manager.services.contents.get(path);
          },
          async removeFile(path){
            return await fileBrowser.model.manager.deleteFile(path);
          },
          async loadFile(name, content, type){
            const file = new File([content], name, { type });
            const model = await fileBrowser.model.upload(file);
            return model.path;
          },
          async openFile(path){
            await labApp.commands.execute('docmanager:open', {
              path: path
            });
          },
          async closeLeft(){
            if(!labApp.shell.leftCollapsed){
              labApp.commands.execute('application:toggle-left-area');
            }
          },
          async openLeft(){
            if(labApp.shell.leftCollapsed){
              labApp.commands.execute('application:toggle-left-area');
            }
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
        buttonNode.style.minWidth = "25px";
        const _spinner = new Spinner();
        _spinner.node.firstChild.style.width = "20px";
        _spinner.node.firstChild.style.height = "20px";
        sessionContext.kernelChanged.connect(() => {
          buttonNode.appendChild(_spinner.node);
          patchPyodideKernel(kernel).finally(()=>{
            buttonNode.removeChild(_spinner.node);
          }).catch(()=>{
            console.error("Failed to apply pyodide patch");
          })
        }, sessionContext);
        buttonNode.appendChild(_spinner.node);
        try{
          await patchPyodideKernel(kernel);
        }
        catch(e){
          throw e;
        }
        finally{
          buttonNode.removeChild(_spinner.node);
        }
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
      tooltip: `ImJoy JupyterLab Extension`, // (version: ${version})`,
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
