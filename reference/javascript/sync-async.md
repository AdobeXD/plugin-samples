# Sync and Async

>intro>
XD plugin APIs support both synchronous and asynchronous code (commonly referred to as _sync_ and _async_).

Below, we'll talk a little about the difference, and what that means for your XD plugins. 

**Note:** "Sync vs async" is a topic frequently covered in JavaScript tutorials and articles around the web. For a broader introduction, consult your favorite search engine.


## Synchronous code
>sync example>
When you write synchronous code, your code is executed line by line... >continue>

>when to use>


## Asynchornous code

XD plugins also support _asynchronous_ code with both Promises and async/await. 


> complete>
 it can _return a Promise_ and finish its work _asynchronously_, like this example using [the File API](../uxp/using-file-apis.md):

```js
function sayHello(selection, documentRoot) {
    return fs.getFileForSaving().then(file => {
        return file.write("Hello, world!");
    });
}
```