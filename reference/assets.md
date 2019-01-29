<a name="module_assets"></a>

## assets
Represents the document styles listed in the Assets panel. Styles can be added and removed manually by the user, so
there's no guarantee that these styles are currently used anywhere in the document's content.

**Since**: XD 15

* [assets](#module_assets)
    * [.colors](#module_assets-colors)
        * [.get()](#module_assets-colors-get) ⇒ `!Array.<ColorAsset|GradientAsset>`
        * [.add(colorAssets)](#module_assets-colors-add) ⇒ `number`
        * [.delete(colorAssets)](#module_assets-colors-delete) ⇒ `number`
    * [.characterStyles](#module_assets-characterStyles)
        * [.get()](#module_assets-characterStyles-get) ⇒ `!Array.<CharacterStyleAsset>`
        * [.add(charStyleAssets)](#module_assets-characterStyles-add) ⇒ `number`
        * [.delete(charStyleAssets)](#module_assets-characterStyles-delete) ⇒ `number`
    * [.GradientType](#GradientType) enum
    * Typedefs:
        * [ColorAsset](#ColorAsset)
        * [GradientAsset](#GradientAsset)
        * [CharacterStyleAsset](#CharacterStyleAsset)
        * [CharacterStyle](#CharacterStyle)

### Enums

<dl>
<dt><a name="GradientType"></a> GradientType : </dt><dd><code>LINEAR</code>, <code>RADIAL</code> - Type of gradient color element: linear gradient or radial gradient</dd>

</dl>

## Typedefs

<a name="ColorAsset" id="ColorAsset"></a>

### Typedef ColorAsset
Assets library entry representing a solid color.

| Property | Type | Description |
| --- | --- | --- |
| name | ?string | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets). |
| color | !Color | Color of the asset |

<a name="GradientAsset" id="GradientAsset"></a>

### Typedef GradientAsset
Assets library entry representing a linear or radial gradient.

| Property | Type | Description |
| --- | --- | --- |
| name | ?string | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets). |
| gradientType | !GradientType | Either `GradientType.LINEAR` or `GradientType.RADIAL` |
| colorStops | !Array.&lt; {stop: number, color: !Color} > | Array of color stops used in the gradient, where `stop` >= 0 and <= 1, and the values are strictly increasing. Same format as the `colorStops` property of a [LinearGradientFill](LinearGradientFill.md) object. |

<a name="CharacterStyleAsset" id="CharacterStyleAsset"></a>

### Typedef CharacterStyleAsset
Assets library entry representing a set of text character styles.

| Property | Type | Description |
| --- | --- | --- |
| name | ?string | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets). |
| style | !CharacterStyle | Object containing the style properties |

<a name="CharacterStyle" id="CharacterStyle"></a>

### Typedef CharacterStyle

Character style properties. See documentation for the [Text](scenegraph.md#Text) node type for more details.

| Property | Type | Description |
| --- | --- | --- |
| fontFamily | !string | the font family |
| fontStyle | !string | the style of the font |
| fontSize | !number | the size of the font |
| fill | !Color | the Color of the font fill |
| charSpacing | !number | the character spacing |
| lineSpacing | !number | the line spacing |
| underline | !boolean | whether underline is turned on |


* * *

<a name="module_assets-colors" id="module_assets-colors"></a>

### assets.colors
The collection of colors and gradients saved in this document's Assets library.

* [.colors](#module_assets-colors)
    * [.get()](#module_assets-colors-get) ⇒ `!Array.<ColorAsset|GradientAsset>`
    * [.add(colorAssets)](#module_assets-colors-add) ⇒ `number`
    * [.delete(colorAssets)](#module_assets-colors-delete) ⇒ `number`


* * *

<a name="module_assets-colors-get"></a>

### assets.colors.get() ⇒ `!Array.<ColorAsset|GradientAsset>`
Get a list of all color/gradient assets, in the order they appear in the Assets panel.

The list may contain a mix of solid Color assets and/or gradient assets.
If there are no color/gradient assets, an empty array is returned.

**Kind**: static method of [<code>colors</code>](#module_assets-colors)

**Returns**: `!Array.<ColorAsset|GradientAsset>`

**Example**
```js
var assets = require("assets"),
    allColors = assets.colors.get();
```


* * *

<a name="module_assets-colors-add"></a>

### assets.colors.add(colorAssets) ⇒ `number`
Add color/gradient assets to the collection.

The list may contain a mix of solid Color assets and/or gradient assets. Items are not added if a duplicate
color/gradient already exists in the collection, *regardless of its name*.

**Kind**: static method of [<code>colors</code>](#module_assets-colors)

**Returns**: `number` - number of assets added (may be less than requested if duplicates already exist)

| Param | Type |
| --- | --- |
| colorAssets | <code>! Color &#124; ColorAsset &#124; LinearGradientFill &#124; RadialGradientFill &#124; GradientAsset &#124; Array.&lt;Color&#124;ColorAsset&#124;LinearGradientFill&#124;RadialGradientFill&#124;GradientAsset></code> |

**Example**
```js
var assets = require("assets"),
    redColor = new Color("red"),
    blueColor = new Color("blue"),
    stops = [{ stop: 0, color: redColor }, { stop: 1, color: blueColor }],
    numAdded = assets.colors.add([
        redColor,
        { name: "True Blue", color: blueColor },
        { name: "Red Blue Gradient", gradientType: assets.GradientType.LINEAR, colorStops: stops }
    ]);
```


* * *

<a name="module_assets-colors-delete"></a>

### assets.colors.delete(colorAssets) ⇒ `number`
Delete color/gradient assets from the collection.

The list may contain a mix of solid Color assets and/or gradient assets. Assets with the same color/gradient are
removed *even if their names differ*. Assets that already don't exist in the collection are silently ignored.
Typically you will pass asset objects returned from [`get()`](#module_assets-colors-get) directly to this function.

**Kind**: static method of [<code>colors</code>](#module_assets-colors)

**Returns**: `number` - number of assets deleted (may be less than requested if some didn't exist)

| Param | Type |
| --- | --- |
| colorAssets | <code>! Color &#124; ColorAsset &#124; LinearGradientFill &#124; RadialGradientFill &#124; GradientAsset &#124; Array.&lt;Color&#124;ColorAsset&#124;LinearGradientFill&#124;RadialGradientFill&#124;GradientAsset></code> |

**Example**
```js
var assets = require("assets"),
    numDeleted = assets.colors.delete(new Color("red"));
```


* * *

<a name="module_assets-characterStyles" id="module_assets-characterStyles"></a>

### assets.characterStyles
The collection of character styles saved in this document's Assets library.

* [.characterStyles](#module_assets-characterStyles)
    * [.get()](#module_assets-characterStyles-get) ⇒ `!Array.<CharacterStyleAsset>`
    * [.add(charStyleAssets)](#module_assets-characterStyles-add) ⇒ `number`
    * [.delete(charStyleAssets)](#module_assets-characterStyles-delete) ⇒ `number`


* * *

<a name="module_assets-characterStyles-get"></a>

### assets.characterStyles.get() ⇒ `!Array.<CharacterStyleAsset>`
Get a list of all character style assets, in the order they appear in the Assets panel.

If there are no character style assets, an empty array is returned.

**Kind**: static method of [<code>characterStyles</code>](#module_assets-characterStyles)

**Returns**: `!Array.<CharacterStyleAsset>`

**Example**
```js
var assets = require("assets"),
    allCharacterStyles = assets.characterStyles.get();
```


* * *

<a name="module_assets-characterStyles-add"></a>

### assets.characterStyles.add(charStyleAssets) ⇒ `number`
Add one or more character style assets to the collection.

Items are not added if a duplicate character style already exists in the collection, *regardless of its name*.
All character style properties must be fully specified (no properties are optional).

**Kind**: static method of [<code>characterStyles</code>](#module_assets-characterStyles)

**Returns**: `number` - number of assets added (may be less than requested if duplicates already exist)

| Param | Type |
| --- | --- |
| charStyleAssets | <code>! CharacterStyleAsset &#124; Array.&lt;CharacterStyleAsset></code> |

**Example**
```js
var assets = require("assets"),
    arialItalic = {
        fontFamily: "Arial",
        fontStyle: "Italic",
        fontSize: 12,
        fill: new Color("black"),
        charSpacing: 0,
        lineSpacing: 0,
        underline: false
    },
    linkTextStyle = {
        fontFamily: "Arial",
        fontStyle: "Regular",
        fontSize: 12,
        fill: new Color("blue"),
        charSpacing: 0,
        lineSpacing: 0,
        underline: false
    },
    numAdded = assets.characterStyles.add([
        { style: arialItalic },   // (no name)
        { style: linkTextStyle, name: "Link Text" }
    ]);
```


* * *

<a name="module_assets-characterStyles-delete"></a>

### assets.characterStyles.delete(charStyleAssets) ⇒ `number`
Delete one or more character style assets from the collection.

Assets with the same character style are removed *even if their names differ*. Assets that already don't exist in the
collection are silently ignored. All character style properties must be fully specified (no properties are optional).
Typically you will pass asset objects returned from [`get()`](#module_assets-characterStyles-get) directly to this function.

**Kind**: static method of [<code>characterStyles</code>](#module_assets-characterStyles)

**Returns**: `number` - number of assets deleted (may be less than requested if some didn't exist)

| Param | Type |
| --- | --- |
| charStyleAssets | <code>! CharacterStyleAsset &#124; Array.&lt;CharacterStyleAsset></code> |

**Example**
```js
// Delete all character style assets from the assets panel
var assets = require("assets"),
    allCharacterStyles = assets.characterStyles.get(),
    numDeleted = assets.characterStyles.delete(allCharacterStyles);
```
