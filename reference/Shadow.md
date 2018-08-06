<a name="Shadow"></a>

## Shadow
**Kind**: class

* [Shadow](#Shadow)
    * [new Shadow(x, y, blur, color, visible)](#new_Shadow_new)
    * [.x](#Shadow+x) : <code>number</code>
    * [.y](#Shadow+y) : <code>number</code>
    * [.blur](#Shadow+blur) : <code>number</code>
    * [.color](#Shadow+color) : <code>!Color</code>
    * [.visible](#Shadow+visible) : <code>boolean</code>


* * *

<a name="new_Shadow_new"></a>

## new Shadow(x, y, blur, color, visible)
Creates a drop shadow style object with the given properties.

The `visible` argument is optional and defaults to true.

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| blur | <code>number</code> | 
| color | <code>\![Color](Color.md)</code> | 
| visible | <code>?boolean</code> |


* * *

<a name="Shadow+x"></a>

### *shadow.x : <code>number</code>*
X offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  


* * *

<a name="Shadow+y"></a>

### *shadow.y : <code>number</code>*
Y offset of the shadow relative to the shape it is attached to, in _global coordinates_  (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  


* * *

<a name="Shadow+blur"></a>

### *shadow.blur : <code>number</code>* &gt;= 0

**Kind**: instance property of [<code>Shadow</code>](#Shadow) 


* * *

<a name="Shadow+color"></a>

### *shadow.color : <code>\![Color](Color.md)</code>*

**Kind**: instance property of [<code>Shadow</code>](#Shadow) 


* * *

<a name="Shadow+visible"></a>

### *shadow.visible : <code>boolean</code>*
If false, the shadow is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [<code>Shadow</code>](#Shadow) 
