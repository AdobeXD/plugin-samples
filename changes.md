# Change Log

XD Release 27.0.12 (February 2020)
-------------------------------------
XD 27 is a minor update for plugin developers, with one new added API:

* Get and set [`SceneNode.blendMode`](./reference/scenegraph.md#SceneNode-blendMode)

[Read more about XD 27 new features for end users on the Adobe blog](https://theblog.adobe.com/announcing-mac-os-voice-control-adobe-xd).


XD Release 26.0.12 (January 2020)
-------------------------------------

### Drag & drop
UXP now supports the [HTML5 Drag & Drop specification](https://html.spec.whatwg.org/multipage/dnd.html) for _some specific use cases_:

* **Drag & drop within your plugin's UI**
    * On the drag source in your UI, set the `draggable` attribute _and_ define a `dragstart` event handler that stores whatever data you want via `dataTransfer.setData()`.
    * On the drop target in your UI, defined `dragenter`, `dragover`, and `drop` event handlers that react appropriately.
* **Drag from plugin panel UI into XD document**
    * Only bitmap images, SVG content, or text can be dropped into the document.
    * Provide the mimetype `text/uri-list` and populate it only with local file paths (see [`File.nativePath`](./reference/uxp/module/storage.md#module-storage-entry-nativepath)) and/or `data:` image URIs.
    * This will behave exactly the same as if the user had dropped files onto XD -- dropping an image onto a shape will use it as a mask, dropping multiline text onto a Repeat Grid text node will populate each grid cell with each line from the text content, etc.
* It is not yet supported to drag content _onto_ your plugin from an outside source (e.g. dropping files on your plugin UI, or dragging images from another app into your plugin UI).

For more, [see this **sample plugin code**](https://github.com/AdobeXD/plugin-samples/tree/master/ui-panel-simple-drag-and-drop).

### Debugging with Chrome DevTools _(beta)_
You can now use the Chrome DevTools UI (CDT) to debug your JS code -- and _to a limited extent_, inspect your UI DOM structure. **Read the updated [debugging tutorial](./tutorials/debugging/index.md)** for details.

**What works:**
* Set breakpoints, pause & stop through code, inspect the values of variables
* View objects and run code in the Console view
* View and edit the "HTML" DOM structure of your plugin's UXP UI

**Important caveats:**
* XD may be unstable while debugging a plugin. Don't debug when you have important XD documents open.
* If you leave CDT on the Elements view, XD will crash the next time you open it. If this happens, keep CDT open after XD crashes and switch to a different tab. Then close CDT, restart XD, and begin debugging again.
* Debugging on Windows requires some extra steps run with admin rights -- see tutorial for details.
* Many features in the Elements tab do not work. You can view DOM structure, and view limited CSS information but not edit CSS rules. The "Select an element" button does nothing.
* Error messages are often _missing_ from the Console view. Use the _Plugins > Development > Developer Console_ view in XD to be sure you are not missing any important information.
* Other DevTools features such as the Network or Profiling tabs are not supported and may behave erratically if you attempt to use them.
* XD will be partially frozen while paused on a JS breakpoint. Don't try to interact with XD while paused.
* You may see a blank white panel to the left of the DevTools UI. Ignore this, as it does nothing.

### Other API updates
* Polygon scenenodes can now take on a star shape - see [`Polygon.starRatio`](./reference/scenegraph.md#Polygon-starRatio)


XD Release 25.1.12 (December 2019)
-------------------------------------

XD 25 is a minor bug-fix release with no new features for end users. But it adds two small improvements for plugins:

* New [`application.activeDocument` API](./reference/application.md#module_application-activeDocument) providing information about the document.
* Fixed bug where `scenegraph.root.guid` did not return a valid guid; it now returns the same value as `application.activeDocument.guid`.


XD Release 24.0.22 (November 2019)
-------------------------------------

### New XD Features

[Read more about XD's biggest release of the year here](https://theblog.adobe.com/xd-november-2019-update-coediting-more/).

* **Live Co-editing _beta_**
    * Plugin [edit operations](./reference/core/lifecycle.md#edit-operations) (`editDocument()` or menu commands) are still fully atomic. Outside those blocks, edits from a remote user can come in at any time, just like edits from the local user could. Edits made by remote users will trigger a plugin panel's `update()` method, just the same as edits made by the local user.
    * If a plugin edit conflicts with a remote user's edit that started slightly sooner, the plugin edit will get cleanly reverted (in favor of the other user's edit) _after_ the plugin operation has fully completed.
    * Remote updates are paused in a known-good document state while a plugin edit is in progress (including the lifespan of any modal dialogs), so the scenegraph state won't change while your code is in the middle of processing it. Similarly, updates made by the plugin are sent atomically to remote users once the entire plugin edit operation has finished.

* **Component states & interactions**
    * For each Component instance, only the currently active state is visible in the scenegraph hierarchy. Content in other, non-visible states is not accessible to plugins yet.
    * Hover and state-change interactions are not exposed to plugins yet, but will be in the future. If your plugin is reading interactions/prototyping data, be sure to always have a default case if your code encounters unexpected types.
    * Reminder: a single scenenode can return multiple interactions from [`node.triggeredInteractions`](./reference/scenegraph.md#SceneNode-triggeredInteractions). This was possible before in some cases, but is allowed in more cases now (for example, one node can have a click/tap trigger, a drag trigger, *and* a hover trigger).

* **New Plugin Manager UI**
    * Users can rate plugins on a 5-star rating scale.
    * Users can sort by popularity or rating, filter by category, and easily share deep links to a specific plugin.
    * Each plugin listing now displays one or more screenshots (see "New plugin listing process" below for how to add these).
    * If you have a plugin in development *and* an installed plugin with the same id, Plugin Manager now shows both for clarity. You can still only enable one of them at a time, though.

* **Sharing enhancements**
    * The [`cloud.getSharedArtifacts()` API](./reference/cloud.md#module_cloud-getSharedArtifacts) may now return an arbitrary number of shared links, and there may be more than one link of the same type (e.g. multiple specs links).
    * The distinction between link types has blurred a bit: links that are `ArtifactType.SPECS` may _also_ include access to an interactive prototype view, just like links of type `ArtifactType.PROTOTYPE`.

### Smaller fixes and improvements
* Fixed issue where `shell.openExternal()` was allowing plugins to launch non-Web URL protocols in a way that only worked on Mac. Full cross-platform support for doing this will be added in the future.
* CSS / DOM event improvements in UXP plugin UI -- including support for text input color, img `srcset`, and online/offline events. [Read more](https://medium.com/adobetech/whats-new-for-developers-in-adobe-xd-24-max-release-5cee8e3eea6f#7b2e).
* Fixed text descender clipping in plugin UI on Mac.
* Plugin panels now include the plugin's icons in the panel header, next to your plugin's name.

### Known Issues
* Live Co-editing is still a beta feature. Performance and reliability will not be comparable to other aspects of XD yet.
    * Plugins that edit a large number of objects at once may not work reliably when using Live Co-editing.
    * If the user makes multiple consecutive edits using a plugin, some of the edits may get erroneously reverted when using Live Co-editing.
    * Plugin dialog boxes that a user leaves open for a long time may not work correctly when using Live Co-editing.
    * Users may be unable to undo edits made by a plugin when using Live Co-editing.
* Hover and state-transition interactions are not returned to plugins yet when requesting the list of interactions on a scenenode or the entire document.


XD Release 23.1.32 (October 2019)
-------------------------------------

### New plugin listing process
Information shown in the plugin listing has moved out of `manifest.json` and is instead provided online when you submit a plugin to the listing.

* Submitting a plugin also now requires at least one _screenshot image_.
* Icons seen in the Plugin Manager list must be provided online during submission, but icons seen in the Plugins side panel must still be part of the plugin package folder.
* As of XD 23, the Plugin Manager UI ignores description, author, links, etc. in `manifest.json`. Submitting to the public listing is now the _only_ way to display this info in Plugin Manager. See [updated manifest documentation](./reference/structure/manifest.md).
* As of September 24, submitting a new or updated plugin to the public listing requires supplying all these details via the developer submission portal online. See [How to submit to Plugin Manager](distribution/how-to-submit-to-plugin-manager.md).

### Smaller fixes and improvements
* Clarified that `editDocument()` does not support the `mergeId` option for UI events that are not "high frequency."
* Can `preventDefault()` on Esc or Enter in text fields to prevent the default action of sending focus back to the canvas.
* Fixed bug with setting opacity of BooleanGroup nodes.
* Plugin Manager UI shows plugins that were disabled because they're incompatible with the current version of XD, with tooltip explaining why.
* Several fixes to UI layout & CSS handling -- [details here](https://medium.com/adobetech/whats-new-for-developers-in-adobe-xd-23-october-release-ed7cb04b6e2f).


----

XD Release 22.0.12 (August 2019)
----------------------------------

After a stabilization period, plugins using panel UI are now published in the Plugin Manager listing!

### Fixes and improvements

* Fixed bugs related to `editDocument()` usage (also fixed in XD 21.1.12).
* PUT/POST requests on Windows were including an unwanted `Transfer-Encoding` header, which interfered with uploading data to services like Amazon S3 (e.g. giving you errors related to `Content-Length`).
* Plugins can now copy text to the clipboard in response to a panel UI DOM event without needing to call `editDocument()`.


----

XD Release 21.0.12 (July 2019)
----------------------------------

XD 21 adds major updates: the ability to **show panel UI**, and the much-improved **UXP 3 CSS & layout engine**.

> **Danger**
>
> _The new layout engine likely constitutes a **breaking change** for any plugin with UI_ -- read below for details.

Also note that this release has an issue where transactions being wrapped by `editDocument` is _not_ enforced. This will be fixed in an upcoming patch version, so you will want to continue wrapping scenegraph changes from panels in `editDocument` so that your plugin isn't broken when we release the fix.

### Plugin Panel UI

* Plugins can now display UI persistently in a side panel. More information:
    * [How to define a panel](./reference/structure/handlers.md#panel)
    * [Panel overview / reference](./reference/ui/panels/index.md)
    * [Panel Quick Start tutorial](./tutorials/quick-start-panel/index.md)
    * [Migrating from dialogs to panels](./migrations/how-to-migrate-from-modal-to-panel.md)
* A new default stylesheet is provided for plugin UI that renders inside a plugin. This means that UI that renders in one manner in a modal dialog may not render in the same exact manner in a panel.

### UXP 3 HTML/CSS changes

In order to gain access to most of these features, your plugin must _opt-in_ to the UXP 3.1 layout engine by changing the `minVersion` in your `manifest.json`:

```json
    "host": {
        "minVersion": "21.0"
    }
```

> **NOTE:** Without this change, your plugin will run in [backwards-compatibility mode](./migrations/uxp-2-to-3.md).

* **Layout engine**
    * **Inline layout** -- You now have the ability to write code like `<p>This is <a href="...">a link</a></p>` and have the link render _inline_ with the rest of the text
    * **Layout now defaults to inline** (no longer flexbox) -- _This may break existing plugin UI code:_ now `span` elements will render with `inline`, `button`s will render as `inline-block`, etc.
    * **`overflow` defaults to `visible`** (no longer `hidden`), per the web specification -- _This may break existing plugin UI code._
    * `object-fit` -- to control the size of images
    * `z-index`
    * Improvements to `position`, including correct `absolute` semantics.
      * **WARNING**: Technically `position: fixed` is supported. However, _you should not use it_ in your plugin panels because there are some bugs that will be fixed in a future update that will break if your plugin uses `position: fixed`.
* **SVG UI elements**
* **New UI controls**
    * Radio buttons -- `<input type="radio" />`
    * Progress bars & spinners -- `<progress>`
* **CSS improvements**
    * `linear-gradient()`
    * `outline`
    * More units! -- UXP now understands `rem`, `em`, `px`, `pt`, `vh`, `vw`, `cm`, `in`, etc. **NOTE:** UXP will now start ignoring values (other than `0`) that don't specify any units, which can break older plugin UI code.
    * CSS Variables -- easily apply themes and other layout to your plugin.
    * More pseudo-selectors -- `:lang` and `:focus`
    * `calc()` -- For example, `width: calc(100% - 9px)`. Note that you can mix units, just like you can on the web.
    * Inheritance -- The CSS parser now understands `initial`, `unset`, and `inherit`. You can also use `!important` to override styles (although you should use this as a last resort).
    * Default styles are now easier to override as the specificity in the default stylesheet has been reduced.
* **Keyboard focus** -- Setting `tab-index` to `0` will now cause any element to be focusable. You can **not** yet control the tab order.

### Known Issues

See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

XD Release 20.0.12 (June 2019)
----------------------------------

### UI Changes

* **"Launchpad" UI and menu structure changes** -- XD 20 introduces a new, easier way for users to run plugins -- the "launchpad" sidebar menu:
  <div style="background:url(images/launchpad-icon.png); width: 39px; height: 111px; margin-left: 40px" alt="Launchpad icon"></div><!-- works around fancybox plugin breaking image size-->

  This panel lists all installed plugins, with quick access to all the same commands as the Plugins menu. In addition, XD now arranges plugin menu items more cleanly:
  * Multiple menu items are automatically grouped together into a submenu named after the plugin. There's
    no longer any need to manually specify submenus.
  * If your plugin only has a single menu item, it'll still be available directly at the top level of the
    Plugins menu.
  * However, _top level menu items always use the name of the plugin._ If your plugin's single menu item had a
    different label specified, it will be ignored.

### API Improvements

* **Text scenenode super/subscript** -- Work with Text nodes and style assets using the new [textScript](./reference/scenegraph.md#Text-textScript)
  feature.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

XD Release 19.0.12 (May 2019)
----------------------------------

### New API Features

* **[Read prototyping interactions](./reference/interactions.md)** -- Read-only access to the interactivity settings in the document (e.g. the blue "wires"
  seen in XD's prototyping UI).
* **New [Polygon](./reference/scenegraph.md#Polygon) node type**

### Breaking Changes

* **Components & Design Systems** -- Symbols are now called Components in XD's UI, and they support resizing and complex overrides. One important consequence
  of this is that **_sometimes only a subset of your plugin's changes will be applied to the scenegraph_**. When the user is editing the "master" copy of the
  Component, each individual scenegraph change (e.g. changing a single property on a single node) is automatically synced to other instances of the Component
  _only if_ a given instance doesn't already have an override of the same property (or a related property). As a result, your plugin's intended changes may
  only be partially (non-atomically) applied in some Component instances: if your plugin command makes, say, 5 changes to the scenegraph, in some instances
  only, say, 3 of those changes will actually be applied.

  In many cases, this partial application of your plugin's changes will feel natural to users as an expected consequence of the overrides they have authored.
  However, you can also choose to mitigate potential confusion by warning users or disabling some editing features while the user is editing a Component
  "master" by checking [`isMaster`](./reference/scenegraph.md#SymbolInstance-isMaster) on `selection.editContext` and its parent chain. There is currently
  no way to force all changes made by your plugin command to be applied atomically (i.e. all or nothing).

### Fixes and improvements

* **Additional Text scenenode styles** -- Work with Text nodes and style assets using the new [strikethrough](./reference/scenegraph.md#Text-strikethrough)
  and [text transform](./reference/scenegraph.md#Text-textTransform) features.

### User-facing plugin features

* **Plugin listing: View popular & Editor's Choice plugins** -- Use the dropdown at the top of the plugin listing to view the top 10 most popular plugins or
  the latest featured plugins selected by our review team.

### Known Issues

No new known issues. See the [Known Issues page](./known-issues.md) for a comprehensive list of existing known issues.


----

XD Release 18.0.12 (April 2019)
----------------------------------

### New API Features

* **Text field controls:**
    * `<input type="password">`
    * `<input type="search">` -- displays search icon
    * `<input type="number">` -- restricted to numeric characters, and Up/Down arrow keys automatically change the value
* **CSS improvements:**
    * Inline `style` attributes now work when used with `innerHTML` and friends.
    * Pseudo-class `:focus`
    * Pseudo-class `:lang()`
* **Send `FormData` with XHR** -- This provides an easy way to post data to an endpoint expecting `multipart/form-data`. (But uploading binary files with Blob is not supported yet -- use ArrayBuffer).
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

XD Release 17.0.12 (March 2019)
----------------------------------

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

XD Release 16.0.12 (February 2019)
----------------------------------

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

XD Release 15.0.12 (January 2019)
----------------------------------

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

XD Release 14.0.42 (December 2018)
----------------------------------

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

XD Release 13.0.12 (October 2018)
----------------------------------

First release of Adobe XD featuring a public API for in-app plugins!
