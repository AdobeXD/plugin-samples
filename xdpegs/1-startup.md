# 1.0 Startup

## 1.1 Don’t execute a lot of code at startup

Adobe XD executes your plugin’s main JavaScript file whenever it is launched or a new document is opened or created. This is done to determine the various entry points and handlers your plugin provides. However, this also means that your plugin could run arbitrary code at this time.

You should avoid running arbitrary code at startup because this slows down loading all the user’s plugins. If every plugin executed for 100ms at startup, and the user had 10 plugins installed, creating a new document would take at least a second.

- [ ] (1.1.1) Test creating a blank document with your plugin installed. Ensure that creating a new document is as fast as it was when no plugins were installed.
- [ ] (1.1.2) If your plugin has a lot of code, *parsing* that code may take more than 10ms. Consider using a bundler to minify and split your code, using lazy loading as appropriate.

## 1.2 Don’t display any dialogs at startup

Modal Dialogs are intrusive to the user’s flow. You should not use startup as a time to render any content to the user in a modal dialog.

- [ ] (1.2.1) ***Never*** render a modal dialog during startup

## 1.3 Don’t perform I/O at startup

While performing I/O is a great way to load user preferences, ping a backend server, etc., this can cause delays during startup. Instead, handle your I/O tasks lazily — only performing the I/O when needed. For example, when loading user preferences, load them on the first invocation of your plugin, rather than at startup.

- [ ] (1.3.1) Avoid performing I/O at startup
