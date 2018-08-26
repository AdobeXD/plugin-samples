# JSON manifest

Among other metadata, the manifest specifies a list of _menu items_ to add to XD's Plugins menu. The manifest assigns
each item a _command ID_. Your plugin's main.js file will link each command ID to a _handler function_ that executes
when the menu command is invoked by the user.

The declaration for a single menu item looks like this:
```json
    {
        "type": "menu",
        "label": "Hello World",
        "commandId": "helloCommand"
    }
```

## Plugin manifest reference

Adobe XD expects plugins to have an `manifest.json` manifest that looks like the following:

```json
{
    "id": "com.example.unique.id",
    "name": "Name of the plugin",
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

Fields are required unless otherwise noted.

key path | description
---------|------------
`id`     | This is a unique identifier for your plugin. **NOTE**: IDs are currently typically in reverse domain notation. This will be changing in the future, so don't get attached to your plugin ID.
`name`   | Human-readable name of the plugin. Note that this isn't visible to the user _yet_.
`version`| Version number of the plugin in `x.y.z` format.
`host.app` | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `XD`).
`host.minVersion` | Indicates the minimum required version of Adobe XD that can run this plugin.
`host.maxVersion` | _Optional._ Indicates the maximum version of XD that can run this plugin.
`uiEntryPoints` | Defines a list of commands that appear in the Plugins menu.

`uiEntryPoints` is an array of the following structure:

key | description
----|----------------
`type` | This indicates the entry point type. Right now Adobe XD only supports `menu` entry points.
`label` | The label for this menu item.
`commandId` | Identifier that links the menu item to a function in your plugin's JavaScript code (see [Menu item handlers](./handlers.md). This identifier needs to be unique within your plugin (but doesn't need to be globally unique). It can be whatever you like, but it makes sense to succinctly describe what the command will do.

If you specify multiple menu items, they'll appear in the UI in the same order as they're listed in the `uiEntryPoints` array.
