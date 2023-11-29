# imjoy_jupyterlab_extension

[![Build](https://github.com/imjoy-team/imjoy-jupyterlab-extension/actions/workflows/build.yml/badge.svg)](https://github.com/imjoy-team/imjoy-jupyterlab-extension/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/imjoy-team/imjoy-jupyterlab-extension.git/main?urlpath=lab)
Run ImJoy plugins in JupyterLab

![screenshot of the imjoy jupyterlab extension](<./docs/Screenshot 2023-11-14 at 11.14.19.png>)

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install imjoy_jupyterlab_extension
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall imjoy_jupyterlab_extension
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the imjoy_jupyterlab_extension directory
npm run build
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
nvm use 16
npm i -d @types/node # required to solve https://github.com/microsoft/TypeScript/issues/51567
jupyter lab build
```

### Development uninstall

```bash
pip uninstall imjoy_jupyterlab_extension
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `imjoy-jupyterlab-extension` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)

## Testing the extension

Start jupyter lab:

```bash
jupyter lab
```

Open a notebook in jupyterlab, make sure the ImJoy icon is in the toolbar and run the following code in a notebook cell:

```python
from imjoy_rpc import api

class ImJoyPlugin():
    async def setup(self):
        pass

    async def run(self, ctx):
        viewer = await api.createWindow(src="https://kaibu.org/#/app")

        await viewer.view_image("https://images.proteinatlas.org/61448/1319_C10_2_blue_red_green.jpg")

api.export(ImJoyPlugin())
```
