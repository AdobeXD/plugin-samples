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
`update` is called whenever the user changes selection or mutates a `node` within that selection. A mutation can be anything, including moves, resizes, etc. Whenever this function is called, it is important to get in and out as quickly as possible -- while this function executes, XD is blocked. Note that `update` comes with two parameters, `selection` and `documentRoot`.

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
