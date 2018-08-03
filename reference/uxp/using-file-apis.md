# Using the File API

The File API surface is intended to be a simple, cross-platform API surface that makes it easy to read and write text and binary files. Access to user files is user-mediated using file and folder pickers, but access to temporary files requires no user interaction. The File APIs themselves are asynchronous in nature, and so can be used with `Promise`s or `async`/`await`.

## Getting access to the local file system

You can get access to the local file system APIs by using the following:

```js
const fs = require("uxp").storage.localFileSystem;
```

Once you have `fs`, you can use it to request access to a temporary folder, the plugin's own folder, or to get access to user folders:

```js
const tempFolder = await fs.getTemporaryFolder(); // requires no user interaction
const pluginFolder = await fs.getPluginFolder();  // this is a read-only folder containing the plugin's assets
const pluginDataFolder = await fs.getDataFolder(); // this is a read-write persistent folder for the plugin, primarily for settings
const userFolder = await fs.getFolder(); // this displays a folder picker
const [aFile] = await fs.getFileForOpening(); // this display a file picker, suitable for reading contents
const anotherFile = await fs.getFileForSaving("hello.txt"); // this displays a save file picker, suitable for writing contents
```

If you have a folder, you can use `getEntries` to request all the entries within a folder:

```js
const entries = await pluginFolder.getEntries();
entries.map(entry => console.log(entry.name));
```

You can read and write files like so:

```js
const contents = await aFile.read();
await anotherFile.write(contents);
```

You can create a file too:

```js
const newFile = await tempFolder.createEntry("tempfile.txt", {overwrite: true});
newFile.write("Hello, world!");
```

See the [full reference](./module/storage.md).