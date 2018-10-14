<a name="ImageFill"></a>

## ImageFill
**Kind**: class

ImageFill represents a bitmap (raster) image that can be used as the `fill` property of any shape node (but not Artboards).
The supported image encodings are: PNG, JPEG, and GIF.

**Example**
```js
// User picks an image file
const storage = require("uxp").storage;
const fs = storage.localFileSystem;
let imageFile = await fs.getFileForOpening({ types: storage.fileTypes.images });

// Create ImageFill for this image
const ImageFill = require("scenegraph").ImageFill;
let fill = new ImageFill(imageFile);

// Set fill of first selected item
selection.items[0].fill = fill;
```

* [ImageFill](#ImageFill)
    * [new ImageFill(fileOrDataURI)](#new_ImageFill_new)
    * [.clone()](#ImageFill+clone) ⇒ <code>!ImageFill</code>
    * [.scaleBehavior](#ImageFill+scaleBehavior) : <code>string</code>
    * [.naturalWidth](#ImageFill+naturalWidth) : <code>number</code>
    * [.naturalHeight](#ImageFill+naturalHeight) : <code>number</code>
    * [.mimeType](#ImageFill+mimeType) : <code>string</code>
    * [.isLinkedContent](#ImageFill+isLinkedContent) : <code>boolean</code>


## ImageFill()

| Param | Type | Description |
| --- | --- | --- |
| fileOrDataURI | `!uxp.storage.File` or `string` | File object pointing to an image file; or a string containing a `data:` URI with a base-64 encoded image. |


* * *

<a name="ImageFill+clone"></a>

### imageFill.clone() ⇒ <code>!ImageFill</code>
Returns a new copy of this ImageFill.

**Kind**: instance method of [<code>ImageFill</code>](#ImageFill)
**Returns**: <code>!ImageFill</code>


* * *

<a name="ImageFill+scaleBehavior"></a>

### *imageFill.scaleBehavior : <code>string</code>*
**Default**: `SCALE_COVER`

How the image is scaled when the aspect ratio of the shape does not match the aspect ratio of the image:
- ImageFill.SCALE_COVER - The image's aspect ratio is preserved and it is scaled to completely cover the area of the shape. This means on one axis the
  image's edges line up exactly with the edges of the shape, and on the other axis the image extends beyond the shape's bounds and is cropped. (Similar
  to `object-fit: cover` in CSS).
- ImageFill.SCALE_STRETCH - The image is stretched (distorting its aspect ratio) so its edges line up exactly with the edges of the shape. (Similar to
  `object-fit: fill` in CSS).

Image size and scaling are also affected by _cropping settings_, but these are not yet exposed to plugins.

**Kind**: instance property of [<code>ImageFill</code>](#ImageFill)


* * *

<a name="ImageFill+naturalWidth"></a>

### *imageFill.naturalWidth : <code>number</code>*
Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [<code>ImageFill</code>](#ImageFill)
**Read only**: true


* * *

<a name="ImageFill+naturalHeight"></a>

### *imageFill.naturalHeight : <code>number</code>*
Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [<code>ImageFill</code>](#ImageFill)
**Read only**: true


* * *

<a name="ImageFill+mimeType"></a>

### *imageFill.mimeType : <code>string</code>*
Format the image data was originally encoded in, such as `image/gif` or `image/jpeg`.

**Kind**: instance property of [<code>ImageFill</code>](#ImageFill)
**Read only**: true


* * *

<a name="ImageFill+isLinkedContent"></a>

### *imageFill.isLinkedContent : <code>boolean</code>*
True if the image comes from a link to an external resource, such as Creative Cloud Libraries.

**Kind**: instance property of [<code>ImageFill</code>](#ImageFill)
**Read only**: true
