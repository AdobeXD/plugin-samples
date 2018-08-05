## global.XMLHttpRequest
**Signature:** global.XMLHttpRequest

**Kind**: static class of [`global`](#)  

* [.XMLHttpRequest](#xmlhttprequest)
    * [new XMLHttpRequest()](#new-xmlhttprequest-new)
    * [.responseURL](#xmlhttprequest-responseurl)
    * [.readyState](#xmlhttprequest-readystate) ⇒ `int`
    * [.responseText](#xmlhttprequest-responsetext) ⇒ `string`
    * [.responseXML](#xmlhttprequest-responsexml) ⇒ `object`
    * [.response](#xmlhttprequest-response) ⇒ `string` | `ArrayBuffer` | `Blob` | `Object`
    * [.status](#xmlhttprequest-status) ⇒ `string`
    * [.statusText](#xmlhttprequest-statustext) ⇒ `string`
    * [.timeout](#xmlhttprequest-timeout)
    * [.timeout](#xmlhttprequest-timeout)
    * [.responseType](#xmlhttprequest-responsetype) ⇒ `string`
    * [.responseType](#xmlhttprequest-responsetype)
    * [.withCredentials](#xmlhttprequest-withcredentials)
    * [.withCredentials](#xmlhttprequest-withcredentials)
    * [.upload](#xmlhttprequest-upload) ⇒ `XMLHttpRequestEventUpload`
    * [.abort()](#xmlhttprequest-abort)
    * [.getAllResponseHeaders()](#xmlhttprequest-getallresponseheaders) ⇒ `string`
    * [.getResponseHeader(name)](#xmlhttprequest-getresponseheader) ⇒ `string`
    * [.open(method, url, [async], [user], [password])](#module_global.XMLHttpRequest+open)
    * [.overrideMimeType(mimetype)](#xmlhttprequest-overridemimetype)
    * [.setRequestHeader(header, data)](#xmlhttprequest-setrequestheader)
    * [.send([data])](#module_global.XMLHttpRequest+send)

### new XMLHttpRequest
**Signature:** new XMLHttpRequest()

The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

### xmlHttpRequest.responseURL
**Signature:** xmlHttpRequest.responseURL

Unsupported

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Read only**: true  
### xmlHttpRequest.readyState
**Signature:** xmlHttpRequest.readyState ⇒ `int`

Returns an unsigned short, the state of the request.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `int` - returns the state of the XMLHttpRequest client.  
**Read only**: true  
### xmlHttpRequest.responseText
**Signature:** xmlHttpRequest.responseText ⇒ `string`

Returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns the received text response.  
**Read only**: true  
### xmlHttpRequest.responseXML
**Signature:** xmlHttpRequest.responseXML ⇒ `object`

Returns the XML document that supports W3C DOM level2 specification.
The XML document is constructed with received bytes using XMLHttpRequest.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `object` - returns the XML document response.  
**Throws**:

- [`DOMException`](#domexception) if responseType is not the empty string or "document".

**Read only**: true  
### xmlHttpRequest.response
**Signature:** xmlHttpRequest.response ⇒ `string` | `ArrayBuffer` | `Blob` | `Object`

Returns the response from the server in the type specified by responseType.
Only valid after the load event fires.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` | `ArrayBuffer` | `Blob` | `Object` - returns an ArrayBuffer, Blob, Document, JavaScript object, or a DOMString, depending on the value of;
XMLHttpRequest.responseType that contains the response entity body.  
**Read only**: true  
### xmlHttpRequest.status
**Signature:** xmlHttpRequest.status ⇒ `string`

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns the HTTP status code received from the server.  
**Read only**: true  
### xmlHttpRequest.statusText
**Signature:** xmlHttpRequest.statusText ⇒ `string`

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns the response's status message with regard to the HTTP status code received from the server.  
**Read only**: true  
### xmlHttpRequest.timeout
**Signature:** xmlHttpRequest.timeout

The number of milliseconds a request can take before automatically being terminated.
The default value is 0, which means there is no timeout.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
### xmlHttpRequest.timeout
**Signature:** xmlHttpRequest.timeout

Terminates a request and a timeout event will be dispatched after the given time has passed.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Throws**:

- [`DOMException`](#domexception) if called for synchronous request.


| Param | Type | Description |
| --- | --- | --- |
| value | `number` | number of milliseconds a request can take automatically being terminated. |

### xmlHttpRequest.responseType
**Signature:** xmlHttpRequest.responseType ⇒ `string`

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns a string taken from the XMLHttpRequestResponseType enum which specifies;
what type of data the response contains.  
### xmlHttpRequest.responseType
**Signature:** xmlHttpRequest.responseType

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | A string indicating the type of data contained in the response. This should be "arraybuffer", "blob", "document", "json" or "text". |

### xmlHttpRequest.withCredentials
**Signature:** xmlHttpRequest.withCredentials

Indicates whether to send cookies on a HTTP request.
When the value is set to true, XMLHttpRequest sends cookies. Otherwise, cookies are not sent.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
### xmlHttpRequest.withCredentials
**Signature:** xmlHttpRequest.withCredentials

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Throws**:

- [`DOMException`](#domexception) when set if state is not unsent or opened.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | `Boolean` | <code>true</code> | whether to send cookies on a HTTP request. |

### xmlHttpRequest.upload
**Signature:** xmlHttpRequest.upload ⇒ `XMLHttpRequestEventUpload`

If XMLHttpRequest has data in the body to upload, upload related event will be notified via XMLHttpRequest.upload.

**Kind**: instance property of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `XMLHttpRequestEventUpload` - returns XMLHttpRequestEventUpload object.  
**Read only**: true  
### xmlHttpRequest.abort
**Signature:** xmlHttpRequest.abort()

Aborts the request if it has already been sent.

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  
### xmlHttpRequest.getAllResponseHeaders
**Signature:** xmlHttpRequest.getAllResponseHeaders() ⇒ `string`

Returns sorted and combined response’s header list.
Each header field is defined by a group of [lower cased name]": "[value]"\r\n". Combined value is separated by ", ".

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns response’s header list.  
**Read only**: true  
### xmlHttpRequest.getResponseHeader
**Signature:** xmlHttpRequest.getResponseHeader(name) ⇒ `string`

Returns the matching value of the given field name in response's header.
The search key value is case-insensitive

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  
**Returns**: `string` - returns the value of the given name in response's header list.  
**Read only**: true  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | The name to search in response's header list. |

### xmlHttpRequest.open
**Signature:** xmlHttpRequest.open(method, url, [async], [user], [password])

Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest() instead.

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| method | `string` |  | The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs. |
| url | `string` |  | A DOMString representing the URL to send the request to. |
| [async] | `boolean` | <code>true</code> | An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously.                               If this value is false, the send() method does not return until the response is received.                               If true, notification of a completed transaction is provided using event listeners.                               This must be true if the multipart attribute is true, or an exception will be thrown. |
| [user] | `string` | <code>null</code> | The optional user name to use for authentication purposes; by default, this is the null value. |
| [password] | `string` | <code>null</code> | The optional password to use for authentication purposes; by default, this is the null value. |

### xmlHttpRequest.overrideMimeType
**Signature:** xmlHttpRequest.overrideMimeType(mimetype)

Use a MIME type other than the one provided by the server when interpreting the data being transferred in a request.
If parsing the MIME type fails, "application/octet-stream" will be used to interpret the data.

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  
**Throws**:

- [`DOMException`](#domexception) if state is loading or done


| Param | Type | Description |
| --- | --- | --- |
| mimetype | `string` | MIME type Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid. |

### xmlHttpRequest.setRequestHeader
**Signature:** xmlHttpRequest.setRequestHeader(header, data)

Sets the value of an HTTP request header. You must call setRequestHeader()after open(), but before send().

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  

| Param | Type | Description |
| --- | --- | --- |
| header | `string` | The name of the header whose value is to be set. |
| data | `string` | The value to set as the body of the header. |

### xmlHttpRequest.send
**Signature:** xmlHttpRequest.send([data])

Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

**Kind**: instance method of [`XMLHttpRequest`](#xmlhttprequest)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | `*` | <code></code> | A body of data to be sent in the XHR request. This can be:                       A Document, in which case it is serialized before being sent.                       A BodyInit, which as per the Fetch spec can be a Blob, BufferSource, FormData, URLSearchParams, ReadableStream, or USVString object.                       If no value is specified for the body, a default value of null is used.                       The best way to send binary content (e.g. in file uploads) is by using an ArrayBufferView or Blob in conjunction with the send() method. |

