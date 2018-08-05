## HTMLButtonElement
**Signature:** HTMLButtonElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement  

* [HTMLButtonElement](#htmlbuttonelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLButtonElement(document, nodeName, namespaceURI)](#new-htmlbuttonelement-new)
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

### new HTMLButtonElement
**Signature:** new HTMLButtonElement(document, nodeName, namespaceURI)

Creates an instance of HTMLButtonElement.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) | 
| nodeName | `string` | 
| namespaceURI | `string` | 

### htmlButtonElement.nodeName
**Signature:** htmlButtonElement.nodeName : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.localName
**Signature:** htmlButtonElement.localName : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.tagName
**Signature:** htmlButtonElement.tagName : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.nodeType
**Signature:** htmlButtonElement.nodeType : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.namespaceURI
**Signature:** htmlButtonElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.id
**Signature:** htmlButtonElement.id : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.className
**Signature:** htmlButtonElement.className : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.attributes
**Signature:** htmlButtonElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.style
**Signature:** htmlButtonElement.style : `Style`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.clientLeft
**Signature:** htmlButtonElement.clientLeft : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.clientTop
**Signature:** htmlButtonElement.clientTop : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.clientWidth
**Signature:** htmlButtonElement.clientWidth : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.clientHeight
**Signature:** htmlButtonElement.clientHeight : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.offsetLeft
**Signature:** htmlButtonElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.offsetTop
**Signature:** htmlButtonElement.offsetTop : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.offsetWidth
**Signature:** htmlButtonElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.offsetHeight
**Signature:** htmlButtonElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.scrollLeft
**Signature:** htmlButtonElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.scrollTop
**Signature:** htmlButtonElement.scrollTop : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.scrollWidth
**Signature:** htmlButtonElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.scrollHeight
**Signature:** htmlButtonElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.disabled
**Signature:** htmlButtonElement.disabled : `boolean`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.innerHTML
**Signature:** htmlButtonElement.innerHTML : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.outerHTML
**Signature:** htmlButtonElement.outerHTML : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.contentEditable
**Signature:** htmlButtonElement.contentEditable

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.isConnected
**Signature:** htmlButtonElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.parentNode
**Signature:** htmlButtonElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.firstChild
**Signature:** htmlButtonElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.lastChild
**Signature:** htmlButtonElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.previousSibling
**Signature:** htmlButtonElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.nextSibling
**Signature:** htmlButtonElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.firstElementChild
**Signature:** htmlButtonElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.lastElementChild
**Signature:** htmlButtonElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.previousElementSibling
**Signature:** htmlButtonElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.nextElementSibling
**Signature:** htmlButtonElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.textContent
**Signature:** htmlButtonElement.textContent : `string`

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.childNodes
**Signature:** htmlButtonElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.ownerDocument
**Signature:** htmlButtonElement.ownerDocument

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.offsetParent
**Signature:** htmlButtonElement.offsetParent

**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)  
**Read only**: true  
### htmlButtonElement.scrollIntoView
**Signature:** htmlButtonElement.scrollIntoView()

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.scrollIntoViewIfNeeded
**Signature:** htmlButtonElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.focus
**Signature:** htmlButtonElement.focus()

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.blur
**Signature:** htmlButtonElement.blur()

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.getAttribute
**Signature:** htmlButtonElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.setAttribute
**Signature:** htmlButtonElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlButtonElement.removeAttribute
**Signature:** htmlButtonElement.removeAttribute(name)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.hasAttribute
**Signature:** htmlButtonElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.getAttributeNode
**Signature:** htmlButtonElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.setAttributeNode
**Signature:** htmlButtonElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlButtonElement.removeAttributeNode
**Signature:** htmlButtonElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlButtonElement.getElementsByClassName
**Signature:** htmlButtonElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.getElementsByTagName
**Signature:** htmlButtonElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlButtonElement.querySelector
**Signature:** htmlButtonElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlButtonElement.querySelectorAll
**Signature:** htmlButtonElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlButtonElement.getBoundingClientRect
**Signature:** htmlButtonElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.insertAdjacentHTML
**Signature:** htmlButtonElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlButtonElement.insertAdjacentElement
**Signature:** htmlButtonElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlButtonElement.insertAdjacentText
**Signature:** htmlButtonElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlButtonElement.hasChildNodes
**Signature:** htmlButtonElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.cloneNode
**Signature:** htmlButtonElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlButtonElement.appendChild
**Signature:** htmlButtonElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlButtonElement.insertBefore
**Signature:** htmlButtonElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlButtonElement.replaceChild
**Signature:** htmlButtonElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlButtonElement.removeChild
**Signature:** htmlButtonElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlButtonElement.remove
**Signature:** htmlButtonElement.remove()

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  
### htmlButtonElement.before
**Signature:** htmlButtonElement.before(...nodes)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlButtonElement.after
**Signature:** htmlButtonElement.after(...nodes)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlButtonElement.replaceWith
**Signature:** htmlButtonElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlButtonElement.addEventListener
**Signature:** htmlButtonElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlButtonElement.removeEventListener
**Signature:** htmlButtonElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlButtonElement.dispatchEvent
**Signature:** htmlButtonElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

