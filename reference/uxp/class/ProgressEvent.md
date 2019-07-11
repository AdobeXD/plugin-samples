
<a name="progressevent" id="progressevent"></a>

## ProgressEvent

**Extends**: [`Event`](#event)

**See**

- https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent
- https://xhr.spec.whatwg.org/#progressevent

* [ProgressEvent](#ProgressEvent)
    * _instance_
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
        * [.module.exports](#progressevent-module-exports)
            * [new module.exports(typeArg, [eventInit])](#new-progressevent-module-exports-new)
        * [.lengthComputable](#progressevent-lengthcomputable)
        * [.loaded](#progressevent-loaded)
        * [.total](#progressevent-total)
        * [.initEvent(typeArg, bubbles, cancelable)](#progressevent-initevent)

<a name="event-type" id="event-type"></a>

### progressEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### progressEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### progressEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### progressEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### progressEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### progressEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### progressEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### progressEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### progressEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### progressEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### progressEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### progressEvent.stopPropagation()

<a name="progressevent-module-exports" id="progressevent-module-exports"></a>

### ProgressEvent.module.exports

<a name="new-progressevent-module-exports-new" id="new-progressevent-module-exports-new"></a>

#### new module.exports(typeArg, [eventInit])
Creates an instance of ProgressEvent.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `\*` |  |
| [eventInit] | `\*` | <code>{}</code> |

<a name="progressevent-lengthcomputable" id="progressevent-lengthcomputable"></a>

### ProgressEvent.lengthComputable

**Read only**

<a name="progressevent-loaded" id="progressevent-loaded"></a>

### ProgressEvent.loaded

**Read only**

<a name="progressevent-total" id="progressevent-total"></a>

### ProgressEvent.total

**Read only**

<a name="progressevent-initevent" id="progressevent-initevent"></a>

### ProgressEvent.initEvent(typeArg, bubbles, cancelable)

| Param | Type |
| --- | --- |
| typeArg | `\*` |
| bubbles | `\*` |
| cancelable | `\*` |

