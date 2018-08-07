#### Menu command handlers

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

_**Important caveat:**_ In this build, when a plugin command runs asynchronously, _you should not interact with XD at all_ via mouse or keyboard until your
plugin code is completely done executing. Doing so could freeze XD, break Undo, or corrupt the document. In the future, XD will block the UI to ensure other
actions can't interfere with your plugin in mid-operation.
