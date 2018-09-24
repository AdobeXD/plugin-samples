# How to Debug Your Plugin

In this guide, you will learn how to debug your Adobe XD plugin.

<!-- Image or GIF if necessary -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [Prerequisites](#prerequisites)
1. [Debugging Steps](#debugging-steps)
1. [Next Steps](#next-steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

- Basic knowledge of JavaScript.
- At least one plugin installed.
- You have read the [Getting Started Guide](/Guides/getting-started-guide)

## Debugging Steps

### 1. Open the Developer Console.

In order to see the error messages your plugin may be generating, or `console.log` messages in your file, you will need to open the XD Developer Console.

The console allows you to see errors and plugin generated logs while executing plugins. The console log is enabled from the Plugins menu.

```
Mac: Plugins->Development->Developer Console
Win: Plugins->Developer Console
```

### 2. Try reloading the plugins

Reload the plugins in XD by either quitting and reopening the application, or using the handy keyboard shortcuts:

```
Mac: Plugins->Development->Reload Plugins (Shift-Cmd-R)
Win: Plugins->Reload Plugins (Ctrl-Alt-E)
```

If there are any errors blocking the plugin from running, they will appear in the Developer Console on reload.

![reload-plugins](/images/readme-assets/reload-plugins.png)

### 3. Try adding `console.log` messages to your code

The example code below adapted from the [Getting Started Guide](/Guides/getting-started-guide) does not appear to be creating the "Hello!" text as expected.

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

![start-message](/images/readme-assets/start-message.png)

It looks the function is running... maybe there is another problem.

![wrong-color](/images/readme-assets/wrong-color.png)

Oops, the fill color was `#FFFFFF`, which is white, and so is our background.

You can verify this with a console.log message:

```javascript
console.log("el fill color =" + el.fill);
```

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/Guides)
