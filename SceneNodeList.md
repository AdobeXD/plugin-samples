<a name="SceneNodeList"></a>

## SceneNodeList
Represents the children of a scenenode. _Not_ an Array, but offers several Array-like APIs for convenience. Ordered from lowest
z order to highest.

**Kind**: class  

**Example**
```js
var node = ...;
console.log("Node has " + node.children.length + " children");
console.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!
node.children.forEach(function (childNode, i) {
    ...
});
```

**See**: [SceneNode#children](SceneNode#children)  

* [SceneNodeList](#SceneNodeList)
    * [.length](#SceneNodeList+length) : <code>number</code>
    * [.forEach(callback, thisArg)](#SceneNodeList+forEach) ⇒ <code>void</code>
    * [.forEachRight(callback, thisArg)](#SceneNodeList+forEachRight) ⇒ <code>void</code>
    * [.filter(callback, thisArg)](#SceneNodeList+filter) ⇒ <code>Array.&lt;!SceneNode&gt;</code>
    * [.map(callback, thisArg)](#SceneNodeList+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.some(callback, thisArg)](#SceneNodeList+some) ⇒ <code>boolean</code>
    * [.at()](#SceneNodeList+at) ⇒ <code>SceneNode</code>


* * *

<a name="SceneNodeList+length"></a>

### sceneNodeList.length : <code>number</code>
Number of children in the list.

**Kind**: instance property of [<code>SceneNodeList</code>](#SceneNodeList)  
**Read only**: true  

* * *

<a name="SceneNodeList+forEach"></a>

### sceneNodeList.forEach(callback, thisArg) ⇒ <code>void</code>
Iterate all children in the list.

**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback, passed each child node and its index. |
| thisArg | <code>Object</code> | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList+forEachRight"></a>

### sceneNodeList.forEachRight(callback, thisArg) ⇒ <code>void</code>
Iterate all children in the list, in reverse order (highest z order to lowest).

**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback, passed each child node and its index. |
| thisArg | <code>Object</code> | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList+filter"></a>

### sceneNodeList.filter(callback, thisArg) ⇒ <code>Array.&lt;!SceneNode&gt;</code>
Iterates all children and returns an array of just the children that passed the filter function's test.

**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Filter function, passed each child node and its index. |
| thisArg | <code>Object</code> | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList+map"></a>

### sceneNodeList.map(callback, thisArg) ⇒ <code>Array.&lt;\*&gt;</code>
Iterates all children and returns an array of the map function's result value for each child node.

**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Map function, passed each child node and its index. |
| thisArg | <code>Object</code> | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList+some"></a>

### sceneNodeList.some(callback, thisArg) ⇒ <code>boolean</code>
Iterates children until the test returns true for at least one child.

**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  
**Returns**: <code>boolean</code> - True if the test function returned true for at least one child.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Test function, passed each child node and its index. |
| thisArg | <code>Object</code> | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList+at"></a>

### sceneNodeList.at() ⇒ <code>SceneNode</code>
**Kind**: instance method of [<code>SceneNodeList</code>](#SceneNodeList)  
**Returns**: <code>SceneNode</code> - Child node at the specified index in the list, or null if index is out of bounds.  

* * *

