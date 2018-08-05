# How to work with ScenenodeList
This sample demonstrates how to work with scenenode lists. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-work-with-scenenodelist-guide).

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
- References: [XD Scenegraph - ScenenodeList](https://adobe-xd.gitbook.io/plugin-api-reference/xd-api-reference/scenenodelist)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](/Guides/getting-started-guide)

## Development Steps

### 1.  Create plugin scaffold

As described in the [Getting Started Guide](/Guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.scenenodelist
$ cd com.adobe.scenenodelist
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.scenenodelist",
    "name": "Scene Node List Plugin",
    "version": "0.0.1",
    "main": "main.js",
    "host": {
        "app": "XD",
        "minVersion": "10.0.10.24"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Create Elements",
            "commandId": "createElements"
        },
        {
            "type": "menu",
            "label": "Filter and Color",
            "commandId": "filterAndColor"
        }
    ]
}
```

In the main.js file, link the commandIds to main functions

```js
function createElements(selection) {
	// The body of this function is added later
}

function filterAndColor(selection, root) {
	// The body of this function is added later
}

module.exports = {
	commands: {
		createElements,
		filterAndColor
	}
};
```

The remaining steps in this guide describe additional edits to the main.js file.

### 2.  Get references to the all classes needed from XD’s `scenegraph` module
```js
const { Artboard, Rectangle, Ellipse, Text, Color } = require("scenegraph");
```
All classes above are imported and ready to be used.

### 3. Create the first function that creates XD elements

```js
function createElements(selection) {
	for (let i = 0; i < 5; i++) { // [1]
		let rectangle = new Rectangle(); // [2]
		rectangle.width = 30 * i;
		rectangle.height = 20 * i;
		rectangle.fill = new Color("gray");
		selection.insertionParent.addChild(rectangle);
		rectangle.moveInParentCoordinates(50 * i, 50 * i);

		let ellipse = new Ellipse(); // [3]
		ellipse.radiusX = 20 * i;
		ellipse.radiusY = 20 * i;
		ellipse.fill = new Color("gray");
		selection.insertionParent.addChild(ellipse);
		ellipse.moveInParentCoordinates(100 * i, 200 * i);

		let txt = new Text(); // [4]
		txt.text = `example text ${i}`
		txt.styleRanges = [
			{
				length: txt.text.length,
				fill: new Color("gray"),
				fontSize: 20
			}
		];
		selection.insertionParent.addChild(txt);
		txt.moveInParentCoordinates(200 * i, 100 * i);
	}
}

```
1. Use `for` loop to create 5 elements of each XD object
2. The `Rectangle` object is added to the current artboard. For more information, see the [reference guide](https://adobe-xd.gitbook.io/plugin-api-reference/xd-api-reference/scenegraph#Rectangle)
3. The `Ellipse` object is added to the current artboard. For more information, see the [reference guide](https://adobe-xd.gitbook.io/plugin-api-reference/xd-api-reference/scenegraph#Ellipse)
4. The contents of the string is added to a `Text` object, and the `Text` object is added to the current artboard.  For more information, see [How to create styled text](/Guides/how-to-style-text-guide)

Note that each object can be added to the first artboard using the `selection.insertionParent.addchild` method and `moveInParentCoordinates` to move each object inside the artboard.

### 4. Create the second function that filters for rectnagles and colors them red

```js 
function filterAndColor(selection, root) { // [1]
	root.children.forEach(node => { // [2]
		if (node instanceof Artboard) { // [3]
			let artboard = node;
			let rectangles = artboard.children.filter(artboardChild => { //[4]
				return artboardChild instanceof Rectangle;
			})
			rectangles.forEach(rectangle => { // [5]
				rectangle.fill = new Color("red");
			})
		}
	})
}
```

1. Plugin commands's first default parameter is the `selection` object and the second default parameter is the `root` object
2. Start from the root node and traverse down the tree using the `children` property
3. Only start traversing down further if the child is an artboard
4. Filter the artboard's children to only select rectangles
5. Color the rectnagles red

### 5. Execute the plugin

Ater saving all your changes, reload the plugin in XD and invoke it. First, run the first command, "Create Elements"

<img src="/.meta/readme-assets/create-elements.png" width="50%" height="50%">

Then, run the second command, "Filter and Color"

<img src="/.meta/readme-assets/filter-and-color.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/Guides)
