# Showing a Panel

One of the required functions for your panel is
the `show` function. This function will run when the user clicks on your panel. 

```js
function show(event) {
    const HTML = "YOUR HTML GOES HERE"
    let rootNode = document.createElement("panel");
    rootNode.innerHTML = HTML;

    event.node.appendChild(rootNode);
}
```
`show` function gives you one parameter, `event` which comes with one property called `node`. You can use `appendChild` method to attach your UI root node to this. Your UI root node must have an HTML inside.

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
As mentioned above, the `show` function is one of the required functions to be exported from your `main.js` file.
