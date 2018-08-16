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

## Development Steps

### 1. Locate your plugin.
Your plugin folder must contain all the files you want to package.

<img src="/.meta/readme-assets/package-plugin-steps/one_viewPackageContent.png" width="50%" height="50%">


### 2. Compress the content as a .zip file.

Right click on the plugin folder and click the option to compress.

<img src="/.meta/readme-assets/package-plugin-steps/two_rightclick.png" width="50%" height="50%">


Here's how the .zip file should look like.

<img src="/.meta/readme-assets/package-plugin-steps/three_compress.png" width="50%" height="50%">

### 3. Rename the .zip extension to .xdx

<img src="/.meta/readme-assets/package-plugin-steps/four_rename.png" width="50%" height="50%">

If asked, click "Use .xdx".

<img src="/.meta/readme-assets/package-plugin-steps/five_changexdx.png" width="50%" height="50%">

Here's how the final file should look like.

<img src="/.meta/readme-assets/package-plugin-steps/six_savexdx.png" width="50%" height="50%">

### 4. Verify the packaging worked.
Double clicking the .xdx file should install the plugin and show up in XD.

<img src="/.meta/readme-assets/package-plugin-steps/success.png" width="50%" height="50%">


