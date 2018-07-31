# Focus Group Release 3

The following has changed in this release.

## Breaking Changes

* `xdplugin.json` has been renamed to `manifest.json`.
* `manifest.json` requires a `version` key with the plugin version in `x.y.z` form.

## Networking APIs

Networking APIs now work correctly on Windows (UWP).

## Asynchronous Scenegraph Access

In order to access the scenegraph asynchronously, your menu handler must return a `Promise`. Until the promise has been resolved, the scenegraph can be manipulated asynchronously. Should the promise be rejected, any changes to the scenegraph will be undone, just as if an error were thrown from synchronous code.

For example:

```js
const fs = require("localFileSystem").localFileSystem;
const { Rectangle } = require("scenegraph");

async function menuCommand(selection) {
    const [file] = await fs.getFileForOpening();
    const contents = await file.read();
    const shape = new Rectangle();
    shape.width = 100;
    shape.height = 100;
    shape.fill = new Color(contents);
    selection.insertionParent.addChild(shape);.
}
```

See the [File I/O API Reference](./reference/file-IO.md) for more information about creating, reading, and writing files.

## Known Issues

* Note that Websockets do not currently work with SSL (wss://). This is planned for a future release.
* The developer console currently logs a lot of information unrelated to plugins. This will be fixed in a future release.

---

# Focus Group Release 2

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
