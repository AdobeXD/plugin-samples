# Publishing your plugin

The simplest way for Adobe XD users to discover and install plugins is through the XD in-app plugin manager.

The XD plugin manager is accessed through the _Plugins_ menu in the app: go to _Plugins > Discover Plugins..._ to open it:

![](/images/plugin-manager.png)

In order to make your plugin available in the XD plugin manager, you'll need to go through our submission and review process.


## Prerequisite

- [A packaged plugin](/tutorials/how-to-package-a-plugin/index.md)


## Pre-submission checklist

Before you submit, be sure to go through this checklist of common reasons for rejection. Doing so now might save you an extra step or two on your way to publishing.

**Checklist**

- Does the plugin ID in your `manifest.json` file match the plugin ID assigned to you on the [I/O Console](https://console.adobe.io/plugins)? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Is the plugin `version` number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- Is the plugin `host.minVersion` number and (optionally) `host.maxVersion` number _format_ correct in your `manifest.json` file? [Learn more here](/reference/structure/manifest.md#top-level-metadata).
- When packaging your plugin, did you make sure to compress the files (and _not_ the parent folder)? [Learn more here](/distribution/packaging.md#1-compress-your-files-as-a-zip-file).
- Is the .XDX file less than 25MB in size?
- Did you verify the .XDX installs when you double-click it?
- After installing, did you verify that the plugin runs when you select it's command(s) from XD's _Plugins_ menu?

Answering "no" to any of these questions will get your submission rejected, requiring you to submit again.


## Submit your plugin

You can submit your plugin for review through the I/O Console, where you can provide your packaged plugin, a description of your plugin, plugin icons, and release notes.

We'll walk you through the workflow below.

> **tip**
> It's best to compose any copy (like plugin description and release notes) in your favorite text editor, and save it to your machine. Composing copy in a web form always runs the risk of loss, and you never know when you might need your copy later.

### 1. Read the submission guidelines

All plugins are reviewed by our CC Integrations Review team. Please make sure to read our [Creative Cloud Developer Submission Guidelines](https://partners.adobe.com/exchangeprogram/creativecloud/build/dev-submission-guidelines.html) before submitting to ensure a smooth path to publishing your plugin. Plugins violating the guidelines may be rejected.


### 2. Begin your submission

To begin the submission for your plugin, visit the [I/O Console](https://console.adobe.io/plugins) and select your plugin from the plugins list.

This will take you to your plugin's Console page, which shows your plugin ID, a download link for your starter project, and a nice blue button that says "Submit For Review".

Click "Submit For Review".


### 3. Upload your XD plugin

On this page you can:

1. Verify that the plugin ID in your plugin's manifest matches the one you see in the I/O Console
1. Upload your packaged plugin

Note that your .XDX file size must be under 25MB to upload it for submission.

> **info**
> The plugin name you see on this screen is the plugin name that users will see in the plugin manager. This name is not changeable. If you've decided to change the name of your plugin, before you submit you'll need to create a new plugin on the I/O Console, get the new plugin ID that you are issued, add that plugin ID to your plugin's manifest, and repackage the plugin.

### 4. Tell us about your XD plugin

On this page you can provide:

1. Your publisher name
1. Your support URL or email
1. A description of your plugin
1. An icon for your plugin

All information entered on this page will be user-facing, visible in the XD plugin manager.

### 5. Enter your release notes

On this page you can enter optionally release notes for your plugin. Release notes help both users and the CC Integrations Review team know what's new or fixed in your plugin.

Once you're ready to initiate the plugin review, click "Submit".

Congratulations!


## CC Integrations Review

After you submit, the CC Integrations Review team will review your plugin. Depending on current submission volume, it can take up to 10 business days before you hear a response. Thank you for being patient with us.

Once your submission has been reviewed, we’ll reach out letting you know if it has been approved or rejected, and provide any next steps.


## Next steps

No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing) to learn about the ins and outs of marketing an Adobe XD plugin.
