# UXP 2 to 3

XD 20 and below utilized UXP version 2. In XD 21, we're shipping a new version: UXP 3.1. This version is a _huge_ release, and comes with lots of new features of which you'll want to take advantage.

Because the new features in UXP 3.1 are so large, we also introduced a backwards-compatibility mode. _All plugins use backwards-compatibility mode by default_, unless the plugin explicitly opts into UXP 3 by updating its declared `minVersion`. This helps to ensure that most plugins won't suddenly change their appearance and have broken layouts.

> **Info**
>
> All plugins with a `host.minVersion` less than `21` use the UXP backwards compatibility mode. Plugins must explicitly opt-in to using the new layout features in UXP 3.1 by setting a `host.minVersion` of `21`.

Several features in UXP 3.1 are _unavailable_ to plugins running in backwards-compatibility mode, and backwards-compatibility mode **will not last forever**. As such, you'll want to migrate your plugins to UXP 3.1 as soon as possible.

## Layout Engine Improvements

UXP 3.1's layout engine has been improved to make it more compliant with existing web standards.

### Inline Layout

In previous versions of XD (20 and below), all elements rendered using either _block_ or _flex_ layout semantics. In UXP 3.1, we now support _inline_ layout semantics, including `inline-block`.

This means, for example, that you can now easily place inline links or apply different styles within the same paragraph whereas it was difficult to impossible to do so before XD 21.

For example:

```html
<p>For more information about <span style="color: #FF0000; font-weight: bold;">Adobe</span>, visit <a href="https://www.adobe.com">Adobe's website</a>.<p>
```

### Insignificant Whitespace

Furthermore, whitespace between elements is no longer considered significant. In previous versions of XD, it was possible to space elements out by adding additional whitespace. In UXP 3.1, you can only do this if you set the `white-space` CSS property to allow it.

```html
<p>The    whitespace    is    no    longer    significant</p>
<p style="white-space:pre">But    this    whitespace    is   significant.</p>
```

> **Danger**
>
> There is a known issue in XD 21 (UXP 3.1) where white-space between inline elements is also ignored. This means that `<span>Hello</span> <span>World</span>` renders _without_ the space separating "Hello" and "World". This will be fixed in a future release.

### SPANs are no longer leaf elements
One other important result of this change is the fact that `<span>` elements can contain additional elements. For example:

```html
<span>This SPAN contains <span style="font-weight: bold">another span</span>!</span>
```

### `z-index` support

You can also now change an element's stacking order by setting `z-index`.

```css
.menu {
    z-index: 99;
}
```

### `object-fit` support

UXP 3.1 also provides the ability to use the `object-fit` property to better control the layout of your elements. You can use `contain` and `cover` values to control if a replaced element should fit within its container or expand to fill it completely (both maintaining the aspect ratio). You can also use `scale-down`, `none`, and `fill`.

For more information, see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit. The examples in the MDN documentation will work in UXP 3.1.

> **Danger**
>
> Borders and backgrounds may not be drawn as expected with `object-fit`. SVGs may also not be drawn correctly.


## CSS Parsing Improvements

Along with the layout engine improvements, UXP 3.1 also delivers several key improvements to the CSS parser, bringing the parsing on par with the existing CSS standards. While UXP 3.1 does _not_ implement the entire CSS spec, the parsing engine itself now more closely matches the specification.

Improving the CSS parser also enabled UXP 3.1 to support CSS variables, additional units, `calc`, limited Media Queries, `!important`, and more.

### CSS Variables

CSS Variables make it simple to modularize your CSS styles. For example, you could easily create multiple themes using CSS Variables. By changing the variable definition, the styles which rely on the variable are updated automatically.

```html
<style>
.dark {
    --text-color: white;
    --background-color: black;
}

.light {
    --text-color: black;
    --background-color: white;
}

.themed {
    color: var(--text-color);
    background-color: var(--background-color);
}
</style>
<div class="themed light">Hello</div>
<div class="themed dark">There</div>
```

In the above example, "Hello" will be rendered with black text on a white background, and "There" will be rendered with white text on a black background.

### Additional Unit Support

In versions of XD 20 and below, the only supported units were `px` and `%`. Unitless values were interpreted as `px`. In XD 21 and above, many of the CSS units are now supported. As such, unitless values are no longer supported (unless otherwise provided for by the CSS specification).

You can now use `em`, `rem`, `vh`, `vw`, `cm`, `in`, etc., in addition to `px` and `%`.

> **Danger**
>
> If you use `vh` with respect to font sizes, the font size will _not_ update when the viewport height is changed.

### Calculation Support

With the addition of additional unit support, UXP 3.1 also provides the `calc` function, which also works with mixed units. Now you can write an expression like `width: calc(50% - 10px)`.

> **Danger**
>
> `calc` only works for length values. It does not work for colors.

### Media Query Support

UXP 3.1 offers _limited_ support for media queries -- namely queries around the width and height of the viewport.

```css
@media screen and (max-width: 260px) {
    input[type=range] {
        display: none;
    }
}
```

The above CSS will hide sliders whenever the plugin's viewport width is less than 260px.

> **Danger**
>
> Versions of XD 20 and below would _apply_ the styles in a media query, regardless of whether the condition was met. If you used media queries in your CSS, you may need to double check your code to ensure that your plugin renders as expected under UXP 3.1.

### Additional Property Values

The improved CSS Parser also brings the ability to use `unset`, `initial`, `inherit`, and `!important` in your CSS and have them behave as per the specification. Previously these values were not supported.

This means, that if you really need to, you can override styles, like so:

```css
.caption {
    color: blue !important;
}
```

> **Danger**
>
> Setting a border color to `unset` is not likely to result in the expected output.

### Linear Gradient Support

The CSS parser now understands the Linear Gradient syntax. For example:

```css
body {
  background: linear-gradient(33deg, yellow, purple);
}
```

> **Danger**
>
> Multi-color stops are not supported.

## Other miscellaneous features

* **Outline support**: You can assign an outline to your elements with the `outline` rule.
* **New pseudo-selectors**: `:lang` and `:focus` are now available.
* **Tab index, v1**: Setting `tab-index` to `0` will now cause any element to be focusable. You can **not** yet control the tab order.
* **Improved default for `overflow`**: `overflow` now defaults to `visible`, not `hidden`, as per the web specification.
* Initial SVG support. Only simple SVGs are supported; complex SVGs may render in unexpected ways.

## Backwards Compatibility Mode

When in backwards compatibility mode, UXP and XD will attempt to render it in a manner similar to XD 20 and below. This is not a perfect emulation of previous versions of UXP, but should work for most plugins in most cases.

> **Danger**
>
> *Backward-compatibility mode will _not last forever_*. As such, developers are encouraged to look at their plugin with backward compatibility mode turned off so that they can start to plan for the fixes that will be needed. We don't have a firm timeline on how long backward compatibility mode will be supported, but developers should start taking advantage of the new layout engine as soon as they can feasibly do so.

When in this mode (which is enabled by default unless your manifest specifies your plugin supports XD 21 as a minimum), the following rules are in place:

* Inline layout is ignored (`display: inline[-block]` is disabled).
* `display` is a valid property on elements (instead of `style.display`).
* When using `position: absolute`, and no coordinates are specified, `0x0` is assumed.
* `z-index` is ignored.
* Whitespace is treated as significant
* Unit-less height and width styling is supported
* UXP 2 semantics for `auto` margins.

### Unsupported backwards compatibility

* Semantics in UXP 2 for rendering border radii with percentages is not per web spec. UXP 3.1 renders border radii correctly. This will not be fixed as part of backwards compatibility. The difference is small and does not affect layout (just how round a corner is).

## Considerations when migrating

Migrating from UXP 2 to 3 is not typically difficult. There are some considerations, however, of which you need to be aware.

### Font Rendering Changes

UXP 3.1 introduces uses lower-level font rendering, and this can cause slight differences in layout. Depending on the constraints of your user interface, this may be enough to cause elements to render on more lines or wider than expected.

### Layout Changes

The change from `block` to `inline` layout semantics can cause significant UI changes. If you used `flex` layout to render your plugin UI, you may not notice any difference when using UXP 3.1. However, if your code relied on `block` being the default layout mode, you may find that your layout no longer acts as expected. You can explicitly assign `display: block` to the offending elements, or rework your UI to work with inline layout.

### SPANs are no longer leaf elements

As mentioned above, `<span>` elements can now contain other elements. If your code included elements within `<span>`s, you may find that your UI renders with unexpected styling.

### Media Queries

UXP 2.x would _always_ apply a media query, even if the condition wasn't met. UXP 3.1 will _only_ apply a media query if the condition is met.

### Unitless Values

UXP 2.x would parse unitless values as `px` unless the specification indicated otherwise. UXP 3.1 will treat these as invalid styles, which may cause your UI to render in odd ways. To fix, ensure you always use the correct units.

### Default Stylesheet Changes

The default stylesheet in UXP 3 is different from that provided by UXP 2 and backwards-compatibility mode. This means that your plugin may take on a radically different appearance when not running in backwards-compatibility mode.

_Most_ of the differences in the default stylesheet are due to the presence of the panel insertion point for your plugins. Modal dialogs styling is generally the same. However, there are a few differences that might cause changes in your layout:

* `<label>` is now rendered using `display: inline-flex` by default. This means form elements without a `row` or `column` class will render with the label to the left of the element instead of the label above the element.
  * `<label>` will also _wrap_ if the width of the parent is too narrow. If you want to restrict this wrapping, you can apply `flex-wrap: nowrap` to the element. In the future, `<label>` will more closely match the web standard.
  * `<label>` no longer needs the `row` class to lay out horizontally.
* Styles are applied with _less_ specificity. This means it is easier to override the styling of an `<h2>`, for example.
    * One place this may cause issues is that anchor colors are applied to anchors only with `href` attributes. If you need to override this color, use `a[href]` as the selector.

## Quick Feature Summary

New Feature       | UXP 2.x          | UXP 3.1 (w/o backwards-compatibility)
------------------|------------------|--------------------------
Inline Layout     | Unsupported      | Enabled
`white-space`     | `pre-wrap`       | `normal`
`<span>`          | Leaf elements    | Can contain other elements
`z-index`         | Unsupported      | Supported
`object-fit`      | Unsupported      | Supported
CSS Variables     | Unsupported      | Supported
Units             | `px`, `%`        | The rest!
`calc`            | Unsupported      | Supported (for lengths)
Media Queries     | Unsupported      | Supported (for viewport)
`unset`           | Unsupported      | Supported
`initial`         | Unsupported      | Supported
`inherit`         | Unsupported      | Supported
`!important`      | Unsupported      | Supported
Linear Gradients  | Unsupported      | Supported
`outline`         | Unsupported      | Supported
`:lang`, `:focus` | Unsupported      | Supported
`tab-index`       | Unsupported      | Partially supported
`overflow`        | `hidden`         | `visible`

