# Folder structure

Adobe XD plugins require two files, with these _exact_ names:


1.   `manifest.json` is your plugin’s manifest.

    This file is where you include _facts_ about your plugin, such as its name, the menu item(s) it adds to XD, and so on. [Learn about the manifest here](./manifest.md).

1.   `main.js` is your plugin’s code. 

    This file contains your JavaScript code that implements the logic for your plugin. [Learn more about `main.js` here](./handlers.md).


These two files go into your plugin's parent directory. When you have the right structure, it will look like this:
<img src="/images/readme-assets/xd-folder-structure.png" width="40%" height="40%">

The `manifest.json` and `main.js` files stored in your plugin's parent directory are the bare minimum requirement for your plugin to work, but it's possible to have more files if you want. Any data files you need to include with your plugin can be read in using the [File APIs](../uxp/using-file-apis.md).

You can learn more about where plugins are stored in our [plugin location and name guide](./plugin-location-name.md).