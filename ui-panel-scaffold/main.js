const { Artboard, Color, selection } = require("scenegraph");

function show(e) {
  console.log("show");
  console.log(e.node.nodeName);
  console.log(e.node.innerHTML); // Nothing here until you start adding UI!

  e.node.innerHTML = `
<h1>O Green World!</h1>
<footer>
  <button id="omg">Green!</button>
</footer>
  `;

  document.querySelector("#omg").addEventListener("click", color);
  validateSelection();
}
function hide(e) {
  console.log("hide");
  console.log(e.node.nodeName);
  console.log(e.node.innerHTML); // Nothing here until you start adding UI!
}
function update() {
  console.log("update");
  validateSelection();
}

function color() {
  console.log("color");

  const { executePanelCommand } = require("scenegraph");

  executePanelCommand(() => {
    console.log("execute");

    const { selection } = require("scenegraph");

    const item = selection.items[0];
    item.fill = new Color("green");
  }, "Greened");

  // executePanelCommand(() => {
  //   console.log(executePanelCommand);
  //   selection.items = selection.items
  //     .map(item => item)
  //     .map(node => (node.fill = new Color("red")));
  // }, "Create buttons");
}

function validateSelection() {
  const { selection } = require("scenegraph");
  if (selection.items[0]) {
    document.querySelector("button").disabled = false;
  } else {
    document.querySelector("button").disabled = true;
  }
}

module.exports = {
  panels: {
    panel: { show, hide, update }
  }
};
