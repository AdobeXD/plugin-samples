
<a name="keyboardevent" id="keyboardevent"></a>

## KeyboardEvent ⇐ [`Event`](#event)
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
    * [.returnValue](#event-returnvalue) : `\*`
    * [.getModifierState(keyArgs)](#keyboardevent-getmodifierstate) ⇒ `boolean`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)


<a name="new-keyboardevent-new" id="new-keyboardevent-new"></a>

### new KeyboardEvent(type, eventInit)
Creates an instance of KeyboardEvent.


| Param | Type |
| --- | --- |
| type | `\*` | 
| eventInit | `\*` | 


<a name="keyboardevent-altkey" id="keyboardevent-altkey"></a>

### keyboardEvent.altKey
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-ctrlkey" id="keyboardevent-ctrlkey"></a>

### keyboardEvent.ctrlKey
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-metakey" id="keyboardevent-metakey"></a>

### keyboardEvent.metaKey
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-shiftkey" id="keyboardevent-shiftkey"></a>

### keyboardEvent.shiftKey
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-code" id="keyboardevent-code"></a>

### keyboardEvent.code
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-keycode" id="keyboardevent-keycode"></a>

### keyboardEvent.keyCode
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-key" id="keyboardevent-key"></a>

### keyboardEvent.key
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-location" id="keyboardevent-location"></a>

### keyboardEvent.location
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="keyboardevent-repeat" id="keyboardevent-repeat"></a>

### keyboardEvent.repeat
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-type" id="event-type"></a>

### keyboardEvent.type
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### keyboardEvent.isTrusted : `boolean`
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### keyboardEvent.target : [`Node`](#node)
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### keyboardEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### keyboardEvent.bubbles : `boolean`
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### keyboardEvent.cancelable : `boolean`
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### keyboardEvent.eventPhase
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### keyboardEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### keyboardEvent.returnValue : `\*`
**Kind**: instance property of [`KeyboardEvent`](#keyboardevent)  

<a name="keyboardevent-getmodifierstate" id="keyboardevent-getmodifierstate"></a>

### keyboardEvent.getModifierState(keyArgs) ⇒ `boolean`
**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  

| Param | Type |
| --- | --- |
| keyArgs | `string` | 


<a name="event-preventdefault" id="event-preventdefault"></a>

### keyboardEvent.preventDefault()
**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### keyboardEvent.stopImmediatePropagation()
**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### keyboardEvent.stopPropagation()
**Kind**: instance method of [`KeyboardEvent`](#keyboardevent)  
