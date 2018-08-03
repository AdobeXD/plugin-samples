# Asking the user for confirmation

This sample demonstrates how to build a user confirmation dialog in XD.

<!-- Image or GIF if necessary -->
<!--![PLUGINNAME]() -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Development Steps](#development-steps)
1. [Next Steps](#next-steps)
1. [Other Resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References: 
	- [UXP API - Document](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/classes/document)
	- [UXP API - Dialog](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmldialogelement)
	- [UXP API - Form](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
	- [UXP API - Footer](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
	- [UXP API - Button](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlbuttonelement)	
	- [UXP API - Heading](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](../getting-started-guide)

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

- [How to debug](how-to-debug)

## Other Resources
- [Title](link)
- [Title](link)
