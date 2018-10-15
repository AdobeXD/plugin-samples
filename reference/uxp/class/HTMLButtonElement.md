
<a name="htmlbuttonelement" id="htmlbuttonelement"></a>

## HTMLButtonElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement

* [HTMLButtonElement](#htmlbuttonelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLButtonElement(document, nodeName, namespaceURI)](#new-htmlbuttonelement-new)
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


<a name="new-htmlbuttonelement-new" id="new-htmlbuttonelement-new"></a>

### new HTMLButtonElement(document, nodeName, namespaceURI)
Creates an instance of HTMLButtonElement.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| nodeName | `string` |
| namespaceURI | `string` |


<a name="element-nodename" id="element-nodename"></a>

### htmlButtonElement.nodeName : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlButtonElement.localName : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlButtonElement.tagName : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlButtonElement.nodeType : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlButtonElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlButtonElement.id : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-classname" id="element-classname"></a>

### htmlButtonElement.className : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlButtonElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlButtonElement.style : `Style`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlButtonElement.clientLeft : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlButtonElement.clientTop : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlButtonElement.clientWidth : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlButtonElement.clientHeight : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlButtonElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlButtonElement.offsetTop : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlButtonElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlButtonElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlButtonElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlButtonElement.scrollTop : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlButtonElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlButtonElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlButtonElement.disabled : `boolean`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlButtonElement.innerHTML : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlButtonElement.outerHTML : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlButtonElement.contentEditable
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlButtonElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlButtonElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlButtonElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlButtonElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlButtonElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlButtonElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlButtonElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlButtonElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlButtonElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlButtonElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlButtonElement.textContent : `string`
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlButtonElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlButtonElement.ownerDocument
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlButtonElement.offsetParent
**Kind**: instance property of [`HTMLButtonElement`](#htmlbuttonelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlButtonElement.scrollIntoView()
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlButtonElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-focus" id="element-focus"></a>

### htmlButtonElement.focus()
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-blur" id="element-blur"></a>

### htmlButtonElement.blur()
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlButtonElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlButtonElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlButtonElement.removeAttribute(name)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlButtonElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlButtonElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlButtonElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlButtonElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlButtonElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlButtonElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlButtonElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlButtonElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlButtonElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlButtonElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlButtonElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlButtonElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlButtonElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlButtonElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlButtonElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlButtonElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlButtonElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlButtonElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlButtonElement.remove()
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

<a name="node-before" id="node-before"></a>

### htmlButtonElement.before(...nodes)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlButtonElement.after(...nodes)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlButtonElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlButtonElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlButtonElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlButtonElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLButtonElement`](#htmlbuttonelement)

| Param | Type |
| --- | --- |
| event | `\*` |

