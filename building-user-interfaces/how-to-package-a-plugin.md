# How to package a plugin

This guide describes how to package the files of an XD plugin.

It is a prerequisite to have a working plugin with all the files that you intend to package. For reference, this guide will use a sample plugin code [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/getting-started-guide/getting-started).

Please note the screenshots are from a mac machine but the steps would be identitical on a windows machine.

## Contents

* [Prerequisites](how-to-package-a-plugin.md#prerequisites)
* [Development Steps](how-to-package-a-plugin.md#development-steps)
  * [1. Locate your plugin.](how-to-package-a-plugin.md#1-locate-your-plugin)
  * [2. Compress the content as a .zip file.](how-to-package-a-plugin.md#2-compress-the-content-as-a-zip-file)
  * [3. Rename the .zip extension to .xdx](how-to-package-a-plugin.md#3-rename-the-zip-extension-to-xdx)
  * [4. Verify the packaging worked.](how-to-package-a-plugin.md#4-verify-the-packaging-worked)

## Prerequisites

* [Getting Started Guide](../getting-started/getting-started-guide.md)

## Development Steps

### 1. Locate your plugin.

Your plugin folder must contain all the files you want to package.

![](../.gitbook/assets/one_viewpackagecontent.png)

### 2. Compress the content as a .zip file.

Right click on the plugin folder and click the option to compress.

![](../.gitbook/assets/two_rightclick.png)

Here's how the .zip file should look like.

![](../.gitbook/assets/three_compress.png)

### 3. Rename the .zip extension to .xdx

![](../.gitbook/assets/four_rename.png)

If asked, click "Use .xdx".

![](../.gitbook/assets/five_changexdx.png)

Here's how the final file should look like.

![](../.gitbook/assets/six_savexdx.png)

### 4. Verify the packaging worked.

Double clicking the .xdx file should install the plugin and show up in XD.

![](../.gitbook/assets/success.png)

