
<a name="documentfragment" id="documentfragment"></a>

## DocumentFragment ⇐ [`Node`](#node)
**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment  

* [DocumentFragment](#documentfragment) ⇐ [`Node`](#node)
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


<a name="node-contenteditable" id="node-contenteditable"></a>

### documentFragment.contentEditable
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### documentFragment.isConnected : `boolean`
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### documentFragment.parentNode : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### documentFragment.firstChild : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### documentFragment.lastChild : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### documentFragment.previousSibling : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### documentFragment.nextSibling : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### documentFragment.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### documentFragment.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### documentFragment.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### documentFragment.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### documentFragment.textContent : `string`
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  

<a name="node-childnodes" id="node-childnodes"></a>

### documentFragment.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### documentFragment.ownerDocument
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-attributes" id="node-attributes"></a>

### documentFragment.attributes
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### documentFragment.offsetParent
**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### documentFragment.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

<a name="node-clonenode" id="node-clonenode"></a>

### documentFragment.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### documentFragment.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### documentFragment.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### documentFragment.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### documentFragment.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### documentFragment.remove()
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

<a name="node-before" id="node-before"></a>

### documentFragment.before(...nodes)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### documentFragment.after(...nodes)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### documentFragment.replaceWith(...nodes)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### documentFragment.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### documentFragment.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### documentFragment.dispatchEvent(event)
**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| event | `\*` | 

