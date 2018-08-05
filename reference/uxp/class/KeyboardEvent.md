## KeyboardEvent
**Signature:** KeyboardEvent ⇐ [`Event`](#event)

**Kind**: global class  
**Extends**: [`Event`](#event)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent  

* [KeyboardEvent](#keyboardevent) ⇐ [`Event`](#event)
    * [new KeyboardEvent(type, eventInit)](#new-keyboardevent-new)
    * [.altKey](#keyboardevent-altkey)
    * [.ctrlKey](#keyboardevent-ctrlkey)
    * [.metaKey](#keyboardevent-metakey)
    * [.shiftKey](#keyboardevent-shiftkey)
    * [.code](#keyboardevent-code)
    * [.keyCode](#keyboardevent-keycode)
    * [.key](#keyboardevent-key)
    * [.location](#keyboardevent-location)
    * [.repeat](#keyboardevent-repeat)
    * [.type](#event-type)
    * [.isTrusted](#event-istrusted) : `boolean`
    * [.target](#event-target) : [`Node`](#node)
    * [.currentTarget](#event-currenttarget) : [`Node`](#node)
    * [.bubbles](#event-bubbles) : `boolean`
    * [.cancelable](#event-cancelable) : `boolean`
    * [.eventPhase](#event-eventphase)
    * [.defaultPrevented](#event-defaultprevented) : `boolean`
    * [.returnValue](#event-returnvalue) : `*`
    * [.getModifierState(keyArgs)](#keyboardevent-getmodifierstate) ⇒ `boolean`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)

### new KeyboardEvent
**Signature:** new KeyboardEvent(type, eventInit)

Creates an instance of KeyboardEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 

### keyboardEvent.altKey
**Signature:** keyboardEvent.altKey

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.ctrlKey
**Signature:** keyboardEvent.ctrlKey

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.metaKey
**Signature:** keyboardEvent.metaKey

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.shiftKey
**Signature:** keyboardEvent.shiftKey

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.code
**Signature:** keyboardEvent.code

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.keyCode
**Signature:** keyboardEvent.keyCode

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.key
**Signature:** keyboardEvent.key

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.location
**Signature:** keyboardEvent.location

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.repeat
**Signature:** keyboardEvent.repeat

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.type
**Signature:** keyboardEvent.type

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.isTrusted
**Signature:** keyboardEvent.isTrusted : `boolean`

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.target
**Signature:** keyboardEvent.target : [`Node`](#node)

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.currentTarget
**Signature:** keyboardEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.bubbles
**Signature:** keyboardEvent.bubbles : `boolean`

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.cancelable
**Signature:** keyboardEvent.cancelable : `boolean`

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.eventPhase
**Signature:** keyboardEvent.eventPhase

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.defaultPrevented
**Signature:** keyboardEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  
### keyboardEvent.returnValue
**Signature:** keyboardEvent.returnValue : `*`

**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
### keyboardEvent.getModifierState
**Signature:** keyboardEvent.getModifierState(keyArgs) ⇒ `boolean`

**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  

| Param | Type |
| --- | --- |
| keyArgs | `string` | 

### keyboardEvent.preventDefault
**Signature:** keyboardEvent.preventDefault()

**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  
### keyboardEvent.stopImmediatePropagation
**Signature:** keyboardEvent.stopImmediatePropagation()

**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  
### keyboardEvent.stopPropagation
**Signature:** keyboardEvent.stopPropagation()

**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  
