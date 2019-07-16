# Panel update() callback

The `update()` function is an _optional_ lifecycle method in [panel objects](../../structure/handlers.md#panel). XD calls `update()` whenever your panel UI content should be refreshed:
* When the user changes the selection
* When the user modifies a node within the current selection. This can include actions such as move, resize, changing fill color, etc.
* When your panel is reopened after having been closed

The `update` function receives [`selection` and `root` arguments](../../structure/handlers.md#contextual-arguments):

```js
function update(selection, root) {
  const { Text } = require("scenegraph");

  if (!(selection.items[0] instanceof Text)) {
    panelContainer.innerHTML = `<p>Please select a text object in the document.</p>`;
  }
}
```

Note that the example code above assumes you created a reference to the panel markup `panelContainer` at the global level when the panel was created.

Whenever the `update` function is called, it is important to get in and out as quickly as possible since it's triggered for essentially every user action in XD while your panel is open.
