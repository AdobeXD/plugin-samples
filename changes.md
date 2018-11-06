# Change Log

## Public Release 14.0.42

### New API Features

* [Viewport](./reference/viewport.md): Pan and zoom the view of the document, and get information about the current viewport bounds.

### Known Issues

See the [Known Issues page](./known-issues.md) for a comprehensive list.


----

## Public Release 13.0.12

### Fixes and improvements

* You can now export renditions to any user-chosen location on Windows.
    * Caveat: exporting renditions to a folder _created by_ your plugin will not work if the folder name contains spaces or other special characters. See [known issues](./known-issues.md) for details.

### Breaking Changes

* **File IO** - If the user cancels `getFileForOpening()` in single-file mode (the default), the API now resolves with null instead of an empty array. The multiple-file mode continues to resolve with an empty array when canceled.
* **Export Renditions** - You cannot make multiple concurrent calls to `application.createRenditions()`, since it was not guaranteed to work correctly in this case. Either wait for for the Promise from one call to finish before calling again, or accumulate all your requests into one array and make a single call for all of them.
* The undocumented global APIs `localStorage` and `sessionStorage` have been removed for now.
