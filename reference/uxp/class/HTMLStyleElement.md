
<a name="htmlstyleelement" id="htmlstyleelement"></a>

## HTMLStyleElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement

* [HTMLStyleElement](#HTMLStyleElement)
    * [new HTMLStyleElement(document, nodeName, namespaceURI)](#new-htmlstyleelement-new)
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

<a name="new-htmlstyleelement-new" id="new-htmlstyleelement-new"></a>

### new HTMLStyleElement(document, nodeName, namespaceURI)
Creates an instance of HTMLStyleElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlStyleElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlStyleElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlStyleElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlStyleElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlStyleElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlStyleElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlStyleElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlStyleElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlStyleElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlStyleElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlStyleElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlStyleElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlStyleElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlStyleElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlStyleElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlStyleElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlStyleElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlStyleElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlStyleElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlStyleElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlStyleElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlStyleElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlStyleElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlStyleElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlStyleElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlStyleElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlStyleElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlStyleElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlStyleElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlStyleElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlStyleElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlStyleElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlStyleElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlStyleElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlStyleElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlStyleElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlStyleElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlStyleElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlStyleElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlStyleElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlStyleElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlStyleElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlStyleElement.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### htmlStyleElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlStyleElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlStyleElement.ownerDocument

**Read only**

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlStyleElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlStyleElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlStyleElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlStyleElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlStyleElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlStyleElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlStyleElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlStyleElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlStyleElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlStyleElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlStyleElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlStyleElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlStyleElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlStyleElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlStyleElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlStyleElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlStyleElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlStyleElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlStyleElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlStyleElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlStyleElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlStyleElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlStyleElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlStyleElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlStyleElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlStyleElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlStyleElement.remove()

<a name="node-before" id="node-before"></a>

### htmlStyleElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlStyleElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlStyleElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlStyleElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlStyleElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlStyleElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlStyleElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

