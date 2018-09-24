# Folder structure

Adobe XD plugins require two files, with these _exact_ names:

1.   `manifest.json` is your plugin’s manifest.

    This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on. [Learn about the manifest here](./reference/structure/manifest.html).
1.   `main.js` is your plugin’s code. 

    This file contains your JavaScript code that implements the logic for your plugin. [Learn more about `main.js` here](./reference/structure/handlers.html).

These two files are the bare minimum requirement for your plugin to work, but it's possible to have more files if you want. Any data files you need to include with your plugin can be read in using the [File APIs](./reference/uxp/using-file-apis.md).

You can learn more about where plugins are stored in our [plugin location and name guide](./plugin-location-name.md).