
<a name="errorevent" id="errorevent"></a>

## ErrorEvent

**Extends**: [`Event`](#event)

**See**

- https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent
- https://html.spec.whatwg.org/#the-errorevent-interface

* [ErrorEvent](#ErrorEvent)
    * [new ErrorEvent(typeArg, [eventInit])](#new-errorevent-new)
    * [.message](#errorevent-message)
    * [.filename](#errorevent-filename)
    * [.lineno](#errorevent-lineno)
    * [.colno](#errorevent-colno)
    * [.error](#errorevent-error)
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

<a name="new-errorevent-new" id="new-errorevent-new"></a>

### new ErrorEvent(typeArg, [eventInit])
Creates an instance of ErrorEvent.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `\*` |  |
| [eventInit] | `\*` | <code>{}</code> |

<a name="errorevent-message" id="errorevent-message"></a>

### errorEvent.message

**Read only**

<a name="errorevent-filename" id="errorevent-filename"></a>

### errorEvent.filename

**Read only**

<a name="errorevent-lineno" id="errorevent-lineno"></a>

### errorEvent.lineno

**Read only**

<a name="errorevent-colno" id="errorevent-colno"></a>

### errorEvent.colno

**Read only**

<a name="errorevent-error" id="errorevent-error"></a>

### errorEvent.error

**Read only**

<a name="event-type" id="event-type"></a>

### errorEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### errorEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### errorEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### errorEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### errorEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### errorEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### errorEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### errorEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### errorEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### errorEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### errorEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### errorEvent.stopPropagation()

