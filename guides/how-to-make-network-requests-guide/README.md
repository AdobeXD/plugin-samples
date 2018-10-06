# How to make network requests

This sample app will show you how to load an image in an XD object (Rectangle or Artboard) by making network requests using `XHR` and `fetch`. **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-make-network-requests)**.

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
- References:
    - [Network IO](/reference/uxp/network-IO.md#web-socket-support)
    - [XMLHttpRequest](/reference/uxp/network-IO.md#xmlhttprequest-support)
    - [fetch](/reference/uxp/network-IO.md#fetch-support)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Basic knowledge of `XMLHttpRequest` and `fetch`
- [Getting Started Guide](/guides/getting-started-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

### 1. Create plugin scaffold

As described in the [Getting Started Guide](/guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/plugins
$ mkdir com.adobe.xd.networkio
$ cd com.adobe.xd.networkio
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.xd.networkio",
    "name": "Network IO",
    "version": "0.0.1",
    "host": {
        "app": "XD",
        "minVersion": "13.0.11.19"
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

In the `main.js` file, link the commandId to a handler function

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

The remaining steps in this guide describe additional edits to the `main.js` file.

### 2. Get references to the `ImageFill` class from XD’s `scenegraph` module

Get references to the `ImageFill` module.

```javascript
const { ImageFill } = require("scenegraph");
```
`ImageFill` class is imported and ready to be used to fill an object with ImageFill.

### 3. Write a helper function to make XHR requests
```js
function xhrBinary(url) { // [1]
    return new Promise((resolve, reject) => { // [2]
        const req = new XMLHttpRequest(); // [3]
        req.onload = () => {
            if (req.status === 200) {
                try {
                    const arr = new Uint8Array(req.response); // [4]
                    resolve(arr); // [5]
                } catch (err) {
                    reject('Couldnt parse response. ${err.message}, ${req.response}');
                }
            } else {
                reject('Request had an error: ${req.status}');
            }
        }
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url, true);
        req.responseType = "arraybuffer"; // [6]
        req.send();
    });
}
```
1. `xhrBinary` function takes a url as a parameter
2. The function returns a Promise object
3. The function uses the `XMLHttpRequest` web module to make requests
4. Once the correct response comes back, the function uses `Unit8Array` method to convert the response to arraybuffer
5. After the conversion, the promise is resolved. If failed in any part of the process, the promise is rejected
6. Make sure the set the `responseType` as `arraybufer`

### 4. Write a helper function to convert arraybuffer to base64 string
``` js
function base64ArrayBuffer(arrayBuffer) {
    let base64 = '';
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;

    let a;
    let b;
    let c;
    let d;
    let chunk;

    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i += 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63;        // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
        chunk = bytes[mainLength];

        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3   = 2^2 - 1

        base64 += `${encodings[a]}${encodings[b]}==`;
    } else if (byteRemainder === 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15    = 2^4 - 1

        base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
    }

    return base64;
}
```
You can find many open-sourced codes that help you convert arraybuffer to base64 string. This particular one was cloned from [this public repository](https://gist.github.com/jonleighton/958841).

### 5. Write a helper function that creates ImageFill and apply it in XD
```js

function applyImagefill(selection, base64) { // [1]
    const imageFill = new ImageFill(`data:image/jpeg;base64,${base64}`); // [2]
    selection.items[0].fill = imageFill; // [2]
}

```
1. This helper function accepts the selection object and the base64 string as parameters
2. Use the `ImageFill` class to create the fill
3. Apply the image to the user selected XD object

### 6. Write a helper function to download the image
```js
async function downloadImage(selection, jsonResponse) { // [1]
    try {

        const photoUrl = jsonResponse.message; // [2]
        const photoObj = await xhrBinary(photoUrl); // [3]
        const photoObjBase64 = await base64ArrayBuffer(photoObj); // [4]
        applyImagefill(selection, photoObjBase64); // [5]

    } catch (err) {
        console.log("error")
        console.log(err.message);
    }
}
```
1. This helper function accepts the selection object and the json response as parameters
2. Parses the url from the json response
3. Use `xhrBinary` to get the arraybuffer of the photo object
4. Use `base64ArrayBuffer` to convert arraybuffer to base64 string
5. Use `applyImagefill` to place the image in an XD artboard

### 6. Write the main functions
```js
function applyImage(selection) {

    if (selection.items.length) { // [1]
        const url = "https://dog.ceo/api/breeds/image/random"; // [2]
        return fetch(url) // [3]
            .then(function (response) {
                return response.json(); // [4]
            })
            .then(function (jsonResponse) {
                return downloadImage(selection, jsonResponse); // [5]
            });
    } else {
        console.log("Please select a shape to apply the downloaded image.");
    }

}


```
1. Checks if user has selected at least one object
2. This is an example public URL to get a url to download a dog image
3. `fetch` is used to get response that contains the url for a dog image
4. The first `.then` block returns the response json object
5. The second `.then` block uses `downloadImage` to download the image and place it to the document

## Next Steps

Description

- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
