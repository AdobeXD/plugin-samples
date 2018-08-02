
<a name="htmlhtmlelement" id="htmlhtmlelement"></a>

## HTMLHtmlElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement  

* [HTMLHtmlElement](#htmlhtmlelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLHtmlElement(document, nodeName, namespaceURI)](#new-htmlhtmlelement-new)
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


<a name="new-htmlhtmlelement-new" id="new-htmlhtmlelement-new"></a>

### new HTMLHtmlElement(document, nodeName, namespaceURI)
Creates an instance of HTMLHtmlElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="element-nodename" id="element-nodename"></a>

### htmlHtmlElement.nodeName : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlHtmlElement.localName : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlHtmlElement.tagName : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlHtmlElement.nodeType : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlHtmlElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlHtmlElement.id : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-classname" id="element-classname"></a>

### htmlHtmlElement.className : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlHtmlElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlHtmlElement.style : `Style`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlHtmlElement.clientLeft : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlHtmlElement.clientTop : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlHtmlElement.clientWidth : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlHtmlElement.clientHeight : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlHtmlElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlHtmlElement.offsetTop : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlHtmlElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlHtmlElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlHtmlElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlHtmlElement.scrollTop : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlHtmlElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlHtmlElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlHtmlElement.disabled : `boolean`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlHtmlElement.innerHTML : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlHtmlElement.outerHTML : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlHtmlElement.contentEditable
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlHtmlElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlHtmlElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlHtmlElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlHtmlElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlHtmlElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlHtmlElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlHtmlElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlHtmlElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlHtmlElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlHtmlElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlHtmlElement.textContent : `string`
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlHtmlElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlHtmlElement.ownerDocument
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlHtmlElement.offsetParent
**Kind**: instance property of [`HTMLHtmlElement`](#htmlhtmlelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlHtmlElement.scrollIntoView()
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlHtmlElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-focus" id="element-focus"></a>

### htmlHtmlElement.focus()
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-blur" id="element-blur"></a>

### htmlHtmlElement.blur()
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlHtmlElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlHtmlElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlHtmlElement.removeAttribute(name)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlHtmlElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlHtmlElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlHtmlElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlHtmlElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlHtmlElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlHtmlElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlHtmlElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlHtmlElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlHtmlElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlHtmlElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlHtmlElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlHtmlElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlHtmlElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlHtmlElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlHtmlElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlHtmlElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlHtmlElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlHtmlElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlHtmlElement.remove()
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

<a name="node-before" id="node-before"></a>

### htmlHtmlElement.before(...nodes)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlHtmlElement.after(...nodes)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlHtmlElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlHtmlElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlHtmlElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlHtmlElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLHtmlElement`](#htmlhtmlelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

