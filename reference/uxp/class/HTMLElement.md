## HTMLElement
**Signature:** HTMLElement ⇐ [`Element`](#element)

**Kind**: global class  
**Extends**: [`Element`](#element)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement  

* [HTMLElement](#htmlelement) ⇐ [`Element`](#element)
    * [new HTMLElement(document, nodeName, namespaceURI)](#new-htmlelement-new)
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

### new HTMLElement
**Signature:** new HTMLElement(document, nodeName, namespaceURI)

Creates an instance of HTMLElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlElement.nodeName
**Signature:** htmlElement.nodeName : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.localName
**Signature:** htmlElement.localName : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.tagName
**Signature:** htmlElement.tagName : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.nodeType
**Signature:** htmlElement.nodeType : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.namespaceURI
**Signature:** htmlElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.id
**Signature:** htmlElement.id : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.className
**Signature:** htmlElement.className : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.attributes
**Signature:** htmlElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.style
**Signature:** htmlElement.style : `Style`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.clientLeft
**Signature:** htmlElement.clientLeft : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.clientTop
**Signature:** htmlElement.clientTop : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.clientWidth
**Signature:** htmlElement.clientWidth : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.clientHeight
**Signature:** htmlElement.clientHeight : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.offsetLeft
**Signature:** htmlElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.offsetTop
**Signature:** htmlElement.offsetTop : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.offsetWidth
**Signature:** htmlElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.offsetHeight
**Signature:** htmlElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.scrollLeft
**Signature:** htmlElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.scrollTop
**Signature:** htmlElement.scrollTop : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.scrollWidth
**Signature:** htmlElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.scrollHeight
**Signature:** htmlElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.disabled
**Signature:** htmlElement.disabled : `boolean`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.innerHTML
**Signature:** htmlElement.innerHTML : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.outerHTML
**Signature:** htmlElement.outerHTML : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.contentEditable
**Signature:** htmlElement.contentEditable

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.isConnected
**Signature:** htmlElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.parentNode
**Signature:** htmlElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.firstChild
**Signature:** htmlElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.lastChild
**Signature:** htmlElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.previousSibling
**Signature:** htmlElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.nextSibling
**Signature:** htmlElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.firstElementChild
**Signature:** htmlElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.lastElementChild
**Signature:** htmlElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.previousElementSibling
**Signature:** htmlElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.nextElementSibling
**Signature:** htmlElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.textContent
**Signature:** htmlElement.textContent : `string`

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
### htmlElement.childNodes
**Signature:** htmlElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.ownerDocument
**Signature:** htmlElement.ownerDocument

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.offsetParent
**Signature:** htmlElement.offsetParent

**Kind**: instance property of [`HTMLElement`](#htmlelement)  
**Read only**: true  
### htmlElement.scrollIntoView
**Signature:** htmlElement.scrollIntoView()

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.scrollIntoViewIfNeeded
**Signature:** htmlElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.focus
**Signature:** htmlElement.focus()

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.blur
**Signature:** htmlElement.blur()

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.getAttribute
**Signature:** htmlElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.setAttribute
**Signature:** htmlElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlElement.removeAttribute
**Signature:** htmlElement.removeAttribute(name)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.hasAttribute
**Signature:** htmlElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.getAttributeNode
**Signature:** htmlElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.setAttributeNode
**Signature:** htmlElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlElement.removeAttributeNode
**Signature:** htmlElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlElement.getElementsByClassName
**Signature:** htmlElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.getElementsByTagName
**Signature:** htmlElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlElement.querySelector
**Signature:** htmlElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlElement.querySelectorAll
**Signature:** htmlElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlElement.getBoundingClientRect
**Signature:** htmlElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.insertAdjacentHTML
**Signature:** htmlElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlElement.insertAdjacentElement
**Signature:** htmlElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlElement.insertAdjacentText
**Signature:** htmlElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlElement.hasChildNodes
**Signature:** htmlElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.cloneNode
**Signature:** htmlElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlElement.appendChild
**Signature:** htmlElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlElement.insertBefore
**Signature:** htmlElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlElement.replaceChild
**Signature:** htmlElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlElement.removeChild
**Signature:** htmlElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlElement.remove
**Signature:** htmlElement.remove()

**Kind**: instance method of [`HTMLElement`](#htmlelement)  
### htmlElement.before
**Signature:** htmlElement.before(...nodes)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlElement.after
**Signature:** htmlElement.after(...nodes)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlElement.replaceWith
**Signature:** htmlElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlElement.addEventListener
**Signature:** htmlElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlElement.removeEventListener
**Signature:** htmlElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlElement.dispatchEvent
**Signature:** htmlElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLElement`](#htmlelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

