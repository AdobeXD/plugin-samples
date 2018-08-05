## CloseEvent
**Signature:** CloseEvent ⇐ [`Event`](#event)

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
    * [.returnValue](#event-returnvalue) : `*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

### new CloseEvent
**Signature:** new CloseEvent(code, reason, wasClean)

Creates an instance of CloseEvent.


| Param | Type |
| --- | --- |
| code | `*` | 
| reason | `*` | 
| wasClean | `*` | 

### closeEvent.code
**Signature:** closeEvent.code ⇒ `number`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `number` - returns the close code sent by the server.  
### closeEvent.reason
**Signature:** closeEvent.reason ⇒ `number`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `number` - returns the string indicating the reason the server closed the connection..  
### closeEvent.wasClean
**Signature:** closeEvent.wasClean ⇒ `boolean`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.  
### closeEvent.type
**Signature:** closeEvent.type

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.isTrusted
**Signature:** closeEvent.isTrusted : `boolean`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.target
**Signature:** closeEvent.target : [`Node`](#node)

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.currentTarget
**Signature:** closeEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.bubbles
**Signature:** closeEvent.bubbles : `boolean`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.cancelable
**Signature:** closeEvent.cancelable : `boolean`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.eventPhase
**Signature:** closeEvent.eventPhase

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.defaultPrevented
**Signature:** closeEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
**Read only**: true  
### closeEvent.returnValue
**Signature:** closeEvent.returnValue : `*`

**Kind**: instance property of [`CloseEvent`](#closeevent)  
### closeEvent.preventDefault
**Signature:** closeEvent.preventDefault()

**Kind**: instance method of [`CloseEvent`](#closeevent)  
### closeEvent.stopImmediatePropagation
**Signature:** closeEvent.stopImmediatePropagation()

**Kind**: instance method of [`CloseEvent`](#closeevent)  
### closeEvent.stopPropagation
**Signature:** closeEvent.stopPropagation()

**Kind**: instance method of [`CloseEvent`](#closeevent)  
