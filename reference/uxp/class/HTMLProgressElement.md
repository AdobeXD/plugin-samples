
<a name="htmlprogresselement" id="htmlprogresselement"></a>

## HTMLProgressElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement  

* [HTMLProgressElement](#htmlprogresselement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLProgressElement(document, nodeName, namespaceURI)](#new-htmlprogresselement-new)
    * [.max](#htmlprogresselement-max) : `number`
    * [.value](#htmlprogresselement-value) : `number`
    * [.position](#htmlprogresselement-position) : `number`
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


<a name="new-htmlprogresselement-new" id="new-htmlprogresselement-new"></a>

### new HTMLProgressElement(document, nodeName, namespaceURI)
Creates an instance of HTMLProgressElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="htmlprogresselement-max" id="htmlprogresselement-max"></a>

### htmlProgressElement.max : `number`
Maximum value for the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="htmlprogresselement-value" id="htmlprogresselement-value"></a>

### htmlProgressElement.value : `number`
Value of the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="htmlprogresselement-position" id="htmlprogresselement-position"></a>

### htmlProgressElement.position : `number`
Completion value of the progress bar

**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-nodename" id="element-nodename"></a>

### htmlProgressElement.nodeName : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlProgressElement.localName : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlProgressElement.tagName : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlProgressElement.nodeType : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlProgressElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlProgressElement.id : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-classname" id="element-classname"></a>

### htmlProgressElement.className : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlProgressElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlProgressElement.style : `Style`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlProgressElement.clientLeft : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlProgressElement.clientTop : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlProgressElement.clientWidth : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlProgressElement.clientHeight : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlProgressElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlProgressElement.offsetTop : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlProgressElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlProgressElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlProgressElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlProgressElement.scrollTop : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlProgressElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlProgressElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlProgressElement.disabled : `boolean`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlProgressElement.innerHTML : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlProgressElement.outerHTML : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlProgressElement.contentEditable
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlProgressElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlProgressElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlProgressElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlProgressElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlProgressElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlProgressElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlProgressElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlProgressElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlProgressElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlProgressElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlProgressElement.textContent : `string`
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlProgressElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlProgressElement.ownerDocument
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlProgressElement.offsetParent
**Kind**: instance property of [`HTMLProgressElement`](#htmlprogresselement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlProgressElement.scrollIntoView()
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlProgressElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-focus" id="element-focus"></a>

### htmlProgressElement.focus()
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-blur" id="element-blur"></a>

### htmlProgressElement.blur()
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlProgressElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlProgressElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlProgressElement.removeAttribute(name)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlProgressElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlProgressElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlProgressElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlProgressElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlProgressElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlProgressElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlProgressElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlProgressElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlProgressElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlProgressElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlProgressElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlProgressElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlProgressElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlProgressElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlProgressElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlProgressElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlProgressElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlProgressElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlProgressElement.remove()
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

<a name="node-before" id="node-before"></a>

### htmlProgressElement.before(...nodes)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlProgressElement.after(...nodes)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlProgressElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlProgressElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlProgressElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlProgressElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLProgressElement`](#htmlprogresselement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

