## HTMLHtmlElement
**Signature:** HTMLHtmlElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement  

* [HTMLHtmlElement](#htmlhtmlelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLHtmlElement(document, nodeName, namespaceURI)](#new-htmlhtmlelement-new)
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

### new HTMLHtmlElement
**Signature:** new HTMLHtmlElement(document, nodeName, namespaceURI)

Creates an instance of HTMLHtmlElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlHtmlElement.nodeName
**Signature:** htmlHtmlElement.nodeName : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.localName
**Signature:** htmlHtmlElement.localName : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.tagName
**Signature:** htmlHtmlElement.tagName : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.nodeType
**Signature:** htmlHtmlElement.nodeType : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.namespaceURI
**Signature:** htmlHtmlElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.id
**Signature:** htmlHtmlElement.id : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.className
**Signature:** htmlHtmlElement.className : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.attributes
**Signature:** htmlHtmlElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.style
**Signature:** htmlHtmlElement.style : `Style`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.clientLeft
**Signature:** htmlHtmlElement.clientLeft : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.clientTop
**Signature:** htmlHtmlElement.clientTop : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.clientWidth
**Signature:** htmlHtmlElement.clientWidth : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.clientHeight
**Signature:** htmlHtmlElement.clientHeight : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.offsetLeft
**Signature:** htmlHtmlElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.offsetTop
**Signature:** htmlHtmlElement.offsetTop : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.offsetWidth
**Signature:** htmlHtmlElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.offsetHeight
**Signature:** htmlHtmlElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.scrollLeft
**Signature:** htmlHtmlElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.scrollTop
**Signature:** htmlHtmlElement.scrollTop : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.scrollWidth
**Signature:** htmlHtmlElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.scrollHeight
**Signature:** htmlHtmlElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.disabled
**Signature:** htmlHtmlElement.disabled : `boolean`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.innerHTML
**Signature:** htmlHtmlElement.innerHTML : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.outerHTML
**Signature:** htmlHtmlElement.outerHTML : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.contentEditable
**Signature:** htmlHtmlElement.contentEditable

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.isConnected
**Signature:** htmlHtmlElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.parentNode
**Signature:** htmlHtmlElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.firstChild
**Signature:** htmlHtmlElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.lastChild
**Signature:** htmlHtmlElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.previousSibling
**Signature:** htmlHtmlElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.nextSibling
**Signature:** htmlHtmlElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.firstElementChild
**Signature:** htmlHtmlElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.lastElementChild
**Signature:** htmlHtmlElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.previousElementSibling
**Signature:** htmlHtmlElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.nextElementSibling
**Signature:** htmlHtmlElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.textContent
**Signature:** htmlHtmlElement.textContent : `string`

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.childNodes
**Signature:** htmlHtmlElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.ownerDocument
**Signature:** htmlHtmlElement.ownerDocument

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.offsetParent
**Signature:** htmlHtmlElement.offsetParent

**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  
### htmlHtmlElement.scrollIntoView
**Signature:** htmlHtmlElement.scrollIntoView()

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.scrollIntoViewIfNeeded
**Signature:** htmlHtmlElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.focus
**Signature:** htmlHtmlElement.focus()

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.blur
**Signature:** htmlHtmlElement.blur()

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.getAttribute
**Signature:** htmlHtmlElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.setAttribute
**Signature:** htmlHtmlElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlHtmlElement.removeAttribute
**Signature:** htmlHtmlElement.removeAttribute(name)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.hasAttribute
**Signature:** htmlHtmlElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.getAttributeNode
**Signature:** htmlHtmlElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.setAttributeNode
**Signature:** htmlHtmlElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlHtmlElement.removeAttributeNode
**Signature:** htmlHtmlElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlHtmlElement.getElementsByClassName
**Signature:** htmlHtmlElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.getElementsByTagName
**Signature:** htmlHtmlElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlHtmlElement.querySelector
**Signature:** htmlHtmlElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlHtmlElement.querySelectorAll
**Signature:** htmlHtmlElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlHtmlElement.getBoundingClientRect
**Signature:** htmlHtmlElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.insertAdjacentHTML
**Signature:** htmlHtmlElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlHtmlElement.insertAdjacentElement
**Signature:** htmlHtmlElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlHtmlElement.insertAdjacentText
**Signature:** htmlHtmlElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlHtmlElement.hasChildNodes
**Signature:** htmlHtmlElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.cloneNode
**Signature:** htmlHtmlElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlHtmlElement.appendChild
**Signature:** htmlHtmlElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlHtmlElement.insertBefore
**Signature:** htmlHtmlElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlHtmlElement.replaceChild
**Signature:** htmlHtmlElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlHtmlElement.removeChild
**Signature:** htmlHtmlElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlHtmlElement.remove
**Signature:** htmlHtmlElement.remove()

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  
### htmlHtmlElement.before
**Signature:** htmlHtmlElement.before(...nodes)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHtmlElement.after
**Signature:** htmlHtmlElement.after(...nodes)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHtmlElement.replaceWith
**Signature:** htmlHtmlElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlHtmlElement.addEventListener
**Signature:** htmlHtmlElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlHtmlElement.removeEventListener
**Signature:** htmlHtmlElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlHtmlElement.dispatchEvent
**Signature:** htmlHtmlElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

