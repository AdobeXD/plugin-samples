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
    "version": "1.0.0",
    "host": {
        "app": "XD",
        "minVersion": "13.0.0"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "How to make network requests",
            "commandId": "applyImage"
        }
    ]
}
```

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

Each of the numbered comments are explained below the code:

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

We'll use this function in a later step.


### 4. Convert `arraybuffer` to `base64` string

The help function we just made returns and `arraybuffer` but `ImageFill` will expect a `base64` string. We need to convert one to the other.

The XD plugin API does not provide a `atob` method, as you would expect in a browser environment. You will need to supply your own conversion method.

Luckily, you don't need to create your own from scratch. There are many open-source libraries out there that will convert `arraybuffer` to `base64` string. [This public is one such example in a GitHub Gist](https://gist.github.com/jonleighton/958841).

Find your favorite and add it to your `main.js` file. For this example, we'll call the `base64ArrayBuffer` found in the Gist linked above.

We'll use this function in a later step.


### 5. Write a helper to apply `ImageFill`

This helper function will create an `ImageFill` instance that can be applied to a user-selected XD scengraph object:

```js
function applyImagefill(selection, base64) {                             // [1]
    const imageFill = new ImageFill(`data:image/jpeg;base64,${base64}`); // [2]
    selection.items[0].fill = imageFill;                                 // [3]
}
```

1. The function accepts the `selection` and a `base64` string as parameters
2. Use the `ImageFill` class to create the fill
3. Apply the image to the user-selected XD object

We'll use this function in the next step.


### 6. Write a helper function to download the image

Ok, you've just made three helper functions. Now we're going to tie them all together!

Note the use of the `async` keyword at the beginning of the function.

```js
async function downloadImage(selection, jsonResponse) {             // [1]
    try {
        const photoUrl = jsonResponse.message;                      // [2]
        const photoObj = await xhrBinary(photoUrl);                 // [3]
        const photoObjBase64 = await base64ArrayBuffer(photoObj);   // [4]
        applyImagefill(selection, photoObjBase64);                  // [5]

    } catch (err) {
        console.log("error")
        console.log(err.message);
    }
}
```

1. This helper function accepts the `selection` and a JSON response object as parameters
2. Gets the URL from the JSON response
3. Uses our async `xhrBinary` function to get an `arraybuffer`
4. Uses our async `base64ArrayBuffer` function to convert `arraybuffer` to `base64` string
5. Uses `applyImagefill` to place the image into a user-selected XD object


### 7. Write the main handler function

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
