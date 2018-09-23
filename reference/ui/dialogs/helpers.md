# Helpers

Creating modal dialogs from scratch for common operations, such as alerts and prompts can be time consuming and repetitive. As such, you can use the [Plugin Toolkit](https://github.com/AdobeXD/Plugin-Toolkit) which provides many utility functions that make it easy to render simple modal dialogs.

## Adding to your project

You can add the helpers to your project by simply cloning the [Plugin Toolkit](https://github.com/AdobeXD/Plugin-Toolkit) repository and then copying the `lib` folder to your plugin project. Be sure to copy the _entire_ folder, as some modules have internal dependencies.

Once copied, you can reference the dialog helpers like so:

```js
const { alert } = require("./lib/dialogs.js");
```

There are several exported functions that you may find useful. Each one returns a `Promise` that resolves to the following:

```js
{
    "which": number,   // the button index that was clicked, or -1 if no button index is found
    "value": string    // the value of the prompt, if this is a prompt dialog
}
```

In all cases, each method accepts a "markdown-lite" syntax that you can use to render richer text than might be immediately apparent. The following formatting is understood:

Token        | Result
-------------|-----------------------
`##`         | `<h2>`
`###`        | `<h3>`
`* `         | Bulleted list
`----`       | `<hr class="small">`
`---`        | `<hr />`
`[...](href)`| `<p><a href="href">...</a></p>`

## Alert

A simple "alert" can be used to display a message along with a **Close** button. You can customize the content of the title and message, but you cannot customize the button itself.

![Example Alert](../assets/helper-alert.png)

Parameter | Type       | Notes
----------|------------|---------------
`title`   | `string`   | The title that appears in the dialog.
`...msgs` | `string[]` | The text to render in the dialog.

## Error

Renders an error "alert" (with a red heading). These are useful for rendering error messages. Just like regular alerts, you cannot customize the button itself.

Parameter | Type       | Notes
----------|------------|---------------
`title`   | `string`   | The title that appears in the dialog.
`...msgs` | `string[]` | The text to render in the dialog.

## Confirmation

Confirmation dialogs display a message and _two_ buttons. The user is free to pick which of the buttons they wish to invoke.

Parameter | Type       | Notes
----------|------------|---------------
`title`   | `string`   | The title that appears in the dialog.
`msg`     | `string`   | The message to display
`buttons` | `string[]` | An array of buttons (use only two). The first is the cancel or safe dismissal option, whereas the second is the trigger option (invoked with **ENTER**)

> **Danger**
>
> Do not use confirmation dialogs for destructive actions.

## Warning

Warning dialogs display a message and _two_ buttons, one of which is destructive. Pressing **ENTER** in this case will _not_ invoke the destructive action. Otherwise it is the same as a confirmation dialog.

Parameter | Type       | Notes
----------|------------|---------------
`title`   | `string`   | The title that appears in the dialog.
`msg`     | `string`   | The message to display
`buttons` | `string[]` | An array of buttons (use only two). The first is the cancel or safe dismissal option, whereas the second is the destructive button.

## Prompt

Prompts display a single line text field in addition to a message and two buttons. Neither button should be destructive as **ENTER** will trigger the second button supplied. The prompt is returned as a `value` property in the resolved promise.

Parameter | Type       | Notes
----------|------------|---------------
`title`   | `string`   | The title that appears in the dialog.
`msg`     | `string`   | The message to display
`prompt`  | `string`   | The prompt to display (will be the placeholder)
`buttons` | `string[]` | An array of buttons (use only two). The first is the cancel or safe dismissal option, whereas the second can be thought of as the "OK" button.

## createDialog

Creates a dialog that can be displayed using either a "markdown-lite" array of strings or a render function that returns arbitrary HTML.

`createDialog` takes only one parameter -- an object that looks like the following:

```js
{
    title,                 // the title of the dialog
    icon = 'plugin-icon',  // which icon to use; can be an arbitrary path
    msgs,                  // array of messages to render (if no render fn)
    prompt,                // prompt will trigger an input field (if no render fn)
    render,                // render function that returns arbitrary HTML
    isError=false,         // if true, the heading will be red
    buttons=[              // buttons; can have as many as needed
        {label: 'Close', variant: 'cta', type:'submit'}
    ]} = {},
    width=360,             // width of the dialog
    height='auto',         // height of the dialog
    iconSize=18            // icon size (24 for plugin-icon)
}
```

