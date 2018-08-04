# Debugging Plugins

In this guide, you will learn to debug your Adobe XD plugin.

## Contents

1. [Prerequisites](debugging-guide.md#prerequisites)
2. [Debugging Steps](debugging-guide.md#debugging-steps)
3. [Next Steps](debugging-guide.md#next-steps)

## Prerequisites

* Basic knowledge of JavaScript.
* At least one plugin installed.
* You have read the [Getting Started Guide](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/getting-started-guide)

## Debugging Steps

### 1. Open the Developer Console.

In order to see the error messages your plugin may be generating, or `console.log` messages in your file, you will need to open the XD Developer Console.

The console allows you to see errors and plugin generated logs while executing plugins. The console log is enabled from the Plugins menu.

```text
Mac: Plugins->Development->Developer Console
Win: Plugins->Developer Console
```

### 2. Try reloading the plugins

Reload the plugins in XD by either quitting and reopening the application, or using the handy keyboard shortcuts:

```text
Mac: Plugins->Development->Reload Plugins (Shift-Cmd-R)
Win: Plugins->Reload Plugins (Ctrl-Alt-E)
```

If there are any errors blocking the plugin from running, they will appear in the Developer Console on reload.

![reload-plugins](../.gitbook/assets/reload-plugins.png)

### 3. Try adding `console.log` messages to your code

The example code below adapted from the [Getting Started Guide](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/getting-started-guide) does not appear to be creating the "Hello!" text as expected.

Let's try adding a start message and an end message into `sayHello()` to double check that the code is working:

```javascript
function sayHello(selection) {
  console.log("sayHello started!");
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
  console.log("sayHello ran to the end!");
}
```

Your `console.log` messages should appear in the Developer console:

![start-message](../.gitbook/assets/start-message.png)

It looks the function is running... maybe there is another problem.

![wrong-color](../.gitbook/assets/wrong-color.png)

Oops, the fill color was `#FFFFFF`, which is white, and so is our background.

You can verify this with a console.log message:

```javascript
console.log("el fill color =" + el.fill);
```

## Next Steps

Ready for more? Take a look at other guides:

* [Guides](https://github.com/AdobeXD/Plugin-Guides/tree/aaff05bf48613d1ebb47886e46dfd66e15c32686/Guides/README.md)

