## MessageEvent
**Signature:** MessageEvent ⇐ [`Event`](#event)

**Kind**: global class  
**Extends**: [`Event`](#event)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent  

* [MessageEvent](#messageevent) ⇐ [`Event`](#event)
    * [new MessageEvent(data, origin, source, eventInit)](#new-messageevent-new)
    * [.data](#messageevent-data) ⇒ `string`
    * [.origin](#messageevent-origin) ⇒ `string`
    * [.source](#messageevent-source) ⇒ `string`
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

### new MessageEvent
**Signature:** new MessageEvent(data, origin, source, eventInit)

Creates an instance of MessageEvent.


| Param | Type |
| --- | --- |
| data | `*` | 
| origin | `*` | 
| source | `*` | 
| eventInit | `*` | 

### messageEvent.data
**Signature:** messageEvent.data ⇒ `string`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the data sent by the server.  
### messageEvent.origin
**Signature:** messageEvent.origin ⇒ `string`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the origin of the message.  
### messageEvent.source
**Signature:** messageEvent.source ⇒ `string`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the string indicating the messageEventSource.  
### messageEvent.type
**Signature:** messageEvent.type

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.isTrusted
**Signature:** messageEvent.isTrusted : `boolean`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.target
**Signature:** messageEvent.target : [`Node`](#node)

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.currentTarget
**Signature:** messageEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.bubbles
**Signature:** messageEvent.bubbles : `boolean`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.cancelable
**Signature:** messageEvent.cancelable : `boolean`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.eventPhase
**Signature:** messageEvent.eventPhase

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.defaultPrevented
**Signature:** messageEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  
### messageEvent.returnValue
**Signature:** messageEvent.returnValue : `*`

**Kind**: instance property of [`MessageEvent`](#messageevent)  
### messageEvent.preventDefault
**Signature:** messageEvent.preventDefault()

**Kind**: instance method of [`MessageEvent`](#messageevent)  
### messageEvent.stopImmediatePropagation
**Signature:** messageEvent.stopImmediatePropagation()

**Kind**: instance method of [`MessageEvent`](#messageevent)  
### messageEvent.stopPropagation
**Signature:** messageEvent.stopPropagation()

**Kind**: instance method of [`MessageEvent`](#messageevent)  
