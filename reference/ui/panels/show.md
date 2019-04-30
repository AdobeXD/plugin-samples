# Showing a Panel

One of the required lifecycle methods for your panel is the `show` function. This function will run when the user click to open your panel.

The `show` function receives an `event` argument. The `event` argument includes a `node` property. If you fail to attach your UI to this node, your UI will not be visible.

Here is a simple example:

```js
function show(event) {
  const HTML = "YOUR HTML GOES HERE";
  let rootNode = document.createElement("panel");
  rootNode.innerHTML = HTML;

  event.node.appendChild(rootNode);
}
```

The `show` function is one of the required functions to be exported from your `main.js` file:

```js
module.exports = {
  panels: {
    example: {
      show: show,
      hide: hide,
      update: update
    }
  }
};
```
