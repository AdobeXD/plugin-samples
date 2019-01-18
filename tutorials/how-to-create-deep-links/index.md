# How to create a deep link for a plugin listing

This tutorial walks through the process of deep-linking to an XD plugin listing. Deep-linking is a method by which you can get users into a specific part of an application using a custom URL.

## Prerequisites

- Plugin listing deep-linking only works with users on Adobe XD 14+ (release in December 2018)
- Your plugin should have a plugin ID and be [listed on the plugin manager](/distribution/how-to-submit-to-plugin-manager.html)

## URL & Parameters

In this section, we'll look at how to create the unique URL for your plugin listing.

### Base URL

All plugin listing deep links start with this base URL:

```
https://xd.adobelanding.com/en/xd-plugin-download/?
```

### Parameters

These parameters are appended to the base URL:

`name`- This parameter refers to your unique plugin ID which can be retrieved from the [Adobe I/O Console](https://console.adobe.io/plugins)

![Console displaying plugin ID](/images/console.png)

### Complete example

```
https://xd.adobelanding.com/en/xd-plugin-download/?name=036869b3
```

## Successful user workflow

This section describes what the user will experience when they click a plugin listing deep link.

### User confirmation

The browser will ask user for confirmation:

![Open XD confirmation](/images/openxd.png)

### Browser confirmation message

Once the user clicks on "Open Adobe XD CC", the browser will display a confirmation messsage:

![Browser confrimation page](/images/confirmation.png)

### Transfer to XD

Finally, the user is taken to the Adobe XD application with the plugin manager open to the plugin listing. The user must to click "Install":

![Plugin install page](/images/plugininstall.png)

## Fallback

This section describes what the user will experience when there is an issue encountered in the above workflow.

### Inaccurate parameters

If no parameter is included or inaccurate parameters are entered in the URL, the browser will show an error message with further information on how to manually discover plugins:

![Plugin not found](/images/pluginnotfound.png)

### XD not installed

If XD is not found on user's system, the browser will show an error message with the option to download XD:

![XD not found](/images/xdnotfound.png)

## Next Steps

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
