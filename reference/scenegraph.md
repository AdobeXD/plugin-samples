<a name="module_scenegraph"></a>

## scenegraph
The scenegraph is a node tree which represents the structure of the XD document. Some scenenodes may contain children (e.g. a Group
or Artboard), while others are leaf nodes (e.g. a Rectangle or Text node).

![example of scenegraph tree](../images/scenegraphExample.png)

You can modify properties on any scenenodes within the current [_edit context_](../index.md#edit-contexts), and add leaf nodes to the current
edit context, but you cannot make structural changes directly to the scenegraph tree. Instead, use [commands](commands.md).

Typically, you access scenegraph nodes via the [`selection`](selection.md) argument that is passed to your plugin command, or by
traversing the entire document tree using the [`documentRoot`](#RootNode) argument that is passed to your plugin command.

**Example**  
```js
function myCommand(selection) {
    var node = selection.items[0];

    console.log("The selected node is a: " + node.constructor.name);

    // Print out types of all child nodes (if any)
    node.children.forEach(function (childNode, i) {
        console.log("Child " + i + " is a " + childNode.constructor.name);
    });
}
```

To create new scenenodes, load this `scenegraph` module directly and use the node constructor functions:

**Example**  
```js
var scenegraph = require("scenegraph");
function myCommand(selection) {
    var newShape = new scenegraph.Rectangle();
    newShape.width = 100;
    newShape.height = 50;
    newShape.fill = new Color("red");
    selection.insertionParent.addChild(newShape);
}
```


## Class hierarchy

* [SceneNode](#SceneNode)
    * [GraphicNode](#GraphicNode)
        * [Artboard](#Artboard)
        * [Rectangle](#Rectangle)
        * [Ellipse](#Ellipse)
        * [Line](#Line)
        * [Path](#Path)
        * [BooleanGroup](#BooleanGroup)
        * [Text](#Text)
    * [Group](#Group)
    * [SymbolInstance](#SymbolInstance)
    * [RepeatGrid](#RepeatGrid)
    * [LinkedGraphic](#LinkedGraphic)
    * [RootNode](#RootNode)

## Typedefs

<dl>
<dt><a name="Point"></a> Point : </dt><dd><code>!{x:number, y:number}</code></dd>

<dt><a name="Bounds"></a> Bounds : </dt><dd><code>!{x:number, y:number, width:number, height:number}</code></dd>

</dl>

<a name="SceneNode"></a>

## *SceneNode*
**Kind**: abstract class  

Base class of all scenegraph nodes. Nodes will always be an instance of some _subclass_ of SceneNode.

* *[SceneNode](#SceneNode)*
    * *[.guid](#SceneNode+guid) : <code>string</code>*
    * *[.parent](#SceneNode+parent) : [<code>SceneNode</code>](#SceneNode)*
    * *[.children](#SceneNode+children) : <code>!SceneNodeList</code>*
    * *[.isInArtworkTree](#SceneNode+isInArtworkTree) : <code>boolean</code>*
    * *[.isContainer](#SceneNode+isContainer) : <code>boolean</code>*
    * *[.selected](#SceneNode+selected) : <code>boolean</code>*
    * *[.visible](#SceneNode+visible) : <code>boolean</code>*
    * *[.opacity](#SceneNode+opacity) : <code>number</code>*
    * *[.transform](#SceneNode+transform) : <code>!Matrix</code>*
    * *[.translation](#SceneNode+translation) : <code>!{x:number, y:number}</code>*
    * *[.rotation](#SceneNode+rotation) : <code>number</code>*
    * *[.globalBounds](#SceneNode+globalBounds) : \![<code>Bounds</code>](#Bounds)*
    * *[.localBounds](#SceneNode+localBounds) : \![<code>Bounds</code>](#Bounds)*
    * *[.boundsInParent](#SceneNode+boundsInParent) : \![<code>Bounds</code>](#Bounds)*
    * *[.topLeftInParent](#SceneNode+topLeftInParent) : \![<code>Point</code>](#Point)*
    * *[.localCenterPoint](#SceneNode+localCenterPoint) : \![<code>Point</code>](#Point)*
    * *[.globalDrawBounds](#SceneNode+globalDrawBounds) : \![<code>Bounds</code>](#Bounds)*
    * *[.name](#SceneNode+name) : <code>string</code>*
    * *[.hasDefaultName](#SceneNode+hasDefaultName) : <code>boolean</code>*
    * *[.locked](#SceneNode+locked) : <code>boolean</code>*
    * *[.markedForExport](#SceneNode+markedForExport) : <code>boolean</code>*
    * *[.hasLinkedContent](#SceneNode+hasLinkedContent) : <code>boolean</code>*
    * *[.removeFromParent()](#SceneNode+removeFromParent)*
    * *[.moveInParentCoordinates(deltaX, deltaY)](#SceneNode+moveInParentCoordinates)*
    * *[.placeInParentCoordinates(registrationPoint, parentPoint)](#SceneNode+placeInParentCoordinates)*
    * *[.rotateAround(deltaAngle, rotationCenter)](#SceneNode+rotateAround)*
    * *[.resize(width, height)](#SceneNode+resize)*


* * *

<a name="SceneNode+guid"></a>

### *sceneNode.guid : <code>string</code>*
Returns a unique identifier for this node that stays the same when the file is closed & reopened, or if the node is moved to a different part of the document. Cut-Paste will result in a new guid, however.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+parent"></a>

### *sceneNode.parent : [<code>SceneNode</code>](#SceneNode)*
Returns the parent node. Null if this is the root node, or a freshly constructed node which has not been added to a parent yet.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+children"></a>

### *sceneNode.children : <code>\![SceneNodeList](SceneNodeList.md)</code>*
Returns a list of this node's children. List is length 0 if the node has no children. The first child is lowest in the z order.

This list is _not an Array_, so you must use `at(i)` instead of `[i]` to access children by index. It has a number of Array-like
methods such as `forEach()` for convenience, however.

The list is immutable. Use [removeFromParent](#SceneNode+removeFromParent) and [addChild](#Group+addChild) to add/remove child nodes.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**Example**  
```js
var node = ...;
console.log("Node has " + node.children.length + " children");
console.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!

node.children.forEach(function (childNode, i) {
    console.log("Child " + i + " is a " + childNode.constructor.name);
});
```

* * *

<a name="SceneNode+isInArtworkTree"></a>

### *sceneNode.isInArtworkTree : <code>boolean</code>*
True if the node's parent chain connects back to the document root node.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+isContainer"></a>

### *sceneNode.isContainer : <code>boolean</code>*
True if this node is a type that could have children (e.g. an Artboard, Group, Boolean Group, etc.).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+selected"></a>

### *sceneNode.selected : <code>boolean</code>*
True if this node is part of the current selection. To get a list of *all* selected nodes or change which nodes are selected, use [selection](selection.md).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**: [selection](selection.md)  

* * *

<a name="SceneNode+visible"></a>

### *sceneNode.visible : <code>boolean</code>*
False if this node has been hidden by the user (eyeball toggle in Layers panel). If true, the node may still be invisible for other reasons: a parent or grandparent has visible=false, the node has opacity=0%, the node is clipped by a mask, etc.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+opacity"></a>

### *sceneNode.opacity : <code>number</code>*
(0.0-1.0)Node's opacity setting. The overall visual opacity seen on canvas is determined by combining this value with the opacity of the node's entire parent chain, as well as the opacity settings of its fill/stroke properties if this is a leaf node.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+transform"></a>

### *sceneNode.transform : <code>!Matrix</code>*
Affine transform matrix that converts from the node's _local coordinate space_ to its parent's coordinate space. The matrix never has skew or scale components, and if this node is an Artboard the matrix never has rotation either. Rather than working with the raw matrix directly, it may be easier to use methods such as [placeInParentCoordinates](#SceneNode+placeInParentCoordinates) or [rotateAround](#SceneNode+rotateAround).

To resize or mirror a node, use [SceneNode.resize](#SceneNode+resize) or [commands.flipHorizontal](./commands.md#module_commands.flipHorizontal) / [commands.flipVertical](./commands.md#module_commands.flipVertical),
respectively.

Returns a fresh Matrix each time, so this can be mutated by the caller without interfering with anything. Mutating the returned Matrix does not change the node's transform - only invoking the 'transform' setter changes the node.
To modify an existing transform, always be sure to re-invoke the `transform` setter rather than just changing the Matrix object's properties inline.
See ["Properties with object values"](../index.md#object-value-properties).

For an overview of node transforms & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**See**

- [translation](#SceneNode+translation)
- [rotation](#SceneNode+rotation)
- [moveInParentCoordinates](#SceneNode+moveInParentCoordinates)
- [placeInParentCoordinates](#SceneNode+placeInParentCoordinates)
- [rotateAround](#SceneNode+rotateAround)
- [globalBounds](#SceneNode+globalBounds)
- [localBounds](#SceneNode+localBounds)
- [boundsInParent](#SceneNode+boundsInParent)
- [topLeftInParent](#SceneNode+topLeftInParent)


* * *

<a name="SceneNode+translation"></a>

### *sceneNode.translation : <code>!{x:number, y:number}</code>*
The translate component of this node's [transform](#SceneNode+transform). Since translation is applied after any rotation in
the transform Matrix, translation occurs along the parent's X/Y axes, not the node's own local X/Y axes. This is equivalent to
the `e` & `f` fields in the transform Matrix.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**See**

- [moveInParentCoordinates](#SceneNode+moveInParentCoordinates)
- [placeInParentCoordinates](#SceneNode+placeInParentCoordinates)
- [topLeftInParent](#SceneNode+topLeftInParent)


* * *

<a name="SceneNode+rotation"></a>

### *sceneNode.rotation : <code>number</code>*
The rotation component of this node's [transform](#SceneNode+transform), in clockwise degrees.

For an overview of node transforms & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**: [rotateAround](#SceneNode+rotateAround)  

* * *

<a name="SceneNode+globalBounds"></a>

### *sceneNode.globalBounds : \![<code>Bounds</code>](#Bounds)*
The node's _path bounds_ in document-global coordinate space (represented by a bounding box aligned with global X/Y axes). Path bounds match the selection outline seen in the XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [globalDrawBounds](#SceneNode+globalDrawBounds)
- [localBounds](#SceneNode+localBounds)
- [boundsInParent](#SceneNode+boundsInParent)


* * *

<a name="SceneNode+localBounds"></a>

### *sceneNode.localBounds : \![<code>Bounds</code>](#Bounds)*
The node's _path bounds_ in its own local coordinate space. This coordinate space may be rotated and translated relative to the parent's coordinate space. Path bounds match the selection outline seen in XD, but exclude some visual parts of the node (outerstroke, drop shadow / blur, etc.).

The visual top-left of a node's path bounds is located at (localBounds.x, localBounds.y). This value is _not_ necessarily (0,0) in the local coordinate space: for example, a text node's baseline is at y=0 in local coordinates, so the top of the text has a negative y value.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [globalBounds](#SceneNode+globalBounds)
- [boundsInParent](#SceneNode+boundsInParent)


* * *

<a name="SceneNode+boundsInParent"></a>

### *sceneNode.boundsInParent : \![<code>Bounds</code>](#Bounds)*
The node's _path bounds_ in its parent's coordinate space (represented by a bounding box aligned with the parent's X/Y axes - so if the node has rotation, the top-left of the node is not necessarily located at the top-left of boundsInParent). Path bounds match the selection outline seen in XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [globalBounds](#SceneNode+globalBounds)
- [localBounds](#SceneNode+localBounds)
- [topLeftInParent](#SceneNode+topLeftInParent)


* * *

<a name="SceneNode+topLeftInParent"></a>

### *sceneNode.topLeftInParent : \![<code>Point</code>](#Point)*
The position of the node's upper-left corner (localBounds.x, localBounds.y) in its parent's coordinate space. If the node is
rotated, this is not the same as the top-left corner of boundsInParent.
This is a shortcut for `node.transform.transformPoint({x: node.localBounds.x, y: node.localBounds.y})`

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [boundsInParent](#SceneNode+boundsInParent)
- [localBounds](#SceneNode+localBounds)


* * *

<a name="SceneNode+localCenterPoint"></a>

### *sceneNode.localCenterPoint : \![<code>Point</code>](#Point)*
The position of the node's centerpoint in its own local coordinate space. Useful as an argument to [rotateAround](#SceneNode+rotateAround).
This is a shortcut for `{x: localBounds.x + localBounds.width/2, y: localBounds.y + localBounds.height/2})`

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**: [localBounds](#SceneNode+localBounds)  

* * *

<a name="SceneNode+globalDrawBounds"></a>

### *sceneNode.globalDrawBounds : \![<code>Bounds</code>](#Bounds)*
The node's _draw bounds_ in document-global coordinate space. Draw bounds are larger than the selection outline seen in XD, including outer stroke, drop shadow / blur, etc. - every visible pixel of the node is encompassed by these bounds. This matches the image dimensions if the node is exported as a PNG/JPEG bitmap.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [globalBounds](#SceneNode+globalBounds)


* * *

<a name="SceneNode+name"></a>

### *sceneNode.name : <code>string</code>*
Node name as seen in the Layers panel. Also used as filename during Export.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+hasDefaultName"></a>

### *sceneNode.hasDefaultName : <code>boolean</code>*
True if [name](#SceneNode+name) is a generic, auto-generated string (e.g. "Rectangle 5"). False if name has been explicitly set.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+locked"></a>

### *sceneNode.locked : <code>boolean</code>*
True if the node is locked, meaning it cannot normally be selected.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+markedForExport"></a>

### *sceneNode.markedForExport : <code>boolean</code>*
True if the node should be included in the output of _File > Export > Batch_ and other bulk-export workflows.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+hasLinkedContent"></a>

### *sceneNode.hasLinkedContent : <code>boolean</code>*
True if the node's appearance comes from a link to an external resource, such as Creative Cloud Libraries.

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+removeFromParent"></a>

### *sceneNode.removeFromParent()*
Remove this node from its parent, effectively deleting it from the document.

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  

* * *

<a name="SceneNode+moveInParentCoordinates"></a>

### *sceneNode.moveInParentCoordinates(deltaX, deltaY)*
Move the node by the given number of pixels along the parent's X/Y axes (if this node has no rotation, this is identical to
moving the node along its own local X/Y axes). This is equivalent to modifying the value returned by 'translation' and then
setting it back.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  
**See**

- [placeInParentCoordinates](#SceneNode+placeInParentCoordinates)
- [translation](#SceneNode+translation)


| Param | Type |
| --- | --- |
| deltaX | <code>number</code> | 
| deltaY | <code>number</code> | 


* * *

<a name="SceneNode+placeInParentCoordinates"></a>

### *sceneNode.placeInParentCoordinates(registrationPoint, parentPoint)*
Move the node so the given point in its local coordinates is placed at the given point in its parent's coordinates (taking into account
any rotation on this node, etc.).

For an overview of node positioning & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  

| Param | Type | Description |
| --- | --- | --- |
| registrationPoint | \![<code>Point</code>](#Point) | Point in this node's local coordinate space to align with parentPoint |
| parentPoint | \![<code>Point</code>](#Point) | Point in this node's parent's coordinate space to move registrationPoint to |

**Example**  
```js
// Place this node's top-left corner at the centerpoint of its parent
var parentCenter = node.parent.localCenterPoint;  // parent's center in parent's coordinates
var nodeBounds = node.localBounds;  // node's bounds in its own local coordinates
var nodeTopLeft = {x: nodeBounds.x, y: nodeBounds.y};  // node's top left corner in its own local coordinates
node.placeInParentCoordinates(nodeTopLeft, parentCenter);
```

* * *

<a name="SceneNode+rotateAround"></a>

### *sceneNode.rotateAround(deltaAngle, rotationCenter)*
Rotate the node clockwise by the given number of degrees around the given point in the plugin's local coordinate space. If this node
already has nonzero rotation, this operation _adds_ to its existing angle.

For an overview of node transforms & coordinate systems, see [Coordinate spaces](../index.md#coordinate-spaces).

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  
**See**: [rotation](#SceneNode+rotation)  

| Param | Type | Description |
| --- | --- | --- |
| deltaAngle | <code>number</code> | In degrees. |
| rotationCenter | [<code>Point</code>](#Point) | Point to rotate around, in node's local coordinates. |

**Example**  
```js
// Rotate the node 45 degrees clockwise around its centerpoint
node.rotateAround(45, node.localCenterPoint);

// Ignoring the node's previous angle, set its rotation to exactly 180 degrees
var rotationDelta = 180 - node.rotation;
node.rotateAround(rotationDelta, node.localCenterPoint);
```

* * *

<a name="SceneNode+resize"></a>

### *sceneNode.resize(width, height)*
Attempts to change localBounds.width & height to match the specified sizes. This operation may not succeed,
since some nodes are not resizable.

_Note:_ Currenty this does not respect the "aspect ratio lock" setting in XD's Properties panel. This may be
changed/fixed later.

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

**Example**  
```js
// Double the width of this node
var originalBounds = node.localBounds;
node.resize(originalBounds.width * 2, originalBounds.height);
```

* * *

<a name="RootNode"></a>

## RootNode
**Kind**: class  

Class representing the root node of the document. All Artboards are children of this node, as well as any pasteboard content that
does not lie within an Artboard. Artboards must be grouped contiguously at the bottom of this node's z order. The root node has no
visual appearance of its own.

* [RootNode](#RootNode)
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)



* * *

<a name="Group"></a>

## Group
**Kind**: class  

Group nodes represent two types of simple containers in XD:
- Plain Groups, created by the _Object > Group_ command
- Masked Groups, created by the _Object > Mask With Shape_ command
You can determine whether a group is masked by checking the `mask` property.

Groups and other containers cannot be created directly using scenenode constructors, since you can't add a populated Group to the
scenegraph (you can't add subtrees all at once) nor can you add an empty Group and then add children to it (can't add nodes outside
the scope of the current _edit context_). Instead, to create Groups and other nested structures, use [commands](commands.md).

In a Mask Group, the mask shape is included in the group's `children` list, at the top of the z order. It is not visible - only its
path outline is used, for clipping the group.

**Example**  
```js
var commands = require("commands");

// Newly created shape nodes
var shape1 = ...,
    shape2 = ...;

// Add both nodes to the current edit context first
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);

// Select both shapes, then run the Group command
selection.items = [shape1, shape2];
commands.group();
var group = selection.items[0];  // selection has been set to the new Group node afterward
```

* [Group](#Group)
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)
    * [.mask](#Group+mask) : ?[<code>SceneNode</code>](#SceneNode)

* * *

<a name="Group+addChild"></a>

#### group.addChild(node, index)
Adds a child node to this container node. You can only add leaf nodes this way; to create structured subtrees of content,
use [commands](commands.md).

**Kind**: instance method of [<code>Group</code>](#Group) and other container nodes

| Param | Type | Description |
| --- | --- | --- |
| node | <code>!SceneNode</code> | Child to add |
| index | <code>?number</code> | Optional: index to insert child at. Child is appended to end of children list (top of z order) otherwise. |


* * *

<a name="Group+addChildAfter"></a>

#### group.addChildAfter(node, relativeTo)
Inserts a child node after the given reference node.

**Kind**: instance method of [<code>Group</code>](#Group) and other container nodes

| Param | Type | Description |
| --- | --- | --- |
| node | <code>!SceneNode</code> | Child to add |
| relativeTo | <code>!SceneNode</code> | New child is added immediately after this existing child |


* * *

<a name="Group+addChildBefore"></a>

#### group.addChildBefore(node, relativeTo)
Inserts a child node before the given reference node.

**Kind**: instance method of [<code>Group</code>](#Group) and other container nodes

| Param | Type | Description |
| --- | --- | --- |
| node | <code>!SceneNode</code> | Child to add |
| relativeTo | <code>!SceneNode</code> | New child is added immediately before this existing child |


* * *

<a name="Group+removeAllChildren"></a>

#### group.removeAllChildren()
Removes all children from this node. Equivalent to calling removeFromParent() on each child in turn, but faster.

**Kind**: instance method of [<code>Group</code>](#Group) and other container nodes


* * *

<a name="Group+mask"></a>

### group.mask : ?[<code>SceneNode</code>](#SceneNode)
The mask shape applied to this group, if any. This object is also present in the group's `children` list. Though it has no direct visual appearance of its own, the mask affects the entire group's appearance by clipping all its other content.

**Kind**: instance property of [<code>Group</code>](#Group)  
**Read only**: true  

**Example**
```js
var group = ...;
console.log("Type of group is: " + (group.mask ? "Masked Group" : "Plain Group"));
```

To create a Masked Group, use [commands.createMaskedGroup](commands.md#module_commands.createMaskedGroup) instead of [commands.group](commands.md#module_commands.group).

* * *

<a name="GraphicNode"></a>

## *GraphicNode*
**Kind**: abstract class  

Base class for nodes that have a stroke and/or fill. This includes leaf nodes such as Rectangle, as well as BooleanGroup
which is a container node. If you create a shape node, it will not be visible unless you explicitly give it either a stroke
or a fill.

* *[GraphicNode](#GraphicNode)*
    * *[.fill](#GraphicNode+fill) : ?<code>Color</code> \| <code>LinearGradientFill</code> \| <code>RadialGradientFill</code> \| <code>BitmapFill</code>*
    * *[.fillEnabled](#GraphicNode+fillEnabled) : <code>boolean</code>*
    * *[.stroke](#GraphicNode+stroke) : <code>?Color</code>*
    * *[.strokeEnabled](#GraphicNode+strokeEnabled) : <code>boolean</code>*
    * *[.strokeWidth](#GraphicNode+strokeWidth) : <code>number</code>*
    * *[.strokePosition](#GraphicNode+strokePosition) : <code>string</code>*
    * *[.strokeEndCaps](#GraphicNode+strokeEndCaps) : <code>string</code>*
    * *[.strokeJoins](#GraphicNode+strokeJoins) : <code>string</code>*
    * *[.strokeMiterLimit](#GraphicNode+strokeMiterLimit) : <code>number</code>*
    * *[.strokeDashArray](#GraphicNode+strokeDashArray) : <code>!Array&lt;number&gt;</code>*
    * *[.strokeDashOffset](#GraphicNode+strokeDashOffset) : <code>number</code>*
    * *[.shadow](#GraphicNode+shadow) : <code>?Shadow</code>*
    * *[.blur](#GraphicNode+blur) : <code>?Blur</code>*
    * *[.pathData](#GraphicNode+pathData) : <code>string</code>*
    * *[.hasLinkedGraphicFill](#GraphicNode+hasLinkedGraphicFill) : <code>boolean</code>*



* * *

<a name="GraphicNode+fill"></a>

### *graphicNode.fill : ?<code>Color</code> \| <code>LinearGradientFill</code> \| <code>RadialGradientFill</code> \| <code>BitmapFill</code>*
**Default**: `null`

The fill applied to this shape, if any. If this property is null _or_ `fillEnabled` is false, no fill is drawn.
Freshly created nodes have no fill by default.

For Line objects, fill is ignored. For Text objects, _only_ solid Color fill values are allowed.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Example**  
```js
ellipse.fill = new Color("red");
```

To modify an existing fill, always be sure to re-invoke the `fill` setter rather than just changing the fill object's properties inline.
See ["Properties with object values"](../index.md#object-value-properties).

**Known issue:** When modifying a _gradient fill_ object specifically, you must clone the gradient returned by the getter before modifying
it, to avoid issues with Undo history.

* * *

<a name="GraphicNode+fillEnabled"></a>

### *graphicNode.fillEnabled : <code>boolean</code>*
**Default**: `true`

If false, the `fill` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+stroke"></a>

### *graphicNode.stroke : <code>?Color</code>*
**Default**: `null`

The stroke color applied to this shape, if any. If this property is null _or_ `strokeEnabled` is false, no stroke is drawn.
Freshly created nodes have no stroke by default. Artboard objects ignore stroke settings.

Depending on the [`strokeWidth`](#GraphicNode+strokeWidth) and [`strokePosition`](#GraphicNode+strokePosition), the path outline
of a node may need to be positioned on fractional pixels in order for the stroke itself to be crisply aligned to the pixel grid.
For example, if a horizontal line uses a 1px center stroke, the line's y should end in .5 to keep the stroke on-pixel.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Example**  
```js
ellipse.stroke = new Color("red");
```

To modify an existing stroke, always be sure to re-invoke the `stroke` setter rather than just changing the Color object's properties inline.
See ["Properties with object values"](../index.md#object-value-properties).

* * *

<a name="GraphicNode+strokeEnabled"></a>

### *graphicNode.strokeEnabled : <code>boolean</code>*
**Default**: `false`

If false, the `stroke` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeWidth"></a>

### *graphicNode.strokeWidth : <code>number</code>* &gt;= 0
**Default**: `1.0`

Thickness in pixels of the stroke.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokePosition"></a>

### *graphicNode.strokePosition : <code>string</code>*
**Default**: `CENTER_STROKE` for most shapes, `INNER_STROKE` for Rectangle & Ellipse

Position of the stroke relative to the shape's path outline: GraphicNode.INNER_STROKE, OUTER_STROKE, or CENTER_STROKE.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeEndCaps"></a>

### *graphicNode.strokeEndCaps : <code>string</code>*
**Default**: `STROKE_CAP_SQUARE`

For Lines and non-closed Paths, how the dangling ends of the stroke are rendered: GraphicNode.STROKE_CAP_NONE, STROKE_CAP_SQUARE, or STROKE_CAP_ROUND.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeJoins"></a>

### *graphicNode.strokeJoins : <code>string</code>*
**Default**: `STROKE_JOIN_MITER`

How sharp corners in the shape are rendered: GraphicNode.STROKE_JOIN_BEVEL, STROKE_JOIN_ROUND, or STROKE_JOIN_MITER.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeMiterLimit"></a>

### *graphicNode.strokeMiterLimit : <code>number</code>* &gt;= 0
**Default**: `4`

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeDashArray"></a>

### *graphicNode.strokeDashArray : <code>!Array&lt;number&gt;</code>*
**Default**: `[]`

Empty array indicates a solid stroke. If non-empty, values represent the lengths of rendered and blank segments of the
stroke's dash pattern, repeated along the length of the stroke. The first value is the length of the first solid segment.
If the array is odd length, the items are copied to double the array length. For example, `[3]` produces the same effect
as `[3, 3]`.

The appearance of each segment's start/end follows the [strokeEndCaps](#GraphicNode#strokeEndCaps) setting.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeDashOffset"></a>

### *graphicNode.strokeDashOffset : <code>number</code>*
**Default**: `0`

Ignored unless `strokeDashArray` is non-empty. Shifts the "phase" of the repeating dash pattern along the length of the stroke.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+shadow"></a>

### *graphicNode.shadow : <code>?Shadow</code>*
**Default**: `null`

The node's dropshadow, if any. If there is no shadow applied, this property may be null _or_ `shadow.visible` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+blur"></a>

### *graphicNode.blur : <code>?Blur</code>*
**Default**: `null`

The node's object blur or background blur settings, if applicable. If there is no blur effect applied, this property may be null _or_ `blur.visible` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+pathData"></a>

### *graphicNode.pathData : <code>string</code>*
Returns a representation of the node's outline in SVG `<path>` syntax. Note that only nodes with [strokePosition](#GraphicNode#strokePosition) ==
`GraphicNode.CENTER_STROKE` can be faithfully rendered in actual SVG using the exact pathData shown here.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Read only**: true  

* * *

<a name="GraphicNode+hasLinkedGraphicFill"></a>

### *graphicNode.hasLinkedGraphicFill : <code>boolean</code>*
True if the node's image fill comes from a link to an external resource, such as Creative Cloud Libraries.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Read only**: true  

* * *

<a name="Rectangle"></a>

## Rectangle
**Kind**: class  

Rectangle leaf node shape, with or without rounded corners. Like all shape nodes, has no fill or stroke by default unless you set one.

**Example**
```js
var rect = new Rectangle();
rect.width = 100;
rect.height = 25;
rect.fill = new Color("red");
selection.insertionParent.addChild(rect);
selection.items = [rect];
```

* [Rectangle](#Rectangle)
    * [.width](#Rectangle+width) : <code>number</code>
    * [.height](#Rectangle+height) : <code>number</code>
    * [.cornerRadii](#Rectangle+cornerRadii) : <code>!{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}</code>
    * [.setAllCornerRadii(radius)](#Rectangle+setAllCornerRadii)
    * [.effectiveCornerRadii](#Rectangle+effectiveCornerRadii) : <code>!{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}</code>


* * *

<a name="Rectangle+width"></a>

### rectangle.width : <code>number</code> &gt; 0
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+height"></a>

### rectangle.height : <code>number</code> &gt; 0
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+cornerRadii"></a>

### rectangle.cornerRadii : <code>!{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}</code> (all numbers >= 0)
**Default**: `{topLeft:0, topRight:0, bottomRight:0, bottomLeft:0}`

To set all corners to the same value, use [<code>setAllCornerRadii</code>](#Rectangle+setAllCornerRadii).

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+hasRoundedCorners"></a>

### rectangle.hasRoundedCorners : <code>boolean</code>
True if any of the Rectangle's four corners is rounded (corner radius > 0).

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Read only**: true  

* * *

<a name="Rectangle+setAllCornerRadii"></a>

### rectangle.setAllCornerRadii(radius)
Set the rounding radius of all four corners of the Rectangle to the same value.
To set the corners to different radius values, use [<code>cornerRadii</code>](#Rectangle+cornerRadii).

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 


* * *

<a name="Rectangle+effectiveCornerRadii"></a>

### rectangle.effectiveCornerRadii : <code>!{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}</code>
The actual corner radius that is rendered may be capped by the size of the rectangle. Returns the actual radii that
are currently in effect, which may be smaller than the `cornerRadii` values as a result.

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Artboard"></a>

## Artboard
**Kind**: class  

Artboard container node. All Artboards must be children of the root node (they cannot be nested), and they must be placed below all
pasteboard content in the z order.

Artboards can have a background fill, but the stroke, shadow, and blur settings are all ignored. Artboards cannot be locked or hidden,
or have opacity < 100%.

If a node is changed to overlap an Artboard, it will automatically become a child of the artboard when the operation finishes, and
similar if a node is changed to no longer overlap an Artboard. It is not possible to have a node overlapping an Artboard that does
not become a child of the artboard, or vice versa, a node that falls entirely outside an Artboard's bounds but remains its child.

* [Artboard](#Artboard)
    * [.width](#Artboard+width) : <code>number</code>
    * [.height](#Artboard+height) : <code>number</code>
    * [.viewportHeight](#Artboard+viewportHeight) : <code>?number</code>
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)


* * *

<a name="Artboard+width"></a>

### artboard.width : <code>number</code> &gt; 0
**Kind**: instance property of [<code>Artboard</code>](#Artboard)  

* * *

<a name="Artboard+height"></a>

### artboard.height : <code>number</code> &gt; 0
For scrollable Artboards, this is the total height encompassing all content - not just the viewport size (i.e. screen height).

**Kind**: instance property of [<code>Artboard</code>](#Artboard)  
**See**: [viewportHeight](#Artboard+viewportHeight)  

* * *

<a name="Artboard+viewportHeight"></a>

### artboard.viewportHeight : <code>?number</code>
If Artboard is scrollable, this is the height of the viewport (e.g. mobile device screen size). Null if Artboard isn't scrollable.

**Kind**: instance property of [<code>Artboard</code>](#Artboard)  
**See**: [height](#Artboard+height)  

* * *

<a name="Ellipse"></a>

## Ellipse
**Kind**: class  

Ellipse leaf node shape.

* [Ellipse](#Ellipse)
    * [.radiusX](#Ellipse+radiusX) : <code>number</code>
    * [.radiusY](#Ellipse+radiusY) : <code>number</code>
    * [.isCircle](#Ellipse+isCircle) : <code>boolean</code>


* * *

<a name="Ellipse+radiusX"></a>

### ellipse.radiusX : <code>number</code>
**Kind**: instance property of [<code>Ellipse</code>](#Ellipse)  

* * *

<a name="Ellipse+radiusY"></a>

### ellipse.radiusY : <code>number</code>
**Kind**: instance property of [<code>Ellipse</code>](#Ellipse)  

* * *

<a name="Ellipse+isCircle"></a>

### ellipse.isCircle : <code>boolean</code>
True if the Ellipse is a circle (i.e., has a 1:1 aspect ratio).

**Kind**: instance property of [<code>Ellipse</code>](#Ellipse)  
**Read only**: true  

* * *

<a name="Line"></a>

## Line
**Kind**: class  

Line leaf node shape.

* [Line](#Line)
    * [.start](#Line+start) : \![<code>Point</code>](#Point)
    * [.end](#Line+end) : \![<code>Point</code>](#Point)
    * [.setStartEnd(startX, startY, endX, endY)](#Line+setStartEnd)


* * *

<a name="Line+start"></a>

### line.start : \![<code>Point</code>](#Point)
Start point of the Line in local coordinate space.TEMP: To change the start point, use [setStartEnd](#Line+setStartEnd).

**Kind**: instance property of [<code>Line</code>](#Line)  
**Read only**: true  

* * *

<a name="Line+end"></a>

### line.end : \![<code>Point</code>](#Point)
Endpoint of the Line in local coordinate space.TEMP: To change the endpoint, use [setStartEnd](#Line+setStartEnd).

**Kind**: instance property of [<code>Line</code>](#Line)  
**Read only**: true  

* * *

<a name="Line+setStartEnd"></a>

### line.setStartEnd(startX, startY, endX, endY)
Set the start and end points of the Line in local coordinate space. The values may be normalized by this setter, shifting the node's
translation and counter-shifting the start/end points. So the start/end setters may return values different from the values you
passed this setter, even though the line's visual bounds and appearance are the same.

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type |
| --- | --- |
| startX | <code>number</code> | 
| startY | <code>number</code> | 
| endX | <code>number</code> | 
| endY | <code>number</code> | 


* * *

<a name="Path"></a>

## Path
**Kind**: class  

Arbitrary vector Path leaf node shape.

The path may not start at (0,0) in local coordinates, for example if it starts with a move ("M") segment.

* [Path](#Path)
    * [.pathData](#Path+pathData) : <code>string</code>


* * *

<a name="Path+pathData"></a>

### path.pathData : <code>string</code>
Representation of the path outline in SVG `<path>` syntax. Unlike other node types, pathData is writable here. Syntax is
automatically normalized, so the getter may return a slightly different string than what you passed to the setter.

**Kind**: instance property of [<code>Path</code>](#Path)  

* * *

<a name="BooleanGroup"></a>

## BooleanGroup
**Kind**: class  

BooleanGroup container node - although it has fill/stroke/etc. properties like a leaf shape node, it is a container
with children. Its visual appearance is determined by generating a path via a nondestructive boolean operation on all
its children's paths.

It is not currently possible for plugins to *create* a new BooleanGroup node, aside from using [commands.duplicate](commands.md#module_commands.duplicate)
to clone existing BooleanGroups.

* [BooleanGroup](#BooleanGroup)
    * [.pathOp](#BooleanGroup+pathOp) : <code>string</code>
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)


* * *

<a name="BooleanGroup+pathOp"></a>

### booleanGroup.pathOp : <code>string</code>
Which boolean operation is used to generate the path: BooleanGroup.PATH_OP_ADD, PATH_OP_SUBTRACT, PATH_OP_INTERSECT, or PATH_OP_EXCLUDE_OVERLAP.

**Kind**: instance property of [<code>BooleanGroup</code>](#BooleanGroup)  
**Read only**: true  

* * *

<a name="Text"></a>

## Text
**Kind**: class  

Text leaf node shape. Text can have a fill and/or stroke, but only a solid-color fill is allowed (gradient or image
will will be rejected).

There are two types of Text nodes:
- Point Text - Expands to fit the full width of the text content. Only uses multiple lines if the text content contains hard line
  breaks ("\n").
- Area Text - Fixed width and height. Text is automatically wrapped (soft line wrapping) to fit the width. If it does not fit the
  height, any remaining text is clipped.
Check whether [<code>areaBox</code>](#Text+areaBox) is null to determine the type of a Text node.

The baseline of a Point Text node is at y=0 in its own local coordinate system. Horizontally, local x=0 is the _anchor point_ that the
text grows from / shrinks toward when edited. This anchor depends on the justification: for example, if the text is centered, x=0 is
the horizontal centerpoint of the text.

The bounds reported for a Text object leave enough space for descenders, uppercase letters, and accent marks, even if the current
string does not contain any of those characters. This makes aligning text based on its bounds behave more consistently.

* [Text](#Text)
    * [.text](#Text+text) : <code>string</code>
    * [.styleRanges](#Text+styleRanges) : <code>!Array&lt;!{length:number, fontFamily:string, fontStyle:string, fontSize:number, fill:!Color, charSpacing:number, underline:boolean}&gt;</code>
    * [.flipY](#Text+flipY) : <code>boolean</code>
    * [.textAlign](#Text+textAlign) : <code>string</code>
    * [.lineSpacing](#Text+lineSpacing) : <code>number</code>
    * [.areaBox](#Text+areaBox) : <code>?{width:number, height:number}</code>
    * [.clippedByArea](#Text+clippedByArea) : <code>boolean</code>


* * *

<a name="Text+text"></a>

### text.text : <code>string</code>
**Default**: `" "` (a single space character)

The plaintext content of the node, including any hard line breaks but excluding soft line wrap breaks.

Setting text does not change styleRanges, so styles aligned with the old text's string indices will continue to be applied to
the new string's indices unless you explicitly change styleRanges as well.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+styleRanges"></a>

### text.styleRanges : <code>!Array&lt;!{length:number, fontFamily:string, fontStyle:string, fontSize:number, fill:!Color, charSpacing:number, underline:boolean}&gt;</code>
Array of text ranges and their character style settings. Each range covers a set number of characters in the text content. Ranges
are contiguous, with each one starting immediately after the previous one. Any characters past the end of the last range use the
same style as the last range.

When _setting_ styleRanges, any fields missing from a given range default to the existing values from the *last* range in the old
value of styleRanges. The styleRanges _getter_ always returns fully realized range objects with all fields specified.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+flipY"></a>

### text.flipY : <code>boolean</code>
If true, the text is drawn upside down.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+textAlign"></a>

### text.textAlign : <code>string</code>
Horizontal alignment: Text.ALIGN_LEFT, ALIGN_CENTER, or ALIGN_RIGHT. This setting affects the layout of multiline text, and it also affects what direction text grows when edited on canvas.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+lineSpacing"></a>

### text.lineSpacing : <code>number</code> &gt; 0, or 0 for default spacing
Distance between baselines in multiline text, in document pixels. The special value 0 causes XD to use the default line spacing
defined by the font given the current font size & style.

This property is not automatically adjusted when fontSize changes, if line spacing is not set to 0, the line spacing will stay
fixed while the font size changes, shifting the spacing's proportional relationship to font size. If the value is 0, then the
rendered line spacing will change to match the new font size, since 0 means the spacing is dynamically calculated from the current
font settings.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+areaBox"></a>

### text.areaBox : <code>?{width:number, height:number}</code>
Null for point text. For area text, specifies the size of the rectangle within which text is wrapped and clipped.

**Kind**: instance property of [<code>Text</code>](#Text)  
**Read only**: true  

* * *

<a name="Text+clippedByArea"></a>

### text.clippedByArea : <code>boolean</code>
Always false for point text. For area text, true if the text does not fit in the content box and its bottom is being clipped.

**Kind**: instance property of [<code>Text</code>](#Text)  
**Read only**: true  

* * *

<a name="SymbolInstance"></a>

## SymbolInstance
**Kind**: class  

Container node representing one instance of a Symbol. Changes within a symbol instance are automatically synced to all other
instances of the symbol, with certain exceptions (called "overrides").

It is not currently possible for plugins to *create* a new Symbol definition or a new SymbolInstance node, aside from using
[commands.duplicate](commands.md#module_commands.duplicate) to clone existing SymbolInstances.

* [SymbolInstance](#SymbolInstance)
    * [.symbolId](#SymbolInstance+symbolId) : <code>string</code>
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)


* * *

<a name="SymbolInstance+symbolId"></a>

### symbolInstance.symbolId : <code>string</code>
An identifier unique within this document that is shared by all instances of the same Symbol.

**Kind**: instance property of [<code>SymbolInstance</code>](#SymbolInstance)  
**Read only**: true  

* * *

<a name="RepeatGrid"></a>

## RepeatGrid
**Kind**: class  

Repeat Grid container node containing multiple grid cells, each one a child Group. Changes within one cell are automatically synced
to all the other cells, with certain exceptions (called "overrides"). A Repeat Grid also defines a rectangular clipping mask which
determines how may cells are visible (new cells are automatically generated as needed if the Repeat Grid is resized larger).

It is not currently possible for plugins to *create* a new RepeatGrid node, aside from using [commands.duplicate](commands.md#module_commands.duplicate)
to clone existing RepeatGrids.

* [RepeatGrid](#RepeatGrid)
    * [.width](#RepeatGrid+width) : <code>number</code>
    * [.height](#RepeatGrid+height) : <code>number</code>
    * [.numColumns](#RepeatGrid+numColumns) : <code>number</code>
    * [.numRows](#RepeatGrid+numRows) : <code>number</code>
    * [.paddingX](#RepeatGrid+paddingX) : <code>number</code>
    * [.paddingY](#RepeatGrid+paddingY) : <code>number</code>
    * [.cellSize](#RepeatGrid+cellSize) : <code>!{width: number, height: number}</code>
    * [.addChild(node, index)](#Group+addChild)
    * [.addChildAfter(node, relativeTo)](#Group+addChildAfter)
    * [.addChildBefore(node, relativeTo)](#Group+addChildBefore)
    * [.removeAllChildren()](#Group+removeAllChildren)


* * *

<a name="RepeatGrid+width"></a>

### repeatGrid.width : <code>number</code>
Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped.

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+height"></a>

### repeatGrid.height : <code>number</code>
Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped.

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+numColumns"></a>

### repeatGrid.numColumns : <code>number</code>
Number of grid columns

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+numRows"></a>

### repeatGrid.numRows : <code>number</code>
Number of grid rows

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+paddingX"></a>

### repeatGrid.paddingX : <code>number</code>
Horizontal spacing between grid cells/columns

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+paddingY"></a>

### repeatGrid.paddingY : <code>number</code>
Vertical spacing between grid cells/rows

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+cellSize"></a>

### repeatGrid.cellSize : <code>!{width: number, height: number}</code>
The size of each grid cell. The size of each cell's content can vary slightly due to text overrides; the cell size is always set to the width of the widest cell content and the height of the tallest cell content.

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="LinkedGraphic"></a>

## LinkedGraphic
**Kind**: class  

Container node whose content is linked to an external resource, such as Creative Cloud Libraries. It cannot be edited except by first
ungrouping it, breaking this link.

