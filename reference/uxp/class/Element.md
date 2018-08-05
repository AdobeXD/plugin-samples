## Element
**Signature:** Element ⇐ [`Node`](#node)

**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element  

* [Element](#element) ⇐ [`Node`](#node)
    * [new Element(document, nodeName, namespaceURI)](#new-element-new)
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

### new Element
**Signature:** new Element(document, nodeName, namespaceURI)

Creates an instance of Element.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### element.nodeName
**Signature:** element.nodeName : `string`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.localName
**Signature:** element.localName : `string`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.tagName
**Signature:** element.tagName : `string`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.nodeType
**Signature:** element.nodeType : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.namespaceURI
**Signature:** element.namespaceURI : `string`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.id
**Signature:** element.id : `string`

**Kind**: instance property of [`Element`](#element)  
### element.className
**Signature:** element.className : `string`

**Kind**: instance property of [`Element`](#element)  
### element.attributes
**Signature:** element.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`Element`](#element)  
**Overrides**: [`attributes`](#node-attributes)  
**Read only**: true  
### element.style
**Signature:** element.style : `Style`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.clientLeft
**Signature:** element.clientLeft : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.clientTop
**Signature:** element.clientTop : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.clientWidth
**Signature:** element.clientWidth : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.clientHeight
**Signature:** element.clientHeight : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.offsetLeft
**Signature:** element.offsetLeft : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.offsetTop
**Signature:** element.offsetTop : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.offsetWidth
**Signature:** element.offsetWidth : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.offsetHeight
**Signature:** element.offsetHeight : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.scrollLeft
**Signature:** element.scrollLeft : `number`

**Kind**: instance property of [`Element`](#element)  
### element.scrollTop
**Signature:** element.scrollTop : `number`

**Kind**: instance property of [`Element`](#element)  
### element.scrollWidth
**Signature:** element.scrollWidth : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.scrollHeight
**Signature:** element.scrollHeight : `number`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.disabled
**Signature:** element.disabled : `boolean`

**Kind**: instance property of [`Element`](#element)  
### element.innerHTML
**Signature:** element.innerHTML : `string`

**Kind**: instance property of [`Element`](#element)  
### element.outerHTML
**Signature:** element.outerHTML : `string`

**Kind**: instance property of [`Element`](#element)  
### element.contentEditable
**Signature:** element.contentEditable

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.isConnected
**Signature:** element.isConnected : `boolean`

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.parentNode
**Signature:** element.parentNode : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.firstChild
**Signature:** element.firstChild : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.lastChild
**Signature:** element.lastChild : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.previousSibling
**Signature:** element.previousSibling : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.nextSibling
**Signature:** element.nextSibling : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.firstElementChild
**Signature:** element.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.lastElementChild
**Signature:** element.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.previousElementSibling
**Signature:** element.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.nextElementSibling
**Signature:** element.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.textContent
**Signature:** element.textContent : `string`

**Kind**: instance property of [`Element`](#element)  
### element.childNodes
**Signature:** element.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.ownerDocument
**Signature:** element.ownerDocument

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.offsetParent
**Signature:** element.offsetParent

**Kind**: instance property of [`Element`](#element)  
**Read only**: true  
### element.scrollIntoView
**Signature:** element.scrollIntoView()

**Kind**: instance method of [`Element`](#element)  
### element.scrollIntoViewIfNeeded
**Signature:** element.scrollIntoViewIfNeeded()

**Kind**: instance method of [`Element`](#element)  
### element.focus
**Signature:** element.focus()

**Kind**: instance method of [`Element`](#element)  
### element.blur
**Signature:** element.blur()

**Kind**: instance method of [`Element`](#element)  
### element.getAttribute
**Signature:** element.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.setAttribute
**Signature:** element.setAttribute(name, value)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### element.removeAttribute
**Signature:** element.removeAttribute(name)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.hasAttribute
**Signature:** element.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.getAttributeNode
**Signature:** element.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.setAttributeNode
**Signature:** element.setAttributeNode(newAttr)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### element.removeAttributeNode
**Signature:** element.removeAttributeNode(oldAttr)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### element.getElementsByClassName
**Signature:** element.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.getElementsByTagName
**Signature:** element.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| name | `string` | 

### element.querySelector
**Signature:** element.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### element.querySelectorAll
**Signature:** element.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### element.getBoundingClientRect
**Signature:** element.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`Element`](#element)  
### element.insertAdjacentHTML
**Signature:** element.insertAdjacentHTML(position, value)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### element.insertAdjacentElement
**Signature:** element.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### element.insertAdjacentText
**Signature:** element.insertAdjacentText(position, text)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### element.hasChildNodes
**Signature:** element.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`Element`](#element)  
### element.cloneNode
**Signature:** element.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### element.appendChild
**Signature:** element.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### element.insertBefore
**Signature:** element.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### element.replaceChild
**Signature:** element.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### element.removeChild
**Signature:** element.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### element.remove
**Signature:** element.remove()

**Kind**: instance method of [`Element`](#element)  
### element.before
**Signature:** element.before(...nodes)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### element.after
**Signature:** element.after(...nodes)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### element.replaceWith
**Signature:** element.replaceWith(...nodes)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### element.addEventListener
**Signature:** element.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Element`](#element)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### element.removeEventListener
**Signature:** element.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`Element`](#element)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### element.dispatchEvent
**Signature:** element.dispatchEvent(event)

**Kind**: instance method of [`Element`](#element)  

| Param | Type |
| --- | --- |
| event | `*` | 

