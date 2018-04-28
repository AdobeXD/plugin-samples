# Frequently Asked Questions

## Available APIs

### Can I read or write to persistent storage?

Not yet. That feature is coming in a future release.

### Can I store any user preferences?

Not yet. That feature will be coming in a future release.

### Can I communicate with remote servers?

Not yet. `XMLHttpRequest`, `Websocket`s, and `fetch` are coming soon.

### Can I render any user interface?

Not yet. A simple API will be provided soon that you can use to render your user interface. However, there are ways around this:

* Parse layer and object names as input
* Generate objects on the canvas as output

## Document-specific

### Can I modify the document outside the current edit context?

Not at this time. You can _read_ the entire document, but only those objects in the current edit context can be modified. If you try, an error will be raised.

### Can I globally replace content across the document?

Not at this time. A feature such as a global search and replace would require editing objects outside the current context, and so will currently fail.

### Can my plugin be notified whenever content in the document is changed?

Not currently -- your plugin can only execute whenever the user invokes it from the **Plugins** menu.

### Can I perform animations on the canvas?

No; plugins execute synchronously. That is to say that only the final output would be visible to the end user.

## JavaScript-related

### Can I use `require` to import additional files?

Not at this time. `require` can only be used to import modules provided by Adobe XD.

### Can I use ES5 features?

Yes. This means you can use `Array#map`, `Array#reduce`, and numerous other language features introduced with ES5.

You _should_ avoid anything asynchronous at this point, which includes the following:

* `setTimeout` and friends

These will be enabled in a future release.

### What ES2015+ features can I use?

The JavaScript VM does support most of ES2015 and beyond. You can use features such as:

* Template literals
* Classes
* Block-scoped variables (`let`, `const`)
* Object destructuring
* Default parameters
* Spread and Rest (`...`)
* Arrow functions

You _should_ avoid anything asynchronous at this point, which includes the following:

* `setTimeout` and friends
* Promises
* `async` and `await`

These will be enabled in a future release.

### Can I use asynchronous code?

Not at this time. You should avoid the following:

* `setTimeout` and friends
* Promises
* `async` and `await`

## Debugging

### My plugin generated an error, but didn't make any changes to the document.

When plugins cause an error, anything they already did to the document is rolled back. Plugin actions are atomic -- failure will revert the entire operation.

## Workflow

### How can I quickly reload the document's plugin code?

Press the `q` key (no modifiers).

### How can I quickly reload the document's plugin code _and_ execute the last command?

Press the `x` key (no modifiers).

### How can I quickly repeat the last command?

Press the `d` key (no modifiers).

### I changed my plugin's manifest, but Adobe XD didn't see the change.

You'll need to restart Adobe XD when making changes to your plugin's manifest.

### I added a new plugin to Adobe XD, but it doesn't show in the **Plugins** menu.

Make sure you restart Adobe XD whenever you add new plugins, as these are detected only on startup. Also make sure that your plugin's [manifest](./reference/manifest.md) is correct. If there are any errors, those will be visible in the output log.
