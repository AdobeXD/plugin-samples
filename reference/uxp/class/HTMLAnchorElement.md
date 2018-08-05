## HTMLAnchorElement
**Signature:** HTMLAnchorElement ⇐ [`HTMLElement`](#htmlelement)

**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement  

* [HTMLAnchorElement](#htmlanchorelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLAnchorElement(document, nodeName, namespaceURI)](#new-htmlanchorelement-new)
    * [.href](#htmlanchorelement-href) : `string`
    * [.pathname](#htmlanchorelement-pathname) : `string`
    * [.protocol](#htmlanchorelement-protocol) : `string`
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

### new HTMLAnchorElement
**Signature:** new HTMLAnchorElement(document, nodeName, namespaceURI)

Creates an instance of HTMLAnchorElement.


| Param | Type |
| --- | --- |
| document | `*` | 
| nodeName | `*` | 
| namespaceURI | `*` | 

### htmlAnchorElement.href
**Signature:** htmlAnchorElement.href : `string`

The `href` value for the anchor

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.pathname
**Signature:** htmlAnchorElement.pathname : `string`

The path portion of the anchor's `href`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.protocol
**Signature:** htmlAnchorElement.protocol : `string`

The protocol portion of the anchor's `href`.

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.nodeName
**Signature:** htmlAnchorElement.nodeName : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.localName
**Signature:** htmlAnchorElement.localName : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.tagName
**Signature:** htmlAnchorElement.tagName : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.nodeType
**Signature:** htmlAnchorElement.nodeType : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.namespaceURI
**Signature:** htmlAnchorElement.namespaceURI : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.id
**Signature:** htmlAnchorElement.id : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.className
**Signature:** htmlAnchorElement.className : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.attributes
**Signature:** htmlAnchorElement.attributes : [`NamedNodeMap`](#namednodemap)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.style
**Signature:** htmlAnchorElement.style : `Style`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.clientLeft
**Signature:** htmlAnchorElement.clientLeft : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.clientTop
**Signature:** htmlAnchorElement.clientTop : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.clientWidth
**Signature:** htmlAnchorElement.clientWidth : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.clientHeight
**Signature:** htmlAnchorElement.clientHeight : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.offsetLeft
**Signature:** htmlAnchorElement.offsetLeft : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.offsetTop
**Signature:** htmlAnchorElement.offsetTop : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.offsetWidth
**Signature:** htmlAnchorElement.offsetWidth : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.offsetHeight
**Signature:** htmlAnchorElement.offsetHeight : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.scrollLeft
**Signature:** htmlAnchorElement.scrollLeft : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.scrollTop
**Signature:** htmlAnchorElement.scrollTop : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.scrollWidth
**Signature:** htmlAnchorElement.scrollWidth : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.scrollHeight
**Signature:** htmlAnchorElement.scrollHeight : `number`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.disabled
**Signature:** htmlAnchorElement.disabled : `boolean`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.innerHTML
**Signature:** htmlAnchorElement.innerHTML : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.outerHTML
**Signature:** htmlAnchorElement.outerHTML : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.contentEditable
**Signature:** htmlAnchorElement.contentEditable

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.isConnected
**Signature:** htmlAnchorElement.isConnected : `boolean`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.parentNode
**Signature:** htmlAnchorElement.parentNode : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.firstChild
**Signature:** htmlAnchorElement.firstChild : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.lastChild
**Signature:** htmlAnchorElement.lastChild : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.previousSibling
**Signature:** htmlAnchorElement.previousSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.nextSibling
**Signature:** htmlAnchorElement.nextSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.firstElementChild
**Signature:** htmlAnchorElement.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.lastElementChild
**Signature:** htmlAnchorElement.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.previousElementSibling
**Signature:** htmlAnchorElement.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.nextElementSibling
**Signature:** htmlAnchorElement.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.textContent
**Signature:** htmlAnchorElement.textContent : `string`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.childNodes
**Signature:** htmlAnchorElement.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.ownerDocument
**Signature:** htmlAnchorElement.ownerDocument

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.offsetParent
**Signature:** htmlAnchorElement.offsetParent

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)  
**Read only**: true  
### htmlAnchorElement.scrollIntoView
**Signature:** htmlAnchorElement.scrollIntoView()

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.scrollIntoViewIfNeeded
**Signature:** htmlAnchorElement.scrollIntoViewIfNeeded()

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.focus
**Signature:** htmlAnchorElement.focus()

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.blur
**Signature:** htmlAnchorElement.blur()

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.getAttribute
**Signature:** htmlAnchorElement.getAttribute(name) ⇒ `string`

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.setAttribute
**Signature:** htmlAnchorElement.setAttribute(name, value)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 

### htmlAnchorElement.removeAttribute
**Signature:** htmlAnchorElement.removeAttribute(name)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.hasAttribute
**Signature:** htmlAnchorElement.hasAttribute(name) ⇒ `boolean`

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.getAttributeNode
**Signature:** htmlAnchorElement.getAttributeNode(name) ⇒ `*`

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.setAttributeNode
**Signature:** htmlAnchorElement.setAttributeNode(newAttr)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 

### htmlAnchorElement.removeAttributeNode
**Signature:** htmlAnchorElement.removeAttributeNode(oldAttr)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| oldAttr | `*` | 

### htmlAnchorElement.getElementsByClassName
**Signature:** htmlAnchorElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.getElementsByTagName
**Signature:** htmlAnchorElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| name | `string` | 

### htmlAnchorElement.querySelector
**Signature:** htmlAnchorElement.querySelector(selector) ⇒ [`Element`](#element)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlAnchorElement.querySelectorAll
**Signature:** htmlAnchorElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 

### htmlAnchorElement.getBoundingClientRect
**Signature:** htmlAnchorElement.getBoundingClientRect() ⇒ `*`

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.insertAdjacentHTML
**Signature:** htmlAnchorElement.insertAdjacentHTML(position, value)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 

### htmlAnchorElement.insertAdjacentElement
**Signature:** htmlAnchorElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 

### htmlAnchorElement.insertAdjacentText
**Signature:** htmlAnchorElement.insertAdjacentText(position, text)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 

### htmlAnchorElement.hasChildNodes
**Signature:** htmlAnchorElement.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.cloneNode
**Signature:** htmlAnchorElement.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### htmlAnchorElement.appendChild
**Signature:** htmlAnchorElement.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlAnchorElement.insertBefore
**Signature:** htmlAnchorElement.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### htmlAnchorElement.replaceChild
**Signature:** htmlAnchorElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### htmlAnchorElement.removeChild
**Signature:** htmlAnchorElement.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### htmlAnchorElement.remove
**Signature:** htmlAnchorElement.remove()

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  
### htmlAnchorElement.before
**Signature:** htmlAnchorElement.before(...nodes)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlAnchorElement.after
**Signature:** htmlAnchorElement.after(...nodes)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlAnchorElement.replaceWith
**Signature:** htmlAnchorElement.replaceWith(...nodes)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### htmlAnchorElement.addEventListener
**Signature:** htmlAnchorElement.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlAnchorElement.removeEventListener
**Signature:** htmlAnchorElement.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### htmlAnchorElement.dispatchEvent
**Signature:** htmlAnchorElement.dispatchEvent(event)

**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)  

| Param | Type |
| --- | --- |
| event | `*` | 

