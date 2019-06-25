
<a name="characterdata" id="characterdata"></a>

## CharacterData

**Extends**: [`Node`](#node)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/CharacterData

* [CharacterData](#CharacterData)
    * [new CharacterData(document, textContent)](#new-characterdata-new)
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

<a name="new-characterdata-new" id="new-characterdata-new"></a>

### new CharacterData(document, textContent)
Creates an instance of CharacterData.

| Param | Type |
| --- | --- |
| document | `\*` |
| textContent | `\*` |

<a name="characterdata-data" id="characterdata-data"></a>

### characterData.data : `string`

<a name="characterdata-textcontent" id="characterdata-textcontent"></a>

### characterData.textContent : `string`

**Overrides**: [`textContent`](#node-textcontent)

<a name="characterdata-nodevalue" id="characterdata-nodevalue"></a>

### characterData.nodeValue : `string`

<a name="characterdata-length" id="characterdata-length"></a>

### characterData.length : `number`

**Read only**

<a name="node-contenteditable" id="node-contenteditable"></a>

### characterData.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### characterData.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### characterData.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### characterData.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### characterData.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### characterData.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### characterData.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### characterData.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### characterData.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### characterData.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### characterData.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### characterData.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-childnodes" id="node-childnodes"></a>

### characterData.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### characterData.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### characterData.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### characterData.attributes

**Read only**

<a name="characterdata-substringdata" id="characterdata-substringdata"></a>

### characterData.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |

<a name="characterdata-appenddata" id="characterdata-appenddata"></a>

### characterData.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |

<a name="characterdata-insertdata" id="characterdata-insertdata"></a>

### characterData.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |

<a name="characterdata-deletedata" id="characterdata-deletedata"></a>

### characterData.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |

<a name="characterdata-replacedata" id="characterdata-replacedata"></a>

### characterData.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### characterData.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### characterData.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### characterData.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### characterData.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### characterData.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### characterData.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### characterData.remove()

<a name="node-before" id="node-before"></a>

### characterData.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### characterData.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### characterData.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### characterData.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### characterData.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### characterData.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### characterData.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

