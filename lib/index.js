import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { ITranslator } from '@jupyterlab/translation';
import { ImjoyExtension, parseURL } from './imjoy-extension.js';
/**
 * Initialization data for the imjoy-jupyterlab-extension extension.
 */
const plugin = {
    id: 'imjoy-jupyterlab-extension',
    requires: [IFileBrowserFactory, ITranslator],
    autoStart: true,
    activate: async function (app, factory, translator) {
        const trans = translator.load('jupyterlab');
        // const { defaultBrowser: browser } = factory;
        // Manually restore and load the default file browser.
        const browser = factory.createFileBrowser('filebrowser', {
            auto: false,
            restore: false
        });
        const jupyterBaseUrl = app.serviceManager.settings.serverSettings.baseUrl;
        app.docRegistry.addWidgetExtension('Notebook', new ImjoyExtension(jupyterBaseUrl, app, browser));
        console.log('JupyterLab extension imjoy-jupyterlab-extension is activated!');
        const currentLocation = new URL(window.location.href);
        app.started.then(() => {
            parseURL(currentLocation.search, app, browser, trans).finally(() => {
                // restore location, since jupyterlab will force double slashes into single
                window.history.pushState(null, '', currentLocation.href);
            });
        });
    }
};
export default plugin;
//# sourceMappingURL=index.js.map