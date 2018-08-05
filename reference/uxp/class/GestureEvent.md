## GestureEvent
**Signature:** GestureEvent ⇐ [`BaseUIEvent`](#baseuievent)

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
    * [.returnValue](#event-returnvalue) : `*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

### new GestureEvent
**Signature:** new GestureEvent(type, eventInit)

Creates an instance of GestureEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 

### gestureEvent.expansion
**Signature:** gestureEvent.expansion : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.rotation
**Signature:** gestureEvent.rotation : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.scale
**Signature:** gestureEvent.scale : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.translationX
**Signature:** gestureEvent.translationX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.translationY
**Signature:** gestureEvent.translationY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.velocityAngular
**Signature:** gestureEvent.velocityAngular : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.velocityExpansion
**Signature:** gestureEvent.velocityExpansion : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.velocityX
**Signature:** gestureEvent.velocityX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.velocityY
**Signature:** gestureEvent.velocityY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.pointerId
**Signature:** gestureEvent.pointerId

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.width
**Signature:** gestureEvent.width : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.height
**Signature:** gestureEvent.height : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.presure
**Signature:** gestureEvent.presure : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.tangentialPressure
**Signature:** gestureEvent.tangentialPressure : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.tiltX
**Signature:** gestureEvent.tiltX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.tiltY
**Signature:** gestureEvent.tiltY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.twist
**Signature:** gestureEvent.twist : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.clientX
**Signature:** gestureEvent.clientX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.clientY
**Signature:** gestureEvent.clientY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.offsetX
**Signature:** gestureEvent.offsetX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.offsetY
**Signature:** gestureEvent.offsetY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.pageX
**Signature:** gestureEvent.pageX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.pageY
**Signature:** gestureEvent.pageY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.screenX
**Signature:** gestureEvent.screenX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.screenY
**Signature:** gestureEvent.screenY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.movementX
**Signature:** gestureEvent.movementX : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.movementY
**Signature:** gestureEvent.movementY : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.button
**Signature:** gestureEvent.button : `number`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.buttons
**Signature:** gestureEvent.buttons

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.detail
**Signature:** gestureEvent.detail

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.pointerType
**Signature:** gestureEvent.pointerType

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.altKey
**Signature:** gestureEvent.altKey

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.shiftKey
**Signature:** gestureEvent.shiftKey

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.metaKey
**Signature:** gestureEvent.metaKey

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.ctrlKey
**Signature:** gestureEvent.ctrlKey

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.isPrimary
**Signature:** gestureEvent.isPrimary

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.type
**Signature:** gestureEvent.type

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.isTrusted
**Signature:** gestureEvent.isTrusted : `boolean`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.target
**Signature:** gestureEvent.target : [`Node`](#node)

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.currentTarget
**Signature:** gestureEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.bubbles
**Signature:** gestureEvent.bubbles : `boolean`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.cancelable
**Signature:** gestureEvent.cancelable : `boolean`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.eventPhase
**Signature:** gestureEvent.eventPhase

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.defaultPrevented
**Signature:** gestureEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
**Read only**: true  
### gestureEvent.returnValue
**Signature:** gestureEvent.returnValue : `*`

**Kind**: instance property of [`GestureEvent`](#gestureevent)  
### gestureEvent.preventDefault
**Signature:** gestureEvent.preventDefault()

**Kind**: instance method of [`GestureEvent`](#gestureevent)  
### gestureEvent.stopImmediatePropagation
**Signature:** gestureEvent.stopImmediatePropagation()

**Kind**: instance method of [`GestureEvent`](#gestureevent)  
### gestureEvent.stopPropagation
**Signature:** gestureEvent.stopPropagation()

**Kind**: instance method of [`GestureEvent`](#gestureevent)  
