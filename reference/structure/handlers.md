# The `main.js` file

All plugins must have a `main.js` file, which serves as the entry point for execution of your JavaScript code. This file is where all the fun happens!

Below, we'll cover some points to help you get oriented with `main.js`.

## Wiring your code to the manifest

The way you link your code with the manifest is different depending on which UI entry point your plugin uses.

### For modal dialogs and headless scripts

Your `main.js` file exports a map linking each `commandId` from the manifest to a _handler function_ in your code:

```js
function sayHello(selection, documentRoot) {
  console.log("Hello, world!");
}

module.exports = {
    commands: {
        helloCommand: sayHello
    }
};
```

In this example:

1. `helloCommand` matches the value of `commandId` in your manifest
1. `sayHello` is the name of your main handler function, so it is mapped to `helloCommand` in your command exports.

### For panels

Your `main.js` file exports a map linking each `panelId` from the manifest to an _object of lifecycle functions_ in your code:

```js
function show(event) {
  const createPanel = function() {
    const PANEL_HTML = `
            <form method="dialog" id="main">
            </form>
        `;
    let dom = document.createElement("panel");
    dom.innerHTML = PANEL_HTML;
    return dom;
  };
  event.node.appendChild(createPanel());
}

function hide(event) {
  event.node.firstChild.remove();
}

function update(selection, documentRoot) {
  yourUpdateHandler();
}

module.exports = {
    panels: {
        yourPanel: {
            show,
            hide,
            update
        }
    }
};
```

Within `module.exports`, the property name `yourPanel` maps directly to the `panelId` in the manifest. Inside this object are three functions: `show`, `hide`, and `update`. These are plugin lifecycle methods. Only `show` and `hide` are required.

- `show`: called when your plugin is made visible to the user. The parameter that is passed includes a `node` property to which you should attach your user interface. If you don't attach your UI to this node, your UI will not be visible.
- `hide`: called when your plugin is made invisible to the user (when the user navigates to the plugin list, toggles the panel view to another view, or the user invokes a different plugin panel from the _Plugins_ menu). Just like with the `show` lifecycle method, the event parameter that is passed also includes a `node` property. You can choose to remove your UI at this time, or if you prefer to reuse your UI, you can leave it attached. If you do so, be sure to handle `show` properly (i.e., don't attach your UI multiple times, or the user will see duplicates).
- `update` (optional): called whenever the user changes their selection or mutates a `node` within that selection. A mutation can be anything, including moves, resizes, etc. Whenever this function is called, it is important to get in and out as quickly as possible—while this function executes, XD is blocked. Note that `update` comes with two parameters, `selection` and `documentRoot`.

## Contextual arguments

The handler function (in the above example, `sayHello`) receives two contextual arguments from XD:

- The current [selection](../selection.md) state
- The root node of the entire document (see [scenegraph > RootNode](../scenegraph.md#rootnode))

The argument names `selection` and `documentRoot` are arbitrary, but are considered convention. We use those names throughout our documentation.

## Accessing app APIs

See [Available APIs](../core/apis.md) to learn about how to access the APIs that XD provides you with. Most APIs are loaded using `require()`, but a few can be accessed directly as globals.

## Loading libraries and other JavaScript files

You can learn about including further JavaScript files in our [JavaScript concepts section on using `require`](/reference/javascript/javascript-support.html#can-i-use-require).
