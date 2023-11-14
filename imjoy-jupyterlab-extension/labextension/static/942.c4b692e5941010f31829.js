/*! For license information please see 942.c4b692e5941010f31829.js.LICENSE.txt */
(self.webpackChunkimjoy_jupyterlab_extension =
  self.webpackChunkimjoy_jupyterlab_extension || []).push([
  [942],
  {
    703: module => {
      var factory;
      window,
        (factory = function () {
          return (function (e) {
            var n = {};
            function t(r) {
              if (n[r]) return n[r].exports;
              var i = (n[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
              );
            }
            return (
              (t.m = e),
              (t.c = n),
              (t.d = function (e, n, r) {
                t.o(e, n) ||
                  Object.defineProperty(e, n, { enumerable: !0, get: r });
              }),
              (t.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (t.t = function (e, n) {
                if ((1 & n && (e = t(e)), 8 & n)) return e;
                if (4 & n && 'object' == typeof e && e && e.__esModule)
                  return e;
                var r = Object.create(null);
                if (
                  (t.r(r),
                  Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e
                  }),
                  2 & n && 'string' != typeof e)
                )
                  for (var i in e)
                    t.d(
                      r,
                      i,
                      function (n) {
                        return e[n];
                      }.bind(null, i)
                    );
                return r;
              }),
              (t.n = function (e) {
                var n =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return t.d(n, 'a', n), n;
              }),
              (t.o = function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
              }),
              (t.p = ''),
              t((t.s = './src/imjoyLoader.js'))
            );
          })({
            './node_modules/webpack/buildin/amd-options.js': function (
              module,
              exports
            ) {
              eval(
                '/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/amd-options.js?'
              );
            },
            './package.json': function (module) {
              eval(
                'module.exports = JSON.parse("{\\"name\\":\\"imjoy-core\\",\\"version\\":\\"0.14.2\\",\\"private\\":false,\\"description\\":\\"The core library for ImJoy -- a sandboxed plugin framework for computational web applications.\\",\\"author\\":\\"imjoy-team <imjoy.team@gmail.com>\\",\\"license\\":\\"MIT\\",\\"repository\\":{\\"type\\":\\"git\\",\\"url\\":\\"git+https://github.com/imjoy-team/imjoy-core.git\\"},\\"keywords\\":[\\"ImJoy\\",\\"PWA\\",\\"Deep Learning\\"],\\"bugs\\":{\\"url\\":\\"https://github.com/imjoy-team/ImJoy/issues\\"},\\"homepage\\":\\"https://imjoy.io\\",\\"module\\":\\"index.js\\",\\"scripts\\":{\\"serve\\":\\"webpack-dev-server --config webpack.config.js --mode development\\",\\"build\\":\\"rm -rf dist && npm run build-prod && npm run build-dev\\",\\"build-prod\\":\\"NODE_ENV=production webpack --config webpack.config.js --mode production  --devtool source-map\\",\\"build-dev\\":\\"NODE_ENV=development webpack --config webpack.config.js --mode development\\",\\"watch\\":\\"webpack --watch --progress --config  webpack.config.js --mode development\\",\\"check-format\\":\\"prettier --check \\\\\\"{src,tests}/**/**\\\\\\"\\",\\"format\\":\\"prettier --write \\\\\\"{src,tests}/**/**\\\\\\"\\",\\"lint\\":\\"eslint \\\\\\"{src,tests}/**/**\\\\\\"\\",\\"check\\":\\"eslint \\\\\\"{src,tests}/**/**\\\\\\" && prettier --check \\\\\\"{src,tests}/**/**\\\\\\"\\",\\"test\\":\\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\\",\\"test-watch\\":\\"karma start --auto-watch --browsers Chrome,FirefoxHeadless karma.conf.js --debug\\",\\"deploy\\":\\"npm run build && node deploy-site.js\\",\\"publish-npm\\":\\"npm install && npm run build && npm publish\\"},\\"dependencies\\":{\\"ajv\\":\\"^6.9.1\\",\\"axios\\":\\"^0.21.1\\",\\"dompurify\\":\\"^2.0.8\\",\\"file-saver\\":\\"^1.3.3\\",\\"imjoy-rpc\\":\\"^0.3.35\\",\\"js-yaml\\":\\"^3.13.1\\",\\"lodash\\":\\"^4.17.15\\",\\"lz-string\\":\\"^1.4.4\\",\\"minibus\\":\\"^3.1.0\\",\\"pouchdb-browser\\":\\"^7.2.2\\",\\"socket.io-client\\":\\"^2.3.0\\",\\"spark-md5\\":\\"^3.0.0\\"},\\"devDependencies\\":{\\"@babel/core\\":\\"^7.0.0-beta.39\\",\\"@babel/plugin-syntax-dynamic-import\\":\\"^7.0.0-beta.39\\",\\"@babel/polyfill\\":\\"^7.0.0-beta.39\\",\\"@babel/preset-env\\":\\"^7.0.0-beta.39\\",\\"@types/requirejs\\":\\"^2.1.28\\",\\"babel-core\\":\\"^6.26.0\\",\\"babel-eslint\\":\\"^10.1.0\\",\\"babel-loader\\":\\"^8.1.0\\",\\"babel-plugin-lodash\\":\\"^3.3.4\\",\\"babel-runtime\\":\\"^6.26.0\\",\\"chai\\":\\"^4.1.2\\",\\"cname-webpack-plugin\\":\\"^1.0.3\\",\\"copy-webpack-plugin\\":\\"^5.1.1\\",\\"create-file-webpack\\":\\"^1.0.2\\",\\"cross-env\\":\\"^5.0.1\\",\\"cross-spawn\\":\\"^5.0.1\\",\\"eslint\\":\\"^6.8.0\\",\\"eslint-config-prettier\\":\\"^4.2.0\\",\\"gh-pages\\":\\"^2.0.1\\",\\"husky\\":\\"^4.2.3\\",\\"karma\\":\\"^6.1.1\\",\\"karma-chrome-launcher\\":\\"^3.1.0\\",\\"karma-firefox-launcher\\":\\"^1.3.0\\",\\"karma-mocha\\":\\"^1.3.0\\",\\"karma-spec-reporter\\":\\"0.0.32\\",\\"karma-webpack\\":\\"^4.0.2\\",\\"lint-staged\\":\\"^10.0.8\\",\\"mocha\\":\\"^7.1.0\\",\\"postcss-import\\":\\"^11.0.0\\",\\"postcss-loader\\":\\"^2.0.8\\",\\"postcss-url\\":\\"^7.2.1\\",\\"prettier\\":\\"1.17.0\\",\\"raw-loader\\":\\"^1.0.0\\",\\"rename-output-webpack-plugin\\":\\"^1.0.1\\",\\"uglify-es\\":\\"github:mishoo/UglifyJS2#harmony\\",\\"uglify-js\\":\\"^2.8.29\\",\\"url-loader\\":\\"^1.1.2\\",\\"webpack\\":\\"^4.42.0\\",\\"webpack-bundle-analyzer\\":\\"^3.7.0\\",\\"webpack-cli\\":\\"^3.3.6\\",\\"webpack-dev-server\\":\\"^3.1.1\\",\\"worker-loader\\":\\"^2.0.0\\"},\\"eslintConfig\\":{\\"root\\":true,\\"env\\":{\\"browser\\":true,\\"node\\":true,\\"es6\\":true},\\"extends\\":[\\"eslint:recommended\\"],\\"rules\\":{\\"no-console\\":\\"off\\",\\"no-debugger\\":\\"off\\",\\"no-empty\\":[\\"error\\",{\\"allowEmptyCatch\\":true}]},\\"parserOptions\\":{\\"parser\\":\\"babel-eslint\\",\\"ecmaVersion\\":2017,\\"sourceType\\":\\"module\\",\\"ecmaFeatures\\":{\\"modules\\":true}}},\\"prettier\\":{\\"trailingComma\\":\\"es5\\"},\\"postcss\\":{\\"plugins\\":{\\"autoprefixer\\":{}}},\\"browserslist\\":[\\"> 1%\\",\\"last 2 versions\\",\\"not ie <= 8\\"],\\"husky\\":{\\"hooks\\":{\\"pre-commit\\":\\"lint-staged\\"}},\\"lint-staged\\":{\\"{src,tests}/**/**}\\":\\"prettier --write\\"}}");\n\n//# sourceURL=webpack://%5Bname%5D/./package.json?'
              );
            },
            './src/imjoyBasicApp.js': function (
              module,
              __webpack_exports__,
              __webpack_require__
            ) {
              'use strict';
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectScript", function() { return injectScript; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyBasicApp", function() { return loadImJoyBasicApp; });\n/* harmony import */ var _imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imjoyBasicApp.template.css */ "./src/imjoyBasicApp.template.css");\n/* harmony import */ var _imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imjoyBasicApp.template.html */ "./src/imjoyBasicApp.template.html");\n/* harmony import */ var _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imjoyBasicAppMenu.template.html */ "./src/imjoyBasicAppMenu.template.html");\n/* harmony import */ var _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imjoyBasicAppWindows.template.html */ "./src/imjoyBasicAppWindows.template.html");\n/* harmony import */ var _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction injectScript(src) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement("script");\n    script.src = src;\n    script.addEventListener("load", resolve);\n    script.addEventListener("error", () => {\n      document.head.removeChild(script);\n      reject("Error loading script: " + src);\n    });\n    script.addEventListener("abort", () => reject("Script loading aborted."));\n    document.head.appendChild(script);\n  });\n}\n\nfunction getUrlParameter(name) {\n  name = name.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");\n  var regex = new RegExp("[\\\\?&]" + name + "=([^&#]*)");\n  var results = regex.exec(location.search);\n  return results === null ? "" : decodeURIComponent(results[1].replace(/\\+/g, " "));\n}\n\nfunction loadCss(url) {\n  const fileref = document.createElement("link");\n  fileref.setAttribute("rel", "stylesheet");\n  fileref.setAttribute("type", "text/css");\n  fileref.setAttribute("href", url);\n  document.getElementsByTagName("head")[0].appendChild(fileref);\n}\n\nasync function loadImJoyBasicApp(config) {\n  await injectScript("https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js");\n  await injectScript("https://imjoy-team.github.io/vue-js-modal/index.js");\n  loadCss("https://imjoy-team.github.io/vue-js-modal/styles.css");\n  await injectScript("https://cdn.jsdelivr.net/npm/@oeway/vue-window@2.4.1-a/lib/index.js");\n  config = config || {};\n  let app;\n  const imjoy_api = {\n    showDialog(plugin, cfg, extra_cfg) {\n      extra_cfg = extra_cfg || {};\n      extra_cfg.dialog = true;\n      return imjoy.pm.createWindow(plugin, cfg, extra_cfg);\n    },\n\n    createWindow(plugin, cfg, extra_cfg) {\n      extra_cfg = extra_cfg || {};\n      if (!config.window_manager_container) extra_cfg.dialog = true;\n      return imjoy.pm.createWindow(plugin, cfg, extra_cfg);\n    },\n\n    showSnackbar(plugin, msg, duration) {\n      app.showSnackbar(msg, duration);\n    },\n\n    showMessage(plugin, msg) {\n      app.showSnackbar(msg, 5);\n    },\n\n    showStatus(plugin, msg) {\n      app.showSnackbar(msg, 5);\n    },\n\n    showProgress(plugin, progress) {\n      progress = progress || 0;\n      if (progress < 1) progress = progress * 100;\n      app.progress = progress;\n      app.$forceUpdate();\n    }\n\n  };\n\n  if (config.imjoy_api) {\n    for (let k of Object.keys(config.imjoy_api)) {\n      imjoy_api[k] = config.imjoy_api[k];\n    }\n  }\n\n  const imjoyCore = await loadImJoyCore(config);\n  const imjoy = new imjoyCore.ImJoy({\n    imjoy_api\n  });\n  await imjoy.start(config);\n  console.log("ImJoy Core started successfully!");\n  Vue.use(window["vue-js-modal"].default);\n  Vue.use(window.VueWindow);\n  let elem;\n\n  if (config.main_container) {\n    if (typeof config.main_container === "string") elem = document.getElementById(config.main_container);else elem = config.main_container;\n  } else {\n    elem = document.createElement("div");\n    document.body.appendChild(elem);\n  }\n\n  elem.style.visibility = "hidden";\n  elem.innerHTML = _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n  document.head.insertAdjacentHTML("beforeend", `<style>${_imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>`);\n  let windowManager;\n\n  if (config.window_manager_container) {\n    let windowsElem;\n    if (typeof config.window_manager_container === "string") windowsElem = document.getElementById(config.window_manager_container);else windowsElem = config.window_manager_container;\n    windowsElem.innerHTML = _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3___default.a;\n    windowManager = new Vue({\n      el: windowsElem,\n      data: {\n        type: config.window_manager_type || "standard",\n        windowSizePosChanging: false,\n        windowStyle: config.window_style || {},\n        showEmpty: config.show_empty_window || false,\n        showWindowTitle: config.show_window_title || false,\n        windows: [],\n        activeWindow: null\n      },\n      watch: {\n        windowSizePosChanging: function (newVal) {\n          app.$emit("window-size-pos-changing", newVal);\n        }\n      },\n      methods: {\n        closeWindow(w) {\n          this.windowSizePosChanging = false;\n          w.hidden = true;\n          this.$forceUpdate();\n          w.close();\n        }\n\n      }\n    });\n  }\n\n  let menuManager;\n\n  if (config.menu_container) {\n    let menuElem;\n    if (typeof config.menu_container === "string") menuElem = document.getElementById(config.menu_container);else menuElem = config.menu_container;\n    menuElem.innerHTML = _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2___default.a;\n    menuElem.style.minHeight = "30px";\n    menuManager = new Vue({\n      el: menuElem,\n      data: {\n        menuPos: config.menu_pos || "right",\n        menuStyle: config.menu_style || {\n          "z-index": 999\n        },\n        activeWindow: null,\n        closeWindow: null,\n        showAboutImJoy: null,\n        extraMenuItems: [],\n        loadedPlugins: [],\n        allWindows: [],\n        showContent: true\n      },\n\n      mounted() {\n        this.menuStyle = this.menuStyle || {};\n        this.menuStyle.float = this.menuPos === "left" ? "left" : "right";\n      },\n\n      methods: {\n        menuClicked() {\n          // force closing the menu for touch screen devices\n          this.showContent = false;\n          this.$forceUpdate();\n          setTimeout(() => {\n            this.showContent = true;\n            this.$forceUpdate();\n          }, 0);\n        }\n\n      }\n    });\n  }\n\n  app = new Vue({\n    el: elem,\n    data: {\n      dialogWindows: [],\n      selectedDialogWindow: null,\n      selectedWindowsStack: [],\n      selectedRegularWindow: null,\n      fullscreen: false,\n      loading: false,\n      snackBarContent: false,\n      snackBarTimer: null,\n      progress: 0,\n      loadedPlugins: [],\n      allWindows: [],\n      extraMenuItems: [],\n      showProgressBar: config.show_progress_bar,\n      showLoader: config.show_loader,\n      showWindows: config.show_windows\n    },\n\n    mounted() {\n      this.$el.style.visibility = "visible";\n      imjoy.event_bus.on("close_window", w => {\n        this.closeWindow(w);\n        this.$forceUpdate();\n      });\n      imjoy.event_bus.on("add_window", w => {\n        this.allWindows.push(w);\n        this.addWindow(w);\n      });\n      this.imjoy = imjoy;\n\n      if (config.process_url_query) {\n        this.processURLQuery();\n      }\n\n      if (menuManager) {\n        menuManager.closeWindow = w => {\n          this.closeWindow(w);\n        };\n\n        if (!config.hide_about_imjoy) {\n          menuManager.showAboutImJoy = () => {\n            imjoy.api.showDialog({\n              src: "https://imjoy.io/docs/",\n              passive: true\n            });\n          };\n        }\n      }\n    },\n\n    computed: {\n      regularWindows: function () {\n        return this.allWindows.filter(w => !this.dialogWindows.includes(w) && !w.inline);\n      }\n    },\n    watch: {\n      regularWindows: function (newVal) {\n        if (windowManager) {\n          windowManager.windows = newVal;\n          windowManager.$forceUpdate();\n        }\n      },\n      selectedRegularWindow: function (newVal) {\n        if (windowManager) {\n          windowManager.activeWindow = newVal;\n          windowManager.$forceUpdate();\n        }\n\n        if (menuManager && config.window_manager_type === "simple") {\n          menuManager.activeWindow = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      extraMenuItems: function (newVal) {\n        if (menuManager) {\n          menuManager.extraMenuItems = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      allWindows: function (newVal) {\n        if (menuManager) {\n          menuManager.allWindows = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      loadedPlugins: function (newVal) {\n        if (menuManager) {\n          menuManager.loadedPlugins = newVal;\n          menuManager.$forceUpdate();\n        }\n      }\n    },\n    methods: {\n      async processURLQuery() {\n        const engine = getUrlParameter("engine");\n        const p = getUrlParameter("plugin") || getUrlParameter("p");\n        const binder = getUrlParameter("binder");\n\n        if (engine) {\n          const token = getUrlParameter("token");\n          const name = getUrlParameter("name");\n          await this.setupPluginEngine(engine, token, name);\n        }\n\n        if (binder) {\n          const name = getUrlParameter("name");\n          const spec = getUrlParameter("spec");\n          await this.setupBinderEngine(binder, spec, name);\n        }\n\n        if (p) {\n          this.loadPlugin(p).then(plugin => {\n            let config = {},\n                data = {},\n                tmp;\n            tmp = getUrlParameter("data");\n            if (tmp) data = JSON.parse(tmp);\n            tmp = getUrlParameter("config");\n            if (tmp) config = JSON.parse(tmp);\n            this.runPlugin(plugin, config, data);\n          });\n        }\n      },\n\n      async runPlugin(plugin, config, data) {\n        if (!config && plugin.config.ui && plugin.config.ui.indexOf("{") > -1) {\n          config = await imjoy.pm.imjoy_api.showDialog(plugin, plugin.config);\n        }\n\n        data = data || {};\n        return await plugin.api.run({\n          config: config,\n          data: data\n        });\n      },\n\n      async setupPluginEngine(engine, token, name) {\n        try {\n          console.log("Loading Jupyter-Engine-Manager from Gist...");\n\n          if (!imjoy.em.getFactory("Jupyter-Engine")) {\n            await imjoy.pm.reloadPluginRecursively({\n              uri: "https://imjoy-team.github.io/jupyter-engine-manager/Jupyter-Engine-Manager.imjoy.html"\n            });\n            console.log("Jupyter-Engine-Manager loaded.");\n            await imjoy.em.unregister("https://mybinder.org");\n          }\n\n          const factory = imjoy.em.getFactory("Jupyter-Engine");\n          await factory.addEngine({\n            name: name,\n            url: engine,\n            nbUrl: engine + "?token=" + token\n          });\n          console.log("plugin engine added:", engine);\n        } catch (e) {\n          console.error(e);\n          alert(`Failed to connect to the engine: ${e}`);\n        }\n      },\n\n      async setupBinderEngine(url, spec, name) {\n        try {\n          console.log("Loading Jupyter-Engine-Manager from Gist...");\n\n          if (!imjoy.em.getFactory("MyBinder-Engine")) {\n            await imjoy.pm.reloadPluginRecursively({\n              uri: "https://imjoy-team.github.io/jupyter-engine-manager/Jupyter-Engine-Manager.imjoy.html"\n            });\n            console.log("Jupyter-Engine-Manager loaded.");\n            await imjoy.em.unregister("https://mybinder.org");\n          }\n\n          const factory = imjoy.em.getFactory("MyBinder-Engine");\n          await factory.addEngine({\n            name,\n            spec,\n            url\n          });\n          console.log("Binder engine added:", url);\n        } catch (e) {\n          console.error(e);\n          alert(`Failed to connect to the engine: ${e}`);\n        }\n      },\n\n      async loadPlugin(uri) {\n        try {\n          this.loading = true;\n          const p = await imjoy.pm.reloadPluginRecursively({\n            uri\n          });\n          this.loadedPlugins.push(p);\n          this.showSnackbar(`Plugin ${p.name} successfully loaded.`);\n          return p;\n        } finally {\n          this.loading = false;\n        }\n      },\n\n      addMenuItem(config) {\n        this.extraMenuItems.push(config);\n        this.$forceUpdate();\n      },\n\n      removeMenuItem(label) {\n        const item = this.extraMenuItems.filter(it => it.label === label)[0];\n        const idx = this.extraMenuItems.indexOf(item);\n        if (idx >= 0) this.extraMenuItems.splice(idx, 1);\n      },\n\n      showSnackbar(msg, duration) {\n        if (this.snackBarTimer) clearTimeout(this.snackBarTimer);\n        duration = duration || 3;\n        this.snackBarContent = msg;\n        this.$forceUpdate();\n        this.snackBarTimer = setTimeout(() => {\n          this.snackBarContent = null;\n          this.snackBarTimer = null;\n          this.$forceUpdate();\n        }, duration * 1000);\n      },\n\n      showLoader(loading) {\n        this.loading = loading;\n        this.$forceUpdate();\n      },\n\n      addWindow(w) {\n        w.api = w.api || {};\n        const windowElm = document.getElementById(w.window_id);\n\n        if (windowElm) {\n          if (w.window_style) Object.assign(windowElm.style, w.window_style);\n          w.inline = true;\n\n          w.api.show = w.show = () => {\n            windowElm.scrollIntoView();\n          };\n\n          return;\n        }\n\n        if (!w.dialog) {\n          this.selectedRegularWindow = w;\n          setTimeout(() => {\n            if (w.fullscreen || w.standalone) {\n              w.sizeState = "maximized";\n            } else {\n              w.sizeState = "normal";\n            }\n\n            this.$forceUpdate();\n          }, 0);\n          const self = this;\n\n          w.api.show = w.show = () => {\n            w.sizeState = "restore";\n            self.selectedRegularWindow = w;\n            self.$forceUpdate();\n            imjoy.wm.selectWindow(w);\n            w.api.emit("show");\n          };\n        } else {\n          this.dialogWindows.push(w);\n\n          if (this.selectedDialogWindow) {\n            this.selectedWindowsStack.push(this.selectedDialogWindow);\n          }\n\n          this.selectedDialogWindow = w;\n          if (w.fullscreen || w.standalone) this.fullscreen = true;else this.fullscreen = false;\n          this.$modal.show("window-modal-dialog");\n          this.$forceUpdate();\n\n          w.api.show = w.show = () => {\n            this.selectedDialogWindow = w;\n            this.$modal.show("window-modal-dialog");\n            imjoy.wm.selectWindow(w);\n            w.api.emit("show");\n          };\n\n          w.api.hide = w.hide = () => {\n            if (this.selectedDialogWindow === w) {\n              this.$modal.hide("window-modal-dialog");\n            }\n\n            w.api.emit("hide");\n          };\n\n          setTimeout(() => {\n            try {\n              w.show();\n            } catch (e) {\n              console.error(e);\n            }\n          }, 500);\n        }\n      },\n\n      showWindow(w) {\n        if (w.fullscreen || w.standalone) this.fullscreen = true;else this.fullscreen = false;\n        if (w) this.selectedDialogWindow = w;\n        this.$modal.show("window-modal-dialog");\n      },\n\n      closeWindow(w) {\n        let idx = this.dialogWindows.indexOf(w);\n        if (idx >= 0) this.dialogWindows.splice(idx, 1);\n        idx = this.allWindows.indexOf(w);\n        if (idx >= 0) this.allWindows.splice(idx, 1);\n\n        if (w === this.selectedDialogWindow) {\n          this.selectedDialogWindow = this.selectedWindowsStack.pop();\n        }\n\n        if (!this.selectedDialogWindow) this.$modal.hide("window-modal-dialog");\n\n        if (w === this.selectedRegularWindow) {\n          if (this.regularWindows.length > 0) this.selectedRegularWindow = this.regularWindows[this.regularWindows.length - 1] || null;else this.selectedRegularWindow = null;\n        }\n\n        this.$forceUpdate();\n      },\n\n      minimizeWindow() {\n        this.$modal.hide("window-modal-dialog");\n      },\n\n      maximizeWindow() {\n        this.fullscreen = !this.fullscreen;\n      }\n\n    }\n  });\n  return app;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.js?'
              );
            },
            './src/imjoyBasicApp.template.css': function (module, exports) {
              eval(
                'module.exports = ".vm--modal {\\n  max-height: 100% !important;\\n  max-width: 100% !important;\\n}\\n\\n.imjoy-inline-window {\\n  width: 100%;\\n  height: 600px;\\n}\\n\\n.imjoy-progress-border > div {\\n  background-color: #448aff;\\n  height: 3px;\\n}\\n\\n.imjoy-progress-border {\\n  top: 0;\\n  left: 0;\\n  position: absolute;\\n  width: 100%;\\n  height: 3px;\\n}\\n\\n.imjoy-noselect {\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\nbody {\\n  margin: 0px;\\n}\\n.imjoy-dialog-control {\\n  padding: 0px;\\n  line-height: 10px;\\n  height: 23px;\\n  width: 25px;\\n  border: 0px;\\n  font-size: 1rem;\\n  position: absolute;\\n  color: white;\\n  top: 1px;\\n}\\n\\n.imjoy-dialog-control:focus {\\n  outline: none;\\n}\\n\\n.imjoy-loader {\\n  position: fixed;\\n  top: 40%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  transform: -webkit-translate(-50%, -50%);\\n  transform: -moz-translate(-50%, -50%);\\n  transform: -ms-translate(-50%, -50%);\\n  border: 10px solid #f3f3f3;\\n  /* Light grey */\\n  border-top: 10px solid #448aff;\\n  /* Blue */\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px;\\n  animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/* The snackbar - position it at the bottom and in the middle of the screen */\\n.imjoy-snackbar {\\n  font-family: Arial, Helvetica, sans-serif;\\n  visibility: hidden;\\n  /* Hidden by default. Visible on click */\\n  min-width: 250px;\\n  /* Set a default minimum width */\\n  background-color: #333333c2;\\n  /* Black background color */\\n  color: #fff;\\n  /* White text color */\\n  text-align: center;\\n  /* Centered text */\\n  border-radius: 5px;\\n  /* Rounded borders */\\n  padding: 16px;\\n  /* Padding */\\n  position: fixed;\\n  /* Sit on top of the screen */\\n  z-index: 9999;\\n  /* Add a z-index if needed */\\n  left: 50%;\\n  /* Center the snackbar */\\n  transform: translate(-50%, 0);\\n  bottom: 20px;\\n  /* 20px from the bottom */\\n}\\n\\n.imjoy-window-title-bar {\\n  cursor: move;\\n  background-color: #448aff;\\n  color: white;\\n  text-align: center;\\n  height: 24px;\\n}\\n\\n.imjoy-window-title {\\n  text-align: center;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 16px;\\n  line-height: 23px;\\n  margin: 0px;\\n}\\n\\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\\n.imjoy-snackbar.show-snackbar {\\n  visibility: visible;\\n  /* Show the snackbar */\\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\\n  However, delay the fade out process for 2.5 seconds */\\n  -webkit-animation: imjoy-fadein 0.5s;\\n  animation: imjoy-fadein 0.5s;\\n}\\n\\n/* Animations to fade the snackbar in and out */\\n@-webkit-keyframes imjoy-fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes imjoy-fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n.imjoy-dropdown-btn {\\n  padding: 4px;\\n  font-size: 16px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.imjoy-dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.imjoy-dropdown-content {\\n  display: none;\\n  position: absolute;\\n  right: 0;\\n  background-color: #f9f9f9;\\n  min-width: 200px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n}\\n\\n.imjoy-dropdown-content a {\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: black;\\n  padding: 6px 10px;\\n  text-decoration: none;\\n  display: block;\\n}\\n\\n.imjoy-dropdown-content a:hover {\\n  background-color: #f1f1f1;\\n}\\n\\n.imjoy-dropdown:hover .imjoy-dropdown-content {\\n  display: block;\\n}\\n\\n.imjoy-window-container {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.imjoy-windows {\\n  position: relative;\\n  min-height: 100px;\\n  height: calc(100% - 30px);\\n}\\n\\n.block-pointer-events {\\n  pointer-events: none;\\n}\\n"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.template.css?'
              );
            },
            './src/imjoyBasicApp.template.html': function (module, exports) {
              eval(
                'module.exports = "<div v-if=\\"showLoader\\" class=\\"imjoy-loader\\" v-show=\\"loading\\"></div>\\n<div v-if=\\"showProgressBar\\" class=\\"imjoy-progress-border\\" v-show=\\"progress\\">\\n  <div :style=\\"{width: progress+\'%\'}\\"></div>\\n</div>\\n<div\\n  v-show=\\"snackBarContent\\"\\n  :class=\\"{\'show-snackbar\': snackBarContent}\\"\\n  class=\\"imjoy-snackbar\\"\\n>\\n  {{snackBarContent}}\\n</div>\\n<modal\\n  name=\\"window-modal-dialog\\"\\n  height=\\"500px\\"\\n  style=\\"max-height: 100%; max-width: 100%\\"\\n  :fullscreen=\\"fullscreen\\"\\n  :resizable=\\"true\\"\\n  draggable=\\".imjoy-drag-handle\\"\\n  :scrollable=\\"true\\"\\n>\\n  <div\\n    v-if=\\"selectedDialogWindow\\"\\n    @dblclick=\\"maximizeWindow()\\"\\n    class=\\"imjoy-drag-handle imjoy-window-title-bar\\"\\n  >\\n    <span class=\\"imjoy-noselect imjoy-window-title\\"\\n      >{{ selectedDialogWindow.name}}</span\\n    >\\n    <button\\n      @click=\\"closeWindow(selectedDialogWindow)\\"\\n      class=\\"imjoy-noselect imjoy-dialog-control\\"\\n      style=\\"background:#ff0000c4;left:1px;\\"\\n    >\\n      x\\n    </button>\\n    <button\\n      @click=\\"minimizeWindow()\\"\\n      class=\\"imjoy-noselect imjoy-dialog-control\\"\\n      style=\\"background:#00cdff61;left:28px;\\"\\n    >\\n      -\\n    </button>\\n    <button\\n      @click=\\"maximizeWindow()\\"\\n      class=\\"imjoy-noselect imjoy-dialog-control\\"\\n      style=\\"background:#00cdff61;left:55px;\\"\\n    >\\n      {{fullscreen?\'=\': \'+\'}}\\n    </button>\\n  </div>\\n  <template v-for=\\"wdialog in dialogWindows\\">\\n    <div\\n      :key=\\"wdialog.window_id\\"\\n      v-show=\\"wdialog === selectedDialogWindow\\"\\n      style=\\"height: calc(100% - 18px);\\"\\n    >\\n      <div :id=\\"wdialog.window_id\\" style=\\"width: 100%;height: 100%;\\"></div>\\n    </div>\\n  </template>\\n</modal>\\n"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.template.html?'
              );
            },
            './src/imjoyBasicAppMenu.template.html': function (
              module,
              exports
            ) {
              eval(
                'module.exports = "<div class=\\"imjoy-dropdown\\" :style=\\"menuStyle\\">\\n  <a class=\\"imjoy-dropdown-btn\\"\\n    ><img\\n      style=\\"width:24px;\\"\\n      src=\\"https://imjoy.io/static/img/imjoy-icon.svg\\"\\n    />\\n  </a>\\n  <div\\n    class=\\"imjoy-dropdown-content\\"\\n    v-if=\\"showContent\\"\\n    @click=\\"menuClicked\\"\\n    :style=\\"{left: menuPos===\'left\'? 0: null}\\"\\n  >\\n    <a\\n      href=\\"#\\"\\n      v-for=\\"item in extraMenuItems\\"\\n      :key=\\"item.label\\"\\n      @click.prevent=\\"item.callback()\\"\\n      >{{item.label}}</a\\n    >\\n    <hr\\n      style=\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\"\\n      v-show=\\"extraMenuItems.length>0 && loadedPlugins.length>0\\"\\n    />\\n    <a\\n      href=\\"#\\"\\n      v-for=\\"p in loadedPlugins\\"\\n      :key=\\"p.id\\"\\n      @click.prevent=\\"p.api.run()\\"\\n      >🧩 {{p.name}}</a\\n    >\\n    <hr\\n      style=\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\"\\n      v-show=\\"allWindows.length>0 && loadedPlugins.length>0\\"\\n    />\\n    <a href=\\"#\\" v-if=\\"showAboutImJoy\\" @click.prevent=\\"showAboutImJoy()\\"\\n      >ℹ️ About ImJoy</a\\n    >\\n    <hr\\n      style=\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\"\\n      v-show=\\"allWindows.length>0 && loadedPlugins.length>0\\"\\n    />\\n    <a\\n      href=\\"#\\"\\n      v-for=\\"w in allWindows\\"\\n      :style=\\"{\'background-color\': activeWindow===w?\'#adcafb78\':\'\', \'font-weight\': activeWindow===w? 600:300}\\"\\n      :key=\\"w.id\\"\\n      @click.prevent=\\"w.api.show()\\"\\n      >🔳 {{w.name}}</a\\n    >\\n    <a\\n      href=\\"#\\"\\n      v-if=\\"activeWindow && closeWindow\\"\\n      @click.prevent=\\"closeWindow(activeWindow)\\"\\n      >❌ Close Window</a\\n    >\\n  </div>\\n</div>\\n"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicAppMenu.template.html?'
              );
            },
            './src/imjoyBasicAppWindows.template.html': function (
              module,
              exports
            ) {
              eval(
                'module.exports = "<template v-if=\\"type===\'standard\'\\">\\n  <hsc-window-style-material>\\n    <hsc-window\\n      v-for=\\"w in windows\\"\\n      :key=\\"w.id\\"\\n      v-show=\\"!w.hidden\\"\\n      :title=\\"w.name\\"\\n      :minimize-style=\\"{display: \'none\'}\\"\\n      :close-button=\\"!w.disable_close\\"\\n      @close=\\"closeWindow(w)\\"\\n      :size-state.sync=\\"w.sizeState\\"\\n      :maximize-button=\\"true\\"\\n      :resizable=\\"true\\"\\n      :width=\\"w.w*30\\"\\n      :height=\\"w.h*30\\"\\n      :resizable=\\"true\\"\\n      @resize-start=\\"windowSizePosChanging = true\\"\\n      @resize-end=\\"windowSizePosChanging = false\\"\\n      @move-start=\\"windowSizePosChanging = true\\"\\n      @move-end=\\"windowSizePosChanging = false\\"\\n    >\\n      <div\\n        :class=\\"{\'block-pointer-events\': windowSizePosChanging }\\"\\n        :id=\\"w.window_id\\"\\n        class=\\"imjoy-window-container\\"\\n      ></div>\\n    </hsc-window>\\n  </hsc-window-style-material>\\n</template>\\n<template v-else>\\n  <div\\n    v-for=\\"w in windows\\"\\n    v-show=\\"w === activeWindow\\"\\n    :key=\\"w.id\\"\\n    class=\\"imjoy-windows\\"\\n    :style=\\"windowStyle\\"\\n  >\\n    <div\\n      v-if=\\"showWindowTitle\\"\\n      style=\\"text-align: center;height:24px; background: #cacaca66;\\"\\n    >\\n      <span\\n        style=\\"font-size:1rem;font-family: Arial, Helvetica, sans-serif;line-height: 24px;\\"\\n        >{{ w.name }}</span\\n      >\\n    </div>\\n    <div\\n      :id=\\"w.window_id\\"\\n      class=\\"imjoy-window-container\\"\\n      :style=\\"{height: showWindowTitle?\'calc(100% - 24px)\': \'100%\'}\\"\\n    ></div>\\n  </div>\\n</template>\\n<div\\n  v-if=\\"showEmpty && (!activeWindow || windows.length <= 0)\\"\\n  class=\\"imjoy-windows\\"\\n  :style=\\"windowStyle\\"\\n>\\n  <img\\n    style=\\"width:80px; position:absolute; left:50%; top: 50%; transform: translate(-50%, -50%);\\"\\n    src=\\"https://imjoy.io/static/img/imjoy-icon.svg\\"\\n  />\\n</div>\\n"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicAppWindows.template.html?'
              );
            },
            './src/imjoyLoader.js': function (
              module,
              __webpack_exports__,
              __webpack_require__
            ) {
              'use strict';
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyCore", function() { return loadImJoyCore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latest_rpc_version", function() { return latest_rpc_version; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyRPC", function() { return loadImJoyRPC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyRPCSocketIO", function() { return loadImJoyRPCSocketIO; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);\n/* harmony import */ var _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imjoyBasicApp.js */ "./src/imjoyBasicApp.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadImJoyBasicApp", function() { return _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["loadImJoyBasicApp"]; });\n\n\n\n/**\n * Get the URL parameters\n * source: https://css-tricks.com/snippets/javascript/get-url-variables/\n * @param  {String} url The URL\n * @return {Object}     The URL parameters\n */\n\nvar _getParams = function (url) {\n  var params = {};\n  var parser = document.createElement("a");\n  parser.href = url;\n  var query = parser.search.substring(1);\n  var vars = query.split("&");\n\n  for (var i = 0; i < vars.length; i++) {\n    var pair = vars[i].split("=");\n    params[pair[0]] = decodeURIComponent(pair[1]);\n  }\n\n  return params;\n}; // Load the imjoy core script\n// it support the following options:\n// 1) version, you can specify a specific version of the core,\n// for example `version: "0.11.13"` or `version: "latest"`\n// 2) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 3) base_url, the url for loading the core library\n\n\nfunction loadImJoyCore(config) {\n  config = config || {}; // eslint-disable-next-line no-async-promise-executor\n\n  return new Promise(async (resolve, reject) => {\n    try {\n      var baseUrl = config.base_url;\n\n      if (!baseUrl) {\n        const version = config.version || "latest";\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-core@${version}/dist/`;\n      }\n\n      delete window.imjoyCore;\n\n      if (config.debug) {\n        await Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["injectScript"])(baseUrl + "imjoy-core.js");\n      } else {\n        await Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["injectScript"])(baseUrl + "imjoy-core.min.js");\n      }\n\n      if (window.imjoyCore) {\n        const imjoyCore = window.imjoyCore;\n        delete window.imjoyCore;\n        resolve(imjoyCore);\n      } else if (typeof define === "function" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) eval("require")(["imjoyCore"], resolve);else reject("Failed to import imjoy-core.");\n    } catch (e) {\n      reject(e);\n    }\n  });\n}\nconst _rpc_registry = {}; // get version number from package.json\n\nconst latest_rpc_version = _package_json__WEBPACK_IMPORTED_MODULE_0__["dependencies"]["imjoy-rpc"].replace(/[^\\d.-]/g, "");\nconst _rpc_api_versions = {\n  "0.2.0": {\n    from: "0.1.10",\n    to: "0.1.17",\n    skips: []\n  },\n  "0.2.1": {\n    from: "0.1.18",\n    to: "0.2.5",\n    skips: []\n  },\n  "0.2.2": {\n    from: "0.2.6",\n    to: "0.2.6",\n    skips: []\n  },\n  "0.2.3": {\n    from: "0.2.7",\n    to: latest_rpc_version,\n    skips: ["0.2.9", "0.2.15", "0.2.16", "0.2.18", "0.2.23", "0.2.24", "0.2.25"]\n  }\n}; // specify an api version and this function will return the actual imjoy-rpc version\n// if you set latestOnly to true, then it returns always the latest for the api version\n// otherwise, it will try to find a compatible version in the cached version.\n\nfunction findRPCVersionByAPIVersion(apiVersion, latestOnly) {\n  if (!apiVersion || !apiVersion.includes(".")) return;\n  let cached = Object.keys(_rpc_registry);\n\n  if (_rpc_api_versions[apiVersion]) {\n    if (cached.length <= 0 || latestOnly) {\n      return _rpc_api_versions[apiVersion].to;\n    } // see if we can find a compatible version in the cache\n    // sort the cached version\n\n\n    cached = (f => f(f(cached, 1).sort(), -1))((cached, v) => cached.map(a => a.replace(/\\d+/g, n => +n + v * 100000)));\n\n    for (let c of cached.reverse()) {\n      if (_rpc_registry[c].API_VERSION === apiVersion) return c;\n    }\n\n    return _rpc_api_versions[apiVersion].to;\n  } else {\n    return null;\n  }\n} // Load the script for a plugin to communicate with imjoy-rpc\n// This should only be called when the window is inside the iframe\n// it support the following options:\n// 1) version, you can specify a specific version of the imjoy-rpc,\n// for example `version: "0.11.13"` or `version: "latest"`\n// 2) api_version, specify the api version of the imjoy-rpc\n// 3) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 4) base_url, the url for loading the rpc library\n\n\nfunction loadImJoyRPC(config) {\n  config = config || {};\n  return new Promise((resolve, reject) => {\n    var baseUrl = config.base_url;\n    let version = config.version;\n\n    if (!baseUrl) {\n      if (config.version) {\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${config.version}/dist/`;\n      } else {\n        if (config.api_version) {\n          // find the latest version for this api_version\n          version = findRPCVersionByAPIVersion(config.api_version, true);\n\n          if (version) {\n            baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${version}/dist/`;\n          } else {\n            reject(Error(`Cannot find a version of imjoy-rpc that supports api v${config.api_version}`));\n            return;\n          }\n        } else {\n          baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@latest/dist/`;\n          version = "latest";\n          console.info(`Using imjoy-rpc library from ${baseUrl}.`);\n        }\n      }\n    }\n\n    if (version && _rpc_registry[version]) {\n      console.info(`Using cached imjoy-rpc library v${version}.`);\n      resolve(_rpc_registry[version]);\n      return;\n    }\n\n    let rpc_url = baseUrl + "imjoy-rpc.min.js";\n\n    if (config.debug) {\n      rpc_url = baseUrl + "imjoy-rpc.js";\n    }\n\n    function checkAndCacheLib(imjoyRPC) {\n      if (version && version !== "latest" && version !== imjoyRPC.VERSION) {\n        throw new Error(`imjoy-rpc version mismatch ${version} != ${imjoyRPC.VERSION}`);\n      }\n\n      if (config.api_version && config.api_version !== imjoyRPC.API_VERSION) {\n        throw new Error(`imjoy-rpc api version mismatch ${config.api_version} != ${imjoyRPC.API_VERSION}`);\n      }\n\n      _rpc_registry[imjoyRPC.VERSION] = imjoyRPC;\n    }\n\n    delete window.imjoyRPC;\n    Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["injectScript"])(rpc_url).then(() => {\n      if (window.imjoyRPC) {\n        const imjoyRPC = window.imjoyRPC;\n        delete window.imjoyRPC;\n\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      } else if (typeof define === "function" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) eval("require")(["imjoyRPC"], imjoyRPC => {\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      });else {\n        reject("Failed to import imjoy-rpc.");\n        return;\n      }\n    }).catch(reject);\n  });\n}\nfunction loadImJoyRPCSocketIO(config) {\n  config = config || {};\n  return new Promise((resolve, reject) => {\n    var baseUrl = config.base_url;\n    let version = config.version;\n\n    if (!baseUrl) {\n      if (config.version) {\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc-socketio@${config.version}/dist/`;\n      } else {\n        if (config.api_version) {\n          // find the latest version for this api_version\n          version = findRPCVersionByAPIVersion(config.api_version, true);\n\n          if (version) {\n            baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc-socketio@${version}/dist/`;\n          } else {\n            reject(Error(`Cannot find a version of imjoy-rpc-socketio that supports api v${config.api_version}`));\n            return;\n          }\n        } else {\n          baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc-socketio@latest/dist/`;\n          version = "latest";\n          console.info(`Using imjoy-rpc-socketio library from ${baseUrl}.`);\n        }\n      }\n    }\n\n    let rpc_url = baseUrl + "imjoy-rpc-socketio.min.js";\n\n    if (config.debug) {\n      rpc_url = baseUrl + "imjoy-rpc-socketio.js";\n    }\n\n    delete window.imjoyRPCSocketIO;\n    Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["injectScript"])(rpc_url).then(() => {\n      if (window.imjoyRPCSocketIO) {\n        const imjoyRPCSocketIO = window.imjoyRPCSocketIO;\n        delete window.imjoyRPCSocketIO;\n        resolve(imjoyRPCSocketIO);\n      } else if (typeof define === "function" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) eval("require")(["imjoyRPCSocketIO"], resolve);else {\n        reject("Failed to import imjoy-rpc-socketio.");\n      }\n    }).catch(reject);\n  });\n}\n\nasync function loadImJoyRPCByQueryString() {\n  const urlParams = _getParams(window.location);\n\n  return await loadImJoyRPC(urlParams);\n}\n\n\nwindow.loadImJoyRPCByQueryString = loadImJoyRPCByQueryString;\nwindow.loadImJoyRPC = loadImJoyRPC;\nwindow.loadImJoyRPCSocketIO = loadImJoyRPCSocketIO;\nwindow.loadImJoyCore = loadImJoyCore;\nwindow.loadImJoyBasicApp = _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__["loadImJoyBasicApp"];\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyLoader.js?'
              );
            }
          });
        }),
        (module.exports = factory());
    },
    967: module => {
      var factory;
      window,
        (factory = function () {
          return (function (e) {
            var n = {};
            function t(r) {
              if (n[r]) return n[r].exports;
              var i = (n[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
              );
            }
            return (
              (t.m = e),
              (t.c = n),
              (t.d = function (e, n, r) {
                t.o(e, n) ||
                  Object.defineProperty(e, n, { enumerable: !0, get: r });
              }),
              (t.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (t.t = function (e, n) {
                if ((1 & n && (e = t(e)), 8 & n)) return e;
                if (4 & n && 'object' == typeof e && e && e.__esModule)
                  return e;
                var r = Object.create(null);
                if (
                  (t.r(r),
                  Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e
                  }),
                  2 & n && 'string' != typeof e)
                )
                  for (var i in e)
                    t.d(
                      r,
                      i,
                      function (n) {
                        return e[n];
                      }.bind(null, i)
                    );
                return r;
              }),
              (t.n = function (e) {
                var n =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return t.d(n, 'a', n), n;
              }),
              (t.o = function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
              }),
              (t.p = ''),
              t((t.s = './src/main.js'))
            );
          })({
            './node_modules/worker-loader/dist/workers/InlineWorker.js':
              function (e, n, t) {
                'use strict';
                var r = window.URL || window.webkitURL;
                e.exports = function (e, n) {
                  try {
                    try {
                      var t;
                      try {
                        (t = new (window.BlobBuilder ||
                          window.WebKitBlobBuilder ||
                          window.MozBlobBuilder ||
                          window.MSBlobBuilder)()).append(e),
                          (t = t.getBlob());
                      } catch (n) {
                        t = new Blob([e]);
                      }
                      return new Worker(r.createObjectURL(t));
                    } catch (n) {
                      return new Worker(
                        'data:application/javascript,' + encodeURIComponent(e)
                      );
                    }
                  } catch (e) {
                    if (!n) throw Error('Inline worker is not supported');
                    return new Worker(n);
                  }
                };
              },
            './package.json': function (e) {
              e.exports = JSON.parse(
                '{"name":"imjoy-rpc","version":"0.3.35","description":"Remote procedure calls for ImJoy.","module":"index.js","scripts":{"build":"rm -rf dist && npm run build-umd","build-umd":"webpack --config webpack.config.js --mode development && NODE_ENV=production webpack --config webpack.config.js --mode production --devtool source-map ","watch":"NODE_ENV=production webpack --watch --progress --config webpack.config.js --mode production --devtool source-map","publish-npm":"npm install && npm run build && npm publish","serve":"webpack-dev-server","stats":"webpack --profile --json > stats.json","stats-prod":"webpack --profile --json --mode production > stats-prod.json","analyze":"webpack-bundle-analyzer -p 9999 stats.json","analyze-prod":"webpack-bundle-analyzer -p 9999 stats-prod.json","clean":"rimraf dist/*","deploy":"npm run build && node deploy-site.js","format":"prettier --write \\"{src,tests}/**/**\\"","check-format":"prettier --check \\"{src,tests}/**/**\\"","test":"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js","test-watch":"karma start --auto-watch --browsers Chrome,FirefoxHeadless karma.conf.js --debug"},"repository":{"type":"git","url":"git+https://github.com/imjoy-team/imjoy-rpc.git"},"keywords":["imjoy","rpc"],"author":"imjoy-team <imjoy.team@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/imjoy-team/imjoy-rpc/issues"},"homepage":"https://github.com/imjoy-team/imjoy-rpc","dependencies":{"socket.io-client":"^4.0.1"},"devDependencies":{"@babel/core":"^7.0.0-beta.39","@babel/plugin-syntax-dynamic-import":"^7.0.0-beta.39","@babel/polyfill":"^7.0.0-beta.39","@babel/preset-env":"^7.0.0-beta.39","@types/requirejs":"^2.1.28","babel-core":"^6.26.0","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","babel-runtime":"^6.26.0","chai":"^4.2.0","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^5.0.5","eslint":"^6.8.0","eslint-config-prettier":"^4.2.0","eslint-loader":"^4.0.2","file-loader":"^0.11.2","fs-extra":"^0.30.0","gh-pages":"^2.0.1","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0","json-loader":"^0.5.4","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^1.3.0","karma-mocha":"^1.3.0","karma-spec-reporter":"0.0.32","karma-webpack":"^4.0.2","lerna":"^3.8.0","lodash.debounce":"^4.0.8","mocha":"^7.1.2","postcss":"^6.0.2","prettier":"^1.6.1","rimraf":"^2.6.2","schema-utils":"^0.4.3","style-loader":"^0.18.1","url-loader":"^0.5.9","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.3.2","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.1","webpack-merge":"^4.1.1","workbox-webpack-plugin":"^4.3.1","worker-loader":"^2.0.0","write-file-webpack-plugin":"^4.5.1"},"eslintConfig":{"globals":{"document":true,"window":true}}}'
              );
            },
            './src/main.js': function (e, n, t) {
              'use strict';
              t.r(n),
                t.d(n, 'waitForInitialization', function () {
                  return d;
                }),
                t.d(n, 'setupRPC', function () {
                  return _;
                });
              var r = t('./src/plugin.webworker.js'),
                i = t.n(r),
                o = t('./src/pluginIframe.js'),
                a = t('./src/utils.js');
              t.d(n, 'loadRequirements', function () {
                return a.loadRequirements;
              });
              var s = t('./src/rpc.js');
              t.d(n, 'RPC', function () {
                return s.RPC;
              }),
                t.d(n, 'API_VERSION', function () {
                  return s.API_VERSION;
                });
              var c = t('./package.json');
              function l() {
                try {
                  return window.self !== window.top;
                } catch (e) {
                  return !0;
                }
              }
              function d(e) {
                if (!l())
                  throw new Error(
                    'waitForInitialization (imjoy-rpc) should only run inside an iframe.'
                  );
                (e = e || {}).enable_service_worker &&
                  (Object(a.setupServiceWorker)(
                    e.base_url,
                    e.target_origin,
                    e.cache_requirements
                  ),
                  (e.enable_service_worker = !1)),
                  e.cache_requirements && delete e.cache_requirements;
                const n = e.target_origin || '*';
                if (
                  e.credential_required &&
                  'function' != typeof e.verify_credential
                )
                  throw new Error(
                    'Please also provide the `verify_credential` function with `credential_required`.'
                  );
                if (e.credential_required && '*' === n)
                  throw new Error(
                    '`target_origin` was set to `*` with `credential_required=true`, there is a security risk that you may leak the credential to website from other origin. Please specify the `target_origin` explicitly.'
                  );
                const t = Object(a.randId)(),
                  r = i => {
                    if ('message' === i.type && ('*' === n || i.origin === n)) {
                      if ('initialize' !== i.data.type)
                        throw new Error(`unrecognized message: ${i.data}`);
                      {
                        window.removeEventListener('message', r),
                          i.data.peer_id !== t &&
                            console.warn(
                              `${
                                i.data.config && i.data.config.name
                              }: connection peer id mismatch ${
                                i.data.peer_id
                              } !== ${t}`
                            );
                        const o = i.data.config;
                        '*' !== n && (o.target_origin = n),
                          e.credential_required
                            ? e.verify_credential(o.credential).then(e => {
                                if (!e || !e.auth || e.error)
                                  throw new Error(
                                    'Failed to verify the credentail:' +
                                      (e && e.error)
                                  );
                                (o.auth = e.auth),
                                  _(o).then(() => {
                                    console.log(
                                      'ImJoy RPC loaded successfully!'
                                    );
                                  });
                              })
                            : _(o).then(() => {
                                console.log('ImJoy RPC loaded successfully!');
                              });
                      }
                    }
                  };
                window.addEventListener('message', r),
                  parent.postMessage(
                    { type: 'imjoyRPCReady', config: e, peer_id: t },
                    '*'
                  );
              }
              function _(e) {
                return (
                  ((e = e || {}).name = e.name || Object(a.randId)()),
                  (e = Object(a.normalizeConfig)(e)).enable_service_worker &&
                    Object(a.setupServiceWorker)(
                      e.base_url,
                      e.target_origin,
                      e.cache_requirements
                    ),
                  e.cache_requirements && delete e.cache_requirements,
                  new Promise((n, t) => {
                    const r = t => {
                      const i = t.detail;
                      e.expose_api_globally && (globalThis.api = i),
                        n(i),
                        globalThis.removeEventListener(
                          'imjoy_remote_api_ready',
                          r
                        );
                    };
                    if (l()) {
                      if ('web-worker' === e.type)
                        try {
                          !(function (e) {
                            if (!e.allow_execution)
                              throw new Error(
                                'web-worker plugin can only work with allow_execution=true'
                              );
                            let n = null;
                            e.broadcastChannel &&
                              (n = new BroadcastChannel(e.broadcastChannel));
                            const t = new i.a(),
                              r = setTimeout(function () {
                                t.terminate(),
                                  console.warn(
                                    'Plugin failed to start as a web-worker, running in an iframe instead.'
                                  ),
                                  Object(o.default)(e);
                              }, 2e3),
                              s = Object(a.randId)();
                            t.addEventListener('message', function (i) {
                              let o;
                              const a = i.data;
                              if ('worker-ready' === a.type)
                                return (
                                  t.postMessage({
                                    type: 'connectRPC',
                                    config: e
                                  }),
                                  void clearTimeout(r)
                                );
                              'initialized' === a.type
                                ? ((a.config = Object.assign({}, e, a.config)),
                                  (a.origin = window.location.origin),
                                  (a.peer_id = s))
                                : 'imjoy_remote_api_ready' === a.type
                                  ? window.dispatchEvent(
                                      new CustomEvent(
                                        'imjoy_remote_api_ready',
                                        { detail: null }
                                      )
                                    )
                                  : 'cacheRequirements' === a.type &&
                                      'function' == typeof cache_requirements
                                    ? cache_requirements(a.requirements)
                                    : 'disconnect' === a.type
                                      ? t.terminate()
                                      : a.__transferables__ &&
                                        ((o = a.__transferables__),
                                        delete a.__transferables__),
                                n
                                  ? n.postMessage(a)
                                  : parent.postMessage(
                                      a,
                                      e.target_origin || '*',
                                      o
                                    );
                            }),
                              (n || window).addEventListener(
                                'message',
                                function (r) {
                                  if (
                                    'message' === r.type &&
                                    (n ||
                                      '*' === e.target_origin ||
                                      r.origin === e.target_origin)
                                  ) {
                                    let n;
                                    const i = r.data;
                                    i.__transferables__ &&
                                      ((n = i.__transferables__),
                                      delete i.__transferables__),
                                      i.peer_id === s
                                        ? t.postMessage(i, n)
                                        : e.debug &&
                                          console.log(
                                            `connection peer id mismatch ${i.peer_id} !== ${s}`
                                          );
                                  }
                                }
                              );
                          })(e);
                        } catch (n) {
                          Object(o.default)(e);
                        }
                      else {
                        if (
                          ![
                            'rpc-window',
                            'rpc-worker',
                            'iframe',
                            'window'
                          ].includes(e.type)
                        )
                          return (
                            console.error('Unsupported plugin type: ' + e.type),
                            void t('Unsupported plugin type: ' + e.type)
                          );
                        Object(o.default)(e);
                      }
                      globalThis.addEventListener('imjoy_remote_api_ready', r);
                    } else
                      t(
                        new Error('imjoy-rpc should only run inside an iframe.')
                      );
                  })
                );
              }
              t.d(n, 'VERSION', function () {
                return c.version;
              });
            },
            './src/plugin.webworker.js': function (e, n, t) {
              e.exports = function () {
                return t(
                  './node_modules/worker-loader/dist/workers/InlineWorker.js'
                )(
                  '/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== \'undefined\' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: \'Module\' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, \'__esModule\', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === \'object\' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, \'default\', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != \'string\') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module[\'default\']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, \'a\', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = "";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = "./src/plugin.webworker.js");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ "./src/plugin.webworker.js":\n/*!*********************************!*\\\n  !*** ./src/plugin.webworker.js ***!\n  \\*********************************/\n/*! no exports provided */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");\n/**\n * Contains the routines loaded by the plugin Worker under web-browser.\n *\n * Initializes the web environment version of the platform-dependent\n * connection object for the plugin site\n */\n\n\n\n\n// make sure this runs inside a webworker\nif (\n  typeof WorkerGlobalScope === "undefined" ||\n  !self ||\n  !(self instanceof WorkerGlobalScope)\n) {\n  throw new Error("This script can only loaded in a webworker");\n}\n\nasync function executeEsModule(content) {\n  const dataUri =\n    "data:text/javascript;charset=utf-8," + encodeURIComponent(content);\n  await import(/* webpackIgnore: true */ dataUri);\n}\n\n/**\n * Connection object provided to the RPC constructor,\n * plugin site implementation for the web-based environment.\n * Global will be then cleared to prevent exposure into the\n * Worker, so we put this local connection object into a closure\n */\nclass Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {\n  constructor(config) {\n    super(config && config.debug);\n    this.config = config || {};\n  }\n  connect() {\n    self.addEventListener("message", e => {\n      this._fire(e.data.type, e.data);\n    });\n    this.emit({\n      type: "initialized",\n      config: this.config\n    });\n  }\n  disconnect() {\n    this._fire("beforeDisconnect");\n    self.close();\n    this._fire("disconnected");\n  }\n  emit(data) {\n    let transferables = undefined;\n    if (data.__transferables__) {\n      transferables = data.__transferables__;\n      delete data.__transferables__;\n    }\n    self.postMessage(data, transferables);\n  }\n  async execute(code) {\n    if (code.type === "requirements") {\n      await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirementsInWebworker"])(code.requirements);\n    } else if (code.type === "script") {\n      try {\n        if (code.attrs.type === "module") {\n          await executeEsModule(code.content);\n        } else {\n          eval(code.content);\n        }\n      } catch (e) {\n        console.error(e.message, e.stack);\n        throw e;\n      }\n    } else {\n      throw "unsupported code type.";\n    }\n    if (code.type === "requirements") {\n      self.postMessage({\n        type: "cacheRequirements",\n        requirements: code.requirements\n      });\n    }\n  }\n}\nconst config = {\n  type: "web-worker",\n  dedicated_thread: true,\n  allow_execution: true,\n  lang: "javascript",\n  api_version: _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"]\n};\nconst conn = new Connection(config);\nconn.on("connectRPC", data => {\n  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(conn, Object.assign(data.config, config));\n});\nconn.connect();\nself.postMessage({\n  type: "worker-ready"\n});\n\n\n/***/ }),\n\n/***/ "./src/pluginCore.js":\n/*!***************************!*\\\n  !*** ./src/pluginCore.js ***!\n  \\***************************/\n/*! exports provided: connectRPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectRPC", function() { return connectRPC; });\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");\n/**\n * Core plugin script loaded into the plugin process/thread.\n *\n * Initializes the plugin-site API global methods.\n */\n\nfunction connectRPC(connection, config) {\n  config = config || {};\n  const codecs = {};\n  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"](connection, config, codecs);\n  rpc.on("getInterface", function () {\n    launchConnected();\n  });\n  rpc.on("remoteReady", function () {\n    const api = rpc.getRemote() || {};\n\n    api.registerCodec = function (config) {\n      if (!config["name"] || !config["encoder"] && !config["decoder"]) {\n        throw new Error("Invalid codec format, please make sure you provide a name, type, encoder and decoder.");\n      } else {\n        if (config.type) {\n          for (let k of Object.keys(codecs)) {\n            if (codecs[k].type === config.type || k === config.name) {\n              delete codecs[k];\n              console.warn("Remove duplicated codec: " + k);\n            }\n          }\n        }\n\n        codecs[config["name"]] = config;\n      }\n    };\n\n    api.init = function (config) {\n      // register a minimal plugin api\n      rpc.setInterface({\n        setup() {}\n\n      }, config);\n    };\n\n    api.disposeObject = function (obj) {\n      rpc.disposeObject(obj);\n    };\n\n    api.export = function (_interface, config) {\n      rpc.setInterface(_interface, config);\n    };\n\n    api.onLoad = function (handler) {\n      handler = checkHandler(handler);\n\n      if (connected) {\n        handler();\n      } else {\n        connectedHandlers.push(handler);\n      }\n    };\n\n    api.dispose = function (_interface) {\n      rpc.disconnect();\n    };\n\n    api._rpc = rpc;\n\n    if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {\n      self.api = api;\n      self.postMessage({\n        type: "imjoy_remote_api_ready"\n      });\n      self.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {\n        detail: api\n      }));\n    } else if (typeof window) {\n      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {\n        detail: api\n      }));\n    }\n  });\n  let connected = false;\n  const connectedHandlers = [];\n\n  const launchConnected = function () {\n    if (!connected) {\n      connected = true;\n      let handler;\n\n      while (handler = connectedHandlers.pop()) {\n        handler();\n      }\n    }\n  };\n\n  const checkHandler = function (handler) {\n    const type = typeof handler;\n\n    if (type !== "function") {\n      const msg = "A function may only be subsribed to the event, " + type + " was provided instead";\n      throw new Error(msg);\n    }\n\n    return handler;\n  };\n\n  return rpc;\n}\n\n/***/ }),\n\n/***/ "./src/rpc.js":\n/*!********************!*\\\n  !*** ./src/rpc.js ***!\n  \\********************/\n/*! exports provided: API_VERSION, RPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return RPC; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");\n/**\n * Contains the RPC object used both by the application\n * site, and by each plugin\n */\n\nconst API_VERSION = "0.2.3";\nconst ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;\n\nfunction _appendBuffer(buffer1, buffer2) {\n  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);\n  tmp.set(new Uint8Array(buffer1), 0);\n  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);\n  return tmp.buffer;\n}\n\nfunction indexObject(obj, is) {\n  if (!is) throw new Error("undefined index");\n  if (typeof is === "string") return indexObject(obj, is.split("."));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));\n}\n/**\n * RPC object represents a single site in the\n * communication protocol between the application and the plugin\n *\n * @param {Object} connection a special object allowing to send\n * and receive messages from the opposite site (basically it\n * should only provide send() and onMessage() methods)\n */\n\n\nclass RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__["MessageEmitter"] {\n  constructor(connection, config, codecs) {\n    super(config && config.debug);\n    this._connection = connection;\n    this.config = config || {};\n    this._codecs = codecs || {};\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._remote_set = false; // make sure there is an execute function\n\n    const name = this.config.name;\n\n    this._connection.execute = this._connection.execute || function () {\n      throw new Error(`connection.execute not implemented (in "${name}")`);\n    };\n\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n\n    this._method_refs.onReady(() => {\n      this._fire("remoteIdle");\n    });\n\n    this._method_refs.onBusy(() => {\n      this._fire("remoteBusy");\n    });\n\n    this._setupMessageHanlders();\n  }\n\n  init() {\n    this._connection.emit({\n      type: "initialized",\n      config: this.config,\n      peer_id: this._connection.peer_id\n    });\n  }\n\n  setConfig(config) {\n    if (config) for (const k of Object.keys(config)) {\n      this.config[k] = config[k];\n    }\n  }\n  /**\n   * Set a handler to be called when received a responce from the\n   * remote site reporting that the previously provided interface\n   * has been successfully set as remote for that site\n   *\n   * @param {Function} handler\n   */\n\n\n  getRemoteCallStack() {\n    return this._method_refs.getStack();\n  }\n  /**\n   * @returns {Object} set of remote interface methods\n   */\n\n\n  getRemote() {\n    return this._remote_interface;\n  }\n  /**\n   * Sets the interface of this site making it available to the\n   * remote site by sending a message with a set of methods names\n   *\n   * @param {Object} _interface to set\n   */\n\n\n  setInterface(_interface, config) {\n    config = config || {};\n    this.config.name = config.name || this.config.name;\n    this.config.description = config.description || this.config.description;\n\n    if (this.config.forwarding_functions) {\n      for (let func_name of this.config.forwarding_functions) {\n        const _remote = this._remote_interface;\n\n        if (_remote[func_name]) {\n          if (_interface.constructor === Object) {\n            if (!_interface[func_name]) {\n              _interface[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          } else if (_interface.constructor.constructor === Function) {\n            if (!_interface.constructor.prototype[func_name]) {\n              _interface.constructor.prototype[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          }\n        }\n      }\n    }\n\n    this._local_api = _interface;\n    if (!this._remote_set) this._fire("interfaceAvailable");else this.send_interface();\n    return new Promise(resolve => {\n      this.once("interfaceSetAsRemote", resolve);\n    });\n  }\n  /**\n   * Sends the actual interface to the remote site upon it was\n   * updated or by a special request of the remote site\n   */\n\n\n  sendInterface() {\n    if (!this._local_api) {\n      throw new Error("interface is not set.");\n    }\n\n    this._encode(this._local_api, true).then(api => {\n      this._connection.emit({\n        type: "setInterface",\n        api: api\n      });\n    });\n  }\n\n  _disposeObject(objectId) {\n    if (this._object_store[objectId]) {\n      delete this._object_store[objectId];\n    } else {\n      throw new Error(`Object (id=${objectId}) not found.`);\n    }\n  }\n\n  disposeObject(obj) {\n    return new Promise((resolve, reject) => {\n      if (this._object_weakmap.has(obj)) {\n        const objectId = this._object_weakmap.get(obj);\n\n        this._connection.once("disposed", data => {\n          if (data.error) reject(new Error(data.error));else resolve();\n        });\n\n        this._connection.emit({\n          type: "disposeObject",\n          object_id: objectId\n        });\n      } else {\n        throw new Error("Invalid object");\n      }\n    });\n  }\n  /**\n   * Handles a message from the remote site\n   */\n\n\n  _setupMessageHanlders() {\n    this._connection.on("init", this.init);\n\n    this._connection.on("execute", data => {\n      Promise.resolve(this._connection.execute(data.code)).then(() => {\n        this._connection.emit({\n          type: "executed"\n        });\n      }).catch(e => {\n        console.error(e);\n\n        this._connection.emit({\n          type: "executed",\n          error: String(e)\n        });\n      });\n    });\n\n    this._connection.on("method", async data => {\n      let resolve, reject, method, method_this, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        const _interface = this._object_store[data.object_id];\n        method = indexObject(_interface, data.name);\n\n        if (data.name.includes(".")) {\n          const tmp = data.name.split(".");\n          const intf_index = tmp.slice(0, tmp.length - 1).join(".");\n          method_this = indexObject(_interface, intf_index);\n        } else {\n          method_this = _interface;\n        }\n\n        args = await this._unwrap(data.args, true);\n\n        if (data.promise) {\n          result = method.apply(method_this, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method.apply(method_this, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on("callback", async data => {\n      let resolve, reject, method, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        if (data.promise) {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error("Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");\n          }\n\n          result = method.apply(null, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error("Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");\n          }\n\n          method.apply(null, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on("disposeObject", data => {\n      try {\n        this._disposeObject(data.object_id);\n\n        this._connection.emit({\n          type: "disposed"\n        });\n      } catch (e) {\n        console.error(e);\n\n        this._connection.emit({\n          type: "disposed",\n          error: String(e)\n        });\n      }\n    });\n\n    this._connection.on("setInterface", data => {\n      this._setRemoteInterface(data.api);\n    });\n\n    this._connection.on("getInterface", () => {\n      this._fire("getInterface");\n\n      if (this._local_api) {\n        this.sendInterface();\n      } else {\n        this.once("interfaceAvailable", () => {\n          this.sendInterface();\n        });\n      }\n    });\n\n    this._connection.on("interfaceSetAsRemote", () => {\n      this._remote_set = true;\n\n      this._fire("interfaceSetAsRemote");\n    });\n\n    this._connection.on("disconnect", () => {\n      this._fire("beforeDisconnect");\n\n      this._connection.disconnect();\n\n      this._fire("disconnected");\n    });\n  }\n  /**\n   * Sends a requests to the remote site asking it to provide its\n   * current interface\n   */\n\n\n  requestRemote() {\n    this._connection.emit({\n      type: "getInterface"\n    });\n  }\n\n  _ndarray(typedArray, shape, dtype) {\n    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(typedArray);\n\n    if (dtype && dtype !== _dtype) {\n      throw "dtype doesn\'t match the type of the array: " + _dtype + " != " + dtype;\n    }\n\n    shape = shape || [typedArray.length];\n    return {\n      _rtype: "ndarray",\n      _rvalue: typedArray.buffer,\n      _rshape: shape,\n      _rdtype: _dtype\n    };\n  }\n  /**\n   * Sets the new remote interface provided by the other site\n   *\n   * @param {Array} names list of function names\n   */\n\n\n  _setRemoteInterface(api) {\n    this._decode(api).then(intf => {\n      // update existing interface instead of recreating it\n      // this will preserve the object reference\n      if (this._remote_interface) {\n        // clear the interface\n        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces\n\n\n        Object.assign(this._remote_interface, intf);\n      } else this._remote_interface = intf;\n\n      this._fire("remoteReady");\n\n      this._reportRemoteSet();\n    });\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * method. When the generated function is called, it will send the\n   * corresponding message to the remote site asking it to execute\n   * the particular method of its interface\n   *\n   * @param {String} name of the remote method\n   *\n   * @returns {Function} wrapped remote method\n   */\n\n\n  _genRemoteMethod(targetId, name, objectId) {\n    const me = this;\n\n    const remoteMethod = function () {\n      return new Promise(async (resolve, reject) => {\n        let id = null;\n\n        try {\n          id = me._method_refs.put(objectId ? objectId + "/" + name : name);\n\n          const wrapped_resolve = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return resolve.apply(this, arguments);\n          };\n\n          const wrapped_reject = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return reject.apply(this, arguments);\n          };\n\n          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together\n\n          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;\n          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;\n          let args = Array.prototype.slice.call(arguments);\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n\n          if (name === "register" || name === "registerService" || name === "register_service" || name === "export" || name === "on") {\n            args = await me._wrap(args, true);\n          } else {\n            args = await me._wrap(args);\n          }\n\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n\n          me._connection.emit({\n            type: "method",\n            target_id: targetId,\n            name: name,\n            object_id: objectId,\n            args: args,\n            promise: encodedPromise,\n            with_kwargs: withKwargs\n          }, transferables);\n        } catch (e) {\n          if (id) me._method_refs.fetch(id);\n          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);\n        }\n      });\n    };\n\n    remoteMethod.__remote_method = true;\n    return remoteMethod;\n  }\n  /**\n   * Sends a responce reporting that interface just provided by the\n   * remote site was successfully set by this site as remote\n   */\n\n\n  _reportRemoteSet() {\n    this._connection.emit({\n      type: "interfaceSetAsRemote"\n    });\n  }\n  /**\n   * Prepares the provided set of remote method arguments for\n   * sending to the remote site, replaces all the callbacks with\n   * identifiers\n   *\n   * @param {Array} args to wrap\n   *\n   * @returns {Array} wrapped arguments\n   */\n\n\n  async _encode(aObject, asInterface, objectId) {\n    const aType = typeof aObject;\n\n    if (aType === "number" || aType === "string" || aType === "boolean" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (typeof aObject === "function") {\n      if (asInterface) {\n        if (!objectId) throw new Error("objectId is not specified.");\n        bObject = {\n          _rtype: "interface",\n          _rtarget_id: this._connection.peer_id,\n          _rintf: objectId,\n          _rvalue: asInterface\n        };\n\n        this._method_weakmap.set(aObject, bObject);\n      } else if (this._method_weakmap.has(aObject)) {\n        bObject = this._method_weakmap.get(aObject);\n      } else {\n        const cid = this._store.put(aObject);\n\n        bObject = {\n          _rtype: "callback",\n          _rtarget_id: this._connection.peer_id,\n          _rname: aObject.constructor && aObject.constructor.name || cid,\n          _rvalue: cid\n        };\n      }\n\n      return bObject;\n    } // skip if already encoded\n\n\n    if (aObject.constructor instanceof Object && aObject._rtype) {\n      // make sure the interface functions are encoded\n      if (aObject._rintf) {\n        const temp = aObject._rtype;\n        delete aObject._rtype;\n        bObject = await this._encode(aObject, asInterface, objectId);\n        bObject._rtype = temp;\n      } else {\n        bObject = aObject;\n      }\n\n      return bObject;\n    }\n\n    const transferables = [];\n    const _transfer = aObject._transfer;\n    const isarray = Array.isArray(aObject);\n\n    for (let tp of Object.keys(this._codecs)) {\n      const codec = this._codecs[tp];\n\n      if (codec.encoder && aObject instanceof codec.type) {\n        // TODO: what if multiple encoders found\n        let encodedObj = await Promise.resolve(codec.encoder(aObject));\n        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object\n\n        if (encodedObj && encodedObj._rintf) {\n          const temp = encodedObj._rtype;\n          delete encodedObj._rtype;\n          encodedObj = await this._encode(encodedObj, asInterface, objectId);\n          encodedObj._rtype = temp;\n        }\n\n        bObject = encodedObj;\n        return bObject;\n      }\n    }\n\n    if (\n    /*global tf*/\n    typeof tf !== "undefined" && tf.Tensor && aObject instanceof tf.Tensor) {\n      const v_buffer = aObject.dataSync();\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(v_buffer.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: "ndarray",\n        _rvalue: v_buffer.buffer,\n        _rshape: aObject.shape,\n        _rdtype: aObject.dtype\n      };\n    } else if (\n    /*global nj*/\n    typeof nj !== "undefined" && nj.NdArray && aObject instanceof nj.NdArray) {\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject.selection.data);\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.selection.data.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: "ndarray",\n        _rvalue: aObject.selection.data.buffer,\n        _rshape: aObject.shape,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof Error) {\n      console.error(aObject);\n      bObject = {\n        _rtype: "error",\n        _rvalue: aObject.toString()\n      };\n    } else if (typeof File !== "undefined" && aObject instanceof File) {\n      bObject = {\n        _rtype: "file",\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } // send objects supported by structure clone algorithm\n    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm\n    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== "undefined" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== "undefined" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== "undefined" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== "undefined" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== "undefined" && aObject instanceof FileSystemWritableFileStream) {\n        bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.\n      } else if (typeof File !== "undefined" && aObject instanceof File) {\n        bObject = {\n          _rtype: "file",\n          _rname: aObject.name,\n          _rmime: aObject.type,\n          _rvalue: aObject,\n          _rpath: aObject._path || aObject.webkitRelativePath\n        };\n      } else if (aObject instanceof Blob) {\n        bObject = {\n          _rtype: "blob",\n          _rvalue: aObject\n        };\n      } else if (aObject instanceof ArrayBufferView) {\n        if (aObject._transfer || _transfer) {\n          transferables.push(aObject.buffer);\n          delete aObject._transfer;\n        }\n\n        const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject);\n        bObject = {\n          _rtype: "typedarray",\n          _rvalue: aObject.buffer,\n          _rdtype: dtype\n        };\n      } else if (aObject instanceof DataView) {\n        if (aObject._transfer || _transfer) {\n          transferables.push(aObject.buffer);\n          delete aObject._transfer;\n        }\n\n        bObject = {\n          _rtype: "memoryview",\n          _rvalue: aObject.buffer\n        };\n      } else if (aObject instanceof Set) {\n        bObject = {\n          _rtype: "set",\n          _rvalue: await this._encode(Array.from(aObject), asInterface)\n        };\n      } else if (aObject instanceof Map) {\n        bObject = {\n          _rtype: "orderedmap",\n          _rvalue: await this._encode(Array.from(aObject), asInterface)\n        };\n      } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {\n        bObject = isarray ? [] : {};\n        let keys; // an object/array\n\n        if (aObject.constructor === Object || Array.isArray(aObject)) {\n          keys = Object.keys(aObject);\n        } // a class\n        else if (aObject.constructor === Function) {\n            throw new Error("Please instantiate the class before exportting it.");\n          } // instance of a class\n          else if (aObject.constructor.constructor === Function) {\n              keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object\n              // always encode class instance as interface\n\n              asInterface = true;\n            } else {\n              throw Error("Unsupported interface type");\n            }\n\n        let hasFunction = false; // encode interfaces\n\n        if (aObject._rintf || asInterface) {\n          if (!objectId) {\n            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();\n            this._object_store[objectId] = aObject;\n          }\n\n          for (let k of keys) {\n            if (k === "constructor") continue;\n\n            if (k.startsWith("_")) {\n              continue;\n            }\n\n            bObject[k] = await this._encode(aObject[k], typeof asInterface === "string" ? asInterface + "." + k : k, objectId);\n\n            if (typeof aObject[k] === "function") {\n              hasFunction = true;\n            }\n          } // object id for dispose the object remotely\n\n\n          if (hasFunction) bObject._rintf = objectId; // remove interface when closed\n\n          if (aObject.on && typeof aObject.on === "function") {\n            aObject.on("close", () => {\n              delete this._object_store[objectId];\n            });\n          }\n        } else {\n          for (let k of keys) {\n            if (["hasOwnProperty", "constructor"].includes(k)) continue;\n            bObject[k] = await this._encode(aObject[k]);\n          }\n        } // for example, browserFS object\n\n      } else if (typeof aObject === "object") {\n        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));\n        const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();\n\n        for (let k of keys) {\n          if (["hasOwnProperty", "constructor"].includes(k)) continue; // encode as interface\n\n          bObject[k] = await this._encode(aObject[k], k, bObject);\n        } // object id, used for dispose the object\n\n\n        bObject._rintf = objectId;\n      } else {\n        throw "imjoy-rpc: Unsupported data type:" + aObject;\n      }\n\n    if (transferables.length > 0) {\n      bObject.__transferables__ = transferables;\n    }\n\n    if (!bObject) {\n      throw new Error("Failed to encode object");\n    }\n\n    return bObject;\n  }\n\n  async _decode(aObject, withPromise) {\n    if (!aObject) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (aObject["_rtype"]) {\n      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          aObject = await this._decode(aObject, withPromise);\n          aObject._rtype = temp;\n        }\n\n        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));\n      } else if (aObject._rtype === "callback") {\n        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);\n      } else if (aObject._rtype === "interface") {\n        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);\n      } else if (aObject._rtype === "ndarray") {\n        /*global nj tf*/\n        //create build array/tensor if used in the plugin\n        if (typeof nj !== "undefined" && nj.array) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);\n        } else if (typeof tf !== "undefined" && tf.Tensor) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];\n          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);\n        } else {\n          //keep it as regular if transfered to the main app\n          bObject = aObject;\n        }\n      } else if (aObject._rtype === "error") {\n        bObject = new Error(aObject._rvalue);\n      } else if (aObject._rtype === "file") {\n        if (aObject._rvalue instanceof File) {\n          bObject = aObject._rvalue; //patch _path\n\n          bObject._path = aObject._rpath;\n        } else {\n          bObject = new File([aObject._rvalue], aObject._rname, {\n            type: aObject._rmime\n          });\n          bObject._path = aObject._rpath;\n        }\n      } else if (aObject._rtype === "typedarray") {\n        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];\n        if (!arraytype) throw new Error("unsupported dtype: " + aObject._rdtype);\n        bObject = new arraytype(aObject._rvalue);\n      } else if (aObject._rtype === "memoryview") {\n        bObject = new DataView(aObject._rvalue);\n      } else if (aObject._rtype === "blob") {\n        if (aObject._rvalue instanceof Blob) {\n          bObject = aObject._rvalue;\n        } else {\n          bObject = new Blob([aObject._rvalue], {\n            type: aObject._rmime\n          });\n        }\n      } else if (aObject._rtype === "orderedmap") {\n        bObject = new Map((await this._decode(aObject._rvalue, withPromise)));\n      } else if (aObject._rtype === "set") {\n        bObject = new Set((await this._decode(aObject._rvalue, withPromise)));\n      } else {\n        // make sure all the interface functions are decoded\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          bObject = await this._decode(aObject, withPromise);\n          bObject._rtype = temp;\n        } else bObject = aObject;\n      }\n    } else if (aObject.constructor === Object || Array.isArray(aObject)) {\n      const isarray = Array.isArray(aObject);\n      bObject = isarray ? [] : {};\n\n      for (let k of Object.keys(aObject)) {\n        if (isarray || aObject.hasOwnProperty(k)) {\n          const v = aObject[k];\n          bObject[k] = await this._decode(v, withPromise);\n        }\n      }\n    } else {\n      bObject = aObject;\n    }\n\n    if (bObject === undefined) {\n      throw new Error("Failed to decode object");\n    } // store the object id for dispose\n\n\n    if (aObject._rintf) {\n      this._object_weakmap.set(bObject, aObject._rintf);\n    }\n\n    return bObject;\n  }\n\n  async _wrap(args, asInterface) {\n    return await this._encode(args, asInterface);\n  }\n  /**\n   * Unwraps the set of arguments delivered from the remote site,\n   * replaces all callback identifiers with a function which will\n   * initiate sending that callback identifier back to other site\n   *\n   * @param {Object} args to unwrap\n   *\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Array} unwrapped args\n   */\n\n\n  async _unwrap(args, withPromise) {\n    return await this._decode(args, withPromise);\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * callback. When the generated function is called, it will send\n   * the corresponding message to the remote site asking it to\n   * execute the particular callback previously saved during a call\n   * by the remote site a method from the interface of this site\n   *\n   * @param {Number} id of the remote callback to execute\n   * @param {Number} argNum argument index of the callback\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Function} wrapped remote callback\n   */\n\n\n  _genRemoteCallback(targetId, cid, withPromise) {\n    const me = this;\n    let remoteCallback;\n\n    if (withPromise) {\n      remoteCallback = function () {\n        return new Promise(async (resolve, reject) => {\n          const args = await me._wrap(Array.prototype.slice.call(arguments));\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together\n\n          resolve.__promise_pair = encodedPromise[1]._rvalue;\n          reject.__promise_pair = encodedPromise[0]._rvalue;\n\n          try {\n            me._connection.emit({\n              type: "callback",\n              target_id: targetId,\n              id: cid,\n              args: args,\n              promise: encodedPromise,\n              with_kwargs: withKwargs\n            }, transferables);\n          } catch (e) {\n            reject(`Failed to exectue remote callback ( id: ${cid}).`);\n          }\n        });\n      };\n\n      return remoteCallback;\n    } else {\n      remoteCallback = async function () {\n        const args = await me._wrap(Array.prototype.slice.call(arguments));\n        const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n        const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n        if (withKwargs) delete args[argLength - 1]._rkwargs;\n        const transferables = args.__transferables__;\n        if (transferables) delete args.__transferables__;\n        return me._connection.emit({\n          type: "callback",\n          target_id: targetId,\n          id: cid,\n          args: args,\n          with_kwargs: withKwargs\n        }, transferables);\n      };\n\n      return remoteCallback;\n    }\n  }\n\n  reset() {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._remote_interface = null;\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n  }\n  /**\n   * Sends the notification message and breaks the connection\n   */\n\n\n  disconnect() {\n    this._connection.emit({\n      type: "disconnect"\n    });\n\n    this.reset();\n    setTimeout(() => {\n      this._connection.disconnect();\n    }, 2000);\n  }\n\n}\n/**\n * ReferenceStore is a special object which stores other objects\n * and provides the references (number) instead. This reference\n * may then be sent over a json-based communication channel (IPC\n * to another Node.js process or a message to the Worker). Other\n * site may then provide the reference in the responce message\n * implying the given object should be activated.\n *\n * Primary usage for the ReferenceStore is a storage for the\n * callbacks, which therefore makes it possible to initiate a\n * callback execution by the opposite site (which normally cannot\n * directly execute functions over the communication channel).\n *\n * Each stored object can only be fetched once and is not\n * available for the second time. Each stored object must be\n * fetched, since otherwise it will remain stored forever and\n * consume memory.\n *\n * Stored object indeces are simply the numbers, which are however\n * released along with the objects, and are later reused again (in\n * order to postpone the overflow, which should not likely happen,\n * but anyway).\n */\n\nclass ReferenceStore {\n  constructor() {\n    this._store = {}; // stored object\n\n    this._indices = [0]; // smallest available indices\n\n    this._readyHandler = function () {};\n\n    this._busyHandler = function () {};\n\n    this._readyHandler();\n  }\n  /**\n   * call handler when the store is empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onReady(readyHandler) {\n    this._readyHandler = readyHandler || function () {};\n  }\n  /**\n   * call handler when the store is not empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onBusy(busyHandler) {\n    this._busyHandler = busyHandler || function () {};\n  }\n  /**\n   * get the length of the store\n   *\n   */\n\n\n  getStack() {\n    return Object.keys(this._store).length;\n  }\n  /**\n   * @function _genId() generates the new reference id\n   *\n   * @returns {Number} smallest available id and reserves it\n   */\n\n\n  _genId() {\n    let id;\n\n    if (this._indices.length === 1) {\n      id = this._indices[0]++;\n    } else {\n      id = this._indices.shift();\n    }\n\n    return id;\n  }\n  /**\n   * Releases the given reference id so that it will be available by\n   * another object stored\n   *\n   * @param {Number} id to release\n   */\n\n\n  _releaseId(id) {\n    for (let i = 0; i < this._indices.length; i++) {\n      if (id < this._indices[i]) {\n        this._indices.splice(i, 0, id);\n\n        break;\n      }\n    } // cleaning-up the sequence tail\n\n\n    for (let i = this._indices.length - 1; i >= 0; i--) {\n      if (this._indices[i] - 1 === this._indices[i - 1]) {\n        this._indices.pop();\n      } else {\n        break;\n      }\n    }\n  }\n  /**\n   * Stores the given object and returns the refernce id instead\n   *\n   * @param {Object} obj to store\n   *\n   * @returns {Number} reference id of the stored object\n   */\n\n\n  put(obj) {\n    if (this._busyHandler && Object.keys(this._store).length === 0) {\n      this._busyHandler();\n    }\n\n    const id = this._genId();\n\n    this._store[id] = obj;\n    return id;\n  }\n  /**\n   * Retrieves previously stored object and releases its reference\n   *\n   * @param {Number} id of an object to retrieve\n   */\n\n\n  fetch(id) {\n    const obj = this._store[id];\n\n    if (obj && !obj.__remote_method) {\n      delete this._store[id];\n\n      this._releaseId(id);\n\n      if (this._readyHandler && Object.keys(this._store).length === 0) {\n        this._readyHandler();\n      }\n    }\n\n    if (obj && obj.__promise_pair) {\n      this.fetch(obj.__promise_pair);\n    }\n\n    return obj;\n  }\n\n}\n\n/***/ }),\n\n/***/ "./src/utils.js":\n/*!**********************!*\\\n  !*** ./src/utils.js ***!\n  \\**********************/\n/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randId", function() { return randId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtypeToTypedArray", function() { return dtypeToTypedArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWindow", function() { return loadRequirementsInWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWebworker", function() { return loadRequirementsInWebworker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtypeMapping", function() { return typedArrayToDtypeMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtype", function() { return typedArrayToDtype; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRequirements", function() { return cacheRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupServiceWorker", function() { return setupServiceWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmitter", function() { return MessageEmitter; });\nfunction randId() {\n  return Math.random().toString(36).substr(2, 10) + new Date().getTime();\n}\nconst dtypeToTypedArray = {\n  int8: Int8Array,\n  int16: Int16Array,\n  int32: Int32Array,\n  uint8: Uint8Array,\n  uint16: Uint16Array,\n  uint32: Uint32Array,\n  float32: Float32Array,\n  float64: Float64Array,\n  array: Array\n};\nasync function loadRequirementsInWindow(requirements) {\n  function _importScript(url) {\n    //url is URL of external file, implementationCode is the code\n    //to be called from the file, location is the location to\n    //insert the <script> element\n    return new Promise((resolve, reject) => {\n      var scriptTag = document.createElement("script");\n      scriptTag.src = url;\n      scriptTag.type = "text/javascript";\n      scriptTag.onload = resolve;\n\n      scriptTag.onreadystatechange = function () {\n        if (this.readyState === "loaded" || this.readyState === "complete") {\n          resolve();\n        }\n      };\n\n      scriptTag.onerror = reject;\n      document.head.appendChild(scriptTag);\n    });\n  } // support importScripts outside web worker\n\n\n  async function importScripts() {\n    var args = Array.prototype.slice.call(arguments),\n        len = args.length,\n        i = 0;\n\n    for (; i < len; i++) {\n      await _importScript(args[i]);\n    }\n  }\n\n  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {\n    try {\n      var link_node;\n      requirements = typeof requirements === "string" ? [requirements] : requirements;\n\n      if (Array.isArray(requirements)) {\n        for (var i = 0; i < requirements.length; i++) {\n          if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {\n            if (requirements[i].startsWith("css:")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            link_node = document.createElement("link");\n            link_node.rel = "stylesheet";\n            link_node.href = requirements[i];\n            document.head.appendChild(link_node);\n          } else if (requirements[i].toLowerCase().endsWith(".mjs") || requirements[i].startsWith("mjs:")) {\n            // import esmodule\n            if (requirements[i].startsWith("mjs:")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            await import(\n            /* webpackIgnore: true */\n            requirements[i]);\n          } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {\n            if (requirements[i].startsWith("js:")) {\n              requirements[i] = requirements[i].slice(3);\n            }\n\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith("http")) {\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith("cache:")) {//ignore cache\n          } else {\n            console.log("Unprocessed requirements url: " + requirements[i]);\n          }\n        }\n      } else {\n        throw "unsupported requirements definition";\n      }\n    } catch (e) {\n      throw "failed to import required scripts: " + requirements.toString();\n    }\n  }\n}\nasync function loadRequirementsInWebworker(requirements) {\n  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {\n    try {\n      if (!Array.isArray(requirements)) {\n        requirements = [requirements];\n      }\n\n      for (var i = 0; i < requirements.length; i++) {\n        if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {\n          throw "unable to import css in a webworker";\n        } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {\n          if (requirements[i].startsWith("js:")) {\n            requirements[i] = requirements[i].slice(3);\n          }\n\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith("http")) {\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith("cache:")) {//ignore cache\n        } else {\n          console.log("Unprocessed requirements url: " + requirements[i]);\n        }\n      }\n    } catch (e) {\n      throw "failed to import required scripts: " + requirements.toString();\n    }\n  }\n}\nfunction loadRequirements(requirements) {\n  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {\n    return loadRequirementsInWebworker(requirements);\n  } else {\n    return loadRequirementsInWindow(requirements);\n  }\n}\nfunction normalizeConfig(config) {\n  config.version = config.version || "0.1.0";\n  config.description = config.description || `[TODO: add description for ${config.name} ]`;\n  config.type = config.type || "rpc-window";\n  config.id = config.id || randId();\n  config.target_origin = config.target_origin || "*";\n  config.allow_execution = config.allow_execution || false; // remove functions\n\n  config = Object.keys(config).reduce((p, c) => {\n    if (typeof config[c] !== "function") p[c] = config[c];\n    return p;\n  }, {});\n  return config;\n}\nconst typedArrayToDtypeMapping = {\n  Int8Array: "int8",\n  Int16Array: "int16",\n  Int32Array: "int32",\n  Uint8Array: "uint8",\n  Uint16Array: "uint16",\n  Uint32Array: "uint32",\n  Float32Array: "float32",\n  Float64Array: "float64",\n  Array: "array"\n};\nconst typedArrayToDtypeKeys = [];\n\nfor (const arrType of Object.keys(typedArrayToDtypeMapping)) {\n  typedArrayToDtypeKeys.push(eval(arrType));\n}\n\nfunction typedArrayToDtype(obj) {\n  let dtype = typedArrayToDtypeMapping[obj.constructor.name];\n\n  if (!dtype) {\n    const pt = Object.getPrototypeOf(obj);\n\n    for (const arrType of typedArrayToDtypeKeys) {\n      if (pt instanceof arrType) {\n        dtype = typedArrayToDtypeMapping[arrType.name];\n        break;\n      }\n    }\n  }\n\n  return dtype;\n}\n\nfunction cacheUrlInServiceWorker(url) {\n  return new Promise(function (resolve, reject) {\n    const message = {\n      command: "add",\n      url: url\n    };\n\n    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {\n      reject("Service worker is not supported.");\n      return;\n    }\n\n    const messageChannel = new MessageChannel();\n\n    messageChannel.port1.onmessage = function (event) {\n      if (event.data && event.data.error) {\n        reject(event.data.error);\n      } else {\n        resolve(event.data && event.data.result);\n      }\n    };\n\n    if (navigator.serviceWorker && navigator.serviceWorker.controller) {\n      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);\n    } else {\n      reject("Service worker controller is not available");\n    }\n  });\n}\n\nasync function cacheRequirements(requirements) {\n  requirements = requirements || [];\n\n  if (!Array.isArray(requirements)) {\n    requirements = [requirements];\n  }\n\n  for (let req of requirements) {\n    //remove prefix\n    if (req.startsWith("js:")) req = req.slice(3);\n    if (req.startsWith("css:")) req = req.slice(4);\n    if (req.startsWith("cache:")) req = req.slice(6);\n    if (!req.startsWith("http")) continue;\n    await cacheUrlInServiceWorker(req).catch(e => {\n      console.error(e);\n    });\n  }\n}\nfunction setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {\n  // register service worker for offline access\n  if ("serviceWorker" in navigator) {\n    baseUrl = baseUrl || "/";\n    navigator.serviceWorker.register(baseUrl + "plugin-service-worker.js").then(function (registration) {\n      // Registration was successful\n      console.log("ServiceWorker registration successful with scope: ", registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log("ServiceWorker registration failed: ", err);\n    });\n    targetOrigin = targetOrigin || "*";\n    cacheCallback = cacheCallback || cacheRequirements;\n\n    if (cacheCallback && typeof cacheCallback !== "function") {\n      throw new Error("config.cache_requirements must be a function");\n    }\n\n    window.addEventListener("message", function (e) {\n      if (targetOrigin === "*" || e.origin === targetOrigin) {\n        const m = e.data;\n\n        if (m.type === "cacheRequirements") {\n          cacheCallback(m.requirements);\n        }\n      }\n    });\n  }\n} //#Source https://bit.ly/2neWfJ2\n\nfunction urlJoin(...args) {\n  return args.join("/").replace(/[\\/]+/g, "/").replace(/^(.+):\\//, "$1://").replace(/^file:/, "file:/").replace(/\\/(\\?|&|#[^!])/g, "$1").replace(/\\?/g, "&").replace("&", "?");\n}\nclass MessageEmitter {\n  constructor(debug) {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._debug = debug;\n  }\n\n  emit() {\n    throw new Error("emit is not implemented");\n  }\n\n  on(event, handler) {\n    if (!this._event_handlers[event]) {\n      this._event_handlers[event] = [];\n    }\n\n    this._event_handlers[event].push(handler);\n  }\n\n  once(event, handler) {\n    handler.___event_run_once = true;\n    this.on(event, handler);\n  }\n\n  off(event, handler) {\n    if (!event && !handler) {\n      // remove all events handlers\n      this._event_handlers = {};\n    } else if (event && !handler) {\n      // remove all hanlders for the event\n      if (this._event_handlers[event]) this._event_handlers[event] = [];\n    } else {\n      // remove a specific handler\n      if (this._event_handlers[event]) {\n        const idx = this._event_handlers[event].indexOf(handler);\n\n        if (idx >= 0) {\n          this._event_handlers[event].splice(idx, 1);\n        }\n      }\n    }\n  }\n\n  _fire(event, data) {\n    if (this._event_handlers[event]) {\n      var i = this._event_handlers[event].length;\n\n      while (i--) {\n        const handler = this._event_handlers[event][i];\n\n        try {\n          handler(data);\n        } catch (e) {\n          console.error(e);\n        } finally {\n          if (handler.___event_run_once) {\n            this._event_handlers[event].splice(i, 1);\n          }\n        }\n      }\n    } else {\n      if (this._debug) {\n        console.warn("unhandled event", event, data);\n      }\n    }\n  }\n\n}\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=plugin.webworker.js.map',
                  null
                );
              };
            },
            './src/pluginCore.js': function (e, n, t) {
              'use strict';
              t.r(n),
                t.d(n, 'connectRPC', function () {
                  return i;
                });
              var r = t('./src/rpc.js');
              function i(e, n) {
                n = n || {};
                const t = {},
                  i = new r.RPC(e, n, t);
                i.on('getInterface', function () {
                  s();
                }),
                  i.on('remoteReady', function () {
                    const e = i.getRemote() || {};
                    (e.registerCodec = function (e) {
                      if (!e.name || (!e.encoder && !e.decoder))
                        throw new Error(
                          'Invalid codec format, please make sure you provide a name, type, encoder and decoder.'
                        );
                      if (e.type)
                        for (let n of Object.keys(t))
                          (t[n].type !== e.type && n !== e.name) ||
                            (delete t[n],
                            console.warn('Remove duplicated codec: ' + n));
                      t[e.name] = e;
                    }),
                      (e.init = function (e) {
                        i.setInterface({ setup() {} }, e);
                      }),
                      (e.disposeObject = function (e) {
                        i.disposeObject(e);
                      }),
                      (e.export = function (e, n) {
                        i.setInterface(e, n);
                      }),
                      (e.onLoad = function (e) {
                        (e = c(e)), o ? e() : a.push(e);
                      }),
                      (e.dispose = function (e) {
                        i.disconnect();
                      }),
                      (e._rpc = i),
                      'undefined' != typeof WorkerGlobalScope &&
                      self instanceof WorkerGlobalScope
                        ? ((self.api = e),
                          self.postMessage({ type: 'imjoy_remote_api_ready' }),
                          self.dispatchEvent(
                            new CustomEvent('imjoy_remote_api_ready', {
                              detail: e
                            })
                          ))
                        : window.dispatchEvent(
                            new CustomEvent('imjoy_remote_api_ready', {
                              detail: e
                            })
                          );
                  });
                let o = !1;
                const a = [],
                  s = function () {
                    if (!o) {
                      let e;
                      for (o = !0; (e = a.pop()); ) e();
                    }
                  },
                  c = function (e) {
                    const n = typeof e;
                    if ('function' !== n)
                      throw new Error(
                        'A function may only be subsribed to the event, ' +
                          n +
                          ' was provided instead'
                      );
                    return e;
                  };
                return i;
              }
            },
            './src/pluginIframe.js': function (
              module,
              __webpack_exports__,
              __nested_webpack_require_81858__
            ) {
              'use strict';
              __nested_webpack_require_81858__.r(__webpack_exports__),
                __nested_webpack_require_81858__.d(
                  __webpack_exports__,
                  'Connection',
                  function () {
                    return Connection;
                  }
                ),
                __nested_webpack_require_81858__.d(
                  __webpack_exports__,
                  'default',
                  function () {
                    return setupIframe;
                  }
                );
              var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_81858__('./src/pluginCore.js'),
                _rpc_js__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_81858__('./src/rpc.js'),
                _utils_js__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_81858__('./src/utils.js');
              function _htmlToElement(e) {
                var n = document.createElement('template');
                return (e = e.trim()), (n.innerHTML = e), n.content.firstChild;
              }
              async function executeEsModule(e) {
                const n =
                  'data:text/javascript;charset=utf-8,' + encodeURIComponent(e);
                await import(n);
              }
              class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageEmitter {
                constructor(e) {
                  super(e && e.debug),
                    (this.config = e || {}),
                    (this.peer_id = Object(
                      _utils_js__WEBPACK_IMPORTED_MODULE_2__.randId
                    )());
                }
                connect() {
                  (this.config.target_origin =
                    this.config.target_origin || '*'),
                    this.config.broadcastChannel
                      ? (this.broadcastChannel = new BroadcastChannel(
                          this.config.broadcastChannel
                        ))
                      : (this.broadcastChannel = null),
                    this.broadcastChannel
                      ? this.broadcastChannel.addEventListener('message', this)
                      : window.addEventListener('message', this),
                    this.emit({
                      type: 'initialized',
                      config: this.config,
                      origin: window.location.origin,
                      peer_id: this.peer_id
                    }),
                    this._fire('connected');
                }
                handleEvent(e) {
                  'message' !== e.type ||
                    (!this.broadcastChannel &&
                      '*' !== this.config.target_origin &&
                      e.origin !== this.config.target_origin) ||
                    (e.data.peer_id === this.peer_id
                      ? this._fire(e.data.type, e.data)
                      : this.config.debug &&
                        console.log(
                          `connection peer id mismatch ${e.data.peer_id} !== ${this.peer_id}`
                        ));
                }
                disconnect() {
                  this._fire('beforeDisconnect'),
                    window.removeEventListener('message', this),
                    this._fire('disconnected');
                }
                emit(e) {
                  let n;
                  e.__transferables__ &&
                    ((n = e.__transferables__), delete e.__transferables__),
                    this.broadcastChannel
                      ? this.broadcastChannel.postMessage(e)
                      : parent.postMessage(e, this.config.target_origin, n);
                }
                async execute(code) {
                  try {
                    if ('requirements' === code.type)
                      await Object(
                        _utils_js__WEBPACK_IMPORTED_MODULE_2__.loadRequirementsInWindow
                      )(code.requirements);
                    else if ('script' === code.type)
                      if (code.src) {
                        var script_node = document.createElement('script');
                        script_node.setAttribute('type', code.attrs.type),
                          script_node.setAttribute('src', code.src),
                          document.head.appendChild(script_node);
                      } else if (
                        code.content &&
                        'javascript' === code.attrs.lang
                      )
                        'module' === code.attrs.type
                          ? await executeEsModule(code.content)
                          : eval(code.content);
                      else {
                        var node = document.createElement('script');
                        for (let e in code.attrs)
                          node.setAttribute(e, code.attrs[e]);
                        node.appendChild(document.createTextNode(code.content)),
                          document.body.appendChild(node);
                      }
                    else if ('style' === code.type) {
                      const e = document.createElement('style');
                      code.src && (e.src = code.src),
                        (e.innerHTML = code.content),
                        document.head.appendChild(e);
                    } else if ('link' === code.type) {
                      const e = document.createElement('link');
                      code.rel && (e.rel = code.rel),
                        code.href && (e.href = code.href),
                        code.attrs &&
                          code.attrs.type &&
                          (e.type = code.attrs.type),
                        document.head.appendChild(e);
                    } else {
                      if ('html' !== code.type) throw 'unsupported code type.';
                      document.body.appendChild(_htmlToElement(code.content));
                    }
                    parent.postMessage(
                      { type: 'executed' },
                      this.config.target_origin
                    );
                  } catch (e) {
                    console.error('failed to execute scripts: ', code, e),
                      parent.postMessage(
                        { type: 'executed', error: e.stack || String(e) },
                        this.config.target_origin
                      );
                  }
                }
              }
              function setupIframe(e) {
                ((e = e || {}).dedicated_thread = !1),
                  (e.lang = 'javascript'),
                  (e.api_version =
                    _rpc_js__WEBPACK_IMPORTED_MODULE_1__.API_VERSION);
                const n = new Connection(e);
                Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__.connectRPC)(
                  n,
                  e
                ),
                  n.connect();
              }
            },
            './src/rpc.js': function (e, n, t) {
              'use strict';
              t.r(n),
                t.d(n, 'API_VERSION', function () {
                  return i;
                }),
                t.d(n, 'RPC', function () {
                  return c;
                });
              var r = t('./src/utils.js');
              const i = '0.2.3',
                o = Object.getPrototypeOf(
                  Object.getPrototypeOf(new Uint8Array())
                ).constructor;
              function a(e, n) {
                const t = new Uint8Array(e.byteLength + n.byteLength);
                return (
                  t.set(new Uint8Array(e), 0),
                  t.set(new Uint8Array(n), e.byteLength),
                  t.buffer
                );
              }
              function s(e, n) {
                if (!n) throw new Error('undefined index');
                return 'string' == typeof n
                  ? s(e, n.split('.'))
                  : 0 === n.length
                    ? e
                    : s(e[n[0]], n.slice(1));
              }
              class c extends r.MessageEmitter {
                constructor(e, n, t) {
                  super(n && n.debug),
                    (this._connection = e),
                    (this.config = n || {}),
                    (this._codecs = t || {}),
                    (this._object_store = {}),
                    (this._method_weakmap = new WeakMap()),
                    (this._object_weakmap = new WeakMap()),
                    (this._local_api = null),
                    (this._remote_set = !1);
                  const r = this.config.name;
                  (this._connection.execute =
                    this._connection.execute ||
                    function () {
                      throw new Error(
                        `connection.execute not implemented (in "${r}")`
                      );
                    }),
                    (this._store = new l()),
                    (this._method_refs = new l()),
                    this._method_refs.onReady(() => {
                      this._fire('remoteIdle');
                    }),
                    this._method_refs.onBusy(() => {
                      this._fire('remoteBusy');
                    }),
                    this._setupMessageHanlders();
                }
                init() {
                  this._connection.emit({
                    type: 'initialized',
                    config: this.config,
                    peer_id: this._connection.peer_id
                  });
                }
                setConfig(e) {
                  if (e) for (const n of Object.keys(e)) this.config[n] = e[n];
                }
                getRemoteCallStack() {
                  return this._method_refs.getStack();
                }
                getRemote() {
                  return this._remote_interface;
                }
                setInterface(e, n) {
                  if (
                    ((n = n || {}),
                    (this.config.name = n.name || this.config.name),
                    (this.config.description =
                      n.description || this.config.description),
                    this.config.forwarding_functions)
                  )
                    for (let n of this.config.forwarding_functions) {
                      const t = this._remote_interface;
                      t[n] &&
                        (e.constructor === Object
                          ? e[n] ||
                            (e[n] = (...e) => {
                              t[n](...e);
                            })
                          : e.constructor.constructor === Function &&
                            (e.constructor.prototype[n] ||
                              (e.constructor.prototype[n] = (...e) => {
                                t[n](...e);
                              })));
                    }
                  return (
                    (this._local_api = e),
                    this._remote_set
                      ? this.send_interface()
                      : this._fire('interfaceAvailable'),
                    new Promise(e => {
                      this.once('interfaceSetAsRemote', e);
                    })
                  );
                }
                sendInterface() {
                  if (!this._local_api)
                    throw new Error('interface is not set.');
                  this._encode(this._local_api, !0).then(e => {
                    this._connection.emit({ type: 'setInterface', api: e });
                  });
                }
                _disposeObject(e) {
                  if (!this._object_store[e])
                    throw new Error(`Object (id=${e}) not found.`);
                  delete this._object_store[e];
                }
                disposeObject(e) {
                  return new Promise((n, t) => {
                    if (!this._object_weakmap.has(e))
                      throw new Error('Invalid object');
                    {
                      const r = this._object_weakmap.get(e);
                      this._connection.once('disposed', e => {
                        e.error ? t(new Error(e.error)) : n();
                      }),
                        this._connection.emit({
                          type: 'disposeObject',
                          object_id: r
                        });
                    }
                  });
                }
                _setupMessageHanlders() {
                  this._connection.on('init', this.init),
                    this._connection.on('execute', e => {
                      Promise.resolve(this._connection.execute(e.code))
                        .then(() => {
                          this._connection.emit({ type: 'executed' });
                        })
                        .catch(e => {
                          console.error(e),
                            this._connection.emit({
                              type: 'executed',
                              error: String(e)
                            });
                        });
                    }),
                    this._connection.on('method', async e => {
                      let n, t, r, i, o, a;
                      try {
                        e.promise &&
                          ([n, t] = await this._unwrap(e.promise, !1));
                        const c = this._object_store[e.object_id];
                        if (((r = s(c, e.name)), e.name.includes('.'))) {
                          const n = e.name.split('.');
                          i = s(c, n.slice(0, n.length - 1).join('.'));
                        } else i = c;
                        (o = await this._unwrap(e.args, !0)),
                          e.promise
                            ? ((a = r.apply(i, o)),
                              a instanceof Promise ||
                              (r.constructor &&
                                'AsyncFunction' === r.constructor.name)
                                ? a.then(n).catch(t)
                                : n(a))
                            : r.apply(i, o);
                      } catch (e) {
                        console.error(this.config.name, e), t && t(e);
                      }
                    }),
                    this._connection.on('callback', async e => {
                      let n, t, r, i, o;
                      try {
                        if (
                          (e.promise &&
                            ([n, t] = await this._unwrap(e.promise, !1)),
                          e.promise)
                        ) {
                          if (
                            ((r = this._store.fetch(e.id)),
                            (i = await this._unwrap(e.args, !0)),
                            !r)
                          )
                            throw new Error(
                              'Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.'
                            );
                          (o = r.apply(null, i)),
                            o instanceof Promise ||
                            (r.constructor &&
                              'AsyncFunction' === r.constructor.name)
                              ? o.then(n).catch(t)
                              : n(o);
                        } else {
                          if (
                            ((r = this._store.fetch(e.id)),
                            (i = await this._unwrap(e.args, !0)),
                            !r)
                          )
                            throw new Error(
                              'Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.'
                            );
                          r.apply(null, i);
                        }
                      } catch (e) {
                        console.error(this.config.name, e), t && t(e);
                      }
                    }),
                    this._connection.on('disposeObject', e => {
                      try {
                        this._disposeObject(e.object_id),
                          this._connection.emit({ type: 'disposed' });
                      } catch (e) {
                        console.error(e),
                          this._connection.emit({
                            type: 'disposed',
                            error: String(e)
                          });
                      }
                    }),
                    this._connection.on('setInterface', e => {
                      this._setRemoteInterface(e.api);
                    }),
                    this._connection.on('getInterface', () => {
                      this._fire('getInterface'),
                        this._local_api
                          ? this.sendInterface()
                          : this.once('interfaceAvailable', () => {
                              this.sendInterface();
                            });
                    }),
                    this._connection.on('interfaceSetAsRemote', () => {
                      (this._remote_set = !0),
                        this._fire('interfaceSetAsRemote');
                    }),
                    this._connection.on('disconnect', () => {
                      this._fire('beforeDisconnect'),
                        this._connection.disconnect(),
                        this._fire('disconnected');
                    });
                }
                requestRemote() {
                  this._connection.emit({ type: 'getInterface' });
                }
                _ndarray(e, n, t) {
                  const i = Object(r.typedArrayToDtype)(e);
                  if (t && t !== i)
                    throw (
                      "dtype doesn't match the type of the array: " +
                      i +
                      ' != ' +
                      t
                    );
                  return (
                    (n = n || [e.length]),
                    {
                      _rtype: 'ndarray',
                      _rvalue: e.buffer,
                      _rshape: n,
                      _rdtype: i
                    }
                  );
                }
                _setRemoteInterface(e) {
                  this._decode(e).then(e => {
                    if (this._remote_interface) {
                      for (let e in this._remote_interface)
                        delete this._remote_interface[e];
                      Object.assign(this._remote_interface, e);
                    } else this._remote_interface = e;
                    this._fire('remoteReady'), this._reportRemoteSet();
                  });
                }
                _genRemoteMethod(e, n, t) {
                  const r = this,
                    i = function () {
                      return new Promise(async (i, o) => {
                        let a = null;
                        try {
                          a = r._method_refs.put(t ? t + '/' + n : n);
                          const s = function () {
                              return (
                                null !== a && r._method_refs.fetch(a),
                                i.apply(this, arguments)
                              );
                            },
                            c = function () {
                              return (
                                null !== a && r._method_refs.fetch(a),
                                o.apply(this, arguments)
                              );
                            },
                            l = await r._wrap([s, c]);
                          (s.__promise_pair = l[1]._rvalue),
                            (c.__promise_pair = l[0]._rvalue);
                          let d = Array.prototype.slice.call(arguments);
                          const _ = d.length,
                            p =
                              _ > 0 &&
                              'object' == typeof d[_ - 1] &&
                              null !== d[_ - 1] &&
                              d[_ - 1]._rkwargs;
                          p && delete d[_ - 1]._rkwargs,
                            (d =
                              'register' === n ||
                              'registerService' === n ||
                              'register_service' === n ||
                              'export' === n ||
                              'on' === n
                                ? await r._wrap(d, !0)
                                : await r._wrap(d));
                          const u = d.__transferables__;
                          u && delete d.__transferables__,
                            r._connection.emit(
                              {
                                type: 'method',
                                target_id: e,
                                name: n,
                                object_id: t,
                                args: d,
                                promise: l,
                                with_kwargs: p
                              },
                              u
                            );
                        } catch (e) {
                          a && r._method_refs.fetch(a),
                            o(
                              `Failed to exectue remote method (interface: ${
                                t || r.id
                              }, method: ${n}), error: ${e}`
                            );
                        }
                      });
                    };
                  return (i.__remote_method = !0), i;
                }
                _reportRemoteSet() {
                  this._connection.emit({ type: 'interfaceSetAsRemote' });
                }
                async _encode(e, n, t) {
                  const i = typeof e;
                  if (
                    'number' === i ||
                    'string' === i ||
                    'boolean' === i ||
                    null == e ||
                    e instanceof ArrayBuffer
                  )
                    return e;
                  let a;
                  if ('function' == typeof e) {
                    if (n) {
                      if (!t) throw new Error('objectId is not specified.');
                      (a = {
                        _rtype: 'interface',
                        _rtarget_id: this._connection.peer_id,
                        _rintf: t,
                        _rvalue: n
                      }),
                        this._method_weakmap.set(e, a);
                    } else if (this._method_weakmap.has(e))
                      a = this._method_weakmap.get(e);
                    else {
                      const n = this._store.put(e);
                      a = {
                        _rtype: 'callback',
                        _rtarget_id: this._connection.peer_id,
                        _rname: (e.constructor && e.constructor.name) || n,
                        _rvalue: n
                      };
                    }
                    return a;
                  }
                  if (e.constructor instanceof Object && e._rtype) {
                    if (e._rintf) {
                      const r = e._rtype;
                      delete e._rtype,
                        (a = await this._encode(e, n, t)),
                        (a._rtype = r);
                    } else a = e;
                    return a;
                  }
                  const s = [],
                    c = e._transfer,
                    l = Array.isArray(e);
                  for (let r of Object.keys(this._codecs)) {
                    const i = this._codecs[r];
                    if (i.encoder && e instanceof i.type) {
                      let r = await Promise.resolve(i.encoder(e));
                      if (
                        (r && !r._rtype && (r._rtype = i.name), r && r._rintf)
                      ) {
                        const e = r._rtype;
                        delete r._rtype,
                          (r = await this._encode(r, n, t)),
                          (r._rtype = e);
                      }
                      return (a = r), a;
                    }
                  }
                  if (
                    'undefined' != typeof tf &&
                    tf.Tensor &&
                    e instanceof tf.Tensor
                  ) {
                    const n = e.dataSync();
                    (e._transfer || c) &&
                      (s.push(n.buffer), delete e._transfer),
                      (a = {
                        _rtype: 'ndarray',
                        _rvalue: n.buffer,
                        _rshape: e.shape,
                        _rdtype: e.dtype
                      });
                  } else if (
                    'undefined' != typeof nj &&
                    nj.NdArray &&
                    e instanceof nj.NdArray
                  ) {
                    const n = Object(r.typedArrayToDtype)(e.selection.data);
                    (e._transfer || c) &&
                      (s.push(e.selection.data.buffer), delete e._transfer),
                      (a = {
                        _rtype: 'ndarray',
                        _rvalue: e.selection.data.buffer,
                        _rshape: e.shape,
                        _rdtype: n
                      });
                  } else if (e instanceof Error)
                    console.error(e),
                      (a = { _rtype: 'error', _rvalue: e.toString() });
                  else if ('undefined' != typeof File && e instanceof File)
                    a = {
                      _rtype: 'file',
                      _rvalue: e,
                      _rpath: e._path || e.webkitRelativePath
                    };
                  else if (
                    e !== Object(e) ||
                    e instanceof Boolean ||
                    e instanceof String ||
                    e instanceof Date ||
                    e instanceof RegExp ||
                    e instanceof ImageData ||
                    ('undefined' != typeof FileList && e instanceof FileList) ||
                    ('undefined' != typeof FileSystemDirectoryHandle &&
                      e instanceof FileSystemDirectoryHandle) ||
                    ('undefined' != typeof FileSystemFileHandle &&
                      e instanceof FileSystemFileHandle) ||
                    ('undefined' != typeof FileSystemHandle &&
                      e instanceof FileSystemHandle) ||
                    ('undefined' != typeof FileSystemWritableFileStream &&
                      e instanceof FileSystemWritableFileStream)
                  )
                    a = e;
                  else if ('undefined' != typeof File && e instanceof File)
                    a = {
                      _rtype: 'file',
                      _rname: e.name,
                      _rmime: e.type,
                      _rvalue: e,
                      _rpath: e._path || e.webkitRelativePath
                    };
                  else if (e instanceof Blob)
                    a = { _rtype: 'blob', _rvalue: e };
                  else if (e instanceof o) {
                    (e._transfer || c) &&
                      (s.push(e.buffer), delete e._transfer);
                    const n = Object(r.typedArrayToDtype)(e);
                    a = { _rtype: 'typedarray', _rvalue: e.buffer, _rdtype: n };
                  } else if (e instanceof DataView)
                    (e._transfer || c) &&
                      (s.push(e.buffer), delete e._transfer),
                      (a = { _rtype: 'memoryview', _rvalue: e.buffer });
                  else if (e instanceof Set)
                    a = {
                      _rtype: 'set',
                      _rvalue: await this._encode(Array.from(e), n)
                    };
                  else if (e instanceof Map)
                    a = {
                      _rtype: 'orderedmap',
                      _rvalue: await this._encode(Array.from(e), n)
                    };
                  else if (
                    e.constructor instanceof Object ||
                    Array.isArray(e)
                  ) {
                    let i;
                    if (
                      ((a = l ? [] : {}),
                      e.constructor === Object || Array.isArray(e))
                    )
                      i = Object.keys(e);
                    else {
                      if (e.constructor === Function)
                        throw new Error(
                          'Please instantiate the class before exportting it.'
                        );
                      if (e.constructor.constructor !== Function)
                        throw Error('Unsupported interface type');
                      (i = Object.getOwnPropertyNames(
                        Object.getPrototypeOf(e)
                      ).concat(Object.keys(e))),
                        (n = !0);
                    }
                    let o = !1;
                    if (e._rintf || n) {
                      t ||
                        ((t = Object(r.randId)()), (this._object_store[t] = e));
                      for (let r of i)
                        'constructor' !== r &&
                          (r.startsWith('_') ||
                            ((a[r] = await this._encode(
                              e[r],
                              'string' == typeof n ? n + '.' + r : r,
                              t
                            )),
                            'function' == typeof e[r] && (o = !0)));
                      o && (a._rintf = t),
                        e.on &&
                          'function' == typeof e.on &&
                          e.on('close', () => {
                            delete this._object_store[t];
                          });
                    } else
                      for (let n of i)
                        ['hasOwnProperty', 'constructor'].includes(n) ||
                          (a[n] = await this._encode(e[n]));
                  } else {
                    if ('object' != typeof e)
                      throw 'imjoy-rpc: Unsupported data type:' + e;
                    {
                      const n = Object.getOwnPropertyNames(
                          Object.getPrototypeOf(e)
                        ).concat(Object.keys(e)),
                        t = Object(r.randId)();
                      for (let t of n)
                        ['hasOwnProperty', 'constructor'].includes(t) ||
                          (a[t] = await this._encode(e[t], t, a));
                      a._rintf = t;
                    }
                  }
                  if ((s.length > 0 && (a.__transferables__ = s), !a))
                    throw new Error('Failed to encode object');
                  return a;
                }
                async _decode(e, n) {
                  if (!e) return e;
                  let t;
                  if (e._rtype)
                    if (
                      this._codecs[e._rtype] &&
                      this._codecs[e._rtype].decoder
                    ) {
                      if (e._rintf) {
                        const t = e._rtype;
                        delete e._rtype,
                          ((e = await this._decode(e, n))._rtype = t);
                      }
                      t = await Promise.resolve(
                        this._codecs[e._rtype].decoder(e)
                      );
                    } else if ('callback' === e._rtype)
                      t = this._genRemoteCallback(e._rtarget_id, e._rvalue, n);
                    else if ('interface' === e._rtype)
                      t = this._genRemoteMethod(
                        e._rtarget_id,
                        e._rvalue,
                        e._rintf
                      );
                    else if ('ndarray' === e._rtype)
                      if ('undefined' != typeof nj && nj.array)
                        Array.isArray(e._rvalue) &&
                          (e._rvalue = e._rvalue.reduce(a)),
                          (t = nj
                            .array(new Uint8(e._rvalue), e._rdtype)
                            .reshape(e._rshape));
                      else if ('undefined' != typeof tf && tf.Tensor) {
                        Array.isArray(e._rvalue) &&
                          (e._rvalue = e._rvalue.reduce(a));
                        const n = r.dtypeToTypedArray[e._rdtype];
                        t = tf.tensor(new n(e._rvalue), e._rshape, e._rdtype);
                      } else t = e;
                    else if ('error' === e._rtype) t = new Error(e._rvalue);
                    else if ('file' === e._rtype)
                      e._rvalue instanceof File
                        ? ((t = e._rvalue), (t._path = e._rpath))
                        : ((t = new File([e._rvalue], e._rname, {
                            type: e._rmime
                          })),
                          (t._path = e._rpath));
                    else if ('typedarray' === e._rtype) {
                      const n = r.dtypeToTypedArray[e._rdtype];
                      if (!n)
                        throw new Error('unsupported dtype: ' + e._rdtype);
                      t = new n(e._rvalue);
                    } else if ('memoryview' === e._rtype)
                      t = new DataView(e._rvalue);
                    else if ('blob' === e._rtype)
                      t =
                        e._rvalue instanceof Blob
                          ? e._rvalue
                          : new Blob([e._rvalue], { type: e._rmime });
                    else if ('orderedmap' === e._rtype)
                      t = new Map(await this._decode(e._rvalue, n));
                    else if ('set' === e._rtype)
                      t = new Set(await this._decode(e._rvalue, n));
                    else if (e._rintf) {
                      const r = e._rtype;
                      delete e._rtype,
                        (t = await this._decode(e, n)),
                        (t._rtype = r);
                    } else t = e;
                  else if (e.constructor === Object || Array.isArray(e)) {
                    const r = Array.isArray(e);
                    t = r ? [] : {};
                    for (let i of Object.keys(e))
                      if (r || e.hasOwnProperty(i)) {
                        const r = e[i];
                        t[i] = await this._decode(r, n);
                      }
                  } else t = e;
                  if (void 0 === t) throw new Error('Failed to decode object');
                  return e._rintf && this._object_weakmap.set(t, e._rintf), t;
                }
                async _wrap(e, n) {
                  return await this._encode(e, n);
                }
                async _unwrap(e, n) {
                  return await this._decode(e, n);
                }
                _genRemoteCallback(e, n, t) {
                  const r = this;
                  let i;
                  return t
                    ? ((i = function () {
                        return new Promise(async (t, i) => {
                          const o = await r._wrap(
                              Array.prototype.slice.call(arguments)
                            ),
                            a = o.length,
                            s =
                              a > 0 &&
                              'object' == typeof o[a - 1] &&
                              null !== o[a - 1] &&
                              o[a - 1]._rkwargs;
                          s && delete o[a - 1]._rkwargs;
                          const c = o.__transferables__;
                          c && delete o.__transferables__;
                          const l = await r._wrap([t, i]);
                          (t.__promise_pair = l[1]._rvalue),
                            (i.__promise_pair = l[0]._rvalue);
                          try {
                            r._connection.emit(
                              {
                                type: 'callback',
                                target_id: e,
                                id: n,
                                args: o,
                                promise: l,
                                with_kwargs: s
                              },
                              c
                            );
                          } catch (e) {
                            i(`Failed to exectue remote callback ( id: ${n}).`);
                          }
                        });
                      }),
                      i)
                    : ((i = async function () {
                        const t = await r._wrap(
                            Array.prototype.slice.call(arguments)
                          ),
                          i = t.length,
                          o =
                            i > 0 &&
                            'object' == typeof t[i - 1] &&
                            null !== t[i - 1] &&
                            t[i - 1]._rkwargs;
                        o && delete t[i - 1]._rkwargs;
                        const a = t.__transferables__;
                        return (
                          a && delete t.__transferables__,
                          r._connection.emit(
                            {
                              type: 'callback',
                              target_id: e,
                              id: n,
                              args: t,
                              with_kwargs: o
                            },
                            a
                          )
                        );
                      }),
                      i);
                }
                reset() {
                  (this._event_handlers = {}),
                    (this._once_handlers = {}),
                    (this._remote_interface = null),
                    (this._object_store = {}),
                    (this._method_weakmap = new WeakMap()),
                    (this._object_weakmap = new WeakMap()),
                    (this._local_api = null),
                    (this._store = new l()),
                    (this._method_refs = new l());
                }
                disconnect() {
                  this._connection.emit({ type: 'disconnect' }),
                    this.reset(),
                    setTimeout(() => {
                      this._connection.disconnect();
                    }, 2e3);
                }
              }
              class l {
                constructor() {
                  (this._store = {}),
                    (this._indices = [0]),
                    (this._readyHandler = function () {}),
                    (this._busyHandler = function () {}),
                    this._readyHandler();
                }
                onReady(e) {
                  this._readyHandler = e || function () {};
                }
                onBusy(e) {
                  this._busyHandler = e || function () {};
                }
                getStack() {
                  return Object.keys(this._store).length;
                }
                _genId() {
                  let e;
                  return (
                    (e =
                      1 === this._indices.length
                        ? this._indices[0]++
                        : this._indices.shift()),
                    e
                  );
                }
                _releaseId(e) {
                  for (let n = 0; n < this._indices.length; n++)
                    if (e < this._indices[n]) {
                      this._indices.splice(n, 0, e);
                      break;
                    }
                  for (
                    let e = this._indices.length - 1;
                    e >= 0 && this._indices[e] - 1 === this._indices[e - 1];
                    e--
                  )
                    this._indices.pop();
                }
                put(e) {
                  this._busyHandler &&
                    0 === Object.keys(this._store).length &&
                    this._busyHandler();
                  const n = this._genId();
                  return (this._store[n] = e), n;
                }
                fetch(e) {
                  const n = this._store[e];
                  return (
                    n &&
                      !n.__remote_method &&
                      (delete this._store[e],
                      this._releaseId(e),
                      this._readyHandler &&
                        0 === Object.keys(this._store).length &&
                        this._readyHandler()),
                    n && n.__promise_pair && this.fetch(n.__promise_pair),
                    n
                  );
                }
              }
            },
            './src/utils.js': function (
              module,
              __webpack_exports__,
              __nested_webpack_require_122673__
            ) {
              'use strict';
              function randId() {
                return (
                  Math.random().toString(36).substr(2, 10) +
                  new Date().getTime()
                );
              }
              __nested_webpack_require_122673__.r(__webpack_exports__),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'randId',
                  function () {
                    return randId;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'dtypeToTypedArray',
                  function () {
                    return dtypeToTypedArray;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'loadRequirementsInWindow',
                  function () {
                    return loadRequirementsInWindow;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'loadRequirementsInWebworker',
                  function () {
                    return loadRequirementsInWebworker;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'loadRequirements',
                  function () {
                    return loadRequirements;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'normalizeConfig',
                  function () {
                    return normalizeConfig;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'typedArrayToDtypeMapping',
                  function () {
                    return typedArrayToDtypeMapping;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'typedArrayToDtype',
                  function () {
                    return typedArrayToDtype;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'cacheRequirements',
                  function () {
                    return cacheRequirements;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'setupServiceWorker',
                  function () {
                    return setupServiceWorker;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'urlJoin',
                  function () {
                    return urlJoin;
                  }
                ),
                __nested_webpack_require_122673__.d(
                  __webpack_exports__,
                  'MessageEmitter',
                  function () {
                    return MessageEmitter;
                  }
                );
              const dtypeToTypedArray = {
                int8: Int8Array,
                int16: Int16Array,
                int32: Int32Array,
                uint8: Uint8Array,
                uint16: Uint16Array,
                uint32: Uint32Array,
                float32: Float32Array,
                float64: Float64Array,
                array: Array
              };
              async function loadRequirementsInWindow(e) {
                function n(e) {
                  return new Promise((n, t) => {
                    var r = document.createElement('script');
                    (r.src = e),
                      (r.type = 'text/javascript'),
                      (r.onload = n),
                      (r.onreadystatechange = function () {
                        ('loaded' !== this.readyState &&
                          'complete' !== this.readyState) ||
                          n();
                      }),
                      (r.onerror = t),
                      document.head.appendChild(r);
                  });
                }
                async function t() {
                  for (
                    var e = Array.prototype.slice.call(arguments),
                      t = e.length,
                      r = 0;
                    r < t;
                    r++
                  )
                    await n(e[r]);
                }
                if (e && (Array.isArray(e) || 'string' == typeof e))
                  try {
                    var r;
                    if (
                      ((e = 'string' == typeof e ? [e] : e), !Array.isArray(e))
                    )
                      throw 'unsupported requirements definition';
                    for (var i = 0; i < e.length; i++)
                      e[i].toLowerCase().endsWith('.css') ||
                      e[i].startsWith('css:')
                        ? (e[i].startsWith('css:') && (e[i] = e[i].slice(4)),
                          ((r = document.createElement('link')).rel =
                            'stylesheet'),
                          (r.href = e[i]),
                          document.head.appendChild(r))
                        : e[i].toLowerCase().endsWith('.mjs') ||
                            e[i].startsWith('mjs:')
                          ? (e[i].startsWith('mjs:') && (e[i] = e[i].slice(4)),
                            await import(e[i]))
                          : e[i].toLowerCase().endsWith('.js') ||
                              e[i].startsWith('js:')
                            ? (e[i].startsWith('js:') && (e[i] = e[i].slice(3)),
                              await t(e[i]))
                            : e[i].startsWith('http')
                              ? await t(e[i])
                              : e[i].startsWith('cache:') ||
                                console.log(
                                  'Unprocessed requirements url: ' + e[i]
                                );
                  } catch (n) {
                    throw 'failed to import required scripts: ' + e.toString();
                  }
              }
              async function loadRequirementsInWebworker(e) {
                if (e && (Array.isArray(e) || 'string' == typeof e))
                  try {
                    Array.isArray(e) || (e = [e]);
                    for (var n = 0; n < e.length; n++) {
                      if (
                        e[n].toLowerCase().endsWith('.css') ||
                        e[n].startsWith('css:')
                      )
                        throw 'unable to import css in a webworker';
                      e[n].toLowerCase().endsWith('.js') ||
                      e[n].startsWith('js:')
                        ? (e[n].startsWith('js:') && (e[n] = e[n].slice(3)),
                          importScripts(e[n]))
                        : e[n].startsWith('http')
                          ? importScripts(e[n])
                          : e[n].startsWith('cache:') ||
                            console.log(
                              'Unprocessed requirements url: ' + e[n]
                            );
                    }
                  } catch (n) {
                    throw 'failed to import required scripts: ' + e.toString();
                  }
              }
              function loadRequirements(e) {
                return 'undefined' != typeof WorkerGlobalScope &&
                  self instanceof WorkerGlobalScope
                  ? loadRequirementsInWebworker(e)
                  : loadRequirementsInWindow(e);
              }
              function normalizeConfig(e) {
                return (
                  (e.version = e.version || '0.1.0'),
                  (e.description =
                    e.description || `[TODO: add description for ${e.name} ]`),
                  (e.type = e.type || 'rpc-window'),
                  (e.id = e.id || randId()),
                  (e.target_origin = e.target_origin || '*'),
                  (e.allow_execution = e.allow_execution || !1),
                  (e = Object.keys(e).reduce(
                    (n, t) => ('function' != typeof e[t] && (n[t] = e[t]), n),
                    {}
                  ))
                );
              }
              const typedArrayToDtypeMapping = {
                  Int8Array: 'int8',
                  Int16Array: 'int16',
                  Int32Array: 'int32',
                  Uint8Array: 'uint8',
                  Uint16Array: 'uint16',
                  Uint32Array: 'uint32',
                  Float32Array: 'float32',
                  Float64Array: 'float64',
                  Array: 'array'
                },
                typedArrayToDtypeKeys = [];
              for (const arrType of Object.keys(typedArrayToDtypeMapping))
                typedArrayToDtypeKeys.push(eval(arrType));
              function typedArrayToDtype(e) {
                let n = typedArrayToDtypeMapping[e.constructor.name];
                if (!n) {
                  const t = Object.getPrototypeOf(e);
                  for (const e of typedArrayToDtypeKeys)
                    if (t instanceof e) {
                      n = typedArrayToDtypeMapping[e.name];
                      break;
                    }
                }
                return n;
              }
              function cacheUrlInServiceWorker(e) {
                return new Promise(function (n, t) {
                  const r = { command: 'add', url: e };
                  if (
                    !navigator.serviceWorker ||
                    !navigator.serviceWorker.register
                  )
                    return void t('Service worker is not supported.');
                  const i = new MessageChannel();
                  (i.port1.onmessage = function (e) {
                    e.data && e.data.error
                      ? t(e.data.error)
                      : n(e.data && e.data.result);
                  }),
                    navigator.serviceWorker &&
                    navigator.serviceWorker.controller
                      ? navigator.serviceWorker.controller.postMessage(r, [
                          i.port2
                        ])
                      : t('Service worker controller is not available');
                });
              }
              async function cacheRequirements(e) {
                (e = e || []), Array.isArray(e) || (e = [e]);
                for (let n of e)
                  n.startsWith('js:') && (n = n.slice(3)),
                    n.startsWith('css:') && (n = n.slice(4)),
                    n.startsWith('cache:') && (n = n.slice(6)),
                    n.startsWith('http') &&
                      (await cacheUrlInServiceWorker(n).catch(e => {
                        console.error(e);
                      }));
              }
              function setupServiceWorker(e, n, t) {
                if ('serviceWorker' in navigator) {
                  if (
                    ((e = e || '/'),
                    navigator.serviceWorker
                      .register(e + 'plugin-service-worker.js')
                      .then(
                        function (e) {
                          console.log(
                            'ServiceWorker registration successful with scope: ',
                            e.scope
                          );
                        },
                        function (e) {
                          console.log('ServiceWorker registration failed: ', e);
                        }
                      ),
                    (n = n || '*'),
                    (t = t || cacheRequirements) && 'function' != typeof t)
                  )
                    throw new Error(
                      'config.cache_requirements must be a function'
                    );
                  window.addEventListener('message', function (e) {
                    if ('*' === n || e.origin === n) {
                      const n = e.data;
                      'cacheRequirements' === n.type && t(n.requirements);
                    }
                  });
                }
              }
              function urlJoin(...e) {
                return e
                  .join('/')
                  .replace(/[\/]+/g, '/')
                  .replace(/^(.+):\//, '$1://')
                  .replace(/^file:/, 'file:/')
                  .replace(/\/(\?|&|#[^!])/g, '$1')
                  .replace(/\?/g, '&')
                  .replace('&', '?');
              }
              class MessageEmitter {
                constructor(e) {
                  (this._event_handlers = {}),
                    (this._once_handlers = {}),
                    (this._debug = e);
                }
                emit() {
                  throw new Error('emit is not implemented');
                }
                on(e, n) {
                  this._event_handlers[e] || (this._event_handlers[e] = []),
                    this._event_handlers[e].push(n);
                }
                once(e, n) {
                  (n.___event_run_once = !0), this.on(e, n);
                }
                off(e, n) {
                  if (e || n) {
                    if (e && !n)
                      this._event_handlers[e] && (this._event_handlers[e] = []);
                    else if (this._event_handlers[e]) {
                      const t = this._event_handlers[e].indexOf(n);
                      t >= 0 && this._event_handlers[e].splice(t, 1);
                    }
                  } else this._event_handlers = {};
                }
                _fire(e, n) {
                  if (this._event_handlers[e])
                    for (var t = this._event_handlers[e].length; t--; ) {
                      const r = this._event_handlers[e][t];
                      try {
                        r(n);
                      } catch (e) {
                        console.error(e);
                      } finally {
                        r.___event_run_once &&
                          this._event_handlers[e].splice(t, 1);
                      }
                    }
                  else this._debug && console.warn('unhandled event', e, n);
                }
              }
            }
          });
        }),
        (module.exports = factory());
    }
  }
]);
