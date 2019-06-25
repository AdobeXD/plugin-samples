
<a name="module-storage" id="module-storage"></a>

## storage

**Category**: uxp, io, file

* [storage](#module-storage)
    * _static_
        * [.localFileSystem](#module-storage-localfilesystem) : `LocalFileSystemProvider`
        * [.errors](#module-storage-errors) : `Errors`
            * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror)
            * [.ProviderMismatchError](#module-storage-errors-providermismatcherror)
            * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror)
            * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror)
            * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror)
            * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror)
            * [.OutOfSpaceError](#module-storage-errors-outofspaceerror)
            * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror)
            * [.EntryExistsError](#module-storage-errors-entryexistserror)
            * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror)
            * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror)
            * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror)
            * [.InvalidFileFormatError](#module-storage-errors-invalidfileformaterror)
            * [.DataFileFormatMismatchError](#module-storage-errors-datafileformatmismatcherror)
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
    * _inner_
        * [~Entry](#module-storage-entry)
            * [.isEntry](#module-storage-entry-isentry) : `boolean`
            * [.isFile](#module-storage-entry-isfile) : `boolean`
            * [.isFolder](#module-storage-entry-isfolder) : `boolean`
            * [.name](#module-storage-entry-name) : `string`
            * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
            * [.url](#module-storage-entry-url) : `string`
            * [.nativePath](#module-storage-entry-nativepath) : `string`
            * [.toString()](#module-storage-entry-tostring)
            * [.copyTo(folder, options)](#module-storage-entry-copyto)
            * [.moveTo(folder, options)](#module-storage-entry-moveto)
            * [.delete()](#module-storage-entry-delete)
            * [.getMetadata()](#module-storage-entry-getmetadata)
        * [~EntryMetadata](#module-storage-entrymetadata)
            * [.name](#module-storage-entrymetadata-name) : `string`
            * [.size](#module-storage-entrymetadata-size) : `number`
            * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
            * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
            * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
            * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`
        * [~File](#module-storage-file)
            * _instance_
                * [.isFile](#module-storage-file-isfile)
                * [.mode](#module-storage-file-mode) : `Symbol`
                * [.read(options)](#module-storage-file-read)
                * [.write(data, options)](#module-storage-file-write)
            * _static_
                * [.isFile(entry)](#module-storage-file-isfile)
        * [~FileSystemProvider](#module-storage-filesystemprovider)
            * _instance_
                * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
                * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening)
                * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving)
                * [.getFolder(options)](#module-storage-filesystemprovider-getfolder)
                * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
                * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
                * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
                * [.getFsUrl()](#module-storage-filesystemprovider-getfsurl)
                * [.getNativePath()](#module-storage-filesystemprovider-getnativepath)
            * _static_
                * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider)
        * [~Folder](#module-storage-folder)
            * _instance_
                * [.isFolder](#module-storage-folder-isfolder)
                * [.getEntries()](#module-storage-folder-getentries)
                * [.createFile(name, options)](#module-storage-folder-createfile)
                * [.createFolder(name)](#module-storage-folder-createfolder)
                * [.getEntry(filePath)](#module-storage-folder-getentry)
                * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
            * _static_
                * [.isFolder(entry)](#module-storage-folder-isfolder)

<a name="module-storage-localfilesystem" id="module-storage-localfilesystem"></a>

### storage.localFileSystem : `LocalFileSystemProvider`

<a name="module-storage-errors" id="module-storage-errors"></a>

### storage.errors : `Errors`

* [.errors](#module-storage-errors) : `Errors`
    * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror)
    * [.ProviderMismatchError](#module-storage-errors-providermismatcherror)
    * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror)
    * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror)
    * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror)
    * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror)
    * [.OutOfSpaceError](#module-storage-errors-outofspaceerror)
    * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror)
    * [.EntryExistsError](#module-storage-errors-entryexistserror)
    * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror)
    * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror)
    * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror)
    * [.InvalidFileFormatError](#module-storage-errors-invalidfileformaterror)
    * [.DataFileFormatMismatchError](#module-storage-errors-datafileformatmismatcherror)

<a name="module-storage-errors-abstractmethodinvocationerror" id="module-storage-errors-abstractmethodinvocationerror"></a>

#### errors.AbstractMethodInvocationError
Attempted to invoke an abstract method.

**Extends**: `Error`

<a name="module-storage-errors-providermismatcherror" id="module-storage-errors-providermismatcherror"></a>

#### errors.ProviderMismatchError
Attempted to execute a command that required the providers of all
entries to match.

**Extends**: `Error`

<a name="module-storage-errors-entryisnotanentryerror" id="module-storage-errors-entryisnotanentryerror"></a>

#### errors.EntryIsNotAnEntryError
The object passed as an entry is not actually an `Entry`.

**Extends**: `Error`

<a name="module-storage-errors-entryisnotafoldererror" id="module-storage-errors-entryisnotafoldererror"></a>

#### errors.EntryIsNotAFolderError
The entry is not a folder, but was expected to be a folder.

**Extends**: `Error`

<a name="module-storage-errors-entryisnotafileerror" id="module-storage-errors-entryisnotafileerror"></a>

#### errors.EntryIsNotAFileError
The entry is not a file, but was expected to be.

**Extends**: `Error`

<a name="module-storage-errors-notafilesystemerror" id="module-storage-errors-notafilesystemerror"></a>

#### errors.NotAFileSystemError
The instance was expected to be a file system, but wasn't.

**Extends**: `Error`

<a name="module-storage-errors-outofspaceerror" id="module-storage-errors-outofspaceerror"></a>

#### errors.OutOfSpaceError
The file system is out of space (or quota has been exceeded)

**Extends**: `Error`

<a name="module-storage-errors-permissiondeniederror" id="module-storage-errors-permissiondeniederror"></a>

#### errors.PermissionDeniedError
The file system revoked permission to complete the requested
action.

**Extends**: `Error`

<a name="module-storage-errors-entryexistserror" id="module-storage-errors-entryexistserror"></a>

#### errors.EntryExistsError
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.

**Extends**: `Error`

<a name="module-storage-errors-fileisreadonlyerror" id="module-storage-errors-fileisreadonlyerror"></a>

#### errors.FileIsReadOnlyError
An attempt was made to write to a file that was opened as
read-only.

**Extends**: `Error`

<a name="module-storage-errors-domainnotsupportederror" id="module-storage-errors-domainnotsupportederror"></a>

#### errors.DomainNotSupportedError
Domain is not supported by the current FileSystemProvider
instance.

**Extends**: `Error`

<a name="module-storage-errors-invalidfilenameerror" id="module-storage-errors-invalidfilenameerror"></a>

#### errors.InvalidFileNameError
The file name contains invalid characters

**Extends**: `Error`

<a name="module-storage-errors-invalidfileformaterror" id="module-storage-errors-invalidfileformaterror"></a>

#### errors.InvalidFileFormatError
Unsupported format type

**Extends**: `Error`

<a name="module-storage-errors-datafileformatmismatcherror" id="module-storage-errors-datafileformatmismatcherror"></a>

#### errors.DataFileFormatMismatchError
Data and Format mismatch

**Extends**: `Error`

<a name="module-storage-filetypes" id="module-storage-filetypes"></a>

### storage.fileTypes
This namespace describes the various file type extensions that can used be used in some FS file open methods.

* [.fileTypes](#module-storage-filetypes)
    * [.text](#module-storage-filetypes-text)
    * [.images](#module-storage-filetypes-images)
    * [.all](#module-storage-filetypes-all)

<a name="module-storage-filetypes-text" id="module-storage-filetypes-text"></a>

#### fileTypes.text
Text file extensions

<a name="module-storage-filetypes-images" id="module-storage-filetypes-images"></a>

#### fileTypes.images
Image file extensions

<a name="module-storage-filetypes-all" id="module-storage-filetypes-all"></a>

#### fileTypes.all
All file types

<a name="module-storage-formats" id="module-storage-formats"></a>

### storage.formats
This namespace describes the file content formats supported in FS methods like read and write.

* [.formats](#module-storage-formats)
    * [.utf8](#module-storage-formats-utf8) : `Symbol`
    * [.binary](#module-storage-formats-binary) : `Symbol`

<a name="module-storage-formats-utf8" id="module-storage-formats-utf8"></a>

#### formats.utf8 : `Symbol`
UTF8 File encoding

<a name="module-storage-formats-binary" id="module-storage-formats-binary"></a>

#### formats.binary : `Symbol`
Binary file encoding

<a name="module-storage-modes" id="module-storage-modes"></a>

### storage.modes
This namespace describes the file open modes. for eg: open file in read-only or both read-write

* [.modes](#module-storage-modes)
    * [.readOnly](#module-storage-modes-readonly) : `Symbol`
    * [.readWrite](#module-storage-modes-readwrite) : `Symbol`

<a name="module-storage-modes-readonly" id="module-storage-modes-readonly"></a>

#### modes.readOnly : `Symbol`
The file is read-only; attempts to write will fail.

<a name="module-storage-modes-readwrite" id="module-storage-modes-readwrite"></a>

#### modes.readWrite : `Symbol`
The file is read-write.

<a name="module-storage-types" id="module-storage-types"></a>

### storage.types
This namespace describes the type of the entry. Whether file or folder etc.

* [.types](#module-storage-types)
    * [.file](#module-storage-types-file) : `Symbol`
    * [.folder](#module-storage-types-folder) : `Symbol`

<a name="module-storage-types-file" id="module-storage-types-file"></a>

#### types.file : `Symbol`
A file; used when creating an entity

<a name="module-storage-types-folder" id="module-storage-types-folder"></a>

#### types.folder : `Symbol`
A folder; used when creating an entity

<a name="module-storage-entry" id="module-storage-entry"></a>

### storage~Entry

* [~Entry](#module-storage-entry)
    * [.isEntry](#module-storage-entry-isentry) : `boolean`
    * [.isFile](#module-storage-entry-isfile) : `boolean`
    * [.isFolder](#module-storage-entry-isfolder) : `boolean`
    * [.name](#module-storage-entry-name) : `string`
    * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
    * [.url](#module-storage-entry-url) : `string`
    * [.nativePath](#module-storage-entry-nativepath) : `string`
    * [.toString()](#module-storage-entry-tostring)
    * [.copyTo(folder, options)](#module-storage-entry-copyto)
    * [.moveTo(folder, options)](#module-storage-entry-moveto)
    * [.delete()](#module-storage-entry-delete)
    * [.getMetadata()](#module-storage-entry-getmetadata)

<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

#### entry.isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Example**
```js
if (something.isEntry) {
    return something.getMetadata();
}
```

<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

#### entry.isFile : `boolean`
Indicates if this entry is a `File`. Useful for type-checking.

**Read only**

**Example**
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```

<a name="module-storage-entry-isfolder" id="module-storage-entry-isfolder"></a>

#### entry.isFolder : `boolean`
Indicates if this instance is a folder. Useful for type-checking.

**Read only**

**Example**
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```

<a name="module-storage-entry-name" id="module-storage-entry-name"></a>

#### entry.name : `string`
The name of this entry.

**Read only**

**Example**
```js
console.log(anEntry.name);
```

<a name="module-storage-entry-provider" id="module-storage-entry-provider"></a>

#### entry.provider : `FileSystemProvider`
The associated provider that services this entry.

**Read only**

**Example**
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```

<a name="module-storage-entry-url" id="module-storage-entry-url"></a>

#### entry.url : `string`
The url of this entry.

**Read only**

**Example**
```js
console.log(anEntry.url);
```

<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

#### entry.nativePath : `string`
The platform native file-system path of this entry.

**Read only**

**Example**
```js
console.log(anEntry.nativePath);
```

<a name="module-storage-entry-tostring" id="module-storage-entry-tostring"></a>

#### entry.toString()
returns the details of the given entry like name, type and native path
in a readable string format.

<a name="module-storage-entry-copyto" id="module-storage-entry-copyto"></a>

#### entry.copyTo(folder, options)
Copies this entry to the specified `folder`.

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
Removes this entry from the file system. If the entry is a folder, it must
be emptied before it can be removed.

**Example**
```js
await aFile.delete();
```

<a name="module-storage-entry-getmetadata" id="module-storage-entry-getmetadata"></a>

#### entry.getMetadata()
Returns this entry's metadata.

**Example**
```js
const metadata = aFile.getMetadata();
```

<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

### storage~EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](#module-storage-entry-getmetadata) to do so.

* [~EntryMetadata](#module-storage-entrymetadata)
    * [.name](#module-storage-entrymetadata-name) : `string`
    * [.size](#module-storage-entrymetadata-size) : `number`
    * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
    * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
    * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
    * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`

<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

#### entryMetadata.name : `string`
The name of the entry.

<a name="module-storage-entrymetadata-size" id="module-storage-entrymetadata-size"></a>

#### entryMetadata.size : `number`
The size of the entry, if a file. Zero if a folder.

<a name="module-storage-entrymetadata-datecreated" id="module-storage-entrymetadata-datecreated"></a>

#### entryMetadata.dateCreated : `Date`
The date this entry was created.

<a name="module-storage-entrymetadata-datemodified" id="module-storage-entrymetadata-datemodified"></a>

#### entryMetadata.dateModified : `Date`
The date this entry was modified.

<a name="module-storage-entrymetadata-isfile" id="module-storage-entrymetadata-isfile"></a>

#### entryMetadata.isFile : `boolean`
Indicates if the entry is a file

<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

#### entryMetadata.isFolder : `boolean`
Indicates if the entry is a folder

<a name="module-storage-file" id="module-storage-file"></a>

### storage~File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [FileSystemProvider](#module-storage-filesystemprovider).

* [~File](#module-storage-file)
    * _instance_
        * [.isFile](#module-storage-file-isfile)
        * [.mode](#module-storage-file-mode) : `Symbol`
        * [.read(options)](#module-storage-file-read)
        * [.write(data, options)](#module-storage-file-write)
    * _static_
        * [.isFile(entry)](#module-storage-file-isfile)

<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### file.isFile
Indicates that this instance is a file.

**Example**
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```

<a name="module-storage-file-mode" id="module-storage-file-mode"></a>

#### file.mode : `Symbol`
Indicates whether this file is read-only or read-write. See
[modes.readOnly](#module-storage-modes-readonly) and
[modes.readWrite](#module-storage-modes-readwrite).

**Example**
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```

<a name="module-storage-file-read" id="module-storage-file-read"></a>

#### file.read(options)
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | The format of the file; see     [formats.utf8](#module-storage-formats-utf8) and [formats.binary](#module-storage-formats-binary). |

**Example**
```js
const text = await myNovel.read();
```

**Example**
```js
const data = await myNovel.read({format: formats.binary});
```

<a name="module-storage-file-write" id="module-storage-file-write"></a>

#### file.write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | the format of the file; see [formats.utf8](#module-storage-formats-utf8)     and [formats.binary](#module-storage-formats-binary) |
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

<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### File.isFile(entry)
Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Returns**: `boolean` - if `true`, the entry is a file.

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |

<a name="module-storage-filesystemprovider" id="module-storage-filesystemprovider"></a>

### storage~FileSystemProvider
Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you. This class is abstract, meaning that you'll
need to provide your own implementation in order to use it effectively.

* [~FileSystemProvider](#module-storage-filesystemprovider)
    * _instance_
        * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
        * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening)
        * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving)
        * [.getFolder(options)](#module-storage-filesystemprovider-getfolder)
        * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
        * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
        * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
        * [.getFsUrl()](#module-storage-filesystemprovider-getfsurl)
        * [.getNativePath()](#module-storage-filesystemprovider-getnativepath)
    * _static_
        * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider)

<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### fileSystemProvider.isFileSystemProvider
Indicates that this is a `FileSystemProvider`. Useful for type-checking.

<a name="module-storage-filesystemprovider-getfileforopening" id="module-storage-filesystemprovider-getfileforopening"></a>

#### fileSystemProvider.getFileForOpening(options)
Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Returns**: `File` \| `Array.<File>` - based on allowMultiple is true or false, or empty if no file were selected.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `\*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | <code>[&#x27;.*&#x27;]</code> | array of file types that the file open picker displays. |
| [options.initialLocation] | `File` \| `Folder` |  | the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option. |
| [options.allowMultiple] | `boolean` | <code>false</code> | if true, multiple files can be returned (as an array) |

**Example**
```js
const folder = await fs.getFolder({initialDomain = domains.userDocuments});
const file = await fs.getFileForOpening({initialLocation = folder});
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

#### fileSystemProvider.getFileForSaving(options)
Gets a file reference suitable for saving. The file is read-write. Any
file picker displayed will be of the "save" variety.

If the user attempts to save a file that doesn't exist, the file is
created automatically.

If the act of writing to the file would overwrite it, the file picker
should prompt the user if they are OK with that action. If not, the file
should not be returned.

**Returns**: `File` - returns the selected file, or `null` if no file were selected.

| Param | Type | Description |
| --- | --- | --- |
| options | `\*` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | array of valid file types that the user can choose to assign to a file. |

**Example**
```js
const [file] = await fs.getFileForSaving({ types = [ "txt" ]});
if (!file) {
    // no file selected, or the user didn't want to overwrite one they did select
    return;
}
await file.write("It was a dark and stormy night");
```

<a name="module-storage-filesystemprovider-getfolder" id="module-storage-filesystemprovider-getfolder"></a>

#### fileSystemProvider.getFolder(options)
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](#module-storage-folder-getentries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

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

**Example**
```js
const temp = await fs.getTemporaryFolder();
```

<a name="module-storage-filesystemprovider-getdatafolder" id="module-storage-filesystemprovider-getdatafolder"></a>

#### fileSystemProvider.getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.

<a name="module-storage-filesystemprovider-getpluginfolder" id="module-storage-filesystemprovider-getpluginfolder"></a>

#### fileSystemProvider.getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

<a name="module-storage-filesystemprovider-getfsurl" id="module-storage-filesystemprovider-getfsurl"></a>

#### fileSystemProvider.getFsUrl()
Returns the fs url of given entry.

<a name="module-storage-filesystemprovider-getnativepath" id="module-storage-filesystemprovider-getnativepath"></a>

#### fileSystemProvider.getNativePath()
Returns the platform native file system path of given entry.

<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### FileSystemProvider.isFileSystemProvider(fs)
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Returns**: `boolean` - If `true`, the object is a file system provider

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |

<a name="module-storage-folder" id="module-storage-folder"></a>

### storage~Folder
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling
[FileSystemProvider#getTemporaryFolder](#module-storage-filesystemprovider-gettemporaryfolder),
[FileSystemProvider#getFolder](#module-storage-filesystemprovider-getfolder), or via
[Folder#getEntries](#module-storage-folder-getentries).

**Extends**: `Entry`

* [~Folder](#module-storage-folder)
    * _instance_
        * [.isFolder](#module-storage-folder-isfolder)
        * [.getEntries()](#module-storage-folder-getentries)
        * [.createFile(name, options)](#module-storage-folder-createfile)
        * [.createFolder(name)](#module-storage-folder-createfolder)
        * [.getEntry(filePath)](#module-storage-folder-getentry)
        * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
    * _static_
        * [.isFolder(entry)](#module-storage-folder-isfolder)

<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

#### folder.isFolder
Indicates that this instance is a folder. Useful for type checking.

<a name="module-storage-folder-getentries" id="module-storage-folder-getentries"></a>

#### folder.getEntries()
Returns an array of entries contained within this folder.

**Returns**: `Array.<Entry>` - The entries within the folder.

**Example**
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```

<a name="module-storage-folder-createfile" id="module-storage-folder-createfile"></a>

#### folder.createFile(name, options)
Creates a File Entry object within this folder and returns the appropriate instance.
Note that this method just create a file entry object and not the actual file on the disk.
The file actually gets created when you call for eg: write method on the file entry object.

**Returns**: `File` - the created file entry

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the file to create. |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | If `true`, the create attempt can overwrite an existing file |

**Example**
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```

<a name="module-storage-folder-createfolder" id="module-storage-folder-createfolder"></a>

#### folder.createFolder(name)
Creates a Folder within this folder and returns the appropriate instance.

**Returns**: `Folder` - the created folder entry object

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | the name of the folder to create. |

**Example**
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```

<a name="module-storage-folder-getentry" id="module-storage-folder-getentry"></a>

#### folder.getEntry(filePath)
Gets an entry from within this folder and returns the appropriate instance.

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

#### Folder.isFolder(entry)
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Returns**: `boolean` - if `true`, the entry is a folder

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |

