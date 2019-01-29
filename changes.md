# Change Log

## XD Release 15.0.12

### New API Features

* [Assets panel colors & text styles](./reference/assets.md): Get/add/remove any colors, gradients, and text styles saved in the Assets panel.
* [Deep link to plugin listings](./distribution/how-to-create-deep-links.md): Link from web sites, social media, etc. directly to your plugin listing in XD's UI so users can easily install the plugin.

### Breaking Changes

No breaking changes.

### Fixes and improvements

No other API changes.

### User-facing plugin features

* Disable plugins: Temporarily disable a plugin without uninstalling it or erasing its data. Choose _Plugins > Manage Plugins_, then click the "..." menu for a specific plugin and choose _Disable_.
  A disabled plugin does not appear anywhere in the XD UI other than the Manage Plugins view, and none of its code is loaded or run.
* Force stop: If a plugin operation is blocking XD for more than one second with no UI shown, the user sees a spinner with the option to force-stop the plugin. _This does not stop the plugin's code
  from running_, but it reverts any partially-completed changes to the document and revokes the plugin from being the foreground operation (unblocking the XD UI and blocking the plugin from making
  document changes until it's invoked again by the user). If the plugin does eventually reawaken and try to continue running code from earlier, any attempts to modify the document will throw an error.

### Known Issues

* *New:* Plugins can modify the Assets panel contents while running in the background. Do not rely on this - in a future release, it will be blocked.

See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 14.0.42

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

* "Discover Plugins" listing improvements:
    * Sort by plugin name, in addition to the default of sorting by release date.
    * Searching the plugin listing now searches the description field in addition to just the plugin title.
* Safe mode: To temporarily disable all plugins for troubleshooting purposes, launch XD while holding down Shift. Re-launching XD will re-enable all plugins.
* Uninstalling a plugin now clears its data/settings folder. Users are now prompted to confirm before uninstalling.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 13.0.12

### Fixes and improvements

* You can now export renditions to any user-chosen location on Windows.
    * Caveat: exporting renditions to a folder _created by_ your plugin will not work if the folder name contains spaces or other special characters. See [known issues](./known-issues.md) for details.

### Breaking Changes

* **File IO** - If the user cancels `getFileForOpening()` in single-file mode (the default), the API now resolves with null instead of an empty array. The multiple-file mode continues to resolve with an empty array when canceled.
* **Export Renditions** - You cannot make multiple concurrent calls to `application.createRenditions()`, since it was not guaranteed to work correctly in this case. Either wait for for the Promise from one call to finish before calling again, or accumulate all your requests into one array and make a single call for all of them.
* The undocumented global APIs `localStorage` and `sessionStorage` have been removed for now.
