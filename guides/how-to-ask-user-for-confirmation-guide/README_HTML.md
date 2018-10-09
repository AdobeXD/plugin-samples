# Asking the user for confirmation

This sample demonstrates how to build a user confirmation dialog in XD using HTML.


## Technology Used
- References: 
	- [UXP API - Document](../reference/uxp/class/Document.md)
	- [UXP API - Dialog](../reference/ui/dialogs.md)
	- [UXP API - Button](../reference/ui/widgets/buttons.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](../quick-start-guide)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-ask-user-for-confirmation).

### 1. Write the HTML to define the dialog with a form and two buttons
```
    <style>
        #myDialog form {
            width: 300px;
        }
    </style>
    <dialog id="myDialog">
        <form method="dialog">
            <h1>Are you sure?!</h1>
            <footer>
                <button id="ok" uxp-variant="cta">Yes</button>
                <button id="cancel">No</button>
            </footer>
        </form>
    </dialog>
```

### 2. Set the above HTML as innerHTML on the document
```
const $ = sel => document.querySelector(sel);

 document.body.innerHTML = `
    <style>
        #myDialog form {
            width: 300px;
        }
    </style>
    <dialog id="myDialog">
        <form method="dialog">
            <h1>Are you sure?!</h1>
            <footer>
                <button id="ok" uxp-variant="cta">Yes</button>
                <button id="cancel">No</button>
            </footer>
        </form>
    </dialog>
    `;
```

### 3. Add the event listeners on the buttons
```
    const [dialog, form, cancel, ok, name] = ["#myDialog", "#myDialog form", "#cancel", "#ok", "#name"].map(s => $(s));
    cancel.addEventListener("click", () => {
        dialog.close();
    });
    ok.addEventListener("click", () => {
        dialog.close();
    });
```

## Next Steps

Description

- [How to debug](how-to-debug)

## Other Resources
- [Title](link)
- [Title](link)
