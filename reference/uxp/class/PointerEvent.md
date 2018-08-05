## PointerEvent
**Signature:** PointerEvent ⇐ [`BaseUIEvent`](#baseuievent)

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
    * [.returnValue](#event-returnvalue) : `*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

### new PointerEvent
**Signature:** new PointerEvent(type, eventInit)

Creates an instance of PointerEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 

### pointerEvent.pointerId
**Signature:** pointerEvent.pointerId

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.width
**Signature:** pointerEvent.width : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.height
**Signature:** pointerEvent.height : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.presure
**Signature:** pointerEvent.presure : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.tangentialPressure
**Signature:** pointerEvent.tangentialPressure : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.tiltX
**Signature:** pointerEvent.tiltX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.tiltY
**Signature:** pointerEvent.tiltY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.twist
**Signature:** pointerEvent.twist : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.clientX
**Signature:** pointerEvent.clientX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.clientY
**Signature:** pointerEvent.clientY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.offsetX
**Signature:** pointerEvent.offsetX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.offsetY
**Signature:** pointerEvent.offsetY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.pageX
**Signature:** pointerEvent.pageX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.pageY
**Signature:** pointerEvent.pageY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.screenX
**Signature:** pointerEvent.screenX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.screenY
**Signature:** pointerEvent.screenY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.movementX
**Signature:** pointerEvent.movementX : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.movementY
**Signature:** pointerEvent.movementY : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.button
**Signature:** pointerEvent.button : `number`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.buttons
**Signature:** pointerEvent.buttons

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.detail
**Signature:** pointerEvent.detail

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.pointerType
**Signature:** pointerEvent.pointerType

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.altKey
**Signature:** pointerEvent.altKey

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.shiftKey
**Signature:** pointerEvent.shiftKey

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.metaKey
**Signature:** pointerEvent.metaKey

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.ctrlKey
**Signature:** pointerEvent.ctrlKey

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.isPrimary
**Signature:** pointerEvent.isPrimary

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.type
**Signature:** pointerEvent.type

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.isTrusted
**Signature:** pointerEvent.isTrusted : `boolean`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.target
**Signature:** pointerEvent.target : [`Node`](#node)

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.currentTarget
**Signature:** pointerEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.bubbles
**Signature:** pointerEvent.bubbles : `boolean`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.cancelable
**Signature:** pointerEvent.cancelable : `boolean`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.eventPhase
**Signature:** pointerEvent.eventPhase

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.defaultPrevented
**Signature:** pointerEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
**Read only**: true  
### pointerEvent.returnValue
**Signature:** pointerEvent.returnValue : `*`

**Kind**: instance property of [`PointerEvent`](#pointerevent)  
### pointerEvent.preventDefault
**Signature:** pointerEvent.preventDefault()

**Kind**: instance method of [`PointerEvent`](#pointerevent)  
### pointerEvent.stopImmediatePropagation
**Signature:** pointerEvent.stopImmediatePropagation()

**Kind**: instance method of [`PointerEvent`](#pointerevent)  
### pointerEvent.stopPropagation
**Signature:** pointerEvent.stopPropagation()

**Kind**: instance method of [`PointerEvent`](#pointerevent)  
