## ProgressEvent
**Signature:** ProgressEvent ⇐ [`Event`](#event)

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
        * [.returnValue](#event-returnvalue) : `*`
        * [.preventDefault()](#event-preventdefault)
        * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
        * [.stopPropagation()](#event-stoppropagation)
    * _static_
        * [.module.exports](#progresseventmoduleexports)
            * [new module.exports(typeArg, [eventInit])](#new_ProgressEvent.module.exports_new)
        * [.lengthComputable](#progresseventlengthcomputable)
        * [.loaded](#progresseventloaded)
        * [.total](#progresseventtotal)
        * [.initEvent(typeArg, bubbles, cancelable)](#progresseventinitevent)

### progressEvent.type
**Signature:** progressEvent.type

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.isTrusted
**Signature:** progressEvent.isTrusted : `boolean`

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.target
**Signature:** progressEvent.target : [`Node`](#node)

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.currentTarget
**Signature:** progressEvent.currentTarget : [`Node`](#node)

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.bubbles
**Signature:** progressEvent.bubbles : `boolean`

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.cancelable
**Signature:** progressEvent.cancelable : `boolean`

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.eventPhase
**Signature:** progressEvent.eventPhase

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.defaultPrevented
**Signature:** progressEvent.defaultPrevented : `boolean`

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### progressEvent.returnValue
**Signature:** progressEvent.returnValue : `*`

**Kind**: instance property of [`ProgressEvent`](#progressevent)  
### progressEvent.preventDefault
**Signature:** progressEvent.preventDefault()

**Kind**: instance method of [`ProgressEvent`](#progressevent)  
### progressEvent.stopImmediatePropagation
**Signature:** progressEvent.stopImmediatePropagation()

**Kind**: instance method of [`ProgressEvent`](#progressevent)  
### progressEvent.stopPropagation
**Signature:** progressEvent.stopPropagation()

**Kind**: instance method of [`ProgressEvent`](#progressevent)  
### ProgressEvent.module.exports
**Signature:** ProgressEvent.module.exports

**Kind**: static class of [`ProgressEvent`](#progressevent)  
#### new module.exports
**Signature:** new module.exports(typeArg, [eventInit])

Creates an instance of ProgressEvent.


| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  | 
| [eventInit] | `*` | <code>{}</code> | 

### ProgressEvent.lengthComputable
**Signature:** ProgressEvent.lengthComputable

**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### ProgressEvent.loaded
**Signature:** ProgressEvent.loaded

**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### ProgressEvent.total
**Signature:** ProgressEvent.total

**Kind**: static property of [`ProgressEvent`](#progressevent)  
**Read only**: true  
### ProgressEvent.initEvent
**Signature:** ProgressEvent.initEvent(typeArg, bubbles, cancelable)

**Kind**: static method of [`ProgressEvent`](#progressevent)  

| Param | Type |
| --- | --- |
| typeArg | `*` | 
| bubbles | `*` | 
| cancelable | `*` | 

