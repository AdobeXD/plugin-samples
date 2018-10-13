# JavaScript version and feature support

XD plugin APIs support "modern JavaScript"... but what does that mean exactly? 

This is the place to find out!


## Can I use ES5 features?

Yes! This means you can use `Array#map`, `Array#reduce`, and numerous other language features introduced with ES5.

In fact, you can write your whole plugin in ES5 if you so choose.


## What ES2015+ (ES6) features can I use?

XD plugin APIs support most of ES2015 and beyond. You can use features such as:

- Template literals
- Classes
- Block-scoped variables ( `let` , `const` )
- Object destructuring
- Default parameters
- Spread and Rest ( `...` )
- Arrow functions
- Asynchronous functions ( `async` / `await` )
- Promises


## Can I use require?

Yes, you can use `require` to import additional files.

Note that `require` in XD does not follow Node.js-style resolution. You can only require files in your plugin directory relative to your file location, but not outside of your plugin directory. There is no lookup in a `package.json` or a `node_modules` directory.

For example, the following works:

```js
const aFile = require("./aFile");
const someJSON = require("./someJSON.json");
const anotherFile = require("./path/to/file/file");
const someLib = require("./node_modules/somelib");
```

However, the following will not:

```js
const someLib = require("somelib");  // no package.json lookup
```


## Can I use nmp packages or Node.js APIs?

You may be able to use some npm packages without modification, but chances are good that you’ll need to use webpack or rollup in order to generate a bundle.

Node.js APIs themselves are not supported.