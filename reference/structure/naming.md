# Plugin names and labels

In your [manifest.json](/reference/structure/manifest.md), The `uiEntryPoints` field is an array of objects including all UI entry points your plugin has available. All entries listed in this array appear both in the Plugins menu in the native menubar and the "plugin launchpad" sidebar panel. Let's learn how `name` and `label`s show up in XD.

## Top level name

No matter how many itmes you have in the `uiEntryPoints` array, XD will always use your plugin's name as the top level name for your plugin. For example, if you have "PLUGIN NAME" as your plugin name in your manifest.json file.

```js
"name": "PLUGIN NAME"
```
XD will display as the top menu item in the native menubar and in the "plugin launchpad"

![menu plugin name](/images/menu-plugin-name.png)
![panel plugin name](/images/panel-plugin-name.png)

## Sub-menu names

So where do `lable`s show up in XD? For example, if you have a plugin that has two `uiEntryPoints`, one modal and one panel:

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

You will see those labels shown as sub menu items under the plugin's name.

![menu plugin labels](/images/menu-plugin-labels.png)
![panel plugin labels](/images/panel-plugin-labels.png)

This behavior is expected when you have two or more items in the `uiEntryPoints` array. However, there is one unique scenario when this rule does not apply. If your plugin has only one item in the `uiEntryPoints` array, the `label` will be ignored and there won't be any sub menu item under the plugin's name. See below for an example:

```js
"uiEntryPoints": [
    {
        "type": "panel",
        "label": "this is a panel",
        "panelId": "enlargeRectangle"
    }
]
```

Since there is only one item in the `uiEntryPoints` array, XD will ignore the `label` and display the plugin's name as the top menu item.

![menu plugin name](/images/menu-plugin-name.png)
![panel plugin name](/images/panel-plugin-name.png)

This exception is applied to prevent user confusion and to promote the most ideal user experience.

