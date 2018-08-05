## HTMLStyleElement
**Signature:** HTMLStyleElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement  

* [HTMLStyleElement](#htmlstyleelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLStyleElement(document, nodeName, namespaceURI)](#new-htmlstyleelement-new)
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

### new HTMLStyleElement
**Signature:** new HTMLStyleElement(document, nodeName, namespaceURI)

Creates an instance of HTMLStyleElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlStyleElement.nodeName
**Signature:** htmlStyleElement.nodeName : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.localName
**Signature:** htmlStyleElement.localName : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.tagName
**Signature:** htmlStyleElement.tagName : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.nodeType
**Signature:** htmlStyleElement.nodeType : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.namespaceURI
**Signature:** htmlStyleElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.id
**Signature:** htmlStyleElement.id : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.className
**Signature:** htmlStyleElement.className : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.attributes
**Signature:** htmlStyleElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.style
**Signature:** htmlStyleElement.style : `Style`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.clientLeft
**Signature:** htmlStyleElement.clientLeft : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.clientTop
**Signature:** htmlStyleElement.clientTop : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.clientWidth
**Signature:** htmlStyleElement.clientWidth : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.clientHeight
**Signature:** htmlStyleElement.clientHeight : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.offsetLeft
**Signature:** htmlStyleElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.offsetTop
**Signature:** htmlStyleElement.offsetTop : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.offsetWidth
**Signature:** htmlStyleElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.offsetHeight
**Signature:** htmlStyleElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.scrollLeft
**Signature:** htmlStyleElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.scrollTop
**Signature:** htmlStyleElement.scrollTop : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.scrollWidth
**Signature:** htmlStyleElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.scrollHeight
**Signature:** htmlStyleElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.disabled
**Signature:** htmlStyleElement.disabled : `boolean`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.innerHTML
**Signature:** htmlStyleElement.innerHTML : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.outerHTML
**Signature:** htmlStyleElement.outerHTML : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.contentEditable
**Signature:** htmlStyleElement.contentEditable

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.isConnected
**Signature:** htmlStyleElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.parentNode
**Signature:** htmlStyleElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.firstChild
**Signature:** htmlStyleElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.lastChild
**Signature:** htmlStyleElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.previousSibling
**Signature:** htmlStyleElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.nextSibling
**Signature:** htmlStyleElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.firstElementChild
**Signature:** htmlStyleElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.lastElementChild
**Signature:** htmlStyleElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.previousElementSibling
**Signature:** htmlStyleElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.nextElementSibling
**Signature:** htmlStyleElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.textContent
**Signature:** htmlStyleElement.textContent : `string`

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.childNodes
**Signature:** htmlStyleElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.ownerDocument
**Signature:** htmlStyleElement.ownerDocument

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.offsetParent
**Signature:** htmlStyleElement.offsetParent

**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)  
**Read only**: true  
### htmlStyleElement.scrollIntoView
**Signature:** htmlStyleElement.scrollIntoView()

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.scrollIntoViewIfNeeded
**Signature:** htmlStyleElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.focus
**Signature:** htmlStyleElement.focus()

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.blur
**Signature:** htmlStyleElement.blur()

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.getAttribute
**Signature:** htmlStyleElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.setAttribute
**Signature:** htmlStyleElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlStyleElement.removeAttribute
**Signature:** htmlStyleElement.removeAttribute(name)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.hasAttribute
**Signature:** htmlStyleElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.getAttributeNode
**Signature:** htmlStyleElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.setAttributeNode
**Signature:** htmlStyleElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlStyleElement.removeAttributeNode
**Signature:** htmlStyleElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlStyleElement.getElementsByClassName
**Signature:** htmlStyleElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.getElementsByTagName
**Signature:** htmlStyleElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlStyleElement.querySelector
**Signature:** htmlStyleElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlStyleElement.querySelectorAll
**Signature:** htmlStyleElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlStyleElement.getBoundingClientRect
**Signature:** htmlStyleElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.insertAdjacentHTML
**Signature:** htmlStyleElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlStyleElement.insertAdjacentElement
**Signature:** htmlStyleElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlStyleElement.insertAdjacentText
**Signature:** htmlStyleElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlStyleElement.hasChildNodes
**Signature:** htmlStyleElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.cloneNode
**Signature:** htmlStyleElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlStyleElement.appendChild
**Signature:** htmlStyleElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlStyleElement.insertBefore
**Signature:** htmlStyleElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlStyleElement.replaceChild
**Signature:** htmlStyleElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlStyleElement.removeChild
**Signature:** htmlStyleElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlStyleElement.remove
**Signature:** htmlStyleElement.remove()

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  
### htmlStyleElement.before
**Signature:** htmlStyleElement.before(...nodes)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlStyleElement.after
**Signature:** htmlStyleElement.after(...nodes)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlStyleElement.replaceWith
**Signature:** htmlStyleElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlStyleElement.addEventListener
**Signature:** htmlStyleElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlStyleElement.removeEventListener
**Signature:** htmlStyleElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlStyleElement.dispatchEvent
**Signature:** htmlStyleElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

