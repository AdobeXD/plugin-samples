# With document.createElement

This sample demonstrates how to build a user confirmation dialog in XD. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-ask-user-for-confirmation-guide/how-to-ask-user-for-confirmation).

## Contents

* [Technology Used](how-to-ask-user-for-confirmation-guide.md#technology-used)
* [Prerequisites](how-to-ask-user-for-confirmation-guide.md#prerequisites)
* [Development Steps](how-to-ask-user-for-confirmation-guide.md#development-steps)
  * [1. Create the dialog.](how-to-ask-user-for-confirmation-guide.md#1-create-the-dialog)
  * [2. Create the form and set its properties.](how-to-ask-user-for-confirmation-guide.md#2-create-the-form-and-set-its-properties)
  * [3. Create the heading to show up on the form.](how-to-ask-user-for-confirmation-guide.md#3-create-the-heading-to-show-up-on-the-form)
  * [4. Append the heading to the form container.](how-to-ask-user-for-confirmation-guide.md#4-append-the-heading-to-the-form-container)
  * [5. Create the footer.](how-to-ask-user-for-confirmation-guide.md#5-create-the-footer)
  * [6. Create a helper function to create buttons](how-to-ask-user-for-confirmation-guide.md#6-create-a-helper-function-to-create-buttons)
  * [7. Create the buttons using the helper function](how-to-ask-user-for-confirmation-guide.md#7-create-the-buttons-using-the-helper-function)
  * [8. Append the buttons to the footer.](how-to-ask-user-for-confirmation-guide.md#8-append-the-buttons-to-the-footer)
  * [9. Append the footer to the form container.](how-to-ask-user-for-confirmation-guide.md#9-append-the-footer-to-the-form-container)
  * [10. Append the form container to the dialog created in the first step.](how-to-ask-user-for-confirmation-guide.md#10-append-the-form-container-to-the-dialog-created-in-the-first-step)
  * [11. Append the dialog to the document body.](how-to-ask-user-for-confirmation-guide.md#11-append-the-dialog-to-the-document-body)
* [Next Steps](how-to-ask-user-for-confirmation-guide.md#next-steps)
* [Other Resources](how-to-ask-user-for-confirmation-guide.md#other-resources)

## Technology Used

* References: 
  * [UXP API - Document](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/classes/document)
  * [UXP API - Dialog](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmldialogelement)
  * [UXP API - Form](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
  * [UXP API - Footer](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
  * [UXP API - Button](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlbuttonelement)    
  * [UXP API - Heading](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)

## Prerequisites

* Basic knowledge of HTML, CSS, and JavaScript.
* [Getting Started Guide](../../getting-started/getting-started-guide.md)

## Development Steps

### 1. Create the dialog.

```text
let dialog = document.createElement("dialog");
```

### 2. Create the form and set its properties.

```text
let container = document.createElement("form");
container.setAttribute("method", "dialog");
container.style.minWidth = 400;
container.style.padding = 40;
```

### 3. Create the heading to show up on the form.

```text
let message = document.createElement("h1");
message.textContent = "Are you sure?";
```

### 4. Append the heading to the form container.

```text
container.appendChild(message);
```

### 5. Create the footer.

```text
let footer = document.createElement("footer");
```

### 6. Create a helper function to create buttons

```text
function createButton(text, variant){
    let newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.setAttribute("uxp-variant", variant);
    newButton.onclick = (e) => dialog.close();
    return newButton;
}
```

### 7. Create the buttons using the helper function

```text
let yesButton = createButton("Yes", "cta");
let noButton = createButton("No");
```

### 8. Append the buttons to the footer.

```text
footer.appendChild(yesButton);
footer.appendChild(noButton);
```

### 9. Append the footer to the form container.

```text
container.appendChild(footer);
```

### 10. Append the form container to the dialog created in the first step.

```text
dialog.appendChild(container);
```

### 11. Append the dialog to the document body.

```text
document.body.appendChild(dialog);
```

## Next Steps

Description

* [How to debug](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/how-to-debug/README.md)

## Other Resources

* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/link/README.md)
* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/link/README.md)

