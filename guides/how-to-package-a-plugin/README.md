# How to package a plugin.
This guide describes how to package the files of an XD plugin.

It is a prerequisite to have a working plugin with all the files that you intend to package. For reference, **this guide will use sample plugin code found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/getting-started)**.

Please note the screenshots are from a mac machine but the steps would be identitical on a windows machine.


## Prerequisites
- [Getting Started Guide](/guides/getting-started-guide)
- [Debugging Guide](/guides/debugging-guide)

## Development Steps

### 1. Compress the content as a .zip file.

Select all files > Right click > click the option to compress

<img src="/images/readme-assets/package-plugin-steps/compress.png" width="50%" height="50%">

_Note: If you create a parent folder of the content and compress the folder, the name of the resulted `.zip` file should match the parent folder name for the package to be installed correctly. Since there is a chance users change the name of the compressed file, we recommend you to compress the content directly instead of creating a parent folder_

Here's how the .zip file should look like.

<img src="/images/readme-assets/package-plugin-steps/final-zip.png" width="50%" height="50%">

### 2. Rename the .zip extension to .xdx

<img src="/images/readme-assets/package-plugin-steps/rename.png" width="50%" height="50%">

If asked, click "Use .xdx".

<img src="/images/readme-assets/package-plugin-steps/confirmation.png" width="50%" height="50%">

Here's how the final file should look like.

<img src="/images/readme-assets/package-plugin-steps/final-xdx.png" width="50%" height="50%">

### 4. Verify the packaging worked.
Double clicking the .xdx file should install the plugin and show up in XD.

<img src="/images/readme-assets/package-plugin-steps/install.png" width="50%" height="50%">

<img src="/images/readme-assets/package-plugin-steps/installed.png" width="50%" height="50%">

