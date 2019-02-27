# Publishing your plugin

The simplest way for Adobe XD users to discover and install plugins is through the XD in-app plugin manager.

The XD plugin manager is accessed through the _Plugins_ menu in the app: go to _Plugins > Discover Plugins..._ to open it:

![XD Plugin Manager](/images/plugin-manager.png)

In order to make your plugin available in the XD plugin manager, you'll need to go through our submission and review process.


## Prerequisite

- [A packaged plugin](/distribution/packaging.md)


## Pre-submission checklist

Before you submit, be sure to go through this checklist of common reasons for rejection. Doing so now might save you an extra step or two on your way to publishing.

**Checklist**

- Does the plugin ID in your `manifest.json` file match the plugin ID assigned to you on the [I/O Console](https://console.adobe.io/plugins)? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Did you run "Check Plugin Name Availability" in the [I/O Console](https://console.adobe.io/plugins) to confirm your plugin name in your `manifest.json` file is available to use ? 
- Is the plugin `version` number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Have you picked the appropriate keywords for your plugin in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata). 
- Do you have labels in all supported languages noted in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata). 
- Do your website and support urls follow the standard url format in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata). 
- Do you have icons prepared for all required sizes? [Learn more here](/reference/structure/manifest.md#top-level-metadata). 
- Do all your icons match the respective sizes noted in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).  
- Is the plugin `host.minVersion` number and (optionally) `host.maxVersion` number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- If this is not your first time submitting this plugin, have you _increased_ the version number in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata). You _must_ increment your version number _each time you submit your plugin for review_.
- When packaging your plugin, did you make sure to compress the files (and _not_ the parent folder)? [Learn more here](/distribution/packaging.md#1-compress-your-files-as-a-zip-file).
- Is the .XDX file less than 25MB in size?
- Did you verify the .XDX installs when you double-click it?
- After installing, did you verify that the plugin runs when you select it's command(s) from XD's _Plugins_ menu?

Answering "no" to any of these questions will get your submission rejected, requiring you to submit again.


## Submit your plugin

You can submit your plugin for review through the I/O Console, where you can provide your packaged plugin. The I/O console will pass or fail your submission based on its built-in validations. Once your plugin is successfully submitted via the I/O console, our CC Integration review team will review the plugins.

We'll walk you through the workflow below.

### 1. Read the submission guidelines

All plugins are reviewed by our CC Integrations Review team. Please make sure to read our [Creative Cloud Developer Submission Guidelines](https://partners.adobe.com/exchangeprogram/creativecloud/build/dev-submission-guidelines.html) before submitting to ensure a smooth path to publishing your plugin. Plugins violating the guidelines may be rejected.


### 2. Begin your submission

To begin the submission for your plugin, visit the [I/O Console](https://console.adobe.io/plugins) and select your plugin from the plugins list.

This will take you to your plugin's Console page, which shows your plugin ID, a download link for your starter project, and a nice blue button that says "Submit For Review".

Before clicking on the "Submit for Review" button, make sure to click on the "Check Plugin Name Availability" button to check the availability of your plugin name written in [your manifest.json file](/reference/structure/manifest.md#top-level-metadata). Note that this plugin name is the one that will be displayed in the Plugin Manager. Do not confuse this name with your project name, which is only visible to you.

When ready, click "Submit For Review".

### 3. Upload your XD plugin

On this page, attach your `.xdx` file and click on "Next". Note that your .XDX file size must be under 25MB to upload it for submission.

In the next screen, the I/O Console will process the upload and extract information from your manifest.json file. 

### 4. Review your listing information

On this page, review the validation results run by the I/O Console on all required fields of [your manifest.json file](/reference/structure/manifest.md#top-level-metadata). Note that all changes have to be maded to your original files. 

When all necessary changes are made, re-package your plugin into the `.xdx` format and resubmit the plugin.

### 5. Submit your plugin

If your plugin passed all validation checks by the I/O Console, write notes (if any) to Adobe Reviewers and click on "Submit for Review".

Congratulations!

## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us.

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.


## Next steps

No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing) to learn about the ins and outs of marketing an Adobe XD plugin.
