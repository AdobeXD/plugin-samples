
<a name="event" id="event"></a>

## Event

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Event

* [Event](#event)
    * [new Event(eventType, eventInit)](#new-event-new)
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
        * [.NONE](#event-none)
        * [.CAPTURING_PHASE](#event-capturing-phase)
        * [.AT_TARGET](#event-at-target)
        * [.BUBBLING_PHASE](#event-bubbling-phase)

<a name="new-event-new" id="new-event-new"></a>

### new Event(eventType, eventInit)
Creates an instance of Event.

| Param | Type |
| --- | --- |
| eventType | `\*` |
| eventInit | `\*` |

<a name="event-type" id="event-type"></a>

### event.type

**Read only**

<a name="event-istrusted" id="event-istrusted"></a>

### event.isTrusted : `boolean`

**Read only**

<a name="event-target" id="event-target"></a>

### event.target : [`Node`](#node)

**Read only**

<a name="event-currenttarget" id="event-currenttarget"></a>

### event.currentTarget : [`Node`](#node)

**Read only**

<a name="event-bubbles" id="event-bubbles"></a>

### event.bubbles : `boolean`

**Read only**

<a name="event-cancelable" id="event-cancelable"></a>

### event.cancelable : `boolean`

**Read only**

<a name="event-eventphase" id="event-eventphase"></a>

### event.eventPhase

**Read only**

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### event.defaultPrevented : `boolean`

**Read only**

<a name="event-returnvalue" id="event-returnvalue"></a>

### event.returnValue : `\*`

<a name="event-preventdefault" id="event-preventdefault"></a>

### event.preventDefault()

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### event.stopImmediatePropagation()

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### event.stopPropagation()

<a name="event-none" id="event-none"></a>

### Event.NONE

<a name="event-capturing-phase" id="event-capturing-phase"></a>

### Event.CAPTURING\_PHASE

<a name="event-at-target" id="event-at-target"></a>

### Event.AT\_TARGET

<a name="event-bubbling-phase" id="event-bubbling-phase"></a>

### Event.BUBBLING\_PHASE

