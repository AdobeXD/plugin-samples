
<a name="comment" id="comment"></a>

## Comment

**Extends**: [`CharacterData`](#characterdata)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Comment

* [Comment](#Comment)
    * [new Comment(document, comment)](#new-comment-new)
    * [.nodeName](#comment-nodename) : `string`
    * [.nodeType](#comment-nodetype) : `number`
    * [.data](#characterdata-data) : `string`
    * [.textContent](#characterdata-textcontent) : `string`
    * [.nodeValue](#characterdata-nodevalue) : `string`
    * [.length](#characterdata-length) : `number`
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
    * [.childNodes](#Node+childNodes) : [`NodeList`](#nodelist)
    * [.children](#Node+children) : [`HTMLCollection`](#htmlcollection)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.substringData(offset, count)](#characterdata-substringdata)
    * [.appendData(arg)](#characterdata-appenddata)
    * [.insertData(offset, arg)](#characterdata-insertdata)
    * [.deleteData(offset, count)](#characterdata-deletedata)
    * [.replaceData(offset, count, arg)](#characterdata-replacedata)
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

<a name="new-comment-new" id="new-comment-new"></a>

### new Comment(document, comment)
Creates an instance of Comment.

| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| comment | `string` |

<a name="comment-nodename" id="comment-nodename"></a>

### comment.nodeName : `string`

**Read only**

<a name="comment-nodetype" id="comment-nodetype"></a>

### comment.nodeType : `number`

**Read only**

<a name="characterdata-data" id="characterdata-data"></a>

### comment.data : `string`

<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

### comment.textContent : `string`

<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

### comment.nodeValue : `string`

<a name="characterdata-length" id="characterdata-length"></a>

### comment.length : `number`

**Read only**

<a name="node-contenteditable" id="node-contenteditable"></a>

### comment.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### comment.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### comment.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### comment.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### comment.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### comment.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### comment.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### comment.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### comment.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### comment.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### comment.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### comment.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-childnodes" id="node-childnodes"></a>

### comment.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### comment.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### comment.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### comment.attributes

**Read only**

<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

### comment.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |

<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

### comment.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |

<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

### comment.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |

<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

### comment.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |

<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

### comment.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### comment.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### comment.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### comment.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### comment.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### comment.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### comment.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### comment.remove()

<a name="node-before" id="node-before"></a>

### comment.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### comment.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### comment.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### comment.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### comment.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### comment.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### comment.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

