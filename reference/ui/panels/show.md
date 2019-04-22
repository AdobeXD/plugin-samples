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
`show` function is called when your plugin is made visible to the user. The parameter that is passed includes a `node` property to which you should attach your user interface. If you fail to attach your UI to this node, your UI will not be visible.

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
