# UXP 2 to 3

XD 20 and below utilized UXP version 2. In XD 21, we're shipping a new version of UXP: Version 3.1. This version is a _huge_ release, and comes with lots of new features of which you'll want to take advantage.

Because the new features in UXP 3.1 are so large, we also introduced a backwards-compatibility mode. _All plugins use backwards-compatibility mode by default_, unless the plugin explicitly opts out. This helps to ensure that most plugins won't suddenly change their appearance and have broken layouts.

Several features in UXP 3.1 are _unavailable_ to plugins running in backwards-compatibility mode, and backwards-compatibility mode **will not last forever**. As such, you'll want to migrate your plugins to UXP 3.1 as soon as possible.

## New Features in UXP 3.1

* **Inline layout**. This means you now have the ability to write code like `<p>This is <a href="...">a link</a></p>` and have the link render _inline_ with the rest of the text. This is **huge**, but it can also create a tremendous impact on your plugin's layout as _the default layout for an HTML element_ now more closely aligns with the Web specification. This means that `span` elements will render with `inline`, `button`s will render as `inline-block`, etc. This means that some elements may no longer render as they did in the previous version of UXP.
* **CSS Variables**. You can now use CSS variables to help apply themes and other layout to your plugin.
* **`calc`**. You can use `calc` to calculate lengths in your CSS. For example, `width: calc(100% - 9px)`. Note that you can mix units, just like you can on the web.
* **Units**! The previous version of UXP understood `px` and `%`, but this version understands nearly all of them. You can use `rem`, `em`, `px`, `pt`, `vh`, `vw`, `cm`, `in`, etc. **NOTE:** If you previously didn't specify units in your CSS, you should start. Values (other than `0`) without units will be ignored.
* **Fixed positioning**. `position: fixed` can now be used to anchor your element to a fixed position in its container, regardless of scrolling position. This is most useful for plugins that want to live within a panel. **KNOWN ISSUE:** It is possible for a plugin to partially escape the normal bounds of a panel when using `position: fixed`. This will be addressed in the future.
* **z-index**. You can now stack your element using `z-index`.
* **Additional property values**: The CSS parser now understands `initial`, `unset`, and `inherit`. You can also use `!important` to override styles (although you should use this as a last resort).
* **Linear gradient support**: You can now use the CSS syntax for linear gradients.
* **Outline support**: You can assign an outline to your elements with the `outline` rule.
* **object-fit**: You can use `object-fit` to better control the size of images and other elements,.
* **New pseudo-selectors**: `:lang` and `:focus` are now available.
* **Tab index, v1**: Setting `tab-index` to `0` will now cause any element to be focusable. You can **not** yet control the tab order.
* **Improved default for `overflow`**: `overflow` now defaults to `visible`, not `hidden`, as per the web specification.

## Backwards Compatibility Mode

When in backwards compatibility mode, UXP and XD will attempt to render it in a manner similar to XD 20 and below. This is not a perfect emulation of previous versions of UXP, but should work for most plugins in most cases.

When in this mode (which is enabled by default unless your manifest specifies your plugin supports XD 21 as a minimum), the following rules are in place:

* Inline layout is ignored (`display: inline[-block]` is disabled).
* `display` is a valid property on elements (instead of `style.display`).
* When using `position: absolute`, and no coordinates are specified, `0x0` is assumed.
* `z-index` is ignored.
* Whitespace is treated as significant
* Unit-less height and width styling is supported
* UXP 2 semantics for `auto` margins.

### Unsupported backwards compatibility

* Semantics in UXP 2 for rendering border radii with percentages is not per web spec. UXP 3.1 renders border radii correctly. This will not be fixed as part of backwards compatibility. The difference is small and does not affect layout (just how round a corner is)

> **IMPORTANT**
> *Backward-compatibility mode will _not last forever_*. As such, developers are encouraged to look at their plugin with backward compatibility mode turned off so that they can start to plan for the fixes that will be needed. We don't have a firm timeline on how long backward compatibility mode will be supported, but developers should start taking advantage of the new layout engine as soon as they can feasibly do so.

## Considerations when migrating

Migrating from UXP 2 to 3 is not typically difficult. There are some considerations, however, of which you need to be aware.

### Default Stylesheet

The default stylesheet in UXP 3 is different from that provided by UXP 2 and backwards-compatibility mode. This means that your plugin may take on a radically different appearance when not running in backwards-compatibility mode.

_Most_ of the differences in the default stylesheet are due to the presence of the panel insertion point for your plugins. Modal dialogs styling is generally the same. However, there are a few differences that might cause changes in your layout:

* `<label>` is now rendered using `display: inline-flex` by default. This means form elements without a `row` or `column` class will render with the label to the left of the element instead of the label above the element.


