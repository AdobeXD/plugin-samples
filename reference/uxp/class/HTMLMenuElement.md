
<a name="htmlmenuelement" id="htmlmenuelement"></a>

## HTMLMenuElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement  

* [HTMLMenuElement](#htmlmenuelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLMenuElement(document, nodeName, namespaceURI)](#new-htmlmenuelement-new)
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
    * [.popupAt(x, y)](#htmlmenuelement-popupat)
    * [.scrollIntoView()](#element-scrollintoview)
    * [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
    * [.focus()](#element-focus)
    * [.blur()](#element-blur)
    * [.getAttribute(name)](#element-getattribute) ⇒ `string`
    * [.setAttribute(name, value)](#element-setattribute)
    * [.removeAttribute(name)](#element-removeattribute)
    * [.hasAttribute(name)](#element-hasattribute) ⇒ `boolean`
    * [.getAttributeNode(name)](#element-getattributenode) ⇒ `\*`
    * [.setAttributeNode(newAttr)](#element-setattributenode)
    * [.removeAttributeNode(oldAttr)](#element-removeattributenode)
    * [.getElementsByClassName(name)](#element-getelementsbyclassname) ⇒ [`NodeList`](#nodelist)
    * [.getElementsByTagName(name)](#element-getelementsbytagname) ⇒ [`NodeList`](#nodelist)
    * [.querySelector(selector)](#element-queryselector) ⇒ [`Element`](#element)
    * [.querySelectorAll(selector)](#element-queryselectorall) ⇒ [`NodeList`](#nodelist)
    * [.getBoundingClientRect()](#element-getboundingclientrect) ⇒ `\*`
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


<a name="new-htmlmenuelement-new" id="new-htmlmenuelement-new"></a>

### new HTMLMenuElement(document, nodeName, namespaceURI)
Creates an instance of HTMLMenuElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="element-nodename" id="element-nodename"></a>

### htmlMenuElement.nodeName : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlMenuElement.localName : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlMenuElement.tagName : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlMenuElement.nodeType : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlMenuElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlMenuElement.id : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-classname" id="element-classname"></a>

### htmlMenuElement.className : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlMenuElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlMenuElement.style : `Style`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlMenuElement.clientLeft : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlMenuElement.clientTop : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlMenuElement.clientWidth : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlMenuElement.clientHeight : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlMenuElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlMenuElement.offsetTop : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlMenuElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlMenuElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlMenuElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlMenuElement.scrollTop : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlMenuElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlMenuElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlMenuElement.disabled : `boolean`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlMenuElement.innerHTML : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlMenuElement.outerHTML : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlMenuElement.contentEditable
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlMenuElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlMenuElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlMenuElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlMenuElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlMenuElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlMenuElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlMenuElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlMenuElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlMenuElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlMenuElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlMenuElement.textContent : `string`
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlMenuElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlMenuElement.ownerDocument
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlMenuElement.offsetParent
**Kind**: instance property of [`HTMLMenuElement`](#htmlmenuelement)  
**Read only**: true  

<a name="htmlmenuelement-popupat" id="htmlmenuelement-popupat"></a>

### htmlMenuElement.popupAt(x, y)
Render the menu at the `x`,`y` coordinates

**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| x | `number` | 
| y | `number` | 


<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlMenuElement.scrollIntoView()
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlMenuElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-focus" id="element-focus"></a>

### htmlMenuElement.focus()
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-blur" id="element-blur"></a>

### htmlMenuElement.blur()
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlMenuElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlMenuElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlMenuElement.removeAttribute(name)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlMenuElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlMenuElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlMenuElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlMenuElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlMenuElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlMenuElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlMenuElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlMenuElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlMenuElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlMenuElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlMenuElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlMenuElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlMenuElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlMenuElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlMenuElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlMenuElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlMenuElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlMenuElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlMenuElement.remove()
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

<a name="node-before" id="node-before"></a>

### htmlMenuElement.before(...nodes)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlMenuElement.after(...nodes)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlMenuElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlMenuElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlMenuElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlMenuElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLMenuElement`](#htmlmenuelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

