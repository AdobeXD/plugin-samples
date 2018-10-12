# How to export a rendition
This sample describes how an XD plugin can invoke the default file picker and generate a rendition of the selected artboard for export.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](/guides/quick-start-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-export-a-rendition).

### 1. Prepare your plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/guides/quick-start-guide).

Replace the JSON object in your manifest with the one below, noting the changes for the following fields:

1. `id`
1. `name`
1. `uiEntryPoints[0].label`
1. `uiEntryPoints[0].commandId`

```json
{
    "id": "HOW_TO_EXPORT_A_RENDITION",
    "name": "Export Rendition Plugin",
    "host": {
        "app": "XD",
        "minVersion": "13.0.11.19"
    },
    "version": "1.0.0",
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "Export Rendition",
            "commandId": "exportRendition"
        }
    ]
}
```

Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code:

```js
async function exportRenditionHandlerFunction(selection) {
    if (selection.items.length > 0) {
        // The body of this function is added later
    }
}

module.exports = {
    commands: {
        "exportRendition": exportRenditionHandlerFunction
    }
};
```

A couple of notes about the handler function shell above:

1. This function will run _asynchronously_, as indicated by the `async` keyword at the beginning of the line. To learn more about what this means, see [our document on sync and async support](/Users/arnwine/Desktop/plugin-docs/reference/javascript/sync-async.md).
1. Since this plugin will require user to select an object, we use an `if` statement to check if there is an XD object selected.

The remaining steps in this guide describe additional edits to the `main.js` file.


### 2. Require in XD API dependencies 

For this tutorial, we just need access to one XD module and one UXP class.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
```

Now the `application` module and `localFileSystem` class are required in and ready to be used. These modules are required to invoke the file picker and export renditions.


### 3. Invoke the file picker

Here, we'll use `uxp.storage.localFileSystem` (our `fs` constant) to invoke the file picker:

```js
const folder = await fs.getFolder();
const file = await folder.createFile("rendition.png");
```

This will invoke the default file picker for user to choose the save directory and create a file named `rendition.png`.


### 4. Define your rendition settings

Next, we'll define the settings for our desired renditions.

Note the data structure in the code below: an array of objects (in this case, one object).

Each of the numbered comments are explained below the code:

```js
var renditionSettings = [{
    node: selection.items[0],               // [1]
    outputFile: file,                       // [2]
    type: application.RenditionType.PNG,    // [3]
    scale: 2                                // [4]
}];
```

1. `selection.items[0]` refers to the first user-selected item in the document
2. Set the `outputFile` property to the `file` constant we created in step #3
3. Set the `type` property to `application.RenditionType.PNG`
4. Set the desired scale of the exported rendition

We'll use this data structure containing our settings in the next step.


### 5. Create renditions

This is where we attempt to create the renditions:

```js
application.createRenditions(renditionSettings)    // [1]
    .then(results => {                             // [2]
        console.log(`PNG rendition has been saved at ${results[0].outputFile.nativePath}`);
    })
    .catch(error => {                              // [3]
        console.log(error);
    });
```

1. The `application#createRenditions` method accepts as an argument the `renditionSettings` data structure that we created in step #4.
2. `createRenditions` returns a Promise. We log success to the developer console.
3. Any errors will land in `.catch`, which we also log to the developer console.


### 6. Run the plugin

After saving all of your changes, reload the plugin in XD. Make sure to select an artboard and run the plugin command.

You should see a file picker like this one:

<img src="/images/readme-assets/export-rendition-pick-file.png" width="50%" height="50%">

The rendition will be saved at the specified location.

Open the developer console to see your success or error message from the previous step.


## Next Steps

Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:

- [File I/O](/reference/uxp/using-file-apis.md)
- [Export Renditions](/reference/application.md#applicationcreaterenditionsrenditions)

Ready to explore further? Take a look at our other resources:

- [Tutorials](/guides)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
