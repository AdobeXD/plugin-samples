# The `manifest.json` file

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

For example, the manifest specifies the _menu item_ (or list of menu items!) that your plugin will add to XD's "Plugins" menu. The declaration for a single menu item looks like this:

```json
    {
        "type": "menu",
        "label": "Hello World",
        "commandId": "helloCommand"
    }
```

You can learn about the details of this and more below.


## Plugin manifest reference

Adobe XD expects plugins to have a `manifest.json` file that looks like this:

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Name of your plugin",
    "version": "0.0.1",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Menu Item",
            "commandId": "exportedCommandId"
        }
    ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.


### Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.

Key path | Description
---------|------------
`id`     | This is a unique identifier for your plugin. You can get your unique ID on the Adobe I/O Console. [Learn more here]().
`name`   | Human-readable name of your plugin. Note that this isn't visible to the user _yet_.
`version`| Version number of your plugin in `x.y.z` format.
`host.app` | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `XD`).
`host.minVersion` | Indicates the minimum required version of Adobe XD that can run this plugin.
`host.maxVersion` | _Optional._ Indicates the maximum version of XD that can run this plugin.
`uiEntryPoints` | Defines a list of commands that appear in the Plugins menu. See the following section for details.

### UI entry points array

The `uiEntryPoints` field is an _array of objects_ containing the following data:

Key | Description
----|----------------
`type` | This indicates the entry point type. Right now Adobe XD only supports `menu` entry points.
`label` | The label for this menu item that the user will select to run your plugin.
`commandId` | The identifier that links the menu item to a function in your plugin's JavaScript code. This identifier needs to be unique within your plugin (but doesn't need to be globally unique). It can be whatever you like, but it makes sense to succinctly describe what the command will do.

If you specify multiple menu items, they'll appear in the UI in the same order as they're listed in the `uiEntryPoints` array.
