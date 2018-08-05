## HTMLTextAreaElement
**Signature:** HTMLTextAreaElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement  

* [HTMLTextAreaElement](#htmltextareaelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLTextAreaElement(document, nodeName, namespaceURI)](#new-htmltextareaelement-new)
    * [.value](#htmltextareaelement-value) : `string`
    * [.placeholder](#htmltextareaelement-placeholder) : `string`
    * [.readOnly](#htmltextareaelement-readonly) : `boolean`
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

### new HTMLTextAreaElement
**Signature:** new HTMLTextAreaElement(document, nodeName, namespaceURI)

Creates an instance of HTMLTextAreaElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlTextAreaElement.value
**Signature:** htmlTextAreaElement.value : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.placeholder
**Signature:** htmlTextAreaElement.placeholder : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.readOnly
**Signature:** htmlTextAreaElement.readOnly : `boolean`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.nodeName
**Signature:** htmlTextAreaElement.nodeName : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.localName
**Signature:** htmlTextAreaElement.localName : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.tagName
**Signature:** htmlTextAreaElement.tagName : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.nodeType
**Signature:** htmlTextAreaElement.nodeType : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.namespaceURI
**Signature:** htmlTextAreaElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.id
**Signature:** htmlTextAreaElement.id : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.className
**Signature:** htmlTextAreaElement.className : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.attributes
**Signature:** htmlTextAreaElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.style
**Signature:** htmlTextAreaElement.style : `Style`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.clientLeft
**Signature:** htmlTextAreaElement.clientLeft : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.clientTop
**Signature:** htmlTextAreaElement.clientTop : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.clientWidth
**Signature:** htmlTextAreaElement.clientWidth : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.clientHeight
**Signature:** htmlTextAreaElement.clientHeight : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.offsetLeft
**Signature:** htmlTextAreaElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.offsetTop
**Signature:** htmlTextAreaElement.offsetTop : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.offsetWidth
**Signature:** htmlTextAreaElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.offsetHeight
**Signature:** htmlTextAreaElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.scrollLeft
**Signature:** htmlTextAreaElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.scrollTop
**Signature:** htmlTextAreaElement.scrollTop : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.scrollWidth
**Signature:** htmlTextAreaElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.scrollHeight
**Signature:** htmlTextAreaElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.disabled
**Signature:** htmlTextAreaElement.disabled : `boolean`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.innerHTML
**Signature:** htmlTextAreaElement.innerHTML : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.outerHTML
**Signature:** htmlTextAreaElement.outerHTML : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.contentEditable
**Signature:** htmlTextAreaElement.contentEditable

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.isConnected
**Signature:** htmlTextAreaElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.parentNode
**Signature:** htmlTextAreaElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.firstChild
**Signature:** htmlTextAreaElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.lastChild
**Signature:** htmlTextAreaElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.previousSibling
**Signature:** htmlTextAreaElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.nextSibling
**Signature:** htmlTextAreaElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.firstElementChild
**Signature:** htmlTextAreaElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.lastElementChild
**Signature:** htmlTextAreaElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.previousElementSibling
**Signature:** htmlTextAreaElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.nextElementSibling
**Signature:** htmlTextAreaElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.textContent
**Signature:** htmlTextAreaElement.textContent : `string`

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.childNodes
**Signature:** htmlTextAreaElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.ownerDocument
**Signature:** htmlTextAreaElement.ownerDocument

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.offsetParent
**Signature:** htmlTextAreaElement.offsetParent

**Kind**: instance property of [`HTMLTextAreaElement`](#htmltextareaelement)  
**Read only**: true  
### htmlTextAreaElement.scrollIntoView
**Signature:** htmlTextAreaElement.scrollIntoView()

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.scrollIntoViewIfNeeded
**Signature:** htmlTextAreaElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.focus
**Signature:** htmlTextAreaElement.focus()

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.blur
**Signature:** htmlTextAreaElement.blur()

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.getAttribute
**Signature:** htmlTextAreaElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.setAttribute
**Signature:** htmlTextAreaElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlTextAreaElement.removeAttribute
**Signature:** htmlTextAreaElement.removeAttribute(name)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.hasAttribute
**Signature:** htmlTextAreaElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.getAttributeNode
**Signature:** htmlTextAreaElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.setAttributeNode
**Signature:** htmlTextAreaElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlTextAreaElement.removeAttributeNode
**Signature:** htmlTextAreaElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlTextAreaElement.getElementsByClassName
**Signature:** htmlTextAreaElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.getElementsByTagName
**Signature:** htmlTextAreaElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlTextAreaElement.querySelector
**Signature:** htmlTextAreaElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlTextAreaElement.querySelectorAll
**Signature:** htmlTextAreaElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlTextAreaElement.getBoundingClientRect
**Signature:** htmlTextAreaElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.insertAdjacentHTML
**Signature:** htmlTextAreaElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlTextAreaElement.insertAdjacentElement
**Signature:** htmlTextAreaElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlTextAreaElement.insertAdjacentText
**Signature:** htmlTextAreaElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlTextAreaElement.hasChildNodes
**Signature:** htmlTextAreaElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.cloneNode
**Signature:** htmlTextAreaElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlTextAreaElement.appendChild
**Signature:** htmlTextAreaElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlTextAreaElement.insertBefore
**Signature:** htmlTextAreaElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlTextAreaElement.replaceChild
**Signature:** htmlTextAreaElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlTextAreaElement.removeChild
**Signature:** htmlTextAreaElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlTextAreaElement.remove
**Signature:** htmlTextAreaElement.remove()

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  
### htmlTextAreaElement.before
**Signature:** htmlTextAreaElement.before(...nodes)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlTextAreaElement.after
**Signature:** htmlTextAreaElement.after(...nodes)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlTextAreaElement.replaceWith
**Signature:** htmlTextAreaElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlTextAreaElement.addEventListener
**Signature:** htmlTextAreaElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlTextAreaElement.removeEventListener
**Signature:** htmlTextAreaElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlTextAreaElement.dispatchEvent
**Signature:** htmlTextAreaElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLTextAreaElement`](#htmltextareaelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

