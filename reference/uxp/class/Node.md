
<a name="node" id="node"></a>

## Node ⇐ [`EventTarget`](#eventtarget)
**Kind**: global class
**Extends**: [`EventTarget`](#eventtarget)
**Access**: public
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Node

* [Node](#node) ⇐ [`EventTarget`](#eventtarget)
    * [new Node(ownerDocument)](#new-node-new)
    * _instance_
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
    * _static_
        * [.ELEMENT_NODE](#node-element-node)
        * [.ATTRIBUTE_NODE](#node-attribute-node)
        * [.TEXT_NODE](#node-text-node)
        * [.DOCUMENT_NODE](#node-document-node)
        * [.DOCUMENT_FRAGMENT_NODE](#node-document-fragment-node)
        * [.COMMENT_NODE](#node-comment-node)


<a name="new-node-new" id="new-node-new"></a>

### new Node(ownerDocument)
Creates an instance of Node.


| Param | Type |
| --- | --- |
| ownerDocument | `\*` |


<a name="node-contenteditable" id="node-contenteditable"></a>

### node.contentEditable
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-isconnected" id="node-isconnected"></a>

### node.isConnected : `boolean`
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-parentnode" id="node-parentnode"></a>

### node.parentNode : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-firstchild" id="node-firstchild"></a>

### node.firstChild : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-lastchild" id="node-lastchild"></a>

### node.lastChild : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-previoussibling" id="node-previoussibling"></a>

### node.previousSibling : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-nextsibling" id="node-nextsibling"></a>

### node.nextSibling : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### node.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### node.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### node.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### node.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-textcontent" id="node-textcontent"></a>

### node.textContent : `string`
**Kind**: instance property of [`Node`](#node)

<a name="node-childnodes" id="node-childnodes"></a>

### node.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### node.ownerDocument
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-attributes" id="node-attributes"></a>

### node.attributes
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-offsetparent" id="node-offsetparent"></a>

### node.offsetParent
**Kind**: instance property of [`Node`](#node)
**Read only**: true

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### node.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`Node`](#node)

<a name="node-clonenode" id="node-clonenode"></a>

### node.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| deep | `boolean` |


<a name="node-appendchild" id="node-appendchild"></a>

### node.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-insertbefore" id="node-insertbefore"></a>

### node.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


<a name="node-replacechild" id="node-replacechild"></a>

### node.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


<a name="node-removechild" id="node-removechild"></a>

### node.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


<a name="node-remove" id="node-remove"></a>

### node.remove()
**Kind**: instance method of [`Node`](#node)

<a name="node-before" id="node-before"></a>

### node.before(...nodes)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-after" id="node-after"></a>

### node.after(...nodes)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="node-replacewith" id="node-replacewith"></a>

### node.replaceWith(...nodes)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### node.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Node`](#node)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### node.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`Node`](#node)

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### node.dispatchEvent(event)
**Kind**: instance method of [`Node`](#node)

| Param | Type |
| --- | --- |
| event | `\*` |


<a name="node-element-node" id="node-element-node"></a>

### Node.ELEMENT_NODE
**Kind**: static property of [`Node`](#node)

<a name="node-attribute-node" id="node-attribute-node"></a>

### Node.ATTRIBUTE_NODE
**Kind**: static property of [`Node`](#node)

<a name="node-text-node" id="node-text-node"></a>

### Node.TEXT_NODE
**Kind**: static property of [`Node`](#node)

<a name="node-document-node" id="node-document-node"></a>

### Node.DOCUMENT_NODE
**Kind**: static property of [`Node`](#node)

<a name="node-document-fragment-node" id="node-document-fragment-node"></a>

### Node.DOCUMENT_FRAGMENT_NODE
**Kind**: static property of [`Node`](#node)

<a name="node-comment-node" id="node-comment-node"></a>

### Node.COMMENT_NODE
**Kind**: static property of [`Node`](#node)
