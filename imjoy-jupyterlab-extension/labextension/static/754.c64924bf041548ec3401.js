'use strict';
(self.webpackChunkimjoy_jupyterlab_extension =
  self.webpackChunkimjoy_jupyterlab_extension || []).push([
  [754],
  {
    754: (e, t, n) => {
      n.r(t), n.d(t, { default: () => g });
      var o = n(703),
        s = n(967);
      const r = /^(?:\w+:)?\/\/([\s\S]+)$/,
        i = /^localhost[\:?\d]*(?:[^\:?\d][\s\S]*)?$/,
        a = /^[^\s\.]+\.[\s\S]{2,}$/,
        l = /(?:(?:[^:]+:)?[/][/])?(?:.+@)?([^/]+)([/][^?#]+)/;
      async function c(e, t) {
        if (e.includes('gist.github.com')) {
          const n = e.split('/').slice(-1)[0],
            o = await fetch('https://api.github.com/gists/' + n).then(e =>
              e.blob()
            ),
            s = JSON.parse(await new Response(o).text());
          if (t) {
            const e = Object.values(s.files).filter(e =>
              e.filename.endsWith(t)
            )[0];
            return e && e.raw_url;
          }
          return s.files[Object.values(s.files)[0]].raw_url;
        }
        if (!e.includes('blob') || !e.includes('github')) return null;
        var n = (function (e, t) {
            var n = {};
            if (((t = t || {}), !e)) return null;
            if ((e.url && (e = e.url), 'string' != typeof e)) return null;
            var o = e.match(/^([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/),
              s = e.match(/^github:([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/),
              c = e.match(/^git@[\w-_\.]+:([\w-_]+)\/([\w-_\.]+)$/);
            if (o)
              (n.user = o[1]),
                (n.repo = o[2]),
                (n.branch = o[3] || 'master'),
                (n.host = 'github.com');
            else if (s)
              (n.user = s[1]),
                (n.repo = s[2]),
                (n.branch = s[3] || 'master'),
                (n.host = 'github.com');
            else if (c)
              (n.user = c[1]),
                (n.repo = c[2].replace(/\.git$/i, '')),
                (n.branch = 'master'),
                (n.host = 'github.com');
            else {
              if (
                !(function (e) {
                  if ('string' != typeof e) return !1;
                  var t = e.match(r);
                  if (!t) return !1;
                  var n = t[1];
                  return !(!n || (!i.test(n) && !a.test(n)));
                })((e = e.replace(/^git\+/, '')))
              )
                return null;
              const [, o, s] = e.match(l) || [];
              if (!o) return null;
              if ('github.com' !== o && 'www.github.com' !== o && !t.enterprise)
                return null;
              var p = s.match(
                /^\/([\w-_]+)\/([\w-_\.]+)(\/tree\/[\w-_\.\/]+)?(\/blob\/[\s\w-_\.\/]+)?/
              );
              if (!p) return null;
              (n.user = p[1]),
                (n.repo = p[2].replace(/\.git$/i, '')),
                (n.host = o || 'github.com'),
                p[3] && /^\/tree\/master\//.test(p[3])
                  ? ((n.branch = 'master'), (n.path = p[3].replace(/\/$/, '')))
                  : p[3]
                    ? (n.branch = p[3]
                        .replace(/^\/tree\//, '')
                        .match(/[\w-_.]+\/{0,1}[\w-_]+/)[0])
                    : p[4]
                      ? (n.branch = p[4]
                          .replace(/^\/blob\//, '')
                          .match(/[\w-_.]+\/{0,1}[\w-_]+/)[0])
                      : (n.branch = 'master');
            }
            return (
              'github.com' === n.host
                ? (n.apiHost = 'api.github.com')
                : (n.apiHost = `${n.host}/api/v3`),
              (n.tarball_url = `https://${n.apiHost}/repos/${n.user}/${n.repo}/tarball/${n.branch}`),
              (n.clone_url = `https://${n.host}/${n.user}/${n.repo}`),
              'master' === n.branch
                ? ((n.https_url = `https://${n.host}/${n.user}/${n.repo}`),
                  (n.travis_url = `https://travis-ci.org/${n.user}/${n.repo}`),
                  (n.zip_url = `https://${n.host}/${n.user}/${n.repo}/archive/master.zip`))
                : ((n.https_url = `https://${n.host}/${n.user}/${n.repo}/blob/${n.branch}`),
                  (n.travis_url = `https://travis-ci.org/${n.user}/${n.repo}?branch=${n.branch}`),
                  (n.zip_url = `https://${n.host}/${n.user}/${n.repo}/archive/${n.branch}.zip`)),
              n.path && (n.https_url += n.path),
              (n.api_url = `https://${n.apiHost}/repos/${n.user}/${n.repo}`),
              n
            );
          })(e),
          o = n.user,
          s = n.repo,
          c = new RegExp('^https://github.com/' + o + '/' + s + '/blob/', 'g');
        return (
          'https://raw.githubusercontent.com/' +
          o +
          '/' +
          s +
          '/' +
          e.replace(c, '')
        );
      }
      async function p(e) {
        const t =
          /https?:\/\/zenodo.org\/record\/([a-zA-Z0-9-]+)\/files\/(.*)/g.exec(
            e
          );
        if (!t || 3 !== t.length) throw new Error('Invalid zenodo url');
        const [n, o, s] = t,
          r = await fetch(`https://zenodo.org/api/records/${o}`).then(e =>
            e.blob()
          ),
          i = JSON.parse(await new Response(r).text()),
          a = s.split('?')[0];
        return i.files.filter(e => e.key === a)[0].links.self;
      }
      var h = n(322),
        u = n(502),
        d = n(777),
        f = n(543),
        _ = n(923);
      class m extends class {
        constructor(e) {
          (this._event_handlers = {}),
            (this._once_handlers = {}),
            (this._debug = e);
        }
        emit() {
          throw new Error('emit is not implemented');
        }
        on(e, t) {
          this._event_handlers[e] || (this._event_handlers[e] = []),
            this._event_handlers[e].push(t);
        }
        once(e, t) {
          (t.___event_run_once = !0), this.on(e, t);
        }
        off(e, t) {
          if (e || t) {
            if (e && !t)
              this._event_handlers[e] && (this._event_handlers[e] = []);
            else if (this._event_handlers[e]) {
              const n = this._event_handlers[e].indexOf(t);
              n >= 0 && this._event_handlers[e].splice(n, 1);
            }
          } else this._event_handlers = {};
        }
        _fire(e, t) {
          if (this._event_handlers[e]) {
            let n = this._event_handlers[e].length;
            for (; n--; ) {
              const o = this._event_handlers[e][n];
              try {
                o(t);
              } catch (e) {
                console.error(e);
              } finally {
                o.___event_run_once && this._event_handlers[e].splice(n, 1);
              }
            }
          } else this._debug && console.warn('unhandled event', e, t);
        }
      } {
        constructor(e) {
          super(e && e.debug);
          const t = e.kernel.createComm('imjoy_rpc');
          t.open({}),
            (t.onMsg = e => {
              const { data: t } = e.content,
                n = t.__buffer_paths__ || [];
              delete t.__buffer_paths__,
                (function (e, t, n) {
                  n = n.map(e =>
                    e instanceof DataView
                      ? e.buffer
                      : e instanceof ArrayBuffer
                        ? e
                        : e.buffer
                  );
                  for (let o = 0; o < t.length; o++) {
                    const s = t[o];
                    let r = e;
                    for (let e = 0; e < s.length - 1; e++) r = r[s[e]];
                    r[s[s.length - 1]] = n[o];
                  }
                })(t, n, e.buffers || []),
                'log' === t.type || 'info' === t.type
                  ? console.log(t.message)
                  : 'error' === t.type
                    ? console.error(t.message)
                    : (t.peer_id && (this._peer_id = t.peer_id),
                      this._fire(t.type, t));
            }),
            (this.comm = t);
        }
        connect() {}
        disconnect() {}
        emit(e) {
          e.peer_id = this._peer_id;
          const t = (function (e) {
            const t = [],
              n = [];
            return {
              state: (function e(o, s) {
                var r, i;
                if (
                  ('object' == typeof (r = o) &&
                    r &&
                    r.toJSON &&
                    (o = o.toJSON()),
                  Array.isArray(o))
                ) {
                  let r = !1;
                  for (let i = 0; i < o.length; i++) {
                    const a = o[i];
                    if (a)
                      if (a instanceof ArrayBuffer || ArrayBuffer.isView(a))
                        r || ((o = o.slice()), (r = !0)),
                          t.push(ArrayBuffer.isView(a) ? a.buffer : a),
                          n.push(s.concat([i])),
                          (o[i] = null);
                      else {
                        const t = e(a, s.concat([i]));
                        t !== a &&
                          (r || ((o = o.slice()), (r = !0)), (o[i] = t));
                      }
                  }
                } else if (
                  (i = o) &&
                  'object' == typeof i &&
                  i.constructor === Object
                )
                  for (const r of Object.keys(o)) {
                    let i = !1;
                    if (Object.prototype.hasOwnProperty.call(o, r)) {
                      const a = o[r];
                      if (a)
                        if (a instanceof ArrayBuffer || ArrayBuffer.isView(a))
                          i || ((o = { ...o }), (i = !0)),
                            t.push(ArrayBuffer.isView(a) ? a.buffer : a),
                            n.push(s.concat([r])),
                            delete o[r];
                        else {
                          const t = e(a, s.concat([r]));
                          t !== a &&
                            (i || ((o = { ...o }), (i = !0)), (o[r] = t));
                        }
                    }
                  }
                return o;
              })(e, []),
              buffers: t,
              buffer_paths: n
            };
          })(e);
          (t.state.__buffer_paths__ = t.buffer_paths),
            this.comm.send(t.state, {}, {}, t.buffers);
        }
      }
      async function w(e) {
        if ('pyodide' === (await e.info).implementation) {
          const t = `\nimport os\nimport ipykernel\nimport micropip\nimport sys\n\nawait micropip.install([ "imjoy-rpc"])\nimport imjoy_rpc\n\nif 'imjoy' not in sys.modules:\n    sys.modules['imjoy'] = sys.modules['imjoy_rpc']\n\nif 'IMJOY_RPC_CONNECTION' not in os.environ:\n    os.environ['IMJOY_RPC_CONNECTION'] = 'jupyter'\n\nclass Connect():\n    def __init__(self, kernel_id):\n        self.kernel_id = kernel_id\n\n    def get_connection_file(self):\n        return f"kernel-{self.kernel_id}.json"\n\nif not hasattr(ipykernel, 'connect'):\n    ipykernel.connect = Connect("${e.id}")\n`,
            n = e.requestExecute({ code: t });
          await n.done, console.log('Pyodide kernel patch applied');
        }
      }
      class y {
        constructor(e, t, n) {
          this.baseUrl = e;
          const r = window.self !== window.top;
          this.notebookHandlerPromise = new Promise((e, t) => {
            (this.resolveNotebookHandler = e), (this.rejectNotebookHandler = t);
          });
          const i = document.createElement('div');
          let a;
          (i.id = 'window-container'),
            document.body.appendChild(i),
            (0, o.loadImJoyBasicApp)({
              process_url_query: !0,
              show_window_title: !1,
              show_progress_bar: !0,
              show_empty_window: !0,
              menu_style: { position: 'absolute', right: 0, top: '2px' },
              window_style: { width: '100%', height: '100%' },
              main_container: null,
              menu_container: null,
              expose_api: !1,
              imjoy_api: {
                async createWindow(e, t, n) {
                  if (
                    !document.getElementById(t.window_id) &&
                    !t.dialog &&
                    document.getElementById(e.id)
                  ) {
                    const n = document.createElement('div');
                    (n.id = t.window_id),
                      n.classList.add('imjoy-inline-window'),
                      document.getElementById(e.id).appendChild(n);
                  }
                  return await a.pm.createWindow(e, t, n);
                }
              }
            })
              .then(async e => {
                console.log('ImJoy Basic App loaded!'), (a = e.imjoy);
                const o = {};
                async function i(e) {
                  if (!o[e])
                    return void console.warn('Kernel is not ready: ' + e);
                  const t = o[e].kernel;
                  await t.ready;
                  const n = await a.pm.connectPlugin(new m({ kernel: t }));
                  o[e].plugin = n;
                }
                async function l(t) {
                  if (o[t])
                    try {
                      const n = o[t].plugin;
                      if (n && n.api.run) {
                        let t = {};
                        n.config.ui &&
                          n.config.ui.indexOf('{') > -1 &&
                          (t = await e.imjoy.pm.imjoy_api.showDialog(
                            n,
                            n.config
                          )),
                          await n.api.run({ config: t, data: {} });
                      }
                    } catch (t) {
                      console.error(t),
                        e.showMessage(`Failed to load the plugin, error: ${t}`);
                    }
                  else console.warn('Kernel is not ready: ' + t);
                }
                r &&
                  (await (0, s.setupRPC)({ name: 'JupyterLite' })).export({
                    setup() {},
                    run(e) {
                      ((e = e || {}).config = e.config || {}),
                        (e.config.left_collapsed =
                          void 0 === e.config.left_collapsed),
                        e.config.left_collapsed
                          ? t.shell.leftCollapsed ||
                            t.commands.execute('application:toggle-left-area')
                          : t.shell.leftCollapsed &&
                            t.commands.execute('application:toggle-left-area');
                    },
                    async fileExists(e) {
                      try {
                        return (
                          await n.model.manager.services.contents.get(e), !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    },
                    getFile: async e =>
                      await n.model.manager.services.contents.get(e),
                    removeFile: async e => await n.model.manager.deleteFile(e),
                    async loadFile(e, t, o) {
                      const s = new File([t], e, { type: o });
                      return (await n.model.upload(s)).path;
                    },
                    async openFile(e) {
                      await t.commands.execute('docmanager:open', { path: e });
                    },
                    async closeLeft() {
                      t.shell.leftCollapsed ||
                        t.commands.execute('application:toggle-left-area');
                    },
                    async openLeft() {
                      t.shell.leftCollapsed &&
                        t.commands.execute('application:toggle-left-area');
                    }
                  }),
                  (window.connectPlugin = async e => {
                    e
                      ? (await i(e), await l(e))
                      : console.warn(
                          'Please upgrade imjoy-rpc(>=0.3.35) by running `pip install -U imjoy-rpc`'
                        );
                  }),
                  (window._connectPlugin = async e => {
                    await i(e);
                  }),
                  (window._runPluginOnly = async e => {
                    await l(e);
                  }),
                  this.resolveNotebookHandler(async (e, t, n) => {
                    const { kernel: s } = e.session;
                    n.style.minWidth = '25px';
                    const r = new d.Spinner();
                    (r.node.firstChild.style.width = '20px'),
                      (r.node.firstChild.style.height = '20px'),
                      e.kernelChanged.connect(() => {
                        n.appendChild(r.node),
                          w(s)
                            .finally(() => {
                              n.removeChild(r.node);
                            })
                            .catch(() => {
                              console.error('Failed to apply pyodide patch');
                            });
                      }, e),
                      n.appendChild(r.node);
                    try {
                      await w(s);
                    } catch (e) {
                      throw e;
                    } finally {
                      n.removeChild(r.node);
                    }
                    (o[s._id] = { kernel: s }),
                      (n.firstChild.innerHTML =
                        '<img src="https://imjoy.io/static/img/imjoy-logo-black.svg" style="height: 17px;">'),
                      (n.firstChild.onclick = () => {
                        l(s._id);
                      });
                  });
              })
              .catch(e => {
                console.error(e), this.rejectNotebookHandler(e);
              });
        }
        createNew(e, t) {
          const n = new d.ToolbarButton({
            tooltip: 'ImJoy JupyterLab Extension (version: 0.1.13)'
          });
          return (
            e.toolbar.insertItem(0, 'Run ImJoy Plugin', n),
            t.sessionContext.ready.then(async () => {
              (await this.notebookHandlerPromise)(
                t.sessionContext,
                e.node,
                n.node
              );
            }),
            new _.DisposableDelegate(() => {
              n.dispose();
            })
          );
        }
      }
      const g = {
        id: 'imjoy-jupyterlab-extension',
        requires: [h.IFileBrowserFactory, u.ITranslator],
        autoStart: !0,
        activate: async function (e, t, n) {
          const o = n.load('jupyterlab'),
            { defaultBrowser: s } = t,
            r = e.serviceManager.settings.serverSettings.baseUrl;
          e.docRegistry.addWidgetExtension('Notebook', new y(r, e, s)),
            console.log(
              'JupyterLab extension imjoy-jupyterlab-extension is activated!'
            );
          const i = new URL(window.location);
          e.started.then(() => {
            (async function (e, t, n, o) {
              const s = new URLSearchParams(e),
                r = s.getAll('load');
              let i = null;
              for (let e of r) {
                let t,
                  s = '';
                try {
                  e = e.includes('//zenodo.org/record')
                    ? await p(e)
                    : (await c(e, '.ipynb')) || e;
                  const r = await fetch(e);
                  (t = await r.blob()),
                    (s = r.headers.get('Content-Type') ?? '');
                  try {
                    const o = f.PathExt.basename(e).split('?')[0],
                      r = new File([t], o, { type: s }),
                      a = await n.model.upload(r);
                    (i = a.path), console.log('File uploaded: ' + a.path);
                  } catch (e) {
                    (0, d.showErrorMessage)(
                      o._p('showErrorMessage', 'Upload Error'),
                      e
                    );
                  }
                } catch (t) {
                  return (
                    t.response &&
                      200 !== t.response.status &&
                      (t.message = o.__('Could not open URL: %1', e)),
                    (0, d.showErrorMessage)(o.__('Cannot fetch'), t)
                  );
                }
              }
              let a = s.get('open');
              '1' === a && (a = i),
                a && (await t.commands.execute('docmanager:open', { path: a }));
            })(window.location.search, e, s, o).finally(() => {
              window.history.pushState(null, '', i);
            });
          });
        }
      };
    }
  }
]);
