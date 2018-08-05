## HTMLBodyElement
**Signature:** HTMLBodyElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement  

* [HTMLBodyElement](#htmlbodyelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLBodyElement(document, nodeName, namespaceURI)](#new-htmlbodyelement-new)
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

### new HTMLBodyElement
**Signature:** new HTMLBodyElement(document, nodeName, namespaceURI)

Creates an instance of HTMLBodyElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlBodyElement.nodeName
**Signature:** htmlBodyElement.nodeName : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.localName
**Signature:** htmlBodyElement.localName : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.tagName
**Signature:** htmlBodyElement.tagName : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.nodeType
**Signature:** htmlBodyElement.nodeType : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.namespaceURI
**Signature:** htmlBodyElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.id
**Signature:** htmlBodyElement.id : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.className
**Signature:** htmlBodyElement.className : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.attributes
**Signature:** htmlBodyElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.style
**Signature:** htmlBodyElement.style : `Style`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.clientLeft
**Signature:** htmlBodyElement.clientLeft : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.clientTop
**Signature:** htmlBodyElement.clientTop : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.clientWidth
**Signature:** htmlBodyElement.clientWidth : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.clientHeight
**Signature:** htmlBodyElement.clientHeight : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.offsetLeft
**Signature:** htmlBodyElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.offsetTop
**Signature:** htmlBodyElement.offsetTop : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.offsetWidth
**Signature:** htmlBodyElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.offsetHeight
**Signature:** htmlBodyElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.scrollLeft
**Signature:** htmlBodyElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.scrollTop
**Signature:** htmlBodyElement.scrollTop : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.scrollWidth
**Signature:** htmlBodyElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.scrollHeight
**Signature:** htmlBodyElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.disabled
**Signature:** htmlBodyElement.disabled : `boolean`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.innerHTML
**Signature:** htmlBodyElement.innerHTML : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.outerHTML
**Signature:** htmlBodyElement.outerHTML : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.contentEditable
**Signature:** htmlBodyElement.contentEditable

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.isConnected
**Signature:** htmlBodyElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.parentNode
**Signature:** htmlBodyElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.firstChild
**Signature:** htmlBodyElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.lastChild
**Signature:** htmlBodyElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.previousSibling
**Signature:** htmlBodyElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.nextSibling
**Signature:** htmlBodyElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.firstElementChild
**Signature:** htmlBodyElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.lastElementChild
**Signature:** htmlBodyElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.previousElementSibling
**Signature:** htmlBodyElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.nextElementSibling
**Signature:** htmlBodyElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.textContent
**Signature:** htmlBodyElement.textContent : `string`

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.childNodes
**Signature:** htmlBodyElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.ownerDocument
**Signature:** htmlBodyElement.ownerDocument

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.offsetParent
**Signature:** htmlBodyElement.offsetParent

**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)  
**Read only**: true  
### htmlBodyElement.scrollIntoView
**Signature:** htmlBodyElement.scrollIntoView()

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.scrollIntoViewIfNeeded
**Signature:** htmlBodyElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.focus
**Signature:** htmlBodyElement.focus()

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.blur
**Signature:** htmlBodyElement.blur()

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.getAttribute
**Signature:** htmlBodyElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.setAttribute
**Signature:** htmlBodyElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlBodyElement.removeAttribute
**Signature:** htmlBodyElement.removeAttribute(name)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.hasAttribute
**Signature:** htmlBodyElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.getAttributeNode
**Signature:** htmlBodyElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.setAttributeNode
**Signature:** htmlBodyElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlBodyElement.removeAttributeNode
**Signature:** htmlBodyElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlBodyElement.getElementsByClassName
**Signature:** htmlBodyElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.getElementsByTagName
**Signature:** htmlBodyElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlBodyElement.querySelector
**Signature:** htmlBodyElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlBodyElement.querySelectorAll
**Signature:** htmlBodyElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlBodyElement.getBoundingClientRect
**Signature:** htmlBodyElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.insertAdjacentHTML
**Signature:** htmlBodyElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlBodyElement.insertAdjacentElement
**Signature:** htmlBodyElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlBodyElement.insertAdjacentText
**Signature:** htmlBodyElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlBodyElement.hasChildNodes
**Signature:** htmlBodyElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.cloneNode
**Signature:** htmlBodyElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlBodyElement.appendChild
**Signature:** htmlBodyElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlBodyElement.insertBefore
**Signature:** htmlBodyElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlBodyElement.replaceChild
**Signature:** htmlBodyElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlBodyElement.removeChild
**Signature:** htmlBodyElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlBodyElement.remove
**Signature:** htmlBodyElement.remove()

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  
### htmlBodyElement.before
**Signature:** htmlBodyElement.before(...nodes)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlBodyElement.after
**Signature:** htmlBodyElement.after(...nodes)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlBodyElement.replaceWith
**Signature:** htmlBodyElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlBodyElement.addEventListener
**Signature:** htmlBodyElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlBodyElement.removeEventListener
**Signature:** htmlBodyElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlBodyElement.dispatchEvent
**Signature:** htmlBodyElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

