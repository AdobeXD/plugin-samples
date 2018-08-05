## HTMLProgressElement
**Signature:** HTMLProgressElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement  

* [HTMLProgressElement](#htmlprogresselement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLProgressElement(document, nodeName, namespaceURI)](#new-htmlprogresselement-new)
    * [.max](#htmlprogresselement-max) : `number`
    * [.value](#htmlprogresselement-value) : `number`
    * [.position](#htmlprogresselement-position) : `number`
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

### new HTMLProgressElement
**Signature:** new HTMLProgressElement(document, nodeName, namespaceURI)

Creates an instance of HTMLProgressElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlProgressElement.max
**Signature:** htmlProgressElement.max : `number`

Maximum value for the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.value
**Signature:** htmlProgressElement.value : `number`

Value of the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.position
**Signature:** htmlProgressElement.position : `number`

Completion value of the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.nodeName
**Signature:** htmlProgressElement.nodeName : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.localName
**Signature:** htmlProgressElement.localName : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.tagName
**Signature:** htmlProgressElement.tagName : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.nodeType
**Signature:** htmlProgressElement.nodeType : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.namespaceURI
**Signature:** htmlProgressElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.id
**Signature:** htmlProgressElement.id : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.className
**Signature:** htmlProgressElement.className : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.attributes
**Signature:** htmlProgressElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.style
**Signature:** htmlProgressElement.style : `Style`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.clientLeft
**Signature:** htmlProgressElement.clientLeft : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.clientTop
**Signature:** htmlProgressElement.clientTop : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.clientWidth
**Signature:** htmlProgressElement.clientWidth : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.clientHeight
**Signature:** htmlProgressElement.clientHeight : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.offsetLeft
**Signature:** htmlProgressElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.offsetTop
**Signature:** htmlProgressElement.offsetTop : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.offsetWidth
**Signature:** htmlProgressElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.offsetHeight
**Signature:** htmlProgressElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.scrollLeft
**Signature:** htmlProgressElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.scrollTop
**Signature:** htmlProgressElement.scrollTop : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.scrollWidth
**Signature:** htmlProgressElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.scrollHeight
**Signature:** htmlProgressElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.disabled
**Signature:** htmlProgressElement.disabled : `boolean`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.innerHTML
**Signature:** htmlProgressElement.innerHTML : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.outerHTML
**Signature:** htmlProgressElement.outerHTML : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.contentEditable
**Signature:** htmlProgressElement.contentEditable

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.isConnected
**Signature:** htmlProgressElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.parentNode
**Signature:** htmlProgressElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.firstChild
**Signature:** htmlProgressElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.lastChild
**Signature:** htmlProgressElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.previousSibling
**Signature:** htmlProgressElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.nextSibling
**Signature:** htmlProgressElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.firstElementChild
**Signature:** htmlProgressElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.lastElementChild
**Signature:** htmlProgressElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.previousElementSibling
**Signature:** htmlProgressElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.nextElementSibling
**Signature:** htmlProgressElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.textContent
**Signature:** htmlProgressElement.textContent : `string`

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.childNodes
**Signature:** htmlProgressElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.ownerDocument
**Signature:** htmlProgressElement.ownerDocument

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.offsetParent
**Signature:** htmlProgressElement.offsetParent

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  
### htmlProgressElement.scrollIntoView
**Signature:** htmlProgressElement.scrollIntoView()

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.scrollIntoViewIfNeeded
**Signature:** htmlProgressElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.focus
**Signature:** htmlProgressElement.focus()

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.blur
**Signature:** htmlProgressElement.blur()

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.getAttribute
**Signature:** htmlProgressElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.setAttribute
**Signature:** htmlProgressElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlProgressElement.removeAttribute
**Signature:** htmlProgressElement.removeAttribute(name)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.hasAttribute
**Signature:** htmlProgressElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.getAttributeNode
**Signature:** htmlProgressElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.setAttributeNode
**Signature:** htmlProgressElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlProgressElement.removeAttributeNode
**Signature:** htmlProgressElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlProgressElement.getElementsByClassName
**Signature:** htmlProgressElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.getElementsByTagName
**Signature:** htmlProgressElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlProgressElement.querySelector
**Signature:** htmlProgressElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlProgressElement.querySelectorAll
**Signature:** htmlProgressElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlProgressElement.getBoundingClientRect
**Signature:** htmlProgressElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.insertAdjacentHTML
**Signature:** htmlProgressElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlProgressElement.insertAdjacentElement
**Signature:** htmlProgressElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlProgressElement.insertAdjacentText
**Signature:** htmlProgressElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlProgressElement.hasChildNodes
**Signature:** htmlProgressElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.cloneNode
**Signature:** htmlProgressElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlProgressElement.appendChild
**Signature:** htmlProgressElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlProgressElement.insertBefore
**Signature:** htmlProgressElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlProgressElement.replaceChild
**Signature:** htmlProgressElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlProgressElement.removeChild
**Signature:** htmlProgressElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlProgressElement.remove
**Signature:** htmlProgressElement.remove()

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  
### htmlProgressElement.before
**Signature:** htmlProgressElement.before(...nodes)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlProgressElement.after
**Signature:** htmlProgressElement.after(...nodes)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlProgressElement.replaceWith
**Signature:** htmlProgressElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlProgressElement.addEventListener
**Signature:** htmlProgressElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlProgressElement.removeEventListener
**Signature:** htmlProgressElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlProgressElement.dispatchEvent
**Signature:** htmlProgressElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| event | `*` | 

