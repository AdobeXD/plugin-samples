# How to make network requests

This sample app will show you how to load an image in an XD object (Rectangle or Artboard) by making network requests using `XHR` and `fetch`.


## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Basic knowledge of `XMLHttpRequest` and `fetch`
- [Quick Start Tutorial](/tutorials/quick-start)
- [Debugging Tutorial](/tutorials/debugging/index.md)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-make-network-requests).

### 1. Create plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/tutorials/quick-start).

Replace the JSON object in your manifest with the one below, noting the changes for the following fields:

1. `id`
1. `name`
1. `uiEntryPoints[0].label`
1. `uiEntryPoints[0].commandId`

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Network IO",
    "host": {
        "app": "XD",
        "minVersion": "13.0.0"
    },
    "version": "1.0.0",
    "description": "Description of your plugin.",
    "summary": "Summary of your plugin",
    "languages": [
        "en"
    ],
    "author": "Your Name",
    "helpUrl": "https://mywebsite.com/help",
    "icons": [
        { "width": 48, "height": 48, "path": "images/icon01x.png" },
        { "width": 96, "height": 96, "path": "images/icon02x.png" },
        { "width": 144, "height": 144, "path": "images/icon03x.png" },
        { "width": 192, "height": 192, "path": "images/icon04x.png" }
    ],
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "How to make network requests",
            "commandId": "applyImage"
        }
    ]
}
```

Refer to the full documentation of [manifest.json file](/reference/structure/manifest.md#top-level-metadata) to learn more.

Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code:

```js
function applyImage(selection) {
    // The body of this function is added later
}

module.exports = {
    commands: {
        applyImage
    }
};
```

The remaining steps in this tutorial describe additional edits to the `main.js` file.


### 2. Require in XD API dependencies

For this tutorial, we just need access to one XD scenegraph class.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const { ImageFill } = require("scenegraph");
```

Now the `ImageFill` class is imported and ready to be used.

### 3. Write a helper function to make XHR requests  

Our XHR helper `xhrBinary` will make an HTTP GET request to any URL it is passed, and a return a Promise with an `arraybuffer`.

```js
function xhrBinary(url) {                                       // [1]
    return new Promise((resolve, reject) => {                   // [2]
        const req = new XMLHttpRequest();                       // [3]
        req.onload = () => {
            if (req.status === 200) {
                try {
                    const arr = new Uint8Array(req.response);   // [4]
                    resolve(arr);                               // [5]
                } catch (err) {
                    reject(`Couldnt parse response. ${err.message}, ${req.response}`);
                }
            } else {
                reject(`Request had an error: ${req.status}`);
            }
        }
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url, true);
        req.responseType = "arraybuffer";                       // [6]
        req.send();
    });
}
```

1. `xhrBinary` function takes a url as a parameter
2. The function returns a Promise
3. The function uses `XMLHttpRequest` to make network requests
4. Once the correct response comes back, the function uses `Unit8Array` method to convert the response to an `arraybuffer`
5. After the conversion, the promise is resolved
6. Make sure the set the `responseType` as `arraybuffer`

### 4. Write a helper to apply `ImageFill`

This helper function will create an `ImageFill` instance that can be applied to a user-selected XD scengraph object:

```js
function applyImagefill(selection, file) {                             // [1]
    const imageFill = new ImageFill(file);                             // [2]
    selection.items[0].fill = imageFill;                               // [3]
}
```

1. The function accepts the `selection` and a `file` as parameters
2. Use the `ImageFill` class to create the fill
3. Apply the image to the user-selected XD object

We'll use this function in the next step.

### 5. Write a helper function to download the image

Ok, you've just made three helper functions. Now we're going to tie them all together!

Note the use of the `async` keyword at the beginning of the function.

```js
async function downloadImage(selection, jsonResponse) {                 // [1]
    try {
        const photoUrl = jsonResponse.message;                          // [2]
        const photoObj = await xhrBinary(photoUrl);                     // [3]
        const tempFolder = await fs.getTemporaryFolder();               // [4]
        const tempFile = await tempFolder.createFile("tmp");            // [5]
        await tempFile.write(photoObj, { format: uxp.formats.binary }); // [6]
        applyImagefill(selection, tempFile);                            // [7]
    } catch (err) {
        console.log("error")
        console.log(err.message);
    }
}
```

1. This helper function accepts the `selection` and a JSON response object as parameters
2. Gets the URL from the JSON response
3. Uses our async `xhrBinary` function to get an `arraybuffer`
4. Uses the `fs` module and its `getTemporaryFolder` method to create a temp folder
5. Uses the `createFile` method to create a temp file
6. Uses the `write` method to write the binary file to store
7. Uses `applyImagefill` to place the image into a user-selected XD object

### 6. Write the main handler function

This is the function that will be called with the user runs our plugin command.

```js
function applyImage(selection) {
    if (selection.items.length) {                                   // [1]
        const url = "https://dog.ceo/api/breeds/image/random";      // [2]
        return fetch(url)                                           // [3]
            .then(function (response) {
                return response.json();                             // [4]
            })
            .then(function (jsonResponse) {
                return downloadImage(selection, jsonResponse);      // [5]
            });
    } else {
        console.log("Please select a shape to apply the downloaded image.");
    }
}
```

1. Checks if user has selected at least one object
2. This is an example public URL to an image
3. Pass the URL to `fetch`
4. The first `.then` block returns the response JSON object
5. The second `.then` block passes the `selection` and our JSON reponse to our  `downloadImage` function, ultimately placing it in the document

## Next Steps

Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:

- [Network I/O](/reference/uxp/network-index.md)
- [XMLHttpRequest](/reference/uxp/network-index.md#xmlhttprequest-support)
- [fetch](/reference/uxp/network-index.md#fetch-support)

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
