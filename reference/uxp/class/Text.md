## Text
**Signature:** Text ⇐ [`CharacterData`](#characterdata)

**Kind**: global class  
**Extends**: [`CharacterData`](#characterdata)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Text  

* [Text](#text) ⇐ [`CharacterData`](#characterdata)
    * [new Text(document, textContent)](#new-text-new)
    * [.nodeName](#text-nodename) : `string`
    * [.nodeType](#text-nodetype) : `number`
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

### new Text
**Signature:** new Text(document, textContent)

Creates an instance of Text.


| Param | Type |
| --- | --- |
| document | `*` | 
| textContent | `*` | 

### text.nodeName
**Signature:** text.nodeName : `string`

**Kind**: instance property of [`Text`](#text)  
**Default**: <code>&quot;\&quot;#text\&quot;&quot;</code>  
**Read only**: true  
### text.nodeType
**Signature:** text.nodeType : `number`

**Kind**: instance property of [`Text`](#text)  
**Default**: <code>Node.TEXT_NODE</code>  
**Read only**: true  
### text.data
**Signature:** text.data : `string`

**Kind**: instance property of [`Text`](#text)  
### text.textContent
**Signature:** text.textContent : `string`

**Kind**: instance property of [`Text`](#text)  
### text.nodeValue
**Signature:** text.nodeValue : `string`

**Kind**: instance property of [`Text`](#text)  
### text.length
**Signature:** text.length : `number`

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.contentEditable
**Signature:** text.contentEditable

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.isConnected
**Signature:** text.isConnected : `boolean`

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.parentNode
**Signature:** text.parentNode : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.firstChild
**Signature:** text.firstChild : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.lastChild
**Signature:** text.lastChild : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.previousSibling
**Signature:** text.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.nextSibling
**Signature:** text.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.firstElementChild
**Signature:** text.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.lastElementChild
**Signature:** text.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.previousElementSibling
**Signature:** text.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.nextElementSibling
**Signature:** text.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.childNodes
**Signature:** text.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.ownerDocument
**Signature:** text.ownerDocument

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.attributes
**Signature:** text.attributes

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.offsetParent
**Signature:** text.offsetParent

**Kind**: instance property of [`Text`](#text)  
**Read only**: true  
### text.substringData
**Signature:** text.substringData(offset, count) ⇒ `string`

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `*` | 
| count | `*` | 

### text.appendData
**Signature:** text.appendData(arg)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| arg | `string` | 

### text.insertData
**Signature:** text.insertData(offset, arg)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 

### text.deleteData
**Signature:** text.deleteData(offset, count)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 

### text.replaceData
**Signature:** text.replaceData(offset, count, arg)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 

### text.hasChildNodes
**Signature:** text.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Text`](#text)  
### text.cloneNode
**Signature:** text.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### text.appendChild
**Signature:** text.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### text.insertBefore
**Signature:** text.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### text.replaceChild
**Signature:** text.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### text.removeChild
**Signature:** text.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### text.remove
**Signature:** text.remove()

**Kind**: instance method of [`Text`](#text)  
### text.before
**Signature:** text.before(...nodes)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### text.after
**Signature:** text.after(...nodes)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### text.replaceWith
**Signature:** text.replaceWith(...nodes)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### text.addEventListener
**Signature:** text.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Text`](#text)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### text.removeEventListener
**Signature:** text.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Text`](#text)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### text.dispatchEvent
**Signature:** text.dispatchEvent(event)

**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| event | `*` | 

