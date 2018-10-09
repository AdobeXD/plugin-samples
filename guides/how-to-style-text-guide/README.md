# How to style text

Creating styled text in Adobe XD is easy! In this guide, we'll show you how to create a text element with a specific color and font size, and also a text element with multiple inline colors.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- [Quick Start Tutorial](/guides/quick-start-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-style-text).

### 1.  Prepare your plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/guides/quick-start-guide).

Replace the JSON object in your manifest with the one below, noting the changes for the following fields:

1. `id`
1. `name`
1. `uiEntryPoints[0].label`
1. `uiEntryPoints[0].commandId`

```json
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


Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code:

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

The remaining steps in this guide describe additional edits to the `main.js` file.


### 2. Require in XD API dependencies

For this tutorial, we just need access to two XD scenegraph classes.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const { Text, Color } = require("scenegraph");
```

Now the `Text` and `Color` classes are required in and ready to be used.


### 3. Create the main function

In this step, we'll build out the main function, `createStyledTextHandlerFunction`, that we added in the first step. This function will add red text to the user's doucment.

Each of the numbered comments are explained below the code:

```js
function createStyledTextHandlerFunction(selection) {
    const node = new Text();                    // [1]
    node.text = "This is some red text";        // [2]
    node.styleRange = [{                        // [3]
        length: node.text.length,
        fill: new Color("#FF0000"),
        fontSize: 24
    }];
    
    selection.insertionParent.addChild(node);   // [4]
    node.moveInParentCoordinates(20, 50);       // [5]
}
```

1. Create the `Text` object.
2. Populate `text` with a string.
3. Create a style range, setting the color to be red and the font size to 24.  
4. Add `text` to the scenegraph as a child of the currrently-selected artboard.
5. Move `text` to a different position relative to the artboard's coordinate system.

Here are a few things to notice about the `styleRange` property of `Text` objects:
* `styleRange` is an array of objects; you can have more than one style for a text node.
* Each style is given a `length` which determines the number of characters to which the style is applied. Specifying the length of our text string ensures that the color is applied to the entire text node.
* Text color is specified by the `fill` property.
* The size of the text is specified by the `fontSize` property.


### 4. Test the plugin

If you reload the plugin and run it, you should see the following result:

![Red text](./assets/red.png)

Not bad for a few lines of code! Let's push it a little further.


### 5. Update the main function

All red is ok, but we can make our text more colorful than that. Let's change the code to apply multiple styles to the text, resulting rainbow-colored text in the document.

As we mentioned earlier, the `styleRange` property takes an _array_ of objects. This means we can have more than one style in a text node. Let's use that to our advantage:

```js
function createStyledTextHandlerFunction(selection) {
    const node = new Text();
    
    const textData = [                                     // [1]
    	{text: "This ", color: "red"},
    	{text: "is ",   color: "orange"},
    	{text: "some ", color: "yellow"},
    	{text: "ra",    color: "green"},
    	{text: "in",    color: "blue"},
    	{text: "bow ",  color: "indigo"},
    	{text: "text",  color: "violet"}
    ];
    
    node.text = textData.map(item => item.text).join("");   // [2]
    
    node.styleRange = textData.map(item => ({               // [3]
        length: item.text.length,
        fill: new Color(item.color),
        fontSize: 24
    }));

    selection.insertionParent.addChild(node);
    node.moveInParentCoordinates(20, 50);
}
```

Here's what's changed:

1. This data structure stores the text to be displayed, as well as the color to use for each fragment of text.
1. Just as before, we set `node.text` equal to the text to be displayed. This time, the text string is created by concatenating together all the `.text` property values contained in the `textData` array. The `Array#map` gets us an array of strings, which we combine into a single string with `Array#join`.
1. In this step, we build an array of style objects, applying each style to a few characters of the text string. We use `Array#map` again, this time converting each item in the `textData` array into a style object. The `length` of each style is equal to the length of the text string contained in one element of the `textData` array. The `color` of each style is equal to the color value contained in one element of the `textData` array.

> **tip**
> The `Color` constructor understands some color names, but you have plenty of other options for defining colors, including hex, rgba, and more. [See the `Color` reference for more information](/reference/Color.html).


### 6. Run the plugin

After saving all of your changes, reload the plugin in XD and run it. You'll now have rainbow-colored text:

![]()


## Next Steps

Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:

- [Text Node](/reference/scenegraph.md#text)
- [Color](/reference/Color.md)


Ready to explore further? Take a look at our other resources:

- [Tutorials](/guides)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)