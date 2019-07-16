# Panel show() callback

The `show()` function is the one lifecycle method in [panel objects](../../structure/handlers.md#panel) that is **required**. XD calls `show()` each time the user opens your panel.

To populate the panel with UI elements, add DOM nodes to the `event.node` root node that is provided. There are two ways you can use `show()` to create your panel UI:

### Recreate panel on each show()
For simple panels, you can create the panel UI each time it's shown and throw it away each time it's hidden:

Here is a simple example:

```js
function show(event) {
  const content = "<p>Hello, World</p>";
  const panel = document.createElement("div");
  panel.innerHTML = content;

  event.node.appendChild(panel);
}

function hide(event) {
  event.node.firstChild.remove();
}
```

### Create panel on first show(), then reuse
For panels with more complex state, it may be simpler to continue reusing the same panel DOM nodes:

```js
let panel;

function show(event) {
  if (panel) { return; }

  const content = "<p>Hello, World</p>";
  panel = document.createElement("div");
  panel.innerHTML = content;

  event.node.appendChild(panel);
}

function hide(event) {
  // nothing to do here
}
```

Note: once the panel has been created you don't need to touch the DOM at all for hide & show to work correctly -- XD takes care of closing and reopening the panel UI's container automatically.

### Panel content updating
Whichever method you use, you'll typically also need to implement the [update() callback](./update.md) in order to update your panel UI if the selection or XD document content changes while the panel is already open.
