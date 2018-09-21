# Menu command handlers

Your `main.js` file returns a map linking each commandId (from the manifest) to a _handler function_:

```js
function sayHello(selection, documentRoot) {
    console.log("Hello, world!");
}

module.exports.commands = {
    helloCommand: sayHello
};
```

The command handler is passed two contextual arguments:
* The current [selection](../selection.md) state
* The root node of the entire document content (see [scenegraph](../scenegraph.md))

A command handler can either complete _synchronously_, as in the example above, or it can _return a Promise_ and finish its work _asynchronously_, like this example using [file IO](../uxp/using-file-apis.md):

```js
function sayHello(selection, documentRoot) {
    return fs.getFileForSaving().then(file => {
        return file.write("Hello, world!");
    });
}
```

## Accessing APIs

See [Available APIs](../core/apis.md) for a listing of different APIs and how to access them. Most APIs are loaded using `require()`,
but a few can be accessed directly as globals, and some key API objects are passed directly to your command handler function
([see menu item handlers](./handlers.md)).

