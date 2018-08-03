# How to read the contents of a file
This sample describes how an XD plugin can invoke the default file picker and display the text extracted from the file chosen by user.

<!-- Image or GIF if necessary -->
<!-- ![PLUGINNAME]() -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Development Steps](#development-steps)
1. [Next Steps](#next-steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References: [XD File I/O](references/selection.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Getting Started Guide](../getting-started-guide)

## Development Steps

### 1.  Create plugin scaffold

As described in the [Getting Started Guide](/Guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
$ mkdir com.adobe.xd.insertTextFromFile
$ cd com.adobe.xd.insertTextFromFile
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.xd.insertTextFromFile",
    "name": "Insert Text from File",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Insert Text From File",
            "commandId": "insertTextFromFileCommand"
        }
    ]
}
```

In the main.js file, link the commandId to a handler function

```js
async function insertTextFromFileHandler(selection) {
    // The body of this function is added later
}

module.exports = { 
    commands: {
        "insertTextFromFileCommand": insertTextFromFileHandler
    }
};
```

The remaining steps in this guide describe additional edits to the main.js file.

### 2.  Get references to the `Text` and `Color` classes from XD’s `scenegraph` module
```js
const { Text, Color } = require("scenegraph");
```
`Text` and `Color` classes are imported and ready to be used.

### 3. Import XD's `localFileSystem` module
```js
const fs = require("uxp").storage.localFileSystem;
```
This example uses File I/O to import a file from user's local drive, so we need to require XD's `localFileSystem` module.

### 4. Create an asynchronous handler function
```js
async function insertTextFromFileHandler(selection) { // [1]
    const [aFile] = await fs.getFileForOpening();     // [2]
    if (!aFile)                                       // [3]
	return;
	
    const contents = await aFile.read();              // [4]

    const text = new Text();                          // [5] 
    text.text = contents;
    text.styleRanges = [{
        length: contents.length,
        fill: new Color("#0000ff"),
        fontSize: 12
    }];
    selection.insertionParent.addChild(text);
    text.moveInParentCoordinates(10, 30);
}
```

1. This example uses XD's asynchronous Filo I/O APIs, so the handler function must be declared as an async method.
2. A file picker dialog is displayed, and the function waits for the user to select a file.  See below for more detail.
3. If `aFile` is undefined (because the user did not select a file), then plugin execution is aborted.
4. The contents of the file is read, and it is returned as a string.  See below for more detail.
5. The contents of the string is added to a `Text` object, and the `Text` object is added to the currently-selected artboard.  For more information, see [How to create styled text](/Guides/how-to-style-text-guide)

Line [2] uses a number of modern Javascript constructs.  It is executed as follows:
* First,`fs.getFileForOpening()` function returns a `Promise` object.  
* Next, the `await` keyword causes this asynchronous function to pause until the `Promise` is fulfilled. 
* If the user selects a file, then the `Promise` is fulfiled. The value of the `await` expression is that of the fulfilled promise, which is an `Array` containing one `File` object.
* If the user closes the file picker dialog without selecting a file, then the promise is also fulfilled. The value of the `await` expression is that of the fulfilled promise, which is an empty array.
* Using the "destructuring assignment" syntax, the first element of the array is assigned to `aFile`.  If the array is empty (because the user did not select a file), then `aFile` is set to `undefined`.

Line [4] is also an asynchronous operation:
* First, `File.read` returns a `Promise` object.
* Next, the `await` keyword causes this asynchronous function to pause until the `Promise` is fulfiled.
* When the contents of the file has been read, the `Promise` is filfilled.  The value of the `await` expression is that of the fulfilled promise, which is a string containing the contents of the file.

### 5. Test the plugin

If you reload the plugin and execute it, you should see a file chooser like this one:

<img src="/.meta/readme-assets/filepicker.png" width="50%" height="50%">

If you select a file containing text, the text should be added to the currently-selected artboard:

<img src="/.meta/readme-assets/displayed-results.png" width="50%" height="50%">

## Next Steps

Ready for more? Take a look at other guides:

- [Guides](/Guides)
