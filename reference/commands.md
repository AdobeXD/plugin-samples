<a name="module_commands"></a>

## commands
You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same
commands as XD users have access to in the UI. Because structural changes have many nuanced rules and behaviors in XD, these calls
function more like automating the UI than like low-level APIs.

For example, these methods do not take arguments. Instead, set the [selection](selection.md) to the objects you want the command to target, then
invoke the command. Commands may also change the selection when run - for example, `group()` selects the newly created Group node.

**Example**  
```js
let commands = require("commands");
selection.items = [shape1, shape2, maskShape];
commands.createMaskGroup();
console.log(selection.items);  // [Group]
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
    * [.alignLeft()](#module_commands.alignLeft)
    * [.alignRight()](#module_commands.alignRight)
    * [.alignHorizontalCenter()](#module_commands.alignHorizontalCenter)
    * [.alignTop()](#module_commands.alignTop)
    * [.alignBottom()](#module_commands.alignBottom)
    * [.alignVerticalCenter()](#module_commands.alignVerticalCenter)
    * [.distributeHorizontal()](#module_commands.distributeHorizontal)
    * [.distributeVertical()](#module_commands.distributeVertical)
    * [.alignToPixelGrid()](#module_commands.alignToPixelGrid)


* * *

<a name="module_commands.group"></a>

### commands.group()
Wraps the selected objects in a [Group](scenegraph.md#Group), leaving the Group selected afterward. Equivalent to _Object >
Group_ in the UI.

**Kind**: static method of [<code>commands</code>](#module_commands)  

**Example**  
```js
let shape1 = new Rectangle();
// ...configure Rectangle size & appearance...
let label = new Text();
// ...configure Text content & appearance...

// Add both nodes to the current edit context first
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(label);

// Select both shapes, then run the group() command
selection.items = [shape1, label];
commands.group();
let group = selection.items[0];  // the new Group node is what's selected afterward
```

* * *

<a name="module_commands.ungroup"></a>

### commands.ungroup()
Ungroups any of the selected objects that are ungroupable containers (Groups, Symbols, Repeat Grids, etc.). Equivalent to
_Object > Ungroup_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.createMaskGroup"></a>

### commands.createMaskGroup()
Creates a masked [Group](scenegraph.md#Group) from the selected objects, using the object that is highest in the z order as
the mask shape. The mask shape must be a leaf node or [Boolean Group](scenegraph.md#BooleanGroup). Equivalent to
_Object > Mask With Shape_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

**Example**  
```js
let shape1 = new Rectangle(),
    shape2 = new Ellipse();
// ...configure shapes' size & appearance...
let maskShape = new Ellipse();
// ...configure mask shape's size...

// Create a Masked Group: add all nodes to the current edit context, select them, then run the createMaskGroup() command
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);
selection.insertionParent.addChild(maskShape);  // added last: topmost in z order
selection.items = [shape1, shape2, maskShape];  // order of selection array does not matter
commands.createMaskGroup();
let maskedGroup = selection.items[0];
```

* * *

<a name="module_commands.convertToPath"></a>

### commands.convertToPath()
Converts each selected object to a [Path](scenegraph.md#Path) with the exact same visual appearance. Only applies to leaf
nodes and [Boolean Groups](scenegraph.md#BooleanGroup). Equivalent to _Object > Path > Convert to Path_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.duplicate"></a>

### commands.duplicate()
Duplicates all selected objects, leaving the duplicates selected afterward.
* If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top
  of the artboard z order.
* If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order
  (duplicates of a multiple selection will not be contiguous in the z order if the originals were not).

Interactions triggered from the selected objects are only duplicated if the user is currently in the Prototype workspace.
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
Brings each selected object one step closer to the front of the z order. Equivalent to _Object > Arrange > Bring Forward_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.sendToBack"></a>

### commands.sendToBack()
Sends selected objects to the back of the z order. Equivalent to _Object > Arrange > Send to Back_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.sendBackward"></a>

### commands.sendBackward()
Sends each selected object one step closer to the back of the z order. Equivalent to _Object > Arrange > Send Backward_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignLeft"></a>

### commands.alignLeft()
Aligns all selected objects flush left. Equivalent to _Object > Align > Left_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignRight"></a>

### commands.alignRight()
Aligns all selected objects flush right. Equivalent to _Object > Align > Right_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignHorizontalCenter"></a>

### commands.alignHorizontalCenter()
Aligns all selected objects along their horizontal centerlines. Equivalent to _Object > Align > Center (Horizontally)_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignTop"></a>

### commands.alignTop()
Aligns all selected objects flush top. Equivalent to _Object > Align > Top_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignBottom"></a>

### commands.alignBottom()
Aligns all selected objects flush bottom. Equivalent to _Object > Align > Bottom_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignVerticalCenter"></a>

### commands.alignVerticalCenter()
Aligns all selected objects along their vertical centerlines. Equivalent to _Object > Align > Center (Vertically)_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.distributeHorizontal"></a>

### commands.distributeHorizontal()
Distributes all selected objects evenly along the X axis. Equivalent to _Object > Distribute > Horizontally_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.distributeVertical"></a>

### commands.distributeVertical()
Distributes all selected objects evenly along the Y axis. Equivalent to _Object > Distribute > Vertically_.

**Kind**: static method of [<code>commands</code>](#module_commands)  

* * *

<a name="module_commands.alignToPixelGrid"></a>

### commands.alignToPixelGrid()
Shifts all selected objects and their content so they align crisply with the pixel grid. Equivalent to _Object > Align to
Pixel Grid_.

**Kind**: static method of [<code>commands</code>](#module_commands)  
