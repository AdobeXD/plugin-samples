# Quick Start - React: Make your first XD plugin with React

While there are many choices when it comes to picking a JavaScript framework to build an XD plugin, we want to cover one of the most popular frameworks, React, first. 

Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD plugin with React.

## Prerequisites
- Basic knowledge of HTML, CSS, JavaScript, and React
- A text editor to write your code in (like VSCode, Sublime Text, Bracket, Atom, etc)
- Reviewed [Quickstart guide](/tutorials/quick-start/index.md)
- Installed [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)


## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/quick-start-react).


### 0. Folder structure
Note that we are going to use [webpack](https://webpack.js.org/) to bundle JavaScript files for usage in XD and [yarn](https://yarnpkg.com/en/) package manager to install dependencies. When you have the right structure, it will look like this:

```
my-plugin-folder
└── src
    └── main.jsx
    └── HelloForm.jsx
    └── react-shim.js
└── manifest.json
└── package.json
└── webpack.config.js
```

### 1. Install dependencies
In order to correctly use React in XD, you will have to install dependencies correctly. Follow the steps below:
1. List the required dependencies in `manifest.json`
```js
{
  "name": "helllo_react_jsx",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "watch": "nodemon -w src -e js,jsx,css -w webpack.config.js -x yarn build",
    "build": "webpack --mode development"
  },
  "license": "none",
  "private": true,
  "devDependencies": {
    "nodemon": "^1.18.7",
    "webpack": "^4.16.4",
    "webpack-cli": "^3.1.0"
  },
  "dependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-react-jsx": "^6.24.1",
    "css-loader": "^1.0.0",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "style-loader": "^0.22.0"
  }
}
```
2. List the webpack configurations in `webpack.config.js`
```js
module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: "commonjs2"
    },
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        "transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    externals: {
        scenegraph: "scenegraph"
    }
};
```
3. Install yarn, if needed
```
npm install -g yarn
```
4. Install dependencies
```
yarn install
```
All dependencies are installed and we are good to go!

### 2. Create your main files

Now, let's create your plugin files. Open your favorite text editor and create the following files and folders:

- `manifest.json` is your plugin’s manifest. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on. [Learn about the manifest here](/reference/structure/manifest.md).

- `src` is your plugin's folder that contains all JavaScript files that are going to be compiled
    - `main.jsx` is the main file for the plugin
    - `HelloForm.jsx` is the file that contains the only React component we are going to use. Note that you can have multiple `.jsx` files if needed
    - `react-shim.js` is a JavaScript file that helps React run smoothly in XD's environment. Further details to follow in a later section

### 3. Create your plugin’s manifest

In the previous step, you created a file named `manifest.json`. Open that file and paste in this JSON object:

```json
{
  "id": "QUICKSTART_REACT",
  "name": "Quickstart - React",
  "version": "1.0.0",
  "host": {
    "app": "XD",
    "minVersion": "13.0.0"
  },
  "uiEntryPoints": [
    {
      "type": "menu",
      "label": "Quickstart - React JSX",
      "commandId": "main"
    }
  ]
}
```

Be sure to replace the `id` value with the unique plugin ID you get from the I/O Console. 
```json
"id": "1234ABCD",
```
If you forgot how to do this, make sure to read [Quickstart guide](/tutorials/quick-start/index.md)

Reminder: the value of the `commandId` property may be any string; in this case, it's `main`. In the next section, we will see how this string is associated with the code for our plugin.


### 4. Create your plugin’s code

Next, we need to create the JavaScript code for our plugin. As noted in [Quickstart guide](/tutorials/quick-start/index.md), The code lives in a file named `main.js`. This file will be automatically created when webpack compiles all JavaScript files in your `src` folder.

```
src
└── main.jsx
└── HelloForm.jsx
└── react-shim.js
```
Now, lets start writing codes in these JavaScript files.

First of all, as noted earlier, we need `react-shim.js` file to make React run without any issue in the XD environment. Paste this code in `react-shim.js`
```js

if (window.setTimeout == null) {
    window.setTimeout = function (fn) { fn() };
}

if (window.clearTimeout == null) {
    window.clearTimeout = function () { };
}

if (window.cancelAnimationFrame == null) {
    window.cancelAnimationFrame = function () { };
}
if (window.requestAnimationFrame == null) {
    window.requestAnimationFrame = function () {
        console.log("requestAnimationFrame is not supported yet");
    }
}
if (window.HTMLIFrameElement == null) {
    window.HTMLIFrameElement = class HTMLIFrameElement { };
}
```
Since XD currently does not currently support `setTimeout`, `clearTimeout`, `cancelAnimationFrame`, `requestAnimationFrame`, and `HTMLIFrameElement`, we create these empty functions and classes to prevent your plugin from crashing.

Secondly, let's create a React component. Paste the following code in `HelloForm.jsx`
```js
const React = require('react'); // [1]
const { Text, Color } = require("scenegraph"); // [2]

class HelloForm extends React.Component { // [3]
    constructor(props) { // [4]
        super(props); 
        this.state = { name: "" }; // [5]
        this.onInputChange = (e) => { // [6]
            this.setState({ name: e.target.value })
        }
        this.onDoneClick = (e) => { // [7]
            const selection = this.props.selection; // [8]
            const newText = new Text(); // [9]
            newText.text = this.state.name; 
            newText.styleRanges = [{ // [10]
                length: newText.text.length,
                fill: new Color("#00F"),
                fontSize: 50
            }];
            selection.insertionParent.addChild(newText); // [11]
            newText.moveInParentCoordinates(100, 100); // [12]
            props.dialog.close(); // [13]
        }
    }

    render() { // [14]
        return (
            <form style={{ width: 300 }}>
                <h1>React with JSX Components</h1>
                <label>
                    <span>What is your name?</span>
                    <input onChange={this.onInputChange} />
                </label>
                <p>{"Hello " + this.state.name}</p>
                <footer>
                    <button type="submit" uxp-variant="cta" onClick={this.onDoneClick}>Done</button>
                </footer>
            </form>
        );
    }
}

module.exports = HelloForm; // [16]
```

This code does the following:

1.  Gets reference to `react` module installed earlier in the steps
2.  Gets references to the `Text` and `Color` classes from XD’s `scenegraph` module. There are several different [API modules you can load using `require()`](/reference/core/apis.html).
3.  Creates a react component called `HelloForm`
4.  Since you are going to initialize state and bind methods, implement a constructor for this React component and call `super(props)` to use props passed down from the parent
5.  Initializes a state called `name` with an empty string
6.  `onInputChange` method sets the `name` state with the string value passed from the input field
7.  `onDoneClick` is triggered after the submission happens and manipulates XD objects
8.  Creates a reference to `selection` passed down as a prop
9.  Creates a `Text` instance and set the `text` value as the input stored in the `name` state
10. Styles the text. More info on styling the text can be found in [`how-to-style-text` guide](/tutorials/how-to-style-text)
11. `addChild` method inserts the created text into the ideal insertion point determined by the `insertionParent` property of the `selection` object
12. Moves the added text `100` pixels from the top and `100` pixels from the left of the insertion point
13. Closes the dialog
14. Renders the component. Note that there is an input field to accept user's input and a button for the submission of the input

Lastly, let's create the main `jsx` file, `main.jsx`. Paste the following code in `main.jsx`
```js
const reactShim = require("./react-shim"); // [1]
const React = require("react"); // [2]
const ReactDOM = require("react-dom"); 
const App = require("./HelloForm.jsx") // [3]

function main(selection) {
    let dialog;

    function getDialog() {
        if (dialog == null) {
            dialog = document.createElement("dialog"); // [4]
            ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog); // [5]
        }
        return dialog
    }

    return document.body.appendChild(getDialog()).showModal())
}

module.exports = { // [7]
    commands: {
        main
    }
};
```
This code does the following:

1.  Loads `react-shim.js` to make React run in the XD environment
2.  Gets reference to `react` and `react-dom` modules installed earlier in the steps
3.  Imports `HelloForm` component
4.  Creates a dialo UI
5.  Renders the imported `HelloForm` component and passes `dialog` and `selection` objects as props
6.  Loads the modal inside the XD document
7.  Exports a map object, which associates the JavaScript handler function (`main`) with the `commandId` property declared in the manifest earlier. The command ID must match the `commandId` value declared in your manifest exactly.

### 5. Compile the code
Run `yarn watch` to compile the code and watch for changes. This process will create the `main.js` file to be read by Adobe XD.

### 5. Run your plugin

So you’ve written a plugin using React! How do we run it?

If you haven’t already done so, launch XD and open a new document. Then navigate to the _Plugins > Quickstart - React JSX_ menu item.

Alternatively, if XD was already open, select _Plugins > Development > Reload Plugins_.

![XD dialog drops down](/../images/tbd.png)


Congratulations! You’ve built your first plugin using React!

## Next Steps

- Learn about [debugging plugins](/tutorials/debugging/index.md)
- Follow our [tutorials](/tutorials/)
- See working code in our [sample repos on GitHub](https://github.com/AdobeXD/Plugin-Samples)
- Browse the [API references](/reference/how-to-read.md)

