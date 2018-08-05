## Document
**Signature:** Document ⇐ [`Node`](#node)

**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document  

* [Document](#document) ⇐ [`Node`](#node)
    * [new Document()](#new-document-new)
    * [.onLine](#document-online) : `boolean`
    * [.nodeName](#document-nodename) : `string`
    * [.nodeType](#document-nodetype) : `number`
    * [.documentElement](#document-documentelement) : [`Document`](#document)
    * [.head](#document-head) : [`HTMLHeadElement`](#htmlheadelement)
    * [.body](#document-body) : [`HTMLBodyElement`](#htmlbodyelement)
    * [.clipboard](#document-clipboard) : `Clippoard`
    * [.styleSheets](#document-stylesheets) : `StyleSheetList`
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
    * [.createElement(nodeName)](#document-createelement) ⇒ [`Element`](#element)
    * [.createElementNS(ns, nodeName)](#document-createelementns) ⇒ [`Element`](#element)
    * [.createAttribute(nodeName)](#document-createattribute) ⇒ [`Attr`](#attr)
    * [.createTextNode([text])](#Document+createTextNode) ⇒ [`Text`](#text)
    * [.createComment([comment])](#Document+createComment) ⇒ [`Comment`](#comment)
    * [.createDocumentFragment()](#document-createdocumentfragment) ⇒ [`DocumentFragment`](#documentfragment)
    * [.cloneNode(deep)](#document-clonenode) ⇒ [`Document`](#document)
    * [.adoptNode(externalNode, deep)](#document-adoptnode) ⇒ [`Node`](#node)
    * [.importNode(externalNode, deep)](#document-importnode) ⇒ [`Node`](#node)
    * [.querySelector(selector)](#document-queryselector) ⇒ [`Node`](#node)
    * [.querySelectorAll(selector)](#document-queryselectorall) ⇒ [`NodeList`](#nodelist)
    * [.getElementsByClassName(name)](#document-getelementsbyclassname) ⇒ [`NodeList`](#nodelist)
    * [.getElementsByTagName(name)](#document-getelementsbytagname) ⇒ [`NodeList`](#nodelist)
    * [.getElementById(id)](#document-getelementbyid) ⇒ [`Element`](#element)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
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

### new Document
**Signature:** new Document()

Creates an instance of Document.

### document.onLine
**Signature:** document.onLine : `boolean`

Indicates if the computer is online

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.nodeName
**Signature:** document.nodeName : `string`

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.nodeType
**Signature:** document.nodeType : `number`

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.documentElement
**Signature:** document.documentElement : [`Document`](#document)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.head
**Signature:** document.head : [`HTMLHeadElement`](#htmlheadelement)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.body
**Signature:** document.body : [`HTMLBodyElement`](#htmlbodyelement)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.clipboard
**Signature:** document.clipboard : `Clippoard`

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.styleSheets
**Signature:** document.styleSheets : `StyleSheetList`

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.contentEditable
**Signature:** document.contentEditable

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.isConnected
**Signature:** document.isConnected : `boolean`

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.parentNode
**Signature:** document.parentNode : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.firstChild
**Signature:** document.firstChild : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.lastChild
**Signature:** document.lastChild : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.previousSibling
**Signature:** document.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.nextSibling
**Signature:** document.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.firstElementChild
**Signature:** document.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.lastElementChild
**Signature:** document.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.previousElementSibling
**Signature:** document.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.nextElementSibling
**Signature:** document.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.textContent
**Signature:** document.textContent : `string`

**Kind**: instance property of [`Document`](#document)  
### document.childNodes
**Signature:** document.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.ownerDocument
**Signature:** document.ownerDocument

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.attributes
**Signature:** document.attributes

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.offsetParent
**Signature:** document.offsetParent

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  
### document.createElement
**Signature:** document.createElement(nodeName) ⇒ [`Element`](#element)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 

### document.createElementNS
**Signature:** document.createElementNS(ns, nodeName) ⇒ [`Element`](#element)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ns | `string` | 
| nodeName | `string` | 

### document.createAttribute
**Signature:** document.createAttribute(nodeName) ⇒ [`Attr`](#attr)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 

### document.createTextNode
**Signature:** document.createTextNode([text]) ⇒ [`Text`](#text)

**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| [text] | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | 

### document.createComment
**Signature:** document.createComment([comment]) ⇒ [`Comment`](#comment)

**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | 

### document.createDocumentFragment
**Signature:** document.createDocumentFragment() ⇒ [`DocumentFragment`](#documentfragment)

**Kind**: instance method of [`Document`](#document)  
### document.cloneNode
**Signature:** document.cloneNode(deep) ⇒ [`Document`](#document)

**Kind**: instance method of [`Document`](#document)  
**Overrides**: [`cloneNode`](#node-clonenode)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### document.adoptNode
**Signature:** document.adoptNode(externalNode, deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) | 
| deep | `boolean` | 

### document.importNode
**Signature:** document.importNode(externalNode, deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) | 
| deep | `boolean` | 

### document.querySelector
**Signature:** document.querySelector(selector) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### document.querySelectorAll
**Signature:** document.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### document.getElementsByClassName
**Signature:** document.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| name | `string` | 

### document.getElementsByTagName
**Signature:** document.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| name | `string` | 

### document.getElementById
**Signature:** document.getElementById(id) ⇒ [`Element`](#element)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| id | `string` | 

### document.hasChildNodes
**Signature:** document.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Document`](#document)  
### document.appendChild
**Signature:** document.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### document.insertBefore
**Signature:** document.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### document.replaceChild
**Signature:** document.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### document.removeChild
**Signature:** document.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### document.remove
**Signature:** document.remove()

**Kind**: instance method of [`Document`](#document)  
### document.before
**Signature:** document.before(...nodes)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### document.after
**Signature:** document.after(...nodes)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### document.replaceWith
**Signature:** document.replaceWith(...nodes)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### document.addEventListener
**Signature:** document.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### document.removeEventListener
**Signature:** document.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### document.dispatchEvent
**Signature:** document.dispatchEvent(event)

**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| event | `*` | 

