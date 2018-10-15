# Sync and Async

XD plugin APIs support both synchronous and asynchronous code (commonly referred to as _sync_ and _async_).

Below, we'll talk a little about the difference, and what it means for your XD plugins. 

**Note:** "Sync vs async" is a topic frequently covered in JavaScript tutorials and articles around the web. For a broader introduction, consult your favorite search engine.


## Synchronous code

When you write synchronous code, your code is executed line by line.

Here's an example:

```js
const newElement = new Rectangle();
newElement.width = 100;
newElement.height = 50;
newElement.fill = new Color("Purple");
```

## Asynchronous code

XD plugins also support _asynchronous_ code with both Promises and async/await. Some XD plugin APIs are asynchronous in nature. You can also create your own Promises as you would in any JavaScript environment.

Here's an example using [the File API](../uxp/storage-index.md) and Promise syntax:

```js
function sayHello(selection, documentRoot) {
    return fs.getFileForSaving().then(file => {
        return file.write("Hello, world!");
    });
}
```

Here's that same example using async/await syntax:

```js
async function sayHello(selection, documentRoot) {
    let file = await fs.getFileForSaving();
    file.write("Hello, world!");
}
```

We recommend async/await syntax over Promises.