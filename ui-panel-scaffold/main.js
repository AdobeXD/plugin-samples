function show(e) {
  console.log("show");
  console.log(e.node.nodeName);
  console.log(e.node.innerHTML); // Nothing here until you start adding UI!
}
function hide(e) {
  console.log("hide");
  console.log(e.node.nodeName);
  console.log(e.node.innerHTML); // Nothing here until you start adding UI!
}
function update(selection, documentRoot) {
  console.log("update");
  console.log(selection.items); // The SceneNodeList of user-selected items.
}

module.exports = {
  panels: {
    panel: { show, hide, update }
  }
};
