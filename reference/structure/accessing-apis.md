#### Accessing APIs

See [Available APIs](#apis) below for a listing of different APIs and how to access them. Most APIs are loaded using `require()`,
but a few can be accessed directly as globals, and some key API objects are passed directly to your command handler function
([see above](#menu-item-handlers)).

Note: you cannot _yet_ use `require()` to load your own JS code that is provided by your plugin. It is currently used
only to access built-in XD APIs.


<a name="apis"></a>
## Available APIs

#### Principal API modules

* [selection](./reference/selection.md) - Indicates the selected nodes and related context
    * This object is passed as an argument to your command handler function (see above)
* [scenegraph](./reference/scenegraph.md) - APIs available on document nodes
    * Normally you can use these APIs by simply accessing the arguments passed to your command's handler function
      (`selection` and `documentRoot`).
    * To create _new_ nodes in the document, load this module explicitly to access the constructor functions:
      <br>`var Rectangle = require("scenegraph").Rectangle;`
      <br>`var node = new Rectangle();`
* [commands](./reference/commands.md) - Invoke commands to change the document structure and perform other complex operations.
    * Load this module explicitly: `var commands = require("commands");`
* [localFileSystem](./reference/file-IO.md) - Read and write files on disk
    * Load this module explicitly: `var fs = require("localFileSystem").localFileSystem;`
* [Network](./reference/network-IO.md) - Use browser-style `XMLHttpRequest`, `fetch()`, and `WebSocket` APIs to access the network.
    * These APIs are in the global namespace, so you can use them without any `require()` statements
* [clipboard](./reference/clipboard.md) - Copy text to the clipboard.
    * Load this module explicitly: `var clipboard = require("clipboard");`

#### Helper classes

* [SceneNodeList](./reference/SceneNodeList.md) - This is the type of the `children` property on scenenodes
