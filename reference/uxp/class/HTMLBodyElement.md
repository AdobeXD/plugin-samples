
<a name="htmlbodyelement" id="htmlbodyelement"></a>

## HTMLBodyElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement

* [HTMLBodyElement](#htmlbodyelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLBodyElement(document, nodeName, namespaceURI)](#new-htmlbodyelement-new)
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


<a name="new-htmlbodyelement-new" id="new-htmlbodyelement-new"></a>

### new HTMLBodyElement(document, nodeName, namespaceURI)
Creates an instance of HTMLBodyElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="element-nodename" id="element-nodename"></a>

### htmlBodyElement.nodeName : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlBodyElement.localName : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlBodyElement.tagName : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlBodyElement.nodeType : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlBodyElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlBodyElement.id : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-classname" id="element-classname"></a>

### htmlBodyElement.className : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlBodyElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlBodyElement.style : `Style`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlBodyElement.clientLeft : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlBodyElement.clientTop : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlBodyElement.clientWidth : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlBodyElement.clientHeight : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlBodyElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlBodyElement.offsetTop : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlBodyElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlBodyElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlBodyElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlBodyElement.scrollTop : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlBodyElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlBodyElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlBodyElement.disabled : `boolean`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlBodyElement.innerHTML : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlBodyElement.outerHTML : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlBodyElement.contentEditable
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlBodyElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlBodyElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlBodyElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlBodyElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlBodyElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlBodyElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlBodyElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlBodyElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlBodyElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlBodyElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlBodyElement.textContent : `string`
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlBodyElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlBodyElement.ownerDocument
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlBodyElement.offsetParent
**Kind**: instance property of [`HTMLBodyElement`](#htmlbodyelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlBodyElement.scrollIntoView()
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlBodyElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-focus" id="element-focus"></a>

### htmlBodyElement.focus()
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-blur" id="element-blur"></a>

### htmlBodyElement.blur()
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlBodyElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlBodyElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlBodyElement.removeAttribute(name)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlBodyElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlBodyElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlBodyElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlBodyElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlBodyElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlBodyElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlBodyElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlBodyElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlBodyElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlBodyElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlBodyElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlBodyElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlBodyElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlBodyElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlBodyElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlBodyElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlBodyElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlBodyElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlBodyElement.remove()
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

<a name="node-before" id="node-before"></a>

### htmlBodyElement.before(...nodes)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlBodyElement.after(...nodes)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlBodyElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlBodyElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlBodyElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlBodyElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLBodyElement`](#htmlbodyelement)

| Param | Type |
| --- | --- |
| event | `\*` |

