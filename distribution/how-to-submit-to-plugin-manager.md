# Publishing your plugin

The simplest way for Adobe XD users to discover and install plugins is through XD's in-app Plugin Manager.

The XD Plugin Manager is accessed through:

- the _Plugins_ menu in the app's menu bar: go to _Plugins > Discover Plugins..._
- the plus button (+) in the plugins panel on the left-hand side of the app

![XD Plugin Manager](/images/plugin-manager.png)

In order to make your plugin available in the XD Plugin Manager, you'll need to go through our [submission checklist and review process](/distribution/submission-checklist.md).

## Prerequisites

- [Pre-submission checklist](/distribution/submission-checklist.md)
- [A packaged plugin](/distribution/packaging.md)

**Note**: Edge is not currently supported for the plugin submission workflow. Please use another browser to submit your XD plugin.

## Submit your plugin

You can submit your plugin for review through the I/O Developer Console, the same place you got your [unique plugin ID for your manifest](/reference/structure/manifest.md).

On the I/O Console, you can provide your packaged plugin. The I/O Console will automatically validate your package and its [manifest file](/reference/structure/manifest.md). Then, you will be asked to provide more information about your plugin on the Console. 

If everything looks good, you can then submit your plugin and our CC Integrations Review team will review it. 

We'll walk you through the workflow below.

### 1. Read the submission checklist

All plugins are reviewed by our CC Integrations Review team. Make sure to thoroughly read [the submission checklist](/distribution/submission-checklist.md) before submitting to ensure a smooth path to publishing your plugin. Plugins violating these checklist items will be rejected, requiring you to address the issues and resubmit.

### 2. Begin your submission

To begin the submission for your plugin, visit the [Developer Console](https://console.adobe.io/plugins) and select your plugin from your list of plugin projects.

This will take you to your plugin's "Project Overview" page, which shows your plugin ID, a download link for your starter project, and more. 

In the left-hand navbar, you'll see a "Distribute" page.

![Distribute your plugin](/images/submit.png)

You can begin creating your listing from this page.

### 3. Submit plugin for review - Listing Information
The "Submit plugin for review" page has two tabs: "Listing information" and "Plugin file". As the first step, you are asked to provide some facts about you, the publisher, and your plugin. Make sure that the plugin name in your [manifest file](/reference/structure/manifest.md) and the plugin name you provide here match.

![Publisher and plugin info](/images/plugin-and-publisher-info.png)

Next, indicate whether your plugin requires installations of another application or use of a third party service. Also, include release notes for this version. This information will be displayed in the plugin manager to help users onboard your plugin.

![Connection and version info](/images/connect-and-version-details.png)

Next, you are asked to provide three plugin icons (48 x 48 px, 96 x 96 px, and 192 x 192 px). These icons will be used for display in the Plugin Manager listing.

> **Info**
> Note that, separately, you are required to include additional icons in your plugin package and include them in [the manifest](/reference/structure/manifest.md). These icons can be different from the ones that you use in Console and they will be used to show icons in the plugins panel within the application.

You must also provide at least one screenshot of your plugin, which will be included in your Plugin Manager listing when published.

![Icon and screenshot info](/images/plugin-icons-and-screenshots.png)

Finally, if you have a message for our reviewers, write it here. 

> **Info**
> Note that if your plugin requires a paid account, license number, or other such credentials to use all features of the plugin, you must provide test credentials in the "Note to Adobe reviewers" field so Adobe can review the plugin. If we need credentials from you and they have not been shared in this field, your plugin submission will be rejected.

![Note to reviewer](/images/note-to-reviewers.png)

### 4. Submit plugin for review - Plugin File

Once you have provided all required information about your plugin, including icons and screenshots, you will be asked to attach your plugin package. Make sure to properly [package your plugin](/distribution/packaging.md) into an `.xdx` file. 

When your plugin passes all validation checks by the I/O Console, the "Submit" button will be activated for you to click.

Congratulations on your submission! We can't wait to have a look at what you've created!

## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us. 

> **Info**
> Many of the items our reviewers check for when reviewing a plugin are noted in the [submission checklist](/distribution/submission-checklist.md).

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.

## Marketing your plugin

No matter how you plan to distribute, be sure to see our [plugin marketing guide](./marketing.md) to learn about the ins-and-outs of marketing an Adobe XD plugin.
