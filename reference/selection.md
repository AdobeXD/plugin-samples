<a name="selection"></a>

## selection
The `selection` object represents the currently selected set of nodes in the UI. You can change the selection to use it as input
for [commands](commands.md), or to control what is left selected for the user when your plugin's edit operation completes.

**Selected items might not all have the same parent node.** For example, the selection could be split between two sibling
Group nodes, or half the selection could be inside a Group and half inside its parent. Or the selection could be split between
multiple different artboards along with items on the pasteboard (immediate children of the root node).

Your plugin can only modify nodes in the "neighborhood" of the user's selection, a subset of the scenegraph tree called the
**_[edit context](/reference/core/edit-context.md)_**. You can only set the selection to other nodes within the edit context.
The edit context does not update to reflect any changes to the selection until after a plugin operation completes.

**Other restrictions on selection**

* The selection cannot contain both artboards and non-artboards at the same time.

* The selection cannot contain both a node and one of its ancestors at the same time.

* Items that are _locked_ cannot be in the selection. If the user or your plugin attempts to select any locked items, they are
  automatically filtered into a separate list ([itemsIncludingLocked](#selection-itemsIncludingLocked)) which is generally only used by the Unlock
  command.

**Accessing the selection**

The current selection state is passed to your _command handler function_ as an argument:
```js
function myCommand(selection, documentRoot) {
    console.log(selection.items.length + " items are selected");
}
module.exports = {
    commands: {
        myCommandId: myCommand
    }
};
```

You can also access this object from the [`scenegraph.selection`](./scenegraph.md#module_scenegraph-selection) property.

**Kind**: object  

* [selection](#selection)
    * [.items](#selection-items) : <code>!Array&lt;!SceneNode&gt;</code>
    * [.itemsIncludingLocked](#selection-itemsIncludingLocked) : <code>!Array&lt;!SceneNode&gt;</code>
    * [.hasArtwork](#selection-hasArtwork) : <code>boolean</code>
    * [.hasArtboards](#selection-hasArtboards) : <code>boolean</code>
    * [.insertionParent](#selection-insertionParent) : <code>!SceneNode</code>
    * [.focusedArtboard](#selection-focusedArtboard) : <code>?Artboard</code>
    * [.editContext](#selection-editContext) : <code>!SceneNode</code>
    * [.isInEditContext(node)](#selection-isInEditContext) ⇒ `boolean`


* * *

<a name="selection-items"></a>

### selection.items : <code>!Array&lt;\![SceneNode](scenegraph.md#SceneNode)&gt;</code>
Array representing the current selection. Empty array if nothing is selected (never null). _Items might not all have the same
parent node._ Never includes locked nodes. Never mixes artboards with other nodes: a selection is either all artboards or all
non-artboards. Never includes any ancestors of any other item in the selection.

As a convenience, the setter also accepts a single node or null as valid input. However, the getter always returns an array.

If the user selects nodes one-by-one, by Shift-clicking, this array lists the nodes in the order they were added to the selection.
If the user selected by other means, e.g. dragging a marquee, the order has no meaning.

Returns a fresh array each time, so modifying the array returned by the getter does not change the selection -- only invoking
the 'items' setter changes selection.

The selection can only contain items which are in the current _[edit context](/reference/core/edit-context.md)._

**Kind**: instance property of [<code>selection</code>](#selection)  
**Example**  
```js
console.log("There are " + selection.items.length + " nodes currently selected");
selection.items = [rectangle, ellipse, path];  // select 3 nodes
selection.items = rectangle;  // select 1 node (convenience)
selection.items = null;       // deselect all (convenience)
```

* * *

<a name="selection-itemsIncludingLocked"></a>

### selection.itemsIncludingLocked : <code>!Array&lt;\![SceneNode](scenegraph.md#SceneNode)&gt;</code>
Array representing the current selection *plus* any locked items that the user has attempted to select.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  
**Example**  
```js
let numUnlockedSelected = selection.items.length;
let numLockedSelected = selection.itemsIncludingLocked.length - numUnlockedSelected;
console.log("There are " + numLockedSelected + " locked nodes 'sort of' currently selected");
```

* * *

<a name="selection-hasArtwork"></a>

### selection.hasArtwork : <code>boolean</code>
True if the selection isn’t empty and consists of one or more non-Artboards. Never true at the same time as [hasArtboards](#selection-hasArtboards).

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection-hasArtboards"></a>

### selection.hasArtboards : <code>boolean</code>
True if the selection isn’t empty and consists of one or more Artboards. Never true at the same time as [hasArtwork](#selection-hasArtwork).

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection-insertionParent"></a>

### selection.insertionParent : <code>\![SceneNode](scenegraph.md#SceneNode)</code>
The preferred parent to insert newly added content into. Takes into account the current edit context as well as the "focused artboard" if in the root context.
Typically this is the same parent where, for example, XD's shape drawing tools would add items.

_Selected items are not necessarily all immediate children of the `insertionParent`._ They can be anywhere within the [edit context's](/reference/core/edit-context.md) scope.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection-focusedArtboard"></a>

### selection.focusedArtboard : <code>?[Artboard](scenegraph.md#Artboard)</code>
The artboard the user is currently most focused on (via recent selection or edit operations). May be null, for example if no artboards exist or if the user just deleted an artboard.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection-editContext"></a>

### selection.editContext : <code>\![SceneNode](scenegraph.md#SceneNode)</code>
The common ancestor node of all selected items - also the root node of the subtree containing the "[edit context](/reference/core/edit-context.md),"
which is the scope in which selection and edit operations must occur for the current plugin command. The scope does not
necessarily cover the entire subtree rooted at the editContext root node -- it may only cover a subset of this tree. See
edit context documentation page for more details.

If the user hasn't drilled into any container node, this value is the document root.

The value of `editContext` does not change while your plugin is running. However, the `editContext` may change after your plugin
operation ends:
- If your plugin changes the value of `selection.items` to include fewer nodes, the edit context may be narrowed.
- If your plugin has deleted nodes such that the current container is now empty, the edit context will pop up a level and the now-empty
  container is automatically cleaned up.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection-isInEditContext"></a>

### *selection.isInEditContext(node)*
**Since**: XD 28

Returns true if the node is accessible for editing in the scope of the current edit context.
If false, the node cannot be edited given the user's current selection.
Nodes that are currently selected are always in the current edit context.

**Kind**: instance method of [<code>selection</code>](#selection)  
**Returns**: `boolean`

| Param  | Type    |
| -------| ------- |
| node   | !SceneNode |
