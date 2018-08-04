##### Edit context rules

The **edit context** is the scope in which selection and edit operations must occur:
- If the user has drilled down into a container node, that container is the current edit context and only its immediate children
  are in scope for selection/editing.
- If the user hasn't drilled into any container nodes, then XD is in the _root edit context_, and its scope includes all immediate
  children of the pasteboard (including Artboards), *and* all immediate children of all those Artboards.

Like nearly all edit operations in XD, your plugin is limited to making changes inside the scope of the current edit context.

![diagram of Edit Contexts](images/editContexts.png)

**Simple changes** can be made directly to the scenegraph nodes that are in scope:
- Change a property
- Delete a node
- Add a new _leaf node_ (basic shape node)

**Structural changes** _cannot_ be made directly, since their impact extends to nodes outside the edit context's scope. You can make
structural changes by scripting XD commands:
- Ungroup (or break apart other container types) - use the [`ungroup()` command](./reference/commands.md#module_commands.ungroup)
- Create new Groups (add a whole _tree_ of new nodes) - use the [`group()` command](./reference/commands.md#module_commands.group)
- Rearrange Z order - use commands such as [`bringToFront()`](./reference/commands.md#module_commands.bringToFront)

If a plugin breaks any of these rules, its entire edit operation will be reverted to protect the user's document from corruption.
