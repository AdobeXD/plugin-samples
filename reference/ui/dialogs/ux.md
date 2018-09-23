# Dialog User Experience

You should always strive to provide a good user experience with a modal dialog. That means providing easy access to dismissive buttons, avoiding dark patterns, and ensuring that your dialog doesn't block the user from forward progress in their work.

You should definitely read up on the [experience guidelines](../../../xdpegs/5-ui.md) to learn more about what to do and what not to do.

## Dismissive Buttons

Dismissive dialog buttons live within a `footer` element. Within the `footer`, you can have any number of buttons, but you should follow these guidelines when defining variants (which you can use to indicate if a button is the default or is destructive):

* `uxp-variant="cta"` indicates that the button is a "call to action". This is typically used for the default action. You should only have one of these buttons in a dialog.
* `uxp-variant="primary"` indicates the button is a "primary" button. This is the _default_ if `uxp-variant` is not specified.
* `uxp-variant="secondary"` indicates the button is a "secondary" button. It receives a lighter color than primary buttons.
* `uxp-variant="warning"` indicates that the button will trigger a destructive action. This button should not be the default action.

> **Tip**
>
> Dismissive buttons should always be visible on screen without scrolling. If a dismissive button isn't visible, the user may think they are trapped in the dialog.

### Dismissal by other means

You should avoid dismissing a dialog using other means, including action buttons, checkboxes, etc.