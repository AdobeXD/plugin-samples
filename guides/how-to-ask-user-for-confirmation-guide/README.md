# Asking the user for confirmation

This sample demonstrates how to build a user confirmation dialog in XD.  **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-ask-user-for-confirmation)**.


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
- [Getting Started Guide](/guides/getting-started-guide)
- [Debugging Guide](/guides/debugging-guide)

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

- [How to debug](/guides/debugging-guide)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
