/**
 * Initialization data for the imjoy-jupyterlab-extension extension.
 */
const plugin = {
    id: 'imjoy-jupyterlab-extension:plugin',
    description: 'Run ImJoy plugins in JupyterLab',
    autoStart: true,
    activate: (app) => {
        console.log('JupyterLab extension imjoy-jupyterlab-extension is activated!');
    }
};
export default plugin;
