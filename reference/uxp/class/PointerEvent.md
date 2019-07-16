
<a name="pointerevent" id="pointerevent"></a>

## PointerEvent

**Extends**: [`BaseUIEvent`](#baseuievent)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent

* [PointerEvent](#PointerEvent)
    * [new PointerEvent(type, eventInit)](#new-pointerevent-new)
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

<a name="new-pointerevent-new" id="new-pointerevent-new"></a>

### new PointerEvent(type, eventInit)
Creates an instance of PointerEvent.

| Param | Type |
| --- | --- |
| type | `\*` |
| eventInit | `\*` |

<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### pointerEvent.pointerId

**Read only**

<a name="baseuievent-width" id="baseuievent-width"></a>

### pointerEvent.width : `number`

**Read only**

<a name="baseuievent-height" id="baseuievent-height"></a>

### pointerEvent.height : `number`

**Read only**

<a name="baseuievent-pressure" id="baseuievent-pressure"></a>

### pointerEvent.pressure : `number`

**Read only**

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### pointerEvent.tangentialPressure : `number`

**Read only**

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### pointerEvent.tiltX : `number`

**Read only**

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### pointerEvent.tiltY : `number`

**Read only**

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### pointerEvent.twist : `number`

**Read only**

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### pointerEvent.clientX : `number`

**Read only**

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### pointerEvent.clientY : `number`

**Read only**

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### pointerEvent.offsetX : `number`

**Read only**

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### pointerEvent.offsetY : `number`

**Read only**

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### pointerEvent.pageX : `number`

**Read only**

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### pointerEvent.pageY : `number`

**Read only**

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### pointerEvent.screenX : `number`

**Read only**

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### pointerEvent.screenY : `number`

**Read only**

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### pointerEvent.movementX : `number`

**Read only**

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### pointerEvent.movementY : `number`

**Read only**

<a name="baseuievent-button" id="baseuievent-button"></a>

### pointerEvent.button : `number`

**Read only**

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### pointerEvent.buttons

**Read only**

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### pointerEvent.detail

**Read only**

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### pointerEvent.pointerType

**Read only**

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### pointerEvent.altKey

**Read only**

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### pointerEvent.shiftKey

**Read only**

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### pointerEvent.metaKey

**Read only**

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### pointerEvent.ctrlKey

**Read only**

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### pointerEvent.isPrimary

**Read only**

<a name="baseuievent-which" id="baseuievent-which"></a>

### pointerEvent.which

**Read only**

<a name="event-type" id="event-type"></a>

### pointerEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### pointerEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### pointerEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### pointerEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### pointerEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### pointerEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### pointerEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### pointerEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### pointerEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### pointerEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### pointerEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### pointerEvent.stopPropagation()

