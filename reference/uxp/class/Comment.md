
<a name="comment" id="comment"></a>

## Comment ⇐ [`Node`](#node)
**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Comment  

* [Comment](#comment) ⇐ [`Node`](#node)
    * [new Comment(document, comment)](#new-comment-new)
    * [.nodeName](#comment-nodename) : `string`
    * [.nodeType](#comment-nodetype) : `number`
    * [.nodeValue](#comment-nodevalue) : `string`
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


<a name="new-comment-new" id="new-comment-new"></a>

### new Comment(document, comment)
Creates an instance of Comment.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) | 
| comment | `string` | 


<a name="comment-nodename" id="comment-nodename"></a>

### comment.nodeName : `string`
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="comment-nodetype" id="comment-nodetype"></a>

### comment.nodeType : `number`
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="comment-nodevalue" id="comment-nodevalue"></a>

### comment.nodeValue : `string`
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-contenteditable" id="node-contenteditable"></a>

### comment.contentEditable
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### comment.isConnected : `boolean`
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### comment.parentNode : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### comment.firstChild : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### comment.lastChild : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### comment.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### comment.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### comment.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### comment.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### comment.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### comment.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### comment.textContent : `string`
**Kind**: instance property of [`Comment`](#comment)  

<a name="node-childnodes" id="node-childnodes"></a>

### comment.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### comment.ownerDocument
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-attributes" id="node-attributes"></a>

### comment.attributes
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### comment.offsetParent
**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### comment.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Comment`](#comment)  

<a name="node-clonenode" id="node-clonenode"></a>

### comment.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### comment.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### comment.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### comment.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### comment.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### comment.remove()
**Kind**: instance method of [`Comment`](#comment)  

<a name="node-before" id="node-before"></a>

### comment.before(...nodes)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### comment.after(...nodes)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### comment.replaceWith(...nodes)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### comment.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### comment.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### comment.dispatchEvent(event)
**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| event | `\*` | 

