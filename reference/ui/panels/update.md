# Updating a Panel

The `update` function is one of the optional lifecycle method for panels. This function will run when the user either changes the selection or modifies a node within the current selection. A mutation can be anything, including moves, resizes, etc.

The `update` function receives `selection` and `documentRoot` arguments:

```js
function update(selection, documentRoot) {
  const { Text } = require("scenegraph");

  if (!(selection.items[0] instanceof Text)) {
    panelContainer.innerHTML = `<p>Please select a text object in the document.</p>`;
  }
}
```

Note that the example code above assumes you created a reference to the panel markup `panelContainer` at the global level when the panel was created.

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
