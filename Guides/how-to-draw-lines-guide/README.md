# How to add lines to the user's document

This sample demonstrates how to create a plugin that adds colored lines to the user's document. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-draw-lines-guide).

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
- References
    - [XD Scenegraph - Line](references/line.md)
    - [XD Scenegraph - Commands](references/commands.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](../getting-started-guide)

## Development Steps

### 1.  Create plugin scaffold

As described in the [Getting Started Guide](../getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
$ mkdir com.adobe.xd.createLines
$ cd com.adobe.xd.createLines
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.xd.createLines",
    "name": "Create Lines sample plugin",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Create lines",
            "commandId": "createLinesCommand"
        }
    ]
}
```

In the main.js file, link the commandId to a handler function

```js
function createLinesHandlerFunction(selection) {
    // The body of this function is added later
}

module.exports = { 
    commands: {
        "createLinesCommand": createLinesHandlerFunction
    }
};
```

The remaining steps in this guide describe additional edits to the main.js file.

### 2.  Get references to the `Path` and `Color` classes from XD’s `scenegraph` module
```
const { Line, Color } = require("scenegraph");
```
`Line` and `Color` classes are imported and ready to be used.

### 3.  Require XD’s `commands` module
```
const commands = require("commands");
```
`commands` class is imported and ready to be used.

### 4. Create a helper function, `randomColor`
```js
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({ length: 3 }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}
```
This function returns a web-friendly color hex value.

### 5. Create line data 
```js
const lineData = [
    { startX: 100, startY: 110, endX: 210, endY: 233 },
    { startX: 210, startY: 233, endX: 320, endY: 156 },
    { startX: 320, startY: 156, endX: 400, endY: 300 },
    { startX: 400, startY: 300, endX: 500, endY: 120 }
]
```
Note that, in this example, the subsequent line's `startX` and `startY` match the former line's `endX` and `endY`. This ensures lines are connected to each other. Feel free to modifiy the data as you wish. 

### 6. Create the main function, `createLinesHandlerFunction`
```js
function createLinesHandlerFunction(selection) { // [1]
    let lines = []; // [2]
    lineData.forEach(data => { // [3]
        const line = new Line(); //[4]
        line.setStartEnd( //[5]
            data.startX,
            data.startY,
            data.endX,
            data.endY
        )
        line.strokeEnabled = true; // [6]
        line.stroke = new Color(randomColor()); // [7]
        line.strokeWidth = 3; // [8]
        lines.push(line); // [9]
        selection.editContext.addChild(line) // [10]
    })
    selection.items = lines // [11]
    commands.group() // [12]
}
```
1. This function accepts one parameter, `selection`, which gives access to the selection object inside XD. Refer to [XD Selection Doc](references/selection.md) for more details.
2. Create an empty array to contain all the `Line` objects.  It will be used later, in step [11]
3. Loop over the provided array of line data
4. Create a new instance of `Line`
5. Use the `Line` object's setter, `.setStartEnd`, to set the line data
6. Set `strokeEnabled` to `true` in order to draw a stroke for the line
7. Set the stroke color using the helper function, `randomColor`
8. Set the width of the stroke using `strokeWidth` property
9. Append the line object into the empty array created in step [2] 
10. Insert the line into the edit context using `selection.editContext.addChild` method.  This step adds the line to the document's scenegraph.
11. Now that all of the `Line` objects have been added to the scenegraph, set the document's current selection to be those `Line` objects.
12. Use the `group` command to combine all of the currently-selected objects (the `Line` objects) into a single group object.

### 7. Execute the plugin

After saving all of your changes, reload the plugin in XD and invoke it.  The result should be similar to the following:

<img src="/.meta/readme-assets/lines.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/Guides)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)