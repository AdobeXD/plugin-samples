# Getting Started with XD Plugin Development

Let’s walk through the process of how you can create an Adobe XD plugin. This plugin is pretty simple to start, but you should be able to follow the instructions to create just more complex plugins as well. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/getting-started-guide).

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
- References: [reference to XD docs](https://github.com/AdobeXD/Plugin-Reference/tree/master/reference)
- Libraries/Frameworks/APIs: None

## Prerequisites
Basic knowledge of HTML, CSS, and JavaScript.

## Development Steps

### 1. Identify where your plugins are located

Adobe XD loads plugins from a `plugins` folder in specific storage location:

| Platform      | Path          |
| ------------- |:-------------:|
| MacOS         | `~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/` (note: `~/Library`, not `/Library`) |
| Windows       | `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\`       |

Navigate to the above path, and if there _isn’t_ a folder that already exists with the name `plugins`, go ahead and create it.
```
    $ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/
    $ mkdir plugins
```

### 2. Create your plugin scaffold

Adobe XD plugins require two files:

*   `manifest.json` is your plugin’s **manifest**. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on.
*   `main.js` is your plugin’s **code**. This file contains your JavaScript code that implements the logic for your plugin.

These two files (and any others you need) are stored within a folder. Each plugin gets its own folder, so the folder names need to be unique.  By convention, the name of the folder is usually the same as the id of the plugin (for more information about plugin ids, see the description of the manifest file, below). 

```
    $ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
    $ mkdir com.adobe.xd.helloWorld
    $ cd com.adobe.xd.helloWorld
    $ touch xdplugin.json
    $ touch main.js
``` 

### 3. Create your plugin’s manifest

Adobe XD requires that your plugin have a manifest named `manifest.json`. Our example looks like this:
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

For more about what each entry means, [see the manifest documentation](https://github.com/AdobeXD/Plugin-Reference/blob/master/reference/manifest.md).

The value of the `commandId` property may be any string.  In the next section, we will see how that string is associated with the code for our plugin.

### 4. Create your plugin’s code

Next, we need to create the code for our plugin. This lives in a file named `main.js`.
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

1.  In this line, we get references to the `Text` and `Color` classes from XD’s `scenegraph` module. There are several different [API modules you can load using `require()`](https://github.com/AdobeXD/Plugin-Reference/tree/master/reference).
    
2.  Next we define our handler function. The handler function will be invoked when the user selects the “Say Hello” menu command.  The binding between that menu command and this handler function is further described below.
    
3.  In this line we create a new `Text` object. The following lines assign various properties and styles to the text.
    
4.  Here we add the `Text` object to the scenegraph. It should show up at the (0, 0) coordinates, so if you don’t see it, try zooming out or panning until you do.

5.  We bring the added text into the artboard by moving it by using the scenenode method, [moveInParentCoordinatres](https://github.com/AdobeXD/Plugin-Reference/blob/master/reference/scenegraph.md#scenenodemoveinparentcoordinatesdeltax-deltay). Without this, the text would have been rendered outside of the artboard.

6.  The final part of `main.js` is to export a map object, which associates the JavaScript handler function with the commandId property declared in the manifest earlier.  The command ID (the part to the left of the `:` here) must match the commandId value declared in your manifest exactly.
    

### 5. Invoke your plugin

Great – we’ve written a plugin – how do we invoke it? 

If you haven’t already done so, go ahead and launch XD and open a new document. Then navigate to **Plugins | Say hello**.

Alternatively, if XD was already running, then select **Plugins | Development | Reload Plugins**.

![It worked](/.meta/readme-assets/on-canvas.png)

### Congratulations!

You’ve built your first plugin with Adobe XD!

## Next Steps

- [Full API reference](https://github.com/AdobeXD/Plugin-Reference)
- [Other guides](/Guides)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
