## HTMLSelectElement
**Signature:** HTMLSelectElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement  

* [HTMLSelectElement](#htmlselectelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLSelectElement(document, nodeName, namespaceURI)](#new-htmlselectelement-new)
    * [.value](#htmlselectelement-value) : `string`
    * [.selectedNode](#htmlselectelement-selectednode) : [`Node`](#node)
    * [.selectedIndex](#htmlselectelement-selectedindex) : `number`
    * [.selectedOptions](#htmlselectelement-selectedoptions) : [`Array.<Node>`](#node)
    * [.uxpVariant](#htmlselectelement-uxpvariant) : `string`
    * [.uxpQuiet](#htmlselectelement-uxpquiet) : `string`
    * [.options](#htmlselectelement-options) : [`NodeList`](#nodelist)
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

### new HTMLSelectElement
**Signature:** new HTMLSelectElement(document, nodeName, namespaceURI)

Creates an instance of HTMLSelectElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlSelectElement.value
**Signature:** htmlSelectElement.value : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.selectedNode
**Signature:** htmlSelectElement.selectedNode : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.selectedIndex
**Signature:** htmlSelectElement.selectedIndex : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.selectedOptions
**Signature:** htmlSelectElement.selectedOptions : [`Array.<Node>`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.uxpVariant
**Signature:** htmlSelectElement.uxpVariant : `string`

Variant

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.uxpQuiet
**Signature:** htmlSelectElement.uxpQuiet : `string`

Determines if control renders quietly

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.options
**Signature:** htmlSelectElement.options : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.nodeName
**Signature:** htmlSelectElement.nodeName : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.localName
**Signature:** htmlSelectElement.localName : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.tagName
**Signature:** htmlSelectElement.tagName : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.nodeType
**Signature:** htmlSelectElement.nodeType : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.namespaceURI
**Signature:** htmlSelectElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.id
**Signature:** htmlSelectElement.id : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.className
**Signature:** htmlSelectElement.className : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.attributes
**Signature:** htmlSelectElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.style
**Signature:** htmlSelectElement.style : `Style`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.clientLeft
**Signature:** htmlSelectElement.clientLeft : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.clientTop
**Signature:** htmlSelectElement.clientTop : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.clientWidth
**Signature:** htmlSelectElement.clientWidth : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.clientHeight
**Signature:** htmlSelectElement.clientHeight : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.offsetLeft
**Signature:** htmlSelectElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.offsetTop
**Signature:** htmlSelectElement.offsetTop : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.offsetWidth
**Signature:** htmlSelectElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.offsetHeight
**Signature:** htmlSelectElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.scrollLeft
**Signature:** htmlSelectElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.scrollTop
**Signature:** htmlSelectElement.scrollTop : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.scrollWidth
**Signature:** htmlSelectElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.scrollHeight
**Signature:** htmlSelectElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.disabled
**Signature:** htmlSelectElement.disabled : `boolean`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.innerHTML
**Signature:** htmlSelectElement.innerHTML : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.outerHTML
**Signature:** htmlSelectElement.outerHTML : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.contentEditable
**Signature:** htmlSelectElement.contentEditable

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.isConnected
**Signature:** htmlSelectElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.parentNode
**Signature:** htmlSelectElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.firstChild
**Signature:** htmlSelectElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.lastChild
**Signature:** htmlSelectElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.previousSibling
**Signature:** htmlSelectElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.nextSibling
**Signature:** htmlSelectElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.firstElementChild
**Signature:** htmlSelectElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.lastElementChild
**Signature:** htmlSelectElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.previousElementSibling
**Signature:** htmlSelectElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.nextElementSibling
**Signature:** htmlSelectElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.textContent
**Signature:** htmlSelectElement.textContent : `string`

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.childNodes
**Signature:** htmlSelectElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.ownerDocument
**Signature:** htmlSelectElement.ownerDocument

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.offsetParent
**Signature:** htmlSelectElement.offsetParent

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)  
**Read only**: true  
### htmlSelectElement.scrollIntoView
**Signature:** htmlSelectElement.scrollIntoView()

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.scrollIntoViewIfNeeded
**Signature:** htmlSelectElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.focus
**Signature:** htmlSelectElement.focus()

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.blur
**Signature:** htmlSelectElement.blur()

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.getAttribute
**Signature:** htmlSelectElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.setAttribute
**Signature:** htmlSelectElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlSelectElement.removeAttribute
**Signature:** htmlSelectElement.removeAttribute(name)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.hasAttribute
**Signature:** htmlSelectElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.getAttributeNode
**Signature:** htmlSelectElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.setAttributeNode
**Signature:** htmlSelectElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlSelectElement.removeAttributeNode
**Signature:** htmlSelectElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlSelectElement.getElementsByClassName
**Signature:** htmlSelectElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.getElementsByTagName
**Signature:** htmlSelectElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlSelectElement.querySelector
**Signature:** htmlSelectElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlSelectElement.querySelectorAll
**Signature:** htmlSelectElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlSelectElement.getBoundingClientRect
**Signature:** htmlSelectElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.insertAdjacentHTML
**Signature:** htmlSelectElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlSelectElement.insertAdjacentElement
**Signature:** htmlSelectElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlSelectElement.insertAdjacentText
**Signature:** htmlSelectElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlSelectElement.hasChildNodes
**Signature:** htmlSelectElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.cloneNode
**Signature:** htmlSelectElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlSelectElement.appendChild
**Signature:** htmlSelectElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlSelectElement.insertBefore
**Signature:** htmlSelectElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlSelectElement.replaceChild
**Signature:** htmlSelectElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlSelectElement.removeChild
**Signature:** htmlSelectElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlSelectElement.remove
**Signature:** htmlSelectElement.remove()

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  
### htmlSelectElement.before
**Signature:** htmlSelectElement.before(...nodes)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlSelectElement.after
**Signature:** htmlSelectElement.after(...nodes)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlSelectElement.replaceWith
**Signature:** htmlSelectElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlSelectElement.addEventListener
**Signature:** htmlSelectElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlSelectElement.removeEventListener
**Signature:** htmlSelectElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlSelectElement.dispatchEvent
**Signature:** htmlSelectElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

