
<a name="node" id="node"></a>

## Node

**Extends**: [`EventTarget`](#eventtarget)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Node

* [Node](#Node)
    * [new Node(ownerDocument)](#new-node-new)
    * _instance_
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
        * [.hasChildNodes()](#node-haschildnodes)
        * [.cloneNode(deep)](#Node+cloneNode)
        * [.appendChild(child)](#Node+appendChild)
        * [.insertBefore(child, before)](#Node+insertBefore)
        * [.replaceChild(newChild, oldChild)](#Node+replaceChild)
        * [.removeChild(child)](#Node+removeChild)
        * [.remove()](#node-remove)
        * [.before(...nodes)](#node-before)
        * [.after(...nodes)](#node-after)
        * [.replaceWith(...nodes)](#node-replacewith)
        * [.contains(node)](#node-contains)
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

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### node.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### node.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### node.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### node.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### node.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### node.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### node.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### node.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### node.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### node.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### node.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### node.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### node.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### node.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### node.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### node.attributes

**Read only**

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### node.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### node.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### node.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### node.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### node.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### node.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### node.remove()

<a name="node-before" id="node-before"></a>

### node.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### node.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### node.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### node.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### node.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### node.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### node.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

<a name="node-element-node" id="node-element-node"></a>

### Node.ELEMENT\_NODE

<a name="node-attribute-node" id="node-attribute-node"></a>

### Node.ATTRIBUTE\_NODE

<a name="node-text-node" id="node-text-node"></a>

### Node.TEXT\_NODE

<a name="node-document-node" id="node-document-node"></a>

### Node.DOCUMENT\_NODE

<a name="node-document-fragment-node" id="node-document-fragment-node"></a>

### Node.DOCUMENT\_FRAGMENT\_NODE

<a name="node-comment-node" id="node-comment-node"></a>

### Node.COMMENT\_NODE

