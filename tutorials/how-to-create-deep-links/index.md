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

### Browser confirmation message and XD launch

Once the user clicks on "Open Adobe XD CC", the browser will display a confirmation messsage and take user the Adobe XD application with the plugin manager open to the plugin listing:

![GIF for Browser confirmation message and XD launch](/images/deeplink.gif)  

## Fallback

This section describes what the user will experience when there is an issue encountered in the above workflow.

### No parameter provided

If no parameter is included in the URL or an inaccurate parameter is provided, the browser will show an error message and show the user how to manually download plugins  

Inaccurate parameter examples:
```
https://xd.adobelanding.com/en/xd-plugin-download/?
https://xd.adobelanding.com/en/xd-plugin-download/?wrongparameter=036869b3
```

These inaccurate URLs will result in showing the following error message in the browser:

![Inaccurate parameter](/images/inaccurateparam.png)

### Inaccurate plugin ID provided

If an inaccurate plugin ID is provided, the browser will succesfully launch XD but XD will show "plugin not found":  

Example:
```
https://xd.adobelanding.com/en/xd-plugin-download/?name=wrongpluginid
```

![Plugin not found](/images/pluginnotfound.png)  

### XD not installed

If XD is not found on user's system, the browser will show an error message with the option to download XD:

![XD not found](/images/xdnotfound.png)

## Next Steps

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
