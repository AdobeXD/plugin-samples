
<a name="document" id="document"></a>

## Document ⇐ [`Node`](#node)
**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document  

* [Document](#document) ⇐ [`Node`](#node)
    * [new Document()](#new-document-new)
    * [.onLine](#document-online) : `boolean`
    * [.nodeName](#document-nodename) : `string`
    * [.nodeType](#document-nodetype) : `number`
    * [.activeElement](#document-activeelement) : [`Node`](#node)
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


<a name="new-document-new" id="new-document-new"></a>

### new Document()
Creates an instance of Document.


<a name="document-online" id="document-online"></a>

### document.onLine : `boolean`
Indicates if the computer is online

**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-nodename" id="document-nodename"></a>

### document.nodeName : `string`
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-nodetype" id="document-nodetype"></a>

### document.nodeType : `number`
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-activeelement" id="document-activeelement"></a>

### document.activeElement : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-documentelement" id="document-documentelement"></a>

### document.documentElement : [`Document`](#document)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-head" id="document-head"></a>

### document.head : [`HTMLHeadElement`](#htmlheadelement)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-body" id="document-body"></a>

### document.body : [`HTMLBodyElement`](#htmlbodyelement)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-clipboard" id="document-clipboard"></a>

### document.clipboard : `Clippoard`
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-stylesheets" id="document-stylesheets"></a>

### document.styleSheets : `StyleSheetList`
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-contenteditable" id="node-contenteditable"></a>

### document.contentEditable
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### document.isConnected : `boolean`
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### document.parentNode : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### document.firstChild : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### document.lastChild : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### document.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### document.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### document.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### document.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### document.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### document.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### document.textContent : `string`
**Kind**: instance property of [`Document`](#document)  

<a name="node-childnodes" id="node-childnodes"></a>

### document.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### document.ownerDocument
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-attributes" id="node-attributes"></a>

### document.attributes
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### document.offsetParent
**Kind**: instance property of [`Document`](#document)  
**Read only**: true  

<a name="document-createelement" id="document-createelement"></a>

### document.createElement(nodeName) ⇒ [`Element`](#element)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 


<a name="document-createelementns" id="document-createelementns"></a>

### document.createElementNS(ns, nodeName) ⇒ [`Element`](#element)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ns | `string` | 
| nodeName | `string` | 


<a name="document-createattribute" id="document-createattribute"></a>

### document.createAttribute(nodeName) ⇒ [`Attr`](#attr)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 


<a name="document-createtextnode" id="document-createtextnode"></a>

### document.createTextNode([text]) ⇒ [`Text`](#text)
**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| [text] | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | 


<a name="document-createcomment" id="document-createcomment"></a>

### document.createComment([comment]) ⇒ [`Comment`](#comment)
**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | 


<a name="document-createdocumentfragment" id="document-createdocumentfragment"></a>

### document.createDocumentFragment() ⇒ [`DocumentFragment`](#documentfragment)
**Kind**: instance method of [`Document`](#document)  

<a name="document-clonenode" id="document-clonenode"></a>

### document.cloneNode(deep) ⇒ [`Document`](#document)
**Kind**: instance method of [`Document`](#document)  
**Overrides**: [`cloneNode`](#node-clonenode)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="document-adoptnode" id="document-adoptnode"></a>

### document.adoptNode(externalNode, deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) | 
| deep | `boolean` | 


<a name="document-importnode" id="document-importnode"></a>

### document.importNode(externalNode, deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) | 
| deep | `boolean` | 


<a name="document-queryselector" id="document-queryselector"></a>

### document.querySelector(selector) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="document-queryselectorall" id="document-queryselectorall"></a>

### document.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="document-getelementsbyclassname" id="document-getelementsbyclassname"></a>

### document.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="document-getelementsbytagname" id="document-getelementsbytagname"></a>

### document.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="document-getelementbyid" id="document-getelementbyid"></a>

### document.getElementById(id) ⇒ [`Element`](#element)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| id | `string` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### document.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Document`](#document)  

<a name="node-appendchild" id="node-appendchild"></a>

### document.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### document.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### document.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### document.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### document.remove()
**Kind**: instance method of [`Document`](#document)  

<a name="node-before" id="node-before"></a>

### document.before(...nodes)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### document.after(...nodes)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### document.replaceWith(...nodes)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### document.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### document.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Document`](#document)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### document.dispatchEvent(event)
**Kind**: instance method of [`Document`](#document)  

| Param | Type |
| --- | --- |
| event | `\*` | 

