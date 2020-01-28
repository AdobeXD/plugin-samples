# Plugin Samples

This repository contains a library of sample XD plugins to help you on your journey. You can use these samples to learn more about how to build plugins for Adobe XD.

For each sample, be sure to read the README as well as code comments. Note that samples that start with `how-to-` have companion tutorials in the [plugin-docs repo](https://github.com/AdobeXD/plugin-docs/), which can be viewed live on our developer portal at:

[https://adobexdplatform.com/plugin-docs/tutorials/](https://adobexdplatform.com/plugin-docs/tutorials/)

## Samples list

| Extension                           | Main APIs Used                                  | Description                                                                                                            | Minimum Version |
| ----------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| e2e-adobe-stock                     | UI, Network I/O (Fetch)                             | Lets users use End-to-end Adobe Stock Photo Search                                                                     | 13.0          |
| e2e-colorize-text                   | UI, Scenegraph, ScenenodeList                       | Provides several text color utilities                                                                                  | 13.0          |
| e2e-create-polygon                   | UI, Scenegraph, ScenenodeList                       | Lets users create a custom polygon                                                                                  | 19.0          |
| e2e-customize-banner                     | UI, Scenegraph                           | Provides a simple UI that lets user create custom sized banners                                                                     | 13.0          |
| e2e-stock-chart                     | UI, File I/O, Scenegraph, Network I/O (Fetch)   | Draws a line chart of the picked stock quote                                                                           | 13.0          |
| quick-start                         | Scenegraph                                      | Creates a rectangle object and inserts it into the artboard                                                            | 13.0          |
| quick-start-panel                   | Scenegraph                                      | Increase the selected rectangle size by user's input value                                                            | 21.0          |
| quick-start-react                   | Scenegraph                                      | Creates a rectangle object and inserts it into the artboard (using React)                                              | 18.0          |
| how-to-show-an-alert                | UI                                              | Demonstrates how to show an alert and an error dialog                                                                  | 13.0          |
| how-to-create-path-objects          | Scenegraph                                      | Demonstrates how to create shapes using path objects                                                                   | 13.0          |
| how-to-draw-lines                   | Scenegraph                                      | Demonstrates how to create line objects                                                                                | 13.0          |
| how-to-generate-an-export-rendition | File I/O, Application(renditions)               | Demonstrates how to generate an export rendition of an object                                                          | 13.0          |
| how-to-import                       | File I/O, Scenegraph                            | Demonstrates how to import a `.txt` file                                                                               | 13.0          |
| how-to-integrate-with-OAuth         | Network I/O (XHR, openExternal), Node.js server | Demonstrates how to integrate with a third-party OAuth                                                                 | 13.0          |
| how-to-make-network-requests        | Network I/O (XHR , Fetch), Scenegraph           | Demonstrates how to make network requests                                                                              | 13.0          |
| how-to-style-text                   | Scenegraph                                      | Demonstrates how to create text nodes with styled text                                                                 | 13.0          |
| how-to-work-with-scenenodelist      | Scenegraph                                      | Demonstrates how to create various objects and use scenenode list to filter and color                                  | 13.0          |
| i18n-pojo      | UI, Application(appLanguage)                                      | Demonstrates how to localize your plugin                                  | 13.0          |
| sg-chart-generator                  | Scenegraph, Commands                            | Demonstrates how to generate pie charts and bar charts                                                                 | 13.0          |
| sg-dummy-data                       | Scenegraph, Commands                            | Demonstrates how to generate random data                                                                               | 13.0          |
| sg-dynamic-button                   | Scenegraph, Commands                            | Updates a frame shape to wrap a text element exactly with a specified amount of padding                                | 13.0          |
| sg-fit-to-object                    | Scenegraph, Commands                            | Fits an object (image) to another object (rectangle) with three options- as-is, turn clockwise, turn counter-clockwise | 13.0          |
| sg-lots-of-lines                    | Scenegraph                                      | Draws multiple lines                                                                                                   | 13.0          |
| sg-margin-guides                    | Scenegraph, Commands                            | Create/remove margin guides around the existing objects in artboard(s)                                                 | 13.0          |
| sg-meme-me                          | Scenegraph, Commands                            | Takes text inputs and an image and convert them into a meme                                                            | 13.0          |
| sg-repeater                         | Scenegraph, Commands                            | Duplicates the selection horizontally or circularly                                                                    | 13.0          |
| sg-turtle                           | Scenegraph, Commands                            | Draws a series of lines by following "turtle graphics" commands                                                        | 13.0          |
| sg-update-weather                   | Scenegraph, Network I/O (XHR)                   | Finds all text elements that follow a specific pattern and insert the temperatures                                     | 13.0          |
| ui-button-padding                   | UI                                              | Uses `h` function to create a simple UI with these UI elements: form, labrel, footer                                   | 13.0          |
| ui-button-padding-hyperscript       | UI                                              | Uses hyperscript to create these UI elements: form, labrel, footer                                                     | 13.0          |
| ui-buttons-galore                   | UI                                              | Uses `document.querySelector` to create these UI elements: different types of buttons                                  | 13.0          |
| ui-context-menu                     | UI                                              | Uses `h` function to create a context menu with these UI elements: form, footer, button                                | 13.0          |
| ui-create-chart                     | UI                                              | Uses `h` function to create a menu optimized for generating charts with these UI elements: form, footer, button        | 13.0          |
| ui-datagrid-react                   | UI                                              | Uses React to create data grids                                                                                        | 18.0          |
| ui-dialog-variations                | UI                                              | Demonstrates several different dialog variations                                                                       | 13.0          |
| ui-hello                            | UI                                              | Simply shows a dialog with "Hello World"                                                                               | 13.0          |
| ui-hello-h                          | UI                                              | Used `h` function to simply show a dialog with "Hello World"                                                           | 13.0          |
| ui-hello-react                  | UI                                              | Used React jsx to simply show a dialog with "Hello World"                                                              | 18.0          |
| ui-hello-vue                        | UI                                              | Used Vue to simply show a dialog with "Hello World"                                                                    | 13.0          |
| ui-html                             | UI                                              | Creates a dialog showing simple UI elements: title, text, input field, and buttons                                     | 13.0          |
| ui-jquery                           | UI                                              | Used jquery to create a dialog showing simple UI elements: title, text, input field, and buttons                       | 13.0          |
| ui-panel-button-padding             | UI                                              | Creates a button padding around the selected object                        | 21.0          |
| ui-panel-hello-react             | UI                                              | Makes real-time changes to the color of the selected object based on user's input in the panel plugin                         | 21.0          |
| ui-panel-scaffold             | UI                                              | Demonstrates the structure of a panel plugin. There is no functionality of this plugin                        | 21.0          |
| ui-panel-show-renditions             | UI                                        | Creates renditions of the selected items and display them in the panel                        | 21.0          |
| ui-panel-simple-drag-and-drop        | UI, Scenegraph |  Demonstrates drag and drop on to XD canvas | 26.0 |
| ui-panel-typography-react             | UI                                        | Demonstrates various typography inside the panel UI                        | 21.0          |
| ui-playground                       | UI                                              | Shows all the controls in a playground                                                                                 | 13.0          |
| ui-rename-artoboards                | UI                                              | Shows a sample UI for a plugin that renames artboards                                                                  | 13.0          |
| ui-simple-form                      | UI                                              | Shows a simple form with these UI elements: input, textarea, select, button                                            | 13.0          |
| ui-trello                           | UI                                              | Uses `h` function to create a UI that's suitable for a workflow management plugin like Trello                          | 13.0          |
| ui-vectorize                        | UI                                              | Uses `h` function to create a simple UI with these UI elements: title, text, button                                    | 13.0          |
| ui-tabs-react                        | UI                                              | Uses React to create a simple UI with tabs                                    | 18.0          |
## Recommended development setup

1. Go to the directory that stores your development plugin folder:

   - Mac: `~/Library/Application\ Support/Adobe/Adobe\ XD/`
   - Windows: `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD_adky2gkssdxte\LocalState\`

2. Rename the `develop` directory, if it already exists:

   - Mac: `mv plugins oldplugins`
   - Windows: (use Windows Explorer)

   If you don't have a `develop` directory yet, simply create one.

3. Clone this repository as the `develop` directory:

```
git clone git@github.com:AdobeXD/plugin-samples.git develop
```

4. Launch XD, or if already open, use COMMAND+SHIFT+R to reload plugins.

5. Run the plugins from XD's _Plugins_ menu.

Make sure to check out [XD Plugin Tutorials](https://adobexdplatform.com/plugin-docs/tutorials/) and [XD Plugin References](https://adobexdplatform.com/plugin-docs/reference).
