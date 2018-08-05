## HTMLLinkElement
**Signature:** HTMLLinkElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement  

* [HTMLLinkElement](#htmllinkelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLLinkElement(document, nodeName, namespaceURI)](#new-htmllinkelement-new)
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

### new HTMLLinkElement
**Signature:** new HTMLLinkElement(document, nodeName, namespaceURI)

Creates an instance of HTMLLinkElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlLinkElement.nodeName
**Signature:** htmlLinkElement.nodeName : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.localName
**Signature:** htmlLinkElement.localName : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.tagName
**Signature:** htmlLinkElement.tagName : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.nodeType
**Signature:** htmlLinkElement.nodeType : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.namespaceURI
**Signature:** htmlLinkElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.id
**Signature:** htmlLinkElement.id : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.className
**Signature:** htmlLinkElement.className : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.attributes
**Signature:** htmlLinkElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.style
**Signature:** htmlLinkElement.style : `Style`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.clientLeft
**Signature:** htmlLinkElement.clientLeft : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.clientTop
**Signature:** htmlLinkElement.clientTop : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.clientWidth
**Signature:** htmlLinkElement.clientWidth : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.clientHeight
**Signature:** htmlLinkElement.clientHeight : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.offsetLeft
**Signature:** htmlLinkElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.offsetTop
**Signature:** htmlLinkElement.offsetTop : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.offsetWidth
**Signature:** htmlLinkElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.offsetHeight
**Signature:** htmlLinkElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.scrollLeft
**Signature:** htmlLinkElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.scrollTop
**Signature:** htmlLinkElement.scrollTop : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.scrollWidth
**Signature:** htmlLinkElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.scrollHeight
**Signature:** htmlLinkElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.disabled
**Signature:** htmlLinkElement.disabled : `boolean`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.innerHTML
**Signature:** htmlLinkElement.innerHTML : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.outerHTML
**Signature:** htmlLinkElement.outerHTML : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.contentEditable
**Signature:** htmlLinkElement.contentEditable

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.isConnected
**Signature:** htmlLinkElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.parentNode
**Signature:** htmlLinkElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.firstChild
**Signature:** htmlLinkElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.lastChild
**Signature:** htmlLinkElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.previousSibling
**Signature:** htmlLinkElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.nextSibling
**Signature:** htmlLinkElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.firstElementChild
**Signature:** htmlLinkElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.lastElementChild
**Signature:** htmlLinkElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.previousElementSibling
**Signature:** htmlLinkElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.nextElementSibling
**Signature:** htmlLinkElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.textContent
**Signature:** htmlLinkElement.textContent : `string`

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.childNodes
**Signature:** htmlLinkElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.ownerDocument
**Signature:** htmlLinkElement.ownerDocument

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.offsetParent
**Signature:** htmlLinkElement.offsetParent

**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  
### htmlLinkElement.scrollIntoView
**Signature:** htmlLinkElement.scrollIntoView()

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.scrollIntoViewIfNeeded
**Signature:** htmlLinkElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.focus
**Signature:** htmlLinkElement.focus()

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.blur
**Signature:** htmlLinkElement.blur()

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.getAttribute
**Signature:** htmlLinkElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.setAttribute
**Signature:** htmlLinkElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlLinkElement.removeAttribute
**Signature:** htmlLinkElement.removeAttribute(name)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.hasAttribute
**Signature:** htmlLinkElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.getAttributeNode
**Signature:** htmlLinkElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.setAttributeNode
**Signature:** htmlLinkElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlLinkElement.removeAttributeNode
**Signature:** htmlLinkElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlLinkElement.getElementsByClassName
**Signature:** htmlLinkElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.getElementsByTagName
**Signature:** htmlLinkElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLinkElement.querySelector
**Signature:** htmlLinkElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlLinkElement.querySelectorAll
**Signature:** htmlLinkElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlLinkElement.getBoundingClientRect
**Signature:** htmlLinkElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.insertAdjacentHTML
**Signature:** htmlLinkElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlLinkElement.insertAdjacentElement
**Signature:** htmlLinkElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlLinkElement.insertAdjacentText
**Signature:** htmlLinkElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlLinkElement.hasChildNodes
**Signature:** htmlLinkElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.cloneNode
**Signature:** htmlLinkElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlLinkElement.appendChild
**Signature:** htmlLinkElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlLinkElement.insertBefore
**Signature:** htmlLinkElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlLinkElement.replaceChild
**Signature:** htmlLinkElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlLinkElement.removeChild
**Signature:** htmlLinkElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlLinkElement.remove
**Signature:** htmlLinkElement.remove()

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  
### htmlLinkElement.before
**Signature:** htmlLinkElement.before(...nodes)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLinkElement.after
**Signature:** htmlLinkElement.after(...nodes)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLinkElement.replaceWith
**Signature:** htmlLinkElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLinkElement.addEventListener
**Signature:** htmlLinkElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlLinkElement.removeEventListener
**Signature:** htmlLinkElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlLinkElement.dispatchEvent
**Signature:** htmlLinkElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

