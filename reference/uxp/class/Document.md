
<a name="document" id="document"></a>

## Document

**Extends**: [`Node`](#node)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document

* [Document](#Document)
    * [new Document()](#new-document-new)
    * [.onLine](#document-online) : `boolean`
    * [.nodeName](#document-nodename) : `string`
    * [.nodeType](#document-nodetype) : `number`
    * [.uxpContainer](#Document+uxpContainer)
    * [.activeElement](#Document+activeElement) : [`Node`](#node)
    * [.documentElement](#Document+documentElement) : [`Document`](#document)
    * [.head](#Document+head) : [`HTMLHeadElement`](#htmlheadelement)
    * [.body](#Document+body) : [`HTMLBodyElement`](#htmlbodyelement)
    * [.clipboard](#document-clipboard) : `Clippoard`
    * [.styleSheets](#Document+styleSheets) : [`StyleSheetList`](#stylesheetlist)
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
    * [.createElement(nodeName)](#Document+createElement)
    * [.createElementNS(ns, nodeName)](#Document+createElementNS)
    * [.createAttribute(nodeName)](#Document+createAttribute)
    * [.createTextNode([text])](#Document+createTextNode)
    * [.createComment([comment])](#Document+createComment)
    * [.createDocumentFragment()](#Document+createDocumentFragment)
    * [.cloneNode(deep)](#Document+cloneNode)
    * [.adoptNode(externalNode, deep)](#Document+adoptNode)
    * [.importNode(externalNode, deep)](#Document+importNode)
    * [.querySelector(selector)](#Document+querySelector)
    * [.querySelectorAll(selector)](#Document+querySelectorAll)
    * [.getElementsByClassName(name)](#Document+getElementsByClassName)
    * [.getElementsByTagName(name)](#Document+getElementsByTagName)
    * [.getElementById(id)](#Document+getElementById)
    * [.hasChildNodes()](#node-haschildnodes)
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

<a name="new-document-new" id="new-document-new"></a>

### new Document()
Creates an instance of Document.

<a name="document-online" id="document-online"></a>

### document.onLine : `boolean`
Indicates if the computer is online

**Read only**

<a name="document-nodename" id="document-nodename"></a>

### document.nodeName : `string`

**Read only**

<a name="document-nodetype" id="document-nodetype"></a>

### document.nodeType : `number`

**Read only**

<a name="document-uxpcontainer" id="document-uxpcontainer"></a>

### document.uxpContainer

<a name="document-activeelement" id="document-activeelement"></a>

### document.activeElement : [`Node`](#node)

**Read only**

<a name="document-documentelement" id="document-documentelement"></a>

### document.documentElement : [`Document`](#document)

**Read only**

<a name="document-head" id="document-head"></a>

### document.head : [`HTMLHeadElement`](#htmlheadelement)

**Read only**

<a name="document-body" id="document-body"></a>

### document.body : [`HTMLBodyElement`](#htmlbodyelement)

**Read only**

<a name="document-clipboard" id="document-clipboard"></a>

### document.clipboard : `Clippoard`

**Read only**

<a name="document-stylesheets" id="document-stylesheets"></a>

### document.styleSheets : [`StyleSheetList`](#stylesheetlist)

**Read only**

<a name="node-contenteditable" id="node-contenteditable"></a>

### document.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### document.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### document.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### document.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### document.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### document.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### document.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### document.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### document.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### document.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### document.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### document.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### document.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### document.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### document.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### document.ownerDocument

**Read only**

<a name="node-attributes" id="node-attributes"></a>

### document.attributes

**Read only**

<a name="document-createelement" id="document-createelement"></a>

### document.createElement(nodeName)

| Param | Type |
| --- | --- |
| nodeName | `string` |

<a name="document-createelementns" id="document-createelementns"></a>

### document.createElementNS(ns, nodeName)

| Param | Type |
| --- | --- |
| ns | `string` |
| nodeName | `string` |

<a name="document-createattribute" id="document-createattribute"></a>

### document.createAttribute(nodeName)

| Param | Type |
| --- | --- |
| nodeName | `string` |

<a name="document-createtextnode" id="document-createtextnode"></a>

### document.createTextNode([text])

| Param | Type | Default |
| --- | --- | --- |
| [text] | `string` | <code>&quot;&quot;</code> |

<a name="document-createcomment" id="document-createcomment"></a>

### document.createComment([comment])

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | <code>&quot;&quot;</code> |

<a name="document-createdocumentfragment" id="document-createdocumentfragment"></a>

### document.createDocumentFragment()

<a name="document-clonenode" id="document-clonenode"></a>

### document.cloneNode(deep)

**Overrides**: [`cloneNode`](#node-clonenode)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="document-adoptnode" id="document-adoptnode"></a>

### document.adoptNode(externalNode, deep)

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) |
| deep | `boolean` |

<a name="document-importnode" id="document-importnode"></a>

### document.importNode(externalNode, deep)

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) |
| deep | `boolean` |

<a name="document-queryselector" id="document-queryselector"></a>

### document.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="document-queryselectorall" id="document-queryselectorall"></a>

### document.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="document-getelementsbyclassname" id="document-getelementsbyclassname"></a>

### document.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="document-getelementsbytagname" id="document-getelementsbytagname"></a>

### document.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="document-getelementbyid" id="document-getelementbyid"></a>

### document.getElementById(id)

| Param | Type |
| --- | --- |
| id | `string` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### document.hasChildNodes()

<a name="node-appendchild" id="node-appendchild"></a>

### document.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### document.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### document.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### document.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### document.remove()

<a name="node-before" id="node-before"></a>

### document.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### document.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### document.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### document.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### document.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### document.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### document.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

