
<a name="htmllinkelement" id="htmllinkelement"></a>

## HTMLLinkElement ⇐ [`HTMLElement`](#htmlelement)
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


<a name="new-htmllinkelement-new" id="new-htmllinkelement-new"></a>

### new HTMLLinkElement(document, nodeName, namespaceURI)
Creates an instance of HTMLLinkElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="element-nodename" id="element-nodename"></a>

### htmlLinkElement.nodeName : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlLinkElement.localName : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlLinkElement.tagName : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlLinkElement.nodeType : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlLinkElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlLinkElement.id : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-classname" id="element-classname"></a>

### htmlLinkElement.className : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlLinkElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlLinkElement.style : `Style`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlLinkElement.clientLeft : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlLinkElement.clientTop : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlLinkElement.clientWidth : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlLinkElement.clientHeight : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlLinkElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlLinkElement.offsetTop : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlLinkElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlLinkElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlLinkElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlLinkElement.scrollTop : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlLinkElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlLinkElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlLinkElement.disabled : `boolean`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlLinkElement.innerHTML : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlLinkElement.outerHTML : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlLinkElement.contentEditable
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlLinkElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlLinkElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlLinkElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlLinkElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlLinkElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlLinkElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlLinkElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlLinkElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlLinkElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlLinkElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlLinkElement.textContent : `string`
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlLinkElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlLinkElement.ownerDocument
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlLinkElement.offsetParent
**Kind**: instance property of [`HTMLLinkElement`](#htmllinkelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlLinkElement.scrollIntoView()
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlLinkElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-focus" id="element-focus"></a>

### htmlLinkElement.focus()
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-blur" id="element-blur"></a>

### htmlLinkElement.blur()
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlLinkElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlLinkElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlLinkElement.removeAttribute(name)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlLinkElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlLinkElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlLinkElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlLinkElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlLinkElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlLinkElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlLinkElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlLinkElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlLinkElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlLinkElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlLinkElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlLinkElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlLinkElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlLinkElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlLinkElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlLinkElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlLinkElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlLinkElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlLinkElement.remove()
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

<a name="node-before" id="node-before"></a>

### htmlLinkElement.before(...nodes)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlLinkElement.after(...nodes)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlLinkElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlLinkElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlLinkElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlLinkElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLLinkElement`](#htmllinkelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

