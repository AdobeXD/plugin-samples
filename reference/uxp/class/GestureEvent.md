
<a name="gestureevent" id="gestureevent"></a>

## GestureEvent

**Extends**: [`BaseUIEvent`](#baseuievent)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/GestureEvent

* [GestureEvent](#GestureEvent)
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

<a name="new-gestureevent-new" id="new-gestureevent-new"></a>

### new GestureEvent(type, eventInit)
Creates an instance of GestureEvent.

| Param | Type |
| --- | --- |
| type | `\*` |
| eventInit | `\*` |

<a name="gestureevent-expansion" id="gestureevent-expansion"></a>

### gestureEvent.expansion : `number`

**Read only**

<a name="gestureevent-rotation" id="gestureevent-rotation"></a>

### gestureEvent.rotation : `number`

**Read only**

<a name="gestureevent-scale" id="gestureevent-scale"></a>

### gestureEvent.scale : `number`

**Read only**

<a name="gestureevent-translationx" id="gestureevent-translationx"></a>

### gestureEvent.translationX : `number`

**Read only**

<a name="gestureevent-translationy" id="gestureevent-translationy"></a>

### gestureEvent.translationY : `number`

**Read only**

<a name="gestureevent-velocityangular" id="gestureevent-velocityangular"></a>

### gestureEvent.velocityAngular : `number`

**Read only**

<a name="gestureevent-velocityexpansion" id="gestureevent-velocityexpansion"></a>

### gestureEvent.velocityExpansion : `number`

**Read only**

<a name="gestureevent-velocityx" id="gestureevent-velocityx"></a>

### gestureEvent.velocityX : `number`

**Read only**

<a name="gestureevent-velocityy" id="gestureevent-velocityy"></a>

### gestureEvent.velocityY : `number`

**Read only**

<a name="baseuievent-pointerid" id="baseuievent-pointerid"></a>

### gestureEvent.pointerId

**Read only**

<a name="baseuievent-width" id="baseuievent-width"></a>

### gestureEvent.width : `number`

**Read only**

<a name="baseuievent-height" id="baseuievent-height"></a>

### gestureEvent.height : `number`

**Read only**

<a name="baseuievent-pressure" id="baseuievent-pressure"></a>

### gestureEvent.pressure : `number`

**Read only**

<a name="baseuievent-tangentialpressure" id="baseuievent-tangentialpressure"></a>

### gestureEvent.tangentialPressure : `number`

**Read only**

<a name="baseuievent-tiltx" id="baseuievent-tiltx"></a>

### gestureEvent.tiltX : `number`

**Read only**

<a name="baseuievent-tilty" id="baseuievent-tilty"></a>

### gestureEvent.tiltY : `number`

**Read only**

<a name="baseuievent-twist" id="baseuievent-twist"></a>

### gestureEvent.twist : `number`

**Read only**

<a name="baseuievent-clientx" id="baseuievent-clientx"></a>

### gestureEvent.clientX : `number`

**Read only**

<a name="baseuievent-clienty" id="baseuievent-clienty"></a>

### gestureEvent.clientY : `number`

**Read only**

<a name="baseuievent-offsetx" id="baseuievent-offsetx"></a>

### gestureEvent.offsetX : `number`

**Read only**

<a name="baseuievent-offsety" id="baseuievent-offsety"></a>

### gestureEvent.offsetY : `number`

**Read only**

<a name="baseuievent-pagex" id="baseuievent-pagex"></a>

### gestureEvent.pageX : `number`

**Read only**

<a name="baseuievent-pagey" id="baseuievent-pagey"></a>

### gestureEvent.pageY : `number`

**Read only**

<a name="baseuievent-screenx" id="baseuievent-screenx"></a>

### gestureEvent.screenX : `number`

**Read only**

<a name="baseuievent-screeny" id="baseuievent-screeny"></a>

### gestureEvent.screenY : `number`

**Read only**

<a name="baseuievent-movementx" id="baseuievent-movementx"></a>

### gestureEvent.movementX : `number`

**Read only**

<a name="baseuievent-movementy" id="baseuievent-movementy"></a>

### gestureEvent.movementY : `number`

**Read only**

<a name="baseuievent-button" id="baseuievent-button"></a>

### gestureEvent.button : `number`

**Read only**

<a name="baseuievent-buttons" id="baseuievent-buttons"></a>

### gestureEvent.buttons

**Read only**

<a name="baseuievent-detail" id="baseuievent-detail"></a>

### gestureEvent.detail

**Read only**

<a name="baseuievent-pointertype" id="baseuievent-pointertype"></a>

### gestureEvent.pointerType

**Read only**

<a name="baseuievent-altkey" id="baseuievent-altkey"></a>

### gestureEvent.altKey

**Read only**

<a name="baseuievent-shiftkey" id="baseuievent-shiftkey"></a>

### gestureEvent.shiftKey

**Read only**

<a name="baseuievent-metakey" id="baseuievent-metakey"></a>

### gestureEvent.metaKey

**Read only**

<a name="baseuievent-ctrlkey" id="baseuievent-ctrlkey"></a>

### gestureEvent.ctrlKey

**Read only**

<a name="baseuievent-isprimary" id="baseuievent-isprimary"></a>

### gestureEvent.isPrimary

**Read only**

<a name="baseuievent-which" id="baseuievent-which"></a>

### gestureEvent.which

**Read only**

<a name="event-type" id="event-type"></a>

### gestureEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### gestureEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### gestureEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### gestureEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### gestureEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### gestureEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### gestureEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### gestureEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### gestureEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### gestureEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### gestureEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### gestureEvent.stopPropagation()

