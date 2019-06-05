# Available APIs

Adobe XD provides several APIs to you, via the `require` method. You can also import your own modules and files using `require`.

## Principal API modules

* [selection](../selection.md) - Indicates the selected nodes and related context
    * This object is passed as an argument to your command handler function (see above)
* [scenegraph](../scenegraph.md) - APIs available on document nodes
    * Normally you can use these APIs by simply accessing the arguments passed to your command's handler function
      (`selection` and `documentRoot`).
    * To create _new_ nodes in the document, load this module explicitly to access the constructor functions:
      ```js
      let Rectangle = require("scenegraph").Rectangle;
      let node = new Rectangle();
      ```
* [commands](../commands.md) - Invoke commands to change the document structure and perform other complex operations.
    * Load this module explicitly: `let commands = require("commands");`
* [interactions](../interactions.md) - Data model for interactive prototyping features (also accessible from scenegraph nodes).
    * Load this module explicitly: `let interactions = require("interactions");`
* [storage](../uxp/storage-index.md) - Read and write files on disk
    * Load this module explicitly: `const fs = require("uxp").storage.localFileSystem;`
* [Network](../uxp/network-index.md) - Use browser-style `XMLHttpRequest`, `fetch()`, and `WebSocket` APIs to access the network.
    * These APIs are in the global namespace, so you can use them without any `require()` statements
* [application](../application.md) - Version and locale information, and APIs for exporting content.
    * Load this module explicitly: `let application = require("application");`
* [clipboard](../clipboard.md) - Copy text to the clipboard.
    * Load this module explicitly: `let clipboard = require("clipboard");`

## Helper classes

* [SceneNodeList](../SceneNodeList.md) - This is the type of the `children` property on scenenodes
