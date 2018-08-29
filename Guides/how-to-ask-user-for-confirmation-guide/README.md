# Asking the user for confirmation

This sample demonstrates how to build a user confirmation dialog in XD.  **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-ask-user-for-confirmation)**.

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
  - [1. Create the dialog.](#1-create-the-dialog)
  - [2. Create the form and set its properties.](#2-create-the-form-and-set-its-properties)
  - [3. Create the heading to show up on the form.](#3-create-the-heading-to-show-up-on-the-form)
  - [4. Append the heading to the form container.](#4-append-the-heading-to-the-form-container)
  - [5. Create the footer.](#5-create-the-footer)
  - [6. Create a helper function to create buttons](#6-create-a-helper-function-to-create-buttons)
  - [7. Create the buttons using the helper function](#7-create-the-buttons-using-the-helper-function)
  - [8. Append the buttons to the footer.](#8-append-the-buttons-to-the-footer)
  - [9. Append the footer to the form container.](#9-append-the-footer-to-the-form-container)
  - [10. Append the form container to the dialog created in the first step.](#10-append-the-form-container-to-the-dialog-created-in-the-first-step)
  - [11. Append the dialog to the document body.](#11-append-the-dialog-to-the-document-body)
- [Next Steps](#next-steps)
- [Other Resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References: 
	- [UXP API - Document](/reference/uxp/class/Document.md)
	- [UXP API - Dialog](/reference/uxp/class/HTMLDialogElement.md)
	- [UXP API - Form](/reference/uxp/class/HTMLHtmlElement.md)
	- [UXP API - Footer](/reference/uxp/class/HTMLHtmlElement.md)
	- [UXP API - Button](/reference/uxp/class/HTMLButtonElement.md)	
	- [UXP API - Heading](/reference/uxp/class/HTMLHtmlElement.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](/Guides/getting-started-guide)

## Development Steps

### 1. Create the dialog.
```
let dialog = document.createElement("dialog");
```

### 2. Create the form and set its properties.
```
let container = document.createElement("form");
container.setAttribute("method", "dialog");
container.style.minWidth = 400;
container.style.padding = 40;
```

### 3. Create the heading to show up on the form.
```
let message = document.createElement("h1");
message.textContent = "Are you sure?";
```

### 4. Append the heading to the form container. 
```
container.appendChild(message);
```

### 5. Create the footer. 
```
let footer = document.createElement("footer");
```

### 6. Create a helper function to create buttons
```
function createButton(text, variant){
    let newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.setAttribute("uxp-variant", variant);
    newButton.onclick = (e) => dialog.close();
    return newButton;
}
```

### 7. Create the buttons using the helper function
```
let yesButton = createButton("Yes", "cta");
let noButton = createButton("No");
```

### 8. Append the buttons to the footer.
```
footer.appendChild(yesButton);
footer.appendChild(noButton);
```

### 9. Append the footer to the form container.
```
container.appendChild(footer);
```

### 10. Append the form container to the dialog created in the first step.
```
dialog.appendChild(container);
```

### 11. Append the dialog to the document body.
```
document.body.appendChild(dialog);
```

## Next Steps

Description

- [How to debug](/Guides/debugging-guide)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
