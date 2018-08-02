
<a name="htmlinputelement" id="htmlinputelement"></a>

## HTMLInputElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement  

* [HTMLInputElement](#htmlinputelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLInputElement(document, nodeName, namespaceURI)](#new-htmlinputelement-new)
    * [.value](#htmlinputelement-value) : `\*`
    * [.checked](#htmlinputelement-checked) : `boolean`
    * [.indeterminate](#htmlinputelement-indeterminate) : `boolean`
    * [.type](#htmlinputelement-type) : `string`
    * [.placeholder](#htmlinputelement-placeholder) : `string`
    * [.readOnly](#htmlinputelement-readonly) : `boolean`
    * [.min](#htmlinputelement-min) : `string`
    * [.max](#htmlinputelement-max) : `string`
    * [.uxpVariant](#htmlinputelement-uxpvariant) : `string`
    * [.uxpQuiet](#htmlinputelement-uxpquiet) : `string`
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


<a name="new-htmlinputelement-new" id="new-htmlinputelement-new"></a>

### new HTMLInputElement(document, nodeName, namespaceURI)
Creates an instance of HTMLInputElement.


| Param | Type |
| --- | --- |
| document | `\*` | 
| nodeName | `\*` | 
| namespaceURI | `\*` | 


<a name="htmlinputelement-value" id="htmlinputelement-value"></a>

### htmlInputElement.value : `\*`
Returns the value of the input element.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-checked" id="htmlinputelement-checked"></a>

### htmlInputElement.checked : `boolean`
Indicates if the checkbox is checked.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-indeterminate" id="htmlinputelement-indeterminate"></a>

### htmlInputElement.indeterminate : `boolean`
Indicates if the element is indeterminate

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-type" id="htmlinputelement-type"></a>

### htmlInputElement.type : `string`
Specifies the type of input control

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-placeholder" id="htmlinputelement-placeholder"></a>

### htmlInputElement.placeholder : `string`
The placeholder for the input element (if applicable to the input element's type)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-readonly" id="htmlinputelement-readonly"></a>

### htmlInputElement.readOnly : `boolean`
Determines if the element's content is read only.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-min" id="htmlinputelement-min"></a>

### htmlInputElement.min : `string`
Minimum value allowed (used for `input type="range"`)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-max" id="htmlinputelement-max"></a>

### htmlInputElement.max : `string`
Maximum value allowed (used for `input type="range"`)

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-uxpvariant" id="htmlinputelement-uxpvariant"></a>

### htmlInputElement.uxpVariant : `string`
Controls the type of native widget.

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="htmlinputelement-uxpquiet" id="htmlinputelement-uxpquiet"></a>

### htmlInputElement.uxpQuiet : `string`
Determines if a control is rendered in "quiet" mode

**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-nodename" id="element-nodename"></a>

### htmlInputElement.nodeName : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlInputElement.localName : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlInputElement.tagName : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlInputElement.nodeType : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlInputElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlInputElement.id : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-classname" id="element-classname"></a>

### htmlInputElement.className : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-attributes" id="element-attributes"></a>

### htmlInputElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlInputElement.style : `Style`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlInputElement.clientLeft : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlInputElement.clientTop : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlInputElement.clientWidth : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlInputElement.clientHeight : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlInputElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlInputElement.offsetTop : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlInputElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlInputElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlInputElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlInputElement.scrollTop : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlInputElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlInputElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlInputElement.disabled : `boolean`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlInputElement.innerHTML : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlInputElement.outerHTML : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlInputElement.contentEditable
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlInputElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlInputElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlInputElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlInputElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlInputElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlInputElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlInputElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlInputElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlInputElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlInputElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlInputElement.textContent : `string`
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlInputElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlInputElement.ownerDocument
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlInputElement.offsetParent
**Kind**: instance property of [`HTMLInputElement`](#htmlinputelement)  
**Read only**: true  

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlInputElement.scrollIntoView()
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlInputElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-focus" id="element-focus"></a>

### htmlInputElement.focus()
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-blur" id="element-blur"></a>

### htmlInputElement.blur()
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlInputElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlInputElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlInputElement.removeAttribute(name)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlInputElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlInputElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlInputElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlInputElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlInputElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlInputElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlInputElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlInputElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlInputElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlInputElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlInputElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlInputElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlInputElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlInputElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlInputElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlInputElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlInputElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlInputElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlInputElement.remove()
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

<a name="node-before" id="node-before"></a>

### htmlInputElement.before(...nodes)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlInputElement.after(...nodes)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlInputElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlInputElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlInputElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlInputElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLInputElement`](#htmlinputelement)  

| Param | Type |
| --- | --- |
| event | `\*` | 

