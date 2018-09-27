# The `manifest.json` file

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

### Example

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Name of Your Plugin",
    "version": "0.0.1",

    "description": "Description of your plugin.",
    "icons": [
        { "width": 96, "height": 96, "path": "images/icon.png" }
    ],

    "host": {
        "app": "XD",
        "minVersion": "13.0.11"
    },

    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Menu Item",
            "commandId": "myCommandId",
            "shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }
        }
    ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.


### Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.

Key path | Type | Description
---------|------|------------
`id`     | `string` | Unique identifier for your plugin. You can get your unique ID on the Adobe I/O Console. [Learn more here]().
`name`   | `string` | Human-readable name of your plugin. Note that this isn't visible to the user _yet_.
`version`| `string` | Version number of your plugin in `x.y.z` format.
`description` | `string` | Description displayed in the Plugin Manager listing.
`icons` | `Array<Object>` | Icon(s) displayed in the Plugin Manager listing. Currently, you should supply only a single icon that is 96x96 at 2x scale (XD will automatically downscale it to 48x48 on a 1x display; you cannot provide a second, separate 48x48 image file at this time).
`host.app` | `string` | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `"XD"`).
`host.minVersion` | `string` | Minimum required version of Adobe XD that can run this plugin.
`host.maxVersion` | `string` | _Optional._ Maximum version of XD that can run this plugin.
`uiEntryPoints` | `Array<MenuItemDefinition or SubmenuDefinition>` | List of objects describing what entries your plugin adds to the Plugins menu in XD. See the next section for details.

### UI entry points array

The `uiEntryPoints` field is an _array_ of objects, and each object must match one of the two formats below. Items appear in the Plugins menu in the same order as they're listed in the `uiEntryPoints` array.

#### MenuItemDefinition (executable menu items)

Key | Type | Description
----|------|------------
`type` | `string` | Entry point type. Currently `"menu"` is the only supported value.
`label` | `string` or `Object` | Label for this menu item that the user will select to invoke your plugin. May be a single string _or_ an object containing localized strings (see "Localization," below).
`commandId` | `string` | Identifier that links the menu item to a function in your plugin's JavaScript code. This identifier needs to be unique within your plugin (but doesn't need to be globally unique). It can be whatever you like, but it makes sense to succinctly describe what the command will do.
`shortcut` | `{mac: string, win: string}` | _Optional._ Object defining Mac & Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details.

#### SubmenuDefinition (submenu)

Key | Type | Description
----|------|------------
`type` | `string` | Entry point type. Currently `"menu"` is the only supported value.
`label` | `string` or `Object` | Label for this submenu. May be a single string _or_ an object containing localized strings (see below).
`menuItems` | `Array<MenuItemDefinition>` | Nested array specifying the menu items this submenu contains. Only a single submenu nesting level is supported, so this array may not contain any `SubmenuDefinition`s itself, only executable `MenuItemDefinition`s.

#### Keyboard shortcuts

Keyboard shortcuts are defined separately for each platform (as seen in the example at top). Each definition is a string that follows this syntax:

* One or more modifier keys, in any order, each one followed by `"+"`
    * _Mac:_ modifiers may be `Cmd`, `Ctrl`, `Opt` / `Alt`, or `Shift`. Shortcut _must_ contain at least one of `Cmd` or `Ctrl`.
    * _Win:_ modifiers may be `Ctrl`, `Alt`, or `Shift`. Shortcut _must_ contain `Ctrl`.

* A letter or number key.
    * Letters are case-insensitive (e.g. `"Cmd+P"` and `"Cmd+p"` mean the same thing and neither requires pressing Shift).
    * Other keys - including punctuation, arrow keys, or F1-F12 - are currently _not supported_.

If your shortcut collides with a built-in XD command _or_ another plugin's shortcut, your shortcut will be ignored and you'll see a warning printed to the Developer Console.

### Localization

Plugin menu item labels can be localized to match the rest of XD's UI. Other fields such as `name` and `description` _cannot be localized yet._

Localized labels are represented as an object containing multiple translations, instead of a single string value:

```json
"label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
}
```

A default string is always required. The language must be a two-letter code from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) - _not_ a hyphenated code such as `en-US`. To avoid inconsistency with the rest of XD's built-in menu items, languages that aren't supported by XD are ignored.

You can also localize strings that appear in your plugin's own dialog UI, by choosing which strings to use in your UI based on the value of [application.appLanguage](../application.md#module_application.appLanguage).
