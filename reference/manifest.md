# Plugin manifest

Adobe XD expects plugins to have an `xdplugin.json` manifest that looks like the following:

```json
{
    "id": "com.example.unique.id",
    "name": "Name of the plugin",
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

key path | description
---------|------------
`id`     | This is a unique identifier for your plugin. It's common to use reverse domain notation. The behavior is undefined if two plugins have the same identifier.
`name`   | Human-readable name of the plugin. Note that this isn't visible to the user _yet_.
`host.app` | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `XD`).
`host.minVersion` | Indicates the minimum required version of Adobe XD that can run this plugin.
`host.maxVersion` | Optional. Indicates the maximum version of XD that can run this plugin.
`uiEntryPoints` | Defines a list of commands that appear in the Plugins menu.

`uiEntryPoints` is an array of the following structure:

key | description
----|----------------
`type` | This indicates the entry point type. Right now Adobe XD only supports `menu` entry points.
`label` | The label for this menu item.
`commandId` | Identifier that links the menu item to a function in your plugin's JavaScript code (see [Menu item handlers](../index.md#Menu-item-handlers). This identifier needs to be unique within your plugin (but doesn't need to be globally unique). It can be whatever you like, but it makes sense to succinctly describe what the command will do.
