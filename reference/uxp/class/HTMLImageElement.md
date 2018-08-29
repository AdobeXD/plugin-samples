
<a name="htmlimageelement" id="htmlimageelement"></a>

## HTMLImageElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement  

* [HTMLImageElement](#htmlimageelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLImageElement(document, nodeName, namespaceURI)](#new-htmlimageelement-new)
    * [.src](#htmlimageelement-src) : `string` \| `File`
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


<a name="new-htmlimageelement-new" id="new-htmlimageelement-new"></a>

### new HTMLImageElement(document, nodeName, namespaceURI)
Creates an instance of HTMLImageElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="htmlimageelement-src" id="htmlimageelement-src"></a>

### htmlImageElement.src : `string` \| `File`
The source of the image

**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-nodename" id="element-nodename"></a>

### htmlImageElement.nodeName : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlImageElement.localName : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlImageElement.tagName : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlImageElement.nodeType : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlImageElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlImageElement.id : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-classname" id="element-classname"></a>

### htmlImageElement.className : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlImageElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlImageElement.style : `Style`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlImageElement.clientLeft : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlImageElement.clientTop : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlImageElement.clientWidth : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlImageElement.clientHeight : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlImageElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlImageElement.offsetTop : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlImageElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlImageElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlImageElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlImageElement.scrollTop : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlImageElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlImageElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlImageElement.disabled : `boolean`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlImageElement.innerHTML : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlImageElement.outerHTML : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlImageElement.contentEditable
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlImageElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlImageElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlImageElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlImageElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlImageElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlImageElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlImageElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlImageElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlImageElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlImageElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlImageElement.textContent : `string`
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlImageElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlImageElement.ownerDocument
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlImageElement.offsetParent
**Kind**: instance property of [`HTMLImageElement`](#htmlimageelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlImageElement.scrollIntoView()
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlImageElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-focus" id="element-focus"></a>

### htmlImageElement.focus()
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-blur" id="element-blur"></a>

### htmlImageElement.blur()
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlImageElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlImageElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlImageElement.removeAttribute(name)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlImageElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlImageElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlImageElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlImageElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlImageElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlImageElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlImageElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlImageElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlImageElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlImageElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlImageElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlImageElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlImageElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlImageElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlImageElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlImageElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlImageElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlImageElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlImageElement.remove()
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

<a name="node-before" id="node-before"></a>

### htmlImageElement.before(...nodes)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlImageElement.after(...nodes)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlImageElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlImageElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlImageElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlImageElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLImageElement`](#htmlimageelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

