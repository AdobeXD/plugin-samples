
<a name="characterdata" id="characterdata"></a>

## CharacterData ⇐ [`Node`](#node)
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


<a name="new-characterdata-new" id="new-characterdata-new"></a>

### new CharacterData(document, textContent)
Creates an instance of CharacterData.


| Param | Type |
| --- | --- |
| document | `\*` | 
| textContent | `\*` | 


<a name="characterdata-data" id="characterdata-data"></a>

### characterData.data : `string`
**Kind**: instance property of [`CharacterData`](#characterdata)  

<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

### characterData.textContent : `string`
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Overrides**: [`textContent`](#node-textcontent)  

<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

### characterData.nodeValue : `string`
**Kind**: instance property of [`CharacterData`](#characterdata)  

<a name="characterdata-length" id="characterdata-length"></a>

### characterData.length : `number`
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-contenteditable" id="node-contenteditable"></a>

### characterData.contentEditable
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### characterData.isConnected : `boolean`
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### characterData.parentNode : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### characterData.firstChild : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### characterData.lastChild : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### characterData.previousSibling : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### characterData.nextSibling : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### characterData.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### characterData.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### characterData.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### characterData.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-childnodes" id="node-childnodes"></a>

### characterData.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### characterData.ownerDocument
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-attributes" id="node-attributes"></a>

### characterData.attributes
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### characterData.offsetParent
**Kind**: instance property of [`CharacterData`](#characterdata)  
**Read only**: true  

<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

### characterData.substringData(offset, count) ⇒ `string`
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `\*` | 
| count | `\*` | 


<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

### characterData.appendData(arg)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| arg | `string` | 


<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

### characterData.insertData(offset, arg)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 


<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

### characterData.deleteData(offset, count)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 


<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

### characterData.replaceData(offset, count, arg)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### characterData.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`CharacterData`](#characterdata)  

<a name="node-clonenode" id="node-clonenode"></a>

### characterData.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### characterData.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### characterData.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### characterData.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### characterData.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### characterData.remove()
**Kind**: instance method of [`CharacterData`](#characterdata)  

<a name="node-before" id="node-before"></a>

### characterData.before(...nodes)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### characterData.after(...nodes)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### characterData.replaceWith(...nodes)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### characterData.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### characterData.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### characterData.dispatchEvent(event)
**Kind**: instance method of [`CharacterData`](#characterdata)  

| Param | Type |
| --- | --- |
| event | `\*` | 

