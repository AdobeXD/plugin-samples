
<a name="htmlheadelement" id="htmlheadelement"></a>

## HTMLHeadElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement

* [HTMLHeadElement](#htmlheadelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLHeadElement(document, nodeName, namespaceURI)](#new-htmlheadelement-new)
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


<a name="new-htmlheadelement-new" id="new-htmlheadelement-new"></a>

### new HTMLHeadElement(document, nodeName, namespaceURI)
Creates an instance of HTMLHeadElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="element-nodename" id="element-nodename"></a>

### htmlHeadElement.nodeName : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlHeadElement.localName : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlHeadElement.tagName : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlHeadElement.nodeType : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlHeadElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlHeadElement.id : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-classname" id="element-classname"></a>

### htmlHeadElement.className : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlHeadElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlHeadElement.style : `Style`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlHeadElement.clientLeft : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlHeadElement.clientTop : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlHeadElement.clientWidth : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlHeadElement.clientHeight : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlHeadElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlHeadElement.offsetTop : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlHeadElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlHeadElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlHeadElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlHeadElement.scrollTop : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlHeadElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlHeadElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlHeadElement.disabled : `boolean`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlHeadElement.innerHTML : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlHeadElement.outerHTML : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlHeadElement.contentEditable
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlHeadElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlHeadElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlHeadElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlHeadElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlHeadElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlHeadElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlHeadElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlHeadElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlHeadElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlHeadElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlHeadElement.textContent : `string`
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlHeadElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlHeadElement.ownerDocument
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlHeadElement.offsetParent
**Kind**: instance property of [`HTMLHeadElement`](#htmlheadelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlHeadElement.scrollIntoView()
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlHeadElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-focus" id="element-focus"></a>

### htmlHeadElement.focus()
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-blur" id="element-blur"></a>

### htmlHeadElement.blur()
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlHeadElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlHeadElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlHeadElement.removeAttribute(name)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlHeadElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlHeadElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlHeadElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlHeadElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlHeadElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlHeadElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlHeadElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlHeadElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlHeadElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlHeadElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlHeadElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlHeadElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlHeadElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlHeadElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlHeadElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlHeadElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlHeadElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlHeadElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlHeadElement.remove()
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

<a name="node-before" id="node-before"></a>

### htmlHeadElement.before(...nodes)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlHeadElement.after(...nodes)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlHeadElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlHeadElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlHeadElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlHeadElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLHeadElement`](#htmlheadelement)

| Param | Type |
| --- | --- |
| event | `\*` |

