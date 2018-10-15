
<a name="htmlstyleelement" id="htmlstyleelement"></a>

## HTMLStyleElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement

* [HTMLStyleElement](#htmlstyleelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLStyleElement(document, nodeName, namespaceURI)](#new-htmlstyleelement-new)
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


<a name="new-htmlstyleelement-new" id="new-htmlstyleelement-new"></a>

### new HTMLStyleElement(document, nodeName, namespaceURI)
Creates an instance of HTMLStyleElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="element-nodename" id="element-nodename"></a>

### htmlStyleElement.nodeName : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlStyleElement.localName : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlStyleElement.tagName : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlStyleElement.nodeType : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlStyleElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlStyleElement.id : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-classname" id="element-classname"></a>

### htmlStyleElement.className : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlStyleElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlStyleElement.style : `Style`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlStyleElement.clientLeft : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlStyleElement.clientTop : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlStyleElement.clientWidth : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlStyleElement.clientHeight : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlStyleElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlStyleElement.offsetTop : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlStyleElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlStyleElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlStyleElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlStyleElement.scrollTop : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlStyleElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlStyleElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlStyleElement.disabled : `boolean`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlStyleElement.innerHTML : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlStyleElement.outerHTML : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlStyleElement.contentEditable
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlStyleElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlStyleElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlStyleElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlStyleElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlStyleElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlStyleElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlStyleElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlStyleElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlStyleElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlStyleElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlStyleElement.textContent : `string`
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlStyleElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlStyleElement.ownerDocument
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlStyleElement.offsetParent
**Kind**: instance property of [`HTMLStyleElement`](#htmlstyleelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlStyleElement.scrollIntoView()
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlStyleElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-focus" id="element-focus"></a>

### htmlStyleElement.focus()
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-blur" id="element-blur"></a>

### htmlStyleElement.blur()
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlStyleElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlStyleElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlStyleElement.removeAttribute(name)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlStyleElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlStyleElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlStyleElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlStyleElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlStyleElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlStyleElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlStyleElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlStyleElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlStyleElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlStyleElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlStyleElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlStyleElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlStyleElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlStyleElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlStyleElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlStyleElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlStyleElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlStyleElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlStyleElement.remove()
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

<a name="node-before" id="node-before"></a>

### htmlStyleElement.before(...nodes)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlStyleElement.after(...nodes)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlStyleElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlStyleElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlStyleElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlStyleElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLStyleElement`](#htmlstyleelement)

| Param | Type |
| --- | --- |
| event | `\*` |

