
<a name="htmlmenuitemelement" id="htmlmenuitemelement"></a>

## HTMLMenuItemElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem

* [HTMLMenuItemElement](#HTMLMenuItemElement)
    * [new HTMLMenuItemElement(document, nodeName, namespaceURI)](#new-htmlmenuitemelement-new)
    * [.checked](#htmlmenuitemelement-checked) : `boolean`
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

<a name="new-htmlmenuitemelement-new" id="new-htmlmenuitemelement-new"></a>

### new HTMLMenuItemElement(document, nodeName, namespaceURI)
Creates an instance of HTMLMenuItemElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlmenuitemelement-checked" id="htmlmenuitemelement-checked"></a>

### htmlMenuItemElement.checked : `boolean`
Indicates if the menu item is checked.

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlMenuItemElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlMenuItemElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlMenuItemElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlMenuItemElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlMenuItemElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlMenuItemElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlMenuItemElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlMenuItemElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlMenuItemElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlMenuItemElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlMenuItemElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlMenuItemElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlMenuItemElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlMenuItemElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlMenuItemElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlMenuItemElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlMenuItemElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlMenuItemElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlMenuItemElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlMenuItemElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlMenuItemElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlMenuItemElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlMenuItemElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlMenuItemElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlMenuItemElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlMenuItemElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlMenuItemElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlMenuItemElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlMenuItemElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlMenuItemElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlMenuItemElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlMenuItemElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlMenuItemElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlMenuItemElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlMenuItemElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlMenuItemElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlMenuItemElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlMenuItemElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlMenuItemElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlMenuItemElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlMenuItemElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlMenuItemElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlMenuItemElement.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### htmlMenuItemElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlMenuItemElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlMenuItemElement.ownerDocument

**Read only**

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlMenuItemElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlMenuItemElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlMenuItemElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlMenuItemElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlMenuItemElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlMenuItemElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlMenuItemElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlMenuItemElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlMenuItemElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlMenuItemElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlMenuItemElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlMenuItemElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlMenuItemElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlMenuItemElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlMenuItemElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlMenuItemElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlMenuItemElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlMenuItemElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlMenuItemElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlMenuItemElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlMenuItemElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlMenuItemElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlMenuItemElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlMenuItemElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlMenuItemElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlMenuItemElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlMenuItemElement.remove()

<a name="node-before" id="node-before"></a>

### htmlMenuItemElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlMenuItemElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlMenuItemElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlMenuItemElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlMenuItemElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlMenuItemElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlMenuItemElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

