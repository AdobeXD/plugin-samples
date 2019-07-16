# Panel hide() callback

The `hide()` function is an _optional_ lifecycle method in [panel objects](../../structure/handlers.md#panel). XD calls `hide()` each time your plugin panel is hidden -- if the user navigates back to the overall plugin list view, toggles to show a different plugin's panel UI, or closes the left-land sidebar altogether. (`hide()` is not called when the window is closed or XD is quitting, however).

The `event` argument provides the same `event.node` object as was passed to your `show()` callback earlier.

You can choose to remove your UI at the time `hide` is called, or if you prefer to reuse your UI, you can leave it attached. See the [`show()` documentation page](./show.md) for examples of both approaches.
