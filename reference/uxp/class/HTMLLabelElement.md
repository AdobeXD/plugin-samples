## HTMLLabelElement
**Signature:** HTMLLabelElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement  

* [HTMLLabelElement](#htmllabelelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLLabelElement(document, nodeName, namespaceURI)](#new-htmllabelelement-new)
    * [.control](#htmllabelelement-control) : [`HTMLElement`](#htmlelement)
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

### new HTMLLabelElement
**Signature:** new HTMLLabelElement(document, nodeName, namespaceURI)

Creates an instance of HTMLLabelElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlLabelElement.control
**Signature:** htmlLabelElement.control : [`HTMLElement`](#htmlelement)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.nodeName
**Signature:** htmlLabelElement.nodeName : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.localName
**Signature:** htmlLabelElement.localName : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.tagName
**Signature:** htmlLabelElement.tagName : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.nodeType
**Signature:** htmlLabelElement.nodeType : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.namespaceURI
**Signature:** htmlLabelElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.id
**Signature:** htmlLabelElement.id : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.className
**Signature:** htmlLabelElement.className : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.attributes
**Signature:** htmlLabelElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.style
**Signature:** htmlLabelElement.style : `Style`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.clientLeft
**Signature:** htmlLabelElement.clientLeft : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.clientTop
**Signature:** htmlLabelElement.clientTop : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.clientWidth
**Signature:** htmlLabelElement.clientWidth : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.clientHeight
**Signature:** htmlLabelElement.clientHeight : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.offsetLeft
**Signature:** htmlLabelElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.offsetTop
**Signature:** htmlLabelElement.offsetTop : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.offsetWidth
**Signature:** htmlLabelElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.offsetHeight
**Signature:** htmlLabelElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.scrollLeft
**Signature:** htmlLabelElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.scrollTop
**Signature:** htmlLabelElement.scrollTop : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.scrollWidth
**Signature:** htmlLabelElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.scrollHeight
**Signature:** htmlLabelElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.disabled
**Signature:** htmlLabelElement.disabled : `boolean`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.innerHTML
**Signature:** htmlLabelElement.innerHTML : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.outerHTML
**Signature:** htmlLabelElement.outerHTML : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.contentEditable
**Signature:** htmlLabelElement.contentEditable

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.isConnected
**Signature:** htmlLabelElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.parentNode
**Signature:** htmlLabelElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.firstChild
**Signature:** htmlLabelElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.lastChild
**Signature:** htmlLabelElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.previousSibling
**Signature:** htmlLabelElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.nextSibling
**Signature:** htmlLabelElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.firstElementChild
**Signature:** htmlLabelElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.lastElementChild
**Signature:** htmlLabelElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.previousElementSibling
**Signature:** htmlLabelElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.nextElementSibling
**Signature:** htmlLabelElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.textContent
**Signature:** htmlLabelElement.textContent : `string`

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.childNodes
**Signature:** htmlLabelElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.ownerDocument
**Signature:** htmlLabelElement.ownerDocument

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.offsetParent
**Signature:** htmlLabelElement.offsetParent

**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  
### htmlLabelElement.scrollIntoView
**Signature:** htmlLabelElement.scrollIntoView()

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.scrollIntoViewIfNeeded
**Signature:** htmlLabelElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.focus
**Signature:** htmlLabelElement.focus()

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.blur
**Signature:** htmlLabelElement.blur()

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.getAttribute
**Signature:** htmlLabelElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.setAttribute
**Signature:** htmlLabelElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlLabelElement.removeAttribute
**Signature:** htmlLabelElement.removeAttribute(name)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.hasAttribute
**Signature:** htmlLabelElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.getAttributeNode
**Signature:** htmlLabelElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.setAttributeNode
**Signature:** htmlLabelElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlLabelElement.removeAttributeNode
**Signature:** htmlLabelElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlLabelElement.getElementsByClassName
**Signature:** htmlLabelElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.getElementsByTagName
**Signature:** htmlLabelElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlLabelElement.querySelector
**Signature:** htmlLabelElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlLabelElement.querySelectorAll
**Signature:** htmlLabelElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlLabelElement.getBoundingClientRect
**Signature:** htmlLabelElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.insertAdjacentHTML
**Signature:** htmlLabelElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlLabelElement.insertAdjacentElement
**Signature:** htmlLabelElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlLabelElement.insertAdjacentText
**Signature:** htmlLabelElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlLabelElement.hasChildNodes
**Signature:** htmlLabelElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.cloneNode
**Signature:** htmlLabelElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlLabelElement.appendChild
**Signature:** htmlLabelElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlLabelElement.insertBefore
**Signature:** htmlLabelElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlLabelElement.replaceChild
**Signature:** htmlLabelElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlLabelElement.removeChild
**Signature:** htmlLabelElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlLabelElement.remove
**Signature:** htmlLabelElement.remove()

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  
### htmlLabelElement.before
**Signature:** htmlLabelElement.before(...nodes)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLabelElement.after
**Signature:** htmlLabelElement.after(...nodes)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLabelElement.replaceWith
**Signature:** htmlLabelElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlLabelElement.addEventListener
**Signature:** htmlLabelElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlLabelElement.removeEventListener
**Signature:** htmlLabelElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlLabelElement.dispatchEvent
**Signature:** htmlLabelElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

