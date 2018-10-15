<a name="Matrix"></a>

## Matrix
**Kind**: class  

* [Matrix](#Matrix)
    * [new Matrix(a, b, c, d, e, f)](#new_Matrix_new)
    * [.setFrom(otherMatrix)](#Matrix-setFrom)
    * [.clone()](#Matrix-clone) ⇒ !Matrix
    * [.add(a, b, c, d, e, f)](#Matrix-add) ⇒ !Matrix
    * [.multLeft(a, b, c, d, e, f)](#Matrix-multLeft) ⇒ !Matrix
    * [.invert()](#Matrix-invert) ⇒ !Matrix
    * [.translate(tx, ty)](#Matrix-translate) ⇒ !Matrix
    * [.scale(sx, sy, tx, ty)](#Matrix-scale) ⇒ !Matrix
    * [.rotate(a, x, y)](#Matrix-rotate) ⇒ !Matrix
    * [.x(x, y)](#Matrix-x) ⇒ <code>number</code>
    * [.y(x, y)](#Matrix-y) ⇒ <code>number</code>
    * [.transformPoint(point)](#Matrix-transformPoint) ⇒ <code>!{x:number, y:number}</code>
    * [.transformRect(rect)](#Matrix-transformRect) ⇒ <code>!{x:number, y:number, width:number, height:number}</code>
    * [.getTranslate()](#Matrix-getTranslate) ⇒ <code>!Array.&lt;number&gt;</code>
    * [.determinant()](#Matrix-determinant) ⇒ <code>number</code>
    * [.split()](#Matrix-split) ⇒ <code>!{dx:number, dy:number, scaleX:number, scaleY:number, shear:number, rotate:number, isSimple:boolean}</code>
    * [.scaleFactors([flipInfo])](#Matrix-scaleFactors) ⇒ <code>!{scaleX:number, scaleY:number}</code>
    * [.removedScaleMatrix(scaleX, scaleY)](#Matrix-removedScaleMatrix) ⇒ !Matrix
    * [.hasSkew()](#Matrix-hasSkew) ⇒ <code>boolean</code>
    * [.getRotation()](#Matrix-getRotation) ⇒ <code>number</code>


* * *

<a name="new_Matrix_new"></a>

## new Matrix(a, b, c, d, e, f)
Creates a new transform matrix with the following structure:
```
| a c e |
| b d f |
| 0 0 1 |
```
Note: XD does not generally allow transform matrices with scale or shear (skew) components - only translate and rotate components are typically permitted.

If no arguments, creates a new identity matrix by default.


* * *

<a name="Matrix-setFrom"></a>

### matrix.setFrom(otherMatrix)
Copies another matrix's values into this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| otherMatrix | \![<code>Matrix</code>](#Matrix) | The matrix to copy values from. |


* * *

<a name="Matrix-clone"></a>

### matrix.clone()
Returns a copy of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix)


* * *

<a name="Matrix-add"></a>

### matrix.add(aOrMatrix, b, c, d, e, f) ⇒ \![<code>Matrix</code>](#Matrix)
Multiplies a passed affine transform to the right: this * M. The result effectively applies
the transform of the passed in matrix first, followed by the transform of this matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix) - The current matrix after right multiply.  

| Param | Type | Description |
| --- | --- | --- |
| aOrMatrix | <code>number|!Matrix</code> | A Matrix or the `a` component of an affine transform. |
| b | <code>?number</code> | The `b` component of an affine transform. |
| c | <code>?number</code> | The `c` component of an affine transform. |
| d | <code>?number</code> | The `d` component of an affine transform. |
| e | <code>?number</code> | The `e` component of an affine transform. |
| f | <code>?number</code> | The `f` component of an affine transform. |


* * *

<a name="Matrix-multLeft"></a>

### matrix.multLeft(aOrMatrix, b, c, d, e, f) ⇒ \![<code>Matrix</code>](#Matrix)
Multiplies a passed affine transform to the left: M * this. The result effectively applies
the transform of this matrix first, followed by the transform of the passed in matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix) - The current matrix after left multiply.  

| Param | Type | Description |
| --- | --- | --- |
| aOrMatrix | <code>number|!Matrix</code> | A Matrix or the `a` component of an affine transform. |
| b | <code>?number</code> | The `b` component of an affine transform. |
| c | <code>?number</code> | The `c` component of an affine transform. |
| d | <code>?number</code> | The `d` component of an affine transform. |
| e | <code>?number</code> | The `e` component of an affine transform. |
| f | <code>?number</code> | The `f` component of an affine transform. |


* * *

<a name="Matrix-invert"></a>

### matrix.invert() ⇒ \![<code>Matrix</code>](#Matrix)
Returns an inverted version of the matrix. Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix)


* * *

<a name="Matrix-translate"></a>

### matrix.translate(tx, ty) ⇒ \![<code>Matrix</code>](#Matrix)
Applies translation *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| tx | <code>number</code> | horizontal offset distance |
| ty | <code>number</code> | vertical offset distance |


* * *

<a name="Matrix-scale"></a>

### matrix.scale(sx, sy, cx, cy) ⇒ \![<code>Matrix</code>](#Matrix)
Applies scaling *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

Note: scale transforms are not generally permitted in XD.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| sx | <code>number</code> | amount to be scaled, with `1` resulting in no change |
| sy | <code>?number</code> | amount to scale along the vertical axis. (Otherwise `sx` applies to both axes.) |
| cx | <code>?number</code> | horizontal origin point from which to scale (if unspecified, scales from the local coordinates' origin point) |
| cy | <code>?number</code> | vertical origin point from which to scale |


* * *

<a name="Matrix-rotate"></a>

### matrix.rotate(angle, cx, cy) ⇒ \![<code>Matrix</code>](#Matrix)
Applies clockwise rotation *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | angle of rotation, in degrees clockwise |
| cx | <code>?number</code> | horizontal origin point from which to rotate (if unspecified, scales from the local coordinates' origin point) |
| cy | <code>?number</code> | vertical origin point from which to rotate |


* * *

<a name="Matrix-x"></a>

### matrix.x(x, y) ⇒ <code>number</code>
Returns x coordinate of the given point after transformation described by this matrix. See also [Matrix.y](#Matrix-y) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code>

| Param | Type |
| --- | --- |
| x | <code>number</code> |
| y | <code>number</code> |


* * *

<a name="Matrix-y"></a>

### matrix.y(x, y) ⇒ <code>number</code>
Returns y coordinate of the given point after transformation described by this matrix. See also [Matrix.x](#Matrix-x) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code>

| Param | Type |
| --- | --- |
| x | <code>number</code> |
| y | <code>number</code> |


* * *

<a name="Matrix-transformPoint"></a>

### matrix.transformPoint(point) ⇒ <code>!{x:number, y:number}</code>
Returns x & y coordinates of the given point after transformation described by this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>!{x:number, y:number}</code>

| Param | Type |
| --- | --- |
| point | <code>!{x:number, y:number}</code> |


* * *

<a name="Matrix-transformRect"></a>

### matrix.transformRect(rect) ⇒ <code>!{x:number, y:number, width:number, height:number}</code>
Transforms a rectangle using this matrix, returning the _axis-aligned_ bounds of the resulting rectangle. If this matrix has
rotation, then the result will have different width & height from the original rectangle, due to axis alignment. See
["Coordinate Spaces"](/reference/core/coordinate-spaces-and-units.md) for some illustrations of this.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>!{x:number, y:number, width:number, height:number}</code>

| Param | Type |
| --- | --- |
| rect | <code>!{x:number, y:number, width:number, height:number}</code> |


* * *

<a name="Matrix-getTranslate"></a>

### matrix.getTranslate() ⇒ <code>!Array.&lt;number&gt;</code>
**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>!Array.&lt;number&gt;</code> - The translation component of this matrix: [tx, ty]. Equals the `e` and `f` components of this matrix.

* * *

<a name="Matrix-scaleFactors"></a>

### matrix.scaleFactors() ⇒ <code>!{scaleX:number, scaleY:number}</code>
Split the matrix into scale factors.
This method assumes that there is no skew in the matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>!{scaleX:number, scaleY:number}</code>


* * *

<a name="Matrix-removedScaleMatrix"></a>

### matrix.removedScaleMatrix(scaleX, scaleY) ⇒ \![<code>Matrix</code>](#Matrix)
Returns a new matrix that contains only the translate and rotate components of the current matrix, with the given scale
factors stripped out. Must be passed the exact scale factors returned by [scaleFactors()](#Matrix-scaleFactors) for this
matrix, and this matrix must have no skew/shear component.

Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: \![<code>Matrix</code>](#Matrix) - The matrix without the passed scaling factors.  

| Param | Type | Description |
| --- | --- | --- |
| scaleX | <code>number</code> | horrizontal scale component to remove |
| scaleY | <code>number</code> | vertical scale component to remove |


* * *

<a name="Matrix-hasSkew"></a>

### matrix.hasSkew() ⇒ <code>boolean</code>

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - true, if the matrix includes any skew (shear)  

* * *
