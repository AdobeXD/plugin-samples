<a name="securestorage" id="securestorage"></a>

# require('uxp').storage.secureStorage
SecureStorage provides a protected storage which can be used to store sensitive data
per plugin. SecureStorage takes a key-value pair and encrypts the value before being
stored. After encryption, it stores the key and the encrypted value pair. When the value
is requested with an associated key, it's retrieved after being decrypted. Please note
that the key is not encrypted thus it's not protected by the cryptographic operation.

Caveats for SecureStorage are as follows:
1. SecureStorage is not an appropriate storage for sensitive data which wants to keep
secret from the current user. SecureStorage is protected under the current user's
account credential. It means the encrypted data can be at risk of being decrypted
with the current user's privilege.
2. Data in SecureStorage can be lost for various reasons. For an example, the user
could uninstall the host application and delete the secure storage. Or, the cryptographic
information used by the secure storage could be damaged by the user accidentally, and
it will result in loss of data without the secure storage being removed. SecureStorage
should be regarded as a cache rather than a persistent storage. Data in SecureStorage
should be able to be regenerated from plugins after the time of loss.



<a name="securestorage-length" id="securestorage-length"></a>

## length ⇒ `int`
**Read only**
Returns number of items stored in the secure storage.

**Returns**: `int` - returns the number of items  


<a name="securestorage-setitem" id="securestorage-setitem"></a>

## setItem(key, value)
Store a key and value pair after the value is encrypted in a secure storage

**Returns**: `Promise` - : resolved when the value is stored. rejected when the value is empty or not stored.  
**Throws**:

- `TypeError` : thrown when either key or value doesn't have one of acceptable types.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | : a key to set value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | : a value for a key. |



<a name="securestorage-getitem" id="securestorage-getitem"></a>

## getItem(key)
Retrieve a value associated with a provided key after the value is being decrypted from a secure storage.

**Returns**: `Promise.<Uint8Array>` - : a value as buffer  
**Throws**:

- `TypeError` : thrown when a key doesn't have an acceptable type.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | : a key to get value |



<a name="securestorage-removeitem" id="securestorage-removeitem"></a>

## removeItem(key)
Remove a value associated with a provided key

**Returns**: `Promise` - : resolved when the value associated with the key is removed. rejected when the value is neither removed nor found.  
**Throws**:

- `TypeError` : thrown when a key doesn't have an acceptable type.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | : a key to remove value |



<a name="securestorage-key" id="securestorage-key"></a>

## key()
Returns a key which is stored at the given index

**Returns**: `int` - Returns the key which is stored at the given index.  

| Param | Type |
| --- | --- |
| index. | `number` | 



<a name="securestorage-clear" id="securestorage-clear"></a>

## clear()
Clear all values in a secure storage.

**Returns**: `Promise` - : resolved when all the items are cleared. rejected when there is no item to clear or clear failed.  

