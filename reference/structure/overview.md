## Plugin Structure
An XD plugin consists of a folder containing the following files:

* `manifest.json` - Metadata describing the plugin and which menu items it exposes
* `main.js` - JavaScript source code
* Any data files you need to include with your plugin (you can read these files using [File APIs](./reference/uxp/using-file-apis.md)

Plugin folders are located in XD's platform-specific [plugins location](./plugin-location.md).