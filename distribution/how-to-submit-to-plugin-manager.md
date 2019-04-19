# Publishing your plugin

The simplest way for Adobe XD users to discover and install plugins is through XD's in-app Plugin Manager.

The XD Plugin Manager is accessed through the _Plugins_ menu in the app: go to _Plugins > Discover Plugins..._ to open it:

![XD Plugin Manager](/images/plugin-manager.png)

In order to make your plugin available in the XD Plugin Manager, you'll need to go through our submission and review process.

## Prerequisite

- [A packaged plugin](/distribution/packaging.md)
- Edge is not currently supported for the plugin submission workflow. Please use another browser to submit your XD plugin.

## Pre-submission checklist

Before you submit, be sure to go through this checklist of common reasons for rejection. Doing so now might save you an extra step or two on your way to publishing.

**Checklist**

- Does the plugin ID in your `manifest.json` file match the plugin ID assigned to you on the [I/O Console](https://console.adobe.io/plugins)? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Did you use the "Check Plugin Name Availability" tool on your plugin details page of the [I/O Console](https://console.adobe.io/plugins) to confirm the plugin name you've listed in your `manifest.json` file is available to use?
- Is the plugin version number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Have you picked the appropriate keywords for your plugin in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Do you have labels in all supported languages noted in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Do your website and support URLs follow the standard URL format in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Do you have icons for all 4 required sizes listed in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Is the plugin `host.minVersion` number and (optionally) `host.maxVersion` number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- If this is not your first time submitting this plugin, have you _increased_ the version number in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata). You _must_ increment your version number (typically, the patch version; e.g, `1.0.0` → `1.0.1`) _each time you submit your plugin for review_.
- When packaging your plugin, did you make sure to compress the files (and _not_ the parent folder)? [Learn more here](/distribution/packaging.md#1-compress-your-files-as-a-zip-file).
- Is the .XDX file less than 50MB in size?
- Did you verify the .XDX install on your machaine when you double-click it?
- After installing, did you verify that the plugin runs when you select its command(s) from XD's _Plugins_ menu?

Answering "no" to any of these questions will get your submission rejected, requiring you to address the issue in your plugin and submit again.

## Submit your plugin

You can submit your plugin for review through the I/O Console, where you can provide your packaged plugin. The I/O Console will automatically validate your package and its `manifest.json` file. Once validation is passed, you'll have an opportunity to review the listing data we extract from your manifest. If everything looks good, you can then submit your plugin and our CC Integrations Review team will review your plugin.

We'll walk you through the workflow below.

### 1. Read the submission guidelines

All plugins are reviewed by our CC Integrations Review team. Please make sure to read our [Creative Cloud Developer Submission Guidelines](https://partners.adobe.com/exchangeprogram/creativecloud/build/dev-submission-guidelines.html) before submitting to ensure a smooth path to publishing your plugin. Plugins violating the guidelines may be rejected.

### 2. Begin your submission

To begin the submission for your plugin, visit the [I/O Console](https://console.adobe.io/plugins) and select your plugin from your list of plugin projects.

This will take you to your plugin's details page, which shows your plugin ID, a download link for your starter project, and a blue button that says "Submit for Review".

Before clicking on the "Submit for Review" button, make sure to click on the "Check Plugin Name Availability" button to check the availability of your plugin name, which you have indicated in [your manifest.json file](/reference/structure/manifest.md#top-level-metadata). Note that this plugin name is the one that will be displayed in the XD Plugin Manager. Do not confuse this name with your I/O Console _project name_, which is only visible to you and is managed directly on the Console.

When ready, click "Submit For Review".

### 3. Upload your XD plugin

On this page, attach your .XDX file and click on "Next". Note that your .XDX file size must be under 50MB to upload it for submission.

The I/O Console will then process the upload and extract information from your `manifest.json` file.

### 4. Review your listing information

On this page, review the validation results on all required fields for [your manifest.json file](/reference/structure/manifest.md#top-level-metadata).

Note that any changes must be made in your original files. When all necessary changes are made, re-package your plugin and upload the plugin again.

### 5. Submit your plugin

If your plugin passed all validation checks by the I/O Console, write notes (if any) to the CC Integrations Review team and click on "Submit for Review".

Congratulations! We can't wait for you to join our growing community of published plugins.

## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us.

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.

## Next steps

No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing) to learn about the ins and outs of marketing an Adobe XD plugin.
