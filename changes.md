# Change Log

## Public Release 14.0.42

### New API Features

* [Document & node metadata](./reference/scenegraph.md#SceneNode-pluginData): Store plugin-specific info on individual scenegraph nodes or in the document in general.
* [Viewport](./reference/viewport.md): Pan and zoom the view of the document, and get information about the current viewport bounds.
* [Text](./reference/scenegraph.md#Text): Get/set paragraph spacing; create/modify area text; more easily work with uniform-styled text via convenience getter/setter APIs for character attributes.
* [Published links](./reference/cloud.md): Get latest links for prototypes & design specs that have been shared from the current document.

### Breaking Changes

* Plugins can only write to the clipboard or modify the selection while actively running a menu command (same as the rules for making scenegraph changes).

### Fixes and improvements

* For convenience, the arguments passed to plugin commands are now also available as [`scenegraph.selection`](reference/scenegraph.md#module_scenegraph-selection) and [`scenegraph.root`](reference/scenegraph.md#module_scenegraph-root).
* Exporting renditions to a folder _created by_ your plugin now works reliably on Windows if the folder name contains spaces or other special characters.
* `Rectangle.cornerRadii` now returns correct values if the corners are not all the same radius.

### User-facing plugin features

* Safe mode: To temporarily disable all plugins for troubleshooting purposes, launch XD while holding down Shift. Re-launching XD will re-enable all plugins.
* Uninstalling a plugin now clears its data/settings folder. Users are now prompted to confirm before uninstalling.

### Known Issues

See the [Known Issues page](./known-issues.md) for a comprehensive list.


----

## Public Release 13.0.12

### Fixes and improvements

* You can now export renditions to any user-chosen location on Windows.
    * Caveat: exporting renditions to a folder _created by_ your plugin will not work if the folder name contains spaces or other special characters. See [known issues](./known-issues.md) for details.

### Breaking Changes

* **File IO** - If the user cancels `getFileForOpening()` in single-file mode (the default), the API now resolves with null instead of an empty array. The multiple-file mode continues to resolve with an empty array when canceled.
* **Export Renditions** - You cannot make multiple concurrent calls to `application.createRenditions()`, since it was not guaranteed to work correctly in this case. Either wait for for the Promise from one call to finish before calling again, or accumulate all your requests into one array and make a single call for all of them.
* The undocumented global APIs `localStorage` and `sessionStorage` have been removed for now.
