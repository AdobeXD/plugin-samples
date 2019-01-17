# How to create a deep-link into plugin install

This tutorial walks through the process of deep-linking into XD plugin install. Deep-linking is a method by which you can get users into a specific experience in an app using custom URL.

## Prerequisites
- XD Plugin deep-linking only works with users on **December 2018 version** and above
- Your plugin should have a plugin ID and be listed on the plugin manager

## URL & Parameters
- Base URL: https://xd.adobelanding.com/en/xd-plugin-download/?
- `name`: This parameter refers to your plugin's ID which can be retrieved from [Adobe Console](https://console.adobe.io/plugins)  
![Console displaying plugin ID](/images/console.png)  
**Example**
```
https://xd.adobelanding.com/en/xd-plugin-download/?name=036869b3
```

## Result
**Success**
1. The browser will ask user for confirmation  
![Open XD confirmation](/images/openxd.png)  

1. Once user clicks on "Open Adobe XD CC", the browser will display the confirmation messsage  
![Browser confrimation page](/images/confirmation.png)  

1. Finally, the user is taken to Xd product with the plugin manager open to the plugin. The user has to click "Install"  
![Plugin install page](/images/plugininstall.png)  

**Fallback**
1. No Params included in URL - Show error message and show the user how to manually download plugins
2. Couldn't find XD on users system - Show error message and show the user how to download plugins and give the option to download XD
3. On mobile - Send Reminder Email with Link 

## Next Steps
Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
