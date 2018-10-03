# XD Plugin API Known Issues

## General Issues

- Developer/Side-loading Specific
  - Plugin menus and handlers may not be in-sync across documents during development
    - If someone modifies a plugin's files on disk while XD is running, and then opens more windows in XD, any windows that were open before reflect the old version of the plugin while windows that were opened later reflect the new version of the plugin. The menu bar will always reflect the old version of the plugin regardless of which window is current.

## Export Renditions

- On Windows 10, exporting a rendition may cause XD to crash. This will be fixed in the next drop.
- On Windows 10, exporting to a file or folder entry picked from a file picker will fail. You can work around this issue by writing those files first to a temporary folder or to the plugin's data folder. Then you can move them to the desired location.

## Plugin Management

- If Plugin Manager is open when you invoke Reload Plugins, it will not reflect any changes to the manifest (plugin name, description, icon) until you close & reopen it.

## Scenegraph

- `Rectangle.cornerRadii` reports incorrect values if the corners are not all the same radius. Use `effectiveCornerRadii` instead to get accurate values.
- It is possible to set nodes to 0 width or 0 height.
  - Scenenode setters block negative size values but allow 0 size, even though in many cases it is equally nonsensical. We do block 0 size in the UI.
  - In the past, XD's renderer would fail asserts (possibly even crash) with 0-size objects. I couldn't repro that any more, but unless we're covering it well as an officially supported case, it could easily regress again. There are some other minor bugs though, e.g. sharing fails if you have any 0-width/height artboards and bitmap export fails if any of the top-level items you're trying to export are 0-width/height.
- Longer plugin command names may be truncated in the menu on Windows
  - Workaround: keep your plugin command names short!

## User Interface

- Checkboxes may fail to render correctly if in a scrollable container. To work around this issue, make sure the containing element has a background color. (`transparent` does not count; macOS only.)
- Dialogs are neither movable nor resizable.
- It is not possible to show multiple dialogs at once, *except* for file and folder pickers.
- It is not possible to trigger the emoji selector in a text field on macOS.
- It is not possible to intercept the **ESC** gesture when dismissing a dialog. Dialogs are always dismissible using **ESC**.
- SVG images are not supported in the UI.
- When tabbing in a scroll view, the scroll view is not automatically scrolled to ensure the target control is in view (macOS Only).
- When **TAB**ing in Windows 10, the focus border may appear incorrectly on some elements.
- Inline layout is not supported. Inline elements will render as `block` elements instead.
- On Windows 10, the tab order in a dialog's footer may be reversed.

### HTML Elements

- It is not currently possible to set a checkbox to `checked` without also passing a value to the attribute. This means `<input type="checkbox" checked/>` will fail to render a checked checkbox. Instead you must use `<input type="checkbox" checked="true" />`
- `<option>` tags *must* have a `value` attribute, or referencing the `select`'s `value` property will return `undefined`.
- `<select value="…"/>` does not show the value as selected. Instead, get a reference to the element and call `setAttribute("value", …)`.
- If you don’t specify a width for your `form`, block elements inside may not take up the entire width. Workaround: always set a width for your `form` elements.
- `form`s only support `method="dialog"`. They do not submit to a URL automatically.
- It is not currently possible to specify the tab order.
- The size of a `<textarea>` cannot be set with `rows` or `cols`. Use CSS styles `height` and `width` respectively.
- `<input type="radio"/>` is not currently supported.
- `<progress>` is not currently supported.
- HTML5 input validation is not supported.
- Images that fail to load will not render any “broken icon” image in place.
- The `<dialog>` background color is different on Windows and macOS. On macOS, it is `#F5F5F5`, and on Windows it is `#FFFFFF`.
- Input widgets do not accept `defaultValue`.
- `<input type="password" />` is not supported.
- `<option>` tags do not support `selected` or `disabled` attributes.
- `<label for="id"/>` is not supported. Wrap `<label>` around the control instead.
- `<input type="file" />` is not supported.
- `<input type="color" />` is not supported.

### CSS

- `line-height` is currently implemented incorrectly. This will be fixed in a future release. For now, avoid `line-height`.
- It is not currently possible to assign multiple border colors to a container.
- `:focus`, `:active` are not currently supported.
- `baseline` alignment is not currently supported.
- Full CSS cascade and inheritance is not currently supported.
- Media queries are not supported.
- `em` unit is not supported.
- The `font` shorthand CSS rule is not supported.
- `text-transform` is not supported
- `cursor` is not supported
- Styles of elements within a `span` are ignored.
- In order to clip an image (say, with `border-radius: 10px`), you must also specify `overflow: hidden`.
- `z-index` is not supported. To achieve z-index behavior, use the DOM order instead.
- CSS transitions and animations are not supported.

### DOM

- When a dialog is closed, it is not removed from the DOM. This is per spec. If you want the dialog to be removed from the DOM, you must call `HTMLDialogElement#remove` explicitly.
- When applying HTML using `innerHTML` and friends, inline styles are ignored. You can, however, supply `<style>` tags and use `class` attributes to assign styles.
- When applying HTML using `innerHTML`, event handlers and scripts are not parsed. This is by design.

### Events

- Interactive Widgets do not support `Pointer%` events
- `keypress` and `keyup` are not currently supported on macOS.
- In React, checkboxes do not trigger `change` events. You can use a `ref` instead to assign an event handler. `<input type="checkbox" ref={el && el.addEventListener("change", e => /*…*/)} />`

## Network I/O

- On macOS, it is not possible to use self-signed certificates with secure Websockets.
- Websockets do not support extensions.
- XHR does not support cookies.
- `responseURL` is not supported on XHR

## File I/O

- `Blob` is not supported. Use `ArrayBuffer` instead.
