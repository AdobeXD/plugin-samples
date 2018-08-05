## CharacterData
**Signature:** CharacterData ⇐ [`Node`](#node)

**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/CharacterData  

* [CharacterData](#characterdata) ⇐ [`Node`](#node)
    * [new CharacterData(document, textContent)](#new-characterdata-new)
    * [.data](#characterdata-data) : `string`
    * [.textContent](#characterdata-textcontent) : `string`
    * [.nodeValue](#characterdata-nodevalue) : `string`
    * [.length](#characterdata-length) : `number`
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
    * [.childNodes](#node-childnodes) : [`NodeList`](#nodelist)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.offsetParent](#node-offsetparent)
    * [.substringData(offset, count)](#characterdata-substringdata) ⇒ `string`
    * [.appendData(arg)](#characterdata-appenddata)
    * [.insertData(offset, arg)](#characterdata-insertdata)
    * [.deleteData(offset, count)](#characterdata-deletedata)
    * [.replaceData(offset, count, arg)](#characterdata-replacedata)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
    * [.cloneNode(deep)](#node-clonenode) ⇒ [`Node`](#node)
    * [.appendChild(child)](#node-appendchild) ⇒ [`Node`](#node)
    * [.insertBefore(child, before)](#node-insertbefore) ⇒ [`Node`](#node)
    * [.replaceChild(newChild, oldChild)](#node-replacechild) ⇒ [`Node`](#node)
    * [.removeChild(child)](#node-removechild) ⇒ [`Node`](#node)
    * [.remove()](#node-remove)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.addEventListener(eventName, callback, [capture])](#EventTarget+addEventListener)
    * [.removeEventListener(eventName, callback, [capture])](#EventTarget+removeEventListener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)

### new CharacterData
**Signature:** new CharacterData(document, textContent)

Creates an instance of CharacterData.


| Param | Type |
| --- | --- |
| document | `*` | 
| textContent | `*` | 

### characterData.data
**Signature:** characterData.data : `string`

**Kind**: instance property of [`CharacterData`](#characterdata)  
### characterData.textContent
**Signature:** characterData.textContent : `string`

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Overrides**: [`textContent`](#node-textcontent)  
### characterData.nodeValue
**Signature:** characterData.nodeValue : `string`

**Kind**: instance property of [`CharacterData`](#characterdata)  
### characterData.length
**Signature:** characterData.length : `number`

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.contentEditable
**Signature:** characterData.contentEditable

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.isConnected
**Signature:** characterData.isConnected : `boolean`

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.parentNode
**Signature:** characterData.parentNode : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.firstChild
**Signature:** characterData.firstChild : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.lastChild
**Signature:** characterData.lastChild : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.previousSibling
**Signature:** characterData.previousSibling : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.nextSibling
**Signature:** characterData.nextSibling : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.firstElementChild
**Signature:** characterData.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.lastElementChild
**Signature:** characterData.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.previousElementSibling
**Signature:** characterData.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.nextElementSibling
**Signature:** characterData.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.childNodes
**Signature:** characterData.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.ownerDocument
**Signature:** characterData.ownerDocument

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.attributes
**Signature:** characterData.attributes

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.offsetParent
**Signature:** characterData.offsetParent

**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  
### characterData.substringData
**Signature:** characterData.substringData(offset, count) ⇒ `string`

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `*` | 
| count | `*` | 

### characterData.appendData
**Signature:** characterData.appendData(arg)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| arg | `string` | 

### characterData.insertData
**Signature:** characterData.insertData(offset, arg)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 

### characterData.deleteData
**Signature:** characterData.deleteData(offset, count)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 

### characterData.replaceData
**Signature:** characterData.replaceData(offset, count, arg)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 

### characterData.hasChildNodes
**Signature:** characterData.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`CharacterData`](#characterdata)  
### characterData.cloneNode
**Signature:** characterData.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### characterData.appendChild
**Signature:** characterData.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### characterData.insertBefore
**Signature:** characterData.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### characterData.replaceChild
**Signature:** characterData.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### characterData.removeChild
**Signature:** characterData.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### characterData.remove
**Signature:** characterData.remove()

**Kind**: instance method of [`CharacterData`](#characterdata)  
### characterData.before
**Signature:** characterData.before(...nodes)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### characterData.after
**Signature:** characterData.after(...nodes)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### characterData.replaceWith
**Signature:** characterData.replaceWith(...nodes)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### characterData.addEventListener
**Signature:** characterData.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### characterData.removeEventListener
**Signature:** characterData.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### characterData.dispatchEvent
**Signature:** characterData.dispatchEvent(event)

**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| event | `*` | 

