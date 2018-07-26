# Getting Started with XD Plugin Development

Let’s walk through the process of how you can create an Adobe XD plugin. This plugin is pretty simple to start, but you should be able to follow the instructions to create just more complex plugins as well.

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

*   `xdplugin.json` is your plugin’s **manifest**. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on.
*   `main.js` is your plugin’s **code**. This file contains your JavaScript code that implements the logic for your plugin.

These two files (and any others you need) are stored within a folder. Each plugin gets its own folder, so the folder names need to be unique.

```
    $ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
    $ mkdir com.adobe.xd.hello-world
    $ cd com.adobe.xd.hello-world
    $ touch xdplugin.json
    $ touch main.js
``` 

### 3. Create your plugin’s manifest

Adobe XD requires that your plugin have a manifest named `xdplugin.json`. Our example looks like this:

    {
        "id": "com.adobe.xd.helloWorld",
        "name": "Hello World sample plugin",
        "host": {
            "app": "XD",
            "minVersion": "8.0"
        },
        "uiEntryPoints": [
            {
                "type": "menu",
                "label": "Say hello",
                "commandId": "helloCommand"
            }
        ]
    }
    

For more about what each entry means, [see the manifest documentation](https://github.com/AdobeXD/Plugin-Reference/blob/master/reference/manifest.md).

### 4. Create your plugin’s code

Next, we need to create the code for our plugin. This lives in a file named `main.js`.

    const {Text, Color} = require("scenegraph"); // [1]
    
    function sayHello(selection) { // [2]
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
    
    return { // [6]
        commands: {
            helloCommand: sayHello
        }
    }
    

1.  In this line, we get references to the `Text` and `Color` classes from XD’s `scenegraph` module. There are several different [API modules you can load using `require()`](https://github.com/AdobeXD/Plugin-Reference/tree/master/reference).
    
2.  Next we define our handler function, which will respond to the “Say Hello” menu command.
    
3.  In this line we create a new `Text` object. The following lines assign various properties and styles to the text.
    
4.  Here we add the `Text` object to the scenegraph. It should show up at the (0, 0) coordinates, so if you don’t see it, try zooming out or panning until you do.

5.  We need to bring the added text into the artboard by moving it by using the scenenode method, [moveInParentCoordinatres](https://github.com/AdobeXD/Plugin-Reference/blob/master/reference/scenegraph.md#scenenodemoveinparentcoordinatesdeltax-deltay). Without this, the text would have been rendered outside of the artboard.

6.  The final part of `main.js` is to export the handles functions in a map that links them to the command ID(s) defined in your manifest earlier. The command ID (part to the left of the `:` here must match the IDs in your manifest exactly.
    

### 5. Invoke your plugin

Great – we’ve written a plugin – how do we invoke it? If you haven’t already, go ahead and launch XD and open a new document. Then navigate to **Plugins | Say hello**.

![It worked](../../.meta/readme-assets/on-canvas.png)

### Congratulations!

You’ve built your first plugin with Adobe XD!

## Next Steps

To continue, Read the [full API reference](https://github.com/AdobeXD/Plugin-Reference) or [other guides](https://github.com/AdobeXD/Plugin-Guides).

## Other Resources
- [Title](link)
- [Title](link)

