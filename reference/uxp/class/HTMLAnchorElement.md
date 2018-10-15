
<a name="htmlanchorelement" id="htmlanchorelement"></a>

## HTMLAnchorElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement

* [HTMLAnchorElement](#htmlanchorelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLAnchorElement(document, nodeName, namespaceURI)](#new-htmlanchorelement-new)
    * [.href](#htmlanchorelement-href) : `string`
    * [.pathname](#htmlanchorelement-pathname) : `string`
    * [.protocol](#htmlanchorelement-protocol) : `string`
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


<a name="new-htmlanchorelement-new" id="new-htmlanchorelement-new"></a>

### new HTMLAnchorElement(document, nodeName, namespaceURI)
Creates an instance of HTMLAnchorElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="htmlanchorelement-href" id="htmlanchorelement-href"></a>

### htmlAnchorElement.href : `string`
The `href` value for the anchor

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="htmlanchorelement-pathname" id="htmlanchorelement-pathname"></a>

### htmlAnchorElement.pathname : `string`
The path portion of the anchor's `href`

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="htmlanchorelement-protocol" id="htmlanchorelement-protocol"></a>

### htmlAnchorElement.protocol : `string`
The protocol portion of the anchor's `href`.

**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-nodename" id="element-nodename"></a>

### htmlAnchorElement.nodeName : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlAnchorElement.localName : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlAnchorElement.tagName : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlAnchorElement.nodeType : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlAnchorElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlAnchorElement.id : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-classname" id="element-classname"></a>

### htmlAnchorElement.className : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlAnchorElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlAnchorElement.style : `Style`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlAnchorElement.clientLeft : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlAnchorElement.clientTop : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlAnchorElement.clientWidth : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlAnchorElement.clientHeight : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlAnchorElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlAnchorElement.offsetTop : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlAnchorElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlAnchorElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlAnchorElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlAnchorElement.scrollTop : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlAnchorElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlAnchorElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlAnchorElement.disabled : `boolean`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlAnchorElement.innerHTML : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlAnchorElement.outerHTML : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlAnchorElement.contentEditable
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlAnchorElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlAnchorElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlAnchorElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlAnchorElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlAnchorElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlAnchorElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlAnchorElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlAnchorElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlAnchorElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlAnchorElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlAnchorElement.textContent : `string`
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlAnchorElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlAnchorElement.ownerDocument
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlAnchorElement.offsetParent
**Kind**: instance property of [`HTMLAnchorElement`](#htmlanchorelement)
**Read only**: true

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlAnchorElement.scrollIntoView()
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlAnchorElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-focus" id="element-focus"></a>

### htmlAnchorElement.focus()
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-blur" id="element-blur"></a>

### htmlAnchorElement.blur()
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlAnchorElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlAnchorElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlAnchorElement.removeAttribute(name)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlAnchorElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlAnchorElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlAnchorElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlAnchorElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlAnchorElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlAnchorElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlAnchorElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlAnchorElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlAnchorElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlAnchorElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlAnchorElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlAnchorElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlAnchorElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlAnchorElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlAnchorElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlAnchorElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlAnchorElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlAnchorElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlAnchorElement.remove()
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

<a name="node-before" id="node-before"></a>

### htmlAnchorElement.before(...nodes)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlAnchorElement.after(...nodes)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlAnchorElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlAnchorElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlAnchorElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlAnchorElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLAnchorElement`](#htmlanchorelement)

| Param | Type |
| --- | --- |
| event | `\*` |

