# How to Draw Lines

This sample demonstrates how to draw lines in XD.

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
1. [Other Resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References
    - [XD Scenegraph - Line](references/line.md)
    - [XD Scenegraph - Commands](references/commands.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](../getting-started-guide)

## Development Steps

### 1.  Get references to the `Path` and `Color` classes from XD’s `scenegraph` module
```
const { Line, Color } = require("scenegraph");
```
`Line` and `Color` classes are imported and ready to be used.

### 2.  Require XD’s `commands` module
```
const commands = require("commands");
```
`commands` class is imported and ready to be used.

### 3. Create a helper function, `randomColor`
```
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({ length: 3 }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}
```
This function returns a web-friendly color hex value.

### 4. Create line data 
```
const lineData = [
    { startX: 100, startY: 110, endX: 210, endY: 233 },
    { startX: 210, startY: 233, endX: 320, endY: 156 },
    { startX: 320, startY: 156, endX: 400, endY: 300 },
    { startX: 400, startY: 300, endX: 500, endY: 120 }
]
```
Note that, in this example, the subsequent line's `startX` and `startY` match the former line's `endX` and `endY`. This ensures lines are connected to each other. Feel free to modifiy the data as you wish. 

### 5. Create the main function, `drawLines`
```
function drawLines(selection) { // [1]
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
    commands.group()
}
```
1. This function accepts one parameter, `selection`, which gives access to the selection object inside XD. Refer to [XD Selection Doc](references/selection.md) for more details.
2. Create an empty array for lines to be grouped in step [11]
3. Loop over the provided array of line data
4. Create a new instance of `Line`
5. Use the `Line` object's setter, `.setStartEnd`, to set the line data
6. Set `storkeEnabled` to `true` in order to draw a stroke for the line
7. Set the stroke color using the helper function, `randomColor`
8. Set the width of the stroke using `strokeWidth` property
9. Append the line object into the empty array created in step [2] 
10. Insert the line into the edit context using `selection.editContext.addChild` method
11. Set the `selection.items` objects to the aggreagted line array, `lines`, and use `group` command to group the objects

<img src="../../.meta/readme-assets/lines.png" width="50%" height="50%">

## Next Steps

Description

- [How to debug](how-to-debug)

## Other Resources
- [Title](link)
- [Title](link)