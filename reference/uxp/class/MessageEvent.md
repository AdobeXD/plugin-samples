
<a name="messageevent" id="messageevent"></a>

## MessageEvent ⇐ [`Event`](#event)
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

### messageEvent.data ⇒ `string`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the data sent by the server.  

<a name="messageevent-origin" id="messageevent-origin"></a>

### messageEvent.origin ⇒ `string`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the origin of the message.  

<a name="messageevent-source" id="messageevent-source"></a>

### messageEvent.source ⇒ `string`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Returns**: `string` - returns the string indicating the messageEventSource.  

<a name="event-type" id="event-type"></a>

### messageEvent.type
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### messageEvent.isTrusted : `boolean`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### messageEvent.target : [`Node`](#node)
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### messageEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### messageEvent.bubbles : `boolean`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### messageEvent.cancelable : `boolean`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### messageEvent.eventPhase
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### messageEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`MessageEvent`](#messageevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### messageEvent.returnValue : `\*`
**Kind**: instance property of [`MessageEvent`](#messageevent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### messageEvent.preventDefault()
**Kind**: instance method of [`MessageEvent`](#messageevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### messageEvent.stopImmediatePropagation()
**Kind**: instance method of [`MessageEvent`](#messageevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### messageEvent.stopPropagation()
**Kind**: instance method of [`MessageEvent`](#messageevent)  
