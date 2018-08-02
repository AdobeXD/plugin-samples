
<a name="module-storage" id="module-storage"></a>

## storage

* [storage](#module-storage)
    * [.Entry](#module-storage-entry)
        * [new Entry(name, provider, id)](#new-module-storage-entry-new)
        * [.isEntry](#module-storage-entry-isentry) : `boolean`
        * [.isFile](#module-storage-entry-isfile) : `boolean`
        * [.isFolder](#module-storage-entry-isfolder) : `boolean`
        * [.name](#module-storage-entry-name) : `string`
        * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
        * [.url](#module-storage-entry-url) : `string`
        * [.nativePath](#module-storage-entry-nativepath) : `string`
        * [.copyTo(folder, options)](#module-storage-entry-copyto)
        * [.moveTo(folder, options)](#module-storage-entry-moveto)
        * [.delete()](#module-storage-entry-delete)
        * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`
    * [.EntryMetadata](#module-storage-entrymetadata)
        * [.name](#module-storage-entrymetadata-name) : `string`
        * [.size](#module-storage-entrymetadata-size) : `number`
        * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
        * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
        * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
        * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`
    * [.File](#module-storage-file)
        * _instance_
            * [.isFile](#module-storage-file-isfile)
            * [.mode](#module-storage-file-mode) : `Symbol`
            * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
            * [.write(data, options)](#module-storage-file-write)
        * _static_
            * [.isFile(entry)](#module-storage-file-isfile) ⇒ `boolean`
    * [.FileSystemProvider](#module-storage-filesystemprovider)
        * _instance_
            * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
            * [.supportedDomains](#module-storage-filesystemprovider-supporteddomains)
            * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `Array.<File>`
            * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `File`
            * [.getFolder(options)](#module-storage-filesystemprovider-getfolder) ⇒ `Folder`
            * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
            * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
            * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
            * [.getFsUrl()](#module-storage-filesystemprovider-getfsurl)
            * [.getNativePath()](#module-storage-filesystemprovider-getnativepath)
        * _static_
            * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider) ⇒ `boolean`
    * [.Folder](#module-storage-folder) ⇐ `Entry`
        * _instance_
            * [.isFolder](#module-storage-folder-isfolder)
            * [.getEntries()](#module-storage-folder-getentries) ⇒ `Array.<Entry>`
            * [.createEntry(name, options)](#module-storage-folder-createentry) ⇒ `File` \| `Folder`
            * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `File` \| `Folder`
            * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
        * _static_
            * [.isFolder(entry)](#module-storage-folder-isfolder) ⇒ `boolean`
    * [.localFileSystem](#module-storage-localfilesystem) : `LocalFileSystemProvider`
    * [.errors](#module-storage-errors) : `Errors`
        * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
        * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
        * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
        * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
        * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
        * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
        * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
        * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
        * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
        * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
        * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
        * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`
    * [.domains](#module-storage-domains)
        * [.userDesktop](#module-storage-domains-userdesktop) : `Symbol`
        * [.userDocuments](#module-storage-domains-userdocuments) : `Symbol`
        * [.userPictures](#module-storage-domains-userpictures) : `Symbol`
        * [.userVideos](#module-storage-domains-uservideos) : `Symbol`
        * [.userMusic](#module-storage-domains-usermusic) : `Symbol`
        * [.appLocalData](#module-storage-domains-applocaldata) : `Symbol`
        * [.appLocalLibrary](#module-storage-domains-applocallibrary) : `Symbol`
        * [.appLocalCache](#module-storage-domains-applocalcache) : `Symbol`
        * [.appLocalShared](#module-storage-domains-applocalshared) : `Symbol`
        * [.appLocalTemporary](#module-storage-domains-applocaltemporary) : `Symbol`
        * [.appRoamingData](#module-storage-domains-approamingdata) : `Symbol`
        * [.appRoamingLibrary](#module-storage-domains-approaminglibrary) : `Symbol`
    * [.fileTypes](#module-storage-filetypes)
        * [.text](#module-storage-filetypes-text)
        * [.images](#module-storage-filetypes-images)
        * [.all](#module-storage-filetypes-all)
    * [.formats](#module-storage-formats)
        * [.utf8](#module-storage-formats-utf8) : `Symbol`
        * [.binary](#module-storage-formats-binary) : `Symbol`
    * [.modes](#module-storage-modes)
        * [.readOnly](#module-storage-modes-readonly) : `Symbol`
        * [.readWrite](#module-storage-modes-readwrite) : `Symbol`
    * [.types](#module-storage-types)
        * [.file](#module-storage-types-file) : `Symbol`
        * [.folder](#module-storage-types-folder) : `Symbol`


<a name="module-storage-entry" id="module-storage-entry"></a>

### storage.Entry
An `Entry` is the base class for `File` and `Folder`. You'll
typically never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.

**Kind**: static class of [`storage`](#module-storage)  

* [.Entry](#module-storage-entry)
    * [new Entry(name, provider, id)](#new-module-storage-entry-new)
    * [.isEntry](#module-storage-entry-isentry) : `boolean`
    * [.isFile](#module-storage-entry-isfile) : `boolean`
    * [.isFolder](#module-storage-entry-isfolder) : `boolean`
    * [.name](#module-storage-entry-name) : `string`
    * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
    * [.url](#module-storage-entry-url) : `string`
    * [.nativePath](#module-storage-entry-nativepath) : `string`
    * [.copyTo(folder, options)](#module-storage-entry-copyto)
    * [.moveTo(folder, options)](#module-storage-entry-moveto)
    * [.delete()](#module-storage-entry-delete)
    * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`


<a name="new-module-storage-entry-new" id="new-module-storage-entry-new"></a>

#### new Entry(name, provider, id)
Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `\*` | 
| provider | `\*` | 
| id | `\*` | 


<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

#### entry.isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```

<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

#### entry.isFile : `boolean`
Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```

<a name="module-storage-entry-isfolder" id="module-storage-entry-isfolder"></a>

#### entry.isFolder : `boolean`
Indicates that this instance is **not** a folder. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```

<a name="module-storage-entry-name" id="module-storage-entry-name"></a>

#### entry.name : `string`
The name of this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.name);
```

<a name="module-storage-entry-provider" id="module-storage-entry-provider"></a>

#### entry.provider : `FileSystemProvider`
The associated provider that services this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```

<a name="module-storage-entry-url" id="module-storage-entry-url"></a>

#### entry.url : `string`
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.url);
```

<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

#### entry.nativePath : `string`
The platform native file-system path of this entry. Read-only

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.nativePath);
```

<a name="module-storage-entry-copyto" id="module-storage-entry-copyto"></a>

#### entry.copyTo(folder, options)
Copies this entry to the specified `folder`.

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `\*` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | if `true`, allows overwriting existing entries |

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

<a name="module-storage-entry-moveto" id="module-storage-entry-moveto"></a>

#### entry.moveTo(folder, options)
Moves this entry to the target folder, optionally specifying a new name.

**Kind**: instance method of [`Entry`](#module-storage-entry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `\*` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | If `true` allows the move to overwrite existing files |
| [options.newName] | `string` |  | If specified, the entry is renamed to this name |

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

<a name="module-storage-entry-delete" id="module-storage-entry-delete"></a>

#### entry.delete()
Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Example**  
```js
await aFile.delete();
```

<a name="module-storage-entry-getmetadata" id="module-storage-entry-getmetadata"></a>

#### entry.getMetadata() ⇒ `Promise.<EntryMetadata>`
Returns this entry's metadata.

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Example**  
```js
const metadata = aFile.getMetadata();
```

<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

### storage.EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](#module-storage-entry-getmetadata) to do so.

**Kind**: static class of [`storage`](#module-storage)  

* [.EntryMetadata](#module-storage-entrymetadata)
    * [.name](#module-storage-entrymetadata-name) : `string`
    * [.size](#module-storage-entrymetadata-size) : `number`
    * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
    * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
    * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
    * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`


<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

#### entryMetadata.name : `string`
The name of the entry.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-size" id="module-storage-entrymetadata-size"></a>

#### entryMetadata.size : `number`
The size of the entry, if a file. Zero if a folder.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-datecreated" id="module-storage-entrymetadata-datecreated"></a>

#### entryMetadata.dateCreated : `Date`
The date this entry was created.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-datemodified" id="module-storage-entrymetadata-datemodified"></a>

#### entryMetadata.dateModified : `Date`
The date this entry was modified.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-isfile" id="module-storage-entrymetadata-isfile"></a>

#### entryMetadata.isFile : `boolean`
Indicates if the entry is a file

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

#### entryMetadata.isFolder : `boolean`
Indicates if the entry is a folder

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-file" id="module-storage-file"></a>

### storage.File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [FileSystemProvider](#module-storage-filesystemprovider).

**Kind**: static class of [`storage`](#module-storage)  

* [.File](#module-storage-file)
    * _instance_
        * [.isFile](#module-storage-file-isfile)
        * [.mode](#module-storage-file-mode) : `Symbol`
        * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
        * [.write(data, options)](#module-storage-file-write)
    * _static_
        * [.isFile(entry)](#module-storage-file-isfile) ⇒ `boolean`


<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### file.isFile
Indicates that this instance is a file.

**Kind**: instance property of [`File`](#module-storage-file)  
**Example**  
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```

<a name="module-storage-file-mode" id="module-storage-file-mode"></a>

#### file.mode : `Symbol`
Indicates whether this file is read-only or read-write. See [readOnly](readOnly) and [readWrite](readWrite).

**Kind**: instance property of [`File`](#module-storage-file)  
**Example**  
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```

<a name="module-storage-file-read" id="module-storage-file-read"></a>

#### file.read(options) ⇒ `Promise.<(string\|ArrayBuffer)>`
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Kind**: instance method of [`File`](#module-storage-file)  
**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | The format of the file; see [utf8](utf8) and [blob](blob). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.blob});
```

<a name="module-storage-file-write" id="module-storage-file-write"></a>

#### file.write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Kind**: instance method of [`File`](#module-storage-file)  
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | the format of the file; see [utf8](utf8) and [blob](blob) |
| [options.append] | `boolean` | <code>false</code> | if `true`, the data is written to the end of the file |

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

<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### File.isFile(entry) ⇒ `boolean`
Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Kind**: static method of [`File`](#module-storage-file)  
**Returns**: `boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


<a name="module-storage-filesystemprovider" id="module-storage-filesystemprovider"></a>

### storage.FileSystemProvider
Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you. This class is abstract, meaning that you'll
need to provide your own implementation in order to use it effectively.

**Kind**: static class of [`storage`](#module-storage)  

* [.FileSystemProvider](#module-storage-filesystemprovider)
    * _instance_
        * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
        * [.supportedDomains](#module-storage-filesystemprovider-supporteddomains)
        * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `Array.<File>`
        * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `File`
        * [.getFolder(options)](#module-storage-filesystemprovider-getfolder) ⇒ `Folder`
        * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
        * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
        * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
        * [.getFsUrl()](#module-storage-filesystemprovider-getfsurl)
        * [.getNativePath()](#module-storage-filesystemprovider-getnativepath)
    * _static_
        * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider) ⇒ `boolean`


<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### fileSystemProvider.isFileSystemProvider
Indicates that this is a `FileSystemProvider`. Useful for type-checking.

**Kind**: instance property of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-supporteddomains" id="module-storage-filesystemprovider-supporteddomains"></a>

#### fileSystemProvider.supportedDomains
An array of the domains this file system supports. If the file system can
open a file picker to the user's `documents` folder, for example, then
[userDocuments](userDocuments) will be in this list.

**Kind**: instance property of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```

<a name="module-storage-filesystemprovider-getfileforopening" id="module-storage-filesystemprovider-getfileforopening"></a>

#### fileSystemProvider.getFileForOpening(options) ⇒ `Array.<File>`
Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `Array.<File>` - returns the selected files, or empty if no file were selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `\*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | <code>[&#x27;.*&#x27;]</code> | the allowed file types |
| [options.allowMultiple] | `boolean` | <code>false</code> | if true, multiple files can be returned (as an array) |

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

<a name="module-storage-filesystemprovider-getfileforsaving" id="module-storage-filesystemprovider-getfileforsaving"></a>

#### fileSystemProvider.getFileForSaving(options) ⇒ `File`
Gets a file reference suitable for saving. The file is read-write. Any
file picker displayed will be of the "save" variety.

If the user attempts to save a file that doesn't exist, the file is
created automatically.

If the act of writing to the file would overwrite it, the file picker
should prompt the user if they are OK with that action. If not, the file
should not be returned.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `File` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `\*` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const [file] = await fs.getFileForSaving({initialDomain = domains.userDocuments});
if (!file) {
    // no file selected, or the user didn't want to overwrite one they did select
    return;
}
await file.write("It was a dark and stormy night");
```

<a name="module-storage-filesystemprovider-getfolder" id="module-storage-filesystemprovider-getfolder"></a>

#### fileSystemProvider.getFolder(options) ⇒ `Folder`
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](Folder#getEntries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `Folder` - the selected folder or `null` if no folder is selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const folder = await fs.getFolder();
const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
const text = await myNovel.read();
```

<a name="module-storage-filesystemprovider-gettemporaryfolder" id="module-storage-filesystemprovider-gettemporaryfolder"></a>

#### fileSystemProvider.getTemporaryFolder()
Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Example**  
```js
const temp = await fs.getTemporaryFolder();
```

<a name="module-storage-filesystemprovider-getdatafolder" id="module-storage-filesystemprovider-getdatafolder"></a>

#### fileSystemProvider.getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-getpluginfolder" id="module-storage-filesystemprovider-getpluginfolder"></a>

#### fileSystemProvider.getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-getfsurl" id="module-storage-filesystemprovider-getfsurl"></a>

#### fileSystemProvider.getFsUrl()
Returns the fs url of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Access**: public  

<a name="module-storage-filesystemprovider-getnativepath" id="module-storage-filesystemprovider-getnativepath"></a>

#### fileSystemProvider.getNativePath()
Returns the platform native file system path of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Access**: public  

<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### FileSystemProvider.isFileSystemProvider(fs) ⇒ `boolean`
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Kind**: static method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |


<a name="module-storage-folder" id="module-storage-folder"></a>

### storage.Folder ⇐ `Entry`
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider#getTemporaryFolder](FileSystemProvider#getTemporaryFolder),
[FileSystemProvider#getFolder](FileSystemProvider#getFolder), or via [Folder#getEntries](Folder#getEntries).

**Kind**: static class of [`storage`](#module-storage)  
**Extends**: `Entry`  

* [.Folder](#module-storage-folder) ⇐ `Entry`
    * _instance_
        * [.isFolder](#module-storage-folder-isfolder)
        * [.getEntries()](#module-storage-folder-getentries) ⇒ `Array.<Entry>`
        * [.createEntry(name, options)](#module-storage-folder-createentry) ⇒ `File` \| `Folder`
        * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `File` \| `Folder`
        * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
    * _static_
        * [.isFolder(entry)](#module-storage-folder-isfolder) ⇒ `boolean`


<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

#### folder.isFolder
Indicates that this instance is a folder. Useful for type checking.

**Kind**: instance property of [`Folder`](#module-storage-folder)  

<a name="module-storage-folder-getentries" id="module-storage-folder-getentries"></a>

#### folder.getEntries() ⇒ `Array.<Entry>`
Returns an array of entries contained within this folder.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `Array.<Entry>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```

<a name="module-storage-folder-createentry" id="module-storage-folder-createentry"></a>

#### folder.createEntry(name, options) ⇒ `File` \| `Folder`
Creates an entry within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `File` \| `Folder` - the created entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the entry to create |
| options | `any` |  |  |
| [options.type] | `Symbol` | <code>types.file</code> | Indicates which kind of entry to create. Pass [folder](folder) to create a new folder. |
| [options.overwite] | `boolean` | <code>false</code> | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**  
```js
const catImageCollection = await aFolder.createEntry("cats", {type = types.folder});
```

<a name="module-storage-folder-getentry" id="module-storage-folder-getentry"></a>

#### folder.getEntry(filePath) ⇒ `File` \| `Folder`
Gets an entry from within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `File` \| `Folder` - the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```

<a name="module-storage-folder-renameentry" id="module-storage-folder-renameentry"></a>

#### folder.renameEntry(entry, newName, options)
Renames an entry to a new name.

**Kind**: instance method of [`Folder`](#module-storage-folder)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | the entry to rename |
| newName | `string` |  | the new name to assign |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | if `true`, renaming can overwrite an existing entry |

**Example**  
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```

<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

#### Folder.isFolder(entry) ⇒ `boolean`
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Kind**: static method of [`Folder`](#module-storage-folder)  
**Returns**: `boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


<a name="module-storage-localfilesystem" id="module-storage-localfilesystem"></a>

### storage.localFileSystem : `LocalFileSystemProvider`
**Kind**: static property of [`storage`](#module-storage)  

<a name="module-storage-errors" id="module-storage-errors"></a>

### storage.errors : `Errors`
**Kind**: static property of [`storage`](#module-storage)  

* [.errors](#module-storage-errors) : `Errors`
    * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
    * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
    * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
    * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
    * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
    * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
    * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
    * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
    * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
    * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
    * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
    * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`


<a name="module-storage-errors-abstractmethodinvocationerror" id="module-storage-errors-abstractmethodinvocationerror"></a>

#### errors.AbstractMethodInvocationError ⇐ `Error`
Attempted to invoke an abstract method.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-providermismatcherror" id="module-storage-errors-providermismatcherror"></a>

#### errors.ProviderMismatchError ⇐ `Error`
Attempted to execute a command that required the providers of all
entries to match.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotanentryerror" id="module-storage-errors-entryisnotanentryerror"></a>

#### errors.EntryIsNotAnEntryError ⇐ `Error`
The object passed as an entry is not actually an `Entry`.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotafoldererror" id="module-storage-errors-entryisnotafoldererror"></a>

#### errors.EntryIsNotAFolderError ⇐ `Error`
The entry is not a folder, but was expected to be a folder.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotafileerror" id="module-storage-errors-entryisnotafileerror"></a>

#### errors.EntryIsNotAFileError ⇐ `Error`
The entry is not a file, but was expected to be.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-notafilesystemerror" id="module-storage-errors-notafilesystemerror"></a>

#### errors.NotAFileSystemError ⇐ `Error`
The instance was expected to be a file system, but wasn't.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-outofspaceerror" id="module-storage-errors-outofspaceerror"></a>

#### errors.OutOfSpaceError ⇐ `Error`
The file system is out of space (or quota has been exceeded)

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-permissiondeniederror" id="module-storage-errors-permissiondeniederror"></a>

#### errors.PermissionDeniedError ⇐ `Error`
The file system revoked permission to complete the requested
action.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryexistserror" id="module-storage-errors-entryexistserror"></a>

#### errors.EntryExistsError ⇐ `Error`
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-fileisreadonlyerror" id="module-storage-errors-fileisreadonlyerror"></a>

#### errors.FileIsReadOnlyError ⇐ `Error`
An attempt was made to write to a file that was opened as
read-only.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-domainnotsupportederror" id="module-storage-errors-domainnotsupportederror"></a>

#### errors.DomainNotSupportedError ⇐ `Error`
Domain is not supported by the current FileSystemProvider
instance.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-invalidfilenameerror" id="module-storage-errors-invalidfilenameerror"></a>

#### errors.InvalidFileNameError ⇐ `Error`
The file name contains invalid characters

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-domains" id="module-storage-domains"></a>

### storage.domains
Common locations that we can use when displaying a file picker.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.domains](#module-storage-domains)
    * [.userDesktop](#module-storage-domains-userdesktop) : `Symbol`
    * [.userDocuments](#module-storage-domains-userdocuments) : `Symbol`
    * [.userPictures](#module-storage-domains-userpictures) : `Symbol`
    * [.userVideos](#module-storage-domains-uservideos) : `Symbol`
    * [.userMusic](#module-storage-domains-usermusic) : `Symbol`
    * [.appLocalData](#module-storage-domains-applocaldata) : `Symbol`
    * [.appLocalLibrary](#module-storage-domains-applocallibrary) : `Symbol`
    * [.appLocalCache](#module-storage-domains-applocalcache) : `Symbol`
    * [.appLocalShared](#module-storage-domains-applocalshared) : `Symbol`
    * [.appLocalTemporary](#module-storage-domains-applocaltemporary) : `Symbol`
    * [.appRoamingData](#module-storage-domains-approamingdata) : `Symbol`
    * [.appRoamingLibrary](#module-storage-domains-approaminglibrary) : `Symbol`


<a name="module-storage-domains-userdesktop" id="module-storage-domains-userdesktop"></a>

#### domains.userDesktop : `Symbol`
The user's desktop folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-userdocuments" id="module-storage-domains-userdocuments"></a>

#### domains.userDocuments : `Symbol`
The user's documents folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-userpictures" id="module-storage-domains-userpictures"></a>

#### domains.userPictures : `Symbol`
The user's pictures folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-uservideos" id="module-storage-domains-uservideos"></a>

#### domains.userVideos : `Symbol`
The user's videos / movies folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-usermusic" id="module-storage-domains-usermusic"></a>

#### domains.userMusic : `Symbol`
The user's music folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocaldata" id="module-storage-domains-applocaldata"></a>

#### domains.appLocalData : `Symbol`
Local application data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocallibrary" id="module-storage-domains-applocallibrary"></a>

#### domains.appLocalLibrary : `Symbol`
Local application library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocalcache" id="module-storage-domains-applocalcache"></a>

#### domains.appLocalCache : `Symbol`
Local application cache directory (persistence not guaranteed)

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocalshared" id="module-storage-domains-applocalshared"></a>

#### domains.appLocalShared : `Symbol`
Local application shared data folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocaltemporary" id="module-storage-domains-applocaltemporary"></a>

#### domains.appLocalTemporary : `Symbol`
Local temporary directory

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-approamingdata" id="module-storage-domains-approamingdata"></a>

#### domains.appRoamingData : `Symbol`
Roaming application data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-approaminglibrary" id="module-storage-domains-approaminglibrary"></a>

#### domains.appRoamingLibrary : `Symbol`
Roaming application library data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-filetypes" id="module-storage-filetypes"></a>

### storage.fileTypes
This namespace describes the various file type extensions that can used be used in some FS file open methods.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.fileTypes](#module-storage-filetypes)
    * [.text](#module-storage-filetypes-text)
    * [.images](#module-storage-filetypes-images)
    * [.all](#module-storage-filetypes-all)


<a name="module-storage-filetypes-text" id="module-storage-filetypes-text"></a>

#### fileTypes.text
Text file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-filetypes-images" id="module-storage-filetypes-images"></a>

#### fileTypes.images
Image file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-filetypes-all" id="module-storage-filetypes-all"></a>

#### fileTypes.all
All file types

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-formats" id="module-storage-formats"></a>

### storage.formats
This namespace describes the file content formats supported in FS methods like read and write.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.formats](#module-storage-formats)
    * [.utf8](#module-storage-formats-utf8) : `Symbol`
    * [.binary](#module-storage-formats-binary) : `Symbol`


<a name="module-storage-formats-utf8" id="module-storage-formats-utf8"></a>

#### formats.utf8 : `Symbol`
UTF8 File encoding

**Kind**: static property of [`formats`](#module-storage-formats)  

<a name="module-storage-formats-binary" id="module-storage-formats-binary"></a>

#### formats.binary : `Symbol`
Binary file encoding

**Kind**: static property of [`formats`](#module-storage-formats)  

<a name="module-storage-modes" id="module-storage-modes"></a>

### storage.modes
This namespace describes the file open modes. for eg: open file in read-only or both read-write

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.modes](#module-storage-modes)
    * [.readOnly](#module-storage-modes-readonly) : `Symbol`
    * [.readWrite](#module-storage-modes-readwrite) : `Symbol`


<a name="module-storage-modes-readonly" id="module-storage-modes-readonly"></a>

#### modes.readOnly : `Symbol`
The file is read-only; attempts to write will fail.

**Kind**: static property of [`modes`](#module-storage-modes)  

<a name="module-storage-modes-readwrite" id="module-storage-modes-readwrite"></a>

#### modes.readWrite : `Symbol`
The file is read-write.

**Kind**: static property of [`modes`](#module-storage-modes)  

<a name="module-storage-types" id="module-storage-types"></a>

### storage.types
This namespace describes the type of the entry. Whether file or folder etc.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.types](#module-storage-types)
    * [.file](#module-storage-types-file) : `Symbol`
    * [.folder](#module-storage-types-folder) : `Symbol`


<a name="module-storage-types-file" id="module-storage-types-file"></a>

#### types.file : `Symbol`
A file; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)  

<a name="module-storage-types-folder" id="module-storage-types-folder"></a>

#### types.folder : `Symbol`
A folder; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)  
