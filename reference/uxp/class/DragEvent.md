## DragEvent
**Signature:** DragEvent ⇐ [`BaseUIEvent`](#baseuievent)

**Kind**: global class  
**Extends**: [`BaseUIEvent`](#baseuievent)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/DragEvent  

* [DragEvent](#dragevent) ⇐ [`BaseUIEvent`](#baseuievent)
    * [new DragEvent(type, eventInit)](#new-dragevent-new)
    * [.dataTransfer](#dragevent-datatransfer)
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

### new DragEvent
**Signature:** new DragEvent(type, eventInit)

Creates an instance of DragEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 

### dragEvent.dataTransfer
**Signature:** dragEvent.dataTransfer

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.pointerId
**Signature:** dragEvent.pointerId

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.width
**Signature:** dragEvent.width : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.height
**Signature:** dragEvent.height : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.presure
**Signature:** dragEvent.presure : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.tangentialPressure
**Signature:** dragEvent.tangentialPressure : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.tiltX
**Signature:** dragEvent.tiltX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.tiltY
**Signature:** dragEvent.tiltY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.twist
**Signature:** dragEvent.twist : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.clientX
**Signature:** dragEvent.clientX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.clientY
**Signature:** dragEvent.clientY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.offsetX
**Signature:** dragEvent.offsetX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.offsetY
**Signature:** dragEvent.offsetY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.pageX
**Signature:** dragEvent.pageX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.pageY
**Signature:** dragEvent.pageY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.screenX
**Signature:** dragEvent.screenX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.screenY
**Signature:** dragEvent.screenY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.movementX
**Signature:** dragEvent.movementX : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.movementY
**Signature:** dragEvent.movementY : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.button
**Signature:** dragEvent.button : `number`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.buttons
**Signature:** dragEvent.buttons

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.detail
**Signature:** dragEvent.detail

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.pointerType
**Signature:** dragEvent.pointerType

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.altKey
**Signature:** dragEvent.altKey

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.shiftKey
**Signature:** dragEvent.shiftKey

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.metaKey
**Signature:** dragEvent.metaKey

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.ctrlKey
**Signature:** dragEvent.ctrlKey

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.isPrimary
**Signature:** dragEvent.isPrimary

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.type
**Signature:** dragEvent.type

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.isTrusted
**Signature:** dragEvent.isTrusted : `boolean`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.target
**Signature:** dragEvent.target : [`Node`](#node)

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.currentTarget
**Signature:** dragEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.bubbles
**Signature:** dragEvent.bubbles : `boolean`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.cancelable
**Signature:** dragEvent.cancelable : `boolean`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.eventPhase
**Signature:** dragEvent.eventPhase

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.defaultPrevented
**Signature:** dragEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`DragEvent`](#dragevent)  
**Read only**: true  
### dragEvent.returnValue
**Signature:** dragEvent.returnValue : `*`

**Kind**: instance property of [`DragEvent`](#dragevent)  
### dragEvent.preventDefault
**Signature:** dragEvent.preventDefault()

**Kind**: instance method of [`DragEvent`](#dragevent)  
### dragEvent.stopImmediatePropagation
**Signature:** dragEvent.stopImmediatePropagation()

**Kind**: instance method of [`DragEvent`](#dragevent)  
### dragEvent.stopPropagation
**Signature:** dragEvent.stopPropagation()

**Kind**: instance method of [`DragEvent`](#dragevent)  
