# Adobe XD Plugins API Reference

Plugins are written in JavaScript. You can use most JavaScript features supported by modern web browsers, including ES5 and ES2015 (aka ES6) language features.

Your plugins are not running inside a browser engine, however. Instead, your JavaScript code interacts with XD's [document model](./reference/core/scenegraph) to
influence what is rendered on the design canvas.

## What can you build?
Adobe XD plugins provide a way for developers to extend XD functionality. Plugins can manipulate objects on canvas and alter their properties.

- **Change the properties of objects.** Plugins can change border, fill, opacity, and other object properties without direct user interaction.
- **Add and remove items on canvas.** Your plugin can add rectangles, paths, text, and other shapes to the canvas. Using paths, almost any two-dimensional object can be created.
- **Automate and extend user actions.** Plugins can automate repetitive actions and free users to focus on content.
- **Support various file operations.** Plugins can load files from user's local drive, and also save files back.
- **Connect to other sources on the web.** Plugins can make network requests.
- **Enable plugin configuration through dialogs.** Plugins can create dialogs with various UI controls in order to allow user input.

## Where to start?
1. To begin, read the [Getting Started guide](https://adobe-xd.gitbook.io/plugin-guides/getting-started/getting-started-guide) and take a look at [other guides](https://adobe-xd.gitbook.io/plugin-guides)
1. Read up on [the structure of a plugin](./reference/structure/index.md), some [Adobe XD core concepts](./reference/core/index.md), and then dig into the reference itself.
1. If you need more help, we have a few, select [Samples](https://github.com/AdobeXD/Plugin-Samples) for you to take a look at.

## Known Issues

* UI
    * Text fields are limited to 150 characters.
    * Dialogs on UWP have a fairly narrow maximum width.
    * Dialogs don't yet submit on ENTER
