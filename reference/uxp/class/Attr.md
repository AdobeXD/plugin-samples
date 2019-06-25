
<a name="attr" id="attr"></a>

## Attr

**Extends**: [`Node`](#node)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Attr

* [Attr](#Attr)
    * [new Attr(document, nodeName)](#new-attr-new)
    * [.nodeName](#attr-nodename) : `string`
    * [.localName](#attr-localname) : `string`
    * [.name](#attr-name) : `string`
    * [.specified](#attr-specified) : `boolean`
    * [.value](#attr-value) : `\*`
    * [.nodeType](#attr-nodetype) : `number`
    * [.nodeValue](#attr-nodevalue) : `\*`
    * [.ownerElement](#Attr+ownerElement) : [`Element`](#element)
    * [.contentEditable](#node-contenteditable)
    * [.isConnected](#node-isconnected) : `boolean`
    * [.parentNode](#Node+parentNode) : [`Node`](#node)
    * [.parentElement](#Node+parentElement) : [`Element`](#element)
    * [.firstChild](#Node+firstChild) : [`Node`](#node)
    * [.lastChild](#Node+lastChild) : [`Node`](#node)
    * [.previousSibling](#Node+previousSibling) : [`Node`](#node)
    * [.nextSibling](#Node+nextSibling) : [`Node`](#node)
    * [.firstElementChild](#Node+firstElementChild) : [`Node`](#node)
    * [.lastElementChild](#Node+lastElementChild) : [`Node`](#node)
    * [.previousElementSibling](#Node+previousElementSibling) : [`Node`](#node)
    * [.nextElementSibling](#Node+nextElementSibling) : [`Node`](#node)
    * [.textContent](#node-textcontent) : `string`
    * [.childNodes](#Node+childNodes) : [`NodeList`](#nodelist)
    * [.children](#Node+children) : [`HTMLCollection`](#htmlcollection)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.remove()](#attr-remove)
    * [.hasChildNodes()](#node-haschildnodes)
    * [.cloneNode(deep)](#Node+cloneNode)
    * [.appendChild(child)](#Node+appendChild)
    * [.insertBefore(child, before)](#Node+insertBefore)
    * [.replaceChild(newChild, oldChild)](#Node+replaceChild)
    * [.removeChild(child)](#Node+removeChild)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.contains(node)](#node-contains)
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

**Read only**

<a name="attr-localname" id="attr-localname"></a>

### attr.localName : `string`

**Read only**

<a name="attr-name" id="attr-name"></a>

### attr.name : `string`

**Read only**

<a name="attr-specified" id="attr-specified"></a>

### attr.specified : `boolean`

**Read only**

<a name="attr-value" id="attr-value"></a>

### attr.value : `\*`

<a name="attr-nodetype" id="attr-nodetype"></a>

### attr.nodeType : `number`

**Read only**

<a name="attr-nodevalue" id="attr-nodevalue"></a>

### attr.nodeValue : `\*`

<a name="attr-ownerelement" id="attr-ownerelement"></a>

### attr.ownerElement : [`Element`](#element)

**Read only**

<a name="node-contenteditable" id="node-contenteditable"></a>

### attr.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### attr.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### attr.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### attr.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### attr.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### attr.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### attr.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### attr.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### attr.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### attr.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### attr.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### attr.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### attr.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### attr.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### attr.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### attr.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### attr.attributes

**Read only**

<a name="attr-remove" id="attr-remove"></a>

### attr.remove()

**Overrides**: [`remove`](#node-remove)

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### attr.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### attr.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### attr.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### attr.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### attr.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### attr.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-before" id="node-before"></a>

### attr.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### attr.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### attr.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### attr.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### attr.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### attr.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### attr.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

