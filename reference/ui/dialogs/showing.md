# Showing a Modal Dialog

Dialogs are shown using the [`HTMLDialogElement#showModal`](../../uxp/class/HTMLDialogElement.md#htmldialogelement-showmodal) method. This method will render the dialog. The method will return a `Promise`, which you can use to easily wait for the dialog to be dismissed.

```js
dialog.showModal()
    .then(result => {
        // handle dialog result
        // if canceled by ESC, will be "reasonCanceled"
    });
```

> **Info**
>
> The dialog element _must_ be present in the DOM before showing it. If it isn't, the method will throw an exception.

It's important to note that you can only show one dialog at once. You should always close or dismiss a dialog first and then _wait for the dialog's promise to resolve_ before showing another one.
