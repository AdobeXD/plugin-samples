# How to migrate from modal to panel

Are you interested in converting your modal plugin to a panel plugin? Keep in mind that not every modal plugin is a good fit for this change. If you are curious about what differences exist, take a look at the docs for each UI entrypoint:

- [Modal dialogs](/reference/ui/dialogs/index.md)
- [Panels](/reference/ui/panels/index.md)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- [Modal Quick Start Tutorial](/tutorials/quick-start)
- [Panel Quick Start Tutorial](/tutorials/quick-start-panel)
- [Debugging Tutorial](/tutorials/debugging/index.md)

## Development Steps

### 1. Open your modal plugin codes

Note that your plugin structure does not change. Still, the minimum required files for your panel plugin to work are `main.js` and `manifest.json`.

![same plugin structure](/images/same-plugin-structure.png)

We are going to take a look at a sample plugin that lets users increase the width and height of the selected rectnagle by inputing pixel values in the UI. As you can imagine, this plugin would make the process more efficient if it were a panel plugin. Let's look at how they look:

**Modal**

![Modal UI example](/images/modal-ui-example.png)

**Panel**

![Panel UI example](/images/panel-ui-example.png)


Now, let's look at each file and see what we need to change next.

### 2. Change `uiEntrPoints` and `host.minVersion` of your `manifest.json`

Let's take a look at both cases.

Modal:
```js
"host": {
        "app": "XD",
        "minVersion": "15.0"
},
"uiEntryPoints": [
        {
            "type": "menu",
            "label": "Enlarge a Rectangle",
            "commandId": "enlargeRectangle"
        }
    ]
```

Panel:
```js
"host": {
        "app": "XD",
        "minVersion": "19.0"
},
"uiEntryPoints": [
        {
            "type": "panel",
            "label": "Enlarge a Rectangle",
            "panelId": "enlargeRectangle"
        }
    ]
```

As you can see, `host.minVersion` is changed to `19.0` since `19.0` is the earliest version that makes panels work. Also, `uiEntryPoints` needs to be updated as well. `type` should be `panel` and `commandId` key needs to be changed to `panelId`.

### 3. Understand the new structure of `main.js`
A modal plugin needs one function to be exported:
```js
function enlargeRectangle(){
    // your code here
}
module.exports = {
    commands: {
        enlargeRectangle
    }
};
```
A panel plugin, on the other hand, requires you to export 2 functions with keys named `show` and `hide`. Also, you can optionally export `update`. 
```js
function show(event) {
    // your code here
}

function hide(event) {
    // your code here
}

function update(selection) {
    // your code here
}


module.exports = {
    panels: {
        example: {
            show,
            hide,
            update
        }
    }
};
```
Review the specific of these requirements in the [references](/reference/ui/panels/index.md) before moving on. 

### 3. Review your modal `main.js` code
Let's first look at the `main.js` file of your modal plugin:
```js
const { selection } = require("scenegraph"); //[1]

function enlargeRectangle() {
    var html = // [2]
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
            <footer>
                <button id="ok" type="submit" uxp-variant="cta">Apply</button>
            </footer>
        </form>
        `

    function exec() { // [3]
        const height = Number(document.querySelector("#txtV").value); // [4]
        const width = Number (document.querySelector("#txtH").value); // [5]
        const selectedRectangle = selection.items[0]; // [6]
        selectedRectangle.width += width // [7]
        selectedRectangle.height += height
    }
    let dialog = document.createElement("dialog"); // [8]
    dialog.innerHTML = html; // [9]
    document.appendChild(dialog); // [10]
    document.querySelector("form").addEventListener("submit", exec); // [11]
    return dialog.showModal() // [12]
}

module.exports = { // [13]
    commands: {
        enlargeRectangle
    }
};
```
This code does the following:
1. Gets reference to the `selection` 
2. Creates a `const` called `HTML` and stores an entire HTML which includes the `style` tag, `form` tag, and `p` tag at the highest level. The `form` tag contains a `div` which includes two text input fields and a `foooter` which has a button for users to click on. The `p` tag has a warning text which is used to warn users when they select a non-rectangle node inside the active XD document
3. Creates a nested function called `exec` which is added as a callback function in step #6
available in the `application` module
4. Gets user input value from the "height" input element
5. Gets user input value from the "width" input element
6. Gets uer's selected node. Some UI logic is added later to ensure this is a rectangle.
7. Modifies the `width` and `height` of the selected rectangle
8. Creates a `dialog` element
9. Attaches the HTML created in step #1
10. Attaches the `dialog` element created in step #8 to the DOM
11. Adds a submit listener for the form element and adds a callback function `exec` created in step #2
13. Exports the main function

### Modify the `main.js` file
Let's start modifying/adding codes in the `main.js` file.

Your HTML file does not have to change but let's add a `p` tag to show a warning message if user has selected a node that's not rectangle. Unlike modal UI, pane UI can show dynamic contents based on user's selection.

```html
<p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>
```

Unlike modal plugin, panel plugins stay open and persistent. This means panel plugins are completely asynchronous and they require a special function to hold the scenegraph open for changes for the entireduration the panel is visible. So you will need access to a new method:

```js
const { editDocument } = require("application");
```

Any part of your code that makes changes to the scenegraph needs to be wrapped with `editDocument` method.

```js
editDocument({ editLabel: "Increase rectangle size" }, function (selection) {
    const selectedRectangle = selection.items[0];
    selectedRectangle.width += width
    selectedRectangle.height += height
})
```
See the [`editDocument`](/reference/application.md) method for reference.

Now, instead of creating a `dialog`, let's create a `panel` element and insert the HTML and add a event linstner with the `exec` function as a callback
```js
let rootNode = document.createElement("panel");
rootNode.innerHTML = HTML;
rootNode.querySelector("form").addEventListener("submit", exec);
```

The entire `main.js` code modified so far will be your `show` function that runs when the plugin opens.
```js
function show(event){
    const HTML =
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
    function exec() {
        const { editDocument } = require("application");

        const height = Number(document.querySelector("#txtV").value);
        const width = Number(document.querySelector("#txtH").value);

        editDocument({ editLabel: "Increase rectangle size" }, function (selection) {
            const selectedRectangle = selection.items[0];
            selectedRectangle.width += width
            selectedRectangle.height += height
        })
    }

    let rootNode = document.createElement("panel");
    rootNode.innerHTML = HTML;
    rootNode.querySelector("form").addEventListener("submit", exec);
    event.node.appendChild(rootNode);
}
```
Note that `show` function provides the `event` as a parameter, which you can use to attach the UI node created above.

Next, let's add the `hide` function which runs when the panel becomes invisible.
```js
function hide(event) {
    event.node.firstChild.remove()
}
```
You can use the `event` parameter to remove your UI node. If you don't remove the node, when the panel opens next time, UI will be duplicated.

Finally, this part is optional since `update` is an optional function that make your UI dynamically respond to user's selection changes.
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


Now, you have successfully converted your modal plugin to a panel plugin!

The complete example can be found in [our Samples repository](https://github.com/AdobeXD/plugin-samples/tree/master/quick-start-panel).

## Next Steps

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
