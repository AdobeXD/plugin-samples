<a name="LinearGradientFill"></a>

## LinearGradientFill
**Kind**: class  

In a linear gradient, colors blend smoothly along a straight line, extending out perpendicularly from that line. The gradient fills the entire area of the shape it is
applied to.

* [LinearGradientFill](#LinearGradientFill)
    * [new LinearGradientFill()](#new_LinearGradientFill_new)
    * [.clone()](#LinearGradientFill-clone) ⇒ <code>!LinearGradientFill</code>
    * [.colorStops](#LinearGradientFill-colorStops) : <code>!Array&lt;{stop:number, color:!Color}></code>
    * [.startX](#LinearGradientFill-startX) : <code>number</code>
    * [.startY](#LinearGradientFill-startY) : <code>number</code>
    * [.endX](#LinearGradientFill-endX) : <code>number</code>
    * [.endY](#LinearGradientFill-endY) : <code>number</code>
    * [.getEndPoints()](#LinearGradientFill-getEndPoints) ⇒ <code>!Array&lt;number></code>
    * [.setEndPoints(startX, startY, endX, endY)](#LinearGradientFill-setEndPoints)


* * *

<a name="new_LinearGradientFill_new"></a>

### new LinearGradientFill()
Create a new LinearGradientFill instance.


* * *

<a name="LinearGradientFill-clone"></a>

### *linearGradientFill.clone() ⇒ <code>!LinearGradientFill</code>*
Returns a copy of this instance.

**Kind**: instance method of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-colorStops"></a>

### *linearGradientFill.colorStops : <code>!Array&lt;{stop:number, color:\![Color](Color.md)}></code>*
Array of objects representing each color and its position along the gradient line. The position (`stop` value) is a number 0.0 - 1.0.

**Kind**: instance property of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-startX"></a>

### *linearGradientFill.startX : <code>number</code>*
X position of the start of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-startY"></a>

### *linearGradientFill.startY : <code>number</code>*
Y position of the start of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-endX"></a>

### *linearGradientFill.endX : <code>number</code>*
X position of the end of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-endY"></a>

### *linearGradientFill.endY : <code>number</code>*
Y position of the end of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-getEndPoints"></a>

### *linearGradientFill.getEndPoints() ⇒ <code>!Array&lt;number></code>*
Returns an array of \[startX, startY, endX, endY\].

**Kind**: instance method of [<code>LinearGradientFill</code>](#LinearGradientFill)  


* * *

<a name="LinearGradientFill-setEndPoints"></a>

### *linearGradientFill.setEndPoints(startX, startY, endX, endY)
Shorthand for setting all four start/endpoint properties.

**Kind**: instance method of [<code>LinearGradientFill</code>](#LinearGradientFill)  
