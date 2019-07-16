<a name="module_application"></a>

## application

The `application` module exposes APIs for exporting content, initiating edits from panel UI, and getting version / locale info.

* [application](#module_application)
   * [.editDocument(options, editFunction) | (editFunction)](#module_application-editDocument)
   * [.createRenditions(renditions)](#module_application-createRenditions) ⇒ `Promise<Array, string>`
   * [.version](#module_application-version) : <code>string</code>
   * [.appLanguage](#module_application-appLanguage) : <code>string</code>
   * [.systemLocale](#module_application-systemLocale) : <code>string</code>


---

<a name="module_application-editDocument"></a>

### *application.editDocument(options, editFunction) | (editFunction)*

Call `editDocument()` from a **plugin panel UI** event listener to initiate an [edit operation](./core/lifecycle.md#edit-operations) batch in order to modify the XD document. This API is irrelevant for plugin menu item commands, which are wrapped in an edit batch automatically.

XD calls the `editFunction()` synchronously (before `editDocument()` returns). This function is treated the same as a [menu command handler](./structure/handlers.md#command):
* It is passed two arguments, the selection and the root node of the scenegraph
* It can return a Promise to extend the duration of the edit asynchronously

You can _only_ call `editDocument()` in response to a user action, such as a button `"click"` event or a text input's `"input"` event. This generally means you must call it while a UI event handler is on the call stack.

For UI events that often occur in rapid-fire clusters, such as dragging a slider or pressing keys in a text field, XD tries to smartly merge consecutive edits into a single atomic Undo step. See the `mergeId` option below to customize this behavior.

**Kind**: static method of [<code>application</code>](#module_application)

| Param   | Type          | Description                                                         |
| ------- | ------------- | ------------------------------------------------------------------- |
| options | EditSettings= | Optional settings object (see below). This argument can be omitted. |
| editFunction | !function(!Selection, !RootNode):?Promise | Function which performs your plugin's edits to the scenegraph. |

**Typedef EditSettings**

| Property  | Type    | Description                                                                                               |
| --------- | ------- | --------------------------------------------------------------------------------------------------------- |
| editLabel | ?string | Used as the Undo label in the **Edit** menu. If unspecified, XD uses the `uxp-edit-label` attribute on the DOM node which the user interacted with, and if that does not exist then the plugin's name will be used. |
| mergeId   | ?string | If two consecutive edits to the same selection have the same `mergeId`, they are flattened together into one Undo step. If unspecified, for "high frequency" UI events (see above), XD treats the originating DOM node as a unique identifier for merging; for other UI events, merging is disabled. |

**Example**
```js
let Color = require("scenegraph").Color;
let application = require("application");

let panelButton = document.querySelector("panel #myButton");

// When button is clicked, set selected item's fill to solid red
panelButton.addEventListener("click", event => {
    application.editDocument(selection => {
        selection.items[0].fill = new Color("red");
    });
});
```

> **Info**
> For comparison, plugin [menu command handlers](structure/handlers.md#command) are effectively run as if they were passed to `editDocument()` with `editLabel` set to the menu item's label and `mergeId` set to null.


---

### *application.createRenditions(renditions)*

Generate renditions of nodes in the document in a batch. Overwrites any existing files without warning.

A single `createRenditions()` call can generate any number of renditions, including multiple renditions of the same node (with
different output settings) or renditions of multiple different nodes. Only one `createRenditions()` call can be executing at any
given time, so wait for the Promise it returns before calling it again.

**Kind**: static method of [<code>application</code>](#module_application)  
**Returns**: `Promise<Array<RenditionResult>, string>` - Promise which is fulfilled with an array of RenditionResults (pointing to
the same `outputFile`s that were originally passed in, or rejected with an error string if one or more renditions failed for
any reason.

| Param      | Type                        | Description                    |
| ---------- | --------------------------- | ------------------------------ |
| renditions | Array&lt;RenditionSettings> | List of renditions to generate |

**Typedef RenditionSettings**

_All rendition settings fields are required_ (for a given rendition type) unless otherwise specified.

| Property    | Type              | Description                                                                                                                                                            |
| ----------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node        | !SceneNode        | Root of scenegraph subtree to render. This may be _any_ node in the scenegraph, regardless of the current edit context.                                                |
| outputFile  | !uxp.storage.File | File to save the rendition to (overwritten without warning if it already exists)                                                                                       |
| type        | string            | File type: RenditionType.PNG, JPG, PDF, or SVG                                                                                                                         |
| scale       | number            | _(PNG & JPG renditions)_ DPI multipler in the range [0.1, 100], e.g. 2.0 for @2x DPI.                                                                                  |
| quality     | number            | _(JPG renditions)_ Compression quality in the range [1, 100].                                                                                                          |
| background  | ?Color            | _(PNG & JPEG renditions)_ Alpha component ignored for JPG. Optional: defaults to transparent for PNG, solid white for JPG.                                             |
| minify      | boolean           | _(SVG renditions)_ If true, SVG code is minified.                                                                                                                      |
| embedImages | boolean           | _(SVG renditions)_ If true, bitmap images are stored as base64 data inside the SVG file. If false, bitmap images are saved as separate files linked from the SVG code. |

**Typedef RenditionResult**

| Property   | Type              | Description                                                                    |
| ---------- | ----------------- | ------------------------------------------------------------------------------ |
| outputFile | !uxp.storage.File | File the rendition was written to (equal to `outputFile` in RenditionSettings) |

**Example**
```js
// Generate PNG rendition of the selected node
let application = require("application");
let fs = require("uxp").storage.localFileSystem;

let file = await fs.getFileForSaving();
let shape = selection.items[0];
let renditions = [
  {
    node: shape,
    outputFile: file,
    type: application.RenditionType.PNG,
    scale: 2
  }
];
application.createRenditions(renditions).then(function(results) {
  // ...do something with outputFiles on disk...
});
```


---

<a name="module_application-version"></a>

### *application.version : <code>string</code>*

Adobe XD version number in the form "major.minor.patch.build"

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true

**Example**
```js
console.log("Version:", application.version); // e.g. "13.0.21.3"
```


---

<a name="module_application-appLanguage"></a>

### *application.appLanguage : <code>string</code>*

Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest
locale _supported by XD_ - use this when you want your plugin's UI to be consistent with XD's UI. Specifies
language only, with no region info (e.g. "fr", not "fr_FR").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  

**Example**
```js
console.log("XD locale:", application.appLanguage); // e.g. "en"
```


---

<a name="module_application-systemLocale"></a>

### *application.systemLocale : <code>string</code>*

User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both
language _and_ region (e.g. "fr_CA" or "en_US").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  

**Example**
```js
console.log("OS locale:", application.systemLocale); // e.g. "en_US"
```
