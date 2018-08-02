
<a name="baseuievent" id="baseuievent"></a>

## BaseUIEvent ⇐ [`Event`](#event)
**Kind**: global class  
**Extends**: [`Event`](#event)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent  

* [BaseUIEvent](#baseuievent) ⇐ [`Event`](#event)
    * [new BaseUIEvent(type, eventInit)](#new-baseuievent-new)
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


<a name="new-baseuievent-new" id="new-baseuievent-new"></a>

### new BaseUIEvent(type, eventInit)
Creates an instance of BaseUIEvent.


| Param | Type |
| --- | --- |
| type | `\*` | 
| eventInit | `\*` | 


<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### baseUIEvent.pointerId
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-width" id="baseuievent-width"></a>

### baseUIEvent.width : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-height" id="baseuievent-height"></a>

### baseUIEvent.height : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-presure" id="baseuievent-presure"></a>

### baseUIEvent.presure : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### baseUIEvent.tangentialPressure : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### baseUIEvent.tiltX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### baseUIEvent.tiltY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### baseUIEvent.twist : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### baseUIEvent.clientX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### baseUIEvent.clientY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### baseUIEvent.offsetX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### baseUIEvent.offsetY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### baseUIEvent.pageX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### baseUIEvent.pageY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### baseUIEvent.screenX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### baseUIEvent.screenY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### baseUIEvent.movementX : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### baseUIEvent.movementY : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-button" id="baseuievent-button"></a>

### baseUIEvent.button : `number`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### baseUIEvent.buttons
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### baseUIEvent.detail
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### baseUIEvent.pointerType
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### baseUIEvent.altKey
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### baseUIEvent.shiftKey
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### baseUIEvent.metaKey
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### baseUIEvent.ctrlKey
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### baseUIEvent.isPrimary
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-type" id="event-type"></a>

### baseUIEvent.type
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### baseUIEvent.isTrusted : `boolean`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### baseUIEvent.target : [`Node`](#node)
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### baseUIEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### baseUIEvent.bubbles : `boolean`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### baseUIEvent.cancelable : `boolean`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### baseUIEvent.eventPhase
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### baseUIEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### baseUIEvent.returnValue : `\*`
**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### baseUIEvent.preventDefault()
**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### baseUIEvent.stopImmediatePropagation()
**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### baseUIEvent.stopPropagation()
**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  
