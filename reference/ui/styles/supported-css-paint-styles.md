# Supported CSS Paint Styles

* [opacity](#opacity)
* [background](#background)
* [border](#border)
* [border-radius](#border-radius)
* [color-profile](#color-profile)
* [visibility](#visibility)


## opacity

Specifies the opacity of the element. `0` is fully transparent, while `1` is fully opaque.

```css
opacity: 0;   /* transparent */
opacity: 0.5; /* translucent */
opacity: 1;   /* opaque */
```

> **Info**
>
> View more documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).

## background

Specifies the element's background. You can use the following (including their respective long-hand styles):

* Color (see [Supported Colors](./supported-colors.md))
    ```css
    background: red;
    background-color: red;
    background-color: #FF0000;
    background-color: rgb(255, 0, 0);
    background-color: rgba(255, 0, 0, 0.5);
    ```
* Image
    ```css
    background: url(path/to/image.png);
    background-image: url(path/to/image.png);
    ```
* Linear Gradient
    ```css
    background: linear-gradient(#e66465, #9198e5);
    ```

> **Info**
>
> View more documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

## border

Specifies the element's border. You can also use the longer-form variations (`border-left-width`, etc.)

> **Danger**
>
> * You cannot specify multiple border colors -- a border can only have one color.
> * Only `solid` and `transparent` border styles are supported

```css
border: 1px solid red;
border-left-width: 3px;
```

> **Info**
>
> View more documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

## border-radius

Specifies the element's border radius. You can use the long-hand styles as well, such as `border-top-left-radius`.

> **Danger**
>
> * In order to clip images, add `overflow: hidden`.
> * X/Y border radii are not supported.

```css
border-radius: 4px;
border-bottom-right-radius: 20px;
```

> **Info**
>
> View more documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

## color-profile

Custom property. Set to `auto` or `none`. `auto` provides color management.

```css
color-profile: auto;
color-profile: none;
```

## visibility

Indicates the visibility of the element. Regardless of the visibility, the element still takes up space in the layout.

```css
visibility: visible;
visibility: hidden;
```

> **Info**
>
> View more documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)