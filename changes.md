# Focus Group Release 4: The UI Update

The following has changed in this release.

## Breaking Changes

* The File I/O APIs have moved to a new module. Use `require("uxp").storage.localFileSystem` to get access to the local file system provider.
* Your plugins must now use the typical `module.exports` form to return commands. Instead of using `return`, just replace it with `module.exports = `.
* If you want to render any UI controls in your plugins, you will need to be on macOS 10.12 or better (or UWP).

## Export Renditions

For an example of using export renditions, [see this guide](https://adobe-xd.gitbook.io/plugin-guides/working-with-content/how-to-generate-an-export-rendition-guide).

## File I/O Improvements

You can now obtain the native path of an entry:

```js
const pathOnDisk = someFileEntry.nativePath;
```

You can also request a file entry from a folder using a path-like string:

```js
const somefile = await (await getPluginFolder()).getEntry('path/to/some/file');
```

Plugins can now store persistent information in their own folder without user mediation.

```js
const fs = require("uxp").storage.localFileSystem;
const dataFolder = await fs.getDataFolder();
```

For more, [see the full reference](./reference/uxp/module/storage.md).

## Open External Browser

You can now open the system browser by using a simple API:

```js
require("uxp").shell.openExternal("https://www.google.com");
```

## User Interface

Read about [the user interface options here!](./reference/ui/ui-concepts.md).

## Known Issues

* User Interface
  * Checkboxes on Windows take up too much space
  * Pressing ENTER doesn't submit the dialog form
* Network I/O
  * Web sockets cannot connect to `wss://` URLs yet. You can only connect to insecure `ws://` URLs.
  * Web socket extensions are not supported
  * Synchronous XHR is not supported
  * Sending or receiving blobs using XHR is not supported
  * `responseURL` is not supported on XHR

---


# Focus Group Release 3

The following has changed in this release.

## Breaking Changes

* `xdplugin.json` has been renamed to `manifest.json`.
* `manifest.json` requires a `version` key with the plugin version in `x.y.z` form.

## Networking APIs

Networking APIs now work correctly on Windows (UWP).

## Asynchronous Scenegraph Access

In order to access the scenegraph asynchronously, your menu handler must return a `Promise`. Until the promise has been resolved, the scenegraph can be manipulated asynchronously. Should the promise be rejected, any changes to the scenegraph will be undone, just as if an error were thrown from synchronous code.

_**Important caveat:**_ In this build, when a plugin command runs asynchronously, _you should not interact with XD at all_ via mouse or keyboard until your plugin code is completely done executing. Doing so could freeze XD, break Undo, or corrupt the document. In the future, XD will block the UI to ensure other actions can't interfere with your plugin in mid-operation.

For example:

```js
const fs = require("localFileSystem").localFileSystem;
const { Rectangle, Color } = require("scenegraph");

async function addColoredSquareHandler(selection) {
    const [file] = await fs.getFileForOpening();
    const colorValue = await file.read(); // read the CSS or named color from a user's file
    const shape = new Rectangle();
    shape.width = 100;
    shape.height = 100;
    shape.fill = new Color(colorValue); // and create a rectangle with the color in the file
    selection.insertionParent.addChild(shape);
}

return {
    commands: {
        "addColoredSquareCommand": addColoredSquareHandler
    }
}
```

See the [File I/O API Reference](../reference/file-IO.md) for more information about creating, reading, and writing files.

## Known Issues

* Note that Websockets do not currently work with SSL (`wss://`). This is planned for a future release.
* The developer console currently logs a lot of information unrelated to plugins. This will be fixed in a future release.

---

# _Previous Build:_ Focus Group Release 2

_Note: some of the release notes here may be obsoleted by changes in the newer release(s) above._

We modified some of the APIs, added an in-app console log view and replaced the plugin reload mechanism.

## Developer Console

We now have an in-app developer console that allows you to see errors and plugin generated logs while executing plugins. The console log is enabled from the Plugins menu.
```
Mac: Plugins->Development->Developer Console
Win: Plugins->Developer Console
```

## Reloading Plugins

We have replaced the previous 3 keyboard shortcut options with a new `Reload Plugins` command. The new command reloads all plugins found in the plugins folder, even newly added plugins. You can invoke plugin reload from the Plugins menu or via keyboard shortcuts:
```
Mac: Plugins > Development > Reload Plugins (Cmd-Shift-R)
Win: Plugins > Reload Plugins (Ctrl-Shift-R)
```

## APIs

These are high level API changes made in this release. Specific API details are available in the reference section of the documentation.

## File and Network
File and Network APIs are now available. To protect the scenegraph any asynchronous file or network API must be called after all scenegraph APIs are invoked. Trying to call into a scenegraph API after an asynchronous call will fail.

## Commands
Added
```
alignLeft()
alignRight()
alignHorizontalCenter()
alignTop()
alignBottom()
alignVerticalCenter()
distributeHorizontal()
distributeVertical()
alignToPixelGrid()
```
Removed
```
createSymbol()
createRepeatGrid()
```

## SceneNode
Removed
```
localDrawBounds
```
Replaced
```
hasCustomName
```
with
```
hasDefaultName
```
So the complete opposite API

## Rectangle
Replaced
```
topLeftCornerRadius
topRightCornerRadius
bottomRightCornerRadius
bottomLeftCornerRadius
```
with
```
cornerRadii
```
Replaced
```
getEffectiveCornerRadii()
```
with
```
effectiveCornerRadii
```

## RepeatGrid
Modified
```
columns
rows
```
to
```
numColumns
numRows
```
