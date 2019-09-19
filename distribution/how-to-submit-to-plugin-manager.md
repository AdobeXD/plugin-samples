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

This will take you to your plugin's details page, which shows your plugin ID, a download link for your starter project, and button that says "Distribute".

![Distribute your plugin](/images/submit.png)

Before clicking on the "Submit for Review" button, make sure to read [the submission checklist](/distribution/submission-checklist.md). This is the same checklist that our review team uses to determine whether to reject or approve your plugin.

When ready, click "Submit For Review".

### 3. Submit plugin for review - Listing Information
The "Submit plugin for review" page has two tabs: "Listing information" and "Plugin file". As the first step, you are asked to provide some facts about you, the publisher, and your plugin. Make sure that the plugin name in your [manifest file](/reference/structure/manifest.md) and the plugin name you provide here match.

![Publisher and plugin info](/images/plugin-and-publisher-info.png)

Next, indicate whether your plugin requires installations of another application or use of a third party service. Also, include release notes for this version. This information will be displayed in the plugin manager to help users onboard your plugin.

![Publisher and plugin info](/images/connect-and-version-details.png)

Next, you are asked to provide three plugin icons (`48 * 48`, `96 * 96`, and `192 * 192`). These icons will be used for display in the Plugin Manager listing. Note that, separately, you are required to include two additional images (`24 * 24`, `48 * 48`) in your plugin and includ them in [the manifest](/reference/structure/manifest.md).

Now you can provide your plugin's screenshots to be included in the Plugin Manager listing. Please take a look at [the screenshot requirements](https://adobexdplatform.com/plugin-docs/distribution/how-to-submit-to-plugin-manager.html). 

![Note to reviewer](/images/note-to-reviewers.png)

Finally, if you have any message for our reviewers, write them here.

### 4. Submit plugin for review - Plugin File

Once you are done with providing some information about your plugin, icons, and screenshots, you will be asked to attach your plugin file. Make sure to properly [package your plugin](/distribution/packaging.md) into an `.xdx` file. 

If your plugin passed all validation checks by the Developer Console, the "Submit" button will be activated for you to click.

Congratulations! We can't wait for you to join our growing community of published plugins.

## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us. Note that the same [submission checklist](/distribution/submission-checklist.md) will be used by our reviewers to determine whether to reject or approve your plugin.

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.

## Next steps

No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing) to learn about the ins and outs of marketing an Adobe XD plugin.
