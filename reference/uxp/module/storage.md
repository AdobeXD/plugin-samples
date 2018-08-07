## storage
**Signature:** storage


* [storage](#)
    * [.Entry](#entry)
        * [new Entry(name, provider, id)](#new-entry-new)
        * [.isEntry](#entry-isentry) : `boolean`
        * [.isFile](#entry-isfile) : `boolean`
        * [.isFolder](#entry-isfolder) : `boolean`
        * [.name](#entry-name) : `string`
        * [.provider](#entry-provider) : `FileSystemProvider`
        * [.url](#entry-url) : `string`
        * [.nativePath](#entry-nativepath) : `string`
        * [.copyTo(folder, options)](#entry-copyto)
        * [.moveTo(folder, options)](#entry-moveto)
        * [.delete()](#entry-delete)
        * [.getMetadata()](#entry-getmetadata) ⇒ `Promise.<EntryMetadata>`
    * [.EntryMetadata](#entrymetadata)
        * [.name](#entrymetadata-name) : `string`
        * [.size](#entrymetadata-size) : `number`
        * [.dateCreated](#entrymetadata-datecreated) : `Date`
        * [.dateModified](#entrymetadata-datemodified) : `Date`
        * [.isFile](#entrymetadata-isfile) : `boolean`
        * [.isFolder](#entrymetadata-isfolder) : `boolean`
    * [.File](#file)
        * _instance_
            * [.isFile](#file-isfile)
            * [.mode](#file-mode) : `Symbol`
            * [.read(options)](#file-read) ⇒ `Promise.<(string|ArrayBuffer)>`
            * [.write(data, options)](#file-write)
        * _static_
            * [.isFile(entry)](#fileisfile) ⇒ `boolean`
    * [.FileSystemProvider](#filesystemprovider)
        * _instance_
            * [.isFileSystemProvider](#filesystemprovider-isfilesystemprovider)
            * [.supportedDomains](#filesystemprovider-supporteddomains)
            * [.getFileForOpening(options)](#filesystemprovider-getfileforopening) ⇒ `Array.<File>`
            * [.getFileForSaving(options)](#filesystemprovider-getfileforsaving) ⇒ `File`
            * [.getFolder(options)](#filesystemprovider-getfolder) ⇒ `Folder`
            * [.getTemporaryFolder()](#filesystemprovider-gettemporaryfolder)
            * [.getDataFolder()](#filesystemprovider-getdatafolder)
            * [.getPluginFolder()](#filesystemprovider-getpluginfolder)
            * [.getFsUrl()](#filesystemprovider-getfsurl)
            * [.getNativePath()](#filesystemprovider-getnativepath)
        * _static_
            * [.isFileSystemProvider(fs)](#filesystemproviderisfilesystemprovider) ⇒ `boolean`
    * [.Folder](#folder) ⇐ `Entry`
        * _instance_
            * [.isFolder](#folder-isfolder)
            * [.getEntries()](#folder-getentries) ⇒ `Array.<Entry>`
            * [.createEntry(name, options)](#folder-createentry) ⇒ `File` | `Folder`
            * [.getEntry(filePath)](#folder-getentry) ⇒ `File` | `Folder`
            * [.renameEntry(entry, newName, options)](#folder-renameentry)
        * _static_
            * [.isFolder(entry)](#folderisfolder) ⇒ `boolean`
    * [.localFileSystem](#localfilesystem) : `LocalFileSystemProvider`
    * [.errors](#errors) : `Errors`
        * [.AbstractMethodInvocationError](#errorsabstractmethodinvocationerror) ⇐ `Error`
        * [.ProviderMismatchError](#errorsprovidermismatcherror) ⇐ `Error`
        * [.EntryIsNotAnEntryError](#errorsentryisnotanentryerror) ⇐ `Error`
        * [.EntryIsNotAFolderError](#errorsentryisnotafoldererror) ⇐ `Error`
        * [.EntryIsNotAFileError](#errorsentryisnotafileerror) ⇐ `Error`
        * [.NotAFileSystemError](#errorsnotafilesystemerror) ⇐ `Error`
        * [.OutOfSpaceError](#errorsoutofspaceerror) ⇐ `Error`
        * [.PermissionDeniedError](#errorspermissiondeniederror) ⇐ `Error`
        * [.EntryExistsError](#errorsentryexistserror) ⇐ `Error`
        * [.FileIsReadOnlyError](#errorsfileisreadonlyerror) ⇐ `Error`
        * [.DomainNotSupportedError](#errorsdomainnotsupportederror) ⇐ `Error`
        * [.InvalidFileNameError](#errorsinvalidfilenameerror) ⇐ `Error`
    * [.domains](#domains)
        * [.userDesktop](#domainsuserdesktop) : `Symbol`
        * [.userDocuments](#domainsuserdocuments) : `Symbol`
        * [.userPictures](#domainsuserpictures) : `Symbol`
        * [.userVideos](#domainsuservideos) : `Symbol`
        * [.userMusic](#domainsusermusic) : `Symbol`
        * [.appLocalData](#domainsapplocaldata) : `Symbol`
        * [.appLocalLibrary](#domainsapplocallibrary) : `Symbol`
        * [.appLocalCache](#domainsapplocalcache) : `Symbol`
        * [.appLocalShared](#domainsapplocalshared) : `Symbol`
        * [.appLocalTemporary](#domainsapplocaltemporary) : `Symbol`
        * [.appRoamingData](#domainsapproamingdata) : `Symbol`
        * [.appRoamingLibrary](#domainsapproaminglibrary) : `Symbol`
    * [.fileTypes](#filetypes)
        * [.text](#filetypestext)
        * [.images](#filetypesimages)
        * [.all](#filetypesall)
    * [.formats](#formats)
        * [.utf8](#formatsutf8) : `Symbol`
        * [.binary](#formatsbinary) : `Symbol`
    * [.modes](#modes)
        * [.readOnly](#modesreadonly) : `Symbol`
        * [.readWrite](#modesreadwrite) : `Symbol`
    * [.types](#types)
        * [.file](#typesfile) : `Symbol`
        * [.folder](#typesfolder) : `Symbol`

### storage.Entry
**Signature:** storage.Entry

An `Entry` is the base class for `File` and `Folder`. You'll
typically never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.

**Kind**: static class of [`storage`](#)  

* [.Entry](#entry)
    * [new Entry(name, provider, id)](#new-entry-new)
    * [.isEntry](#entry-isentry) : `boolean`
    * [.isFile](#entry-isfile) : `boolean`
    * [.isFolder](#entry-isfolder) : `boolean`
    * [.name](#entry-name) : `string`
    * [.provider](#entry-provider) : `FileSystemProvider`
    * [.url](#entry-url) : `string`
    * [.nativePath](#entry-nativepath) : `string`
    * [.copyTo(folder, options)](#entry-copyto)
    * [.moveTo(folder, options)](#entry-moveto)
    * [.delete()](#entry-delete)
    * [.getMetadata()](#entry-getmetadata) ⇒ `Promise.<EntryMetadata>`

#### new Entry
**Signature:** new Entry(name, provider, id)

Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `*` | 
| provider | `*` | 
| id | `*` | 

#### entry.isEntry
**Signature:** entry.isEntry : `boolean`

Indicates that this instance is an `Entry`. Useful for type-checking.

**Kind**: instance property of [`Entry`](#entry)  
**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```
#### entry.isFile
**Signature:** entry.isFile : `boolean`

Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```
#### entry.isFolder
**Signature:** entry.isFolder : `boolean`

Indicates that this instance is **not** a folder. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```
#### entry.name
**Signature:** entry.name : `string`

The name of this entry. Read-only.

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.name);
```
#### entry.provider
**Signature:** entry.provider : `FileSystemProvider`

The associated provider that services this entry. Read-only.

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```
#### entry.url
**Signature:** entry.url : `string`

The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.url);
```
#### entry.nativePath
**Signature:** entry.nativePath : `string`

The platform native file-system path of this entry. Read-only

**Kind**: instance property of [`Entry`](#entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.nativePath);
```
#### entry.copyTo
**Signature:** entry.copyTo(folder, options)

Copies this entry to the specified `folder`.

**Kind**: instance method of [`Entry`](#entry)  
**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `*` |  |  |
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
#### entry.moveTo
**Signature:** entry.moveTo(folder, options)

Moves this entry to the target folder, optionally specifying a new name.

**Kind**: instance method of [`Entry`](#entry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `*` |  |  |
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
#### entry.delete
**Signature:** entry.delete()

Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.

**Kind**: instance method of [`Entry`](#entry)  
**Example**  
```js
await aFile.delete();
```
#### entry.getMetadata
**Signature:** entry.getMetadata() ⇒ `Promise.<EntryMetadata>`

Returns this entry's metadata.

**Kind**: instance method of [`Entry`](#entry)  
**Example**  
```js
const metadata = aFile.getMetadata();
```
### storage.EntryMetadata
**Signature:** storage.EntryMetadata

Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](#module-storage-entry-getmetadata) to do so.

**Kind**: static class of [`storage`](#)  

* [.EntryMetadata](#entrymetadata)
    * [.name](#entrymetadata-name) : `string`
    * [.size](#entrymetadata-size) : `number`
    * [.dateCreated](#entrymetadata-datecreated) : `Date`
    * [.dateModified](#entrymetadata-datemodified) : `Date`
    * [.isFile](#entrymetadata-isfile) : `boolean`
    * [.isFolder](#entrymetadata-isfolder) : `boolean`

#### entryMetadata.name
**Signature:** entryMetadata.name : `string`

The name of the entry.

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
#### entryMetadata.size
**Signature:** entryMetadata.size : `number`

The size of the entry, if a file. Zero if a folder.

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
#### entryMetadata.dateCreated
**Signature:** entryMetadata.dateCreated : `Date`

The date this entry was created.

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
#### entryMetadata.dateModified
**Signature:** entryMetadata.dateModified : `Date`

The date this entry was modified.

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
#### entryMetadata.isFile
**Signature:** entryMetadata.isFile : `boolean`

Indicates if the entry is a file

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
#### entryMetadata.isFolder
**Signature:** entryMetadata.isFolder : `boolean`

Indicates if the entry is a folder

**Kind**: instance property of [`EntryMetadata`](#entrymetadata)  
### storage.File
**Signature:** storage.File

Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [FileSystemProvider](#filesystemprovider).

**Kind**: static class of [`storage`](#)  

* [.File](#file)
    * _instance_
        * [.isFile](#file-isfile)
        * [.mode](#file-mode) : `Symbol`
        * [.read(options)](#file-read) ⇒ `Promise.<(string|ArrayBuffer)>`
        * [.write(data, options)](#file-write)
    * _static_
        * [.isFile(entry)](#fileisfile) ⇒ `boolean`

#### file.isFile
**Signature:** file.isFile

Indicates that this instance is a file.

**Kind**: instance property of [`File`](#file)  
**Example**  
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```
#### file.mode
**Signature:** file.mode : `Symbol`

Indicates whether this file is read-only or read-write. See [readOnly](readOnly) and [readWrite](readWrite).

**Kind**: instance property of [`File`](#file)  
**Example**  
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```
#### file.read
**Signature:** file.read(options) ⇒ `Promise.<(string|ArrayBuffer)>`

Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Kind**: instance method of [`File`](#file)  
**Returns**: `Promise.<(string|ArrayBuffer)>` - the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | The format of the file; see [formats.utf8](#formatsutf8) and [formats.binary](#formatsbinary). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.binary});
```
#### file.write
**Signature:** file.write(data, options)

Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Kind**: instance method of [`File`](#file)  
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` | `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | the format of the file; see [formats.utf8](#formatsutf8) and [formats.binary](#formatsbinary) |
| [options.append] | `boolean` | <code>false</code> | if `true`, the data is written to the end of the file |

**Example**  
```js
await myNovel.write("It was a dark and stormy night.\n");
await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
```
**Example**  
```js
const data = new ArrayBuffer();
await aDataFile.write(data, {format: formats.binary});
```
#### File.isFile
**Signature:** File.isFile(entry) ⇒ `boolean`

Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Kind**: static method of [`File`](#file)  
**Returns**: `boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |

### storage.FileSystemProvider
**Signature:** storage.FileSystemProvider

Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you. This class is abstract, meaning that you'll
need to provide your own implementation in order to use it effectively.

**Kind**: static class of [`storage`](#)  

* [.FileSystemProvider](#filesystemprovider)
    * _instance_
        * [.isFileSystemProvider](#filesystemprovider-isfilesystemprovider)
        * [.supportedDomains](#filesystemprovider-supporteddomains)
        * [.getFileForOpening(options)](#filesystemprovider-getfileforopening) ⇒ `Array.<File>`
        * [.getFileForSaving(options)](#filesystemprovider-getfileforsaving) ⇒ `File`
        * [.getFolder(options)](#filesystemprovider-getfolder) ⇒ `Folder`
        * [.getTemporaryFolder()](#filesystemprovider-gettemporaryfolder)
        * [.getDataFolder()](#filesystemprovider-getdatafolder)
        * [.getPluginFolder()](#filesystemprovider-getpluginfolder)
        * [.getFsUrl()](#filesystemprovider-getfsurl)
        * [.getNativePath()](#filesystemprovider-getnativepath)
    * _static_
        * [.isFileSystemProvider(fs)](#filesystemproviderisfilesystemprovider) ⇒ `boolean`

#### fileSystemProvider.isFileSystemProvider
**Signature:** fileSystemProvider.isFileSystemProvider

Indicates that this is a `FileSystemProvider`. Useful for type-checking.

**Kind**: instance property of [`FileSystemProvider`](#filesystemprovider)  
#### fileSystemProvider.supportedDomains
**Signature:** fileSystemProvider.supportedDomains

An array of the domains this file system supports. If the file system can
open a file picker to the user's `documents` folder, for example, then
[userDocuments](userDocuments) will be in this list.

**Kind**: instance property of [`FileSystemProvider`](#filesystemprovider)  
**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```
#### fileSystemProvider.getFileForOpening
**Signature:** fileSystemProvider.getFileForOpening(options) ⇒ `Array.<File>`

Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
**Returns**: `Array.<File>` - returns the selected files, or empty if no file were selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | ?Object |  |  |
| [options.initialDomain] | `Symbol` |  | The preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. See [list of predefined domains](#domains). |
| [options.types] | `Array.<string>` | All allowed | The allowed file extensions, without any "`.`" or "`*.`" prefix. You can also use [predefined fileTypes](#filetypes) as a shortcut. |
| [options.allowMultiple] | `boolean` | <code>false</code> | If true, multiple files can be returned (as an array). |

**Example**  
```js
const [file] = await fs.getFileForOpening({initialDomain: domains.userDocuments});
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
#### fileSystemProvider.getFileForSaving
**Signature:** fileSystemProvider.getFileForSaving(options) ⇒ `File`

Gets a file reference suitable for saving. The file is read-write. Any
file picker displayed will be of the "save" variety.

If the user attempts to save a file that doesn't exist, the file is
created automatically.

If the act of writing to the file would overwrite it, the file picker
should prompt the user if they are OK with that action. If not, the file
should not be returned.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
**Returns**: `File` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `*` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const [file] = await fs.getFileForSaving({initialDomain: domains.userDocuments});
if (!file) {
    // no file selected, or the user didn't want to overwrite one they did select
    return;
}
await file.write("It was a dark and stormy night");
```
#### fileSystemProvider.getFolder
**Signature:** fileSystemProvider.getFolder(options) ⇒ `Folder`

Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](Folder#getEntries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
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
#### fileSystemProvider.getTemporaryFolder
**Signature:** fileSystemProvider.getTemporaryFolder()

Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
**Example**  
```js
const temp = await fs.getTemporaryFolder();
```
#### fileSystemProvider.getDataFolder
**Signature:** fileSystemProvider.getDataFolder()

Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
#### fileSystemProvider.getPluginFolder
**Signature:** fileSystemProvider.getPluginFolder()

Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
#### fileSystemProvider.getFsUrl
**Signature:** fileSystemProvider.getFsUrl()

Returns the fs url of given entry.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
**Access**: public  
#### fileSystemProvider.getNativePath
**Signature:** fileSystemProvider.getNativePath()

Returns the platform native file system path of given entry.

**Kind**: instance method of [`FileSystemProvider`](#filesystemprovider)  
**Access**: public  
#### FileSystemProvider.isFileSystemProvider
**Signature:** FileSystemProvider.isFileSystemProvider(fs) ⇒ `boolean`

Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Kind**: static method of [`FileSystemProvider`](#filesystemprovider)  
**Returns**: `boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |

### storage.Folder
**Signature:** storage.Folder ⇐ `Entry`

Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider#getTemporaryFolder](FileSystemProvider#getTemporaryFolder),
[FileSystemProvider#getFolder](FileSystemProvider#getFolder), or via [Folder#getEntries](Folder#getEntries).

**Kind**: static class of [`storage`](#)  
**Extends**: `Entry`  

* [.Folder](#folder) ⇐ `Entry`
    * _instance_
        * [.isFolder](#folder-isfolder)
        * [.getEntries()](#folder-getentries) ⇒ `Array.<Entry>`
        * [.createEntry(name, options)](#folder-createentry) ⇒ `File` | `Folder`
        * [.getEntry(filePath)](#folder-getentry) ⇒ `File` | `Folder`
        * [.renameEntry(entry, newName, options)](#folder-renameentry)
    * _static_
        * [.isFolder(entry)](#folderisfolder) ⇒ `boolean`

#### folder.isFolder
**Signature:** folder.isFolder

Indicates that this instance is a folder. Useful for type checking.

**Kind**: instance property of [`Folder`](#folder)  
#### folder.getEntries
**Signature:** folder.getEntries() ⇒ `Array.<Entry>`

Returns an array of entries contained within this folder.

**Kind**: instance method of [`Folder`](#folder)  
**Returns**: `Array.<Entry>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```
#### folder.createEntry
**Signature:** folder.createEntry(name, options) ⇒ `File` | `Folder`

Creates an entry within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#folder)  
**Returns**: `File` | `Folder` - the created entry  

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
const catImageCollection = await aFolder.createEntry("cats", {type: types.folder});
```
#### folder.getEntry
**Signature:** folder.getEntry(filePath) ⇒ `File` | `Folder`

Gets an entry from within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#folder)  
**Returns**: `File` | `Folder` - the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```
#### folder.renameEntry
**Signature:** folder.renameEntry(entry, newName, options)

Renames an entry to a new name.

**Kind**: instance method of [`Folder`](#folder)  

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
#### Folder.isFolder
**Signature:** Folder.isFolder(entry) ⇒ `boolean`

Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Kind**: static method of [`Folder`](#folder)  
**Returns**: `boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |

### storage.localFileSystem
**Signature:** storage.localFileSystem : `LocalFileSystemProvider`

**Kind**: static property of [`storage`](#)  
### storage.errors
**Signature:** storage.errors : `Errors`

**Kind**: static property of [`storage`](#)  

* [.errors](#errors) : `Errors`
    * [.AbstractMethodInvocationError](#errorsabstractmethodinvocationerror) ⇐ `Error`
    * [.ProviderMismatchError](#errorsprovidermismatcherror) ⇐ `Error`
    * [.EntryIsNotAnEntryError](#errorsentryisnotanentryerror) ⇐ `Error`
    * [.EntryIsNotAFolderError](#errorsentryisnotafoldererror) ⇐ `Error`
    * [.EntryIsNotAFileError](#errorsentryisnotafileerror) ⇐ `Error`
    * [.NotAFileSystemError](#errorsnotafilesystemerror) ⇐ `Error`
    * [.OutOfSpaceError](#errorsoutofspaceerror) ⇐ `Error`
    * [.PermissionDeniedError](#errorspermissiondeniederror) ⇐ `Error`
    * [.EntryExistsError](#errorsentryexistserror) ⇐ `Error`
    * [.FileIsReadOnlyError](#errorsfileisreadonlyerror) ⇐ `Error`
    * [.DomainNotSupportedError](#errorsdomainnotsupportederror) ⇐ `Error`
    * [.InvalidFileNameError](#errorsinvalidfilenameerror) ⇐ `Error`

#### errors.AbstractMethodInvocationError
**Signature:** errors.AbstractMethodInvocationError ⇐ `Error`

Attempted to invoke an abstract method.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.ProviderMismatchError
**Signature:** errors.ProviderMismatchError ⇐ `Error`

Attempted to execute a command that required the providers of all
entries to match.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.EntryIsNotAnEntryError
**Signature:** errors.EntryIsNotAnEntryError ⇐ `Error`

The object passed as an entry is not actually an `Entry`.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.EntryIsNotAFolderError
**Signature:** errors.EntryIsNotAFolderError ⇐ `Error`

The entry is not a folder, but was expected to be a folder.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.EntryIsNotAFileError
**Signature:** errors.EntryIsNotAFileError ⇐ `Error`

The entry is not a file, but was expected to be.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.NotAFileSystemError
**Signature:** errors.NotAFileSystemError ⇐ `Error`

The instance was expected to be a file system, but wasn't.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.OutOfSpaceError
**Signature:** errors.OutOfSpaceError ⇐ `Error`

The file system is out of space (or quota has been exceeded)

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.PermissionDeniedError
**Signature:** errors.PermissionDeniedError ⇐ `Error`

The file system revoked permission to complete the requested
action.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.EntryExistsError
**Signature:** errors.EntryExistsError ⇐ `Error`

An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.FileIsReadOnlyError
**Signature:** errors.FileIsReadOnlyError ⇐ `Error`

An attempt was made to write to a file that was opened as
read-only.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.DomainNotSupportedError
**Signature:** errors.DomainNotSupportedError ⇐ `Error`

Domain is not supported by the current FileSystemProvider
instance.

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
#### errors.InvalidFileNameError
**Signature:** errors.InvalidFileNameError ⇐ `Error`

The file name contains invalid characters

**Kind**: static class of [`errors`](#errors)  
**Extends**: `Error`  
### storage.domains
**Signature:** storage.domains

Common locations that we can use when displaying a file picker.

**Kind**: static constant of [`storage`](#)  
**Access**: public  

* [.domains](#domains)
    * [.userDesktop](#domainsuserdesktop) : `Symbol`
    * [.userDocuments](#domainsuserdocuments) : `Symbol`
    * [.userPictures](#domainsuserpictures) : `Symbol`
    * [.userVideos](#domainsuservideos) : `Symbol`
    * [.userMusic](#domainsusermusic) : `Symbol`
    * [.appLocalData](#domainsapplocaldata) : `Symbol`
    * [.appLocalLibrary](#domainsapplocallibrary) : `Symbol`
    * [.appLocalCache](#domainsapplocalcache) : `Symbol`
    * [.appLocalShared](#domainsapplocalshared) : `Symbol`
    * [.appLocalTemporary](#domainsapplocaltemporary) : `Symbol`
    * [.appRoamingData](#domainsapproamingdata) : `Symbol`
    * [.appRoamingLibrary](#domainsapproaminglibrary) : `Symbol`

#### domains.userDesktop
**Signature:** domains.userDesktop : `Symbol`

The user's desktop folder

**Kind**: static property of [`domains`](#domains)  
#### domains.userDocuments
**Signature:** domains.userDocuments : `Symbol`

The user's documents folder

**Kind**: static property of [`domains`](#domains)  
#### domains.userPictures
**Signature:** domains.userPictures : `Symbol`

The user's pictures folder or library

**Kind**: static property of [`domains`](#domains)  
#### domains.userVideos
**Signature:** domains.userVideos : `Symbol`

The user's videos / movies folder or library

**Kind**: static property of [`domains`](#domains)  
#### domains.userMusic
**Signature:** domains.userMusic : `Symbol`

The user's music folder or library

**Kind**: static property of [`domains`](#domains)  
#### domains.appLocalData
**Signature:** domains.appLocalData : `Symbol`

Local application data

**Kind**: static property of [`domains`](#domains)  
#### domains.appLocalLibrary
**Signature:** domains.appLocalLibrary : `Symbol`

Local application library

**Kind**: static property of [`domains`](#domains)  
#### domains.appLocalCache
**Signature:** domains.appLocalCache : `Symbol`

Local application cache directory (persistence not guaranteed)

**Kind**: static property of [`domains`](#domains)  
#### domains.appLocalShared
**Signature:** domains.appLocalShared : `Symbol`

Local application shared data folder

**Kind**: static property of [`domains`](#domains)  
#### domains.appLocalTemporary
**Signature:** domains.appLocalTemporary : `Symbol`

Local temporary directory

**Kind**: static property of [`domains`](#domains)  
#### domains.appRoamingData
**Signature:** domains.appRoamingData : `Symbol`

Roaming application data

**Kind**: static property of [`domains`](#domains)  
#### domains.appRoamingLibrary
**Signature:** domains.appRoamingLibrary : `Symbol`

Roaming application library data

**Kind**: static property of [`domains`](#domains)  
### storage.fileTypes
**Signature:** storage.fileTypes

This namespace describes the various file type extensions that can used be used in some FS file open methods.

**Kind**: static constant of [`storage`](#)  
**Access**: public  

* [.fileTypes](#filetypes)
    * [.text](#filetypestext)
    * [.images](#filetypesimages)
    * [.all](#filetypesall)

#### fileTypes.text
**Signature:** fileTypes.text

Text file extensions

**Kind**: static property of [`fileTypes`](#filetypes)  
#### fileTypes.images
**Signature:** fileTypes.images

Image file extensions

**Kind**: static property of [`fileTypes`](#filetypes)  
#### fileTypes.all
**Signature:** fileTypes.all

All file types

**Kind**: static property of [`fileTypes`](#filetypes)  
### storage.formats
**Signature:** storage.formats

This namespace describes the file content formats supported in FS methods like read and write.

**Kind**: static constant of [`storage`](#)  
**Access**: public  

* [.formats](#formats)
    * [.utf8](#formatsutf8) : `Symbol`
    * [.binary](#formatsbinary) : `Symbol`

#### formats.utf8
**Signature:** formats.utf8 : `Symbol`

UTF8 File encoding

**Kind**: static property of [`formats`](#formats)  
#### formats.binary
**Signature:** formats.binary : `Symbol`

Binary file encoding

**Kind**: static property of [`formats`](#formats)  
### storage.modes
**Signature:** storage.modes

This namespace describes the file open modes. for eg: open file in read-only or both read-write

**Kind**: static constant of [`storage`](#)  
**Access**: public  

* [.modes](#modes)
    * [.readOnly](#modesreadonly) : `Symbol`
    * [.readWrite](#modesreadwrite) : `Symbol`

#### modes.readOnly
**Signature:** modes.readOnly : `Symbol`

The file is read-only; attempts to write will fail.

**Kind**: static property of [`modes`](#modes)  
#### modes.readWrite
**Signature:** modes.readWrite : `Symbol`

The file is read-write.

**Kind**: static property of [`modes`](#modes)  
### storage.types
**Signature:** storage.types

This namespace describes the type of the entry. Whether file or folder etc.

**Kind**: static constant of [`storage`](#)  
**Access**: public  

* [.types](#types)
    * [.file](#typesfile) : `Symbol`
    * [.folder](#typesfolder) : `Symbol`

#### types.file
**Signature:** types.file : `Symbol`

A file; used when creating an entity

**Kind**: static property of [`types`](#types)  
#### types.folder
**Signature:** types.folder : `Symbol`

A folder; used when creating an entity

**Kind**: static property of [`types`](#types)  
