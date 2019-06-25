
<a name="dragevent" id="dragevent"></a>

## DragEvent

**Extends**: [`BaseUIEvent`](#baseuievent)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/DragEvent

* [DragEvent](#DragEvent)
    * [new DragEvent(type, eventInit)](#new-dragevent-new)
    * [.dataTransfer](#dragevent-datatransfer)
    * [.pointerId](#baseuievent-pointerid)
    * [.width](#baseuievent-width) : `number`
    * [.height](#baseuievent-height) : `number`
    * [.pressure](#baseuievent-pressure) : `number`
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
    * [.which](#baseuievent-which)
    * [.type](#event-type)
    * [.isTrusted](#event-istrusted) : `boolean`
    * [.target](#Event+target) : [`Node`](#node)
    * [.currentTarget](#Event+currentTarget) : [`Node`](#node)
    * [.bubbles](#event-bubbles) : `boolean`
    * [.cancelable](#event-cancelable) : `boolean`
    * [.eventPhase](#event-eventphase)
    * [.defaultPrevented](#event-defaultprevented) : `boolean`
    * [.returnValue](#event-returnvalue) : `\*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

<a name="new-dragevent-new" id="new-dragevent-new"></a>

### new DragEvent(type, eventInit)
Creates an instance of DragEvent.

| Param | Type |
| --- | --- |
| type | `\*` |
| eventInit | `\*` |

<a name="dragevent-datatransfer" id="dragevent-datatransfer"></a>

### dragEvent.dataTransfer

**Read only**

<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### dragEvent.pointerId

**Read only**

<a name="baseuievent-width" id="baseuievent-width"></a>

### dragEvent.width : `number`

**Read only**

<a name="baseuievent-height" id="baseuievent-height"></a>

### dragEvent.height : `number`

**Read only**

<a name="baseuievent-pressure" id="baseuievent-pressure"></a>

### dragEvent.pressure : `number`

**Read only**

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### dragEvent.tangentialPressure : `number`

**Read only**

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### dragEvent.tiltX : `number`

**Read only**

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### dragEvent.tiltY : `number`

**Read only**

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### dragEvent.twist : `number`

**Read only**

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### dragEvent.clientX : `number`

**Read only**

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### dragEvent.clientY : `number`

**Read only**

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### dragEvent.offsetX : `number`

**Read only**

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### dragEvent.offsetY : `number`

**Read only**

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### dragEvent.pageX : `number`

**Read only**

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### dragEvent.pageY : `number`

**Read only**

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### dragEvent.screenX : `number`

**Read only**

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### dragEvent.screenY : `number`

**Read only**

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### dragEvent.movementX : `number`

**Read only**

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### dragEvent.movementY : `number`

**Read only**

<a name="baseuievent-button" id="baseuievent-button"></a>

### dragEvent.button : `number`

**Read only**

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### dragEvent.buttons

**Read only**

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### dragEvent.detail

**Read only**

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### dragEvent.pointerType

**Read only**

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### dragEvent.altKey

**Read only**

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### dragEvent.shiftKey

**Read only**

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### dragEvent.metaKey

**Read only**

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### dragEvent.ctrlKey

**Read only**

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### dragEvent.isPrimary

**Read only**

<a name="baseuievent-which" id="baseuievent-which"></a>

### dragEvent.which

**Read only**

<a name="event-type" id="event-type"></a>

### dragEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### dragEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### dragEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### dragEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### dragEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### dragEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### dragEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### dragEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### dragEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### dragEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### dragEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### dragEvent.stopPropagation()

