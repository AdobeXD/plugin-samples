# File API

The File API surface is intended to be a simple, cross-platform API surface that makes it easy to read and write text and binary files. Access to user files is user-mediated using file and folder pickers, but access to temporary files requires no user interaction. The File APIs themselves are asynchronous in nature, and
so can be used with `Promise`s or `async`/`await`.

## Getting access to the local file system

You can get access to the local file system APIs by using the following:

```js
const fs = require("localFileSystem").localFileSystem;
```

Once you have `fs`, you can use it to request access to a temporary folder, the plugin's own folder, or to get access to user folders:

```js
const tempFolder = await fs.getTemporaryFolder(); // requires no user interaction
const pluginFolder = await fs.getPluginFolder();  // this is a read-only folder containing the plugin's assets
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

## Classes

<dl>
<dt><a href="#Entry">Entry</a></dt>
<dd><p>An <code>Entry</code> is the base class for <code>File</code> and <code>Folder</code>. You&#39;ll
typically never instantiate an <code>Entry</code> directly, but it provides
the common fields and methods that both <code>File</code> and <code>Folder</code>
share.</p></dd>
<dt><a href="#EntryMetadata">EntryMetadata</a></dt>
<dd><p>Metadata for an entry. It includes useful information such as:</p>
<ul>
<li>size of the file (if a file)</li>
<li>date created</li>
<li>date modified</li>
<li>name</li>
</ul>
<p>You&#39;ll not instantiate this directly; use <a href="#Entry+getMetadata">getMetadata</a> to do so.</p></dd>
<dt><a href="#File">File</a></dt>
<dd><p>Represents a file on a file system. Provides methods for reading from and
writing to the file. You&#39;ll never instantiate a <code>File</code> directly; instead
you&#39;ll get access via a <a href="#FileSystemProvider">FileSystemProvider</a>.</p></dd>
<dt><a href="#FileSystemProvider">FileSystemProvider</a></dt>
<dd><p>Provides access to files and folders on a file system. You&#39;ll typically not
instantiate this directly; instead you&#39;ll use an instance of one that has
already been created for you. This class is abstract, meaning that you&#39;ll
need to provide your own implementation in order to use it effectively.</p></dd>
<dt><a href="#Folder">Folder</a> ⇐ <code><a href="#Entry">Entry</a></code></dt>
<dd><p>Represents a folder on a file system. You&#39;ll never instantiate this directly,
but will get it by calling <a href="#FileSystemProvider+getTemporaryFolder">getTemporaryFolder</a>,
<a href="#FileSystemProvider+getFolder">getFolder</a>, or via <a href="#Folder+getEntries">getEntries</a>.</p></dd>
<dt><a href="#AbstractMethodInvocationError">AbstractMethodInvocationError</a> ⇐ <code>Error</code></dt>
<dd><p>Attempted to invoke an abstract method.</p></dd>
<dt><a href="#ProviderMismatchError">ProviderMismatchError</a> ⇐ <code>Error</code></dt>
<dd><p>Attempted to execute a command that required the providers of all
entries to match.</p></dd>
<dt><a href="#EntryIsNotAnEntryError">EntryIsNotAnEntryError</a> ⇐ <code>Error</code></dt>
<dd><p>The object passed as an entry is not actually an <code>Entry</code>.</p></dd>
<dt><a href="#EntryIsNotAFolderError">EntryIsNotAFolderError</a> ⇐ <code>Error</code></dt>
<dd><p>The entry is not a folder, but was expected to be a folder.</p></dd>
<dt><a href="#EntryIsNotAFileError">EntryIsNotAFileError</a> ⇐ <code>Error</code></dt>
<dd><p>The entry is not a file, but was expected to be.</p></dd>
<dt><a href="#NotAFileSystemError">NotAFileSystemError</a> ⇐ <code>Error</code></dt>
<dd><p>The instance was expected to be a file system, but wasn&#39;t.</p></dd>
<dt><a href="#OutOfSpaceError">OutOfSpaceError</a> ⇐ <code>Error</code></dt>
<dd><p>The file system is out of space (or quota has been exceeded)</p></dd>
<dt><a href="#PermissionDeniedError">PermissionDeniedError</a> ⇐ <code>Error</code></dt>
<dd><p>The file system revoked permission to complete the requested
action.</p></dd>
<dt><a href="#EntryExistsError">EntryExistsError</a> ⇐ <code>Error</code></dt>
<dd><p>An attempt was made to overwrite an entry without indicating
that it was safe to do so via <code>overwrite: true</code>.</p></dd>
<dt><a href="#FileIsReadOnlyError">FileIsReadOnlyError</a> ⇐ <code>Error</code></dt>
<dd><p>An attempt was made to write to a file that was opened as
read-only.</p></dd>
<dt><a href="#DomainNotSupportedError">DomainNotSupportedError</a> ⇐ <code>Error</code></dt>
<dd><p>Domain is not supported by the current FileSystemProvider
instance.</p></dd>
<dt><a href="#InvalidFileNameError">InvalidFileNameError</a> ⇐ <code>Error</code></dt>
<dd><p>The file name contains invalid characters</p></dd>
</dl>

<a name="FileSystemProvider"></a>

## FileSystemProvider
<p>Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you. For example:</p>

```js
const fs = require("localFileSystem").localFileSystem;
fs.isFileSystemProvider === true;
```

**Kind**: global class

* [FileSystemProvider](#FileSystemProvider)
    * _instance_
        * [.isFileSystemProvider](#FileSystemProvider+isFileSystemProvider)
        * [.supportedDomains](#FileSystemProvider+supportedDomains)
        * [.getFileForOpening(options)](#FileSystemProvider+getFileForOpening) ⇒ [<code>Array.&lt;File&gt;</code>](#File)
        * [.getFileForSaving(options)](#FileSystemProvider+getFileForSaving) ⇒ [<code>File</code>](#File)
        * [.getFolder(options)](#FileSystemProvider+getFolder) ⇒ [<code>Folder</code>](#Folder)
        * [.getTemporaryFolder()](#FileSystemProvider+getTemporaryFolder)
        * [.getPluginFolder()](#FileSystemProvider+getPluginFolder)
    * _static_
        * [.isFileSystemProvider(fs)](#FileSystemProvider.isFileSystemProvider) ⇒ <code>boolean</code>

<a name="FileSystemProvider+isFileSystemProvider"></a>

### fileSystemProvider.isFileSystemProvider
<p>Indicates that this is a <code>FileSystemProvider</code>. Useful for type-checking.</p>

**Kind**: instance property of [<code>FileSystemProvider</code>](#FileSystemProvider)
<a name="FileSystemProvider+supportedDomains"></a>

### fileSystemProvider.supportedDomains
<p>An array of the domains this file system supports. If the file system can
open a file picker to the user's <code>documents</code> folder, for example, then
[userDocuments](userDocuments) will be in this list.</p>

**Kind**: instance property of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Example**
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```
<a name="FileSystemProvider+getFileForOpening"></a>

### fileSystemProvider.getFileForOpening(options) ⇒ [<code>Array.&lt;File&gt;</code>](#File)
<p>Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.</p>
<p>Multiple files can be returned if the <code>allowMultiple</code> option<code>is</code>true`.</p>

**Kind**: instance method of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Returns**: [<code>Array.&lt;File&gt;</code>](#File) - <p>returns the selected files, or empty if no file were selected.</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>\*</code> |  |  |
| [options.initialDomain] | <code>Symbol</code> |  | <p>the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.</p> |
| [options.types] | <code>Array.&lt;string&gt;</code> | <code>[&#x27;.*&#x27;]</code> | <p>the allowed file types</p> |
| [options.allowMultiple] | <code>boolean</code> | <code>false</code> | <p>if true, multiple files can be returned (as an array)</p> |

**Example**
```js
const [file] = await fs.getFileForOpening({initialDomain = domains.userDocuments});
if (!file) {
    // no file selected
    return;
}
const text = await file.read();
```
**Example**
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
if (files.length === 0) {
    // no files selected
}
```
<a name="FileSystemProvider+getFileForSaving"></a>

### fileSystemProvider.getFileForSaving(options) ⇒ [<code>File</code>](#File)
<p>Gets a file reference suitable for saving. The file is read-write. Any
file picker displayed will be of the &quot;save&quot; variety.</p>
<p>If the user attempts to save a file that doesn't exist, the file is
created automatically.</p>
<p>If the act of writing to the file would overwrite it, the file picker
should prompt the user if they are OK with that action. If not, the file
should not be returned.</p>

**Kind**: instance method of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Returns**: [<code>File</code>](#File) - <p>returns the selected file, or <code>null</code> if no file were selected.</p>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> |  |
| [options.initialDomain] | <code>Symbol</code> | <p>the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.</p> |

**Example**
```js
const [file] = await fs.getFileForSaving({initialDomain = domains.userDocuments});
if (!file) {
    // no file selected, or the user didn't want to overwrite one they did select
    return;
}
await file.write("It was a dark and stormy night");
```
<a name="FileSystemProvider+getFolder"></a>

### fileSystemProvider.getFolder(options) ⇒ [<code>Folder</code>](#Folder)
<p>Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [getEntries](#Folder+getEntries). Any
files within are read-write.</p>
<p>If the user dismisses the picker, <code>null</code> is returned instead.</p>

**Kind**: instance method of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Returns**: [<code>Folder</code>](#Folder) - <p>the selected folder or <code>null</code> if no folder is selected.</p>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>any</code> |  |
| [options.initialDomain] | <code>Symbol</code> | <p>the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.</p> |

**Example**
```js
const folder = await fs.getFolder();
const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
const text = await myNovel.read();
```
<a name="FileSystemProvider+getTemporaryFolder"></a>

### fileSystemProvider.getTemporaryFolder()
<p>Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.</p>

**Kind**: instance method of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Example**
```js
const temp = await fs.getTemporaryFolder();
```
<a name="FileSystemProvider+getDataFolder"></a>

### fileSystemProvider.getDataFolder()
<p>Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.</p>

> **NOTE**: Not currently supported in this version of the XD Prerelease drop. **DO NOT USE IT**.

**Kind**: instance method of [<code>FileSystemProvider</code>](#FileSystemProvider)
<a name="FileSystemProvider+getPluginFolder"></a>

### FileSystemProvider.isFileSystemProvider(fs) ⇒ <code>boolean</code>
<p>Checks if the supplied object is a <code>FileSystemProvider</code>. It's safe to use even
if the object is <code>null</code> or <code>undefined</code>. Useful for type checking.</p>

**Kind**: static method of [<code>FileSystemProvider</code>](#FileSystemProvider)
**Returns**: <code>boolean</code> - <p>If <code>true</code>, the object is a file system provider</p>

| Param | Type | Description |
| --- | --- | --- |
| fs | <code>any</code> | <p>the object to check</p> |
<a name="Entry"></a>

## Entry
<p>An <code>Entry</code> is the base class for <code>File</code> and <code>Folder</code>. You'll
typically never instantiate an <code>Entry</code> directly, but it provides
the common fields and methods that both <code>File</code> and <code>Folder</code>
share.</p>

**Kind**: global class

* [Entry](#Entry)
    * [.[undefined]](#Entry+[undefined])
    * [.isEntry](#Entry+isEntry)
    * [.isFile](#Entry+isFile)
    * [.isFolder](#Entry+isFolder)
    * [.name](#Entry+name) : <code>string</code>
    * [.provider](#Entry+provider) : [<code>FileSystemProvider</code>](#FileSystemProvider)
    * [.copyTo(folder, options)](#Entry+copyTo)
    * [.moveTo(folder, options)](#Entry+moveTo)
    * [.delete()](#Entry+delete)
    * [.getMetadata()](#Entry+getMetadata) ⇒ [<code>Promise.&lt;EntryMetadata&gt;</code>](#EntryMetadata)

<a name="Entry+[undefined]"></a>

### entry.[undefined]
<p>A unique identifier that can be used to reference
the entry in the file system; this is provider-
specific.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
<a name="Entry+isEntry"></a>

### entry.isEntry
<p>Indicates that this instance is an <code>Entry</code>. Useful for type-checking.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
**Example**
```js
if (something.isEntry) {
    return something.getMetadata();
}
```
<a name="Entry+isFile"></a>

### entry.isFile
<p>Indicates that this instance is <strong>not</strong> a <code>File</code>. Useful for type-
checking.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
**Example**
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```
<a name="Entry+isFolder"></a>

### entry.isFolder
<p>Indicates that this instance is <strong>not</strong> a folder. Useful for type-
checking.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
**Example**
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```
<a name="Entry+name"></a>

### entry.name : <code>string</code>
<p>The name of this entry. Read-only.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
**Read only**: true
**Example**
```js
console.log(anEntry.name);
```
<a name="Entry+provider"></a>

### entry.provider : [<code>FileSystemProvider</code>](#FileSystemProvider)
<p>The associated provider that services this entry. Read-only.</p>

**Kind**: instance property of [<code>Entry</code>](#Entry)
**Read only**: true
**Example**
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```
<a name="Entry+copyTo"></a>

### entry.copyTo(folder, options)
<p>Copies this entry to the specified <code>folder</code>.</p>

**Kind**: instance method of [<code>Entry</code>](#Entry)
**Throws**:

- <code>EntryExists</code> <p>if the attempt would overwrite an entry and <code>overwrite</code> is <code>false</code></p>
- <code>PermissionDenied</code> <p>if the underlying file system rejects the attempt</p>
- <code>OutOfSpace</code> <p>if the file system is out of storage space</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | [<code>Folder</code>](#Folder) |  | <p>the folder to which to copy this entry</p> |
| options | <code>\*</code> |  |  |
| [options.overwrite] | <code>boolean</code> | <code>false</code> | <p>if <code>true</code>, allows overwriting existing entries</p> |

**Example**
```js
await someFile.copyTo(someFolder);
```
**Example**
```js
await someFile.copyTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.copyTo(anotherFolder, {overwrite: true});
```
<a name="Entry+moveTo"></a>

### entry.moveTo(folder, options)
<p>Moves this entry to the target folder, optionally specifying a new name.</p>

**Kind**: instance method of [<code>Entry</code>](#Entry)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | [<code>Folder</code>](#Folder) |  | <p>the folder to which to move this entry</p> |
| options | <code>\*</code> |  |  |
| [options.overwrite] | <code>boolean</code> | <code>false</code> | <p>If <code>true</code> allows the move to overwrite existing files</p> |
| [options.newName] | <code>string</code> |  | <p>If specified, the entry is renamed to this name</p> |

**Example**
```js
await someFile.moveTo(someFolder);
```
**Example**
```js
await someFile.moveTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.moveTo(anotherFolder, {overwrite: true});
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
```
<a name="Entry+delete"></a>

### entry.delete()
<p>Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.</p>

**Kind**: instance method of [<code>Entry</code>](#Entry)
**Example**
```js
await aFile.delete();
```
<a name="Entry+getMetadata"></a>

### entry.getMetadata() ⇒ [<code>Promise.&lt;EntryMetadata&gt;</code>](#EntryMetadata)
<p>Returns this entry's metadata.</p>

**Kind**: instance method of [<code>Entry</code>](#Entry)
**Example**
```js
const metadata = aFile.getMetadata();
```
<a name="EntryMetadata"></a>

## EntryMetadata
<p>Metadata for an entry. It includes useful information such as:</p>
<ul>
<li>size of the file (if a file)</li>
<li>date created</li>
<li>date modified</li>
<li>name</li>
</ul>
<p>You'll not instantiate this directly; use [getMetadata](#Entry+getMetadata) to do so.</p>

**Kind**: global class

* [EntryMetadata](#EntryMetadata)
    * [.name](#EntryMetadata+name) : <code>string</code>
    * [.size](#EntryMetadata+size) : <code>number</code>
    * [.dateCreated](#EntryMetadata+dateCreated) : <code>Date</code>
    * [.dateModified](#EntryMetadata+dateModified) : <code>Date</code>
    * [.isFile](#EntryMetadata+isFile) : <code>boolean</code>
    * [.isFolder](#EntryMetadata+isFolder) : <code>boolean</code>

<a name="EntryMetadata+name"></a>

### entryMetadata.name : <code>string</code>
<p>The name of the entry.</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="EntryMetadata+size"></a>

### entryMetadata.size : <code>number</code>
<p>The size of the entry, if a file. Zero if a folder.</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="EntryMetadata+dateCreated"></a>

### entryMetadata.dateCreated : <code>Date</code>
<p>The date this entry was created.</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="EntryMetadata+dateModified"></a>

### entryMetadata.dateModified : <code>Date</code>
<p>The date this entry was modified.</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="EntryMetadata+isFile"></a>

### entryMetadata.isFile : <code>boolean</code>
<p>Indicates if the entry is a file</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="EntryMetadata+isFolder"></a>

### entryMetadata.isFolder : <code>boolean</code>
<p>Indicates if the entry is a folder</p>

**Kind**: instance property of [<code>EntryMetadata</code>](#EntryMetadata)
<a name="AbstractMethodInvocationError"></a>

## AbstractMethodInvocationError ⇐ <code>Error</code>
<p>Attempted to invoke an abstract method.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="ProviderMismatchError"></a>

## ProviderMismatchError ⇐ <code>Error</code>
<p>Attempted to execute a command that required the providers of all
entries to match.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="EntryIsNotAnEntryError"></a>

## EntryIsNotAnEntryError ⇐ <code>Error</code>
<p>The object passed as an entry is not actually an <code>Entry</code>.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="EntryIsNotAFolderError"></a>

## EntryIsNotAFolderError ⇐ <code>Error</code>
<p>The entry is not a folder, but was expected to be a folder.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="EntryIsNotAFileError"></a>

## EntryIsNotAFileError ⇐ <code>Error</code>
<p>The entry is not a file, but was expected to be.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="NotAFileSystemError"></a>

## NotAFileSystemError ⇐ <code>Error</code>
<p>The instance was expected to be a file system, but wasn't.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="OutOfSpaceError"></a>

## OutOfSpaceError ⇐ <code>Error</code>
<p>The file system is out of space (or quota has been exceeded)</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="PermissionDeniedError"></a>

## PermissionDeniedError ⇐ <code>Error</code>
<p>The file system revoked permission to complete the requested
action.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="EntryExistsError"></a>

## EntryExistsError ⇐ <code>Error</code>
<p>An attempt was made to overwrite an entry without indicating
that it was safe to do so via <code>overwrite: true</code>.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="FileIsReadOnlyError"></a>

## FileIsReadOnlyError ⇐ <code>Error</code>
<p>An attempt was made to write to a file that was opened as
read-only.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="DomainNotSupportedError"></a>

## DomainNotSupportedError ⇐ <code>Error</code>
<p>Domain is not supported by the current FileSystemProvider
instance.</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="InvalidFileNameError"></a>

## InvalidFileNameError ⇐ <code>Error</code>
<p>The file name contains invalid characters</p>

**Kind**: global class
**Extends**: <code>Error</code>
<a name="File"></a>

## File
<p>Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a <code>File</code> directly; instead
you'll get access via a [FileSystemProvider](#FileSystemProvider).</p>

**Kind**: global class

* [File](#File)
    * _instance_
        * [.isFile](#File+isFile)
        * [.mode](#File+mode) : <code>Symbol</code>
        * [.read(options)](#File+read) ⇒ <code>Promise.&lt;(string\|ArrayBuffer)&gt;</code>
        * [.write(data, options)](#File+write)
    * _static_
        * [.isFile(entry)](#File.isFile) ⇒ <code>boolean</code>

<a name="File+isFile"></a>

### file.isFile
<p>Indicates that this instance is a file.</p>

**Kind**: instance property of [<code>File</code>](#File)
**Example**
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```
<a name="File+mode"></a>

### file.mode : <code>Symbol</code>
<p>Indicates whether this file is read-only or read-write. See [readOnly](readOnly) and [readWrite](readWrite).</p>

**Kind**: instance property of [<code>File</code>](#File)
**Example**
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```
<a name="File+read"></a>

### file.read(options) ⇒ <code>Promise.&lt;(string\|ArrayBuffer)&gt;</code>
<p>Reads data from the file and returns it. The file format can be specified
with the <code>format</code> option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.</p>

**Kind**: instance method of [<code>File</code>](#File)
**Returns**: <code>Promise.&lt;(string\|ArrayBuffer)&gt;</code> - <p>the contents of the file</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>any</code> |  |  |
| [options.format] | <code>Symbol</code> | <code>formats.utf8</code> | <p>The format of the file; see [utf8](utf8) and [blob](blob).</p> |

**Example**
```js
const text = await myNovel.read();
```
**Example**
```js
const data = await myNovel.read({format: formats.blob});
```
<a name="File+write"></a>

### file.write(data, options)
<p>Writes data to a file, appending if desired. The format of the file
is controlled via the <code>format</code> option, and defaults to UTF8.</p>

**Kind**: instance method of [<code>File</code>](#File)
**Throws**:

- <code>FileIsReadOnly</code> <p>if writing to a read-only file</p>
- <code>OutOfSpace</code> <p>If writing to the file causes the file system to exceed the available space (or quota)</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>string</code> \| <code>ArrayBuffer</code> |  | <p>the data to write to the file</p> |
| options | <code>any</code> |  |  |
| [options.format] | <code>Symbol</code> | <code>formats.utf8</code> | <p>the format of the file; see [utf8](utf8) and [blob](blob)</p> |
| [options.append] | <code>boolean</code> | <code>false</code> | <p>if <code>true</code>, the data is written to the end of the file</p> |

**Example**
```js
await myNovel.write("It was a dark and stormy night.\n");
await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
```
**Example**
```js
const data = new ArrayBuffer();
await aDataFile.write(data, {format: formats.blob});
```
<a name="File.isFile"></a>

### File.isFile(entry) ⇒ <code>boolean</code>
<p>Determines if the entry is a file or not. This is safe to use even if the
entry is <code>null</code> or <code>undefined</code>.</p>

**Kind**: static method of [<code>File</code>](#File)
**Returns**: <code>boolean</code> - <p>if <code>true</code>, the entry is a file.</p>

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>any</code> | <p>the entry to check</p> |


<a name="Folder"></a>

## Folder ⇐ [<code>Entry</code>](#Entry)
<p>Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [getTemporaryFolder](#FileSystemProvider+getTemporaryFolder),
[getFolder](#FileSystemProvider+getFolder), or via [getEntries](#Folder+getEntries).</p>

**Kind**: global class
**Extends**: [<code>Entry</code>](#Entry)

* [Folder](#Folder) ⇐ [<code>Entry</code>](#Entry)
    * _instance_
        * [.isFolder](#Folder+isFolder)
        * [.isEntry](#Entry+isEntry)
        * [.isFile](#Entry+isFile)
        * [.name](#Entry+name) : <code>string</code>
        * [.provider](#Entry+provider) : [<code>FileSystemProvider</code>](#FileSystemProvider)
        * [.getEntries()](#Folder+getEntries) ⇒ [<code>Array.&lt;Entry&gt;</code>](#Entry)
        * [.createEntry(name, options)](#Folder+createEntry) ⇒ [<code>File</code>](#File) \| [<code>Folder</code>](#Folder)
        * [.getEntry(filePath)](#Folder+getEntry) ⇒ [<code>File</code>](#File) \| [<code>Folder</code>](#Folder)
        * [.renameEntry(entry, newName, options)](#Folder+renameEntry)
        * [.copyTo(folder, options)](#Entry+copyTo)
        * [.moveTo(folder, options)](#Entry+moveTo)
        * [.delete()](#Entry+delete)
        * [.getMetadata()](#Entry+getMetadata) ⇒ [<code>Promise.&lt;EntryMetadata&gt;</code>](#EntryMetadata)
    * _static_
        * [.isFolder(entry)](#Folder.isFolder) ⇒ <code>boolean</code>

<a name="Folder+isFolder"></a>

### folder.isFolder
<p>Indicates that this instance is a folder. Useful for type checking.</p>

**Kind**: instance property of [<code>Folder</code>](#Folder)
**Overrides**: [<code>isFolder</code>](#Entry+isFolder)
<a name="Entry+isEntry"></a>

### folder.isEntry
<p>Indicates that this instance is an <code>Entry</code>. Useful for type-checking.</p>

**Kind**: instance property of [<code>Folder</code>](#Folder)
**Example**
```js
if (something.isEntry) {
    return something.getMetadata();
}
```
<a name="Entry+isFile"></a>

### folder.isFile
<p>Indicates that this instance is <strong>not</strong> a <code>File</code>. Useful for type-
checking.</p>

**Kind**: instance property of [<code>Folder</code>](#Folder)
**Example**
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```
<a name="Entry+name"></a>

### folder.name : <code>string</code>
<p>The name of this entry. Read-only.</p>

**Kind**: instance property of [<code>Folder</code>](#Folder)
**Read only**: true
**Example**
```js
console.log(anEntry.name);
```
<a name="Entry+provider"></a>

### folder.provider : [<code>FileSystemProvider</code>](#FileSystemProvider)
<p>The associated provider that services this entry. Read-only.</p>

**Kind**: instance property of [<code>Folder</code>](#Folder)
**Read only**: true
**Example**
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```
<a name="Folder+getEntries"></a>

### folder.getEntries() ⇒ [<code>Array.&lt;Entry&gt;</code>](#Entry)
<p>Returns an array of entries contained within this folder.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Returns**: [<code>Array.&lt;Entry&gt;</code>](#Entry) - <p>The entries within the folder.</p>
**Example**
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```
<a name="Folder+createEntry"></a>

### folder.createEntry(name, options) ⇒ [<code>File</code>](#File) \| [<code>Folder</code>](#Folder)
<p>Creates an entry within this folder and returns the appropriate instance.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Returns**: [<code>File</code>](#File) \| [<code>Folder</code>](#Folder) - <p>the created entry</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | <p>the name of the entry to create</p> |
| options | <code>any</code> |  |  |
| [options.type] | <code>Symbol</code> | <code>types.file</code> | <p>Indicates which kind of entry to create. Pass [folder](folder) to create a new folder.</p> |
| [options.overwite] | <code>boolean</code> | <code>false</code> | <p>If <code>true</code>, the create attempt can overwrite an existing file</p> |

**Example**
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**
```js
const catImageCollection = await aFolder.createEntry("cats", {type = types.folder});
```
<a name="Folder+getEntry"></a>

### folder.getEntry(filePath) ⇒ [<code>File</code>](#File) \| [<code>Folder</code>](#Folder)
<p>Gets an entry from within this folder and returns the appropriate instance.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Returns**: [<code>File</code>](#File) \| [<code>Folder</code>](#Folder) - <p>the fetched entry.</p>

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | <p>the name/path of the entry to fetch</p> |

**Example**
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```
<a name="Folder+renameEntry"></a>

### folder.renameEntry(entry, newName, options)
<p>Renames an entry to a new name.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | [<code>Entry</code>](#Entry) |  | <p>the entry to rename</p> |
| newName | <code>string</code> |  | <p>the new name to assign</p> |
| options | <code>any</code> |  |  |
| [options.overwrite] | <code>boolean</code> | <code>false</code> | <p>if <code>true</code>, renaming can overwrite an existing entry</p> |

**Example**
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```
<a name="Entry+copyTo"></a>

### folder.copyTo(folder, options)
<p>Copies this entry to the specified <code>folder</code>.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Throws**:

- <code>EntryExists</code> <p>if the attempt would overwrite an entry and <code>overwrite</code> is <code>false</code></p>
- <code>PermissionDenied</code> <p>if the underlying file system rejects the attempt</p>
- <code>OutOfSpace</code> <p>if the file system is out of storage space</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | [<code>Folder</code>](#Folder) |  | <p>the folder to which to copy this entry</p> |
| options | <code>\*</code> |  |  |
| [options.overwrite] | <code>boolean</code> | <code>false</code> | <p>if <code>true</code>, allows overwriting existing entries</p> |

**Example**
```js
await someFile.copyTo(someFolder);
```
**Example**
```js
await someFile.copyTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.copyTo(anotherFolder, {overwrite: true});
```
<a name="Entry+moveTo"></a>

### folder.moveTo(folder, options)
<p>Moves this entry to the target folder, optionally specifying a new name.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | [<code>Folder</code>](#Folder) |  | <p>the folder to which to move this entry</p> |
| options | <code>\*</code> |  |  |
| [options.overwrite] | <code>boolean</code> | <code>false</code> | <p>If <code>true</code> allows the move to overwrite existing files</p> |
| [options.newName] | <code>string</code> |  | <p>If specified, the entry is renamed to this name</p> |

**Example**
```js
await someFile.moveTo(someFolder);
```
**Example**
```js
await someFile.moveTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.moveTo(anotherFolder, {overwrite: true});
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
```
<a name="Entry+delete"></a>

### folder.delete()
<p>Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Example**
```js
await aFile.delete();
```
<a name="Entry+getMetadata"></a>

### folder.getMetadata() ⇒ [<code>Promise.&lt;EntryMetadata&gt;</code>](#EntryMetadata)
<p>Returns this entry's metadata.</p>

**Kind**: instance method of [<code>Folder</code>](#Folder)
**Example**
```js
const metadata = aFile.getMetadata();
```
<a name="Folder.isFolder"></a>

### Folder.isFolder(entry) ⇒ <code>boolean</code>
<p>Checks if an entry is a folder. Safe to use if entry might be <code>null</code> or
<code>undefined</code>. Useful for type checking.</p>

**Kind**: static method of [<code>Folder</code>](#Folder)
**Returns**: <code>boolean</code> - <p>if <code>true</code>, the entry is a folder</p>

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>any</code> | <p>the entry to check</p> |

