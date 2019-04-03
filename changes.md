# Change Log

## XD Release 18.0.12 (April 2019)

### New API Features

* **Text field controls:**
    * `<input type="password">`
    * `<input type="search">` -- displays search icon
    * `<input type="number">` -- restricted to numeric characters, and Up/Down arrow keys automatically change the value
* **CSS improvements:**
    * Inline `style` attributes now work when used with `innerHTML` and friends.
    * Pseudo-class `:focus`
    * Pseudo-class `:lang()`
* **Send `FormData` in XHR**
* **requestAnimationFrame() for UI** -- Complimenting the earlier addition of `setTimeout()` APIs, this new global API makes it easier to use certain UI libraries such as "react-virtualized" with
  fewer polyfills. These APIs _do not_ allow plugins to control animations in the XD document -- plugins can still only modify the document as part of an atomic operation while the UI is blocked.
  But this API does allow for simple animations in your plugin's dialog UI (e.g. a progress indicator).

### Breaking Changes

* **`develop` folder location change** (Mac only) -- The "Adobe XD CC" folder was renamed to just "Adobe XD." The contents of the `develop` folder will _automatically be moved_ to the new location
  the first time you launch XD 18.
* **Checkboxes with React** -- Checkboxes now correctly trigger `change` events in React. The previously recommended workaround (using `ref` to manually assign an event handler) will now cause
  your `change` handler to get invoked _twice_.
* Advance warning: In the _near future_ XD's scenegraph will add at least one new subclass of `GraphicNode` (i.e. a new leaf node shape type). Always be sure to have a default case for unknown
  scenenode types/classes when traversing the scenegraph.

### Fixes and improvements

* **UI control / DOM API fixes:**
    * It is now possible to set a checkbox to `checked` by using `<input type="checkbox" checked/>`.
    * `<option>` tags do now support `selected` attributes, but do not support `disabled` attributes.
    * Accepting text in Japanese IME by presing Enter no longer triggers the default button in a dialog.
    * Fixed an issue where sometimes the image size is 0 in a plugin.
    * Corrected spacing of text using `lineHeight` property.
    * Fixed handling `selected` attribute of `option` to set default option.
    * `parentNode` on `document` now returns `null` instead of `undefined`
    * Fixed `forEach` for `NodeList`.
    * Node `previousSibling` and `nextSibling` when not set should return `null` and not `undefined`.
    * Fixed for `DOMTokenList` `item` and `contains` method bugs.
    * Fix checkbox issues when using a label.
* **Network API fixes:**
    * `XMLHttpRequest` throws error with request status 500 for `NSURLConnection` error codes.
* **File API fixes:**
    * Misleading error message when `getEntry()` fails.
    * Corrected the behavior of `types` argument in `getFileForSaving` API.


### User-facing plugin features

* **Plugin listing displays new fields** -- The `summary`, `languages`, and `website` fields that were recently added to the [manifest](https://adobexdplatform.com/plugin-docs/reference/structure/manifest.html)
  are now displayed in the Discover/Manage Plugins UI.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

# Change Log

## XD Release 17.0.12 (March 2019)

### New API Features

* **[Select & edit across groups](./reference/core/edit-context.md):** Users can now select multiple items that are in different containers at the same time. This has several effects on plugins:
    * _Do not assume all selected items have the same parent node._ Previously, this was already true in certain special cases -- for example, users could select items that are the immediate
      children of several different artboards. Now, it can happen in far more cases, so plugins must take extra care to avoid any assumptions about node parents.
    * _Wider "edit scope" surrounding the selection._ Previously, plugins could edit the selected nodes and all their siblings (with a slightly broader scope as a special case in the "root edit
      context"). Now, plugins can edit any nodes in the subtree of the common ancestor of all the selected nodes, _if_ those nodes are connected to the common ancestor through a parent chain
      consisting entirely of plain Groups (or Artboards). See the [edit context documentation](./reference/core/edit-context.md) for details and examples.
    * _Plugins still cannot edit globally across the entire document at once, even though in very simple testing it may _appear_ that this works. Non-Group containers act as blockades that
      the edit scope cannot cross - if the selection is outside such a container, you cannot edit inside it; and if the selection is inside such a container, you cannot edit outside it.
* **Additional manifest fields required for publishing:** As of March 5, submitting a new or updated plugin for the in-app plugins listing requires providing new `summary`, `author`, and `languages`
  fields, as well as several additional icon sizes. See [manifest documentation](./reference/structure/manifest.md).

### Breaking Changes

No breaking changes.

### Fixes and improvements

No other API changes.

### User-facing plugin features

* **Plugin update notifications:** Users see an in-app notification when any installed plugins have a newer version available in the plugins listing.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 16.0.12 (February 2019)

### New API Features

* **setTimeout() & friends:** `setTimeout()`, `setInterval()`, `setImmediate()`, and the corresponding `clear*()` methods are now available as global APIs. These APIs _do not_ allow plugins to
  control animations in the XD document -- plugins can still only modify the document as part of an atomic operation while the UI is blocked. But timeout APIs _do_ allow for simple animations in
  your plugin's dialog UI (e.g. a progress indicator), "debouncing" user input, etc. – and they help support web frameworks like React with fewer polyfills needed.

### Breaking Changes

No breaking changes.

### Fixes and improvements

No other API changes.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 15.0.12 (January 2019)

### New API Features

* **[Assets panel colors & text styles](./reference/assets.md):** Get/add/remove any colors, gradients, and text styles saved in the Assets panel.
* **[Deep link to plugin listings](./distribution/how-to-create-deep-links.md):** Link from web sites, social media, etc. directly to your plugin listing in XD's UI so users can easily install the plugin.

### Breaking Changes

No breaking changes.

### Fixes and improvements

No other API changes.

### User-facing plugin features

* **Disable plugins:** Temporarily disable a plugin without uninstalling it or erasing its data. Choose _Plugins > Manage Plugins_, then click the "..." menu for a specific plugin and choose _Disable_.
  A disabled plugin does not appear anywhere in the XD UI other than the Manage Plugins view, and none of its code is loaded or run.
* **Force stop:** If a plugin operation is blocking XD for more than one second with no UI shown, the user sees a spinner with the option to force-stop the plugin. _This does not stop the plugin's code
  from running_, but it reverts any partially-completed changes to the document and revokes the plugin from being the foreground operation (unblocking the XD UI and blocking the plugin from making
  document changes until it's invoked again by the user). If the plugin does eventually reawaken and try to continue running code from earlier, any attempts to modify the document will throw an error.

### Known Issues

* *New:* Plugins can modify the Assets panel contents while running in the background. Do not rely on this - in a future release, it will be blocked.

See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 14.0.42 (December 2018)

### New API Features

* **[Document & node metadata](./reference/scenegraph.md#SceneNode-pluginData):** Store plugin-specific info on individual scenegraph nodes or in the document in general.
* **[Viewport](./reference/viewport.md):** Pan and zoom the view of the document, and get information about the current viewport bounds.
* **[Text](./reference/scenegraph.md#Text):** Get/set paragraph spacing; create/modify area text; more easily work with uniform-styled text via convenience getter/setter APIs for character attributes.
* **[Published links](./reference/cloud.md):** Get latest links for prototypes & design specs that have been shared from the current document.

### Breaking Changes

* Plugins can only write to the clipboard or modify the selection while actively running a menu command (same as the rules for making scenegraph changes).

### Fixes and improvements

* For convenience, the arguments passed to plugin commands are now also available as [`scenegraph.selection`](reference/scenegraph.md#module_scenegraph-selection) and [`scenegraph.root`](reference/scenegraph.md#module_scenegraph-root).
* Exporting renditions to a folder _created by_ your plugin now works reliably on Windows if the folder name contains spaces or other special characters.
* `Rectangle.cornerRadii` now returns correct values if the corners are not all the same radius.

### User-facing plugin features

* **"Discover Plugins" listing improvements:**
    * Sort by plugin name, in addition to the default of sorting by release date.
    * Searching the plugin listing now searches the description field in addition to just the plugin title.
* **Safe mode:** To temporarily disable all plugins for troubleshooting purposes, launch XD while holding down Shift. Re-launching XD will re-enable all plugins.
* **Uninstalling** a plugin now clears its data/settings folder. Users are now prompted to confirm before uninstalling.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

## XD Release 13.0.12 (October 2018)

This was the first release of Adobe XD featuring a public API for in-app plugins!
