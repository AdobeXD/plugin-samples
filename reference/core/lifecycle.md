# Plugin lifecycle

Here's an overview of how plugins are loaded, when plugin code runs, and how plugin "edit operations" work.


## Plugin loading

Each XD document window loads a separate copy of your plugin's JavaScript code with a separate UXP UI `document` global (as if they were, say, separate browser windows). It's not yet possible for the JavaScript in one window to communicate with other windows, short of using a web server or other external channel.

Each plugin is loaded into an isolated context with its own set of global variables. Different plugins cannot share objects or functions with each other.

Your plugin's code remains resident until the document is closed (or until a developer runs the Reload Plugins command). This means you can store temporary "session" state in global or module-level variables.


## When plugins run

Several different situations can cause code in your plugin to get executed:

##### Initialization
* When loading, any "top-level" code in each module (JS file) is executed immediately. You can't edit the document or show UI at this point. Only perform tasks that are absolutely necessary for basic loading and initialization -- defer as much as possible until later, when the user invokes your plugin for the first time.

##### Direct-action menu commands
* Invocation -- Each time one of your plugin's menu commands is invoked, XD calls your [_command handler function_ for the relevant `commandId`](../structure/handlers.md#command). Your command handler can edit the document or open a dialog box; if you return a Promise, these privileges extend until the Promise completes. See ["Edit operations"](#edit-operations) for details.
* Dialog box DOM events -- Since dialogs are typically open during an [edit operation](#edit-operations), this event handler code can edit the document too.

##### Panel UI
* Panel lifecycle callbacks -- XD invokes your plugin's [panel callbacks](../structure/handlers.md#panel) when a panel is shown, hidden, or needs updating. These callbacks can update the UI only; you cannot edit the document.
* Panel UI DOM events -- Most UI events in panels allow you to edit the document, but you must [initiate an edit operation _explicitly_](#initiating-an-edit-operation-from-panel-ui).

##### Network responses and timers
Other events can happen at any time, such as a network call finishing or a `setTimeout()` firing.
* If you've engineered an async edit operation's Promise to wait for these events before resolving, then these handlers can also edit the document.
* You can also run network requests and timers entirely in the background, outside of any edit operation, though this is discouraged. Plugin code running in the background can make XD slow. And although you'll have read-only access to the scenegraph, this is unsafe since your background code may run _in the middle of_ some other asynchronous edit operation (whether from a built-in XD command, another plugin, etc.) -- so your code might see an incorect intermediate state of the document.


## Edit operations

An edit operation is the window of time in which your plugin is making a batch of related changes to the document. Roughly, one edit operation equals one Undo step.

Your plugin can modify multiple properties on multiple scenegraph nodes during an edit operation, and they are all automatically batched together.

Edit operations can only occur via user-initiated actions in your plugin: invoking a plugin menu command (and anything that stems from it, such as dialog boxes the command opens), or interacting with a plugin's panel UI.

#### Edit operation duration
* An edit operation begins when:
    * a) Your plugin's menu [command handler](../structure/handlers.md) is called (this is automatically wrapped in an edit operation)
    * a) Your plugin's panel UI code explicitly [calls `application.editDocument()`](#initiating-an-edit-operation-from-panel-ui)
* If the edit code returns synchronously, the edit operation is done as soon as it returns.
* If the edit code returns a Promise, the edit operation continues asynchronously until the Promise completes. _The user can't do anything else in XD_ until the operation completes, so normally you'd only return a Promise if your plugin has a dialog box open that the user is interacting with or that is showing a progress indicator.

If the edit throws an exception, or its Promise is rejected, the entire edit batch is atomically rolled back automatically by XD.

#### Initiating an edit operation from panel UI
Although menu commands automatically trigger an edit batch, panel UI events must opt into initiating one by specifically calling the [`application.editDocument()` API](../application.md#module_application-editDocument). The function passed to `editDocument()` is treated just like a menu command handler at that point.

You can only call `editDocument()` while handling a panel UI event which corresponds to an explicit user action (e.g. a `"click"` or `"input"` event).

Consecutive edit operations triggered by the same UI and applying to the same selected nodes may get merged into a single Undo step by XD. See [discussion of `editDocument()`'s `mergeId` option](../application.md#module_application-editDocument) for details.

#### Modal/exclusive UI
While an edit operation is in progress, XD prevents any edits from other plugins or other features. The user can't interact with any XD UI other than dialogs shown by your plugin.

Even if your plugin doesn't have a dialog box open during an async edit operation, the XD UI still remains frozen. If an edit operation continues for over 1 second without any UI being shown, XD shows a "Plugin is working" message which allows users to forcibly abort the edit operation. For this reason, during long-running async steps like network requests it's best to display your own nicer progress UI (users can always still cancel this too, by pressing Escape at any time).

#### UI updates
Just as in a web browser, XD won't update the UI in the middle of your plugin code's _synchronous_ execution. As soon as there's an async gap in execution, any changes you've made to dialog box DOM or to the document scenegraph will be reflected in XD's UI.

For example, if your plugin makes some partial edits to the scenegraph, then waits on a network request, then uses the results to make more edits -- although the entire operation is atomic with respect to Undo, the user will see the partial edits displayed onscreen for a brief moment while your plugin code is idle waiting for the async network request to complete.
