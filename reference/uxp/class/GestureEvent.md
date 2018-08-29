
<a name="gestureevent" id="gestureevent"></a>

## GestureEvent ⇐ [`BaseUIEvent`](#baseuievent)
**Kind**: global class  
**Extends**: [`BaseUIEvent`](#baseuievent)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/GestureEvent  

* [GestureEvent](#gestureevent) ⇐ [`BaseUIEvent`](#baseuievent)
    * [new GestureEvent(type, eventInit)](#new-gestureevent-new)
    * [.expansion](#gestureevent-expansion) : `number`
    * [.rotation](#gestureevent-rotation) : `number`
    * [.scale](#gestureevent-scale) : `number`
    * [.translationX](#gestureevent-translationx) : `number`
    * [.translationY](#gestureevent-translationy) : `number`
    * [.velocityAngular](#gestureevent-velocityangular) : `number`
    * [.velocityExpansion](#gestureevent-velocityexpansion) : `number`
    * [.velocityX](#gestureevent-velocityx) : `number`
    * [.velocityY](#gestureevent-velocityy) : `number`
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


<a name="new-gestureevent-new" id="new-gestureevent-new"></a>

### new GestureEvent(type, eventInit)
Creates an instance of GestureEvent.


| Param | Type |
| --- | --- |
| type | `\*` | 
| eventInit | `\*` | 


<a name="gestureevent-expansion" id="gestureevent-expansion"></a>

### gestureEvent.expansion : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-rotation" id="gestureevent-rotation"></a>

### gestureEvent.rotation : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-scale" id="gestureevent-scale"></a>

### gestureEvent.scale : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-translationx" id="gestureevent-translationx"></a>

### gestureEvent.translationX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-translationy" id="gestureevent-translationy"></a>

### gestureEvent.translationY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-velocityangular" id="gestureevent-velocityangular"></a>

### gestureEvent.velocityAngular : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-velocityexpansion" id="gestureevent-velocityexpansion"></a>

### gestureEvent.velocityExpansion : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-velocityx" id="gestureevent-velocityx"></a>

### gestureEvent.velocityX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="gestureevent-velocityy" id="gestureevent-velocityy"></a>

### gestureEvent.velocityY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### gestureEvent.pointerId
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-width" id="baseuievent-width"></a>

### gestureEvent.width : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-height" id="baseuievent-height"></a>

### gestureEvent.height : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-presure" id="baseuievent-presure"></a>

### gestureEvent.presure : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### gestureEvent.tangentialPressure : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### gestureEvent.tiltX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### gestureEvent.tiltY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### gestureEvent.twist : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### gestureEvent.clientX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### gestureEvent.clientY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### gestureEvent.offsetX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### gestureEvent.offsetY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### gestureEvent.pageX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### gestureEvent.pageY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### gestureEvent.screenX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### gestureEvent.screenY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### gestureEvent.movementX : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### gestureEvent.movementY : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-button" id="baseuievent-button"></a>

### gestureEvent.button : `number`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### gestureEvent.buttons
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### gestureEvent.detail
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### gestureEvent.pointerType
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### gestureEvent.altKey
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### gestureEvent.shiftKey
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### gestureEvent.metaKey
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### gestureEvent.ctrlKey
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### gestureEvent.isPrimary
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-type" id="event-type"></a>

### gestureEvent.type
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### gestureEvent.isTrusted : `boolean`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### gestureEvent.target : [`Node`](#node)
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### gestureEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### gestureEvent.bubbles : `boolean`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### gestureEvent.cancelable : `boolean`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### gestureEvent.eventPhase
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### gestureEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### gestureEvent.returnValue : `\*`
**Kind**: instance property of [`GestureEvent`](#gestureevent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### gestureEvent.preventDefault()
**Kind**: instance method of [`GestureEvent`](#gestureevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### gestureEvent.stopImmediatePropagation()
**Kind**: instance method of [`GestureEvent`](#gestureevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### gestureEvent.stopPropagation()
**Kind**: instance method of [`GestureEvent`](#gestureevent)  
