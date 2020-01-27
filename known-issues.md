# XD Plugin API Known Issues

## General Issues

- Icons may be blurry or missing in the plugin panel if you don't include the full set of sizes (24px, 48px, 96px, 144px, 192px) in your plugin bundle and manifest.
- Developer/Side-loading Specific
  - Plugin menus and handlers may not be in-sync across documents during development
    - If someone modifies a plugin's files on disk while XD is running, and then opens more windows in XD, any windows that were open before reflect the old version of the plugin while windows that were opened later reflect the new version of the plugin. The menu bar will always reflect the old version of the plugin regardless of which window is current.

## Plugin Management

- If Plugin Manager is open when you invoke Reload Plugins, it will not reflect any changes to the manifest (plugin name, description, icon) until you close & reopen it.

## Scenegraph

- It is possible to set nodes to 0 width or 0 height.
  - Scenenode setters block negative size values but allow 0 size, even though in many cases it is equally nonsensical. We do block 0 size in the UI.
  - In the past, XD's renderer would fail asserts (possibly even crash) with 0-size objects. I couldn't repro that any more, but unless we're covering it well as an officially supported case, it could easily regress again. There are some other minor bugs though, e.g. sharing fails if you have any 0-width/height artboards and bitmap export fails if any of the top-level items you're trying to export are 0-width/height.
- Longer plugin command names may be truncated in the menu on Windows
  - Workaround: keep your plugin command names short!
- Keypress/gamepad, hover, and component state-transition interactions are not returned to plugins yet when requesting the list of interactions on a scenenode or the entire document.

## Assets Panel

- Plugins can modify the Assets panel contents while running in the background. Do not rely on this - in a future release, it will be blocked. Only make modifications to the document (including Assets panel) while the plugin is running a user-invoked command.

## User Interface

- When the mouse cursor is changed, it may not revert back to its original state in UWP.
- It is not possible to trigger the emoji selector in a text field on macOS.
- Many SVGs are known to render in odd ways in the UI. These issues will be addressed in the future, but we would love to hear your reports of any SVGs that don't work, and how you fixed it.
- When tabbing in a scroll view, the scroll view is not automatically scrolled to ensure the target control is in view (macOS Only).
- When using `<input type="radio" />`, be sure to include a `name` attribute. If you forget, you'll get different behavior on macOS and Windows 10. On macOS, radio buttons will not be exclusive to each other just because they are in the same container, whereas on Windows 10, radio buttons _will_ be exclusive within the same container. As such, you should _always_ use `name` to determine radio button exclusivity.
- Emojis are rendered in the font color on Windows 10, instead of using the emoji's colors.
- When a control in a panel is disabled and enabled, it is no longer reachable via TAB. This may also impact controls added *after* a panel is shown for the first time.

### HTML Elements

- `<option>` tags *must* have a `value` attribute, or referencing the `select`'s `value` property will return `undefined`.
- `<select value="…"/>` does not show the value as selected. Instead, get a reference to the element and call `setAttribute("value", …)` or use the `selected` attribute on the `option` tags.
- If you don’t specify a width for your `form`, block elements inside may not take up the entire width. Workaround: always set a width for your `form` elements.
- `form`s only support `method="dialog"`. They do not submit to a URL automatically.
- It is not currently possible to specify the tab order.
- The size of a `<textarea>` cannot be set with `rows` or `cols`. Use CSS styles `height` and `width` respectively.
- HTML5 input validation is not supported.
- Images that fail to load will not render any “broken icon” image in place.
- Input elements do not accept `defaultValue`.
- `<option>` tags do not support `disabled` attributes.
- `<label for="id"/>` is not supported. Wrap `<label>` around the control instead.
- `<input type="file" />` is not supported.
- `<input type="color" />` is not supported.
- Using unitless values in `width` and `height` attributes are not supported in UXP 3.1. Use `px`, or CSS styles.
- `<label>` uses `inline-flex` layout semantics in UXP 3.1 mode, with `flex-wrap: wrap` enabled. If you need to prevent wrapping, use `flex-wrap: nowrap` on these elements. Note that the default layout behavior is now _horizontal_ not _vertical_.

### Layout

- When rendering text on a screen that is not HiDPI, descenders may be clipped when using `overflow: hidden`. The workaround is to add a little bit of `padding` to the bottom of the element.
- When rendering inline elements in plugins with a `host.minVersion` of `21` or better, spaces between elements may be ignored. This is most obvious when using constructs like `<p><b>Click this link:</b> <a href="#">link</a></p>`. Currently UXP will ignore the space between the `b` tag and the anchor, resulting in the following visual rendering: `Click this link:link` instead of `Click this link: link`. This will be addressed in the next release.
    - To work around this issue, include a space *inside* one of the tags, like so: `<b>Click this link: </b><a href="#">link</a>`
- When rendering inline text that wraps, borders, outlines, and backgrounds only apply to the first line. You should place borders, outlines, and backgrounds on elements with block layout semantics.
- Mixing inline text with UI controls is unlikely to result in a pleasant appearance. `vertical-align` is not yet supported, which makes it difficult to properly align widgets and labels. As such, you should use `flex` or `inline-flex` when using UI elements.

### CSS

- It is not currently possible to assign multiple border colors to a container.
- Do not use `position: fixed` in panels for now; a future update will change its behavior.
- `:active` is not currently supported.
- `baseline` alignment is not currently supported.
- The `font` shorthand CSS rule is not supported.
- `text-transform` is not supported
- In order to clip an image (say, with `border-radius: 10px`), you must also specify `overflow: hidden`.
- CSS transitions and animations are not supported.
- A solid `outline` will not render unless a color is also provided. When using `outline: solid`, be sure to supply an outline color as well.
- Font sizes do not adjust to dynamic units like `vh`. As such, if you use `font-size: 1vh`, and the viewport changes size, the font size will not adjust.
- Setting a `border-color` to `unset` may not reset the color to its initial value.
- Borders and backgrounds are not drawn correctly when coupled with `object-fit`.
- The bottom border may not always render with the same width as the other borders.
- Underlines may render very thin.
- `calc` only works for length properties. Using `calc` for a color will not work.
- If you need to override an anchor link color, use `a[href]` as the selector to override it.

### DOM

- When a dialog is closed, it is not removed from the DOM. This is per spec. If you want the dialog to be removed from the DOM, you must call `HTMLDialogElement#remove` explicitly.
- When applying HTML using `innerHTML`, event handlers and scripts are not parsed. This is by design.

### Events

- Interactive elements do not support `Pointer%` events
- `keypress` and `keyup` are not currently supported on macOS.

## Network I/O

- On macOS, it is not possible to use self-signed certificates with secure Websockets.
- Websockets do not support extensions.
- XHR can only send binary content using an ArrayBuffer -- Blob is not supported.
- XHR does not support cookies.
- `responseURL` is not supported on XHR

## File I/O

- `Blob` is not supported. Use `ArrayBuffer` instead.
