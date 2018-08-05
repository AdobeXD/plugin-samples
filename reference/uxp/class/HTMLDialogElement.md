## HTMLDialogElement
**Signature:** HTMLDialogElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement  

* [HTMLDialogElement](#htmldialogelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLDialogElement(document, nodeName, namespaceURI)](#new-htmldialogelement-new)
    * [.open](#htmldialogelement-open) : `boolean`
    * [.returnValue](#htmldialogelement-returnvalue) : `*`
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
    * [.showModal()](#htmldialogelement-showmodal) ⇒ `Promise`
    * [.close([returnValue])](#HTMLDialogElement+close)
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

### new HTMLDialogElement
**Signature:** new HTMLDialogElement(document, nodeName, namespaceURI)

Creates an instance of HTMLDialogElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlDialogElement.open
**Signature:** htmlDialogElement.open : `boolean`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.returnValue
**Signature:** htmlDialogElement.returnValue : `*`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.nodeName
**Signature:** htmlDialogElement.nodeName : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.localName
**Signature:** htmlDialogElement.localName : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.tagName
**Signature:** htmlDialogElement.tagName : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.nodeType
**Signature:** htmlDialogElement.nodeType : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.namespaceURI
**Signature:** htmlDialogElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.id
**Signature:** htmlDialogElement.id : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.className
**Signature:** htmlDialogElement.className : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.attributes
**Signature:** htmlDialogElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.style
**Signature:** htmlDialogElement.style : `Style`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.clientLeft
**Signature:** htmlDialogElement.clientLeft : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.clientTop
**Signature:** htmlDialogElement.clientTop : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.clientWidth
**Signature:** htmlDialogElement.clientWidth : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.clientHeight
**Signature:** htmlDialogElement.clientHeight : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.offsetLeft
**Signature:** htmlDialogElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.offsetTop
**Signature:** htmlDialogElement.offsetTop : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.offsetWidth
**Signature:** htmlDialogElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.offsetHeight
**Signature:** htmlDialogElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.scrollLeft
**Signature:** htmlDialogElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.scrollTop
**Signature:** htmlDialogElement.scrollTop : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.scrollWidth
**Signature:** htmlDialogElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.scrollHeight
**Signature:** htmlDialogElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.disabled
**Signature:** htmlDialogElement.disabled : `boolean`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.innerHTML
**Signature:** htmlDialogElement.innerHTML : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.outerHTML
**Signature:** htmlDialogElement.outerHTML : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.contentEditable
**Signature:** htmlDialogElement.contentEditable

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.isConnected
**Signature:** htmlDialogElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.parentNode
**Signature:** htmlDialogElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.firstChild
**Signature:** htmlDialogElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.lastChild
**Signature:** htmlDialogElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.previousSibling
**Signature:** htmlDialogElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.nextSibling
**Signature:** htmlDialogElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.firstElementChild
**Signature:** htmlDialogElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.lastElementChild
**Signature:** htmlDialogElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.previousElementSibling
**Signature:** htmlDialogElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.nextElementSibling
**Signature:** htmlDialogElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.textContent
**Signature:** htmlDialogElement.textContent : `string`

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.childNodes
**Signature:** htmlDialogElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.ownerDocument
**Signature:** htmlDialogElement.ownerDocument

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.offsetParent
**Signature:** htmlDialogElement.offsetParent

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)  
**Read only**: true  
### htmlDialogElement.showModal
**Signature:** htmlDialogElement.showModal() ⇒ `Promise`

Show the modal dialog.

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
**Returns**: `Promise` - A promise that resolves when the dialog is closed (**NSC**)  
### htmlDialogElement.close
**Signature:** htmlDialogElement.close([returnValue])

Closes the dialog; setting the return value (optional)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| [returnValue] | `*` | 

### htmlDialogElement.scrollIntoView
**Signature:** htmlDialogElement.scrollIntoView()

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.scrollIntoViewIfNeeded
**Signature:** htmlDialogElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.focus
**Signature:** htmlDialogElement.focus()

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.blur
**Signature:** htmlDialogElement.blur()

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.getAttribute
**Signature:** htmlDialogElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.setAttribute
**Signature:** htmlDialogElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlDialogElement.removeAttribute
**Signature:** htmlDialogElement.removeAttribute(name)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.hasAttribute
**Signature:** htmlDialogElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.getAttributeNode
**Signature:** htmlDialogElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.setAttributeNode
**Signature:** htmlDialogElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlDialogElement.removeAttributeNode
**Signature:** htmlDialogElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlDialogElement.getElementsByClassName
**Signature:** htmlDialogElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.getElementsByTagName
**Signature:** htmlDialogElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlDialogElement.querySelector
**Signature:** htmlDialogElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlDialogElement.querySelectorAll
**Signature:** htmlDialogElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlDialogElement.getBoundingClientRect
**Signature:** htmlDialogElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.insertAdjacentHTML
**Signature:** htmlDialogElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlDialogElement.insertAdjacentElement
**Signature:** htmlDialogElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlDialogElement.insertAdjacentText
**Signature:** htmlDialogElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlDialogElement.hasChildNodes
**Signature:** htmlDialogElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.cloneNode
**Signature:** htmlDialogElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlDialogElement.appendChild
**Signature:** htmlDialogElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlDialogElement.insertBefore
**Signature:** htmlDialogElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlDialogElement.replaceChild
**Signature:** htmlDialogElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlDialogElement.removeChild
**Signature:** htmlDialogElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlDialogElement.remove
**Signature:** htmlDialogElement.remove()

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  
### htmlDialogElement.before
**Signature:** htmlDialogElement.before(...nodes)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlDialogElement.after
**Signature:** htmlDialogElement.after(...nodes)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlDialogElement.replaceWith
**Signature:** htmlDialogElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlDialogElement.addEventListener
**Signature:** htmlDialogElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlDialogElement.removeEventListener
**Signature:** htmlDialogElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlDialogElement.dispatchEvent
**Signature:** htmlDialogElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

