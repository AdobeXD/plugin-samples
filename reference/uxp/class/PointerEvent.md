
<a name="pointerevent" id="pointerevent"></a>

## PointerEvent ⇐ [`BaseUIEvent`](#baseuievent)
**Kind**: global class  
**Extends**: [`BaseUIEvent`](#baseuievent)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent  

* [PointerEvent](#pointerevent) ⇐ [`BaseUIEvent`](#baseuievent)
    * [new PointerEvent(type, eventInit)](#new-pointerevent-new)
    * [.pointerId](#baseuievent-pointerid)
    * [.width](#baseuievent-width) : `number`
    * [.height](#baseuievent-height) : `number`
    * [.presure](#baseuievent-presure) : `number`
    * [.tangentialPressure](#baseuievent-tangentialpressure) : `number`
    * [.tiltX](#baseuievent-tiltx) : `number`
    * [.tiltY](#baseuievent-tilty) : `number`
    * [.twist](#baseuievent-twist) : `number`
    * [.clientX](#baseuievent-clientx) : `number`
    * [.clientY](#baseuievent-clienty) : `number`
    * [.offsetX](#baseuievent-offsetx) : `number`
    * [.offsetY](#baseuievent-offsety) : `number`
    * [.pageX](#baseuievent-pagex) : `number`
    * [.pageY](#baseuievent-pagey) : `number`
    * [.screenX](#baseuievent-screenx) : `number`
    * [.screenY](#baseuievent-screeny) : `number`
    * [.movementX](#baseuievent-movementx) : `number`
    * [.movementY](#baseuievent-movementy) : `number`
    * [.button](#baseuievent-button) : `number`
    * [.buttons](#baseuievent-buttons)
    * [.detail](#baseuievent-detail)
    * [.pointerType](#baseuievent-pointertype)
    * [.altKey](#baseuievent-altkey)
    * [.shiftKey](#baseuievent-shiftkey)
    * [.metaKey](#baseuievent-metakey)
    * [.ctrlKey](#baseuievent-ctrlkey)
    * [.isPrimary](#baseuievent-isprimary)
    * [.type](#event-type)
    * [.isTrusted](#event-istrusted) : `boolean`
    * [.target](#event-target) : [`Node`](#node)
    * [.currentTarget](#event-currenttarget) : [`Node`](#node)
    * [.bubbles](#event-bubbles) : `boolean`
    * [.cancelable](#event-cancelable) : `boolean`
    * [.eventPhase](#event-eventphase)
    * [.defaultPrevented](#event-defaultprevented) : `boolean`
    * [.returnValue](#event-returnvalue) : `\*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)


<a name="new-pointerevent-new" id="new-pointerevent-new"></a>

### new PointerEvent(type, eventInit)
Creates an instance of PointerEvent.


| Param | Type |
| --- | --- |
| type | `\*` | 
| eventInit | `\*` | 


<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### pointerEvent.pointerId
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-width" id="baseuievent-width"></a>

### pointerEvent.width : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-height" id="baseuievent-height"></a>

### pointerEvent.height : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-presure" id="baseuievent-presure"></a>

### pointerEvent.presure : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### pointerEvent.tangentialPressure : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### pointerEvent.tiltX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### pointerEvent.tiltY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### pointerEvent.twist : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### pointerEvent.clientX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### pointerEvent.clientY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### pointerEvent.offsetX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### pointerEvent.offsetY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### pointerEvent.pageX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### pointerEvent.pageY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### pointerEvent.screenX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### pointerEvent.screenY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### pointerEvent.movementX : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### pointerEvent.movementY : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-button" id="baseuievent-button"></a>

### pointerEvent.button : `number`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### pointerEvent.buttons
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### pointerEvent.detail
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### pointerEvent.pointerType
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### pointerEvent.altKey
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### pointerEvent.shiftKey
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### pointerEvent.metaKey
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### pointerEvent.ctrlKey
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### pointerEvent.isPrimary
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-type" id="event-type"></a>

### pointerEvent.type
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### pointerEvent.isTrusted : `boolean`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### pointerEvent.target : [`Node`](#node)
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### pointerEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### pointerEvent.bubbles : `boolean`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### pointerEvent.cancelable : `boolean`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### pointerEvent.eventPhase
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### pointerEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### pointerEvent.returnValue : `\*`
**Kind**: instance property of [`PointerEvent`](#pointerevent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### pointerEvent.preventDefault()
**Kind**: instance method of [`PointerEvent`](#pointerevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### pointerEvent.stopImmediatePropagation()
**Kind**: instance method of [`PointerEvent`](#pointerevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### pointerEvent.stopPropagation()
**Kind**: instance method of [`PointerEvent`](#pointerevent)  
