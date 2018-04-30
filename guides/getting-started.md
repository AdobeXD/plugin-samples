# Getting Started with XD Plugin Development

Let's walk through the process of how you can create an Adobe XD plugin. This plugin is pretty simple to start, but you should be able to follow the instructions to create just more complex plugins as well.

## Identify where your plugins are located

Adobe XD loads plugins from a `plugins` folder in specific storage location:

Platform | Path
---------|-----------
macOS    | `~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/`  (note: ~/Library, not /Library)
Windows  |  `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\`

Navigate to the above path, and if there _isn't_ a folder that already exists with the name `plugins`, go ahead and create it.

```bash
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/
$ mkdir plugins
```

## Create your plugin scaffold

Adobe XD plugins require two files:

* `xdplugin.json` is your plugin's **manifest**. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on.
* `main.json` is your plugin's **code**. This file contains your JavaScript code that implements the logic for your plugin.

These two files (and any others you need) are stored within a folder. Each plugin gets its own folder, so the folder names need to be unique.

```bash
$ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
$ mkdir com.adobe.xd.hello-world
$ cd com.adobe.xd.hello-world
```

## Create your plugin's manifest

Adobe XD requires that your plugin have a manifest named `xdplugin.json`. Our example looks like this:

```json
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
```

For more about what each entry means, [see the manifest documentation](../reference/manifest.md).

## Create your plugin's code

Next, we need to create the code for our plugin. This lives in a file named `main.js`.

```js
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
}

return { // [5]
    commands: {
        helloCommand: sayHello
    }
}
```

1. In this line, we get references to the `Text` and `Color` classes from XD's `scenegraph` module. There are several different [API modules you can load using `require()`](./index.md#apis).

2. Next we define our handler function, which will respond to the "Say Hello" menu command.

3. In this line we create a new `Text` object. The following lines assign various properties and styles to the text.

4. Here we add the `Text` object to the scenegraph. It should show up at the (0, 0) coordinates, so if you don't see it, try zooming out or panning until you do.

5. The final part of `main.js` is to export the handles functions in a map that links them to the command ID(s) defined in your manifest earlier. The command ID (part to the left of the `:` here must match the IDs in your manifest exactly.

## Invoke your plugin

Great -- we've written a plugin -- how do we invoke it? If you haven't already, go ahead and launch XD and open a new document. Then navigate to **Plugins | Say hello**.

![Plugin Menu](./getting-started/menu.png)

Once you click the menu item, "Hello" should appear in your XD canvas.

![Nothing Happened](./getting-started/nothing-happened.png)

Oh... wait. That didn't go exactly to plan. Where's "Hello" at? Is something wrong? Let's figure out how to debug, so we can see what's going on.

## Viewing Plugin Logs

Adobe XD will log errors from your plugin to a log file. Anything your plugin logs via `console.log` will also be written to the same log file. How you access the log file depends on your platform.

### macOS

The easiest way to view the console output from your plugin is to open `Console.app`. You can then search for `Adobe XD` in the `Search` field. You can also search for anything else you might be logging.

![Console app](./getting-started/console-app-filter.png)

### Windows

You'll need to open the log file at `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\AdobeXD.log`. How you want to view the output is up to you, but it's suggested that you use `tail` if you use Git Bash, or you can use the [PowerShell equivalent](https://stackoverflow.com/questions/187587/a-windows-equivalent-of-the-unix-tail-command/188126#188126).

## Debugging our plugin

Knowing this, let's add a couple of `console.log` statements to our `sayHello` function. Modify it so that it looks like the following:

```js
function sayHello(selection) {
    console.log("com.adobe.xd.say-hello", "sayHello started");
    const el = new Text();
    el.text = "Hello!";
    el.styleRanges = [
        {
            length: el.text.length,
            fill: new Color("#FF0000")
        }
    ];
    selection.insertionParent.addChild(el);
    console.log("com.adobe.xd.say-hello", "sayHello ended");
}
```

Next, hit the `x` key (without any modifiers like Shift or Cmd). This shortcut will reload all the plugins in the document _and_ execute your last command.

Now you should see some more information in the log:

![Console results](./getting-started/console-app-results.png)

Clearly our plugin is executing -- otherwise we wouldn't see our logs in the output. Perhaps the plugin is executing, but the results aren't what we expected.

If we select everything in the document, we'll find that this is indeed the case:

![It rendered offscreen](./getting-started/rendered-offscreen.png)

At this point we know what happened -- the text is rendered outside of the artboard, and so it doesn't render. Let's instruct the text element to move inside the artboard by modifying our `sayHello` function one more time:


```js
function sayHello(selection) {
    const el = new Text();
    el.text = "Hello!";
    el.styleRanges = [
        {
            length: el.text.length,
            fill: new Color("#FF0000")
        }
    ];
    selection.insertionParent.addChild(el);
    el.moveInParentCoordinates(100, 100);
}
```

Next, press `x` again, and you should see the following:

![It worked](./getting-started/on-canvas.png)

## Iterating on your plugin

You've already seen that you can press `x` to reload your plugin code and execute the previous command. There are additional shortcuts that you may find useful:

* `q` &mdash; will quickly reload all the plugin code in the current window.
* `x` &mdash; will reload all the plugin code _and_ execute the last command again.
* `d` &mdash; will repeat your last command without reloading any plugin code.

Note that you will have to quit and relaunch Adobe XD in the following scenarios:

* If you add a new plugin, XD won't see it until next launch
* If you modify the JSON manifest, XD won't see it until next launch

## Congratulations!

You've built your first plugin with Adobe XD!

To continue, [read more about core concepts in XD plugins](../index.md#concepts) or read the [full API reference](../index.md#apis).
