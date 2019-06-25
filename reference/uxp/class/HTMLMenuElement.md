
<a name="htmlmenuelement" id="htmlmenuelement"></a>

## HTMLMenuElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement

* [HTMLMenuElement](#HTMLMenuElement)
    * [new HTMLMenuElement(document, nodeName, namespaceURI)](#new-htmlmenuelement-new)
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
    * [.popupAt(x, y)](#htmlmenuelement-popupat)
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

<a name="new-htmlmenuelement-new" id="new-htmlmenuelement-new"></a>

### new HTMLMenuElement(document, nodeName, namespaceURI)
Creates an instance of HTMLMenuElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlMenuElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlMenuElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlMenuElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlMenuElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlMenuElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlMenuElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlMenuElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlMenuElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlMenuElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlMenuElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlMenuElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlMenuElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlMenuElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlMenuElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlMenuElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlMenuElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlMenuElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlMenuElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlMenuElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlMenuElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlMenuElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlMenuElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlMenuElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlMenuElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlMenuElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlMenuElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlMenuElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlMenuElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlMenuElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlMenuElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlMenuElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlMenuElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlMenuElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlMenuElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlMenuElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlMenuElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlMenuElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlMenuElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlMenuElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlMenuElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlMenuElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlMenuElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlMenuElement.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### htmlMenuElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlMenuElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlMenuElement.ownerDocument

**Read only**

<a name="htmlmenuelement-popupat" id="htmlmenuelement-popupat"></a>

### htmlMenuElement.popupAt(x, y)
Render the menu at the `x`,`y` coordinates

| Param | Type |
| --- | --- |
| x | `number` |
| y | `number` |

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlMenuElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlMenuElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlMenuElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlMenuElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlMenuElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlMenuElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlMenuElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlMenuElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlMenuElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlMenuElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlMenuElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlMenuElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlMenuElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlMenuElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlMenuElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlMenuElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlMenuElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlMenuElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlMenuElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlMenuElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlMenuElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlMenuElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlMenuElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlMenuElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlMenuElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlMenuElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlMenuElement.remove()

<a name="node-before" id="node-before"></a>

### htmlMenuElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlMenuElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlMenuElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlMenuElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlMenuElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlMenuElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlMenuElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

