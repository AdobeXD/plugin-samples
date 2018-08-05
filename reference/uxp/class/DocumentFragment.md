## DocumentFragment
**Signature:** DocumentFragment ⇐ [`Node`](#node)

**Kind**: global class  
**Extends**: [`Node`](#node)  
**Access**: public  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment  

* [DocumentFragment](#documentfragment) ⇐ [`Node`](#node)
    * [.contentEditable](#node-contenteditable)
    * [.isConnected](#node-isconnected) : `boolean`
    * [.parentNode](#node-parentnode) : [`Node`](#node)
    * [.firstChild](#node-firstchild) : [`Node`](#node)
    * [.lastChild](#node-lastchild) : [`Node`](#node)
    * [.previousSibling](#node-previoussibling) : [`Node`](#node)
    * [.nextSibling](#node-nextsibling) : [`Node`](#node)
    * [.firstElementChild](#node-firstelementchild) : [`Node`](#node)
    * [.lastElementChild](#node-lastelementchild) : [`Node`](#node)
    * [.previousElementSibling](#node-previouselementsibling) : [`Node`](#node)
    * [.nextElementSibling](#node-nextelementsibling) : [`Node`](#node)
    * [.textContent](#node-textcontent) : `string`
    * [.childNodes](#node-childnodes) : [`NodeList`](#nodelist)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.offsetParent](#node-offsetparent)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
    * [.cloneNode(deep)](#node-clonenode) ⇒ [`Node`](#node)
    * [.appendChild(child)](#node-appendchild) ⇒ [`Node`](#node)
    * [.insertBefore(child, before)](#node-insertbefore) ⇒ [`Node`](#node)
    * [.replaceChild(newChild, oldChild)](#node-replacechild) ⇒ [`Node`](#node)
    * [.removeChild(child)](#node-removechild) ⇒ [`Node`](#node)
    * [.remove()](#node-remove)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.addEventListener(eventName, callback, [capture])](#EventTarget+addEventListener)
    * [.removeEventListener(eventName, callback, [capture])](#EventTarget+removeEventListener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)

### documentFragment.contentEditable
**Signature:** documentFragment.contentEditable

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.isConnected
**Signature:** documentFragment.isConnected : `boolean`

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.parentNode
**Signature:** documentFragment.parentNode : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.firstChild
**Signature:** documentFragment.firstChild : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.lastChild
**Signature:** documentFragment.lastChild : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.previousSibling
**Signature:** documentFragment.previousSibling : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.nextSibling
**Signature:** documentFragment.nextSibling : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.firstElementChild
**Signature:** documentFragment.firstElementChild : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.lastElementChild
**Signature:** documentFragment.lastElementChild : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.previousElementSibling
**Signature:** documentFragment.previousElementSibling : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.nextElementSibling
**Signature:** documentFragment.nextElementSibling : [`Node`](#node)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.textContent
**Signature:** documentFragment.textContent : `string`

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
### documentFragment.childNodes
**Signature:** documentFragment.childNodes : [`NodeList`](#nodelist)

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.ownerDocument
**Signature:** documentFragment.ownerDocument

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.attributes
**Signature:** documentFragment.attributes

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.offsetParent
**Signature:** documentFragment.offsetParent

**Kind**: instance property of [`DocumentFragment`](#documentfragment)  
**Read only**: true  
### documentFragment.hasChildNodes
**Signature:** documentFragment.hasChildNodes() ⇒ `boolean`

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  
### documentFragment.cloneNode
**Signature:** documentFragment.cloneNode(deep) ⇒ [`Node`](#node)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 

### documentFragment.appendChild
**Signature:** documentFragment.appendChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### documentFragment.insertBefore
**Signature:** documentFragment.insertBefore(child, before) ⇒ [`Node`](#node)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 

### documentFragment.replaceChild
**Signature:** documentFragment.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 

### documentFragment.removeChild
**Signature:** documentFragment.removeChild(child) ⇒ [`Node`](#node)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 

### documentFragment.remove
**Signature:** documentFragment.remove()

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  
### documentFragment.before
**Signature:** documentFragment.before(...nodes)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### documentFragment.after
**Signature:** documentFragment.after(...nodes)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### documentFragment.replaceWith
**Signature:** documentFragment.replaceWith(...nodes)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 

### documentFragment.addEventListener
**Signature:** documentFragment.addEventListener(eventName, callback, [capture])

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### documentFragment.removeEventListener
**Signature:** documentFragment.removeEventListener(eventName, callback, [capture])

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | <code>false</code> | 

### documentFragment.dispatchEvent
**Signature:** documentFragment.dispatchEvent(event)

**Kind**: instance method of [`DocumentFragment`](#documentfragment)  

| Param | Type |
| --- | --- |
| event | `*` | 

