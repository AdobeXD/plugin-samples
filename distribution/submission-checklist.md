# Submission Checklist

Adobe XD users can discover plugins directly within the app via the XD Plugin Manager. All XD plugins listed in the Plugin Manager must first go through a review process before being published.

By reviewing every plugin submission, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the plugins they install.

This document will give you an idea of what we’re checking for during the review process. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements and avoid having to fix things and resubmit before getting published.


## Plugin listing information

Plugin listing information is the content that users will see in the XD Plugin Manager when browsing your listing. Unless otherwise noted, this is information that you will input and maintain on the [Adobe Developer Console](https://console.adobe.io/projects).

In this section, we’ll go over what we’re checking for to ensure that your plugin listing is complete, correct, and in line with Adobe’s standards.

### Plugin description

* A plugin name can only include “XD” or “Adobe XD” if it fits the pattern “${Plugin Name} for XD”. Refer to the [Adobe Branding Guidelines](https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf) for further information.
    * OK: “Rectanglator”, or “Rectanglator for XD”
    * Not OK: “XD Rectanglator”, or “Rectanglator XD”.
* The plugin description must be relevant and self-explanatory.
* Regardless of supported languages, an English description must be provided.
* All listing content, including author name, email address, and website must comply with [Adobe Branding Guidelines](https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf) .	
* Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily.
* The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc).


### Manifest

* For panel plugins, the manifest minVersion must be set to 21.0 or above.
* For modal or headless plugins, the manifest minVersion must be set to 13.0 or above.

### Icons

* Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected.
* Plugin icons may not contain Adobe product assets or icons. 
* Plugin icons must be clear and free of distortion.
* All required plugin icons must be provided at the appropriate dimensions and file sizes. See the [manifest documentation](https://adobexdplatform.com/plugin-docs/reference/structure/manifest.html) and ["Publishing your plugin" guide](https://adobexdplatform.com/plugin-docs/distribution/how-to-submit-to-plugin-manager.html) to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.

### Adobe Branding

* Make sure to review and adhere to the [Adobe Branding Guidelines](https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf).
* Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names.
* Using Adobe assets and icons in your plugin or your plugin marketing material requires [explicit permission from Adobe (login required)](https://partners.adobe.com/exchangeprogram/creativecloud/marketing.html). Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.

### External Services

* If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin. 
* All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.


### Third Party Companion Apps

* When a companion app is required, your plugin's description must indicate where the user can download the companion app.  
* The companion app must successfully install on platforms it claims to support.
* The companion app must be able to successfully communicate with the plugin.
* The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).

### Inappropriate Content

* The plugin and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language.
* The plugin must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses.   


## Plugin functionality and UI

Once users install your plugin, we want to make sure they have a great experience with their newfound addition to Adobe XD’s core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more.


### Functionality

* The plugin must install without error.
* The plugin must launch via all insertion points that the plugin claims to support (e.g. Plugins Menu, Plugins Panel). 
* The plugin must support any keyboard shortcuts provided by the developer.
* The plugin must show a loading indicator or spinner during longer operations like loading large content or accessing resources via a network connection.
* Modal dialogs must provide an affordance in the UI for closing the modal (e.g. a cancel/close button).
* The plugin must perform the desired actions when the user interacts with components in the plugin’s UI.  
* The plugin must support all user selection types. Alternatively, if the plugin doesn’t support some selection types, the plugin must communicate this to the user when an unsupported selection is selected.
* The plugin must indicate to the user if an internet connection is not available but is required.
* The plugin must provide feedback to the user if it is unable to perform an action triggered by the user.
* The plugin must never show a completely blank UI.
* The plugin may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc).
* If the plugin supports login functionality, it must also provide logout.

### User Interface

* For modal plugins, the plugin must be functional when the XD application window is at the minimum size that XD itself supports.  
* For panel plugins, no content should be clipped when XD’s plugins panel is at minimum width.
* For panel plugins, the plugin's UI content must adapt appropriately when the panel width is increased.  
* For panel plugins, the plugin's UI content must adapt appropriately when the panel width is decreased.  
* The plugin must be functional when the XD application window is at maximum size.
* The plugin UI must scroll when all content is not visible on the screen.
* UI elements in the plugin must not overlap or truncate.  
* UI content must wrap or adapt as necessary to accommodate the available width of the UI.
* Plugin content must be in compliance with [Adobe Branding Guidelines](https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf). 
 

## Internationalization and Localization

* The plugin UI must not break when the user enters valid characters for all languages the plugin supports.
* The plugin must support input from local keyboards for all languages the plugin supports.
* The plugin must provide localized strings for all languages indicated as supported by the developer and successfully display them when the system is set to each supported locale.
* The plugin UI must not break due to localized strings for supported locales.


## Performance

* The plugin must not degrade the performance of Adobe XD. 
* The plugin must load in a timely manner. 
* The plugin must not cause abnormal resource usage (e.g., CPU, RAM, storage).
* The plugin must not cause crashes, system errors, or any major failures.

