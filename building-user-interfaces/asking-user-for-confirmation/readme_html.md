# With HTML

This sample demonstrates how to build a user confirmation dialog in XD using HTML. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-ask-user-for-confirmation-guide/how-to-ask-user-for-confirmation).

## Contents

* [Technology Used](readme_html.md#technology-used)
* [Prerequisites](readme_html.md#prerequisites)
* [Development Steps](readme_html.md#development-steps)
  * [1. Write the HTML to define the dialog with a form and two buttons](readme_html.md#1-write-the-html-to-define-the-dialog-with-a-form-and-two-buttons)
  * [2. Set the above HTML as innerHTML on the document](readme_html.md#2-set-the-above-html-as-innerhtml-on-the-document)
  * [3. Add the event listeners on the buttons](readme_html.md#3-add-the-event-listeners-on-the-buttons)
* [Next Steps](readme_html.md#next-steps)
* [Other Resources](readme_html.md#other-resources)

## Technology Used

* References: 
  * [UXP API - Document](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/classes/document)
  * [UXP API - Dialog](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmldialogelement)
  * [UXP API - Form](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
  * [UXP API - Footer](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)
  * [UXP API - Button](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlbuttonelement)    
  * [UXP API - Heading](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/dom5-apis/html-elements/htmlhtmlelement)

## Prerequisites

* Basic knowledge of HTML, CSS, and JavaScript.
* [Getting Started Guide](../../getting-started/getting-started-guide.md)

## Development Steps

### 1. Write the HTML to define the dialog with a form and two buttons

```text
    <style>
        #myDialog form {
            width: 300px;
        }
    </style>
    <dialog id="myDialog">
        <form method="dialog">
            <h1>Are you sure?!</h1>
            <footer>
                <button id="ok" uxp-variant="cta">Yes</button>
                <button id="cancel">No</button>
            </footer>
        </form>
    </dialog>
```

### 2. Set the above HTML as innerHTML on the document

```text
const $ = sel => document.querySelector(sel);

 document.body.innerHTML = `
    <style>
        #myDialog form {
            width: 300px;
        }
    </style>
    <dialog id="myDialog">
        <form method="dialog">
            <h1>Are you sure?!</h1>
            <footer>
                <button id="ok" uxp-variant="cta">Yes</button>
                <button id="cancel">No</button>
            </footer>
        </form>
    </dialog>
    `;
```

### 3. Add the event listeners on the buttons

```text
    const [dialog, form, cancel, ok, name] = ["#myDialog", "#myDialog form", "#cancel", "#ok", "#name"].map(s => $(s));
    cancel.addEventListener("click", () => {
        dialog.close();
    });
    ok.addEventListener("click", () => {
        dialog.close();
    });
```

## Next Steps

Description

* [How to debug](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/how-to-debug/README.md)

## Other Resources

* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/link/README.md)
* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/a9ce56778e90f9e68bf4ed532cf1d03dcc1e395b/Guides/how-to-ask-user-for-confirmation-guide/link/README.md)

