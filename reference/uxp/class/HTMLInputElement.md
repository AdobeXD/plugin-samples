## HTMLInputElement
**Signature:** HTMLInputElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement  

* [HTMLInputElement](#htmlinputelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLInputElement(document, nodeName, namespaceURI)](#new-htmlinputelement-new)
    * [.value](#htmlinputelement-value) : `*`
    * [.checked](#htmlinputelement-checked) : `boolean`
    * [.indeterminate](#htmlinputelement-indeterminate) : `boolean`
    * [.type](#htmlinputelement-type) : `string`
    * [.placeholder](#htmlinputelement-placeholder) : `string`
    * [.readOnly](#htmlinputelement-readonly) : `boolean`
    * [.min](#htmlinputelement-min) : `string`
    * [.max](#htmlinputelement-max) : `string`
    * [.uxpVariant](#htmlinputelement-uxpvariant) : `string`
    * [.uxpQuiet](#htmlinputelement-uxpquiet) : `string`
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

### new HTMLInputElement
**Signature:** new HTMLInputElement(document, nodeName, namespaceURI)

Creates an instance of HTMLInputElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlInputElement.value
**Signature:** htmlInputElement.value : `*`

Returns the value of the input element.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.checked
**Signature:** htmlInputElement.checked : `boolean`

Indicates if the checkbox is checked.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.indeterminate
**Signature:** htmlInputElement.indeterminate : `boolean`

Indicates if the element is indeterminate

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.type
**Signature:** htmlInputElement.type : `string`

Specifies the type of input control

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.placeholder
**Signature:** htmlInputElement.placeholder : `string`

The placeholder for the input element (if applicable to the input element's type)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.readOnly
**Signature:** htmlInputElement.readOnly : `boolean`

Determines if the element's content is read only.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.min
**Signature:** htmlInputElement.min : `string`

Minimum value allowed (used for `input type="range"`)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.max
**Signature:** htmlInputElement.max : `string`

Maximum value allowed (used for `input type="range"`)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.uxpVariant
**Signature:** htmlInputElement.uxpVariant : `string`

Controls the type of native widget.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.uxpQuiet
**Signature:** htmlInputElement.uxpQuiet : `string`

Determines if a control is rendered in "quiet" mode

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.nodeName
**Signature:** htmlInputElement.nodeName : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.localName
**Signature:** htmlInputElement.localName : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.tagName
**Signature:** htmlInputElement.tagName : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.nodeType
**Signature:** htmlInputElement.nodeType : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.namespaceURI
**Signature:** htmlInputElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.id
**Signature:** htmlInputElement.id : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.className
**Signature:** htmlInputElement.className : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.attributes
**Signature:** htmlInputElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.style
**Signature:** htmlInputElement.style : `Style`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.clientLeft
**Signature:** htmlInputElement.clientLeft : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.clientTop
**Signature:** htmlInputElement.clientTop : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.clientWidth
**Signature:** htmlInputElement.clientWidth : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.clientHeight
**Signature:** htmlInputElement.clientHeight : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.offsetLeft
**Signature:** htmlInputElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.offsetTop
**Signature:** htmlInputElement.offsetTop : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.offsetWidth
**Signature:** htmlInputElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.offsetHeight
**Signature:** htmlInputElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.scrollLeft
**Signature:** htmlInputElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.scrollTop
**Signature:** htmlInputElement.scrollTop : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.scrollWidth
**Signature:** htmlInputElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.scrollHeight
**Signature:** htmlInputElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.disabled
**Signature:** htmlInputElement.disabled : `boolean`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.innerHTML
**Signature:** htmlInputElement.innerHTML : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.outerHTML
**Signature:** htmlInputElement.outerHTML : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.contentEditable
**Signature:** htmlInputElement.contentEditable

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.isConnected
**Signature:** htmlInputElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.parentNode
**Signature:** htmlInputElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.firstChild
**Signature:** htmlInputElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.lastChild
**Signature:** htmlInputElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.previousSibling
**Signature:** htmlInputElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.nextSibling
**Signature:** htmlInputElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.firstElementChild
**Signature:** htmlInputElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.lastElementChild
**Signature:** htmlInputElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.previousElementSibling
**Signature:** htmlInputElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.nextElementSibling
**Signature:** htmlInputElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.textContent
**Signature:** htmlInputElement.textContent : `string`

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.childNodes
**Signature:** htmlInputElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.ownerDocument
**Signature:** htmlInputElement.ownerDocument

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.offsetParent
**Signature:** htmlInputElement.offsetParent

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  
### htmlInputElement.scrollIntoView
**Signature:** htmlInputElement.scrollIntoView()

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.scrollIntoViewIfNeeded
**Signature:** htmlInputElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.focus
**Signature:** htmlInputElement.focus()

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.blur
**Signature:** htmlInputElement.blur()

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.getAttribute
**Signature:** htmlInputElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.setAttribute
**Signature:** htmlInputElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlInputElement.removeAttribute
**Signature:** htmlInputElement.removeAttribute(name)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.hasAttribute
**Signature:** htmlInputElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.getAttributeNode
**Signature:** htmlInputElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.setAttributeNode
**Signature:** htmlInputElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlInputElement.removeAttributeNode
**Signature:** htmlInputElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlInputElement.getElementsByClassName
**Signature:** htmlInputElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.getElementsByTagName
**Signature:** htmlInputElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlInputElement.querySelector
**Signature:** htmlInputElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlInputElement.querySelectorAll
**Signature:** htmlInputElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlInputElement.getBoundingClientRect
**Signature:** htmlInputElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.insertAdjacentHTML
**Signature:** htmlInputElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlInputElement.insertAdjacentElement
**Signature:** htmlInputElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlInputElement.insertAdjacentText
**Signature:** htmlInputElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlInputElement.hasChildNodes
**Signature:** htmlInputElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.cloneNode
**Signature:** htmlInputElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlInputElement.appendChild
**Signature:** htmlInputElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlInputElement.insertBefore
**Signature:** htmlInputElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlInputElement.replaceChild
**Signature:** htmlInputElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlInputElement.removeChild
**Signature:** htmlInputElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlInputElement.remove
**Signature:** htmlInputElement.remove()

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  
### htmlInputElement.before
**Signature:** htmlInputElement.before(...nodes)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlInputElement.after
**Signature:** htmlInputElement.after(...nodes)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlInputElement.replaceWith
**Signature:** htmlInputElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlInputElement.addEventListener
**Signature:** htmlInputElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlInputElement.removeEventListener
**Signature:** htmlInputElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlInputElement.dispatchEvent
**Signature:** htmlInputElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

