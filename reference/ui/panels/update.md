# Updating a Panel

There is one optional lifecycle method for panels: the `update` function. This function will run when the user either changes the selection or modifies a node within the current selection. A mutation can be anything, including moves, resizes, etc.

The `update` function receives `selection` and `documentRoot` arguments:

```js
function update(selection, documentRoot) {
  const { Text } = require("scenegraph");
  let panel = document.querySelector("panel");
  if (!(selection.items[0] instanceof Text)) {
    panel.innerHTML = `<p>This plugin requires you to select a text in the document. Please select a text.</p>`;
  }
}
```

Whenever the `update` function is called, it is important to get in and out as quickly as possible—while this function executes, XD is blocked.

The `update` function must be exported from your `main.js` file if you decide to use it:

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
