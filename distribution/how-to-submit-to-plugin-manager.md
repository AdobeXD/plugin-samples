# Publishing your plugin

The simplest way for Adobe XD users to discover and install plugins is through XD's in-app Plugin Manager.

The XD Plugin Manager is accessed through the _Plugins_ menu in the app: go to _Plugins > Discover Plugins..._ to open it:

![XD Plugin Manager](/images/plugin-manager.png)

In order to make your plugin available in the XD Plugin Manager, you'll need to go through our submission and review process.

## Prerequisites

- [A packaged plugin](/distribution/packaging.md)
- [Pre-submission checklist](/distribution/submission-checklist.md)
- Edge is not currently supported for the plugin submission workflow. Please use another browser to submit your XD plugin.

## Submit your plugin

You can submit your plugin for review through the Developer Console, where you can provide your packaged plugin. The Developer Console will automatically validate your package and its [`manifest.json` file](/reference/structure/manifest.md). Then, you will be asked to provide more information about your plugin on the Console. If everything looks good, you can then submit your plugin and our CC Integrations Review team will review your plugin.

We'll walk you through the workflow below.

### 1. Read the submission checklist

All plugins are reviewed by our CC Integrations Review team. Make sure to thoroughly read [the submission checklist](/distribution/submission-checklist.md) before submitting to ensure a smooth path to publishing your plugin. Plugins violating these checklist items will be rejected.

### 2. Begin your submission

To begin the submission for your plugin, visit the [Developer Console](https://console.adobe.io/plugins) and select your plugin from your list of plugin projects.

This will take you to your plugin's details page, which shows your plugin ID, a download link for your starter project, and a blue button that says "Submit for Review".

Before clicking on the "Submit for Review" button, make sure to click on the "Check Plugin Name Availability" button to check the availability of your plugin name, which you have indicated in [your manifest.json file](/reference/structure/manifest.md#top-level-metadata). Note that this plugin name is the one that will be displayed in the XD Plugin Manager. Do not confuse this name with your Developer Console _project name_, which is only visible to you and is managed directly on the Console.

When ready, click "Submit For Review".

### 3. Upload your XD plugin

On this page, attach your .XDX file and click on "Next". Note that your .XDX file size must be under 50MB to upload it for submission.

The Developer Console will then process the upload and extract information from your `manifest.json` file.

### 4. Review your listing information

On this page, review the validation results on all required fields for [your manifest.json file](/reference/structure/manifest.md#top-level-metadata).

Note that any changes must be made in your original files. When all necessary changes are made, re-package your plugin and upload the plugin again.

### 5. Submit your plugin

If your plugin passed all validation checks by the Developer Console, write notes (if any) to the CC Integrations Review team and click on "Submit for Review".

Congratulations! We can't wait for you to join our growing community of published plugins.

## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us.

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.

## Next steps

No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing) to learn about the ins and outs of marketing an Adobe XD plugin.
