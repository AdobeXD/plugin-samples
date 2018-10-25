# How to create paths

This sample demonstrates how to create path objects in XD.  The path objects are used to construct a pie chart.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Basic knowledge of [Paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
- [Quick Start Tutorial](/tutorials/quick-start)
- [Debugging Tutorial](/tutorials/debugging/index.md)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-create-path-objects).

### 1.  Create plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/tutorials/quick-start).

Replace the JSON object in your manifest with the one below, noting the changes for the following fields:

1. `id`
1. `name`
1. `uiEntryPoints[0].label`
1. `uiEntryPoints[0].commandId`

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Create Pie Chart sample plugin",
    "host": {
        "app": "XD",
        "minVersion": "13.0.0"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Create Pie Chart",
            "commandId": "createPieChartCommand"
        }
    ]
}
```



Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code:

```js
function createPieChartHandlerFunction(selection) {
    // The body of this function is added later
}

module.exports = {
    commands: {
        "createPieChartCommand": createPieChartHandlerFunction
    }
};
```

The remaining steps in this tutorial describe additional edits to the `main.js` file.


### 2.  Require in XD API dependencies

For this tutorial, we just need access to two XD scenegraph classes.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const { Path, Color } = require("scenegraph");
```

Now the `Path` and `Color` classes are required in and ready to be used.


### 3. Create helper functions

##### Calculate a point on a circle

Since our plugin will create a pie chart, this helper function will be used to return an x,y coordinates of each wedge in the pie chart. The function accepts `radius` and `angle` as parameters and use them to calculate the coordinates of a point on a circle at a given angle on the perimeter of the circle.

Add the lines of code below to your file:

```js
function pointOnCircle(radius, angle) {
    const radians = angle * 2. * Math.PI / 360.;
    const xcoord = radius * Math.cos(radians);
    const ycoord = radius * Math.sin(radians);
    return xcoord + "," + ycoord;
}
```

This is just straight-up JavaScript; there's nothing specific to XD plugin APIs to cover here.

We won't cover the math in depth, here's an overview what this helper function does:

- The angle is expressed in degrees. It must be converted to radians before passing it to the sine and cosine functions. More info: [Math.cos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), [Math.sin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
- The function will return the coordinates as a string in the `x,y` format, which will be used to be inserted to the path data, which also has to be a string



##### Add a single pie wedge to the scenegraph

Our plugin will also need to be able to add a single pie wedge to the scenegraph.

Add the lines of code below to your file. Each of the numbered comments are explained below the code:

```js
function createWedge(selection, radius, startAngle, endAngle, color) { // [1]
    const startPt = pointOnCircle(radius, startAngle);
    const endPt = pointOnCircle(radius, endAngle);
    const pathData = `M0,0 L${startPt} A${radius},${radius},0,0,1,${endPt} L0,0`; // [2]
    const wedge = new Path(); // [3]
    wedge.pathData = pathData; // [4]
    wedge.fill = new Color(color); // [5]
    wedge.translation = {x: radius, y: radius};  // [6]
    selection.insertionParent.addChild(wedge); // [7]
}
```

1. This function accepts five arguments:
    1. The current selection in the scene graph (`selection`)
    1. The pie chart radius (`chartRadius`)
    1. The start radian of the wedge (`startAngle`)
    1. The end radian of the wedge (`endAngle`)
    1. The color of the wedge (`color`)
1. Based on these arguments, `pathData` is constructed. The pen is moved to the origin, a line is drawn to the first point on the edge of the circle, an arc is drawn to the second point on the edge of the circle, and then a line is drawn back to the origin. For more information on how to create path data, please refer to [Paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
1. Create a new instance of `Path`
1. Set `pathData`
1. Set the color of the path object
1. Move the path object down and to the right by `radius` units.  As a result, the pie chart will appear with its top left corner positioned at `0,0`
1. Insert the path object into the currently-selected artboard


### 4. Create the main function

In this step, we'll build out the main function, `createLinesHandlerFunction`, that we added in the first step.

This function creates four wedges:

```js
function createPieChartHandlerFunction(selection) {
    createWedge(selection, 100, 0, 90, "red");
    createWedge(selection, 100, 90, 135, "blue");
    createWedge(selection, 100, 135, 225, "yellow");
    createWedge(selection, 100, 225, 360, "purple");
}
```

Note that the end angle of each wedge matches the start angle of the next wedge. As a result, the wedges fit together to create a complete pie chart!


### 5. Run the plugin

Ater saving all your changes, reload the plugin in XD and run it.  The result should be similar to the following:

![](/../images/pie-chart.png)


## Next Steps

Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:

- [Path](/reference/scenegraph.md#path)
- [Color](/reference/Color.md)
- [Commands](/reference/commands.md)

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)