
<a name="text" id="text"></a>

## Text ⇐ [`CharacterData`](#characterdata)
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


<a name="new-text-new" id="new-text-new"></a>

### new Text(document, textContent)
Creates an instance of Text.


| Param | Type |
| --- | --- |
| document | `\*` | 
| textContent | `\*` | 


<a name="text-nodename" id="text-nodename"></a>

### text.nodeName : `string`
**Kind**: instance property of [`Text`](#text)  
**Default**: <code>&quot;\&quot;#text\&quot;&quot;</code>  
**Read only**: true  

<a name="text-nodetype" id="text-nodetype"></a>

### text.nodeType : `number`
**Kind**: instance property of [`Text`](#text)  
**Default**: <code>Node.TEXT_NODE</code>  
**Read only**: true  

<a name="characterdata-data" id="characterdata-data"></a>

### text.data : `string`
**Kind**: instance property of [`Text`](#text)  

<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

### text.textContent : `string`
**Kind**: instance property of [`Text`](#text)  

<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

### text.nodeValue : `string`
**Kind**: instance property of [`Text`](#text)  

<a name="characterdata-length" id="characterdata-length"></a>

### text.length : `number`
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-contenteditable" id="node-contenteditable"></a>

### text.contentEditable
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### text.isConnected : `boolean`
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### text.parentNode : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### text.firstChild : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### text.lastChild : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### text.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### text.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### text.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### text.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### text.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### text.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-childnodes" id="node-childnodes"></a>

### text.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### text.ownerDocument
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-attributes" id="node-attributes"></a>

### text.attributes
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### text.offsetParent
**Kind**: instance property of [`Text`](#text)  
**Read only**: true  

<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

### text.substringData(offset, count) ⇒ `string`
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `\*` | 
| count | `\*` | 


<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

### text.appendData(arg)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| arg | `string` | 


<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

### text.insertData(offset, arg)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 


<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

### text.deleteData(offset, count)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 


<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

### text.replaceData(offset, count, arg)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### text.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Text`](#text)  

<a name="node-clonenode" id="node-clonenode"></a>

### text.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### text.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### text.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### text.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### text.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### text.remove()
**Kind**: instance method of [`Text`](#text)  

<a name="node-before" id="node-before"></a>

### text.before(...nodes)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### text.after(...nodes)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### text.replaceWith(...nodes)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### text.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Text`](#text)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### text.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Text`](#text)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### text.dispatchEvent(event)
**Kind**: instance method of [`Text`](#text)  

| Param | Type |
| --- | --- |
| event | `\*` | 

