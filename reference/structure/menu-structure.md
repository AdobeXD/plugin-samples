# Plugin menu structure

In your [manifest.json](/reference/structure/manifest.md), The `uiEntryPoints` field is an array of objects including all UI entry points your plugin has available. All entries listed in this array appear both in the Plugins menu in the native menubar and the "plugin launchpad" sidebar panel. Let's learn how these items appear in XD.

## Top level name

No matter how many itmes you have in the `uiEntryPoints` array, XD will always use your plugin's name as the top level label for your plugin in the UI. For example, if you have "PLUGIN NAME" as your plugin name in your manifest.json file:

```js
"name": "PLUGIN NAME"
```

XD will display this as the top menu item in the native menubar and in the "plugin launchpad":

![menu plugin name](/images/menu-plugin-name.png)
![panel plugin name](/images/panel-plugin-name.png)

## Submenu names

So where do the `label`s you specify in `uiEntryPoints` show up in XD? For example, if you have a plugin with one modal-dialog command and one panel:

```js
"uiEntryPoints": [
    {
        "type": "menu",
        "label": "This is a modal",
        "commandId": "test"
    },
    {
        "type": "panel",
        "label": "this is a panel",
        "panelId": "enlargeRectangle"
    }
]
```

You will see those labels shown as _submenu_ items under the plugin's name:

![menu plugin labels](/images/menu-plugin-labels.png)
![panel plugin labels](/images/panel-plugin-labels.png)

## Single-item plugins

If your plugin has only **one** item in the `uiEntryPoints` array, its `label` will be ignored. Instead of having a single submenu item nested under the plugin's name, XD will simply show the plugin's name itself as a directly actionable top-level menu item, which triggers the plugin's one entry point. For example:

```js
"uiEntryPoints": [
    {
        "type": "panel",
        "label": "this is a panel (IGNORED)",
        "panelId": "enlargeRectangle"
    }
]
```

Since there is only one item in the `uiEntryPoints` array, XD will ignore the `label` and display the plugin's name as the top menu item.

![menu plugin one label](/images/menu-plugin-one-label.png)
![panel plugin one label](/images/panel-plugin-one-label.png)

This exception is applied to prevent user confusion and to promote the most ideal user experience.

