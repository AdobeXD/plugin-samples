# Building a Modal Dialog with HTML

In order to create the above DOM structure, you'll need to use the HTML5 DOM API. This means using methods such as `document.createElement`, `Element#appendChild` and others. This can turn quite verbose, so typically you'll use a framework or set `innerHTML` directly, like so:


```js
let ourDialog;
function showOurDialog() {
    if (!ourDialog) {
        ourDialog = document.createElement("dialog");
        ourDialog.innerHTML = `
<style>
    form {
        width: 360px;
    }
    .h1 {
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
    .icon {
        border-radius: 4px;
        width: 24px;
        height: 24px;
        overflow: hidden;
    }
</style>
<form method="dialog">
    <h1 class="h1">
        <span>Create Shape</span>
        <img class="icon" src="./assets/icon.png" />
    </h1>
    <hr />
    <p>Please enter the kind of shape you'd like to create. You can also include additional options by separating them with spaces.</p>
    <label>
        <span>Shape</span>
        <input type="text" placeholder="e.g., Rectangle 10 10 20 40" />
    </label>
    <footer>
        <button uxp-variant="primary">Cancel</button>
        <button type="submit" uxp-variant="cta">Create</button>
    </footer>
</form>
        `;
    }
    return ourDialog.showModal();
}
```

> **Note**
>
> The syntax above is using modern JavaScript's template literals, which allow for multi-line strings. This greatly simplifies using HTML!

### Important Notes

* You should be very careful when injecting HTML in this manner. It's tempting to use interpolation (`${variable}`) to inject content into this HTML, but doing so could allow untrusted content to pollute your user interface. You should always populate your interface separately by looking up elements and using `textContent` or `value` as appropriate.

* Inline styles are not applied, hence the `<style />` section at the top of the string.

* Event handlers and scripts are not parsed.

## Wiring Event Handlers

Just creating the DOM structure isn't sufficient, however &mdash; you'll also need to wire up the necessary event handlers so that you can listen for the user's intent.

A modal dialog will do the following automatically with no further work:

* Modal dialogs will _**always**_ close with **ESC**. This is to ensure a user can always exit a crashed or hung plugin.
* Pressing **ENTER** will do the following:
  * Call the `onsubmit` handler attached to the dialog's `form` element.
  * If there is a `button` with `type="submit"` or `uxp-variant="cta"`, the button's `onclick` handler will be called

Although some actions are handled for you, you'll still need to attach an `onclick` handler to each button that can perform an action. Otherwise your buttons will appear do nothing. Furthermore, in order to actually _do_ something when the user presses **ENTER**, you'll likely want to override the default `onsubmit` handler for the dialog's `form`.

```js
const form = dialog.querySelector("form");
const createButton = dialog.querySelector("button[uxp-variant=cta]");
const cancelButton = dialog.querySelector("button[uxp-variant=primary]");

const submit = () => {
    // signal to caller that the user wanted to perform the action
    dialog.close("create");
}

form.onsubmit = submit;
createButton.onclick = e => {
    e.preventDefault(); // prevent double submission
    submit();
}
cancelButton.onclick = e => {
    // signal to the caller that the user canceled the dialog
    // pressing ESC will trigger the same value passed to dialog.close
    dialog.close("reasonCanceled");
}
```
