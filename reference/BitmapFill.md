#### _**Warning:** The BitmapFill API is not stable yet and is likely to change._

<a name="BitmapFill"></a>

## BitmapFill
**Kind**: class 

**Example**
```js
// User picks an image file
const storage = require("uxp").storage;
const fs = storage.localFileSystem;
var imageFile = (await fs.getFileForOpening({ types: storage.fileTypes.images }))[0];

// Create BitmapFill for this image
const BitmapFill = require("scenegraph").BitmapFill;
var bitmapFill = BitmapFill.create();
bitmapFill.loadFromURL(imageFile.nativePath);

// Set fill of first selected item
selection.items[0].fill = bitmapFill;
```

* [BitmapFill](#BitmapFill)
    * _static_
        * [.create(properties)](#BitmapFill.create) ⇒ <code>!BitmapFill</code>
    * _instance_
        * [.cloneWithOverrides(properties)](#BitmapFill+cloneWithOverrides) ⇒ <code>!BitmapFill</code>
        * [.loadFromURL(path)](#BitmapFill+loadFromURL) ⇒ <code>boolean</code>
        * [.loadBase64Image(dataURI)](#BitmapFill+loadBase64Image) ⇒ <code>boolean</code>
        * [.getBase64Representation()](#BitmapFill+getBase64Representation) ⇒ <code>string</code>
        * [.width](#BitmapFill+width) : <code>number</code>
        * [.height](#BitmapFill+height) : <code>number</code>
        * [.imageMIMEType](#BitmapFill+imageMIMEType) : <code>string</code>
        * [.scaleBehavior](#BitmapFill+scaleBehavior) : <code>string</code>
        * [.linked](#BitmapFill+linked) : <code>boolean</code>


* * *

<a name="BitmapFill.create"></a>

### BitmapFill.create(properties) ⇒ <code>!BitmapFill</code>
Create a new BitmapFill object with the given properties. These properties cannot be modified after the BitmapFill is created, but you can create a new BitmapFill with
changed properties via [<code>cloneWithOverrides</code>](#BitmapFill+cloneWithOverrides). Any properties not specified in the <code>properties</code> argument are left
at default values.

After creating a BitmapFill with <code>create()</code>, you must call [<code>loadFromURL</code>](#BitmapFill+loadFromURL) or
[<code>loadBase64Image</code>](#BitmapFill+loadBase64Image) to attach image data to the object.

**Kind**: static method of [<code>BitmapFill</code>](#BitmapFill)
**Returns**: <code>!BitmapFill</code>

| Param | Type | Description |
| --- | --- | --- |
| properties.scaleBehavior | <code>string</code> | Default is BitmapFill.SCALE_NORMAL |


* * *

<a name="BitmapFill+cloneWithOverrides"></a>

### bitmapFill.cloneWithOverrides(properties) ⇒ <code>!BitmapFill</code>
Returns a copy of this BitmapFill, with the given properties changed to new values. These properties cannot be modified after the cloned BitmapFill has been created.
Any properties not specified in the <code>properties</code> argument are copied unchanged from the original BitmapFill object.

**Kind**: instance method of [<code>BitmapFill</code>](#BitmapFill)  
**Returns**: <code>!BitmapFill</code>

| Param | Type |
| --- | --- |
| properties.scaleBehavior | <code>string</code> |


* * *

<a name="BitmapFill+loadFromURL"></a>

### bitmapFill.loadFromURL(path) ⇒ <code>boolean</code>
_**This is a temporary API.** The same capability will be exposed with a cleaner API in the future._

Loads a file from disk and initializes this BitmapFill to display it. Despite the function name, you must pass this function a _local filesystem path_ - it does not
support URLs from the network or even `file:` local URLs. Given a [<code>File</code>](./uxp/module/storage.md#file) object, use `file.nativePath` to get a local path
suitable for use with this function.

_Only call this method on a freshly-created "blank" BitmapFill_ (from [<code>create</code>](#BitmapFill.create)). _Do not call it_ on an existing BitmapFill or a clone of an existing fill.

**Kind**: instance method of [<code>BitmapFill</code>](#BitmapFill)  
**Returns**: <code>!BitmapFill</code>

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Local filesystem path to the image file. |


* * *

<a name="BitmapFill+loadBase64Image"></a> ⇒ <code>boolean</code>

### bitmapFill.loadBase64Image(dataURI)
Parses the given Base64-encoded image data and initializes this BitmapFill to display it.

_Only call this method on a freshly-created "blank" BitmapFill_ (from [<code>create</code>](#BitmapFill.create)). _Do not call it_ on an existing BitmapFill or a clone of an existing fill.

**Kind**: instance method of [<code>BitmapFill</code>](#BitmapFill)  
**Returns**: <code>boolean</code> true if the image data was successfully loaded

| Param | Type | Description |
| --- | --- | --- |
| dataURI | <code>string</code> | A `data:` URI pointing to a Base64-encoded image |


* * *

<a name="BitmapFill+getBase64Representation"></a> ⇒ <code>string</code>

### bitmapFill.getBase64Representation()
Encodes the image as a Base64 string and returns it. You can use this in conjunction with the [<code>imageMIMEType</code>](#BitmapFill+imageMIMEType) property to build a
`data:` URI representing this image.

**Kind**: instance method of [<code>BitmapFill</code>](#BitmapFill)  
**Returns**: <code>string</code>


* * *

<a name="BitmapFill+width"></a>

### *bitmapFill.width : <code>number</code>*
Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [<code>BitmapFill</code>](#BitmapFill)
**Read only**: true  


* * *

<a name="BitmapFill+height"></a>

### *bitmapFill.height : <code>number</code>*
Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [<code>BitmapFill</code>](#BitmapFill)  
**Read only**: true  


* * *

<a name="BitmapFill+imageMIMEType"></a>

### *bitmapFill.imageMIMEType : <code>string</code>*
Indicates the format the image data was originally encoded in, such as `image/gif` or `image/jpeg`.

**Kind**: instance property of [<code>BitmapFill</code>](#BitmapFill)  
**Read only**: true  


* * *

<a name="BitmapFill+scaleBehavior"></a>

### *bitmapFill.scaleBehavior : <code>string</code>*
How the image is scaled when the aspect ratio of the shape does not match the aspect ratio of the image:
- BitmapFill.SCALE_NORMAL - The image is stretched (distorting its aspect ratio) so its edges line up exactly with the edges of the shape. (Similar to
  <code>object-fit: fill</code> in CSS).
- BitmapFill.SCALE_COVER - The image's aspect ratio is preserved and it it scaled to completely cover the area of the shape. This means on one axis the image's edges
  line up exactly with the edges of the shape, and on the other axis the image extends beyond the shape's bounds and is cropped. (Similar to <code>object-fit: cover</code>
  in CSS).

Image size and scaling are also affected by _cropping settings_, but these are not yet exposed to plugins.

To change this property, use [<code>cloneWithOverrides</code>](#BitmapFill+cloneWithOverrides).

**Kind**: instance property of [<code>BitmapFill</code>](#BitmapFill)  
**Read only**: true  


* * *

<a name="BitmapFill+linked"></a>

### *bitmapFill.linked : <code>boolean</code>*
True if the image comes from a link to an external resource, such as Creative Cloud Libraries.

**Kind**: instance property of [<code>BitmapFill</code>](#BitmapFill)  
**Read only**: true  
