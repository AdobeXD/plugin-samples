# Asking the user for confirmation

This sample demonstrates how to build a user confirmation dialog in XD using HTML. **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-ask-user-for-confirmation)**.

<!-- Image or GIF if necessary -->
<!--![PLUGINNAME]() -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Development Steps](#development-steps)
  - [1. Write the HTML to define the dialog with a form and two buttons](#1-write-the-html-to-define-the-dialog-with-a-form-and-two-buttons)
  - [2. Set the above HTML as innerHTML on the document](#2-set-the-above-html-as-innerhtml-on-the-document)
  - [3. Add the event listeners on the buttons](#3-add-the-event-listeners-on-the-buttons)
- [Next Steps](#next-steps)
- [Other Resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References: 
	- [UXP API - Document](../reference/uxp/class/Document.md)
	- [UXP API - Dialog](../reference/ui/dialogs.md)
	- [UXP API - Button](../reference/ui/widgets/buttons.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](../getting-started-guide)

## Development Steps

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
