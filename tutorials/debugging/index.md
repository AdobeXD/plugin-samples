# How to Debug Your Plugin

Bugs happen! In this tutorial, you will learn how to debug your Adobe XD plugin.

### Prerequisite

At least one plugin in your `develop` folder (you can create one using our [Quick Start tutorial](/tutorials/quick-start)).

### Debugging Options

There are two ways you can debug an XD plugin:

* For **quick, simple debugging**, [use the Developer Console built into XD](#quick-debugging-with-developer-console)
* For **in-depth debugging**, set up your plugin for [debugging with Chrome DevTools](#debugging-with-chrome-devtools-beta) _(beta)_


## Quick debugging with Developer Console

### 1. Check the Developer Console

In XD, click _Plugins > Development > Developer Console_.

This displays information similar to what you'd find in the JS debugger's console view:
* Any `console.log()` output from your plugin
* Any error messages from XD due to plugin misbehavior, or failure to load a plugin
* Stack traces if your code throws an uncaught exception

The console output for _all_ installed XD plugins is mixed together in one single view here.

### 2. Reload your plugin after making fixes

You can easily iterate on your plugin code without heaving to restart XD. Click _Plugins > Development > Reload Plugins_ to reload all plugins in your `develop` folder. This will reflect any changes in [manifest.json](/reference/structure/manifest.md) in addition to any changes to your JS code.

There's also a handy keyboard shortcut to make reloading easier:

| Platform      | Keyboard shortcut  |
| ------------- | -------------      |
| macOS         | Shift-Cmd-R        |
| Windows       | Ctrl-Shift-R       |

If there are any errors blocking the plugin from loading, they will appear in the Developer Console on reload:

![Error during reload](/images/reload-error.png)


## Debugging with Chrome DevTools _(beta)_

### 1. Enable debugging on your plugin

Navigate to the root folder of your plugin and **create a `debug.json` file**:

```json
{
    "port": 9345,
    "breakOnStart": false
}
```

* Debugging is only supported for plugins in the **`develop` folder** (not plugins installed from the Plugin Manager UI).
* Specify any port number you want.
* Advanced: Set `breakOnStart` to true if you want the debugger to immediately pause on the first line of code in your plugin the moment it starts loading. This is useful since you won't have a chance to open DevTools _before_ this moment to set breakpoints before that initial code runs.

### 2. Launch Chrome DevTools

1. Windows only: _before_ launching XD, open an admin command prompt and run `CheckNetIsolation LoopbackExempt -is -n="Adobe.CC.XD.adky2gkssdxte"` -- do this _each time_ you want to debug a plugin.
2. Open Google Chrome and navigate to **`chrome://inspect`** _(you must use Chrome)_
3. One-time setup: ensure "Discover Network Targets" is enabled. Click the Configure button next to this and add `localhost:9345` (or whatever port number your `debug.json` file used).
4. Click the "inspect" link under your plugin's ID.

### Beta: What works, what doesn't

Currently, you **can**...
* Set breakpoints, pause & step through code, inspect the values of variables
* View objects and run code in the Console view
* View and edit the DOM structure of your plugin's UXP UI

Most other DevTools features are not supported and may behave erratically if you attempt to use them.

**Important caveats:**
* XD may be unstable while debugging a plugin. Don't debug when you have important XD documents open.
* Error messages are often _missing_ from the DevTools Console. Use the Developer Console within XD (see "Quick debugging" above) to be sure you are not missing any important information.
* XD will be partially frozen while paused on a JS breakpoint. Don't try to interact with XD while paused.
* You may see a blank white panel to the left of the DevTools UI. Ignore this, as it does nothing.
* If debugging exposes any private fields and methods, do not attempt to use them. Plugins referring to private APIs will be rejected or removed from XD's plugin listing.

Read the [known issues](/known-issues.md#debugging) for more details.


## Next Steps

Ready to learn more about XD plugins?

- Learn about [plugin structure](/reference/structure/)
- Follow along with our [tutorials](/tutorials)
- Browse the [API references](/reference/how-to-read.md)
