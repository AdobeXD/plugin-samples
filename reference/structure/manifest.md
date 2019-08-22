# The `manifest.json` file

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

## Example manifest

```json
{
    "id": "YOUR_ID_HERE",
    "name": "Name of Your Plugin",
    "version": "0.0.1",

    "description": "Description of your plugin.",
    "summary": "Summary of your plugin",
    "releaseNotes": "Release note",
    "keywords": [
        "utility",
        "productivity",
        "automation"
    ],
    "languages": [
        "en",
        "de",
        "fr"
    ],
    "website": "https://mywebsite.com",
    "author": "Your Name",
    "helpUrl": "https://mywebsite.com/help",
    "icons": [
        { "width": 24, "height": 24, "path": "images/icon@1x.png" },
        { "width": 48, "height": 48, "path": "images/icon@2x.png" },
        { "width": 96, "height": 96, "path": "images/icon@3x.png" },
        { "width": 144, "height": 144, "path": "images/icon@4x.png" },
        { "width": 192, "height": 192, "path": "images/icon@5x.png" }
    ],
    "host": {
        "app": "XD",
        "minVersion": "13.0",
        "maxVersion": "19.0"
    },

    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Hello World Command",
            "commandId": "helloCommand"
        },
        {
            "type": "panel",
            "label": "Hello World Panel",
            "panelId": "helloPanel"
        }
    ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.


## Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.
> **Info**
> Here are the definitions of the keywords in the "Required" column:
> - Develop - required field for XD to run the plugin. If excluded, XD won't load the plugin
> - Publish - required field for plugins to be submitted in the I/O Console and published in the Plugin Manager
> - Optional - optional field for all plugins

Key path | Type | Description | Required
---------|------|-------------|---------
`id`     | `string` | Unique identifier for your plugin. You can get your unique ID on the [Adobe I/O Console](https://console.adobe.io/plugins).| Develop / Publish
`name`   | `string` | Human-readable *name of your plugin* displayed in the Plugin Manager listing. <br> Must be globally unique among all published plugins. Name availability can be checked on your plugin details page on the [I/O Console](https://console.adobe.io/plugins).<br> The name should be 3 - 45 characters. <br> **Note:** Your plugin name is independent of the _project name_ you created when getting your plugin ID from the I/O Console. The I/O Console project name is for your reference only, and is managed directly on the I/O Console. | Develop / Publish
`version`| `string` | Version number of your plugin in `x.y.z` format. <br>Version must be three segments and each version component must be between `0` and `99`. | Develop / Publish
`description` | `string` | Detailed description displayed in the Plugin Manager listing when "See details" is clicked. <br>The detailed description should be 3 - 1000 characters. | Publish
`summary` | `string` | Short summary displayed in the Plugin Manager listing. <br>Short summary should be 3 - 30 characters. | Publish
`releaseNotes` | `string` | Description of changes displayed to the user when "See details" is clicked in the Plugin Manager listing. <br> Release notes help both your users and the CC Integrations Review team know what's new or fixed in your plugin. <br> Release notes should be 3 - 1000 characters. | Optional
`keywords` | `array<string>` | Keywords for your plugin. <br> Each keyword should be at least 2 characters with a max _concatenated keywords_ length of 100 characters, excluding commas. | Optional
`languages` | `array<string>` | Language(s) supported by your plugin. <br>The language must be a two-letter code from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Currently, only the following codes are allowed: `en` (English), `de` (German), `fr` (French), `ja` (Japanese), `ko` (Korean), `zh` (Chinese), `es` (Spanish), `pt` (Brazilian Portuguese). <br>This field will be displayed in the Plugin Manager to users when "See details" is clicked.  | Publish
`website` | `string` | Web address for information about your plugin. <br> This field will be displayed in the Plugin Manager to users when "See details" is clicked. <br>The URL should follow the standard URL format and not exceed 1000 characters.| Optional
`author` | `string` | Plugin author's name. <br> This field will be displayed in the Plugin Manager to users. <br> Name should be 3 - 40 characters.| Publish
`helpUrl` | `string` | Web URL for your plugin's support/help page. <br> This field will become visible in the Plugin Manager to users when "See details" is clicked. <br> The support page you link to must include information on how to get support. <br> The URL should follow the standard URL format and not exceed 1000 characters. <br> **Note:** For GitHub repositories, you should link to a `README.md` file or other Markdown file that describes how to file an issue, or link directly to an issue submission form. _Do not link directly to your repo's list of issues._ | Publish
`icons` | `array<object>` | Icons displayed in the Plugin Manager listing. <br> PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. <br> All five sizes are required - `[24, 48, 96, 144, 192]`. | Publish
`host.app` | `string` | Indicates that this is a plugin for Adobe XD (currently, the only valid value here is `"XD"`). | Develop / Publish
`host.minVersion` | `string` | Minimum required version of the host app (in `x.y` format) that can run this plugin. <br> **Note:** Must be two segments. Typically, you'll leave the minor segment set to `0`, e.g. `16.0`. | Develop / Publish
`host.maxVersion` | `string` | Maximum version of host app that can run this plugin. Same formatting as `host.minVersion`. | Optional
`uiEntryPoints` | <code>array&lt;[MenuItemDefinition](#MenuItemDefinition)&gt;</code> | Describes the entries your plugin adds to the _Plugins_ menu & "plugin launchpad" sidebar in XD. See the next section for details. | Develop / Publish

## UI entry points

The `uiEntryPoints` field is an _array_ of objects matching the MenuItemDefinition format specified below. These entries appear both in the _Plugins_ menu in the native menubar, and the "plugin launchpad" sidebar panel. See [Plugin menu structure](/reference/structure/menu-structure.md) for details on how these entries are displayed.

Each entry point specifies either `commandId` _or_ `panelId`, to create either a direct-action command or a panel show/hide command.

### MenuItemDefinition

Key | Type | Description
----|------|------------
`type` | `string` | Entry point type: either `"menu"` or `"panel"`.
`label` | <code>?string&#124;[LocaleMap](#menu-localization)</code> | _Required_ if multiple `MenuItemDefinition` objects defined; _ignored_ if only one defined.<br><br> Label for this menu item that the user will select to run your plugin. May be a single string _or_ a dictionary of localized strings. 
`commandId` | `string` | Specify `commandId` to create a menu item that runs plugin code directly -- either a headless command, or a command with modal dialog box UI. This identifier links the menu item to a [_handler function_](./handlers.md#command) in your plugin's JavaScript code. This identifier needs to be unique within your plugin. Don't specify `commandId` and `panelId` at the same time.
`panelId` | `string` | Specify `panelId` to create a menu item that opens panel UI for your plugin. This identifier links the menu item to a [_panel definition_ object](./handlers.md#panel) in your plugin's JavaScript code. This identifier needs to be unique within your plugin. Don't specify `commandId` and `panelId` at the same time.
`shortcut` | `Object` | _Optional._ Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details.

### Keyboard shortcuts

**Example:** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }`

Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:

* One or more modifier keys, in any order, each one followed by `"+"`
    * _Mac:_ modifiers may be `Cmd`, `Ctrl`, `Opt` / `Alt`, or `Shift`. Shortcut _must_ contain at least one of `Cmd` or `Ctrl`.
    * _Win:_ modifiers may be `Ctrl`, `Alt`, or `Shift`. Shortcut _must_ contain `Ctrl`.

* A letter or number key.
    * Letters are case-insensitive (e.g. `"Cmd+P"` and `"Cmd+p"` mean the same thing and neither requires pressing Shift).
    * Other keys (including punctuation, arrow keys, or F1-F12) are currently _not supported_.

> **Info**
> If your shortcut collides with a built-in XD command _or_ another plugin's shortcut, your shortcut will be ignored and you'll see a warning printed to the [developer console](/tutorials/debugging/#1-look-for-errors-in-the-developer-console).

## Menu Localization

Plugin menu item labels or panel labels can be localized to match XD's current UI language setting. Other manifest fields such as `name` and `description` _cannot be localized yet._

Localized labels are represented as an object containing multiple translations, instead of a single string value:

```json
"label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
}
```

A default string is always required. The language must be a two-letter code from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), _not_ a hyphenated code such as `en-US`. To avoid inconsistency with the rest of XD's built-in menu items, languages that aren't supported by XD are ignored.

> **Info**
> You can also localize strings that appear in your plugin's own dialog UI, by choosing which strings to use in your UI based on the value of [application.appLanguage](../application.md#module_application-appLanguage).
