## Event
**Signature:** Event

**Kind**: global class  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Event  

* [Event](#event)
    * [new Event(eventType, eventInit)](#new-event-new)
    * _instance_
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
    * _static_
        * [.NONE](#eventnone)
        * [.CAPTURING_PHASE](#eventcapturing-phase)
        * [.AT_TARGET](#eventat-target)
        * [.BUBBLING_PHASE](#eventbubbling-phase)

### new Event
**Signature:** new Event(eventType, eventInit)

Creates an instance of Event.


| Param | Type |
| --- | --- |
| eventType | `*` | 
| eventInit | `*` | 

### event.type
**Signature:** event.type

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.isTrusted
**Signature:** event.isTrusted : `boolean`

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.target
**Signature:** event.target : [`Node`](#node)

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.currentTarget
**Signature:** event.currentTarget : [`Node`](#node)

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.bubbles
**Signature:** event.bubbles : `boolean`

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.cancelable
**Signature:** event.cancelable : `boolean`

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.eventPhase
**Signature:** event.eventPhase

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.defaultPrevented
**Signature:** event.defaultPrevented : `boolean`

**Kind**: instance property of [`Event`](#event)  
**Read only**: true  
### event.returnValue
**Signature:** event.returnValue : `*`

**Kind**: instance property of [`Event`](#event)  
### event.preventDefault
**Signature:** event.preventDefault()

**Kind**: instance method of [`Event`](#event)  
### event.stopImmediatePropagation
**Signature:** event.stopImmediatePropagation()

**Kind**: instance method of [`Event`](#event)  
### event.stopPropagation
**Signature:** event.stopPropagation()

**Kind**: instance method of [`Event`](#event)  
### Event.NONE
**Signature:** Event.NONE

**Kind**: static property of [`Event`](#event)  
### Event.CAPTURING_PHASE
**Signature:** Event.CAPTURING_PHASE

**Kind**: static property of [`Event`](#event)  
### Event.AT_TARGET
**Signature:** Event.AT_TARGET

**Kind**: static property of [`Event`](#event)  
### Event.BUBBLING_PHASE
**Signature:** Event.BUBBLING_PHASE

**Kind**: static property of [`Event`](#event)  
