
<a name="messageevent" id="messageevent"></a>

## MessageEvent

**Extends**: [`Event`](#event)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent

* [MessageEvent](#MessageEvent)
    * [new MessageEvent(data, origin, source, eventInit)](#new-messageevent-new)
    * [.data](#messageevent-data)
    * [.origin](#messageevent-origin)
    * [.source](#messageevent-source)
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

<a name="new-messageevent-new" id="new-messageevent-new"></a>

### new MessageEvent(data, origin, source, eventInit)
Creates an instance of MessageEvent.

| Param | Type |
| --- | --- |
| data | `\*` |
| origin | `\*` |
| source | `\*` |
| eventInit | `\*` |

<a name="messageevent-data" id="messageevent-data"></a>

### messageEvent.data

**Returns**: `string` - returns the data sent by the server.

<a name="messageevent-origin" id="messageevent-origin"></a>

### messageEvent.origin

**Returns**: `string` - returns the origin of the message.

<a name="messageevent-source" id="messageevent-source"></a>

### messageEvent.source

**Returns**: `string` - returns the string indicating the messageEventSource.

<a name="event-type" id="event-type"></a>

### messageEvent.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### messageEvent.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### messageEvent.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### messageEvent.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### messageEvent.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### messageEvent.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### messageEvent.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### messageEvent.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### messageEvent.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### messageEvent.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### messageEvent.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### messageEvent.stopPropagation()

