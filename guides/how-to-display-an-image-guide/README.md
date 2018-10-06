# How to show an image in the modal UI
This sample shows how to add an image in the modal UI. **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-display-an-image)**.

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
- References: [XD User Interface Concepts](/reference/ui/ui-concepts.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](/guides/getting-started-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

### 1. Create plugin scaffold

As described in the [Getting Started Guide](/guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.displayimage
$ cd com.adobe.displayimage
$ touch manifest.json
$ touch main.js
```

Edit the manifest file for your plugin:

```
{
    "id": "com.adobe.displayimage",
    "name": "Native Path Plugin",
    "version": "0.0.1",
    "main": "main.js",
    "host": {
        "app": "XD",
        "minVersion": "10.0.10.24"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Display Image in UI",
            "commandId": "displayImage"
        }
    ]
}
```

In the `main.js` file, link the commandId to the main function

```js
async function displayImage(selection) {
    // The body of this function is added later
}

module.exports = {
    commands: {
        displayImage
    }
};
```

The remaining steps in this guide describe additional edits to the `main.js` file.

### 1. Create a container and set width/height/padding
```js
let container = document.createElement("div"); // [1]
container.style.minWidth = 400; // [2]
container.style.minHeight = 500;
container.style.padding = 20;
```
1. Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects
2. Elements have the `style` property which contains metrics properties you can set

### 2. Add a title
```js
// add title
let title = document.createElement("h1"); // [1]
title.textContent = "Displaying an image";
title.style.padding = 40;
container.appendChild(title);
```
1. Create a text element and append it to the container

### 3. Add an image
```js
let img = document.createElement("img"); // [1]
img.src = "portrait.png" // [2]
img.style.padding = 30; // [3]
img.style.height = "100%"
img.style.display = "block";
img.style.margin = "auto";
img.style.width = "100%";
container.appendChild(img);
```
1. Create an image element
2. Set the `src` property to a local image
3. Set the stlye properties to center the image

### 4. Create an exit point
```js
let closeButton = document.createElement("button"); // [1]
closeButton.textContent = "OK!"; // [2]
closeButton.style.padding = 50;
closeButton.style.margin = 50;
closeButton.onclick = (e) => { // [3]
    dialog.close();
}
container.appendChild(closeButton); // [4]
```
1. Create a button element
2. Add the text and style the button
3. Listen to the click event and close the dialog
4. Append the button to the container

### 5. Create a dialog and add the container
```js
let dialog = document.createElement("dialog"); // [1]
dialog.appendChild(container); // [2]
```
1. The `dialog` element is the modal window that pops down in XD
2. Add the container created in the previous steps to `dialog`

### 6. Create the main function
```js
function displayImage(selection) {
    //  add the dialog to the main document
    document.body.appendChild(dialog); // [1]
    dialog.showModal() // [2]
}
```
1. Append the dialog in the document
2. `.showModal` method shows the dialog (modal) in XD

### 7. Test the plugin

If you reload the plugin and execute it, you should see a modal window like this one:

<img src="/images/readme-assets/display-image.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/guides)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
