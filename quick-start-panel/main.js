function create() {
    const HTML =
        `<style>
            label.row > span {
                color: #8E8E8E;
                width: 20px;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
        </style>
        <form method="dialog" id="main">
            <div class="row break">
                <label class="row">
                    <span>↕︎</span>
                    <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Height" />
                </label>
                <label class="row">
                    <span>↔︎</span>
                    <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Width" />
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
        </form>
        <p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>
        `
    function exec() {
        const { editDocument } = require("application");
        const height = Number(document.querySelector("#txtV").value);
        const width = Number(document.querySelector("#txtH").value);

        editDocument({ editLabel: "Increase rectangle size" }, function (selection) {
            const selectedRectangle = selection.items[0];
            selectedRectangle.width += width
            selectedRectangle.height += height
        })
    }

    let rootNode = document.createElement("panel");
    rootNode.innerHTML = HTML;
    rootNode.querySelector("form").addEventListener("submit", exec);

    return rootNode;
}

function show(event) {
    const { selection } = require("scenegraph")
    event.node.appendChild(create());
    update(selection);
}

function hide(event) {
    event.node.firstChild.remove()
}

function update(selection) {
    const { Rectangle } = require("scenegraph");
    let form = document.querySelector("form");
    let warning = document.querySelector("#warning");
    if (!selection || !(selection.items[0] instanceof Rectangle)) {
        form.style.display = "none";
        warning.style.display = "inline";
    } else {
        warning.style.display = "none";
        form.style.display = "block";
    }
}


module.exports = {
    panels: {
        enlargeRectangle: {
            show,
            hide,
            update
        }
    }
};
