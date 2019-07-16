
<a name="htmlinputelement" id="htmlinputelement"></a>

## HTMLInputElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

* [HTMLInputElement](#HTMLInputElement)
    * [new HTMLInputElement(document, nodeName, namespaceURI)](#new-htmlinputelement-new)
    * _instance_
        * [.value](#htmlinputelement-value) : `\*`
        * [.defaultValue](#htmlinputelement-defaultvalue) : `string`
        * [.checked](#htmlinputelement-checked) : `boolean`
        * [.indeterminate](#htmlinputelement-indeterminate) : `boolean`
        * [.autofocus](#htmlinputelement-autofocus) : `boolean`
        * [.name](#htmlinputelement-name) : `string`
        * [.type](#htmlinputelement-type) : `string`
        * [.placeholder](#htmlinputelement-placeholder) : `string`
        * [.readOnly](#htmlinputelement-readonly) : `boolean`
        * [.min](#htmlinputelement-min) : `string`
        * [.max](#htmlinputelement-max) : `string`
        * [.step](#htmlinputelement-step) : `string`
        * [.uxpVariant](#htmlinputelement-uxpvariant) : `string`
        * [.uxpQuiet](#htmlinputelement-uxpquiet) : `string`
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
    * _static_
        * [.HTMLTextAreaElement#defaultValue](#htmlinputelement-htmltextareaelement-defaultvalue) : `string`

<a name="new-htmlinputelement-new" id="new-htmlinputelement-new"></a>

### new HTMLInputElement(document, nodeName, namespaceURI)
Creates an instance of HTMLInputElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |

<a name="htmlinputelement-value" id="htmlinputelement-value"></a>

### htmlInputElement.value : `\*`
Returns the value of the input element.

<a name="htmlinputelement-defaultvalue" id="htmlinputelement-defaultvalue"></a>

### htmlInputElement.defaultValue : `string`
The defaultValue for the input element (if applicable to the input element's type)

<a name="htmlinputelement-checked" id="htmlinputelement-checked"></a>

### htmlInputElement.checked : `boolean`
Indicates if the checkbox is checked.

<a name="htmlinputelement-indeterminate" id="htmlinputelement-indeterminate"></a>

### htmlInputElement.indeterminate : `boolean`
Indicates if the element is indeterminate

<a name="htmlinputelement-autofocus" id="htmlinputelement-autofocus"></a>

### htmlInputElement.autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded in a form.

<a name="htmlinputelement-name" id="htmlinputelement-name"></a>

### htmlInputElement.name : `string`
Specifies the name of this input element.

<a name="htmlinputelement-type" id="htmlinputelement-type"></a>

### htmlInputElement.type : `string`
Specifies the type of input control

<a name="htmlinputelement-placeholder" id="htmlinputelement-placeholder"></a>

### htmlInputElement.placeholder : `string`
The placeholder for the input element (if applicable to the input element's type)

<a name="htmlinputelement-readonly" id="htmlinputelement-readonly"></a>

### htmlInputElement.readOnly : `boolean`
Determines if the element's content is read only.

<a name="htmlinputelement-min" id="htmlinputelement-min"></a>

### htmlInputElement.min : `string`
Minimum value allowed (used for `input type="range"`)

<a name="htmlinputelement-max" id="htmlinputelement-max"></a>

### htmlInputElement.max : `string`
Maximum value allowed (used for `input type="range"`)

<a name="htmlinputelement-step" id="htmlinputelement-step"></a>

### htmlInputElement.step : `string`
the size of each movement of the slder control (used for `input type="range"`)

<a name="htmlinputelement-uxpvariant" id="htmlinputelement-uxpvariant"></a>

### htmlInputElement.uxpVariant : `string`
Controls the type of native widget.

<a name="htmlinputelement-uxpquiet" id="htmlinputelement-uxpquiet"></a>

### htmlInputElement.uxpQuiet : `string`
Determines if a control is rendered in "quiet" mode

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlInputElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

<a name="element-nodename" id="element-nodename"></a>

### htmlInputElement.nodeName : `string`

**Read only**

<a name="element-localname" id="element-localname"></a>

### htmlInputElement.localName : `string`

**Read only**

<a name="element-tagname" id="element-tagname"></a>

### htmlInputElement.tagName : `string`

**Read only**

<a name="element-nodetype" id="element-nodetype"></a>

### htmlInputElement.nodeType : `number`

**Read only**

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlInputElement.namespaceURI : `string`

**Read only**

<a name="element-id" id="element-id"></a>

### htmlInputElement.id : `string`

<a name="element-tabindex" id="element-tabindex"></a>

### htmlInputElement.tabIndex : `number`

<a name="element-classname" id="element-classname"></a>

### htmlInputElement.className : `string`

<a name="element-attributes" id="element-attributes"></a>

### htmlInputElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**

<a name="element-style" id="element-style"></a>

### htmlInputElement.style : `Style`

**Read only**

<a name="element-clientleft" id="element-clientleft"></a>

### htmlInputElement.clientLeft : `number`

**Read only**

<a name="element-clienttop" id="element-clienttop"></a>

### htmlInputElement.clientTop : `number`

**Read only**

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlInputElement.clientWidth : `number`

**Read only**

<a name="element-clientheight" id="element-clientheight"></a>

### htmlInputElement.clientHeight : `number`

**Read only**

<a name="element-height" id="element-height"></a>

### htmlInputElement.height : `string` \| `Number`
The height of the element

<a name="element-width" id="element-width"></a>

### htmlInputElement.width : `string` \| `Number`
The width of the element

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlInputElement.offsetParent : [`Element`](#element)

**Read only**

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlInputElement.offsetLeft : `number`

**Read only**

<a name="element-offsettop" id="element-offsettop"></a>

### htmlInputElement.offsetTop : `number`

**Read only**

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlInputElement.offsetWidth : `number`

**Read only**

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlInputElement.offsetHeight : `number`

**Read only**

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlInputElement.scrollLeft : `number`

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlInputElement.scrollTop : `number`

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlInputElement.scrollWidth : `number`

**Read only**

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlInputElement.scrollHeight : `number`

**Read only**

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlInputElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**

<a name="element-disabled" id="element-disabled"></a>

### htmlInputElement.disabled : `boolean`

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlInputElement.innerHTML : `string`

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlInputElement.outerHTML : `string`

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlInputElement.contentEditable

**Read only**

<a name="node-isconnected" id="node-isconnected"></a>

### htmlInputElement.isConnected : `boolean`

**Read only**

<a name="node-parentnode" id="node-parentnode"></a>

### htmlInputElement.parentNode : [`Node`](#node)

**Read only**

<a name="node-parentelement" id="node-parentelement"></a>

### htmlInputElement.parentElement : [`Element`](#element)

**Read only**

<a name="node-firstchild" id="node-firstchild"></a>

### htmlInputElement.firstChild : [`Node`](#node)

**Read only**

<a name="node-lastchild" id="node-lastchild"></a>

### htmlInputElement.lastChild : [`Node`](#node)

**Read only**

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlInputElement.previousSibling : [`Node`](#node)

**Read only**

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlInputElement.nextSibling : [`Node`](#node)

**Read only**

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlInputElement.firstElementChild : [`Node`](#node)

**Read only**

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlInputElement.lastElementChild : [`Node`](#node)

**Read only**

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlInputElement.previousElementSibling : [`Node`](#node)

**Read only**

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlInputElement.nextElementSibling : [`Node`](#node)

**Read only**

<a name="node-textcontent" id="node-textcontent"></a>

### htmlInputElement.textContent : `string`

<a name="node-childnodes" id="node-childnodes"></a>

### htmlInputElement.childNodes : [`NodeList`](#nodelist)

**Read only**

<a name="node-children" id="node-children"></a>

### htmlInputElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlInputElement.ownerDocument

**Read only**

<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlInputElement.scrollIntoView()

<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlInputElement.scrollIntoViewIfNeeded()

<a name="element-focus" id="element-focus"></a>

### htmlInputElement.focus()

<a name="element-blur" id="element-blur"></a>

### htmlInputElement.blur()

<a name="element-getattribute" id="element-getattribute"></a>

### htmlInputElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattribute" id="element-setattribute"></a>

### htmlInputElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |

<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlInputElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlInputElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlInputElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlInputElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |

<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlInputElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |

<a name="element-click" id="element-click"></a>

### htmlInputElement.click()

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlInputElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlInputElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |

<a name="element-queryselector" id="element-queryselector"></a>

### htmlInputElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlInputElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |

<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlInputElement.getBoundingClientRect()

<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlInputElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlInputElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |

<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlInputElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |

<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlInputElement.hasChildNodes()

<a name="node-clonenode" id="node-clonenode"></a>

### htmlInputElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |

<a name="node-appendchild" id="node-appendchild"></a>

### htmlInputElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlInputElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |

<a name="node-replacechild" id="node-replacechild"></a>

### htmlInputElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |

<a name="node-removechild" id="node-removechild"></a>

### htmlInputElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |

<a name="node-remove" id="node-remove"></a>

### htmlInputElement.remove()

<a name="node-before" id="node-before"></a>

### htmlInputElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-after" id="node-after"></a>

### htmlInputElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-replacewith" id="node-replacewith"></a>

### htmlInputElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |

<a name="node-contains" id="node-contains"></a>

### htmlInputElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |

<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlInputElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlInputElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| [capture] | `boolean` | <code>false</code> |

<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlInputElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

<a name="htmlinputelement-htmltextareaelement-defaultvalue" id="htmlinputelement-htmltextareaelement-defaultvalue"></a>

### HTMLInputElement.HTMLTextAreaElement#defaultValue : `string`
The defaultValue for the textarea element

