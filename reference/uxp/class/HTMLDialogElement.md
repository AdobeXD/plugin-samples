
<a name="htmldialogelement" id="htmldialogelement"></a>

## HTMLDialogElement ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class
**Extends**: [`HTMLElement`](#htmlelement)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement

* [HTMLDialogElement](#htmldialogelement) ⇐ [`HTMLElement`](#htmlelement)
    * [new HTMLDialogElement(document, nodeName, namespaceURI)](#new-htmldialogelement-new)
    * [.open](#htmldialogelement-open) : `boolean`
    * [.returnValue](#htmldialogelement-returnvalue) : `\*`
    * [.REJECTION_REASON_NOT_ALLOWED](#htmldialogelement-rejection-reason-not-allowed)
    * [.REJECTION_REASON_DETACHED](#htmldialogelement-rejection-reason-detached)
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
    * [.showModal()](#htmldialogelement-showmodal) ⇒ `Promise`
    * [.close([returnValue])](#htmldialogelement-close)
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


<a name="new-htmldialogelement-new" id="new-htmldialogelement-new"></a>

### new HTMLDialogElement(document, nodeName, namespaceURI)
Creates an instance of HTMLDialogElement.


| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


<a name="htmldialogelement-open" id="htmldialogelement-open"></a>

### htmlDialogElement.open : `boolean`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="htmldialogelement-returnvalue" id="htmldialogelement-returnvalue"></a>

### htmlDialogElement.returnValue : `\*`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="htmldialogelement-rejection-reason-not-allowed" id="htmldialogelement-rejection-reason-not-allowed"></a>

### htmlDialogElement.REJECTION_REASON_NOT_ALLOWED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the application does not allow showing dialogs (e.g. only one dialog is allowed).

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="htmldialogelement-rejection-reason-detached" id="htmldialogelement-rejection-reason-detached"></a>

### htmlDialogElement.REJECTION_REASON_DETACHED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the node has been detached from DOM tree.

**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-nodename" id="element-nodename"></a>

### htmlDialogElement.nodeName : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-localname" id="element-localname"></a>

### htmlDialogElement.localName : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-tagname" id="element-tagname"></a>

### htmlDialogElement.tagName : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-nodetype" id="element-nodetype"></a>

### htmlDialogElement.nodeType : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlDialogElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-id" id="element-id"></a>

### htmlDialogElement.id : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-classname" id="element-classname"></a>

### htmlDialogElement.className : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-attributes" id="element-attributes"></a>

### htmlDialogElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-style" id="element-style"></a>

### htmlDialogElement.style : `Style`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-clientleft" id="element-clientleft"></a>

### htmlDialogElement.clientLeft : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-clienttop" id="element-clienttop"></a>

### htmlDialogElement.clientTop : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlDialogElement.clientWidth : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-clientheight" id="element-clientheight"></a>

### htmlDialogElement.clientHeight : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlDialogElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-offsettop" id="element-offsettop"></a>

### htmlDialogElement.offsetTop : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlDialogElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlDialogElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlDialogElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlDialogElement.scrollTop : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlDialogElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlDialogElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="element-disabled" id="element-disabled"></a>

### htmlDialogElement.disabled : `boolean`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlDialogElement.innerHTML : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlDialogElement.outerHTML : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlDialogElement.contentEditable
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### htmlDialogElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### htmlDialogElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### htmlDialogElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### htmlDialogElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlDialogElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlDialogElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlDialogElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlDialogElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlDialogElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlDialogElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### htmlDialogElement.textContent : `string`
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlDialogElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlDialogElement.ownerDocument
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### htmlDialogElement.offsetParent
**Kind**: instance property of [`HTMLDialogElement`](#htmldialogelement)
**Read only**: true

<a name="htmldialogelement-showmodal" id="htmldialogelement-showmodal"></a>

### htmlDialogElement.showModal() ⇒ `Promise`
Show the modal dialog.

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)
**Returns**: `Promise` - A promise that resolves when the dialog is closed (**NSC**)
                   after calling the close() method or clicking the "submit" button.
                   The promise will be resolved with returnValue as a parameter.
                   The promise can be rejected if the dialog was closed for other reasons
                   e.g. the user hit escape or closed the window, or if the application
                   does not allow showing the dialog. The error parameter will give more details.
                   error.code will be one of the values from HTMLDialogElement.rejectionReasons.

<a name="htmldialogelement-close" id="htmldialogelement-close"></a>

### htmlDialogElement.close([returnValue])
Closes the dialog; setting the return value (optional)

**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| [returnValue] | `\*` |


<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlDialogElement.scrollIntoView()
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlDialogElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-focus" id="element-focus"></a>

### htmlDialogElement.focus()
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-blur" id="element-blur"></a>

### htmlDialogElement.blur()
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-getattribute" id="element-getattribute"></a>

### htmlDialogElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattribute" id="element-setattribute"></a>

### htmlDialogElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlDialogElement.removeAttribute(name)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlDialogElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlDialogElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlDialogElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlDialogElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlDialogElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlDialogElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| name | `string` |


<a name="element-queryselector" id="element-queryselector"></a>

### htmlDialogElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlDialogElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| selector | `string` |


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlDialogElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlDialogElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlDialogElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlDialogElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlDialogElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="node-clonenode" id="node-clonenode"></a>

### htmlDialogElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### htmlDialogElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlDialogElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### htmlDialogElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### htmlDialogElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### htmlDialogElement.remove()
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

<a name="node-before" id="node-before"></a>

### htmlDialogElement.before(...nodes)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### htmlDialogElement.after(...nodes)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### htmlDialogElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlDialogElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlDialogElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlDialogElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLDialogElement`](#htmldialogelement)

| Param | Type |
| --- | --- |
| event | `\*` |

