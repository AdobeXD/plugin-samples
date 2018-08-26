
<a name="htmllabelelement" id="htmllabelelement"></a>

## HTMLLabelElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement  

* [HTMLLabelElement](#htmllabelelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLLabelElement(document, nodeName, namespaceURI)](#new-htmllabelelement-new)
    * [.control](#htmllabelelement-control) : [`HTMLElement`](#htmlelement)
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


<a name="new-htmllabelelement-new" id="new-htmllabelelement-new"></a>

### new HTMLLabelElement(document, nodeName, namespaceURI)
Creates an instance of HTMLLabelElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="htmllabelelement-control" id="htmllabelelement-control"></a>

### htmlLabelElement.control : [`HTMLElement`](#htmlelement)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-nodename" id="element-nodename"></a>

### htmlLabelElement.nodeName : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlLabelElement.localName : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlLabelElement.tagName : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlLabelElement.nodeType : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlLabelElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlLabelElement.id : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-classname" id="element-classname"></a>

### htmlLabelElement.className : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlLabelElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlLabelElement.style : `Style`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlLabelElement.clientLeft : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlLabelElement.clientTop : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlLabelElement.clientWidth : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlLabelElement.clientHeight : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlLabelElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlLabelElement.offsetTop : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlLabelElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlLabelElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlLabelElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlLabelElement.scrollTop : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlLabelElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlLabelElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlLabelElement.disabled : `boolean`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlLabelElement.innerHTML : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlLabelElement.outerHTML : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlLabelElement.contentEditable
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlLabelElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlLabelElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlLabelElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlLabelElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlLabelElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlLabelElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlLabelElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlLabelElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlLabelElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlLabelElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlLabelElement.textContent : `string`
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlLabelElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlLabelElement.ownerDocument
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlLabelElement.offsetParent
**Kind**: instance property of [`HTMLLabelElement`](#htmllabelelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlLabelElement.scrollIntoView()
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlLabelElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-focus" id="element-focus"></a>

### htmlLabelElement.focus()
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-blur" id="element-blur"></a>

### htmlLabelElement.blur()
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlLabelElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlLabelElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlLabelElement.removeAttribute(name)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlLabelElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlLabelElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlLabelElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlLabelElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlLabelElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlLabelElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlLabelElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlLabelElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlLabelElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlLabelElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlLabelElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlLabelElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlLabelElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlLabelElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlLabelElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlLabelElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlLabelElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlLabelElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlLabelElement.remove()
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

<a name="node-before" id="node-before"></a>

### htmlLabelElement.before(...nodes)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlLabelElement.after(...nodes)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlLabelElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlLabelElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlLabelElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlLabelElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLLabelElement`](#htmllabelelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

