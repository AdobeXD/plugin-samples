# Quick Start: Make your first XD plugin

Let’s walk through creating your first Adobe XD panel plugin together.

We'll keep things simple in this Quick Start tutorial. Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD panel plugin.

At the end of the tutorial, we'll suggest some next steps for going deeper with the XD plugin APIs.

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A text editor to write your code in (like VSCode, Sublime Text, Brackets, Atom, etc)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/quick-start-panel).

### 0. Get a plugin ID from the I/O Developer Console

Before you start, you'll want to create a plugin project on the Adobe I/O Developer Console.

1. [Go to the I/O Console and sign in or sign up](https://console.adobe.io/plugins)
1. Click "Create Plugin"
1. Create a plugin project by giving it a project name and clicking "Create Plugin". Note that this project name is not public; it is only visible to you and can be changed directly on the Console later.
1. On the following page, get the 8-character unique plugin ID in the "Plugin Details" section.
1. Optionally on the same page, download the starter project, which contains a functioning Hello, World sample plugin.

We'll use your plugin ID in one of the next steps.

### 1. Identify where your plugins are located

Adobe XD loads plugins that are in development from a `develop` folder in a specific location on your machine. To get to that folder, simply go to this menu item: _Plugins > Development > Show Develop Folder_.

This will open the `develop` folder, which we'll use in the next step.

### 2. Create your plugin scaffold

Next, you'll need to make a new folder within the `develop` folder to store the plugin files that you'll create below. Name your new plugin folder anything you like.

Now, let's create your plugin files. Open your favorite text editor and create two files inside of your new plugin folder with these _exact_ names:

1.  `manifest.json`

This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on.

[Learn about the manifest here](/reference/structure/manifest.md).

2.  `main.js`

This file contains your JavaScript code that implements your plugin's functionality.

[Learn more about `main.js` here](/reference/structure/handlers.md).

These two files go into your plugin's parent directory. When you have the right structure, it will look like this:

```
my-plugin-folder
├── main.js
└── manifest.json
```

It's possible to have more files if you want, but these files are the bare minimum requirement for your plugin to work, and are all we'll need for this Quick Start tutorial.

### 3. Create your plugin’s manifest

In the previous step, you created a file named `manifest.json`. Open that file and paste in this JSON object:

```json
{
  "id": "YOUR_ID_HERE",
  "name": "Hello World sample plugin",
  "version": "0.0.1",
  "description": "Description of your plugin.",
  "summary": "Summary of your plugin",
  "languages": ["en"],
  "author": "Your Name",
  "helpUrl": "https://mywebsite.com/help",
  "host": {
    "app": "XD",
    "minVersion": "18.0"
  },
  "uiEntryPoints": [
      {
        "type": "panel",
        "label": "Enlarge a Rectangle",
        "panelId": "enlargeRectangle"
      }
    ]
}
```

Be sure to replace the `id` value with the unique plugin ID you got from the I/O Console in the first step:

```json
"id": "1234ABCD",
```

If you're curious about what each entry means, [see the manifest documentation](/reference/structure/manifest.md), where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager. 

The value of the `panelId` property may be any string; in this case, it's `enlargeRectangle`. In the next section, we will see how this string is associated with the code for our plugin.

### 4. Create your plugin’s code

Next, we need to create the JavaScript code for our plugin. The code lives in a file named `main.js`, which we created in step #2.

Let's create some empty functions first. Copy and paste this code into `main.js`:

```js
function create() {
  
}

function show(event) {
    
}

function hide(event) {
    
}

function update(selection) {

}

module.exports = {
    panels: {
        enlargeRectangle: {
            show,
            hide,
            update
        }
    }
};
```

Now, let's look at each function in detail, starting with a helper function, `create`. `create` function is going to create the `panel` element in the DOM, inject an HTML, add a click event listner and provide a callback function, and return the UI node which will be used by `show` function to display the UI.
```js
function create() {
    const HTML = // [1]
        `<style>
            label.row > span {
                color: #8E8E8E;
                width: 20px;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
        </style>
        <form method="dialog" id="main">
            <div class="row break">
                <label class="row">
                    <span>↕︎</span>
                    <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Height" />
                </label>
                <label class="row">
                    <span>↔︎</span>
                    <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Width" />
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
        </form>
        <p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>
        `
    function exec() { // [2]
        const { editDocument } = require("application"); // [3]
        const height = Number(document.querySelector("#txtV").value);  // [4]
        const width = Number(document.querySelector("#txtH").value);  // [5]

        editDocument({ editLabel: "Increase rectangle size" }, function (selection) { // [6]
            const selectedRectangle = selection.items[0]; // [7]
            selectedRectangle.width += width //[8]
            selectedRectangle.height += height 
        })
    }

    let rootNode = document.createElement("panel"); // [9]
    rootNode.innerHTML = HTML; // [10]
    rootNode.querySelector("form").addEventListener("submit", exec); // [11]

    return rootNode; // [12]
}
```
This code does the following:

1. Creates a `const` called `HTML` and stores an entire HTML which includes the `style` tag, `form` tag, and `p` tag at the highest level. The `form` tag contains a `div` which includes two text input fields and a `foooter` which has a button for users to click on. The `p` tag has a warning text which is used to warn users when they select a non-rectangle node inside the active XD document
2. Creates a nested function called `exec` which is added as a callback function in step #6
3. Gets reference to the `editDocument` method available in the `application` module
4. Gets user input value from the "height" input element
5. Gets user input value from the "width" input element
6. Panel plugins can make edits to the active XD document by using the [`editDocument`](/refernce/application.md) method
7. Gets uer's selected node. Some UI logic is added later to ensure this is a rectangle.
8. Modifies the `width` and `height` of the selected rectangle
9. Creates a `panel` element in the DOM
10. Attaches the HTML created in step #1
11. Adds a submit listener for the form element and adds a callback function `exec` created in step #2
12. Returns the UI root node to be used in the `show` function

Next, let's look at the `show` function. `show` function is one of the two required functions for a panel plugin. `show` function is called when your plugin is made visible to the user. 

```js
function show(event) { // [1]
    const { selection } = require("scenegraph") // [2]
    event.node.appendChild(create()); // [3]
    update(selection); // [4]
}
```
This code does the following:

1. `show` function gives you access to `event` which includes a `node` property to which you should attach your user interface
2. Gets reference to the `selection` object imported from the `scenegraph` module
3. Adds the UI root node returned from the `create` helper function to `event.node`
4. Updates the plugin UI by using the `update` function (explained later) and passes the `selection` object

The other required function is `hide` which runs when the user either chooeses another panel or clicks on "Layers Panel" or "Assets Panel".
```js
function hide(event) { // [1]
    event.node.firstChild.remove() // [2]
}
``` 
This code does the following:

1. The parameter that is passed also includes a `node` property 
2. You can choose to remove your UI at this time, or if you prefer to reuse your UI, you can leave it attached. If you do so, be sure to handle `show` properly (as in, don't attach your UI multiple times, or the user will see duplicates)

The last function, `update`, is an optional function which is called whenever the user changes selection or mutates a `node` within that selection. A mutation can be anything, including moves, resizes, etc. Whenever this function is called, it is important to get in and out as quickly as possible -- while this function executes, XD is blocked. 
```js
function update(selection) { // [1]
    const { Rectangle } = require("scenegraph"); // [2]
    let form = document.querySelector("form"); // [3]
    let warning = document.querySelector("#warning"); // [4]
    if (!selection || !(selection.items[0] instanceof Rectangle)) { // [5]
        form.style.display = "none";
        warning.style.display = "inline";
    } else {
        warning.style.display = "none";
        form.style.display = "block";
    }
}
```

This code does the following:
1. `update` comes with two parameters, `selection` and `documentRoot`. This example only uses `selection`
2. Gets reference to the `Rectangle` object imported from the `scenegraph` module
3. Gets reference to the `form` tag in your HTML
4. Gets reference to the `p` tag with a warning message
5. Checks if user has selected anything and the selection is a rectangle. If this validation passes, the form appears and the warning message disappears. If not, a warning message is shown to the user and the form disappears


Finally, you need to export the functions you created.
```js
module.exports = {
    panels: {
        enlargeRectangle: {
            show,
            hide,
            update
        }
    }
};

```
Above code exports an object, with a `panels` property. The value of `panels` is an object which associates the JavaScript handler function (`enlargeRectangle`) with your manifest's `panelId` property. The panel ID property name (here, `enlargeRectangle`) must match the `panelId` value declared in your manifest exactly. Note that `show` and `hide` functions are required for your panel plugin while `update` function is optional.

### 5. Run your plugin

So you’ve written a plugin! How do we run it?

If you haven’t already done so, launch XD and open a new document. Then navigate to the _Plugins > Enlarge a Rectangle_ menu item. This will open your panel on the left hand side of the XD application

![A panel with input boxes and a button](/images/panel-success.png)

Congratulations! You’ve built your first panel plugin for Adobe XD!

## Next Steps

- Learn about [debugging plugins](/tutorials/debugging/index.md)
- Follow our [tutorials](/tutorials/)
- See working code in our [sample repos on GitHub](https://github.com/AdobeXD/Plugin-Samples)
- Browse the [API references](/reference/how-to-read.md)
