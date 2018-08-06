##### Properties with object values

Some scenegraph properties have values that are not simple primitive types (e.g. numbers), but rather are objects with sub-properties of
their own. In order to update the document with changes, you must invoke the top-level setter on the _scenenode object_ itself &ndash;
changing properties on the object value "inline" will not result in an update.

For example:
```js
// Right:
var color = node.fill;
color.r = 0x80;
node.fill = color;  // update fill in the scenegraph by kicking the node's setter

// Wrong - document will not update:
node.color.r = 0x80;
```
