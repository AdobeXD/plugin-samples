##### Scenegraph

The XD document is represented as a hierarchical tree of nodes called the **scenegraph**. Some scenenodes may contain children (e.g. a
Group or Artboard), while others are leaf nodes (e.g. a Rectangle or Text node).

![example of scenegraph tree](images/scenegraphExample.png)

Typically, you access scenegraph nodes via the [`selection`](./reference/selection.md) argument that is passed to your plugin command.

You can modify properties on any scenenodes within the _current edit context_ (see below), and you can add leaf nodes to the edit
context, but you cannot make _structural_ changes directly to the scenegraph tree - e.g. reordering nodes or changing nesting. To do
this, instead use [commands](./reference/commands.md).