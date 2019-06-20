# Showing a Panel

The `show` function is the one required lifecycle method for creating a panel. This function will run when the user opens your panel.

The `show` function receives an `event` argument. The `event` argument includes a `node` property where you can attach your UI. If you don't attach your UI to this node, your UI will not be visible.

Here is a simple example:

```js
function show(event) {
  const content = "<p>Hello, World</p>";
  const panelContainer = document.createElement("div");
  panelContainer.innerHTML = content;

  event.node.appendChild(panelContainer);
}
```

The `show` function is the one required function to be exported from your `main.js` file when creating a panel:

```js
module.exports = {
  panels: {
    example: {
      show,
      hide,
      update
    }
  }
};
```
