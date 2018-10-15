# Dialogs

A modal dialog is used to display important information and ask for user input. XD Plugins can display user interface in the form of **modal dialogs**.

![Example of a Modal Dialog](./assets/dialog.png)

Dialogs appear over the XD document, and prevent further interaction with the underlying document. Dialogs are dismissed in any one of the following manners:

* The user presses the ESC key
* The user presses ENTER (assuming the plugin supplies an `onsubmit` handler)
* The user clicks or touches a button designed to dismiss the dialog.

Dialogs are highly intrusive, and should only be used when absolutely necessary.

## Anatomy

{% tabs anatomy="Dialog", examplesmac="macOS", examplesuwp="Windows" %}

{% content "anatomy" %}

![Dialog Anatomy](../assets/dialog-anatomy.png)

{% content "examplesmac" %}

![macOS Dialog Example](../assets/Example%20About%20Dialog%20on%20macOS.png)

{% content "examplesuwp" %}

![Windows Dialog Example](../assets/Example%20About%20Dialog%20on%20UWP.png)

{% endtabs %}

## Usage

When it comes to building the user interface, XD exposes an API surface that looks and feels a lot like what you would get in a web browser, namely:

* HTML5 DOM (Document Object Model) API
* CSS
* JavaScript

These APIs and standards can be used to create compelling user interfaces, even inside modal dialogs.

The above example is a typical modal dialog. Modal dialogs consist of:

* A dialog element (`<dialog>`) that is added to the DOM and contains everything that follows
* A form element (`<form>`) that wraps around the content of the dialog
* A heading (`<h1>`), which may also display the plugin's icon
* A horizontal rule (`<hr />`)
* Some body content
* A footer (`<footer>`) with one or more buttons (`<button>`)

The margins and padding that surround the structure are provided automatically. There is generally _no need_ to specify or override these margins in your own user interface, unless you want to do so.

## Building Modal Dialogs

You can build modal dialogs using any method that creates an HTML5 DOM structure. This means you can use `document.createElement`, `innerHTML`, jQuery, React, and other frameworks.

* [DOM Structure](./dialogs/dom-structure.md)
* [Building a Dialog with HTML](./dialogs/building-dialog-with-html.md)
* [Building a Dialog with React](./dialogs/building-dialog-with-react.md)
* [Helpers](./dialogs/helpers.md)

Once a dialog is built, you will need to manage its lifecycle:

* [Showing a Modal Dialog](./dialogs/showing.md)
* [Dismissing a Modal Dialog](./dialogs.dismissal.md)
