# Updating a Panel

There is one optional function for your panel: the `update` function. This function will run when the user either changes the selection or modifies the current selection. 

```js
function update(selection, documentRoot) {
    const { Text } = require("scenegraph");
    let panel = document.querySelector("panel");
    if (!(selection.items[0] instanceof Text)) {
        panel.innerHTML = `<p>This plugin requires you to select a text in the document. Please select a text.</p>`
    }
}
```
`update` function gives you two parameters, `selection` and `documentRoot`. You can use `selection` to access the current selection and use `documentRoot` to access the root node of the current document. This example checks if the current selection is an instance of Text. If not, the panel will display a warning suggesting user to select a Text node.

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
As mentioned above, the `update` function is optional.
