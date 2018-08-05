## HTMLImageElement
**Signature:** HTMLImageElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement  

* [HTMLImageElement](#htmlimageelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLImageElement(document, nodeName, namespaceURI)](#new-htmlimageelement-new)
    * [.src](#htmlimageelement-src) : `string` | `File`
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

### new HTMLImageElement
**Signature:** new HTMLImageElement(document, nodeName, namespaceURI)

Creates an instance of HTMLImageElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlImageElement.src
**Signature:** htmlImageElement.src : `string` | `File`

The source of the image

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.nodeName
**Signature:** htmlImageElement.nodeName : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.localName
**Signature:** htmlImageElement.localName : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.tagName
**Signature:** htmlImageElement.tagName : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.nodeType
**Signature:** htmlImageElement.nodeType : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.namespaceURI
**Signature:** htmlImageElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.id
**Signature:** htmlImageElement.id : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.className
**Signature:** htmlImageElement.className : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.attributes
**Signature:** htmlImageElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.style
**Signature:** htmlImageElement.style : `Style`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.clientLeft
**Signature:** htmlImageElement.clientLeft : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.clientTop
**Signature:** htmlImageElement.clientTop : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.clientWidth
**Signature:** htmlImageElement.clientWidth : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.clientHeight
**Signature:** htmlImageElement.clientHeight : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.offsetLeft
**Signature:** htmlImageElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.offsetTop
**Signature:** htmlImageElement.offsetTop : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.offsetWidth
**Signature:** htmlImageElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.offsetHeight
**Signature:** htmlImageElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.scrollLeft
**Signature:** htmlImageElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.scrollTop
**Signature:** htmlImageElement.scrollTop : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.scrollWidth
**Signature:** htmlImageElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.scrollHeight
**Signature:** htmlImageElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.disabled
**Signature:** htmlImageElement.disabled : `boolean`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.innerHTML
**Signature:** htmlImageElement.innerHTML : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.outerHTML
**Signature:** htmlImageElement.outerHTML : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.contentEditable
**Signature:** htmlImageElement.contentEditable

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.isConnected
**Signature:** htmlImageElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.parentNode
**Signature:** htmlImageElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.firstChild
**Signature:** htmlImageElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.lastChild
**Signature:** htmlImageElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.previousSibling
**Signature:** htmlImageElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.nextSibling
**Signature:** htmlImageElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.firstElementChild
**Signature:** htmlImageElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.lastElementChild
**Signature:** htmlImageElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.previousElementSibling
**Signature:** htmlImageElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.nextElementSibling
**Signature:** htmlImageElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.textContent
**Signature:** htmlImageElement.textContent : `string`

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.childNodes
**Signature:** htmlImageElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.ownerDocument
**Signature:** htmlImageElement.ownerDocument

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.offsetParent
**Signature:** htmlImageElement.offsetParent

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  
### htmlImageElement.scrollIntoView
**Signature:** htmlImageElement.scrollIntoView()

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.scrollIntoViewIfNeeded
**Signature:** htmlImageElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.focus
**Signature:** htmlImageElement.focus()

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.blur
**Signature:** htmlImageElement.blur()

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.getAttribute
**Signature:** htmlImageElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.setAttribute
**Signature:** htmlImageElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlImageElement.removeAttribute
**Signature:** htmlImageElement.removeAttribute(name)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.hasAttribute
**Signature:** htmlImageElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.getAttributeNode
**Signature:** htmlImageElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.setAttributeNode
**Signature:** htmlImageElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlImageElement.removeAttributeNode
**Signature:** htmlImageElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlImageElement.getElementsByClassName
**Signature:** htmlImageElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.getElementsByTagName
**Signature:** htmlImageElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlImageElement.querySelector
**Signature:** htmlImageElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlImageElement.querySelectorAll
**Signature:** htmlImageElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlImageElement.getBoundingClientRect
**Signature:** htmlImageElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.insertAdjacentHTML
**Signature:** htmlImageElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlImageElement.insertAdjacentElement
**Signature:** htmlImageElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlImageElement.insertAdjacentText
**Signature:** htmlImageElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlImageElement.hasChildNodes
**Signature:** htmlImageElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.cloneNode
**Signature:** htmlImageElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlImageElement.appendChild
**Signature:** htmlImageElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlImageElement.insertBefore
**Signature:** htmlImageElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlImageElement.replaceChild
**Signature:** htmlImageElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlImageElement.removeChild
**Signature:** htmlImageElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlImageElement.remove
**Signature:** htmlImageElement.remove()

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  
### htmlImageElement.before
**Signature:** htmlImageElement.before(...nodes)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlImageElement.after
**Signature:** htmlImageElement.after(...nodes)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlImageElement.replaceWith
**Signature:** htmlImageElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlImageElement.addEventListener
**Signature:** htmlImageElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlImageElement.removeEventListener
**Signature:** htmlImageElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlImageElement.dispatchEvent
**Signature:** htmlImageElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

