# Buttons

Buttons come in two flavors: oval buttons and action buttons. The oval buttons contain text, whereas the action buttons are typically used for icons and cases where you need to indicate the selected state of an icon.

![Types of buttons](./assets/buttons.png)

## Oval Buttons

You can render an oval button using the following:

```html
<button>Hello</button
```

This will render in the "primary" button style. However, there are four other variants that you can specify by setting the `uxp-variant` attribute:

* `cta` - used to indicate the default action in a dialog; should only be used once, and only for non-destructive actions
* `primary`
* `secondary` - these buttons are lighter in color than the primary buttons, and so aren't as obvious.
* `warning` - use these buttons to indicate when an action is destructive in nature. These should never be the default buttons on a form.

For example, to render a warning button, you'd use this:

```html
<button uxp-variant="warning">Delete Files</button>
```

## Action Buttons

Action buttons are used to render icons. You should ideally have your icon as a 28x28 PNG file (for high DPI displays; use 14x14 for lower density displays). If you use a different size, Action buttons will resize, but the results may not be desirable.

You can render an action button like so:

```html
<button uxp-variant="action">
    <img src="/path-to-file.png"/>
</button>
```

If you want the button to render as "selected", use the `uxp-selected` attribute:

```html
<button uxp-variant="action" uxp-selected="true">
    <img src="/path-to-file.png"/>
</button>
```

## Quiet vs Standard

Both Oval and Action buttons have support for "quiet" controls. These are controls without borders, and so they fade into the woodwork, so to speak.

In general the quiet oval buttons only work without a comparison to the standard oval buttons, so it's advised not to use both on the same dialog.

The action buttons generally look best when used in the quiet mode.

You can specify a control should be rendered quietly by specifying the `uxp-quiet` attribute:

```html
<button uxp-quiet="true">Quiet!</button>
```

## Event Handling

When clicked, buttons will fire the `click` event. You can listen to this in a couple of ways:

* Assign a handler to the `onclick` property of an HTMLButtonElement.
* Call `HTMLButtonElement#addEventListener` to register a handler for the `click` event

When a button of `type="submit"` is present in a `form`, its `click` handler will be called if the user presses ENTER.

**NOTE:** This currently fails; but will be fixed in a future release.
