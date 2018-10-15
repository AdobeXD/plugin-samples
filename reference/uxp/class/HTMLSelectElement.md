
<a name="htmlselectelement" id="htmlselectelement"></a>

## HTMLSelectElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement

* [HTMLSelectElement](#htmlselectelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLSelectElement(document, nodeName, namespaceURI)](#new-htmlselectelement-new)
    * [.value](#htmlselectelement-value) : `string`
    * [.selectedNode](#htmlselectelement-selectednode) : [`Node`](#node)
    * [.selectedIndex](#htmlselectelement-selectedindex) : `number`
    * [.selectedOptions](#htmlselectelement-selectedoptions) : [`Array.<Node>`](#node)
    * [.uxpVariant](#htmlselectelement-uxpvariant) : `string`
    * [.uxpQuiet](#htmlselectelement-uxpquiet) : `string`
    * [.options](#htmlselectelement-options) : [`NodeList`](#nodelist)
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
    * [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
    * [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)


<a name="new-htmlselectelement-new" id="new-htmlselectelement-new"></a>

### new HTMLSelectElement(document, nodeName, namespaceURI)
Creates an instance of HTMLSelectElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="htmlselectelement-value" id="htmlselectelement-value"></a>

### htmlSelectElement.value : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-selectednode" id="htmlselectelement-selectednode"></a>

### htmlSelectElement.selectedNode : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-selectedindex" id="htmlselectelement-selectedindex"></a>

### htmlSelectElement.selectedIndex : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-selectedoptions" id="htmlselectelement-selectedoptions"></a>

### htmlSelectElement.selectedOptions : [`Array.<Node>`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-uxpvariant" id="htmlselectelement-uxpvariant"></a>

### htmlSelectElement.uxpVariant : `string`
Variant

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-uxpquiet" id="htmlselectelement-uxpquiet"></a>

### htmlSelectElement.uxpQuiet : `string`
Determines if control renders quietly

**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="htmlselectelement-options" id="htmlselectelement-options"></a>

### htmlSelectElement.options : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-nodename" id="element-nodename"></a>

### htmlSelectElement.nodeName : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlSelectElement.localName : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlSelectElement.tagName : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlSelectElement.nodeType : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlSelectElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlSelectElement.id : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-classname" id="element-classname"></a>

### htmlSelectElement.className : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlSelectElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlSelectElement.style : `Style`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlSelectElement.clientLeft : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlSelectElement.clientTop : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlSelectElement.clientWidth : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlSelectElement.clientHeight : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlSelectElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlSelectElement.offsetTop : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlSelectElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlSelectElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlSelectElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlSelectElement.scrollTop : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlSelectElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlSelectElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlSelectElement.disabled : `boolean`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlSelectElement.innerHTML : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlSelectElement.outerHTML : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlSelectElement.contentEditable
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlSelectElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlSelectElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlSelectElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlSelectElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlSelectElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlSelectElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlSelectElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlSelectElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlSelectElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlSelectElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlSelectElement.textContent : `string`
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlSelectElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlSelectElement.ownerDocument
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlSelectElement.offsetParent
**Kind**: instance property of [`HTMLSelectElement`](#htmlselectelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlSelectElement.scrollIntoView()
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlSelectElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-focus" id="element-focus"></a>

### htmlSelectElement.focus()
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-blur" id="element-blur"></a>

### htmlSelectElement.blur()
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlSelectElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlSelectElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlSelectElement.removeAttribute(name)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlSelectElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlSelectElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlSelectElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlSelectElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlSelectElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlSelectElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlSelectElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlSelectElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlSelectElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlSelectElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlSelectElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlSelectElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlSelectElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlSelectElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlSelectElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlSelectElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlSelectElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlSelectElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlSelectElement.remove()
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

<a name="node-before" id="node-before"></a>

### htmlSelectElement.before(...nodes)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlSelectElement.after(...nodes)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlSelectElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlSelectElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlSelectElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlSelectElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLSelectElement`](#htmlselectelement)

| Param | Type |
| --- | --- |
| event | `\*` |

