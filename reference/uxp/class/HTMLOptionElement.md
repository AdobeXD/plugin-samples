
<a name="htmloptionelement" id="htmloptionelement"></a>

## HTMLOptionElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement

* [HTMLOptionElement](#htmloptionelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLOptionElement(document, nodeName, namespaceURI)](#new-htmloptionelement-new)
    * [.value](#htmloptionelement-value) : `string`
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


<a name="new-htmloptionelement-new" id="new-htmloptionelement-new"></a>

### new HTMLOptionElement(document, nodeName, namespaceURI)
Creates an instance of HTMLOptionElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="htmloptionelement-value" id="htmloptionelement-value"></a>

### htmlOptionElement.value : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-nodename" id="element-nodename"></a>

### htmlOptionElement.nodeName : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlOptionElement.localName : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlOptionElement.tagName : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlOptionElement.nodeType : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlOptionElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlOptionElement.id : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-classname" id="element-classname"></a>

### htmlOptionElement.className : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlOptionElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlOptionElement.style : `Style`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlOptionElement.clientLeft : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlOptionElement.clientTop : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlOptionElement.clientWidth : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlOptionElement.clientHeight : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlOptionElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlOptionElement.offsetTop : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlOptionElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlOptionElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlOptionElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlOptionElement.scrollTop : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlOptionElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlOptionElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlOptionElement.disabled : `boolean`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlOptionElement.innerHTML : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlOptionElement.outerHTML : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlOptionElement.contentEditable
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlOptionElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlOptionElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlOptionElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlOptionElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlOptionElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlOptionElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlOptionElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlOptionElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlOptionElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlOptionElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlOptionElement.textContent : `string`
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlOptionElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlOptionElement.ownerDocument
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlOptionElement.offsetParent
**Kind**: instance property of [`HTMLOptionElement`](#htmloptionelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlOptionElement.scrollIntoView()
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlOptionElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-focus" id="element-focus"></a>

### htmlOptionElement.focus()
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-blur" id="element-blur"></a>

### htmlOptionElement.blur()
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlOptionElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlOptionElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlOptionElement.removeAttribute(name)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlOptionElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlOptionElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlOptionElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlOptionElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlOptionElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlOptionElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlOptionElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlOptionElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlOptionElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlOptionElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlOptionElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlOptionElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlOptionElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlOptionElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlOptionElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlOptionElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlOptionElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlOptionElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlOptionElement.remove()
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

<a name="node-before" id="node-before"></a>

### htmlOptionElement.before(...nodes)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlOptionElement.after(...nodes)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlOptionElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlOptionElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlOptionElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlOptionElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLOptionElement`](#htmloptionelement)

| Param | Type |
| --- | --- |
| event | `\*` |

