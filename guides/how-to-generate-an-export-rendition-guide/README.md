# How to generate an export rendition
This sample describes how an XD plugin can invoke the default file picker and generate an export rendition of the selected Artboard.


## Technology Used
- References: [XD File I/O](/reference/uxp/using-file-apis.md)
- References: [XD Export Renditions API](/reference/application.md#applicationcreaterenditionsrenditions)
- References: [XD User Interface Concepts](/reference/ui/ui-concepts.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](/guides/quick-start-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-generate-an-export-rendition).

### 1. Create plugin scaffold

As described in the [Quick Start Tutorial](/guides/quick-start-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.exportrendition
$ cd com.adobe.exportrendition
$ touch manifest.json
$ touch main.js
```

Edit the manifest file for your plugin:

```json
{
    "id": "com.adobe.exportrendition",
    "name": "Export Rendition Plugin",
    "version": "0.0.1",
    "main": "main.js",
    "host": {
        "app": "XD",
        "minVersion": "13.0.11.19"
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

```js
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
Since this sample requries user to select an object, we use an `if` statement to check if there is an XD object selected.
The remaining steps in this guide describe additional edits to the `main.js` file.

### 2.  Get references to the `application` module and `localFileSystem` class of `uxp` module
```js
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
```
These modules are required to invoke the folder picker and export renditions.

### 3. Use `fs` to invoke the folder picker
```js
const folder = await fs.getFolder();
const file = await folder.createFile("rendition.png");
```
This will invoke the default folder picker for user to choose the save directory and create a file named `rendition.png`.

### 4. Set the renditions object
```js
var renditions = [{
    node: selection.items[0], // [1]
    outputFile: file, // [2]
    type: application.RenditionType.PNG, // [3]
    scale: 2 // [4]
}];
```
1. `selection.items[0]` refers to the first selected item
2. Set the `outputFile` property as the file variable created in step #3
3. Set the `type` property as `application.RenditionType.PNG`
4. Set the desired scale of the exported rendition

### 5. Create renditions
```js
application.createRenditions(renditions) // [1]
    .then(results => { // [2]
        ...
    })
    .catch(error => {
        console.log(error);
    })
```
1. `application` module has `createRenditions` method which creates renditions based on the configuration object (set in step #4) in the parameter
2. `createRenditions` method returns a promise object which can be chained witth `.then` and `.catch`

### 6. Create a UI dialog inside `.then`
```js
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
Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects. Elements have the `style` property which contains metrics properties you can set
1. The `dialog` element is the modal window that pops down in XD
2. Create a container `div` element
3. Create a `h3` element to let the user know where the rendition has been saved
4. You need at least one exit point. Create a close button and add it to the container
5. Create a listener for the click event and close the dialog
6. Attache the dialog to the document, addd the contianer, and use `showModal` method to show the modal

### 7. Test the plugin

Make sure to select an item (artboard) in XD and run the plugin command:

<img src="/images/readme-assets/export-rendition-execute.png" width="50%" height="50%">

You should see a modal window like this one:

<img src="/images/readme-assets/export-rendition-pick-file.png" width="50%" height="50%">

The rendition will be saved at the specified location:

<img src="/images/readme-assets/export-rendition-complete.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/guides)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)