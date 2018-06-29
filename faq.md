# Frequently Asked Questions

## Available APIs

### Can I read or write to persistent storage?

Not yet. That feature is coming in a future release.

### Can I store any user preferences?

Not yet. That feature will be coming in a future release.

### Can I communicate with remote servers?

Yes! `XMLHttpRequest`, `Websocket`s, and `fetch` are available now.

### Can I render any user interface?

Not yet. APIs for UI will be provided in a future release. There are several workarounds in the meantime:

* User enters configuration in layer/object names, plugin parses this as input
* User enters input into a text object on canvas, plugin reads this text content
* Generate text objects on the canvas as output
* Copy text to the clipboard in lieu of exporting data to a text file

### Can I use npm packages or Node APIs?

Not currently. If you’re finding that to be an obstacle, please provide details in your feedback.

## Document-specific

### Can I modify the document outside the current edit context?

Not at this time. You can _read_ the entire document, but only those objects in the current edit context can be modified. If you try, an error will be raised.

### Can I globally replace content across the document?

Not at this time. A feature such as a global search and replace would require editing objects outside the current context, and so will currently fail.

### Can my plugin be notified whenever content in the document is changed?

Not currently -- your plugin can only execute whenever the user invokes it from the **Plugins** menu.

### Can I perform animations on the canvas?

No; plugins execute synchronously, so only the final state of the document is visible to the user when the plugin finishes executing.

## JavaScript-related

### Can I use `require` to import additional files?

Not at this time. `require` can only be used to import modules provided by Adobe XD.

### Can I use ES5 features?

Yes. This means you can use `Array#map`, `Array#reduce`, and numerous other language features introduced with ES5.

### What ES2015+ (ES6) features can I use?

The JavaScript VM does support most of ES2015 and beyond. You can use features such as:

* Template literals
* Classes
* Block-scoped variables (`let`, `const`)
* Object destructuring
* Default parameters
* Spread and Rest (`...`)
* Arrow functions

You _cannot_ use any asynchronous language features at this point (see next question).

### Can I use asynchronous code?

Not at this time. You should avoid the following:

* `setTimeout` and friends
* Promises
* `async` and `await`

## Troubleshooting

### My plugin doesn't seem to be making any changes to the document.

When plugins cause an error, any changes made during that edit operation are rolled back. Plugin actions are atomic -- failure will revert the entire operation.

### I changed my plugin's manifest, but Adobe XD didn't see the change.

You'll need to restart Adobe XD when making changes to your plugin's manifest.

### I added a new plugin to Adobe XD, but it doesn't show in the **Plugins** menu.

You'll need to restart Adobe XD when adding a new plugin. Also check the [output log](./guides/getting-started.md#Viewing-Plugin-Logs) to ensure there aren't any errors in your plugin's [manifest](./reference/manifest.md).
