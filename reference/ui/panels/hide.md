# Hiding a Panel

One of the required functions for your panel is
the `hide` function. This function will run when the user either chooeses another panel or clicks on "Layers Panel" or "Assets Panel". 

```js
function hide(event) {
    event.node.firstChild.remove();
}
```
`hide` function gives you one parameter, `event` which comes with one property called `node`. You can use `firstChild.remove` method to remove your UI root node from the plugin DOM. Note that if you don't remove your UI root node in this function, your plugin UI will keep being stacked on one another every time user opens your panel.

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
As mentioned above, the `hide` function is one of the required functions to be exported from your `main.js` file.
