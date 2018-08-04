# How to display an image

This sample shows how to add an image in the modal UI. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-display-an-image-guide).

## Contents

1. [Technology Used](how-to-display-an-image-guide.md#technology-used)
2. [Prerequisites](how-to-display-an-image-guide.md#prerequisites)
3. [Development Steps](how-to-display-an-image-guide.md#development-steps)
4. [Next Steps](how-to-display-an-image-guide.md#next-steps)

## Technology Used

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
$ mkdir com.adobe.displayimage
$ cd com.adobe.displayimage
$ touch manifest.json
$ touch main.js
```

Edit the manifest file for your plugin:

```text
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

```javascript
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

```javascript
let container = document.createElement("div"); // [1]
container.style.minWidth = 400; // [2]
container.style.minHeight = 500;
container.style.padding = 20;
```

1. Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects
2. Elements have the `style` property which contains metrics properties you can set

### 2. Add a title

```javascript
// add title
let title = document.createElement("h1"); // [1]
title.textContent = "Displaying an image";
title.style.padding = 40;
container.appendChild(title);
```

1. Create a text element and append it to the container

### 3. Add an image

```javascript
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

```javascript
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

```javascript
let dialog = document.createElement("dialog"); // [1]
dialog.appendChild(container); // [2]
```

1. The `dialog` element is the modal window that pops down in XD
2. Add the container created in the previous steps to `dialog`

### 6. Create the main function

```javascript
function displayImage(selection) {
    //  add the dialog to the main document
    document.body.appendChild(dialog); // [1]
    dialog.showModal() // [2]
}
```

1. Append the dialog in the document
2. `.showModal` method shows the dialog \(modal\) in XD

### 7. Test the plugin

If you reload the plugin and execute it, you should see a modal window like this one:

![](../.gitbook/assets/display-image.png)

## Next Steps

Ready for more? Take a look at other guides:

* [Guides](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/README.md)

