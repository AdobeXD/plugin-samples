# Showing a Modal Dialog

Dialogs are shown using the [`HTMLDialogElement#showModal`](../../uxp/class/HTMLDialogElement.md#htmldialogelement-showmodal) method. This method will render the dialog. The method will return a `Promise`, which you can use to easily wait for the dialog to be dismissed.

```js
dialog.showModal()
    .then(result => {
        // handle dialog result
        // if canceled by ESC, will be "reasonCanceled"
    });
```

> **info**
>
> The dialog element _must_ be present in the DOM before showing it. If it isn't, the method will throw an exception.

It's important to note that you can only show one dialog at once. You should always close or dismiss a dialog first before showing another one.

> **danger**
>
> On UWP (Windows 10), you may encounter difficulties rendering multiple dialogs in sequence. In general you should avoid doing so unless you're trying to render an experience that's substantially different from what came before. In that case, you may find it useful to insert a delay after one dialog closes before opening another.
> (BUG: CCP-5854)
