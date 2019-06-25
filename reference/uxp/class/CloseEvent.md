
<a name="closeevent" id="closeevent"></a>

## CloseEvent

**Extends**: [`Event`](#event)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent

* [CloseEvent](#CloseEvent)
    * [new CloseEvent(code, reason, wasClean)](#new-closeevent-new)
    * [.code](#closeevent-code)
    * [.reason](#closeevent-reason)
    * [.wasClean](#closeevent-wasclean)
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

<a name="new-closeevent-new" id="new-closeevent-new"></a>

### new CloseEvent(code, reason, wasClean)
Creates an instance of CloseEvent.

| Param | Type |
| --- | --- |
| code | `\*` |
| reason | `\*` |
| wasClean | `\*` |

<a name="closeevent-code" id="closeevent-code"></a>

### closeEvent.code

**Returns**: `number` - returns the close code sent by the server.

<a name="closeevent-reason" id="closeevent-reason"></a>

### closeEvent.reason

**Returns**: `number` - returns the string indicating the reason the server closed the connection..

<a name="closeevent-wasclean" id="closeevent-wasclean"></a>

### closeEvent.wasClean

**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.

<a name="event-type" id="event-type"></a>

### closeEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### closeEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### closeEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### closeEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### closeEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### closeEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### closeEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### closeEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### closeEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### closeEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### closeEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### closeEvent.stopPropagation()

