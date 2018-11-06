<a name="module_viewport"></a>

## viewport
The `viewport` module represents the current UI view of the XD document's content.

**Example**
```js
// Pan viewport to bring the region x:100, y:200, width:50, height:50 into view
viewport.scrollIntoView(100, 200, 50, 50);

// Pan view to the first selected object
if (selection.items.length > 0) {
    viewport.scrollIntoView(selection.items[0]);
}

// Pan view to center the location x:100, y:200
viewport.scrollToCenter(100, 200);

// Zoom & pan to show entire region x:100, y:200, width:50, height:50
viewport.zoomToRect(100, 200, 50, 50);

console.log("Viewport at:", viewport.bounds); // e.g. "{ x:100, y:50, width:1400, height:900 }"
console.log("Zoom:", viewport.zoomFactor);    // e.g. "0.66"
```

**Since**: XD 14

* [viewport](#module_viewport)
    * [.scrollIntoView(node) | (x, y, width, height)](#module_viewport-scrollIntoView)
    * [.scrollToCenter(x, y)](#module_viewport-scrollToCenter)
    * [.zoomToRect(node) | (x, y, width, height)](#module_viewport-zoomToRect)
    * [.bounds](#module_viewport-bounds) : <code>!{x:number, y:number, width:number, height:number}</code>
    * [.zoomFactor](#module_viewport-zoomFactor) : <code>number</code>


* * *

<a name="module_viewport-scrollIntoView"></a>

### viewport.scrollIntoView(node) | (x, y, width, height)
Smoothly pan the viewport to bring the entire given region into view. If the region is already fully in view, does
nothing. If the given region is too large to fit entirely in view, it is simply centered (zoom remains unchanged).

The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates.

**Kind**: static method of [<code>viewport</code>](#module_viewport)

**viewport.scrollIntoView(node) :**

| Param | Type |
| --- | --- |
| node | !SceneNode |

**viewport.scrollIntoView(x, y, width, height) :**

| Param | Type |
| --- | --- |
| x | number |
| y | number |
| width | number |
| height | number |


* * *

<a name="module_viewport-scrollToCenter"></a>

### viewport.scrollToCenter(x, y)
Smoothly pan the viewport to center on a specific point in the document's global coordinates. Even if the point is
already in view, the view pans until it is centered.

**Kind**: static method of [<code>viewport</code>](#module_viewport)

| Param | Type |
| --- | --- |
| x | number |
| y | number |


* * *

<a name="module_viewport-zoomToRect"></a>

### viewport.zoomToRect(node) | (x, y, width, height)
Zoom & pan the view as needed so the given region fills the viewport (with some padding). If the region is large, zooms
out as needed so it fits entirely in view. If the region is smaller, zooms *in* so the region fills the entire viewport -
may zoom in past 100% to achieve this.

The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates.

**Kind**: static method of [<code>viewport</code>](#module_viewport)

**viewport.zoomToRect(node) :**

| Param | Type |
| --- | --- |
| node | !SceneNode |

**viewport.zoomToRect(x, y, width, height) :**

| Param | Type |
| --- | --- |
| x | number |
| y | number |
| width | number |
| height | number |


* * *

<a name="module_viewport-bounds"></a>

### *viewport.bounds : <code>!{x:number, y:number, width:number, height:number}</code>*
The current viewport bounds expressed in [global coordinates](/reference/core/coordinate-spaces-and-units.md).

**Kind**: static property of [<code>viewport</code>](#module_viewport)
**Read only**: true


* * *

<a name="module_viewport-zoomFactor"></a>

### *viewport.zoomFactor : <code>number</code>*
The current viewport zoom factor (where 1.0 = 100% zoom, 0.5 = 50% zoom, etc.).

**Kind**: static property of [<code>viewport</code>](#module_viewport)
**Read only**: true
