# Plugin location and name

In this document, you can learn where plugins and stored on your machine and details about naming your plugin.


## Plugin location

Adobe XD loads plugins from the `plugins` and `develop` folders in a specific storage location based on your platform:

| Platform      | Path          |
| ------------- |:-------------:|
| macOS         | `~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/` |
| Windows       | `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\` |

### The `develop` folder
The `develop` folder is used during plugin development, and is the only folder XD will reload plugins from when you trigger **Plugins | Development | Reload Plugins**.

If there _isn't_ a folder that already exists with the name of `develop`, you can go ahead and create it yourself:

```bash
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/
$ mkdir develop
```

### The `plugins` folder
The `plugins` folder is where production plugins are stored when the user installs them. During development, you should not store your plugin in this folder, instead opting for the `develop` folder, as noted above.


## Plugin name

TBD