
<a name="progressevent" id="progressevent"></a>

## ProgressEvent ⇐ [`Event`](#event)
**Kind**: global class  
**Extends**: [`Event`](#event)  
**Access**: public  
**See**

- https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent
- https://xhr.spec.whatwg.org/#progressevent


* [ProgressEvent](#progressevent) ⇐ [`Event`](#event)
    * _instance_
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
    * _static_
        * [.module.exports](#progressevent-module-exports)
            * [new module.exports(typeArg, [eventInit])](#new_ProgressEvent.module.exports_new)
        * [.lengthComputable](#progressevent-lengthcomputable)
        * [.loaded](#progressevent-loaded)
        * [.total](#progressevent-total)
        * [.initEvent(typeArg, bubbles, cancelable)](#progressevent-initevent)


<a name="event-type" id="event-type"></a>

### progressEvent.type
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-istrusted" id="event-istrusted"></a>

### progressEvent.isTrusted : `boolean`
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-target" id="event-target"></a>

### progressEvent.target : [`Node`](#node)
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-currenttarget" id="event-currenttarget"></a>

### progressEvent.currentTarget : [`Node`](#node)
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-bubbles" id="event-bubbles"></a>

### progressEvent.bubbles : `boolean`
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-cancelable" id="event-cancelable"></a>

### progressEvent.cancelable : `boolean`
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-eventphase" id="event-eventphase"></a>

### progressEvent.eventPhase
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-defaultprevented" id="event-defaultprevented"></a>

### progressEvent.defaultPrevented : `boolean`
**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="event-returnvalue" id="event-returnvalue"></a>

### progressEvent.returnValue : `\*`
**Kind**: instance property of [`ProgressEvent`](#progressevent)  

<a name="event-preventdefault" id="event-preventdefault"></a>

### progressEvent.preventDefault()
**Kind**: instance method of [`ProgressEvent`](#progressevent)  

<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

### progressEvent.stopImmediatePropagation()
**Kind**: instance method of [`ProgressEvent`](#progressevent)  

<a name="event-stoppropagation" id="event-stoppropagation"></a>

### progressEvent.stopPropagation()
**Kind**: instance method of [`ProgressEvent`](#progressevent)  

<a name="progressevent-module-exports" id="progressevent-module-exports"></a>

### ProgressEvent.module.exports
**Kind**: static class of [`ProgressEvent`](#progressevent)  

<a name="new-progressevent-module-exports-new" id="new-progressevent-module-exports-new"></a>

#### new module.exports(typeArg, [eventInit])
Creates an instance of ProgressEvent.


| Param | Type | Default |
| --- | --- | --- |
| typeArg | `\*` |  | 
| [eventInit] | `\*` | <code>{}</code> | 


<a name="progressevent-lengthcomputable" id="progressevent-lengthcomputable"></a>

### ProgressEvent.lengthComputable
**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="progressevent-loaded" id="progressevent-loaded"></a>

### ProgressEvent.loaded
**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="progressevent-total" id="progressevent-total"></a>

### ProgressEvent.total
**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  

<a name="progressevent-initevent" id="progressevent-initevent"></a>

### ProgressEvent.initEvent(typeArg, bubbles, cancelable)
**Kind**: static method of [`ProgressEvent`](#progressevent)  

| Param | Type |
| --- | --- |
| typeArg | `\*` | 
| bubbles | `\*` | 
| cancelable | `\*` | 

