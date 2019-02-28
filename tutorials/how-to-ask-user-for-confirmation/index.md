# Asking the user for confirmation

There are many times when a plugin will need to ask the user whether or not it should proceed with a given course of action. This tutorial will show you an easy way to get user confirmation before proceeding with a task.

## Technology Used
- [Plugin Toolkit](https://github.com/AdobeXD/plugin-toolkit)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](/tutorials/quick-start)
- [Debugging Tutorial](/tutorials/debugging/index.md)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/ui-dialog-variations).

### 1. Add the "plugin helpers" library

Creating dialogs can take a lot of boilerplate code, but we've created a small library that makes it simple to display simple dialogs in the form of a "helper" library. This library is located at https://github.com/AdobeXD/plugin-toolkit.

To add the library to your project, you can:

* Click the "Clone or Download" button on the right side of the page
* Uncompress the zip file after the download completes
* Copy the `lib` folder to your plugin project

### 2. Require the `dialogs` module in `main.js`

Add the following to your `main.js`:

```js
const { confirm } = require("./lib/dialogs.js");
```

This will import a `confirm` function that we can call to display a confirmation dialog.

### 3. Create a function to display the confirmation

```js
async function showConfirm() {
	/* we'll display a dialog here */
}
```

Next, inside this function, we call `confirm` to actually show the confirmation dialog. `confirm` takes three arguments:

1. The dialog's title
2. The text you want to display to the user in the dialog's body
3. The two buttons from which you want the user to choose (A confirmation dialog can only have two buttons)

Let's see what that looks like in code:

```js
const feedback = await confirm("Enable Smart Filters?", //[1]
	"Smart filters are nondestructive and will preserve your original images.", //[2]
	["Cancel", "Enable"] /*[3]*/ );
```

Note that the third argument is an array of strings. These identify the names of the two buttons that will display in the confirmation dialog. These are given in the order they would appear on a macOS machine, which means that the "cancel" or negative button is listed first, and the "ok" or acceptance button is listed last.

### 5. React to which button was pressed

When the dialog is closed, some useful information about which button was pressed will be provided. You can access this using the `which` property on the `feedback` variable (return value from `confirm`).

```js
switch (feedback.which) {
	case 0:
		/* User canceled */
		break;
	case 1:
		/* User clicked Enable */
		break;
}
```

As you can see, the value of `which` maps to the buttons as specified when calling `confirm`. So `0` is the "Cancel" button and `1` is the "Enable" button.

### 6. Create the menu handler

We need to export a menu handler from the `main.js` file so that XD knows what to do with our plugin:

```js
module.exports = {
    commands: {
        showConfirm
    }
}
```

Be sure to add this to your plugin `manifest.json` as well:

```json
{
    "id": "ID_FROM_IO_CONSOLE",
    "name": "Show Confirmation",
    "host": {
        "app": "XD",
        "minVersion": "13.0"
    },
    "version": "1.0.0",
    "description": "Description of your plugin.",
    "summary": "Summary of your plugin",
    "languages": [
        "en"
    ],
    "author": "Your Name",
    "helpUrl": "https://mywebsite.com/help",
    "icons": [
        { "width": 48, "height": 48, "path": "images/icon01x.png" },
        { "width": 96, "height": 96, "path": "images/icon02x.png" },
        { "width": 144, "height": 144, "path": "images/icon03x.png" },
        { "width": 192, "height": 192, "path": "images/icon04x.png" }
    ],
    "uiEntryPoints": [
        {
            "type": "menu",
			"label": "Confirmation",
			"commandId": "showConfirm"
		}
    ]
}
```
Refer to the full documentation of [manifest.json file](/reference/structure/manifest.md#top-level-metadata) to learn more.

## Next Steps

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)

