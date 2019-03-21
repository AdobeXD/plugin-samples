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
function update() {
  console.log("update");
}

module.exports = {
  panels: {
    panel: { show, hide, update }
  }
};
