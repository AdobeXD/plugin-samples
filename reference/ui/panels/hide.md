# Hiding a Panel

One of the required functions for your panel is
the `hide` function. This function will run when the user either chooeses another panel or clicks on "Layers Panel" or "Assets Panel". 

```js
function hide(event) {
    event.node.firstChild.remove();
}
```
`hide` function is called when your plugin is made invisible to the user (when the user navigates to the plugin list, toggles the panel view to another view or the user invokes a different plugin panel from the Plugins menu). The parameter that is passed also includes a `node` property. You can choose to remove your UI at this time, or if you prefer to reuse your UI, you can leave it attached. If you do so, be sure to handle `show` properly (as in, don't attach your UI multiple times, or the user will see duplicates)

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
