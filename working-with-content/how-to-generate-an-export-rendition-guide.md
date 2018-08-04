# How to generate an export rendition

This sample describes how an XD plugin can invoke the default file picker and generate an export rendition of the selected Artboard. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-generate-an-export-rendition-guide).

## Contents

1. [Technology Used](how-to-generate-an-export-rendition-guide.md#technology-used)
2. [Prerequisites](how-to-generate-an-export-rendition-guide.md#prerequisites)
3. [Development Steps](how-to-generate-an-export-rendition-guide.md#development-steps)
4. [Next Steps](how-to-generate-an-export-rendition-guide.md#next-steps)

## Technology Used

* References: [XD Export Renditions API](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/how-to-generate-an-export-rendition-guide/TBD/README.md)
* References: [XD User Interface Concepts](https://adobe-xd.gitbook.io/plugin-api-reference/user-interface/ui-concepts)

## Prerequisites

* Basic knowledge of HTML, CSS, and JavaScript.
* [Getting Started Guide](../getting-started/getting-started-guide.md)
* [Debugging Guide](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/debugging-guide/README.md)

## Development Steps

### 1. Create plugin scaffold

As described in the [Getting Started Guide](../getting-started/getting-started-guide.md), create the directory for your plugin:

```text
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.exportrendition
$ cd com.adobe.exportrendition
$ touch manifest.json
$ touch main.js
```

Edit the manifest file for your plugin:

```javascript
{
    "id": "com.adobe.exportrendition",
    "name": "Export Rendition Plugin",
    "version": "0.0.1",
    "main": "main.js",
    "host": {
        "app": "XD",
        "minVersion": "10.0.10.24"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Export Rendition",
            "commandId": "exportRendition"
        }
    ]
}
```

In the `main.js` file, link the commandId to the main function

```javascript
async function exportRendition(selection) {
    if (selection.items.length > 0) {
    // The body of this function is added later
    }
}

module.exports = {
    commands: {
        exportRenditionㅏ
    }
};
```

Since this sample requries user to select an object, we use an `if` statement to check if there is an XD object selected. The remaining steps in this guide describe additional edits to the `main.js` file.

### 2.  Get references to the `application` module and `localFileSystem` class of `uxp` module

```javascript
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
```

These modules are required to invoke the file picker and export renditions.

### 3. Use `fs` to invoke the file picker

```javascript
const file = await fs.getFileForSaving();
```

This will invoke the default file picker for user to choose the save directory and filename.

### 4. Set the renditions object

```javascript
const renditions = [{
    node: selection.items[0], // [1]
    fileToken: file, // [2]
    type: "png", // [3]
    scale: 2 // [4]
}];
```

1. `selection.items[0]` refers to the first selected item
2. Set the `fileToken` property as the file variable created in step \#3
3. Set the `type` property as `png`
4. Set the desired scale of the exported rendition

### 5. Create renditions

```javascript
application.createRenditions(renditions) // [1]
    .then(results => { // [2]
        ...
    })
    .catch(error => {
        console.log(error);
    })
```

1. `application` module has `createRenditions` method which creates renditions based on the configuration object \(set in step \#4\) in the parameter
2. `createRenditions` method returns a promise object which can be chained witth `.then` and `.catch`

### 6. Create a UI dialog inside `.then`

```javascript
// create the dialog
let dialog = document.createElement("dialog"); // [1]

// main container
let container = document.createElement("div"); // [2]
container.style.minWidth = 400;
container.style.padding = 40;

// add content
let title = document.createElement("h3"); // [3]
title.style.padding = 20;
title.textContent = `PNG Rendition has been saved at ${file.nativePath}`;
container.appendChild(title);

// close button
let closeButton = document.createElement("button"); // [4]
closeButton.textContent = "Got it!";
container.appendChild(closeButton);

closeButton.onclick = (e) => { // [5]
    dialog.close();
}

document.body.appendChild(dialog); // [6]
dialog.appendChild(container); 
dialog.showModal()
```

Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects. Elements have the `style` property which contains metrics properties you can set 1. The `dialog` element is the modal window that pops down in XD 2. Create a container `div` element 3. Create a `h3` element to let the user know where the rendition has been saved 4. You need at least one exit point. Create a close button and add it to the container 5. Create a listener for the click event and close the dialog 6. Attache the dialog to the document, addd the contianer, and use `showModal` method to show the modal

### 7. Test the plugin

Make sure to select an item \(artboard\) in XD and execute the plugin command:

![](../.gitbook/assets/export-rendition-execute.png)

You should see a modal window like this one:

![](../.gitbook/assets/export-rendition-pick-file.png)

The rendition will be saved at the specified location:

![](../.gitbook/assets/export-rendition-complete.png)

## Next Steps

Ready for more? Take a look at other guides:

* [Guides](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/README.md)

