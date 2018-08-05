## Node
**Signature:** Node ⇐ [`EventTarget`](#eventtarget)

**Kind**: global class  
**Extends**: [`EventTarget`](#eventtarget)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Node  

* [Node](#node) ⇐ [`EventTarget`](#eventtarget)
    * [new Node(ownerDocument)](#new-node-new)
    * _instance_
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
    * _static_
        * [.ELEMENT_NODE](#nodeelement-node)
        * [.ATTRIBUTE_NODE](#nodeattribute-node)
        * [.TEXT_NODE](#nodetext-node)
        * [.DOCUMENT_NODE](#nodedocument-node)
        * [.DOCUMENT_FRAGMENT_NODE](#nodedocument-fragment-node)
        * [.COMMENT_NODE](#nodecomment-node)

### new Node
**Signature:** new Node(ownerDocument)

Creates an instance of Node.


| Param | Type |
| --- | --- |
| ownerDocument | `*` | 

### node.contentEditable
**Signature:** node.contentEditable

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.isConnected
**Signature:** node.isConnected : `boolean`

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.parentNode
**Signature:** node.parentNode : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.firstChild
**Signature:** node.firstChild : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.lastChild
**Signature:** node.lastChild : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.previousSibling
**Signature:** node.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.nextSibling
**Signature:** node.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.firstElementChild
**Signature:** node.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.lastElementChild
**Signature:** node.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.previousElementSibling
**Signature:** node.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.nextElementSibling
**Signature:** node.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.textContent
**Signature:** node.textContent : `string`

**Kind**: instance property of [`Node`](#node)  
### node.childNodes
**Signature:** node.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.ownerDocument
**Signature:** node.ownerDocument

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.attributes
**Signature:** node.attributes

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.offsetParent
**Signature:** node.offsetParent

**Kind**: instance property of [`Node`](#node)  
**Read only**: true  
### node.hasChildNodes
**Signature:** node.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Node`](#node)  
### node.cloneNode
**Signature:** node.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### node.appendChild
**Signature:** node.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### node.insertBefore
**Signature:** node.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### node.replaceChild
**Signature:** node.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### node.removeChild
**Signature:** node.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### node.remove
**Signature:** node.remove()

**Kind**: instance method of [`Node`](#node)  
### node.before
**Signature:** node.before(...nodes)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### node.after
**Signature:** node.after(...nodes)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### node.replaceWith
**Signature:** node.replaceWith(...nodes)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### node.addEventListener
**Signature:** node.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Node`](#node)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### node.removeEventListener
**Signature:** node.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Node`](#node)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### node.dispatchEvent
**Signature:** node.dispatchEvent(event)

**Kind**: instance method of [`Node`](#node)  

| Param | Type |
| --- | --- |
| event | `*` | 

### Node.ELEMENT_NODE
**Signature:** Node.ELEMENT_NODE

**Kind**: static property of [`Node`](#node)  
### Node.ATTRIBUTE_NODE
**Signature:** Node.ATTRIBUTE_NODE

**Kind**: static property of [`Node`](#node)  
### Node.TEXT_NODE
**Signature:** Node.TEXT_NODE

**Kind**: static property of [`Node`](#node)  
### Node.DOCUMENT_NODE
**Signature:** Node.DOCUMENT_NODE

**Kind**: static property of [`Node`](#node)  
### Node.DOCUMENT_FRAGMENT_NODE
**Signature:** Node.DOCUMENT_FRAGMENT_NODE

**Kind**: static property of [`Node`](#node)  
### Node.COMMENT_NODE
**Signature:** Node.COMMENT_NODE

**Kind**: static property of [`Node`](#node)  
