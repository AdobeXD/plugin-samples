## BaseUIEvent
**Signature:** BaseUIEvent ⇐ [`Event`](#event)

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
    * [.returnValue](#event-returnvalue) : `*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

### new BaseUIEvent
**Signature:** new BaseUIEvent(type, eventInit)

Creates an instance of BaseUIEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 

### baseUIEvent.pointerId
**Signature:** baseUIEvent.pointerId

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.width
**Signature:** baseUIEvent.width : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.height
**Signature:** baseUIEvent.height : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.presure
**Signature:** baseUIEvent.presure : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.tangentialPressure
**Signature:** baseUIEvent.tangentialPressure : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.tiltX
**Signature:** baseUIEvent.tiltX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.tiltY
**Signature:** baseUIEvent.tiltY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.twist
**Signature:** baseUIEvent.twist : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.clientX
**Signature:** baseUIEvent.clientX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.clientY
**Signature:** baseUIEvent.clientY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.offsetX
**Signature:** baseUIEvent.offsetX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.offsetY
**Signature:** baseUIEvent.offsetY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.pageX
**Signature:** baseUIEvent.pageX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.pageY
**Signature:** baseUIEvent.pageY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.screenX
**Signature:** baseUIEvent.screenX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.screenY
**Signature:** baseUIEvent.screenY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.movementX
**Signature:** baseUIEvent.movementX : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.movementY
**Signature:** baseUIEvent.movementY : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.button
**Signature:** baseUIEvent.button : `number`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.buttons
**Signature:** baseUIEvent.buttons

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.detail
**Signature:** baseUIEvent.detail

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.pointerType
**Signature:** baseUIEvent.pointerType

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.altKey
**Signature:** baseUIEvent.altKey

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.shiftKey
**Signature:** baseUIEvent.shiftKey

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.metaKey
**Signature:** baseUIEvent.metaKey

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.ctrlKey
**Signature:** baseUIEvent.ctrlKey

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.isPrimary
**Signature:** baseUIEvent.isPrimary

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.type
**Signature:** baseUIEvent.type

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.isTrusted
**Signature:** baseUIEvent.isTrusted : `boolean`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.target
**Signature:** baseUIEvent.target : [`Node`](#node)

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.currentTarget
**Signature:** baseUIEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.bubbles
**Signature:** baseUIEvent.bubbles : `boolean`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.cancelable
**Signature:** baseUIEvent.cancelable : `boolean`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.eventPhase
**Signature:** baseUIEvent.eventPhase

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.defaultPrevented
**Signature:** baseUIEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
**Read only**: true  
### baseUIEvent.returnValue
**Signature:** baseUIEvent.returnValue : `*`

**Kind**: instance property of [`BaseUIEvent`](#baseuievent)  
### baseUIEvent.preventDefault
**Signature:** baseUIEvent.preventDefault()

**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  
### baseUIEvent.stopImmediatePropagation
**Signature:** baseUIEvent.stopImmediatePropagation()

**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  
### baseUIEvent.stopPropagation
**Signature:** baseUIEvent.stopPropagation()

**Kind**: instance method of [`BaseUIEvent`](#baseuievent)  
