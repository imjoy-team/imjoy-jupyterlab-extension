import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the imjoy-jupyterlab-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'imjoy-jupyterlab-extension:plugin',
  description: 'Run ImJoy plugins in JupyterLab',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension imjoy-jupyterlab-extension is activated!');
  }
};

export default plugin;
