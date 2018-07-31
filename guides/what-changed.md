# These are the changes since the first prerelease drop

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
