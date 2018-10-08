# How to Debug Your Plugin

Bugs happen! In this guide, you will learn how to debug your Adobe XD plugin.

## Prerequisite

At least one plugin in your `develop` folder (you can create one using our [Quick Start guide](/guides/quick-start-guide)).


## Debugging Steps

During development, if your plugin is misbehaving, there are few things you can do to investigate the problem.

### 1. Look for errors in the developer console

You can see error messages your plugin may be causing with the XD developer console. 

The developer console can be opened from the Plugins menu:

| Platform      | Menu item          |
| ------------- | -------------      |
| macOS         | Plugins->Development->Developer Console |
| Windows       | Plugins->Developer Console |

### 2. Try reloading the plugins

You can reload all plugins in your `develop` folder from the Plugins menu (or using the handy keyboard shortcut):

| Platform      | Menu item          |
| ------------- | -------------      |
| macOS         | Plugins->Development->Reload Plugins (Shift-Cmd-R) |
| Windows       | Plugins->Reload Plugins (Ctrl-Alt-E) |

If there are any errors blocking the plugin from running, they will appear in the developer console on reload:

![reload-plugins](/images/readme-assets/reload-plugins.png)

### 3. Try logging messages to the developer console

The example code below does not appear to be creating the "Hello!" text as expected.

Let's try adding a "start message" and an "end message" into `sayHello()` to double-check that the code is starting and running all the way to the end:

```javascript
function sayHello(selection) {
  console.log("sayHello started!"); // log a message

  const el = new Text();
  el.text = "Hello!";
  el.styleRanges = [
    {
      length: el.text.length,
      fill: new Color("#FFFFFF")
    }
  ];

  selection.insertionParent.addChild(el);
  el.moveInParentCoordinates(100, 100);

  console.log("sayHello ran to the end!"); // log a message
}
```

Your `console.log` messages will appear in the developer console:

![start-message](/images/readme-assets/start-message.png)

It looks like the function is running... maybe there is another problem.

![wrong-color](/images/readme-assets/wrong-color.png)

Oops, the fill color set by the plugin is `#FFFFFF`, which is white: the same color as this artboard's background.

You can verify this with a `console.log` message:

```javascript
console.log("el fill color =" + el.fill);
```

## Next Steps

Ready to learn more about XD plugins?

- Learn about [plugin structure](/reference/structure/)
- Follow along with our [tutorials](/guides)
- Browse the [API references](/reference/how-to-read.md)