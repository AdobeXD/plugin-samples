## Attr
**Signature:** Attr ⇐ [`Node`](#node)

**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Attr  

* [Attr](#attr) ⇐ [`Node`](#node)
    * [new Attr(document, nodeName)](#new-attr-new)
    * [.nodeName](#attr-nodename) : `string`
    * [.localName](#attr-localname) : `string`
    * [.name](#attr-name) : `string`
    * [.specified](#attr-specified) : `boolean`
    * [.value](#attr-value) : `*`
    * [.nodeType](#attr-nodetype) : `number`
    * [.nodeValue](#attr-nodevalue) : `*`
    * [.ownerElement](#attr-ownerelement) : [`Element`](#element)
    * [.contentEditable](#node-contenteditable)
    * [.isConnected](#node-isconnected) : `boolean`
    * [.parentNode](#node-parentnode) : [`Node`](#node)
    * [.firstChild](#node-firstchild) : [`Node`](#node)
    * [.lastChild](#node-lastchild) : [`Node`](#node)
    * [.previousSibling](#node-previoussibling) : [`Node`](#node)
    * [.nextSibling](#node-nextsibling) : [`Node`](#node)
    * [.firstElementChild](#node-firstelementchild) : [`Node`](#node)
    * [.lastElementChild](#node-lastelementchild) : [`Node`](#node)
    * [.previousElementSibling](#node-previouselementsibling) : [`Node`](#node)
    * [.nextElementSibling](#node-nextelementsibling) : [`Node`](#node)
    * [.textContent](#node-textcontent) : `string`
    * [.childNodes](#node-childnodes) : [`NodeList`](#nodelist)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.offsetParent](#node-offsetparent)
    * [.remove()](#attr-remove)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
    * [.cloneNode(deep)](#node-clonenode) ⇒ [`Node`](#node)
    * [.appendChild(child)](#node-appendchild) ⇒ [`Node`](#node)
    * [.insertBefore(child, before)](#node-insertbefore) ⇒ [`Node`](#node)
    * [.replaceChild(newChild, oldChild)](#node-replacechild) ⇒ [`Node`](#node)
    * [.removeChild(child)](#node-removechild) ⇒ [`Node`](#node)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.addEventListener(eventName, callback, [capture])](#EventTarget+addEventListener)
    * [.removeEventListener(eventName, callback, [capture])](#EventTarget+removeEventListener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)

### new Attr
**Signature:** new Attr(document, nodeName)

Creates an instance of Attr.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) | 
| nodeName | `string` | 

### attr.nodeName
**Signature:** attr.nodeName : `string`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.localName
**Signature:** attr.localName : `string`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.name
**Signature:** attr.name : `string`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.specified
**Signature:** attr.specified : `boolean`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.value
**Signature:** attr.value : `*`

**Kind**: instance property of [`Attr`](#attr)  
### attr.nodeType
**Signature:** attr.nodeType : `number`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.nodeValue
**Signature:** attr.nodeValue : `*`

**Kind**: instance property of [`Attr`](#attr)  
### attr.ownerElement
**Signature:** attr.ownerElement : [`Element`](#element)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.contentEditable
**Signature:** attr.contentEditable

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.isConnected
**Signature:** attr.isConnected : `boolean`

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.parentNode
**Signature:** attr.parentNode : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.firstChild
**Signature:** attr.firstChild : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.lastChild
**Signature:** attr.lastChild : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.previousSibling
**Signature:** attr.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.nextSibling
**Signature:** attr.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.firstElementChild
**Signature:** attr.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.lastElementChild
**Signature:** attr.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.previousElementSibling
**Signature:** attr.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.nextElementSibling
**Signature:** attr.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.textContent
**Signature:** attr.textContent : `string`

**Kind**: instance property of [`Attr`](#attr)  
### attr.childNodes
**Signature:** attr.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.ownerDocument
**Signature:** attr.ownerDocument

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.attributes
**Signature:** attr.attributes

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.offsetParent
**Signature:** attr.offsetParent

**Kind**: instance property of [`Attr`](#attr)  
**Read only**: true  
### attr.remove
**Signature:** attr.remove()

**Kind**: instance method of [`Attr`](#attr)  
**Overrides**: [`remove`](#node-remove)  
### attr.hasChildNodes
**Signature:** attr.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Attr`](#attr)  
### attr.cloneNode
**Signature:** attr.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### attr.appendChild
**Signature:** attr.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### attr.insertBefore
**Signature:** attr.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### attr.replaceChild
**Signature:** attr.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### attr.removeChild
**Signature:** attr.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### attr.before
**Signature:** attr.before(...nodes)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### attr.after
**Signature:** attr.after(...nodes)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### attr.replaceWith
**Signature:** attr.replaceWith(...nodes)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### attr.addEventListener
**Signature:** attr.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### attr.removeEventListener
**Signature:** attr.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### attr.dispatchEvent
**Signature:** attr.dispatchEvent(event)

**Kind**: instance method of [`Attr`](#attr)  

| Param | Type |
| --- | --- |
| event | `*` | 

