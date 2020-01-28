/***********************************************************
 *
 * Sample plugin demonstrating drag and drop
 */

const { localFileSystem:fs, formats } = require("uxp").storage;

const MODES = {
  URL: "urlPane",
  FILE: "filePane"
};

function panel() {
  let rootNode = null;
  let mode = MODES.URL;       // which mode -- adding image by URL or File?
  let thingsToDrag = [];      // list of things to drag

  // convenience! We're going to be typing this a lot.
  const $ = sel => rootNode && rootNode.querySelector(sel);

  const PANEL_HTML = `
<style>
  .pane {
    border: 1px solid #808080;
    border-radius: 8px;
    padding: 8px;
    margin: 8px 0;
  }
  .pane h3 {
    letter-spacing: 0;
    font-size: 12px;
    padding: 8px;
    position: relative;
    top: -8px;
    margin: -8px -8px 0 -8px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #808080;
    color: white;
  }
  .grid img {
    margin: 8px;
    border-radius: 8px;
  }
</style>
<div class="pane">
  <h3>Select an action:</h3>
  <label id="fldAction">
    <select id="lstAction">
      <option selected value="${MODES.URL}">Image URL</option>
      <option value="${MODES.FILE}">Local File</option>
    </select>
  </label>
</div>
<div id="${MODES.URL}" class="pane">
  <h3>Image URL</h3>
  <form method="dialog">
    <label id="fldImageUrl" style="width: 100%;">
      <span>URL of image</span>
      <input style="width: 100%;" type="text" id="txtImageUrl" placeholder="https://" uxp-quiet="true"/>
    </label>
    <footer><button id="btnDownloadImage" type="submit" uxp-variant="cta">Download</button></footer>
  </form>
</div>
<div id="${MODES.FILE}" class="pane">
  <h3>Load an Image</h3>
  <form method="dialog">
    <footer><button id="btnLoadImage" uxp-variant="cta">Load Image</button></footer>
  </form>
</div>
<div class="pane">
  <h3>Images to Drag</h3>
  <div id="divThingsToDrag" class="grid" draggable="true" ></div>
</div>
`;

  // Make panes visible based upon the user's current action
  function updatePaneVisibility() {
    Object.entries(MODES).forEach(([k, v]) => {
      $(`#${v}`).style.display = (mode === v) ? "initial" : "none";
    });
  }

  // add images to our image grid & thingsToDrag array
  function addImageToDrag(file, url) {
    // this is the _visual_ representation of what the user will drag
    const img = document.createElement("img");
    img.src = url;
    img.height = 100;
    $("#divThingsToDrag").appendChild(img);

    // this is the file path of what the user will drag. If using
    // base64 data, use data:/image/type;base64,....
    thingsToDrag.push(file.nativePath);
  }

  /*
   * Create the panel's DOM. We'll do this only once.
   */
  function create() {
    if (rootNode) { return rootNode; }

    rootNode = document.createElement("div");
    rootNode.innerHTML = PANEL_HTML;

    updatePaneVisibility();

    // allow the user to change the visible pane by selecting
    // it from the action list
    $("#lstAction").onchange = (evt) => {
      mode = evt.target.value;
      updatePaneVisibility();
    }

    // The user is starting to drag our image grid!
    $("#divThingsToDrag").addEventListener("dragstart", evt => {
      if (thingsToDrag.length > 0) {
        // show the copy drag and drop effect (various by OS)
        evt.dataTransfer.dropEffect = "copy";

        // and add what we'll copy -- in this case a list of file paths (or data URIs)
        evt.dataTransfer.setData("text/uri-list", thingsToDrag.join("\n"));
      }
    });

    $("#btnDownloadImage").onclick = async () => {
      const url = $("#txtImageUrl").value;
      const r = await fetch(url, { "Content-Type": "image/jpeg" });
      const b = await r.arrayBuffer();
      const imgArray = new Uint8Array(b);

      // here we're writing the file out to temporary storage. You could
      // also use a base64 data URI instead, but we're opting for
      // file storage, since otherwise we'd have to include a btoa
      // polyfill, and this is shorter (and faster)
      // Caveat: we don't clean up after ourselves. You should.
      const tempFolder = await fs.getTemporaryFolder();
      const imageFile = await tempFolder.createFile(`temp${thingsToDrag.length}.jpg`, { overwrite: true });
      await imageFile.write(imgArray, { format: formats.binary });
      addImageToDrag(imageFile, url);
    }

    $("#btnLoadImage").onclick = async () => {
      const imageFile = await fs.getFileForOpening({types: ["jpg", "png", "svg", "gif"]});
      if (imageFile) {
        addImageToDrag(imageFile, imageFile.url);
      }
    }

    return rootNode;
  }

  /*
   * Attach the panel's UI to event.node, which is the UI's mount point provided by XD.
   */
  function show(event) {
    event.node.appendChild(create());
  }

  return {
    show
  }
}

module.exports = {
    panels: {
        dnd: panel()
    }
};
