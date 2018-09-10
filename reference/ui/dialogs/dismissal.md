# Dialog Dismissal

Dialogs can be dismissed in the following ways:

* Manually, by the user pressing the ESC key
* Programmatically, by calling [`HTMLDialogElement#close`](../../uxp/class/HTMLDialogElement#htmldialogelement-close) with an optional return value.

You can listen for the _default_ gesture (typically [ENTER]) by registering for the `submit` event on the `form`:

```js
function onsubmit() {
    dialog.close(document.getElementById("name").value);
}
form.onsubmit = onsubmit;
```

You should also register a `click` handler for your "OK" and "Cancel" buttons:

```js
const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => dialog.close());

const okButton = document.querySelector("#ok");
okButton.addEventListener("click", e => {
    onsubmit();
    e.preventDefault();
}
```

You can listen for the dialog's dismissal using the `close` event on the dialog:

```js
dialog.addEventListener("close", () => {
    // dialog is closed at this point
});
```

## Preventing Dialog Dismissal

You can, in some cases, prevent a dialog dismissal. If the form calls `preventDefault` on the `submit` event, the dialog will fail to dismiss.

> **tip**
>
> It is not possible to cancel a dismissal triggered by the **ESC** gesture.
