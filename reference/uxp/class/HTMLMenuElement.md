## HTMLMenuElement
**Signature:** HTMLMenuElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement  

* [HTMLMenuElement](#htmlmenuelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLMenuElement(document, nodeName, namespaceURI)](#new-htmlmenuelement-new)
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
    * [.popupAt(x, y)](#htmlmenuelement-popupat)
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

### new HTMLMenuElement
**Signature:** new HTMLMenuElement(document, nodeName, namespaceURI)

Creates an instance of HTMLMenuElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlMenuElement.nodeName
**Signature:** htmlMenuElement.nodeName : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.localName
**Signature:** htmlMenuElement.localName : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.tagName
**Signature:** htmlMenuElement.tagName : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.nodeType
**Signature:** htmlMenuElement.nodeType : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.namespaceURI
**Signature:** htmlMenuElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.id
**Signature:** htmlMenuElement.id : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.className
**Signature:** htmlMenuElement.className : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.attributes
**Signature:** htmlMenuElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.style
**Signature:** htmlMenuElement.style : `Style`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.clientLeft
**Signature:** htmlMenuElement.clientLeft : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.clientTop
**Signature:** htmlMenuElement.clientTop : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.clientWidth
**Signature:** htmlMenuElement.clientWidth : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.clientHeight
**Signature:** htmlMenuElement.clientHeight : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.offsetLeft
**Signature:** htmlMenuElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.offsetTop
**Signature:** htmlMenuElement.offsetTop : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.offsetWidth
**Signature:** htmlMenuElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.offsetHeight
**Signature:** htmlMenuElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.scrollLeft
**Signature:** htmlMenuElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.scrollTop
**Signature:** htmlMenuElement.scrollTop : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.scrollWidth
**Signature:** htmlMenuElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.scrollHeight
**Signature:** htmlMenuElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.disabled
**Signature:** htmlMenuElement.disabled : `boolean`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.innerHTML
**Signature:** htmlMenuElement.innerHTML : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.outerHTML
**Signature:** htmlMenuElement.outerHTML : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.contentEditable
**Signature:** htmlMenuElement.contentEditable

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.isConnected
**Signature:** htmlMenuElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.parentNode
**Signature:** htmlMenuElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.firstChild
**Signature:** htmlMenuElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.lastChild
**Signature:** htmlMenuElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.previousSibling
**Signature:** htmlMenuElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.nextSibling
**Signature:** htmlMenuElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.firstElementChild
**Signature:** htmlMenuElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.lastElementChild
**Signature:** htmlMenuElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.previousElementSibling
**Signature:** htmlMenuElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.nextElementSibling
**Signature:** htmlMenuElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.textContent
**Signature:** htmlMenuElement.textContent : `string`

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.childNodes
**Signature:** htmlMenuElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.ownerDocument
**Signature:** htmlMenuElement.ownerDocument

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.offsetParent
**Signature:** htmlMenuElement.offsetParent

**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  
### htmlMenuElement.popupAt
**Signature:** htmlMenuElement.popupAt(x, y)

Render the menu at the `x`,`y` coordinates

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| x | `number` | 
| y | `number` | 

### htmlMenuElement.scrollIntoView
**Signature:** htmlMenuElement.scrollIntoView()

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.scrollIntoViewIfNeeded
**Signature:** htmlMenuElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.focus
**Signature:** htmlMenuElement.focus()

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.blur
**Signature:** htmlMenuElement.blur()

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.getAttribute
**Signature:** htmlMenuElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.setAttribute
**Signature:** htmlMenuElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlMenuElement.removeAttribute
**Signature:** htmlMenuElement.removeAttribute(name)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.hasAttribute
**Signature:** htmlMenuElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.getAttributeNode
**Signature:** htmlMenuElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.setAttributeNode
**Signature:** htmlMenuElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlMenuElement.removeAttributeNode
**Signature:** htmlMenuElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlMenuElement.getElementsByClassName
**Signature:** htmlMenuElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.getElementsByTagName
**Signature:** htmlMenuElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlMenuElement.querySelector
**Signature:** htmlMenuElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlMenuElement.querySelectorAll
**Signature:** htmlMenuElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlMenuElement.getBoundingClientRect
**Signature:** htmlMenuElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.insertAdjacentHTML
**Signature:** htmlMenuElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlMenuElement.insertAdjacentElement
**Signature:** htmlMenuElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlMenuElement.insertAdjacentText
**Signature:** htmlMenuElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlMenuElement.hasChildNodes
**Signature:** htmlMenuElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.cloneNode
**Signature:** htmlMenuElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlMenuElement.appendChild
**Signature:** htmlMenuElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlMenuElement.insertBefore
**Signature:** htmlMenuElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlMenuElement.replaceChild
**Signature:** htmlMenuElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlMenuElement.removeChild
**Signature:** htmlMenuElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlMenuElement.remove
**Signature:** htmlMenuElement.remove()

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  
### htmlMenuElement.before
**Signature:** htmlMenuElement.before(...nodes)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlMenuElement.after
**Signature:** htmlMenuElement.after(...nodes)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlMenuElement.replaceWith
**Signature:** htmlMenuElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlMenuElement.addEventListener
**Signature:** htmlMenuElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlMenuElement.removeEventListener
**Signature:** htmlMenuElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlMenuElement.dispatchEvent
**Signature:** htmlMenuElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

