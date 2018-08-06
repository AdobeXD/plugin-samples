# Frequently Asked Questions

## Available APIs

### Can I read or write to persistent storage?

You can write to temporary storage or to user-picked files and folders. You can also write to your plugin's data folder without user mediation.

### Can I store any user preferences?

You can use the plugin data folder to store files, including user preferences.

### Can I communicate with remote servers?

Yes! `XMLHttpRequest`, `Websocket`s, and `fetch` are available now on both macOS and Windows (UWP).

### Can I use npm packages or Node APIs?

You may be able to use some npm packages without modification, but chances are good that you'll need to use webpack or rollup in order to generate a bundle.

Node APIs themselves are not supported.

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

Yes. Note that `require` file resolution does _not_ align with Node-style resolution. You can only require files in your plugin directory, and there's no lookup in a `package.json` should it exist.

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
* Asynchronous functions (`async / await`)
* Promises

## Troubleshooting

### My plugin doesn't seem to be making any changes to the document.

When plugins cause an error, any changes made during that edit operation are rolled back. Plugin actions are atomic -- failure will revert the entire operation. Check the
[Developer Console](https://adobe-xd.gitbook.io/plugin-guides/getting-started/debugging-guide#1-open-the-developer-console) view for errors.

### I changed my plugin's manifest, but Adobe XD didn't see the change.

You'll need to restart Adobe XD when making changes to your plugin's manifest.

### I added a new plugin to Adobe XD, but it doesn't show in the **Plugins** menu.

You'll need to restart Adobe XD when adding a new plugin. Also check the [Developer Console](https://adobe-xd.gitbook.io/plugin-guides/getting-started/debugging-guide#1-open-the-developer-console) to ensure there aren't any errors in your plugin's [manifest](./reference/manifest.md).
