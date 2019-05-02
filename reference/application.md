<a name="module_application"></a>

## application

The `application` module exposes useful information about XD's state, along with APIs for exporting content.

- [application](#module_application)
  - [.editDocument(options, editFunction)](#module_application-editFunction)
  - [.createRenditions(renditions)](#module_application-createRenditions) ⇒ `Promise<Array, string>`
  - [.version](#module_application-version) : <code>string</code>
  - [.appLanguage](#module_application-appLanguage) : <code>string</code>
  - [.systemLocale](#module_application-systemLocale) : <code>string</code>

---

<a name="module_application-createRenditions"></a>

<<<<<<< HEAD
### application.editDocument(editSettings, editFunction)
=======
### application.editDocument(options, editFunction)

>>>>>>> 248103556d97f36597b76cfc44da4017affd8a94
> **Info**
>
> This method is only applicable to buliding panel plugins.

Since panel-based plugins are completely asynchronous, they require a different model for interacting with the scenegraph. There's no way to return a `Promise`, for example, to hold the scenegraph open for changes for the entire duration your panel is visible.

Scenegraph modifications can only occur from user-initiated actions in your plugin. XD determines if an action was initiated by the user via your plugin's UI, and if so, prepares to allow scenegraph modifications.

XD makes this determination by watching HTML elements that have an `id` attribute, so you'll need to have an `id` for any element the user will use to trigger an action that will alter the scenegraph.

For example:

```
<button id="apply">Apply</button>
```

**Kind**: static method of [<code>application</code>](#module_application)

<<<<<<< HEAD
| Param | Type | Description |
| --- | --- | --- |
| editSettings | Object&lt;EditSettings> | List of edit settings |
| editFunction | function | Accepts two parameters: `selection` and `documentRoot`|
=======
| Param        | Type                    | Description                                            |
| ------------ | ----------------------- | ------------------------------------------------------ |
| options      | Object&lt;EditSettings> | List of options                                        |
| editFunction | function                | Accepts two parameters: `selection` and `documentRoot` |
>>>>>>> 248103556d97f36597b76cfc44da4017affd8a94

**Typedef EditSettings**

| Property  | Type   | Description                                                                                               |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- |
| editLabel | string | Used as the Undo label in the **Edit** menu. If left empty, the plugin name will be used.                 |
| mergeId   | string | All edits with the same `mergeId` will be grouped as one undo. `selection` change overrides merged edits. |

---

### application.createRenditions(renditions)

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

### _application.version : <code>string</code>_

Adobe XD version number in the form "major.minor.patch.build"

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true

**Example**

```js
let application = require("application");
console.log("Version:", application.version); // e.g. "13.0.21.3"
```

---

<a name="module_application-appLanguage"></a>

### _application.appLanguage : <code>string</code>_

Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest
locale _supported by XD_ - use this when you want your plugin's UI to be consistent with XD's UI. Specifies
language only, with no region info (e.g. "fr", not "fr_FR").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  
**Example**

```js
let application = require("application");
console.log("XD locale:", application.appLanguage); // e.g. "en"
```

---

<a name="module_application-systemLocale"></a>

### _application.systemLocale : <code>string</code>_

User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both
language _and_ region (e.g. "fr_CA" or "en_US").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  
**Example**

```js
let application = require("application");
console.log("OS locale:", application.systemLocale); // e.g. "en_US"
```
