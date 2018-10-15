
<a name="htmlelement" id="htmlelement"></a>

## HTMLElement ⇐ [`Element`](#element)
**Kind**: global class
**Extends**: [`Element`](#element)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

* [HTMLElement](#htmlelement) ⇐ [`Element`](#element)
    * [new HTMLElement(document, nodeName, namespaceURI)](#new-htmlelement-new)
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


<a name="new-htmlelement-new" id="new-htmlelement-new"></a>

### new HTMLElement(document, nodeName, namespaceURI)
Creates an instance of HTMLElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="element-nodename" id="element-nodename"></a>

### htmlElement.nodeName : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlElement.localName : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlElement.tagName : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlElement.nodeType : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlElement.id : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-classname" id="element-classname"></a>

### htmlElement.className : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlElement.style : `Style`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlElement.clientLeft : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlElement.clientTop : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlElement.clientWidth : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlElement.clientHeight : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlElement.offsetTop : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlElement.scrollTop : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlElement.disabled : `boolean`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlElement.innerHTML : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlElement.outerHTML : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlElement.contentEditable
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlElement.textContent : `string`
**Kind**: instance property of [`HTMLElement`](#htmlelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlElement.ownerDocument
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlElement.offsetParent
**Kind**: instance property of [`HTMLElement`](#htmlelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlElement.scrollIntoView()
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="element-focus" id="element-focus"></a>

### htmlElement.focus()
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="element-blur" id="element-blur"></a>

### htmlElement.blur()
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlElement.removeAttribute(name)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlElement.remove()
**Kind**: instance method of [`HTMLElement`](#htmlelement)

<a name="node-before" id="node-before"></a>

### htmlElement.before(...nodes)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlElement.after(...nodes)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLElement`](#htmlelement)

| Param | Type |
| --- | --- |
| event | `\*` |

