<a name="Blur"></a>

## Blur
**Kind**: class

* [Blur](#Blur)
    * [new Blur(blurAmount, brightnessAmount, fillOpacity, visible, backgroundEffect)](#new_Blur_new)
    * [.blurAmount](#Blur+blurAmount) : <code>number</code>
    * [.brightnessAmount](#Blur+brightnessAmount) : <code>number</code>
    * [.fillOpacity](#Blur+fillOpacity) : <code>number</code>
    * [.isBackgroundEffect](#Blur+isBackgroundEffect) : <code>boolean</code>
    * [.visible](#Blur+visible) : <code>boolean</code>


## Blur()
Creates an object blur or background blur effect object with the given properties.

| Param | Type |
| --- | --- |
| blurAmount | <code>number</code> |
| brightnessAmount | <code>number</code> |
| fillOpacity | <code>number</code> |
| [visible] | <code>boolean</code> |
| [isBackgroundEffect] | <code>boolean</code> |


* * *

<a name="Blur+blurAmount"></a>

### *blur.blurAmount : <code>number</code>* 0 - 50

**Kind**: instance property of [<code>Blur</code>](#Blur) 


* * *

<a name="Blur+brightnessAmount"></a>

### *blur.brightnessAmount : <code>number</code>* -50 - 50
For background blur effects, the amount to increase or decrease the brightness of the background. Ignored for object blur effects.

**Kind**: instance property of [<code>Blur</code>](#Blur) 


* * *

<a name="Blur+fillOpacity"></a>

### *blur.fillOpacity : <code>number</code>* 0.0 - 1.0
For background blur effects, the a multiplier on the opacity of the object's fill drawn over top of the blurred background. Useful to create a color tint on top of the blurred background. Does _not_ affect stroke opacity.

Ignored for object blur effects.

**Kind**: instance property of [<code>Blur</code>](#Blur) 


* * *

<a name="Blur+isBackgroundEffect"></a>

### *blur.isBackgroundEffect : <code>boolean</code>*
If true, renders a background blur effect: all objects beneath the shape are blurred (modulated by `brightnessAmount`), but the shape itself is still rendered with crisp edges (with its fill modulated by `fillOpacity`).

If false, renders an object blur effect: the shape itself is blurred, and objects beneath it are unaffected.

**Kind**: instance property of [<code>Blur</code>](#Blur) 

* * *

<a name="Blur+visible"></a>

### *blur.visible : <code>boolean</code>*
If false, the blur effect is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>Blur</code>](#Blur) 
