## HTMLScriptElement
**Signature:** HTMLScriptElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement  

* [HTMLScriptElement](#htmlscriptelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLScriptElement(document, nodeName, namespaceURI)](#new-htmlscriptelement-new)
    * [.type](#htmlscriptelement-type) : `string`
    * [.src](#htmlscriptelement-src) : `string`
    * [.charset](#htmlscriptelement-charset) : `string`
    * [.text](#htmlscriptelement-text) : `string`
    * [.nodeName](#element-nodename) : `string`
    * [.localName](#element-localname) : `string`
    * [.tagName](#element-tagname) : `string`
    * [.nodeType](#element-nodetype) : `number`
    * [.namespaceURI](#element-namespaceuri) : `string`
    * [.id](#element-id) : `string`
    * [.className](#element-classname) : `string`
    * [.attributes](#element-attributes) : [`NamedNodeMap`](#namednodemap)
    * [.style](#element-style) : `Style`
    * [.clientLeft](#element-clientleft) : `number`
    * [.clientTop](#element-clienttop) : `number`
    * [.clientWidth](#element-clientwidth) : `number`
    * [.clientHeight](#element-clientheight) : `number`
    * [.offsetLeft](#element-offsetleft) : `number`
    * [.offsetTop](#element-offsettop) : `number`
    * [.offsetWidth](#element-offsetwidth) : `number`
    * [.offsetHeight](#element-offsetheight) : `number`
    * [.scrollLeft](#element-scrollleft) : `number`
    * [.scrollTop](#element-scrolltop) : `number`
    * [.scrollWidth](#element-scrollwidth) : `number`
    * [.scrollHeight](#element-scrollheight) : `number`
    * [.disabled](#element-disabled) : `boolean`
    * [.innerHTML](#element-innerhtml) : `string`
    * [.outerHTML](#element-outerhtml) : `string`
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
    * [.offsetParent](#node-offsetparent)
    * [.scrollIntoView()](#element-scrollintoview)
    * [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
    * [.focus()](#element-focus)
    * [.blur()](#element-blur)
    * [.getAttribute(name)](#element-getattribute) ⇒ `string`
    * [.setAttribute(name, value)](#element-setattribute)
    * [.removeAttribute(name)](#element-removeattribute)
    * [.hasAttribute(name)](#element-hasattribute) ⇒ `boolean`
    * [.getAttributeNode(name)](#element-getattributenode) ⇒ `*`
    * [.setAttributeNode(newAttr)](#element-setattributenode)
    * [.removeAttributeNode(oldAttr)](#element-removeattributenode)
    * [.getElementsByClassName(name)](#element-getelementsbyclassname) ⇒ [`NodeList`](#nodelist)
    * [.getElementsByTagName(name)](#element-getelementsbytagname) ⇒ [`NodeList`](#nodelist)
    * [.querySelector(selector)](#element-queryselector) ⇒ [`Element`](#element)
    * [.querySelectorAll(selector)](#element-queryselectorall) ⇒ [`NodeList`](#nodelist)
    * [.getBoundingClientRect()](#element-getboundingclientrect) ⇒ `*`
    * [.insertAdjacentHTML(position, value)](#element-insertadjacenthtml)
    * [.insertAdjacentElement(position, node)](#element-insertadjacentelement) ⇒ [`Node`](#node)
    * [.insertAdjacentText(position, text)](#element-insertadjacenttext)
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

### new HTMLScriptElement
**Signature:** new HTMLScriptElement(document, nodeName, namespaceURI)

Creates an instance of HTMLScriptElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlScriptElement.type
**Signature:** htmlScriptElement.type : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.src
**Signature:** htmlScriptElement.src : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.charset
**Signature:** htmlScriptElement.charset : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.text
**Signature:** htmlScriptElement.text : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.nodeName
**Signature:** htmlScriptElement.nodeName : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.localName
**Signature:** htmlScriptElement.localName : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.tagName
**Signature:** htmlScriptElement.tagName : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.nodeType
**Signature:** htmlScriptElement.nodeType : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.namespaceURI
**Signature:** htmlScriptElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.id
**Signature:** htmlScriptElement.id : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.className
**Signature:** htmlScriptElement.className : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.attributes
**Signature:** htmlScriptElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.style
**Signature:** htmlScriptElement.style : `Style`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.clientLeft
**Signature:** htmlScriptElement.clientLeft : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.clientTop
**Signature:** htmlScriptElement.clientTop : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.clientWidth
**Signature:** htmlScriptElement.clientWidth : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.clientHeight
**Signature:** htmlScriptElement.clientHeight : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.offsetLeft
**Signature:** htmlScriptElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.offsetTop
**Signature:** htmlScriptElement.offsetTop : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.offsetWidth
**Signature:** htmlScriptElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.offsetHeight
**Signature:** htmlScriptElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.scrollLeft
**Signature:** htmlScriptElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.scrollTop
**Signature:** htmlScriptElement.scrollTop : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.scrollWidth
**Signature:** htmlScriptElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.scrollHeight
**Signature:** htmlScriptElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.disabled
**Signature:** htmlScriptElement.disabled : `boolean`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.innerHTML
**Signature:** htmlScriptElement.innerHTML : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.outerHTML
**Signature:** htmlScriptElement.outerHTML : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.contentEditable
**Signature:** htmlScriptElement.contentEditable

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.isConnected
**Signature:** htmlScriptElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.parentNode
**Signature:** htmlScriptElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.firstChild
**Signature:** htmlScriptElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.lastChild
**Signature:** htmlScriptElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.previousSibling
**Signature:** htmlScriptElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.nextSibling
**Signature:** htmlScriptElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.firstElementChild
**Signature:** htmlScriptElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.lastElementChild
**Signature:** htmlScriptElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.previousElementSibling
**Signature:** htmlScriptElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.nextElementSibling
**Signature:** htmlScriptElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.textContent
**Signature:** htmlScriptElement.textContent : `string`

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Overrides**: [`textContent`](#node-textcontent)  
### htmlScriptElement.childNodes
**Signature:** htmlScriptElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.ownerDocument
**Signature:** htmlScriptElement.ownerDocument

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.offsetParent
**Signature:** htmlScriptElement.offsetParent

**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  
### htmlScriptElement.scrollIntoView
**Signature:** htmlScriptElement.scrollIntoView()

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.scrollIntoViewIfNeeded
**Signature:** htmlScriptElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.focus
**Signature:** htmlScriptElement.focus()

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.blur
**Signature:** htmlScriptElement.blur()

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.getAttribute
**Signature:** htmlScriptElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.setAttribute
**Signature:** htmlScriptElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlScriptElement.removeAttribute
**Signature:** htmlScriptElement.removeAttribute(name)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.hasAttribute
**Signature:** htmlScriptElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.getAttributeNode
**Signature:** htmlScriptElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.setAttributeNode
**Signature:** htmlScriptElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlScriptElement.removeAttributeNode
**Signature:** htmlScriptElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlScriptElement.getElementsByClassName
**Signature:** htmlScriptElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.getElementsByTagName
**Signature:** htmlScriptElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlScriptElement.querySelector
**Signature:** htmlScriptElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlScriptElement.querySelectorAll
**Signature:** htmlScriptElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlScriptElement.getBoundingClientRect
**Signature:** htmlScriptElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.insertAdjacentHTML
**Signature:** htmlScriptElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlScriptElement.insertAdjacentElement
**Signature:** htmlScriptElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlScriptElement.insertAdjacentText
**Signature:** htmlScriptElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlScriptElement.hasChildNodes
**Signature:** htmlScriptElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.cloneNode
**Signature:** htmlScriptElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlScriptElement.appendChild
**Signature:** htmlScriptElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlScriptElement.insertBefore
**Signature:** htmlScriptElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlScriptElement.replaceChild
**Signature:** htmlScriptElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlScriptElement.removeChild
**Signature:** htmlScriptElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlScriptElement.remove
**Signature:** htmlScriptElement.remove()

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  
### htmlScriptElement.before
**Signature:** htmlScriptElement.before(...nodes)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlScriptElement.after
**Signature:** htmlScriptElement.after(...nodes)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlScriptElement.replaceWith
**Signature:** htmlScriptElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlScriptElement.addEventListener
**Signature:** htmlScriptElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlScriptElement.removeEventListener
**Signature:** htmlScriptElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlScriptElement.dispatchEvent
**Signature:** htmlScriptElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

