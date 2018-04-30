<a name="module_scenegraph"></a>

## scenegraph
The scenegraph is a node tree which represents the structure of the XD document. Some scenenodes may contain children (e.g. a Group
or Artboard), while others are leaf nodes (e.g. a Rectangle or Text node).

You can modify properties on any scenenodes within the current _edit context_, and add leaf nodes to the current edit context, but
you cannot make structural changes directly to the scenegraph tree. Instead, use [commands](commands.md).

Typically, you access scenegraph nodes via the [`selection`](selection.md) argument that is passed to your plugin command, or by
traversing the entire document tree using the [`root`](#RootNode) argument that is passed to your plugin command.

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

## Classes

<dl>
<dt><a href="#SceneNode">SceneNode</a></dt>
<dd></dd>
<dt><a href="#RootNode">RootNode</a></dt>
<dd></dd>
<dt><a href="#Group">Group</a></dt>
<dd></dd>
<dt><a href="#GraphicNode">GraphicNode</a></dt>
<dd></dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd></dd>
<dt><a href="#Artboard">Artboard</a></dt>
<dd></dd>
<dt><a href="#Ellipse">Ellipse</a></dt>
<dd></dd>
<dt><a href="#Line">Line</a></dt>
<dd></dd>
<dt><a href="#Path">Path</a></dt>
<dd></dd>
<dt><a href="#BooleanGroup">BooleanGroup</a></dt>
<dd></dd>
<dt><a href="#Text">Text</a></dt>
<dd></dd>
<dt><a href="#SymbolInstance">SymbolInstance</a></dt>
<dd></dd>
<dt><a href="#RepeatGrid">RepeatGrid</a></dt>
<dd></dd>
<dt><a href="#LinkedGraphic">LinkedGraphic</a></dt>
<dd></dd>
</dl>

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
    * *[.hasCustomName](#SceneNode+hasCustomName) : <code>boolean</code>*
    * *[.locked](#SceneNode+locked) : <code>boolean</code>*
    * *[.markedForExport](#SceneNode+markedForExport) : <code>boolean</code>*
    * *[.hasLinkedContent](#SceneNode+hasLinkedContent) : <code>boolean</code>*
    * *[.removeFromParent()](#SceneNode+removeFromParent)*
    * *[.moveInParentCoordinates(deltaX, deltaY)](#SceneNode+moveInParentCoordinates)*
    * *[.placeInParentCoordinates(localPoint, parentPoint)](#SceneNode+placeInParentCoordinates)*
    * *[.rotateAround(deltaAngle, localPoint)](#SceneNode+rotateAround)*
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
True if this node is a type that is capable of having children (e.g. an Artboard, Group, Boolean Group, etc.).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  

* * *

<a name="SceneNode+selected"></a>

### *sceneNode.selected : <code>boolean</code>*
True if this node is part of the current selection. To change which nodes are selected, use [selection](selection.md).

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

Returns a fresh Matrix each time, so this can be mutated by the caller without interfering with anything. Mutating the returned Matrix does not change the node's transform - only invoking the 'transform' setter changes the node.
To modify an existing transform, always be sure to re-invoke ths `transform` setter rather than just changing the Matrix object's properties inline.
See ["Properties with object values"](README.md#Properties-with-object-values).

For an overview of node transforms & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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
the transform Matrix, translation occurs along the parent's X/Y axes, not the node's own local X/Y axes.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**See**

- [moveInParentCoordinates](#SceneNode+moveInParentCoordinates)
- [placeInParentCoordinates](#SceneNode+placeInParentCoordinates)
- [topLeftInParent](#SceneNode+topLeftInParent)


* * *

<a name="SceneNode+rotation"></a>

### *sceneNode.rotation : <code>number</code>*
The rotation component of this node's [transform](#SceneNode+transform), in clockwise degrees.

For an overview of node transforms & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**: [rotateAround](#SceneNode+rotateAround)  

* * *

<a name="SceneNode+globalBounds"></a>

### *sceneNode.globalBounds : \![<code>Bounds</code>](#Bounds)*
The node's _path bounds_ in document-global coordinate space (represented by a bounding box aligned with global X/Y axes). Path bounds match the selection outline seen in the XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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

The visual top-left of a node's path bounds is located at (localBounds.x, localBounds.y). This value is _not_ necessarily (0,0) in the local coordinate space: for example, a text node's baseline is at Y=0 in local coordinates, so the top of the text has a negative Y value.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**

- [globalBounds](#SceneNode+globalBounds)
- [boundsInParent](#SceneNode+boundsInParent)


* * *

<a name="SceneNode+boundsInParent"></a>

### *sceneNode.boundsInParent : \![<code>Bounds</code>](#Bounds)*
The node's _path bounds_ in its parent's coordinate space (represented by a bounding box aligned with the parent's X/Y axes - so if the node has rotation, the top-left of the node is not necessarily located at the top-left of boundsInParent). Path bounds match the selection outline seen in XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance property of [<code>SceneNode</code>](#SceneNode)  
**Read only**: true  
**See**: [localBounds](#SceneNode+localBounds)  

* * *

<a name="SceneNode+globalDrawBounds"></a>

### *sceneNode.globalDrawBounds : \![<code>Bounds</code>](#Bounds)*
The node's _draw bounds_ in document-global coordinate space. Draw bounds are larger than the selection outline seen in XD, including outer stroke, drop shadow / blur, etc. - every visible pixel of the node is encompassed by these bounds. This matches the image dimensions if the node is exported as a PNG/JPEG bitmap.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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

<a name="SceneNode+hasCustomName"></a>

### *sceneNode.hasCustomName : <code>boolean</code>*
True if [name](#SceneNode+name) has been explicitly set to a specific value. False if node has a generic, auto-generated name (e.g. "Rectangle 5").

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

For an overview of node positioning & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

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

### *sceneNode.placeInParentCoordinates(localPoint, parentPoint)*
Move the node so the given point in its local coordinates is placed at the given point in its parent's coordinates (taking into account
any rotation on this node, etc.).

For an overview of node positioning & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  

| Param | Type | Description |
| --- | --- | --- |
| localPoint | \![<code>Point</code>](#Point) | Point in this node's local coordinate space to align with parentPoint |
| parentPoint | \![<code>Point</code>](#Point) | Point in this node's parent's coordinate space to move localPoint to |

**Example**  
```js
// Place this node's top-left corner at the centerpoint of its parent
var parentCenter = node.parent.localCenterPoint;  // parent's center in parent's coordinates
var nodeBounds = node.localBounds;  // node's bounds in its own local coordinates
var nodeTopLeft = {x: nodeBounds.x, nodeBounds. y};  // node's top left corner in its own local coordinates
node.placeInParentCoordinates(nodeTopLeft, parentCenter);
```

* * *

<a name="SceneNode+rotateAround"></a>

### *sceneNode.rotateAround(deltaAngle, localPoint)*
Rotate the node clockwise by the given number of degrees around the given point in the plugin's local coordinate space. If this node
already has nonzero rotation, this operation _adds_ to its existing angle.

For an overview of node transforms & coordinate systems, see [Coordinate spaces](README#Coordinate-spaces).

**Kind**: instance method of [<code>SceneNode</code>](#SceneNode)  
**See**: [rotation](#SceneNode+rotation)  

| Param | Type | Description |
| --- | --- | --- |
| deltaAngle | <code>number</code> | In degrees. |
| localPoint | [<code>Point</code>](#Point) |  |

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
since some nodes are not resizable. Resizing one dimension may affect the other, if the node's aspect ratio
is locked.

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
- Plain groups, created by the _Object > Group_ command
- Masked groups, created by the _Object > Mask With Shape_ command
You can determine whether a group is masked by checking the `mask` property.

Groups and other containers cannot be created directly using scenenode constructors, since you can't add a populated Group to the
scenegraph (you can't add subtrees all at once) nor can you add an empty Group and then add children to it (can't add nodes outside
the scope of the current _edit context_). Instead, to create Groups and other nested structures, use [commands](commands.md).

**Example**  
```js
var commands = require("commands");

var shape1 = ...,
    shape2 = ...;

// Add both nodes to the current edit context first
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);

// Select both shapes, then run the Group command
selection.items = [shape1, shape2];
commands.group();
var group = selection.items[0];  // the new Group node is what's selected afterward
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
The mask shape applied to this group, if any. This object is also present in the group's `children` list. Though it has no direct visual appearance of its own, the mask affects the entire groups's appearance by clipping all its other content.

**Kind**: instance property of [<code>Group</code>](#Group)  
**Read only**: true  

* * *

<a name="GraphicNode"></a>

## *GraphicNode*
**Kind**: abstract class  
**Extends**: [<code>SceneNode</code>](#SceneNode)

Base class for nodes that have a stroke and/or fill. This includes leaf nodes such as Rectangle, as well as BooleanGroup
which is a container node.

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
    * *[.strokeDashArray](#GraphicNode+strokeDashArray) : <code>!Array</code>*
    * *[.strokeDashOffset](#GraphicNode+strokeDashOffset) : <code>number</code>*
    * *[.shadow](#GraphicNode+shadow) : <code>?Shadow</code>*
    * *[.blur](#GraphicNode+blur) : <code>?Blur</code>*
    * *[.pathData](#GraphicNode+pathData) : <code>string</code>*
    * *[.hasLinkedGraphicFill](#GraphicNode+hasLinkedGraphicFill) : <code>boolean</code>*



* * *

<a name="GraphicNode+fill"></a>

### *graphicNode.fill : ?<code>Color</code> \| <code>LinearGradientFill</code> \| <code>RadialGradientFill</code> \| <code>BitmapFill</code>*
The fill applied to this shape, if any. If there is no fill applied, this property may be null _or_ `fillEnabled` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Example**  
```js
ellipse.fill = new Color("red");
```

To modify an existing fill, always be sure to re-invoke ths `fill` setter rather than just changing the fill object's properties inline.
See ["Properties with object values"](README.md#Properties-with-object-values).

**Known issue:** When modifying a _gradient fill_ object specifically, you must clone the gradient returned by the getter before modifying
it, to avoid issues with Undo history.

* * *

<a name="GraphicNode+fillEnabled"></a>

### *graphicNode.fillEnabled : <code>boolean</code>*
If false, the `fill` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+stroke"></a>

### *graphicNode.stroke : <code>?Color</code>*
The stroke color applied to this shape, if any. If there is no stroke applied, this property may be null _or_ `strokeEnabled` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  
**Example**  
```js
ellipse.stroke = new Color("red");
```

To modify an existing stroke, always be sure to re-invoke ths `stroke` setter rather than just changing the Color object's properties inline.
See ["Properties with object values"](README.md#Properties-with-object-values).

* * *

<a name="GraphicNode+strokeEnabled"></a>

### *graphicNode.strokeEnabled : <code>boolean</code>*
If false, the `stroke` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeWidth"></a>

### *graphicNode.strokeWidth : <code>number</code>*
Thickness in pixels of the stroke.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokePosition"></a>

### *graphicNode.strokePosition : <code>string</code>*
Position of the stroke relative to the shape's path outline: GraphicNode.INNER_STROKE, OUTER_STROKE, or CENTER_STROKE.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeEndCaps"></a>

### *graphicNode.strokeEndCaps : <code>string</code>*
For Lines and non-closed Paths, how the dangling ends of the stroke are rendered: GraphicNode.STROKE_CAP_NONE, STROKE_CAP_SQUARE, or STROKE_CAP_ROUND.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeJoins"></a>

### *graphicNode.strokeJoins : <code>string</code>*
How sharp corners in the shape are rendered: GraphicNode.STROKE_JOIN_BEVEL, STROKE_JOIN_ROUND, or STROKE_JOIN_MITER.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeMiterLimit"></a>

### *graphicNode.strokeMiterLimit : <code>number</code>*
**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeDashArray"></a>

### *graphicNode.strokeDashArray : <code>!Array</code>*
Empty array indicates a solid stroke. If non-empty, values represent the lengths of rendered and blank segments of the stroke's dash pattern.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+strokeDashOffset"></a>

### *graphicNode.strokeDashOffset : <code>number</code>*
Ignored unless `strokeDashArray` is non-empty.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+shadow"></a>

### *graphicNode.shadow : <code>?Shadow</code>*
The node's dropshadow, if any. If there is no shadow applied, this property may be null _or_ `shadow.visible` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+blur"></a>

### *graphicNode.blur : <code>?Blur</code>*
The node's object blur or background blur settings, if applicable. If there is no blur effect applied, this property may be null _or_ `blur.visible` may be false.

**Kind**: instance property of [<code>GraphicNode</code>](#GraphicNode)  

* * *

<a name="GraphicNode+pathData"></a>

### *graphicNode.pathData : <code>string</code>*
Returns a representation of the node's outline in SVG `<path>` syntax.

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

Rectangle leaf node shape.

* [Rectangle](#Rectangle)
    * [.width](#Rectangle+width) : <code>number</code>
    * [.height](#Rectangle+height) : <code>number</code>
    * [.topLeftCornerRadius](#Rectangle+topLeftCornerRadius) : <code>number</code>
    * [.topRightCornerRadius](#Rectangle+topRightCornerRadius) : <code>number</code>
    * [.bottomRightCornerRadius](#Rectangle+bottomRightCornerRadius) : <code>number</code>
    * [.bottomLeftCornerRadius](#Rectangle+bottomLeftCornerRadius) : <code>number</code>
    * [.hasRoundedCorners](#Rectangle+hasRoundedCorners) : <code>boolean</code>
    * [.setAllCornerRadii(radius)](#Rectangle+setAllCornerRadii)
    * [.getEffectiveCornerRadii()](#Rectangle+getEffectiveCornerRadii) ⇒ <code>!Array</code>


* * *

<a name="Rectangle+width"></a>

### rectangle.width : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+height"></a>

### rectangle.height : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+topLeftCornerRadius"></a>

### rectangle.topLeftCornerRadius : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+topRightCornerRadius"></a>

### rectangle.topRightCornerRadius : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+bottomRightCornerRadius"></a>

### rectangle.bottomRightCornerRadius : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+bottomLeftCornerRadius"></a>

### rectangle.bottomLeftCornerRadius : <code>number</code>
**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

* * *

<a name="Rectangle+hasRoundedCorners"></a>

### rectangle.hasRoundedCorners : <code>boolean</code>
True if any of the Rectangle's four corners is rounded off (corner radius > 0).

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Read only**: true  

* * *

<a name="Rectangle+setAllCornerRadii"></a>

### rectangle.setAllCornerRadii(radius)
Set the rounding radius of all four corners of the Rectangle to the same value.

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 


* * *

<a name="Rectangle+getEffectiveCornerRadii"></a>

### rectangle.getEffectiveCornerRadii() ⇒ <code>!Array</code>
The actual corner radius that is rendered may be capped by the size of the rectangle. Returns the actual radius that
is currently in effect, which may be smaller than the `*CornerRadius` values as a result.

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>Array</code> - Radius values in CSS clockwise order: [top left, top right, bottom right, bottom left]  

* * *

<a name="Artboard"></a>

## Artboard
**Kind**: class  

Artboard container node. All Artboards must be children of the root node (they cannot be nested), and they must be placed below all
pasteboard content in the z order.

Artboards can have a background fill, but the stroke, shadow, and blur settings are all ignored.

If a node is changed to overlap an Artboard, it will automatically become a child of the artboard when the operation finishes, and
similar if a node is changed to no longer overlap an Artboard.

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

### artboard.width : <code>number</code>
**Kind**: instance property of [<code>Artboard</code>](#Artboard)  

* * *

<a name="Artboard+height"></a>

### artboard.height : <code>number</code>
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
Representation of the path outline in SVG `<path>` syntax. Unlike other node types, pathData is writable here.

**Kind**: instance property of [<code>Path</code>](#Path)  

* * *

<a name="BooleanGroup"></a>

## BooleanGroup
**Kind**: class  

BooleanGroup container node - although it has fill/stroke/etc. properties like a leaf shape node, it is a container
with children. Its visual appearance is determined by a nondestructive boolean operation on its children's paths.

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

Text leaf node shape.

There are two types of Text nodes:
- Point Text - Expands to fit the full width of the text content. Only uses multiple lines if the text content contains hard line
  breaks ("\n").
- Area Text - Fixed width and height. Text is automatically wrapped (soft line wrapping) to fit the width. If it does not fit the
  height, any remaining text is clipped.
Check whether [<code>areaBox</code>](#Text+areaBox) is null to determine the type of a Text node.

The baseline of a Point Text node is at Y=0 in its own local coordinate system. Horizontally, local X=0 is the _anchor point_ that the
text grows from / shrinks toward when edited. This anchor depends on the justification: for example, if the text is centered, X=0 is
the horizontal centerpoint of the text.

* [Text](#Text)
    * [.text](#Text+text) : <code>string</code>
    * [.styleRanges](#Text+styleRanges) : <code>!Array</code>
    * [.flipY](#Text+flipY) : <code>boolean</code>
    * [.textAlign](#Text+textAlign) : <code>string</code>
    * [.lineSpacing](#Text+lineSpacing) : <code>number</code>
    * [.areaBox](#Text+areaBox) : <code>?{width:number, height:number}</code>
    * [.clippedByArea](#Text+clippedByArea) : <code>boolean</code>


* * *

<a name="Text+text"></a>

### text.text : <code>string</code>
The plaintext content of the node, including any hard line breaks but excluding soft line wrap breaks.

**Kind**: instance property of [<code>Text</code>](#Text)  

* * *

<a name="Text+styleRanges"></a>

### text.styleRanges : <code>!Array</code>
Array of text ranges and their character style settings.(TODO: document this better)

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

### text.lineSpacing : <code>number</code>
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
to all the other cells, with certain exceptioned (called "overrides"). A Repeat Grid also defines a rectangular clipping mask which
determines how may cells are visible (new cells are automatically generated as needed if the Repeat Grid is resized larger).

* [RepeatGrid](#RepeatGrid)
    * [.width](#RepeatGrid+width) : <code>number</code>
    * [.height](#RepeatGrid+height) : <code>number</code>
    * [.columns](#RepeatGrid+columns) : <code>number</code>
    * [.rows](#RepeatGrid+rows) : <code>number</code>
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

<a name="RepeatGrid+columns"></a>

### repeatGrid.columns : <code>number</code>
Number of grid columns

**Kind**: instance property of [<code>RepeatGrid</code>](#RepeatGrid)  

* * *

<a name="RepeatGrid+rows"></a>

### repeatGrid.rows : <code>number</code>
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

