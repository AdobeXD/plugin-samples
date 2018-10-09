# Quick Start: Make your first XD plugin

Let’s walk through creating your first Adobe XD plugin together.

We'll keep things simple in this Quick Start guide. Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD plugin. 

At the end of the guide, we'll suggest some next steps for going deeper with the XD plugin APIs.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- A text editor to write your code in (like VSCode, Sublime Text, Bracket, Atom, etc)


## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/getting-started).

### 1. Identify where your plugins are located

Adobe XD loads plugins that are in development from a `develop` folder in specific location on your machine. To get to that folder, simply go to this menu item: _Plugins > Development > Show Develop Folder_.

This will open the `develop` folder, which we'll use in the next step.

### 2. Create your plugin scaffold

Next, you'll need to make a new folder within the `develop` folder to store the plugin files that you'll create below. Name your new plugin folder anything you like.

Now, let's create your plugin files. Open your favorite text editor and create two files inside of your new plugin folder with these _exact_ names:

1.   `manifest.json` is your plugin’s manifest.

    This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on. 
   [Learn about the manifest here](/reference/structure/manifest.md).
   
2.   `main.js` is your plugin’s code. 

    This file contains your JavaScript code that implements the logic for your plugin. 
   [Learn more about `main.js` here](/reference/structure/handlers.md).

It's possible to have more files if you want, but these files are the bare minimum requirement for your plugin to work, and are all we'll need for this Quick Start tutorial.


### 3. Create your plugin’s manifest

In the previous step, you created a file named `manifest.json`. Open that file and paste in this JSON object:

```json
{
    "id": "com.adobe.xd.helloWorld",
    "name": "Hello World sample plugin",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Say hello",
            "commandId": "helloCommand"
        }
    ]
}
```

If you're curious about what each entry means, [see the manifest documentation](/reference/structure/manifest.md).

The value of the `commandId` property may be any string; in this case, it's `helloCommand`. In the next section, we will see how this string is associated with the code for our plugin.


### 4. Create your plugin’s code

Next, we need to create the JavaScript code for our plugin. The code lives in a file named `main.js`, which we created in step #2.


Paste this code into `main.js`:

```js
const {Text, Color} = require("scenegraph"); // [1]

function helloHandlerFunction(selection) { // [2]
    const el = new Text(); // [3]
    el.text = "Hello!";
    el.styleRanges = [
        {
            length: el.text.length,
            fill: new Color("#FF0000")
        }
    ];
    selection.insertionParent.addChild(el); // [4]
    el.moveInParentCoordinates(100, 100); // [5]
}

module.exports = { // [6]
    commands: {
        helloCommand: helloHandlerFunction
    }
};
```

This code does the following:

1.  Gets references to the `Text` and `Color` classes from XD’s `scenegraph` module. There are several different [API modules you can load using `require()`](/reference).

2.  Defines our handler function. The handler function will run when the user selects the “Say Hello” menu command in the app.

3.  Creates a new `Text` object. There's nothing in it yet! The following lines assign various properties and styles to the text.

4.  Adds the `Text` object to the scenegraph at the top-left (coordinates `0, 0,`).

5.  Puts the `Text` object at coordinates `100, 100` within the parent element.

6.  Exports a map object, which associates the JavaScript handler function (`helloHandlerFunction`) with the `commandId` property declared in the manifest earlier. The command ID (the part to the left of the `:` here) must match the `commandId` value declared in your manifest exactly.


### 5. Run your plugin

So we’ve written a plugin! How do we run it?

If you haven’t already done so, launch XD and open a new document. Then navigate to the _Plugins > Say hello_ menu item.

Alternatively, if XD was already open, select _Plugins > Development > Reload Plugins_.

![It worked!](/images/readme-assets/on-canvas.png)

Congratulations! You’ve built your first plugin for Adobe XD!


## Next Steps

- Learn about [debugging plugins](/guides/debugging-guide)
- Follow our [tutorials](/guides/index.md)
- See working code in our [sample repos](https://github.com/AdobeXD/Plugin-Samples)
- Browse the [API references](/reference/how-to-read.md)
