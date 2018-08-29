
<a name="htmlscriptelement" id="htmlscriptelement"></a>

## HTMLScriptElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement  

* [HTMLScriptElement](#htmlscriptelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLScriptElement(document, nodeName, namespaceURI)](#new-htmlscriptelement-new)
    * [.type](#htmlscriptelement-type) : `string`
    * [.src](#htmlscriptelement-src) : `string`
    * [.charset](#htmlscriptelement-charset) : `string`
    * [.text](#htmlscriptelement-text) : `string`
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


<a name="new-htmlscriptelement-new" id="new-htmlscriptelement-new"></a>

### new HTMLScriptElement(document, nodeName, namespaceURI)
Creates an instance of HTMLScriptElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="htmlscriptelement-type" id="htmlscriptelement-type"></a>

### htmlScriptElement.type : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="htmlscriptelement-src" id="htmlscriptelement-src"></a>

### htmlScriptElement.src : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="htmlscriptelement-charset" id="htmlscriptelement-charset"></a>

### htmlScriptElement.charset : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="htmlscriptelement-text" id="htmlscriptelement-text"></a>

### htmlScriptElement.text : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-nodename" id="element-nodename"></a>

### htmlScriptElement.nodeName : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlScriptElement.localName : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlScriptElement.tagName : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlScriptElement.nodeType : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlScriptElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlScriptElement.id : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-classname" id="element-classname"></a>

### htmlScriptElement.className : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlScriptElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlScriptElement.style : `Style`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlScriptElement.clientLeft : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlScriptElement.clientTop : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlScriptElement.clientWidth : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlScriptElement.clientHeight : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlScriptElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlScriptElement.offsetTop : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlScriptElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlScriptElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlScriptElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlScriptElement.scrollTop : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlScriptElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlScriptElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlScriptElement.disabled : `boolean`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlScriptElement.innerHTML : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlScriptElement.outerHTML : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlScriptElement.contentEditable
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlScriptElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlScriptElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlScriptElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlScriptElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlScriptElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlScriptElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlScriptElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlScriptElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlScriptElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlScriptElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlScriptElement.textContent : `string`
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Overrides**: [`textContent`](#node-textcontent)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlScriptElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlScriptElement.ownerDocument
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlScriptElement.offsetParent
**Kind**: instance property of [`HTMLScriptElement`](#htmlscriptelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlScriptElement.scrollIntoView()
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlScriptElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-focus" id="element-focus"></a>

### htmlScriptElement.focus()
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-blur" id="element-blur"></a>

### htmlScriptElement.blur()
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlScriptElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlScriptElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlScriptElement.removeAttribute(name)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlScriptElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlScriptElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlScriptElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlScriptElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlScriptElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlScriptElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlScriptElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlScriptElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlScriptElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlScriptElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlScriptElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlScriptElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlScriptElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlScriptElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlScriptElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlScriptElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlScriptElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlScriptElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlScriptElement.remove()
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

<a name="node-before" id="node-before"></a>

### htmlScriptElement.before(...nodes)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlScriptElement.after(...nodes)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlScriptElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlScriptElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlScriptElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlScriptElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLScriptElement`](#htmlscriptelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

