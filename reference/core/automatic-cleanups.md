# Automatic cleanups

To make writing your plugin simpler, XD performs a number of automated cleanups after each plugin command finishes:

* **Artboard reparenting** - If a node is changed to overlap an Artboard, it will automatically become a child of the artboard when the command finishes,
  and vice versa if a node no longer overlaps an Artboard.
* **Selection** - Deleted nodes are removed from the selection when the command finishes.
* **Empty containers** - If deleting node(s) has caused the parent container to become empty, it is automatically deleted as well after the command finishes.
* **Symbol / Repeat Grid syncing** - Most changes you make inside a Symbol are automatically mirrored to all other copies of that Symbol, and most changes you
  make inside a Repeat Grid cell are automatically mirrored to all its other cells. The only exceptions are certain properties such as text and images which XD
  permits to vary between Symbol instances or grid cells.