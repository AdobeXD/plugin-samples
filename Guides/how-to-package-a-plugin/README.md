# How to package a plugin.
This guide describes how to package the files of an XD plugin.

It is a prerequisite to have a working plugin with all the files that you intend to package. For reference, **this guide will use a sample plugin code [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/getting-started)**.

Please note the screenshots are from a mac machine but the steps would be identitical on a windows machine.

<!-- Image or GIF if necessary -->
<!-- ![PLUGINNAME]() -->

<!-- doctoc command config: -->
<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Prerequisites](#prerequisites)
- [Development Steps](#development-steps)
  - [1. Locate your plugin.](#1-locate-your-plugin)
  - [2. Compress the content as a .zip file.](#2-compress-the-content-as-a-zip-file)
  - [3. Rename the .zip extension to .xdx](#3-rename-the-zip-extension-to-xdx)
  - [4. Verify the packaging worked.](#4-verify-the-packaging-worked)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites
- [Getting Started Guide](/Guides/getting-started-guide)
- [Debugging Guide](/Guides/debugging-guide)

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

