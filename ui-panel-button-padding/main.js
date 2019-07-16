/***********************************************************
 *
 * Sample plugin demonstrating panels
 *
 * Based on button padding from XD Plugin labs
 *
 * NOTE: THESE APIS ARE NOT FINAL!
 */

/*
 * Create a text node in the center of the selection's insertionParent
 * with the specified color, and return it.
 */
function createText(text, { color = "blue" } = {}) {
  const { selection} = require("scenegraph");
  const { Text, Color } = require("scenegraph");

  const newText = new Text();
  newText.text = text;
  newText.fill = new Color(color);

  selection.insertionParent.addChild(newText);
  newText.placeInParentCoordinates({x: 0, y: 0}, selection.insertionParent.localCenterPoint);

  return newText;
}

/*
 * Create a rectangle (button) around the given node with the specified
 * horizontal and vertical padding, along with the specified color.
 *
 * Automatically groups the text node and rectangle together and returns
 * the group.
 */
function createRectangle(node, {hPadding, vPadding, color = "blue"} = {}) {
  const { Rectangle, Color, selection } = require("scenegraph");
  const { group } = require("commands");

    var textNode = node;
    var bounds = textNode.boundsInParent;

    var shape = new Rectangle();
    shape.width = bounds.width + 2 * hPadding
    shape.height = bounds.height + 2 * vPadding;
    shape.stroke = new Color(color);

    selection.insertionParent.addChild(shape);
    shape.placeInParentCoordinates(
        {x: 0, y: 0},
        {x: bounds.x - hPadding, y: bounds.y - vPadding}
    );

    // group the button together
    selection.items = [ textNode, shape ];
    group();

    // the group is now the first selected item
    const theGroup = selection.items[0];
    theGroup.pluginData = { button: true }; // sentinel for later use, so we know this is ours
    return theGroup;
}

/*
 * Update an existing button group with the specified horizontal and vertical
 * padding. If color is specified, will update the rectangle's stroke.
 */
function updateRectangle(group, {hPadding, vPadding, color} = {}) {
  const { Text, Color } = require("scenegraph");
  const textNode = group.children.filter(item => item instanceof Text)[0];
  const shape = group.children.filter(item => !(item instanceof Text))[0];

  const bounds = textNode.boundsInParent;
  shape.resize(bounds.width + 2 * hPadding, shape.height = bounds.height + 2 * vPadding);
  shape.placeInParentCoordinates(
      {x: 0, y: 0},
      {x: bounds.x - hPadding, y: bounds.y - vPadding}
  );

  if (color) {
    shape.stroke = new Color(color);
  }
}

/*
 * Extract the metrics from a group. This assumes that the group is one we've
 * created, so only call this on groups with our sentinel (stored on pluginData)
 */
function extractMetrics(group) {
  const { Text } = require("scenegraph");

  const textNode = group.children.filter(item => item instanceof Text)[0];
  const shape = group.children.filter(item => !(item instanceof Text))[0];

  if (!textNode || !shape) {
    // make sure we do _something_ reasonable if things have gone horribly awry
    return {
      hPadding: 10,
      vPadding: 10,
      color: "black"
    };
  }

  // this isn't a perfect calculation that matches with the real world -- it assumes
  // the rectangle hasn't been moved in relation to its text, for example. But it's close
  // enough for this panel.
  const hPadding = Math.floor((shape.boundsInParent.width - textNode.boundsInParent.width) / 2);
  const vPadding = Math.floor((shape.boundsInParent.height - textNode.boundsInParent.height) / 2);
  const color = shape.stroke.toHex();
  return {
    hPadding,
    vPadding,
    color
  };
}

const MODES = {
  NEW: "new",
  CREATE: "create",
  UPDATE: "update"
};

/*
 * Return a panel configuration for our button padding example.
 *
 * DO you have to follow this pattern? No. As long as you export a show, hide,
 * and (optionally) update methods to XD, you're fine. However, since each is
 * fairly intertwined with the state of the panel itself, it made sense to
 * encapsulate everything here.
 */
function panel() {
  let rootNode = null;
  let visible = false;
  let mode = MODES.NEW;

  // convenience! We're going to be typing this a lot.
  const $ = sel => rootNode && rootNode.querySelector(sel);

  // NOTE: Some of these styles are overriding issues with the current panel
  // drop. THIS WILL CHANGE IN THE FUTURE!
  const PANEL_HTML = `
<style>
  panel {
  }
  .break {
    flex-wrap: wrap;
  }
  label.row > * {
    margin: 3px 0;
  }
  label.row > span {
    color: #8E8E8E;
    width: 20px;
    text-align: right;
    font-size: 9px;
  }
  label.row input {
    flex: 1 1 auto;
  }
  label.row input[type=number] {
    flex-basis: 32px;
  }
  div input[type=checkbox] {
    flex: 0 0 20px;
  }
  form footer > * {
    position: relative;
    left: 8px;
  }

</style>
<form method="dialog" id="main">
  <label class="row" id="fldButtonText">
      <span>Aa</span>
      <input type="text" id="txtButtonText" value="Text" placeholder="Text" uxp-quiet="true"/>
  </label>
  <div class="row break">
    <label class="row">
      <span>↕︎</span>
      <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Vertical padding" />
    </label>
    <label class="row">
      <span>↔︎</span>
      <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Horizontal padding" />
    </label>
    <div class="row">
      <input type="checkbox" checked id="chkColor" />
      <label class="row" id="fldColor">
        <input type="text" uxp-quiet="true" id="txtColor" value="#0000FF" placeholder="CSS Color" />
        <span>🎨</span>
      </label>
    </div>
  </div>
  <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
</form>
`;

  /*
   * Execute the user's intent. This is wired up to the panel's "#OK" button.
   * The user's intent is based on the current plugin mode, set during selection.
   */
  function exec() {
    const { selection } = require("scenegraph");
    const { editDocument } = require("application");

    const vPadding = Number($("#txtV").value);
    const hPadding = Number($("#txtH").value);
    const cssColor = $("#txtColor").value || "blue";
    const useColor = $("#chkColor").checked;

    switch (mode) {
    default:
    case MODES.NEW:
      // try to be useful by default! Create a new text node with the user's specified
      // text and then create the rectangle around it.
      editDocument( {editLabel: "Create New Button"} , () => {
        const newText = createText($("#txtButtonText").value, {color: useColor ? cssColor: undefined});
        selection.items = createRectangle(newText,{ hPadding, vPadding, color: useColor ? cssColor : undefined });
        update();
      });
      break;
    case MODES.CREATE:
      // Typical pattern -- user has created a text node -- we just need to create
      // the rectangle
      editDocument( {editLabel: "Create Buttons"} , () => {
        selection.items = selection.items
        .map(item => item).map(node => createRectangle(node, { hPadding, vPadding, color: useColor ? cssColor : undefined}));
        update();
      });
      break;
    case MODES.UPDATE:
      // oh, the user's re-selected a previously created button. Update it instead.
      editDocument( {editLabel: "Update Buttons"}, () => {
        selection.items.map(item => item).forEach(group => updateRectangle(group, {hPadding, vPadding, color: useColor ? cssColor : undefined}));
      });
      break;
    }
  }

  /*
   * Create the panel's DOM. We'll do this only once.
   */
  function create() {
    if (rootNode) { return rootNode; }

    rootNode = document.createElement("panel");
    rootNode.innerHTML = PANEL_HTML;

    $("form").addEventListener("submit", exec);
    $("#chkColor").addEventListener("change", () => {
      $("#txtColor").disabled = !$("#chkColor").checked;
    });

    return rootNode;
  }

  /*
   * Attach the panel's UI to event.node, which is the UI's mount point provided by XD.
   */
  function show(event) {
    event.node.appendChild(create());
    visible = true;
    update();
  }

  /*
   * Mark ourselves as hidden.
   */
  function hide(event) {
    visible = false;
  }

  /*
   * Something changed -- either our selection, or part of the selection mutated.
   * This function is multipurpose:
   * 1. It attempts to figure out the user's intent (plugin mode)
   * 2. It updates our UI if part of the selection is mutating
   */
  function update() {
    const { selection, Text, Group } = require("scenegraph");

    // no point in doing anything. Get in and out FAST.
    if (!visible) return;

    // no selection? Be useful by default -- create something instead of showing an error.
    if (selection.items.length === 0) {
      mode = MODES.NEW;
    } else {
      // things get a little tricky. We can't work in every possible scenario,
      // so assume we're creating a new thing (again, useful by default) unless
      // we know we can operate on the selection
      mode = MODES.NEW;

      // If the entire selection consists of text nodes, we can create rectangles
      // around them.
      if (selection.items.every(item => item instanceof Text)) {
        mode = MODES.CREATE;
      }

      // If the entire selection consists of groups (with our sentinel flag), we
      // know we can update them all.
      if (selection.items.every(item => item instanceof Group && item.pluginData)) {
        mode = MODES.UPDATE;
      }
    }

    // Depending on the user's intent, update the OK button's label
    $("#ok").textContent = (mode === MODES.CREATE || mode === MODES.NEW) ? "Create" : "Update";

    // Also hide the button text in every case except the "useful by default" option
    $("#fldButtonText").style.display = (mode === MODES.NEW) ? "flex" : "none";

    // If we're updating, extract the metrics and update the UI.
    if (mode === MODES.UPDATE) {
      const {hPadding, vPadding, color: cssColor} = extractMetrics(selection.items[0]);
      $("#txtV").value = vPadding;
      $("#txtH").value = hPadding;
      $("#txtColor").value = cssColor;
    }
  }

  // XD expects a show, hide, and update method -- we're returning those here
  // to be exported below.
  return {
    show,
    hide,
    update
  }
}

module.exports = {
    panels: {
        buttonFrame: panel()
    }
};
