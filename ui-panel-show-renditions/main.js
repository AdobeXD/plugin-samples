const application = require("application");
const fs = require("uxp").storage;
const { selection } = require("scenegraph")
let renditionTimer;

function create() {
    const HTML =
        `<style>
            .parent {
                margin-left: 20%;
            }
            .container {
                display:flex;
                flex-wrap: wrap;
                margin: auto;
            }
            img {
                flex: 1 1 auto;
                width: 100px;
                margin: auto;
                margin-bottom: 10px;
            }
            form {
                width:90%;
                margin: -20px;
                padding: 0px;
            }
        </style>
        <form method="dialog" id="main">
            <div class="parent">
                <div class="container" id="images">
                </div>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Export</button></footer>
        </form>
        `
    function log() {
        console.log(`exporting: ${selection.items.map(node => node.name)}`)
    }

    let rootNode = document.createElement("panel");
    rootNode.innerHTML = HTML;
    rootNode.querySelector("form").addEventListener("submit", log);

    return rootNode;
}

function show(event) {
    event.node.appendChild(create());
    update(selection);
}

function hide(event) {
    event.node.firstChild.remove()
}

async function update() {
    let images = document.querySelector("#images");

    while (images.firstChild) {
        images.removeChild(images.firstChild);
    }

    if (renditionTimer) {
        clearTimeout(renditionTimer);
        renditionTimer = null;
    }
    renditionTimer = setTimeout(
        async () => {
            try {
                if (selection.items.length) {
                    const renditionsFiles = await createRenditions();
                    renditionsFiles.forEach(async renditionFile => {
                        const arrayBuffer = await renditionFile.read({ format: fs.formats.binary });
                        let image = document.createElement("img");
                        let base64 = base64ArrayBuffer(arrayBuffer);
                        image.setAttribute("src", `data:image/png;base64,${base64}`);
                        images.appendChild(image);
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }, 100
    );
}

async function createRenditions() {
    const folder = await fs.localFileSystem.getTemporaryFolder();
    const arr = await selection.items.map(async item => {
        const file = await folder.createFile(`${item.guid}.png`, { overwrite: true });
        let obj = {};
        obj.node = item;
        obj.outputFile = file;
        obj.type = "png";
        obj.scale = 2;
        return obj
    })
    const renditions = await Promise.all(arr);
    const renditionResults = await application.createRenditions(renditions);
    const renditionsFiles = renditionResults.map(a => a.outputFile);
    return renditionsFiles;
}

function base64ArrayBuffer(arrayBuffer) {
    let base64 = ''
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    const bytes = new Uint8Array(arrayBuffer)
    const byteLength = bytes.byteLength
    const byteRemainder = byteLength % 3
    const mainLength = byteLength - byteRemainder

    let a, b, c, d
    let chunk

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12 // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6 // 4032     = (2^6 - 1) << 6
        d = chunk & 63               // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
        chunk = bytes[mainLength]

        a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4 // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

        a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4 // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2 // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }

    return base64
}

module.exports = {
    panels: {
        example: {
            show,
            hide,
            update
        }
    }
};
