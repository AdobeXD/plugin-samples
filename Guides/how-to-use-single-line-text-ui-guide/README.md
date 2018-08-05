# How to use single line text UI
This sample describes how an XD plugin can invoke the default file picker and display the text extracted from the file chosen by user. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-use-single-line-text-ui-guide).

<!-- Image or GIF if necessary -->
<!-- ![PLUGINNAME]() -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Development Steps](#development-steps)
1. [Next Steps](#next-steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References: [XD User Interface Concepts](https://adobe-xd.gitbook.io/plugin-api-reference/user-interface/ui-concepts)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](/Guides/getting-started-guide)

## Development Steps

### 1.  Create plugin scaffold

As described in the [Getting Started Guide](/Guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.singlelinetext
$ cd com.adobe.singlelinetext
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```
{
    "id": "com.adobe.singlelinetext",
    "name": "Single Line Text",
    "version": "0.0.1",
    "main": "main.js",
    "host": {
        "app": "XD",
        "minVersion": "10.0.10.24"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Single Line Text UI",
            "commandId": "singleLine"
        }
    ]
}
```

In the `main.js` file, link the commandId to the main function

```js
async function singleLine(selection) {
    // The body of this function is added later
}

module.exports = {
    commands: {
        singleLine
    }
};
```

The remaining steps in this guide describe additional edits to the `main.js` file.

### 2.  Get references to the `Text` and `Color` classes from XD’s `scenegraph` module
```js
const { Text, Color } = require("scenegraph");
```
`Text` and `Color` classes are imported and ready to be used.

### 3. Create a container and set width/padding
```js
let container = document.createElement("div"); // [1]
container.style.minWidth = 400; // [2]
container.style.padding = 40;
```
1. Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects
2. Elements have the `style` property which contains metrics properties you can set

### 4. Add elements into the container
```js
// add title
let title = document.createElement("h1");  // [1]
title.textContent = "What's your name?";
container.appendChild(title);

// single line text input
let textInput = document.createElement("input");  // [2]
textInput.style.padding = 20;
container.appendChild(textInput);

//  close button
let closeButton = document.createElement("button");  // [3]
closeButton.textContent = "Submit";
container.appendChild(closeButton);
```
1. Create a text element and append it to the container
2. Create a single line text input and append it to the container
3. You need at least one exit point. Create a close button and add it to the container

### 5. Create a dialog and add the container 
```js
let dialog = document.createElement("dialog"); // [1]
dialog.appendChild(container); // [2]
```
1. The `dialog` element is the modal window that pops down in XD
2. Add the container created in the previous steps to `dialog`

### 6. Create an async helper function to receive user input
```js
function showDialog() {
    return new Promise((resolve, reject) => { // [1]
        dialog.showModal() // [2]
        closeButton.onclick = (e) => { //[3]
            dialog.close();
            resolve(textInput.value)
        }
    })
}
```
1. Create a promise object to return after receiving user input
2. `.showModal` method shows the dialog (modal) in XD
3. Create a listener for the click event, resolve with the text value, and close the dialog

### 7. Create a helper function to create a text element
```js
function createText(selection, txt) {  // [1]
    const text = new Text();  
    text.text = `Welcome, ${txt}`; 
    text.styleRanges = [
        {
            length: text.text.length,
            fill: new Color("#0000ff"),
            fontSize: 40
        }
    ];
    selection.insertionParent.addChild(text); 
    text.moveInParentCoordinates(100, 100); 
}
```
1. `createText` function takes `selection` object and `txt` text as parameters. The contents of the string is added to a `Text` object, and the `Text` object is added to the currently-selected artboard or the first artboard.  For more information, see [How to create styled text](/Guides/how-to-style-text-guide)

### 8. Create the main function
```js
function singleLine(selection) {
     //  
    document.body.appendChild(dialog); // [1]    
    const txt = await showDialog(); // [2]
    createText(selection, txt) // [3]
}
```
1. Add the dialog to the main document
2. Use `await` to wait for user input in the single line text field
3. Use `createText` function to create a text element inside XD

### 9. Test the plugin

If you reload the plugin and execute it, you should see a modal window like this one:

<img src="/.meta/readme-assets/modal-what-is-your-name.png" width="50%" height="50%">

If you type in your name, the text should be added to the currently-selected or first artboard:

<img src="/.meta/readme-assets/single-line-text-output.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/Guides)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
