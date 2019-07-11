
<a name="module-global-fetch" id="module-global-fetch"></a>

## fetch(input, [init])

**Returns**: `Promise.<Response>` - @see Response

**Throws**:

- TypeError
1. when init.body is set and init.method is either "GET" or "HEAD".
2. when either network error or network time-out occurs after a http request is made.
3. when there is a failure in reading files in FormData during posting FormData.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | `string` \| `Request` |  | either the URL string to connect with or a Request object having the URL and the init option in the below. |
| [init] | `Object` |  | custom options for a HTTP request. |
| [init.method] | `Object` | <code>&quot;GET&quot;</code> | the HTTP request method. |
| [init.headers] | `Headers` |  | the HTTP request headers to add. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `FormData` |  | the body that is included in the HTTP request body. There is a caveat for sending a FormData object. @see XMLHttpRequest.send. |
| [init.credentials] | `string` | <code>&quot;\&quot;omit\&quot;&quot;</code> | indicates whether to send cookies. Possible values and functions are as follows: "omit" : cookies are NOT sent, "same-origin" and "include" : cookies are sent. |

