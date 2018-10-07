
<a name="htmlformelement" id="htmlformelement"></a>

## HTMLFormElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement  

* [HTMLFormElement](#htmlformelement) ⇐ [`HTMLElement`](#htmlelement)
    * [.elements](#htmlformelement-elements)
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


<a name="htmlformelement-elements" id="htmlformelement-elements"></a>

### htmlFormElement.elements
Returns an HTMLCollection containing all of the form controls.
It should technicaly be an HTMLFormControlsCollection which subclasses HTMLCollection.
TODO: Implement HTMLFormControlsCollection and use it here.

**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements  

<a name="element-nodename" id="element-nodename"></a>

### htmlFormElement.nodeName : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlFormElement.localName : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlFormElement.tagName : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlFormElement.nodeType : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlFormElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlFormElement.id : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-classname" id="element-classname"></a>

### htmlFormElement.className : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlFormElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlFormElement.style : `Style`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlFormElement.clientLeft : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlFormElement.clientTop : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlFormElement.clientWidth : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlFormElement.clientHeight : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlFormElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlFormElement.offsetTop : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlFormElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlFormElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlFormElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlFormElement.scrollTop : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlFormElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlFormElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlFormElement.disabled : `boolean`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlFormElement.innerHTML : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlFormElement.outerHTML : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlFormElement.contentEditable
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlFormElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlFormElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlFormElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlFormElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlFormElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlFormElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlFormElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlFormElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlFormElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlFormElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlFormElement.textContent : `string`
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlFormElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlFormElement.ownerDocument
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlFormElement.offsetParent
**Kind**: instance property of [`HTMLFormElement`](#htmlformelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlFormElement.scrollIntoView()
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlFormElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="element-focus" id="element-focus"></a>

### htmlFormElement.focus()
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="element-blur" id="element-blur"></a>

### htmlFormElement.blur()
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlFormElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlFormElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlFormElement.removeAttribute(name)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlFormElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlFormElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlFormElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlFormElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlFormElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlFormElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlFormElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlFormElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlFormElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlFormElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlFormElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlFormElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlFormElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlFormElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlFormElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlFormElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlFormElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlFormElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlFormElement.remove()
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

<a name="node-before" id="node-before"></a>

### htmlFormElement.before(...nodes)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlFormElement.after(...nodes)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlFormElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlFormElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlFormElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlFormElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLFormElement`](#htmlformelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

