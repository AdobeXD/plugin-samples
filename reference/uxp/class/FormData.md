
<a name="module-global-formdata" id="module-global-formdata"></a>

## FormData

* [~FormData](#module-global-formdata)
    * [new FormData()](#new-module-global-formdata-new)
    * [.append(key, value, [fileName])](#module-global-formdata-append)
    * [.entries()](#module-global-formdata-entries)

<a name="new-module-global-formdata-new" id="new-module-global-formdata-new"></a>

### new FormData()
The constructor initializes a FormData object.

<a name="module-global-formdata-append" id="module-global-formdata-append"></a>

### formData.append(key, value, [fileName])
Appends a key value pair into FormData.
If the value is either ArrayBuffer and TypedArray, its buffer as well as the object are copied.
However, if the value is a File object value, the File object is cloned but its content is not cloned.
Consequently, the File object and the cloned one refer to the same content.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | `string` |  | a key string for the pair |
| value | `string` \| `ArrayBuffer` \| `TypedArray` \| `File` |  | a value for the pair |
| [fileName] | `string` | <code>null</code> | the optional file name to use for a File object value. If not present, the file name would be taken from the name property of the File object. |

<a name="module-global-formdata-entries" id="module-global-formdata-entries"></a>

### formData.entries()

**Returns**: iterator for all key-value pairs in FormData.
