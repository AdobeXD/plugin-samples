
<a name="text" id="text"></a>

## Text

**Extends**: [`CharacterData`](#characterdata)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Text

* [Text](#Text)
    * [new Text(document, textContent)](#new-text-new)
    * [.nodeName](#text-nodename) : `string`
    * [.nodeType](#text-nodetype) : `number`
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

<a name="new-text-new" id="new-text-new"></a>

### new Text(document, textContent)
Creates an instance of Text.

| Param | Type |
| --- | --- |
| document | `\*` |
| textContent | `\*` |

<a name="text-nodename" id="text-nodename"></a>

### text.nodeName : `string`

**Default**: <code>&quot;\&quot;#text\&quot;&quot;</code>

**Read only**

<a name="text-nodetype" id="text-nodetype"></a>

### text.nodeType : `number`

**Default**: <code>Node.TEXT_NODE</code>

**Read only**

<a name="characterdata-data" id="characterdata-data"></a>

### text.data : `string`

<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

### text.textContent : `string`

<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

### text.nodeValue : `string`

<a name="characterdata-length" id="characterdata-length"></a>

### text.length : `number`

**Read only**

<a name="node-contenteditable" id="node-contenteditable"></a>

### text.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### text.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### text.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### text.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### text.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### text.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### text.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### text.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### text.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### text.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### text.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### text.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-childnodes" id="node-childnodes"></a>

### text.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### text.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### text.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### text.attributes

**Read only**

<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

### text.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |

<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

### text.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |

<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

### text.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |

<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

### text.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |

<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

### text.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### text.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### text.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### text.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### text.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### text.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### text.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### text.remove()

<a name="node-before" id="node-before"></a>

### text.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### text.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### text.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### text.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### text.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### text.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### text.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

