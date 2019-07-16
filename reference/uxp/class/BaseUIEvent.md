
<a name="baseuievent" id="baseuievent"></a>

## BaseUIEvent

**Extends**: [`Event`](#event)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent

* [BaseUIEvent](#BaseUIEvent)
    * [new BaseUIEvent(type, eventInit)](#new-baseuievent-new)
    * _instance_
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
    * _static_
        * [.WheelEvent#deltaMove](#baseuievent-wheelevent-deltamove) : `number`

<a name="new-baseuievent-new" id="new-baseuievent-new"></a>

### new BaseUIEvent(type, eventInit)
Creates an instance of BaseUIEvent.

| Param | Type |
| --- | --- |
| type | `\*` |
| eventInit | `\*` |

<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### baseUIEvent.pointerId

**Read only**

<a name="baseuievent-width" id="baseuievent-width"></a>

### baseUIEvent.width : `number`

**Read only**

<a name="baseuievent-height" id="baseuievent-height"></a>

### baseUIEvent.height : `number`

**Read only**

<a name="baseuievent-pressure" id="baseuievent-pressure"></a>

### baseUIEvent.pressure : `number`

**Read only**

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### baseUIEvent.tangentialPressure : `number`

**Read only**

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### baseUIEvent.tiltX : `number`

**Read only**

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### baseUIEvent.tiltY : `number`

**Read only**

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### baseUIEvent.twist : `number`

**Read only**

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### baseUIEvent.clientX : `number`

**Read only**

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### baseUIEvent.clientY : `number`

**Read only**

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### baseUIEvent.offsetX : `number`

**Read only**

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### baseUIEvent.offsetY : `number`

**Read only**

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### baseUIEvent.pageX : `number`

**Read only**

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### baseUIEvent.pageY : `number`

**Read only**

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### baseUIEvent.screenX : `number`

**Read only**

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### baseUIEvent.screenY : `number`

**Read only**

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### baseUIEvent.movementX : `number`

**Read only**

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### baseUIEvent.movementY : `number`

**Read only**

<a name="baseuievent-button" id="baseuievent-button"></a>

### baseUIEvent.button : `number`

**Read only**

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### baseUIEvent.buttons

**Read only**

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### baseUIEvent.detail

**Read only**

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### baseUIEvent.pointerType

**Read only**

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### baseUIEvent.altKey

**Read only**

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### baseUIEvent.shiftKey

**Read only**

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### baseUIEvent.metaKey

**Read only**

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### baseUIEvent.ctrlKey

**Read only**

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### baseUIEvent.isPrimary

**Read only**

<a name="baseuievent-which" id="baseuievent-which"></a>

### baseUIEvent.which

**Read only**

<a name="event-type" id="event-type"></a>

### baseUIEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### baseUIEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### baseUIEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### baseUIEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### baseUIEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### baseUIEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### baseUIEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### baseUIEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### baseUIEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### baseUIEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### baseUIEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### baseUIEvent.stopPropagation()

<a name="baseuievent-wheelevent-deltamove" id="baseuievent-wheelevent-deltamove"></a>

### BaseUIEvent.WheelEvent#deltaMove : `number`

**Read only**
