# How to create styled text

Creating styled text in Adobe XD is easy! In this guide, we'll show you how to create a text element with a specific color and font size, and also a text element with multiple inline colors. **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-style-text)**.


## Technology Used

- [SceneGraph API](/reference/scenegraph.md)
- [Text Node](/reference/scenegraph.md#Text)
- [Color](/reference/Color.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](/guides/getting-started-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

### 1.  Create plugin scaffold

As described in the [Getting Started Guide](/guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.xd.createStyledText
$ cd com.adobe.xd.createStyledText
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.xd.createStyledText",
    "name": "Create Styled Text sample plugin",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Create Styled Text",
            "commandId": "createStyledTextCommand"
        }
    ]
}
```

In the main.js file, link the commandId to a handler function

```js
function createStyledTextHandlerFunction(selection) {
    // The body of this function is added later
}

module.exports = { 
    commands: {
        "createStyledTextCommand": createStyledTextHandlerFunction
    }
};
```

The remaining steps in this guide describe additional edits to the main.js file.

### 2. Import Node Types from the SceneGraph API

We'll need both the [Text](/reference/scenegraph.md#Text) and [Color](/reference/Color.md) classes from XD's [SceneGraph Module](/reference/scenegraph.md).

```js
const { Text, Color } = require("scenegraph");
```

### 3. Create a handler function, which adds red text to the user's doucment

```js
function createStyledTextHandlerFunction(selection) {
    const node = new Text();                  // [1]
    node.text = "This is some red text";      // [2]
    node.styleRanges = [{                     // [3]
        length: node.text.length,
        fill: new Color("#FF0000"),
        fontSize: 24
    }];
    
    selection.insertionParent.addChild(node); // [4]
    node.moveInParentCoordinates(20, 50);     // [5]
}
```

1. The first step is to create the `Text` object, which will be added to the scenegraph later.
2. The `Text` object is populated with the string of text to be displayed.
3. A style range is created, which sets the color to be red and the font size to be 24.  
4. The Text object is added to the scenegraph as a child of the currrently-selected artboard.
5. The Text object is moved to a different position relative to the artboard's coordinate system.

Here are a few things to notice about the `styleRanges` property, which is set in step 3:
* `styleRanges` is an array of objects; you can have more than one style for a text node.
* Each style is given a `length` which determines the number of characters to which the style is applied. Specifying the length of our text string ensures that the color is applied to the entire text node.
* Text color is specified by the `fill` property. We're using a CSS color which equates to red.
* The size of the text is specified by `fontSize`.

### 4. Test the plugin

If you reload the pluign and execute it, you should see the following result:

![Red text](./assets/red.png)

### 5. Update the handler function, so that rainbow-colored text is added to the user's document

Now, let's change the code to use multiple styles.  As indicated earlier, the `styleRanges` property takes an _array_ of objects. This means we can have more than one style in a text node. Let's use that to our advantage and create a text node that displays the classical colors of the rainbow.

```js
function createStyledTextHandlerFunction(selection) {
    const node = new Text();                               // [1]
    
    const textData = [                                     // [2]
    	{text: "This ", color: "red"},
    	{text: "is ",   color: "orange"},
    	{text: "some ", color: "yellow"},
    	{text: "ra",    color: "green"},
    	{text: "in",    color: "blue"},
    	{text: "bow ",  color: "indigo"},
    	{text: "text",  color: "violet"}
    ];
    
    node.text = textData.map(item => item.text).join("");  // [3]
    
    node.styleRanges = textData.map(item => ({             // [4]
        length: item.text.length,
        fill: new Color(item.color),
        fontSize: 24
    }));

    selection.insertionParent.addChild(node);              // [5]
    node.moveInParentCoordinates(20, 50);
}
```

1. Just like before, we start by creating a `Text` node.
2. This data structure stores the text to be displayed, as well as the color to use for each fragment of text.
3. Just as before, we set `node.text` equal to the text to be displayed.  This time, the text string is created by concatenating together all the `text` values contained in the `textData` array. The `Array#map` function converts each item in the `textData` array to the string that is to be displayed. The `Array#join` function concatenates those strings together.
4. In this step, we build the array of styles, applying each style to a few characters of the text string.  We use `Array#map` again, this time converting each item in the `textData` array into a style object. The `length` of each style is equal to the length of the text string contained in one element of the `textData` array. The `color` of each style is equal to the color value contained in one element of the `textData` array.
5. Finally, we add the `Text` object to the scenegraph, just as before.

> **Tip:**
>
> The `Color` constructor understands some color names. If we'd wanted to use a color that Adobe XD didn't understand, we'd have had to come up with the appropriate CSS color version instead.

### 6. Test the plugin again

Plugins > "Create Styled Text"

## Next Steps

Description

- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
