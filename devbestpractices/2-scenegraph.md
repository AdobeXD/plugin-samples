
# 2.0 Interacting with the Scenegraph

The scenegraph is a tree structure that represents the user’s document. You can use XD’s `scenegraph` module to manipulate the scenegraph. However, while doing so, there are some important guidelines to consider.


## 2.1 Don’t be destructive without permission

Your plugin shouldn’t remove content from the scenegraph without the user’s permission. If an action is destructive, ***always*** ask for permission using a modal dialog first, and ensure that the button you use is a `warning` variant.


- (2.1.1) Ensure that your plugin is ***never*** destructive without permission
- (2.1.2) When using buttons that are destructive, ***always*** use the `warning` variant.


## 2.2 Handle selections (or lack thereof) properly

Your plugin may be invoked in a variety of conditions. Your plugin should *never* fail silently — this gives the user the impression that they weren’t “heard” or “understood,” and will likely trigger the invocation again. The user may become confused as to why the plugin works in certain conditions and fails in others and blame your plugin, XD, or even blame the combination of installed plugins.


- (2.2.1) Your plugin should ***never*** fail silently if there is no active selection. Inform the user what the plugin expects via a modal dialog.
- (2.2.2) Your plugin should ***never*** fail silently if the active selection isn’t what your plugin expects. Inform the user what the plugin expects to be selected via a modal dialog.
- (2.2.3) Your plugin should be able to handle one or more selected items. How your plugin handles multiple items will depend upon what the plugin does. If it applies a style, for example, it should apply the same style to each selected item.
- (2.2.4) Your plugin should ignore selected items it can’t process. If that is representative of the entire selection, your plugin should tell the user that it found no items to process using a modal dialog.

It’s also possible that your plugin can modify the user’s selection. (For example, `commands.group`). Your plugin should ***not*** do this unless it is something the user will expect.


- (2.2.5) Don’t modify the user’s selection unexpectedly.

Finally, there may be cases where the selection changes between asynchronous execution phases in your plugin. You should ensure that you capture the initial selection separately and then compare the current selection before making changes.


- (2.2.6) Capture the initial user selection (`selection.items.map(i => i)`)
- (2.2.7) Compare the initial selection before doing any work after an asynchronous operation. If the selection differs from what you expect, fail and display a message like “**Could not complete operation due to change of selection**” to the user.
- (2.2.8) ***Never*** modify the document after an unexpected selection change.


## 2.3 Working with Artboards (or lack thereof)

Your plugin should be able to handle the condition where there is no artboard, one artboard, or multiple artboards present in the document.


- (2.3.1) Your plugin should ***never*** fail silently if there is no artboard present. It can create an artboard if needed, or prompt the user to do so using a modal dialog.
- (2.3.2) Your plugin should ***never*** fail if there *is* an artboard present.
- (2.3.3) Your plugin should ***never*** fail if there are multiple artboards present.
- (2.3.4) Your plugin should ***never*** fail if there are multiple artboards selected.
- (2.3.5) When adding content to an artboard, the content should remain within the artboard’s bounds. Be sure to test in a document with only one artboard *and* in another document with two or more artboards.


## 2.4 Working with the Edit Context

The **edit context** is the editable context within the scenegraph. Editing nodes outside the edit context will throw an exception. Your plugin should handle these exceptions if they occur.


- (2.4.1) Ensure your plugin ***never*** makes edits outside of the current edit context
- (2.4.2) If your plugin attempts to make edits outside of the current edit context, it must ***always*** handle the resulting error, *and must* ***never*** *simply fail silently*.
- (2.4.3) It is not suggested that you ungroup and regroup items in order to work around the edit context limitations. Doing so can lose various settings, including whether or not an item is marked for export and other metadata. ***This is a violation of guideline 2.0.1.***

## 2.5 Handle gradients and other fills

When working with shapes, it may be tempting to extract the color values without checking the type of fill. Doing so may cause your plugin to fail silently. _What you do with non-solid colors is up to you_, but your plugin shouldn't fail silently.

- (2.5.1) Handle shapes filled with bitmap data
- (2.5.2) Handle shapes filled with a linear gradient
- (2.5.3) Handle shapes filled with a radial gradient

## 2.9 Know when to use asynchronous logic

If your plugin can execute quickly and has no need of I/O or UI, then you can modify the scenegraph synchronously. This is the easiest way to build a plugin. However, if your plugin takes a considerable amount of time to operate or uses any asynchronous API (and then needs to work with the scenegraph), you’ll need to use XD’s asynchronous scenegraph handling.


- (2.9.1) Synchronous plugins should execute quickly (less than 2s). If this is not possible, throw up a dialog indicating that the operation will take some time, and provide some indication of progress.
- (2.9.2) Modifying the scenegraph after any I/O or UI is displayed *must* ***always*** be asynchronous.
- (2.9.3) Your plugin should ***never*** fail with the error “*Plugin id is not permitted to make changes from the background. Return a Promise to continue execution asynchronously.*"
