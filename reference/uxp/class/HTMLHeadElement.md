## HTMLHeadElement
**Signature:** HTMLHeadElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement  

* [HTMLHeadElement](#htmlheadelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLHeadElement(document, nodeName, namespaceURI)](#new-htmlheadelement-new)
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

### new HTMLHeadElement
**Signature:** new HTMLHeadElement(document, nodeName, namespaceURI)

Creates an instance of HTMLHeadElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlHeadElement.nodeName
**Signature:** htmlHeadElement.nodeName : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.localName
**Signature:** htmlHeadElement.localName : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.tagName
**Signature:** htmlHeadElement.tagName : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.nodeType
**Signature:** htmlHeadElement.nodeType : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.namespaceURI
**Signature:** htmlHeadElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.id
**Signature:** htmlHeadElement.id : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.className
**Signature:** htmlHeadElement.className : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.attributes
**Signature:** htmlHeadElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.style
**Signature:** htmlHeadElement.style : `Style`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.clientLeft
**Signature:** htmlHeadElement.clientLeft : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.clientTop
**Signature:** htmlHeadElement.clientTop : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.clientWidth
**Signature:** htmlHeadElement.clientWidth : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.clientHeight
**Signature:** htmlHeadElement.clientHeight : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.offsetLeft
**Signature:** htmlHeadElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.offsetTop
**Signature:** htmlHeadElement.offsetTop : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.offsetWidth
**Signature:** htmlHeadElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.offsetHeight
**Signature:** htmlHeadElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.scrollLeft
**Signature:** htmlHeadElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.scrollTop
**Signature:** htmlHeadElement.scrollTop : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.scrollWidth
**Signature:** htmlHeadElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.scrollHeight
**Signature:** htmlHeadElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.disabled
**Signature:** htmlHeadElement.disabled : `boolean`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.innerHTML
**Signature:** htmlHeadElement.innerHTML : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.outerHTML
**Signature:** htmlHeadElement.outerHTML : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.contentEditable
**Signature:** htmlHeadElement.contentEditable

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.isConnected
**Signature:** htmlHeadElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.parentNode
**Signature:** htmlHeadElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.firstChild
**Signature:** htmlHeadElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.lastChild
**Signature:** htmlHeadElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.previousSibling
**Signature:** htmlHeadElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.nextSibling
**Signature:** htmlHeadElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.firstElementChild
**Signature:** htmlHeadElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.lastElementChild
**Signature:** htmlHeadElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.previousElementSibling
**Signature:** htmlHeadElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.nextElementSibling
**Signature:** htmlHeadElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.textContent
**Signature:** htmlHeadElement.textContent : `string`

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.childNodes
**Signature:** htmlHeadElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.ownerDocument
**Signature:** htmlHeadElement.ownerDocument

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.offsetParent
**Signature:** htmlHeadElement.offsetParent

**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)  
**Read only**: true  
### htmlHeadElement.scrollIntoView
**Signature:** htmlHeadElement.scrollIntoView()

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.scrollIntoViewIfNeeded
**Signature:** htmlHeadElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.focus
**Signature:** htmlHeadElement.focus()

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.blur
**Signature:** htmlHeadElement.blur()

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.getAttribute
**Signature:** htmlHeadElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.setAttribute
**Signature:** htmlHeadElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlHeadElement.removeAttribute
**Signature:** htmlHeadElement.removeAttribute(name)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.hasAttribute
**Signature:** htmlHeadElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.getAttributeNode
**Signature:** htmlHeadElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.setAttributeNode
**Signature:** htmlHeadElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlHeadElement.removeAttributeNode
**Signature:** htmlHeadElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlHeadElement.getElementsByClassName
**Signature:** htmlHeadElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.getElementsByTagName
**Signature:** htmlHeadElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHeadElement.querySelector
**Signature:** htmlHeadElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlHeadElement.querySelectorAll
**Signature:** htmlHeadElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlHeadElement.getBoundingClientRect
**Signature:** htmlHeadElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.insertAdjacentHTML
**Signature:** htmlHeadElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlHeadElement.insertAdjacentElement
**Signature:** htmlHeadElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlHeadElement.insertAdjacentText
**Signature:** htmlHeadElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlHeadElement.hasChildNodes
**Signature:** htmlHeadElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.cloneNode
**Signature:** htmlHeadElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlHeadElement.appendChild
**Signature:** htmlHeadElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlHeadElement.insertBefore
**Signature:** htmlHeadElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlHeadElement.replaceChild
**Signature:** htmlHeadElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlHeadElement.removeChild
**Signature:** htmlHeadElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlHeadElement.remove
**Signature:** htmlHeadElement.remove()

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  
### htmlHeadElement.before
**Signature:** htmlHeadElement.before(...nodes)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHeadElement.after
**Signature:** htmlHeadElement.after(...nodes)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHeadElement.replaceWith
**Signature:** htmlHeadElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHeadElement.addEventListener
**Signature:** htmlHeadElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlHeadElement.removeEventListener
**Signature:** htmlHeadElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlHeadElement.dispatchEvent
**Signature:** htmlHeadElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

