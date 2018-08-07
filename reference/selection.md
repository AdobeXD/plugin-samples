<a name="selection"></a>

## selection
The `selection` object represents the currently selected set of nodes in the UI. You can set the selection to use it as input
for [commands](commands.md), or to determine what is left selected for the user when your plugin's edit operation completes.

The current selection state is passed to your _command handler function_ as an argument:
```js
function myCommand(selection, documentRoot) {
    console.log(selection.items.length + " items are selected");
}
module.exports.commands = { myCommandId: myCommand };
```

The selection can only contain items within the current _edit context_:
- If the user has drilled down into a container node, the container is the current edit context and only its immediate children
  can be selected.
- If the user hasn't drilled into any container, the root of the document is the edit context, and the selection may contain any
  artboard _or_ any combination of the pasteboard's immediate children and one or more artboards' immediate children. The selection
  cannot contain both artboards and non-artboards at the same time, however.

Note that when in the root edit context, the selection _can_ contain items with multiple different parents.

Items that are _locked_ cannot be in the selection. If the user or your plugin attempts to select any locked items, they are
automatically filtered into a separate list ([itemsIncludingLocked](#selection+itemsIncludingLocked)) which is generally only used by the Unlock
command.

**Kind**: object  

* [selection](#selection)
    * [.items](#selection+items) : <code>!Array&lt;!SceneNode&gt;</code>
    * [.itemsIncludingLocked](#selection+itemsIncludingLocked) : <code>!Array&lt;!SceneNode&gt;</code>
    * [.hasArtwork](#selection+hasArtwork) : <code>boolean</code>
    * [.hasArtboards](#selection+hasArtboards) : <code>boolean</code>
    * [.editContext](#selection+editContext) : <code>!SceneNode</code>
    * [.insertionParent](#selection+insertionParent) : <code>!SceneNode</code>
    * [.focusedArtboard](#selection+focusedArtboard) : <code>?Artboard</code>


* * *

<a name="selection+items"></a>

### selection.items : <code>!Array&lt;\![SceneNode](scenegraph.md#SceneNode)&gt;</code>
Array representing the current selection. Empty array if nothing is selected (never null). Never includes locked nodes.

As a convenience, the setter also accepts a single node or null as valid input. However, the getter always returns an array.

If the user selects nodes one-by-one, by Shift-clicking, this array lists the nodes in the order they were added to the selection.

Returns a fresh array each time, so this can be mutated by the caller without interfering with anything. Mutating the array
does not change the selection - only invoking the 'items' setter changes selection.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Example**  
```js
console.log("There are " + selection.items.length + " nodes currently selected");
selection.items = [rectangle, ellipse, path];  // select 3 nodes
selection.items = rectangle;  // select 1 node (convenience)
selection.items = null;       // deselect all (convenience)
```

* * *

<a name="selection+itemsIncludingLocked"></a>

### selection.itemsIncludingLocked : <code>!Array&lt;\![SceneNode](scenegraph.md#SceneNode)&gt;</code>
Array representing the current selection *plus* any locked items that the user has attempted to select.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  
**Example**  
```js
var numUnlockedSelected = selection.items.length;
var numLockedSelected = selection.itemsIncludingLocked.length - numUnlockedSelected;
console.log("There are " + numLockedSelected + " locked nodes 'sort of' currently selected");
```

* * *

<a name="selection+hasArtwork"></a>

### selection.hasArtwork : <code>boolean</code>
True if the selection isn’t empty and consists of one or more non-Artboards. Never true at the same time as [hasArtboards](#selection+hasArtboards).

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection+hasArtboards"></a>

### selection.hasArtboards : <code>boolean</code>
True if the selection isn’t empty and consists of one or more Artboards. Never true at the same time as [hasArtwork](#selection+hasArtwork).

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection+editContext"></a>

### selection.editContext : <code>\![SceneNode](scenegraph.md#SceneNode)</code>
The context in which selection and edit operations must occur. If the user hasn't drilled into any container node, this value is the document root, and its scope includes all immediate children of the pasteboard (including Artboards), *and* all immediate children of all those Artboards.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection+insertionParent"></a>

### selection.insertionParent : <code>\![SceneNode](scenegraph.md#SceneNode)</code>
The preferred parent to insert newly added content into. Takes into account the current edit context as well as the "focused artboard" if in the root context.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

<a name="selection+focusedArtboard"></a>

### selection.focusedArtboard : <code>?[Artboard](scenegraph.md#Artboard)</code>
The artboard the user is currently most focused on (via recent selection or edit operations). May be null, for example if no artboards exist or if the user just deleted an artboard.

**Kind**: instance property of [<code>selection</code>](#selection)  
**Read only**: true  

* * *

