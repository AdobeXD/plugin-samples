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
`name`   | Human-readable name of the plugin. Note that this isn't currently visible anywhere.
`host`   | Used to ensure compatibility with certain hosts.
`host.app` | Indicates with which host apps this plugin is compatible. In this case, you should always use `XD` here so that Adobe XD picks up the plugin.
`host.minVersion` | Indicates the minimum version of the host app that can run this plugin.
`uiEntryPoints` | Allows you to define menu items that can launch your plugin.

`uiEntryPoints` is an array of the following structure:

key | description
----|----------------
`type` | This indicates the entry point type. Right now Adobe XD only supports `menu` entry points.
`label` | The label to use within the `Plugins` menu.
`commandId` | The identifier to use when executing exported plugin code. This identifier needs to be unique to the plugin (but doesn't need to be globally unique). It can be whatever you like, but it makes sense to succinctly describe what the command will do.
