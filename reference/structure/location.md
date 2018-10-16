# Plugin location

For XD to know your plugin exists, you'll need to put it in a certain folder on your computer and give it a name. On this page, you can learn where plugins are stored on your machine..


## Parent folder path

Adobe XD loads plugins from the `plugins` and `develop` folders. These folders are stored in a specific storage location based on your platform:

| Platform      | Path          |
| ------------- | ------------- |
| macOS         | `~/Library/Application\ Support/Adobe/Adobe\ XD\ CC/`|
| Windows       | `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD_adky2gkssdxte\LocalState\` |

This path will eventually (if it doesn't already) contain two folders: `develop` and `plugins`.

## The `develop` folder
The `develop` folder is used during plugin development, and is the only folder XD will reload plugins from when you [reload plugins from the _Plugins_ menu](/tutorials/debugging/#2-try-reloading-the-plugins).

XD makes it very easy for you to get to the `develop` folder: simply go to this menu item: Plugins > Development > Show Develop Folder.

> **tip**
> If there _isn't_ a folder that already exists named `develop`, you can go ahead and create it yourself.


## The `plugins` folder
The `plugins` folder is where production plugins are stored when the user installs them.

During development, you should *not* store your plugin in this folder, instead opting for the `develop` folder, as noted above. In other words, you should not need to work with the `plugins` folder directly; XD will manage this folder for the user.
