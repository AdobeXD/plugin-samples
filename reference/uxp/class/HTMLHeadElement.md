
<a name="htmlheadelement" id="htmlheadelement"></a>

## HTMLHeadElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement

* [HTMLHeadElement](#HTMLHeadElement)
    * [new HTMLHeadElement(document, nodeName, namespaceURI)](#new-htmlheadelement-new)
    * [.dataset](#htmlelement-dataset)
    * [.nodeName](#element-nodename) : `string`
    * [.localName](#element-localname) : `string`
    * [.tagName](#element-tagname) : `string`
    * [.nodeType](#element-nodetype) : `number`
    * [.namespaceURI](#element-namespaceuri) : `string`
    * [.id](#element-id) : `string`
    * [.tabIndex](#element-tabindex) : `number`
    * [.className](#element-classname) : `string`
    * [.attributes](#Element+attributes) : [`NamedNodeMap`](#namednodemap)
    * [.style](#element-style) : `Style`
    * [.clientLeft](#element-clientleft) : `number`
    * [.clientTop](#element-clienttop) : `number`
    * [.clientWidth](#element-clientwidth) : `number`
    * [.clientHeight](#element-clientheight) : `number`
    * [.height](#element-height) : `string` \| `Number`
    * [.width](#element-width) : `string` \| `Number`
    * [.offsetParent](#Element+offsetParent) : [`Element`](#element)
    * [.offsetLeft](#element-offsetleft) : `number`
    * [.offsetTop](#element-offsettop) : `number`
    * [.offsetWidth](#element-offsetwidth) : `number`
    * [.offsetHeight](#element-offsetheight) : `number`
    * [.scrollLeft](#element-scrollleft) : `number`
    * [.scrollTop](#element-scrolltop) : `number`
    * [.scrollWidth](#element-scrollwidth) : `number`
    * [.scrollHeight](#element-scrollheight) : `number`
    * [.uxpContainer](#Element+uxpContainer) : [`UXPContainer`](#uxpcontainer)
    * [.disabled](#element-disabled) : `boolean`
    * [.innerHTML](#element-innerhtml) : `string`
    * [.outerHTML](#element-outerhtml) : `string`
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
    * [.scrollIntoView()](#element-scrollintoview)
    * [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
    * [.focus()](#element-focus)
    * [.blur()](#element-blur)
    * [.getAttribute(name)](#element-getattribute)
    * [.setAttribute(name, value)](#element-setattribute)
    * [.removeAttribute(name)](#element-removeattribute)
    * [.hasAttribute(name)](#element-hasattribute)
    * [.getAttributeNode(name)](#element-getattributenode)
    * [.setAttributeNode(newAttr)](#element-setattributenode)
    * [.removeAttributeNode(oldAttr)](#element-removeattributenode)
    * [.click()](#element-click)
    * [.getElementsByClassName(name)](#Element+getElementsByClassName)
    * [.getElementsByTagName(name)](#Element+getElementsByTagName)
    * [.querySelector(selector)](#Element+querySelector)
    * [.querySelectorAll(selector)](#Element+querySelectorAll)
    * [.getBoundingClientRect()](#element-getboundingclientrect)
    * [.insertAdjacentHTML(position, value)](#element-insertadjacenthtml)
    * [.insertAdjacentElement(position, node)](#Element+insertAdjacentElement)
    * [.insertAdjacentText(position, text)](#element-insertadjacenttext)
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

<a name="new-htmlheadelement-new" id="new-htmlheadelement-new"></a>

### new HTMLHeadElement(document, nodeName, namespaceURI)
Creates an instance of HTMLHeadElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlHeadElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlHeadElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlHeadElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlHeadElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlHeadElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlHeadElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlHeadElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlHeadElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlHeadElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlHeadElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlHeadElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlHeadElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlHeadElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlHeadElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlHeadElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlHeadElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlHeadElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlHeadElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlHeadElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlHeadElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlHeadElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlHeadElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlHeadElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlHeadElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlHeadElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlHeadElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlHeadElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlHeadElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlHeadElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlHeadElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlHeadElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlHeadElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlHeadElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlHeadElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlHeadElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlHeadElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlHeadElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlHeadElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlHeadElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlHeadElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlHeadElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlHeadElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlHeadElement.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### htmlHeadElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlHeadElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlHeadElement.ownerDocument

**Read only**

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlHeadElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlHeadElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlHeadElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlHeadElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlHeadElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlHeadElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlHeadElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlHeadElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlHeadElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlHeadElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlHeadElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlHeadElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlHeadElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlHeadElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlHeadElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlHeadElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlHeadElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlHeadElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlHeadElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlHeadElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlHeadElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlHeadElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlHeadElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlHeadElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlHeadElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlHeadElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlHeadElement.remove()

<a name="node-before" id="node-before"></a>

### htmlHeadElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlHeadElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlHeadElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlHeadElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlHeadElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlHeadElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlHeadElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

