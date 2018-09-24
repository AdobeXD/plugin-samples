<a name="module_application"></a>

## application
The `application` module exposes useful information about XD's state, along with APIs for exporting content.

**Example**  
```js
// Generate PNG rendition of the selected node
var application = require("application");
var fs = require("uxp").storage.localFileSystem;
var file = await fs.getFileForSaving();
var shape = selection.items[0];
var renditions = [{
     node: shape,
     outputFile: file,
     type: application.RenditionType.PNG,
     scale: 2
}];
application.createRenditions(renditions).then(function (resultFiles) {
    ...
});
```

**Example**  
```js
var application = require("application");
console.log("Version:", application.version);        // e.g. "13.0.21.3"
console.log("XD locale:", application.appLanguage);  // e.g. "en"
console.log("OS locale:", application.systemLocale); // e.g. "en_US"
```

* [application](#module_application)
    * [.createRenditions(renditions)](#module_application.createRenditions) ⇒ `Promise<Array, string>`
    * [.version](#module_application.version) : <code>string</code>
    * [.appLanguage](#module_application.appLanguage) : <code>string</code>
    * [.systemLocale](#module_application.systemLocale) : <code>string</code>


* * *

<a name="module_application.createRenditions"></a>

### application.createRenditions(renditions)
Generate renditions of nodes in the document in a batch. Overwrites any existing files without warning.

**Kind**: static method of [<code>application</code>](#module_application)  
**Returns**: `Promise<Array<RenditionResult>, string>` -  Promise which is fulfilled with an array of RenditionResults (pointing to
the same `outputFile`s that were originally passed in, or rejected with an error string if one or more renditions failed for
any reason.

| Param | Type | Description |
| --- | --- | --- |
| renditions | Array&lt;RenditionSettings> | List of renditions to generate |

**Typedef RenditionSettings**

_All rendition settings fields are required_ (for a given rendition type) unless otherwise specified.

| Property | Type | Description |
| --- | --- | --- |
| node | !SceneNode | Root of scenegraph subtree to render |
| outputFile | !uxp.storage.File | File to save the rendition to (overwritten without warning if it already exists) |
| type | string | File type: RenditionType.PNG, JPG, PDF, or SVG |
| scale | number | _(PNG & JPG renditions)_ DPI multipler in the range [0.1, 100], e.g. 2.0 for @2x DPI. |
| quality | number | _(JPG renditions)_ Compression quality in the range [1, 100]. |
| background | ?Color | _(PNG & JPEG renditions)_ Alpha component ignored for JPG. Optional: defaults to transparent for PNG, solid white for JPG. |
| minify | boolean | _(SVG renditions)_ If true, SVG code is minified. |
| embedImages | boolean | _(SVG renditions)_ If true, bitmap images are stored as base64 data inside the SVG file. If false, bitmap images are saved as separate files linked from the SVG code. |

**Typedef RenditionResult**

| Property | Type | Description |
| --- | --- | --- |
| outputFile | !uxp.storage.File | File the rendition was written to (equal to `outputFile` in RenditionSettings) |


* * *

<a name="module_application.version"></a>

### *application.version : <code>string</code>*
Adobe XD version number in the form "major.minor.patch.build"

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  


* * *

<a name="module_application.appLanguage"></a>

### *application.appLanguage : <code>string</code>*
Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest
locale *supported by XD* - use this when you want your plugin's UI to be consistent with XD's UI. Specifies
language only, with no region info (e.g. "fr", not "fr_FR").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  


* * *

<a name="module_application.systemLocale"></a>

### *application.systemLocale : <code>string</code>*
User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both
language *and* region (e.g. "fr_CA" or "en_US").

**Kind**: static property of [<code>application</code>](#module_application)  
**Read only**: true  
