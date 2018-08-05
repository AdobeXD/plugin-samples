## Comment
**Signature:** Comment ⇐ [`Node`](#node)

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

### new Comment
**Signature:** new Comment(document, comment)

Creates an instance of Comment.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) | 
| comment | `string` | 

### comment.nodeName
**Signature:** comment.nodeName : `string`

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.nodeType
**Signature:** comment.nodeType : `number`

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.nodeValue
**Signature:** comment.nodeValue : `string`

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.contentEditable
**Signature:** comment.contentEditable

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.isConnected
**Signature:** comment.isConnected : `boolean`

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.parentNode
**Signature:** comment.parentNode : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.firstChild
**Signature:** comment.firstChild : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.lastChild
**Signature:** comment.lastChild : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.previousSibling
**Signature:** comment.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.nextSibling
**Signature:** comment.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.firstElementChild
**Signature:** comment.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.lastElementChild
**Signature:** comment.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.previousElementSibling
**Signature:** comment.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.nextElementSibling
**Signature:** comment.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.textContent
**Signature:** comment.textContent : `string`

**Kind**: instance property of [`Comment`](#comment)  
### comment.childNodes
**Signature:** comment.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.ownerDocument
**Signature:** comment.ownerDocument

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.attributes
**Signature:** comment.attributes

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.offsetParent
**Signature:** comment.offsetParent

**Kind**: instance property of [`Comment`](#comment)  
**Read only**: true  
### comment.hasChildNodes
**Signature:** comment.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Comment`](#comment)  
### comment.cloneNode
**Signature:** comment.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### comment.appendChild
**Signature:** comment.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### comment.insertBefore
**Signature:** comment.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### comment.replaceChild
**Signature:** comment.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### comment.removeChild
**Signature:** comment.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### comment.remove
**Signature:** comment.remove()

**Kind**: instance method of [`Comment`](#comment)  
### comment.before
**Signature:** comment.before(...nodes)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### comment.after
**Signature:** comment.after(...nodes)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### comment.replaceWith
**Signature:** comment.replaceWith(...nodes)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### comment.addEventListener
**Signature:** comment.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### comment.removeEventListener
**Signature:** comment.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### comment.dispatchEvent
**Signature:** comment.dispatchEvent(event)

**Kind**: instance method of [`Comment`](#comment)  

| Param | Type |
| --- | --- |
| event | `*` | 

