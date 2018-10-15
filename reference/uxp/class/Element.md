
<a name="element" id="element"></a>

## Element ⇐ [`Node`](#node)
**Kind**: global class
**Extends**: [`Node`](#node)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element

* [Element](#element) ⇐ [`Node`](#node)
    * [new Element(document, nodeName, namespaceURI)](#new-element-new)
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


<a name="new-element-new" id="new-element-new"></a>

### new Element(document, nodeName, namespaceURI)
Creates an instance of Element.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="element-nodename" id="element-nodename"></a>

### element.nodeName : `string`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### element.localName : `string`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### element.tagName : `string`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### element.nodeType : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### element.namespaceURI : `string`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-id" id="element-id"></a>

### element.id : `string`
**Kind**: instance property of [`Element`](#element)

<a name="element-classname" id="element-classname"></a>

### element.className : `string`
**Kind**: instance property of [`Element`](#element)

<a name="element-attributes" id="element-attributes"></a>

### element.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`Element`](#element)
**Overrides**: [`attributes`](#node-attributes)
**Read only**: true

<a name="element-style" id="element-style"></a>

### element.style : `Style`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### element.clientLeft : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### element.clientTop : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### element.clientWidth : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### element.clientHeight : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### element.offsetLeft : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### element.offsetTop : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### element.offsetWidth : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### element.offsetHeight : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### element.scrollLeft : `number`
**Kind**: instance property of [`Element`](#element)

<a name="element-scrolltop" id="element-scrolltop"></a>

### element.scrollTop : `number`
**Kind**: instance property of [`Element`](#element)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### element.scrollWidth : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### element.scrollHeight : `number`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### element.disabled : `boolean`
**Kind**: instance property of [`Element`](#element)

<a name="element-innerhtml" id="element-innerhtml"></a>

### element.innerHTML : `string`
**Kind**: instance property of [`Element`](#element)

<a name="element-outerhtml" id="element-outerhtml"></a>

### element.outerHTML : `string`
**Kind**: instance property of [`Element`](#element)

<a name="node-contenteditable" id="node-contenteditable"></a>

### element.contentEditable
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### element.isConnected : `boolean`
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### element.parentNode : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### element.firstChild : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### element.lastChild : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### element.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### element.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### element.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### element.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### element.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### element.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### element.textContent : `string`
**Kind**: instance property of [`Element`](#element)

<a name="node-childnodes" id="node-childnodes"></a>

### element.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### element.ownerDocument
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### element.offsetParent
**Kind**: instance property of [`Element`](#element)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### element.scrollIntoView()
**Kind**: instance method of [`Element`](#element)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### element.scrollIntoViewIfNeeded()
**Kind**: instance method of [`Element`](#element)

<a name="element-focus" id="element-focus"></a>

### element.focus()
**Kind**: instance method of [`Element`](#element)

<a name="element-blur" id="element-blur"></a>

### element.blur()
**Kind**: instance method of [`Element`](#element)

<a name="element-getattribute" id="element-getattribute"></a>

### element.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### element.setAttribute(name, value)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### element.removeAttribute(name)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### element.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### element.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### element.setAttributeNode(newAttr)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### element.removeAttributeNode(oldAttr)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### element.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### element.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### element.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### element.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### element.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`Element`](#element)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### element.insertAdjacentHTML(position, value)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### element.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### element.insertAdjacentText(position, text)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### element.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Element`](#element)

<a name="node-clonenode" id="node-clonenode"></a>

### element.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### element.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### element.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### element.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### element.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### element.remove()
**Kind**: instance method of [`Element`](#element)

<a name="node-before" id="node-before"></a>

### element.before(...nodes)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### element.after(...nodes)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### element.replaceWith(...nodes)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### element.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Element`](#element)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### element.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Element`](#element)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### element.dispatchEvent(event)
**Kind**: instance method of [`Element`](#element)

| Param | Type |
| --- | --- |
| event | `\*` |

