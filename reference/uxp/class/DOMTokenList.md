## DOMTokenList
**Signature:** DOMTokenList

DOMTokenList supports the ClassList and other token list functionality

**Kind**: global class  
**Access**: public  
**See**

- https://dom.spec.whatwg.org/#interface-domtokenlist
- https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList


* [DOMTokenList](#domtokenlist)
    * [.length](#domtokenlist-length)
    * [.value](#domtokenlist-value)
    * [.add(...tokens)](#domtokenlist-add)
    * [.remove(...tokens)](#domtokenlist-remove)
    * [.replace(oldToken, newToken)](#domtokenlist-replace)
    * [.toggle(token, force)](#domtokenlist-toggle) ⇒ `boolean`
    * [.item(index)](#domtokenlist-item) ⇒ `string`
    * [.contains(token)](#domtokenlist-contains) ⇒ `boolean`
    * [.supports(token)](#domtokenlist-supports) ⇒ `boolean`

### domTokenList.length
**Signature:** domTokenList.length

Returns the number of tokens in the list

**Kind**: instance property of [`DOMTokenList`](#domtokenlist)  
**Read only**: true  
**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-length  
### domTokenList.value
**Signature:** domTokenList.value

The serialized string value of the token list

**Kind**: instance property of [`DOMTokenList`](#domtokenlist)  
**Read only**: true  
**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-value  
### domTokenList.add
**Signature:** domTokenList.add(...tokens)

Adds the specified tokens to the token list. If the token is already present, no error is thrown.

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Throws**:

- [`DOMException`](#domexception) 

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-add  

| Param | Type |
| --- | --- |
| ...tokens | `string` | 

### domTokenList.remove
**Signature:** domTokenList.remove(...tokens)

Removes the specified items from the token list. If the token is not present, no error is thrown.

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Throws**:

- [`DOMException`](#domexception) 

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-remove  

| Param | Type |
| --- | --- |
| ...tokens | `string` | 

### domTokenList.replace
**Signature:** domTokenList.replace(oldToken, newToken)

Replaces an old token with a new token. If the old token doesn't exist,
no action occurs, and `false` is returned.

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Throws**:

- [`DOMException`](#domexception) 

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-replace  

| Param | Type |
| --- | --- |
| oldToken | `any` | 
| newToken | `any` | 

### domTokenList.toggle
**Signature:** domTokenList.toggle(token, force) ⇒ `boolean`

Toggles a token within the list. If `force` is not present, then the following
rules are applied:

* if the token is present, it is removed, and `false` is returned
* if the token isn't present, it is added, and `true` is returned

If `force` is supplied, then:

* if `true`, the token is added
* if `false`, the token is removed

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Returns**: `boolean` - if the token exists in the last after the operation  
**Throws**:

- [`DOMException`](#domexception) 

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-toggle  

| Param | Type |
| --- | --- |
| token | `string` | 
| force | `boolean` | 

### domTokenList.item
**Signature:** domTokenList.item(index) ⇒ `string`

Return the item at the specified index, or `null` if the index is out-of-range

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Returns**: `string` - the item at the index, or null if index is out of range  
**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-item  

| Param | Type |
| --- | --- |
| index | `number` | 

### domTokenList.contains
**Signature:** domTokenList.contains(token) ⇒ `boolean`

Returns whether the token is in the list or not.

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Returns**: `boolean` - if `true`, the token is in the list, otherwise it isn't  
**Throws**:

- [`DOMException`](#domexception) 

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-contains  

| Param | Type |
| --- | --- |
| token | `any` | 

### domTokenList.supports
**Signature:** domTokenList.supports(token) ⇒ `boolean`

Returns `true` if the token is acceptable to the list; otherwise returns `false`.
If `false` is returned, passing the token would throw an error when calling
any other method.

**Kind**: instance method of [`DOMTokenList`](#domtokenlist)  
**Returns**: `boolean` - if `true`, the token is acceptable when calling other methods  
**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-supports  

| Param | Type |
| --- | --- |
| token | `string` | 

