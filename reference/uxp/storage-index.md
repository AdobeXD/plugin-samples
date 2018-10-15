# Storage

# Using the File API

XD provides a simple, cross-platform API surface that makes it easy to read and write text and binary files. Three key things to note:

* Instead of working with string paths, you work with File and Folder objects.
* Access to the user's files requires showing a file picker UI, but you can access temporary files and any files packaged inside your plugin without needing any user interaction. If you have a File/Folder object, then you have access to the corresponding item on disk.
* File APIs are asynchronous, returning Promises which you can use with `then()` or the `async`/`await` keywords.

## Getting access to the local file system

Start using the file system APIs by obtaining a [FileSystemProvider](./module/storage.md#filesystemprovider) object (shortened to `fs` in the code here):

```js
const fs = require("uxp").storage.localFileSystem;
```

You can use the `fs` object to access a temporary folder or your plugin's own folder immediately, or request access to user folders by showing a file picker:

```js
// These require no user interaction:
const tempFolder = await fs.getTemporaryFolder();
const pluginFolder = await fs.getPluginFolder();  // read-only access to the plugin's install folder
const pluginDataFolder = await fs.getDataFolder();  // folder to store settings

// Display file/folder picker UI to access user files:
const userFolder = await fs.getFolder();  // folder picker
const aFile = await fs.getFileForOpening();  // "Open" file picker, suitable for reading contents
const anotherFile = await fs.getFileForSaving("hello.txt");  // "Save" file picker, suitable for writing contents
```

If you have a [Folder](./module/storage.md#folder), you can use [`getEntries()`](./module/storage.md#folder-getentries) to enumerate the folder's contents:

```js
const entries = await folder.getEntries();
entries.forEach(entry => console.log(entry.name));
```

If you have a [File](./module/storage.md#file), you can read and write its contents like so:

```js
const contents = await aFile.read();
await anotherFile.write(contents);
```

You can create new files inside a folder you have access to:

```js
const newFile = await folder.createEntry("examples.txt", {overwrite: true});
newFile.write("Hello, world!");
```

See the [full reference](./module/storage.md).