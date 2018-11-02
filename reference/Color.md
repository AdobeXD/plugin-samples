<a name="Color"></a>

## Color
**Kind**: class  

* [Color](#Color)
    * [new Color(value, opacity)](#new_Color_new)
    * [.a](#Color-a) : <code>number</code>
    * [.r](#Color-r) : <code>number</code>
    * [.g](#Color-g) : <code>number</code>
    * [.b](#Color-b) : <code>number</code>
    * [.toRgba()](#Color-toRgba) ⇒ <code>!{r:number, g:number, b:number, a:number}</code>
    * [.toHex(forceSixDigits)](#Color-toHex) ⇒ <code>string</code>
    * [.clone()](#Color-clone) ⇒ <code>!Color</code>


* * *

<a name="new_Color_new"></a>

### new Color(value, opacity)
Create a new color instance.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>! string &#124; number &#124; {r:number, g:number, b:number, a:?number}`</code> | One of:<ul><li>String in CSS color format (hex, rgb, rgba, hsl, hsla, hsv, hsva, or color name)</li><li>ARGB numeric value (unsigned 32-bit integer)</li><li>Object with `r`, `g`, `b`, `a` keys all set to integers from 0 - 255 (if `a` is omitted, 255 is used)</li></ul> |
| opacity | `?number` | Optional, floating-point value from 0 - 1. Use when `value` parameter doesn't specify an opacity and you don't want the default 1.0 (100%) opacity. |


* * *

<a name="Color-a"></a>

### *color.a : <code>number</code>*
Integer 0-255. Get/set the alpha channel value.

**Kind**: instance property of [<code>Color</code>](#Color)  


* * *

<a name="Color-r"></a>

### *color.r : <code>number</code>*
Integer 0-255. Get/set the red channel value.

**Kind**: instance property of [<code>Color</code>](#Color)  


* * *

<a name="Color-g"></a>

### *color.g : <code>number</code>*
Integer 0-255. Get/set the green channel value.

**Kind**: instance property of [<code>Color</code>](#Color)  


* * *

<a name="Color-b"></a>

### *color.b : <code>number</code>*
Integer 0-255. Get/set the blue channel value.

**Kind**: instance property of [<code>Color</code>](#Color)  


* * *

<a name="Color-toRgba"></a>

### color.toRgba()
Convert to an object with r, g, b, a keys where
r, g, b, a range from 0 - 255.

**Kind**: instance method of [<code>Color</code>](#Color)  
**Returns**: <code>!{r:number, g:number, b:number, a:number}</code>


* * *

<a name="Color-toHex"></a>

### color.toHex(forceSixDigits) ⇒ <code>string</code>
Convert to hex string with "#" prefix. Ignores the Color's alpha value.
Returns a 3-digit string if possible, otherwise returns a 6-digit string.

**Kind**: instance method of [<code>Color</code>](#Color)  
**Returns**: <code>string</code> - Hex color string in the form #123 or #456ABC.  

| Param | Type | Description |
| --- | --- | --- |
| forceSixDigits | <code>boolean</code> | True if you want the result to always have 6 digits. |


* * *

<a name="Color-clone"></a>

### color.clone() ⇒ [!<code>Color</code>](#Color)
Returns a clone of the current color object

**Kind**: instance method of [<code>Color</code>](#Color)  

