# Automatic cleanups

To make writing your plugin simpler, XD performs a number of automated cleanups after each plugin command finishes:

* **Artboard reparenting** - If a node is changed to overlap an Artboard, it will automatically become a child of the artboard when the command finishes,
  and vice versa if a node no longer overlaps an Artboard.

* **Selection** - Deleted nodes are removed from the selection when the command finishes.

* **Empty containers** - If deleting node(s) has caused the parent container to become empty, it is automatically deleted as well after the command finishes.

* **Component master->instance syncing** - Most changes you make inside a Component master are automatically mirrored to all other copies of that Symbol, unless
  overridden by local changes in a particular instance. See [Component / SymbolInstance docs](../scenegraph.md#SymbolInstance) for more details.

* **Repeat Grid cell syncing** - Most changes you make inside a Repeat Grid cell are automatically mirrored to all its other cells, except for certain properties
  such as text and images which XD permits to vary between grid cells.
