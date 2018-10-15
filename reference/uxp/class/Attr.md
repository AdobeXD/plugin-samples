
<a name="attr" id="attr"></a>

## Attr ⇐ [`Node`](#node)
**Kind**: global class
**Extends**: [`Node`](#node)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Attr

* [Attr](#attr) ⇐ [`Node`](#node)
    * [new Attr(document, nodeName)](#new-attr-new)
    * [.nodeName](#attr-nodename) : `string`
    * [.localName](#attr-localname) : `string`
    * [.name](#attr-name) : `string`
    * [.specified](#attr-specified) : `boolean`
    * [.value](#attr-value) : `\*`
    * [.nodeType](#attr-nodetype) : `number`
    * [.nodeValue](#attr-nodevalue) : `\*`
    * [.ownerElement](#attr-ownerelement) : [`Element`](#element)
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
    * [.attributes](#node-attributes)
    * [.offsetParent](#node-offsetparent)
    * [.remove()](#attr-remove)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
    * [.cloneNode(deep)](#node-clonenode) ⇒ [`Node`](#node)
    * [.appendChild(child)](#node-appendchild) ⇒ [`Node`](#node)
    * [.insertBefore(child, before)](#node-insertbefore) ⇒ [`Node`](#node)
    * [.replaceChild(newChild, oldChild)](#node-replacechild) ⇒ [`Node`](#node)
    * [.removeChild(child)](#node-removechild) ⇒ [`Node`](#node)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
    * [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)


<a name="new-attr-new" id="new-attr-new"></a>

### new Attr(document, nodeName)
Creates an instance of Attr.


| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| nodeName | `string` |


<a name="attr-nodename" id="attr-nodename"></a>

### attr.nodeName : `string`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-localname" id="attr-localname"></a>

### attr.localName : `string`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-name" id="attr-name"></a>

### attr.name : `string`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-specified" id="attr-specified"></a>

### attr.specified : `boolean`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-value" id="attr-value"></a>

### attr.value : `\*`
**Kind**: instance property of [`Attr`](#attr)

<a name="attr-nodetype" id="attr-nodetype"></a>

### attr.nodeType : `number`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-nodevalue" id="attr-nodevalue"></a>

### attr.nodeValue : `\*`
**Kind**: instance property of [`Attr`](#attr)

<a name="attr-ownerelement" id="attr-ownerelement"></a>

### attr.ownerElement : [`Element`](#element)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-contenteditable" id="node-contenteditable"></a>

### attr.contentEditable
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### attr.isConnected : `boolean`
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### attr.parentNode : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### attr.firstChild : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### attr.lastChild : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### attr.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### attr.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### attr.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### attr.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### attr.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### attr.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### attr.textContent : `string`
**Kind**: instance property of [`Attr`](#attr)

<a name="node-childnodes" id="node-childnodes"></a>

### attr.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### attr.ownerDocument
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-attributes" id="node-attributes"></a>

### attr.attributes
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### attr.offsetParent
**Kind**: instance property of [`Attr`](#attr)
**Read only**: true

<a name="attr-remove" id="attr-remove"></a>

### attr.remove()
**Kind**: instance method of [`Attr`](#attr)
**Overrides**: [`remove`](#node-remove)

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### attr.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Attr`](#attr)

<a name="node-clonenode" id="node-clonenode"></a>

### attr.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### attr.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### attr.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### attr.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### attr.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-before" id="node-before"></a>

### attr.before(...nodes)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### attr.after(...nodes)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### attr.replaceWith(...nodes)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### attr.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Attr`](#attr)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### attr.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Attr`](#attr)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### attr.dispatchEvent(event)
**Kind**: instance method of [`Attr`](#attr)

| Param | Type |
| --- | --- |
| event | `\*` |

