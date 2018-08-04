#### JSON manifest

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

See [detailed manifest documentation](../manifest.md) for more.
