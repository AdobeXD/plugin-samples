# How to style text

Creating styled text in Adobe XD is easy! In this tutorial, we'll show you how to create a text element with a specific color and font size, and also a text element with multiple inline colors.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- [Quick Start Tutorial](/tutorials/quick-start)
- [Debugging Tutorial](/tutorials/debugging/index.md)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-style-text).

### 1. Prepare your plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/tutorials/quick-start).

Replace the JSON object in your manifest with the one below, noting the changes for the following fields:

1. `id`
1. `name`
1. `uiEntryPoints[0].label`
1. `uiEntryPoints[0].commandId`

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Create Styled Text sample plugin",
    "host": {
        "app": "XD",
        "minVersion": "13.0"
    },
    "version": "1.0.0",
    "description": "Description of your plugin.",
    "summary": "Summary of your plugin",
    "languages": [
        "en"
    ],
    "author": "Your Name",
    "helpUrl": "https://mywebsite.com/help",
    "icons": [
        { "width": 48, "height": 48, "path": "images/icon01x.png" },
        { "width": 96, "height": 96, "path": "images/icon02x.png" },
        { "width": 144, "height": 144, "path": "images/icon03x.png" },
        { "width": 192, "height": 192, "path": "images/icon04x.png" }
    ],
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Create Styled Text",
            "commandId": "createStyledTextCommand"
        }
    ]
}
```

Refer to the full documentation of [manifest.json file](/reference/structure/manifest.md#top-level-metadata) to learn more.

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

The remaining steps in this tutorial describe additional edits to the `main.js` file.


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
    node.fill = new Color("#FF0000");           // [3]
    node.fontSize = 24;

    selection.insertionParent.addChild(node);   // [4]
    node.moveInParentCoordinates(20, 50);       // [5]
}
```

1. Create the `Text` object.
2. Populate `text` with a string.
3. Set the color to red and the font size to 24 for the entire string.
4. Add `text` to the scenegraph as a child of the currrently-selected artboard.
5. Move `text` to a different position relative to the artboard's coordinate system.

Character styles such as color and font size can also vary within the text. Read more below for details.


### 4. Test the plugin

If you reload the plugin and run it, you should see the following result:

![Red text](/images/red.png)

Not bad for a few lines of code! Let's push it a little further.


### 5. Update the main function

All red is ok, but we can make our text more colorful than that. Let's change the code to apply different styles to different parts of the text, resulting in rainbow-colored text.

The `styleRanges` property lets us apply different styles to different ranges of the node's text:

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

    node.styleRanges = textData.map(item => ({              // [3]
        length: item.text.length,
        fill: new Color(item.color)
    }));

    node.fontSize = 24;                                     // [4]

    selection.insertionParent.addChild(node);
    node.moveInParentCoordinates(20, 50);
}
```

Here's what's changed:

1. This data structure stores the text to be displayed, as well as the color to use for each fragment of text.
1. Just as before, we set `node.text` equal to the text to be displayed. This time, the text string is created by concatenating together all the `.text` property values contained in the `textData` array. The `Array#map` gets us an array of strings, which we combine into a single string with `Array#join`.
1. In this step, we build an array of style objects, applying each style to a few characters of the text string. We use `Array#map` again, this time converting each item in the `textData` array into a style object. The `length` of each style is equal to the length of the text string contained in one element of the `textData` array. The `fill` of each style uses the color value contained in one element of the `textData` array.
1. We can still apply styles to the entire text node at once, as in the earlier example. Here, the font size will be set to the same value across _all_ the style ranges we just created.

> **tip**
> The `Color` constructor understands some color names, but you have plenty of other options for defining colors precisely, including hex, rgba, and more. [See the `Color` reference for more information](/reference/Color.md).

Here are a few things to notice about the `styleRanges` property of `Text` objects:
* `styleRanges` is an array of objects; you can have more than one style for a text node.
* Each range is given a `length` which determines the number of characters to which the style is applied, starting from the end of the previous style range.
* Character styles such as `fill` or `fontSize` can be set to different values in each style range, or they can be set on the `Text` node overall to apply the setting to _all_ existing style ranges.


### 6. Run the plugin

After saving all of your changes, reload the plugin in XD and run it. You'll now have rainbow-colored text:

![Rainbow text](/images/rainbow.png)


## Next Steps

Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:

- [Text](/reference/scenegraph.md#text)
- [Color](/reference/Color.md)


Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)