
<a name="htmlscriptelement" id="htmlscriptelement"></a>

## HTMLScriptElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement

* [HTMLScriptElement](#HTMLScriptElement)
    * [new HTMLScriptElement(document, nodeName, namespaceURI)](#new-htmlscriptelement-new)
    * [.type](#htmlscriptelement-type) : `string`
    * [.src](#htmlscriptelement-src) : `string`
    * [.charset](#htmlscriptelement-charset) : `string`
    * [.text](#htmlscriptelement-text) : `string`
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

<a name="new-htmlscriptelement-new" id="new-htmlscriptelement-new"></a>

### new HTMLScriptElement(document, nodeName, namespaceURI)
Creates an instance of HTMLScriptElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlscriptelement-type" id="htmlscriptelement-type"></a>

### htmlScriptElement.type : `string`

<a name="htmlscriptelement-src" id="htmlscriptelement-src"></a>

### htmlScriptElement.src : `string`

<a name="htmlscriptelement-charset" id="htmlscriptelement-charset"></a>

### htmlScriptElement.charset : `string`

<a name="htmlscriptelement-text" id="htmlscriptelement-text"></a>

### htmlScriptElement.text : `string`

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlScriptElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlScriptElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlScriptElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlScriptElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlScriptElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlScriptElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlScriptElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlScriptElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlScriptElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlScriptElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlScriptElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlScriptElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlScriptElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlScriptElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlScriptElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlScriptElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlScriptElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlScriptElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlScriptElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlScriptElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlScriptElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlScriptElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlScriptElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlScriptElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlScriptElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlScriptElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlScriptElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlScriptElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlScriptElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlScriptElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlScriptElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlScriptElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlScriptElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlScriptElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlScriptElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlScriptElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlScriptElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlScriptElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlScriptElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlScriptElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlScriptElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlScriptElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlScriptElement.textContent : `string`

**Overrides**: [`textContent`](#node-textcontent)

<a name="node-childnodes" id="node-childnodes"></a>

### htmlScriptElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlScriptElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlScriptElement.ownerDocument

**Read only**

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlScriptElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlScriptElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlScriptElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlScriptElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlScriptElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlScriptElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlScriptElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlScriptElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlScriptElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlScriptElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlScriptElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlScriptElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlScriptElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlScriptElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlScriptElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlScriptElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlScriptElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlScriptElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlScriptElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlScriptElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlScriptElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlScriptElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlScriptElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlScriptElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlScriptElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlScriptElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlScriptElement.remove()

<a name="node-before" id="node-before"></a>

### htmlScriptElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlScriptElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlScriptElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlScriptElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlScriptElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlScriptElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlScriptElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

