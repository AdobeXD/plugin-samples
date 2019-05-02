# Hiding a Panel

One of the required lifecycle methods for panels is the `hide` function. The `hide` function is called when your plugin is made invisible to the user (when the user navigates to the plugin list, toggles the panel view to another view, or the user invokes a different plugin panel from the Plugins menu).

The `hide` function receives an `event` argument. The `event` argument includes a `node` property:

```js
function hide(event) {
  event.node.firstChild.remove();
}
```

You can choose to remove your UI at the time `hide` is called, or if you prefer to reuse your UI, you can leave it attached. If you do so, be sure to handle `show` properly (i.e., don't attach your UI multiple times, or the user will see duplicates).

The `hide` function is one of the required functions to be exported from your `main.js` file:

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
