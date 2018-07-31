# Network I/O

The Network I/O subsystem mimics the standards found on the web. The following API surfaces are available:

* Web Sockets
    * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
* XMLHttpRequest
    * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
* Fetch
    * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## Web Socket Support

The entire web socket API is supported, _except_ for extensions handling.

_**Known issue:** web sockets cannot connect to `wss://` URLs yet. You can only connect to insecure `ws://` URLs._

## XMLHttpRequest Support

Most of the XHR API surface is supported, including:

* Setting request headers
* Getting response headers
* Event handling
* Sending text and binary data
    * Text is expected to be UTF8 encoded.
    * Binary data uses `ArrayBuffer`, not blobs
    * Sending binary data is not currently supported (but coming)

Unsupported portions of the surface:

* `responseURL`
* Sending / receiving blobs is not supported
* Synchronous XHR will throw an error


## Fetch Support

Fetch is polyfilled on top of the XHR implementation using https://github.com/github/fetch.