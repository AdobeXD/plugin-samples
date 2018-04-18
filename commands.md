<a name="module_commands"></a>

## commands
You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same
commands as XD users have access to in the UI. These methods do not take arguments. Instead, set the [selection](selection.md) to the objects you
want the command to target, then invoke the command:

**Example**  
```js
var commands = require("commands");
selectionModel.selection = [shape1, shape2, maskShape];
commands.createMaskGroup();
```

* [commands](#module_commands)
    * [.group()](#module_commands.group)
    * [.ungroup()](#module_commands.ungroup)
    * [.createMaskGroup()](#module_commands.createMaskGroup)
    * [.convertToPath()](#module_commands.convertToPath)
    * [.duplicate()](#module_commands.duplicate)
    * [.bringToFront()](#module_commands.bringToFront)
    * [.bringForward()](#module_commands.bringForward)
    * [.sendToBack()](#module_commands.sendToBack)
    * [.sendBackward()](#module_commands.sendBackward)
    * [.flipHorizontal()](#module_commands.flipHorizontal)
    * [.flipVertical()](#module_commands.flipVertical)
    * [.createSymbol()](#module_commands.createSymbol)
    * [.createRepeatGrid()](#module_commands.createRepeatGrid)


* * *

<a name="module_commands.group"></a>

### commands.group()
Wrap the selected objects in a Group, leaving the Group selected afterward. Equivalent to _Object > Group_ in the UI.

**Kind**: static method of [<code>commands</code>](#module_commands)  

**Example**  
```js
var shape1 = new Rectangle();
// ...configure Rectangle size & appearance...
var label = new Text();
// ...configure Text content & appearance...

// Place inside a Group: add both nodes to the current edit context, select them, then run the group() command
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(label);
selection.items = [shape1, label];
commands.group();
var group = selection.items[0];
```

* * *

<a name="module_commands.ungroup"></a>

### commands.ungroup()
Ungroups any of the selected objects are ungroupable containers (Groups, Symbols, Repeat Grids, etc.). Equivalent to _Object > Ungroup_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.createMaskGroup"></a>

### commands.createMaskGroup()
Creates a masked Group from the selected objects, using the object that is highest in the z-order as the mask shape.
The mask shape must be a leaf node or Boolean Group. Equivalent to _Object > Mask With Shape_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

**Example**  
```js
var shape1 = new Rectangle(),
    shape2 = new Ellipse();
// ...configure shapes' size & appearance...
var maskShape = new Ellipse();
// ...configure mask shape's size...

// Create a Masked Group: add all nodes to the current edit context, select them, then run the createMaskGroup() command
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);
selection.insertionParent.addChild(maskShape);  // added last: topmost in Z order
selection.items = [shape1, shape2, maskShape];  // order here does not matter
commands.createMaskGroup();
var maskedGroup = selection.items[0];
```

* * *

<a name="module_commands.convertToPath"></a>

### commands.convertToPath()
Converts each selected object to a Path with the exact same visual appearance. Only applies to leaf nodes and Boolean Groups.
Equivalent to _Object > Path > Convert to Path_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.duplicate"></a>

### commands.duplicate()
Duplicates all selected objects, leaving the duplicates selected afterward.
* If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top of the
  artboard z order.
* If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order (duplicates will
  not be contiguous in the z order if the originals were not).
Equivalent to _Edit > Duplicate_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.bringToFront"></a>

### commands.bringToFront()
Brings selected objects to the front of the z order. Equivalent to _Object > Arrange > Bring to Front_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.bringForward"></a>

### commands.bringForward()
Bring each selected object one step closer to the front of the z order. Equivalent to _Object > Arrange > Bring Forward_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.sendToBack"></a>

### commands.sendToBack()
Sends selected objects to the back of the z order. Equivalent to _Object > Arrange > Send to Back_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.sendBackward"></a>

### commands.sendBackward()
Bring each selected object one step closer to the back of the z order. Equivalent to _Object > Arrange > Send Backward_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.flipHorizontal"></a>

### commands.flipHorizontal()
Flips the object horizontally. Some objects such as Symbols cannot be flipped. Equivalent to _Object > Flip > Horizontally_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.flipVertical"></a>

### commands.flipVertical()
Flips the object vertically. Some objects such as Symbols cannot be flipped. Equivalent to _Object > Flip > Vertically_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.createSymbol"></a>

### commands.createSymbol()
Convert the selected objects to a new Symbol. Equivalent to _Object > Make Symbol_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.createRepeatGrid"></a>

### commands.createRepeatGrid()
Convert the selected objects to a new Repeat Grid. Equivalent to _Object > Make Repeat Grid_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

