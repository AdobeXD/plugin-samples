
<a name="closeevent" id="closeevent"></a>

## CloseEvent ⇐ [`Event`](#event)
**Kind**: global class  
**Extends**: [`Event`](#event)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent  

* [CloseEvent](#closeevent) ⇐ [`Event`](#event)
    * [new CloseEvent(code, reason, wasClean)](#new-closeevent-new)
    * [.code](#closeevent-code) ⇒ `number`
    * [.reason](#closeevent-reason) ⇒ `number`
    * [.wasClean](#closeevent-wasclean) ⇒ `boolean`
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


<a name="new-closeevent-new" id="new-closeevent-new"></a>

### new CloseEvent(code, reason, wasClean)
Creates an instance of CloseEvent.


| Param | Type |
| --- | --- |
| code | `\*` | 
| reason | `\*` | 
| wasClean | `\*` | 


<a name="closeevent-code" id="closeevent-code"></a>

### closeEvent.code ⇒ `number`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `number` - returns the close code sent by the server.  

<a name="closeevent-reason" id="closeevent-reason"></a>

### closeEvent.reason ⇒ `number`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `number` - returns the string indicating the reason the server closed the connection..  

<a name="closeevent-wasclean" id="closeevent-wasclean"></a>

### closeEvent.wasClean ⇒ `boolean`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.  

<a name="event-type" id="event-type"></a>

### closeEvent.type
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### closeEvent.isTrusted : `boolean`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### closeEvent.target : [`Node`](#node)
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### closeEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### closeEvent.bubbles : `boolean`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### closeEvent.cancelable : `boolean`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### closeEvent.eventPhase
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### closeEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### closeEvent.returnValue : `\*`
**Kind**: instance property of [`CloseEvent`](#closeevent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### closeEvent.preventDefault()
**Kind**: instance method of [`CloseEvent`](#closeevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### closeEvent.stopImmediatePropagation()
**Kind**: instance method of [`CloseEvent`](#closeevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### closeEvent.stopPropagation()
**Kind**: instance method of [`CloseEvent`](#closeevent)  
