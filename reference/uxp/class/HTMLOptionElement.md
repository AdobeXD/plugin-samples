## HTMLOptionElement
**Signature:** HTMLOptionElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement  

* [HTMLOptionElement](#htmloptionelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLOptionElement(document, nodeName, namespaceURI)](#new-htmloptionelement-new)
    * [.value](#htmloptionelement-value) : `string`
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

### new HTMLOptionElement
**Signature:** new HTMLOptionElement(document, nodeName, namespaceURI)

Creates an instance of HTMLOptionElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlOptionElement.value
**Signature:** htmlOptionElement.value : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.nodeName
**Signature:** htmlOptionElement.nodeName : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.localName
**Signature:** htmlOptionElement.localName : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.tagName
**Signature:** htmlOptionElement.tagName : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.nodeType
**Signature:** htmlOptionElement.nodeType : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.namespaceURI
**Signature:** htmlOptionElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.id
**Signature:** htmlOptionElement.id : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.className
**Signature:** htmlOptionElement.className : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.attributes
**Signature:** htmlOptionElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.style
**Signature:** htmlOptionElement.style : `Style`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.clientLeft
**Signature:** htmlOptionElement.clientLeft : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.clientTop
**Signature:** htmlOptionElement.clientTop : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.clientWidth
**Signature:** htmlOptionElement.clientWidth : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.clientHeight
**Signature:** htmlOptionElement.clientHeight : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.offsetLeft
**Signature:** htmlOptionElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.offsetTop
**Signature:** htmlOptionElement.offsetTop : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.offsetWidth
**Signature:** htmlOptionElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.offsetHeight
**Signature:** htmlOptionElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.scrollLeft
**Signature:** htmlOptionElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.scrollTop
**Signature:** htmlOptionElement.scrollTop : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.scrollWidth
**Signature:** htmlOptionElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.scrollHeight
**Signature:** htmlOptionElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.disabled
**Signature:** htmlOptionElement.disabled : `boolean`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.innerHTML
**Signature:** htmlOptionElement.innerHTML : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.outerHTML
**Signature:** htmlOptionElement.outerHTML : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.contentEditable
**Signature:** htmlOptionElement.contentEditable

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.isConnected
**Signature:** htmlOptionElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.parentNode
**Signature:** htmlOptionElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.firstChild
**Signature:** htmlOptionElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.lastChild
**Signature:** htmlOptionElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.previousSibling
**Signature:** htmlOptionElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.nextSibling
**Signature:** htmlOptionElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.firstElementChild
**Signature:** htmlOptionElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.lastElementChild
**Signature:** htmlOptionElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.previousElementSibling
**Signature:** htmlOptionElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.nextElementSibling
**Signature:** htmlOptionElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.textContent
**Signature:** htmlOptionElement.textContent : `string`

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.childNodes
**Signature:** htmlOptionElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.ownerDocument
**Signature:** htmlOptionElement.ownerDocument

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.offsetParent
**Signature:** htmlOptionElement.offsetParent

**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)  
**Read only**: true  
### htmlOptionElement.scrollIntoView
**Signature:** htmlOptionElement.scrollIntoView()

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.scrollIntoViewIfNeeded
**Signature:** htmlOptionElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.focus
**Signature:** htmlOptionElement.focus()

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.blur
**Signature:** htmlOptionElement.blur()

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.getAttribute
**Signature:** htmlOptionElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.setAttribute
**Signature:** htmlOptionElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlOptionElement.removeAttribute
**Signature:** htmlOptionElement.removeAttribute(name)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.hasAttribute
**Signature:** htmlOptionElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.getAttributeNode
**Signature:** htmlOptionElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.setAttributeNode
**Signature:** htmlOptionElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlOptionElement.removeAttributeNode
**Signature:** htmlOptionElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlOptionElement.getElementsByClassName
**Signature:** htmlOptionElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.getElementsByTagName
**Signature:** htmlOptionElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlOptionElement.querySelector
**Signature:** htmlOptionElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlOptionElement.querySelectorAll
**Signature:** htmlOptionElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlOptionElement.getBoundingClientRect
**Signature:** htmlOptionElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.insertAdjacentHTML
**Signature:** htmlOptionElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlOptionElement.insertAdjacentElement
**Signature:** htmlOptionElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlOptionElement.insertAdjacentText
**Signature:** htmlOptionElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlOptionElement.hasChildNodes
**Signature:** htmlOptionElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.cloneNode
**Signature:** htmlOptionElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlOptionElement.appendChild
**Signature:** htmlOptionElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlOptionElement.insertBefore
**Signature:** htmlOptionElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlOptionElement.replaceChild
**Signature:** htmlOptionElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlOptionElement.removeChild
**Signature:** htmlOptionElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlOptionElement.remove
**Signature:** htmlOptionElement.remove()

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  
### htmlOptionElement.before
**Signature:** htmlOptionElement.before(...nodes)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlOptionElement.after
**Signature:** htmlOptionElement.after(...nodes)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlOptionElement.replaceWith
**Signature:** htmlOptionElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlOptionElement.addEventListener
**Signature:** htmlOptionElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlOptionElement.removeEventListener
**Signature:** htmlOptionElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlOptionElement.dispatchEvent
**Signature:** htmlOptionElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

