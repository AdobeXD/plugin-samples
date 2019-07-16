# Available APIs

Adobe XD provides several categories of APIs:

* **[APIs for interacting with XD itself](#xd-specific-apis)**, especially its document model, the **scenegraph**

* The **UXP runtime**, which provides all the capabilities that aren't XD-specific:
    * A [_browser-like_ HTML and CSS engine](../uxp/ui-index.md) which drives actual XD _native UI components_ -- it is **not** a complete browser engine, but lets you build your UI using familiar web APIs and frameworks.
    * [Network APIs](../uxp/network-index.md) similar to the web standard XHR, `fetch`, and WebSocket found in browsers.
    * The [`storage` API](../uxp/storage-index.md), offering sandboxed filesystem access.

* The usual **[core JavaScript language APIs](../javascript/javascript-support.md)** you see in all JS runtimes, such as `setTimeout()` and `Date`.

* A simple **[module-loader `require()` API](../javascript/javascript-support.md#can-i-use-require)**

Read below for **how to access** XD and UXP APIs...


## XD-specific APIs

Most XD APIs are accessed by loading a module via `require()`, but some are passed directly to your plugin's handler functions.

* [selection](../selection.md) - Indicates the selected nodes and related context
    * This object is passed as an argument to your command handler function (see above)
* [scenegraph](../scenegraph.md) - APIs available on document nodes
    * Typically you use scenegraph objects by simply accessing the arguments passed to your command's handler function
      (`selection` and `documentRoot`).
    * To create _new_ nodes in the document, load this module explicitly to access the constructor functions:
      ```js
      let Rectangle = require("scenegraph").Rectangle;
      let node = new Rectangle();
      ```
* [commands](../commands.md) - Invoke commands to change the document structure and perform other complex operations.
    * `let commands = require("commands");`
* [interactions](../interactions.md) - Data model for interactive prototyping features (also accessible from scenegraph nodes).
    * `let interactions = require("interactions");`
* [application](../application.md) - APIs for exporting content, initiating edits from panel UI, and getting version / locale info.
    * `let application = require("application");`
* [clipboard](../clipboard.md) - Copy text to the clipboard.
    * `let clipboard = require("clipboard");`


## UXP

* HTML DOM APIs -- access just as in a browser, via the global `document`. Each plugin in XD gets its own `document` tree.

* Network APIs -- access just as in a browser, via the global classes `XMLHttpRequest` and `WebSocket`, and the global function `fetch()`

* Storage APIs -- access via `const fs = require("uxp").storage.localFileSystem;`
