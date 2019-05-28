/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { selection } = require("scenegraph");
const application = require("application");
const fs = require("uxp").storage;
const base64ArrayBuffer = require('./node_modules/base64-arraybuffer/lib/base64-arraybuffer');
const config = require("./config.json");
const URL = config.URL;
const username = config.username;
const password = config.password;
let dialog;
let statusDialog;

async function exportToMagento() {
    return createUI();
}

async function createUI() {
    if (!dialog) {
        dialog = document.createElement("dialog");
        const html = `
        <style>
            title {
                display: block;
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
            }
            label.row > span {
                color: #8E8E8E;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
        </style>
        <form method="dialog" id="main">
            <div class="title"> Create Magento Product </div>
            <div class="row">
                <label class="row">
                    <span>SKU</span>
                    <input type="text" uxp-quiet="true" id="sku" placeholder="SKU" />
                </label>
                <label class="row">
                    <span>Name</span>
                    <input type="text" uxp-quiet="true" id="name" placeholder="Name" />
                </label>
                <label class="row">
                    <span>Price</span>
                    <input type="number" uxp-quiet="true" id="price" placeholder="Price" />
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Create Product</button></footer>
        </form>
        `;
        dialog.innerHTML = html;
        document.appendChild(dialog);
        document.querySelector("form").addEventListener("submit", callback);
    }
    return dialog.showModal();

}

async function createSuccessUI() {
    if (!statusDialog) {
        statusDialog = document.createElement("dialog");
        const html = `
        <form method="dialog" id="main">
            <title class="title"> Product added successfully! </title>
            <footer><button id="done" type="submit" uxp-variant="cta">OK</button></footer>
        </form>
        `;
        statusDialog.innerHTML = html;
        document.appendChild(statusDialog);
        return statusDialog.showModal();
    }
}

async function callback() {
    // GET admin token
    const token = await getAdminToken();
    // create a rendition
    const rendition = await createRendition(selection);
    // read as arraybuffer
    const arraybuffer = await rendition.read({ format: fs.formats.binary });
    // convert arraybuffer to base64
    const base64 = base64ArrayBuffer.encode(arraybuffer);

    const sku = dialog.querySelector("#sku").value;
    const name = dialog.querySelector("#name").value;
    const price = Number(dialog.querySelector("#price").value);

    const response = addNewProductWithRendition({ token, base64, sku, name, price });
}

async function getAdminToken() {
    const tokenResponse = await fetch(`${URL}/rest/default/V1/integration/admin/token`, {
        method: "post",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const token = await tokenResponse.json();
    return token;
}

async function createRendition(selection) {
    // let user choose a folder
    const folder = await fs.localFileSystem.getFolder();
    // create a file netry in the folder
    const file = await folder.createEntry("rendition.png", { overwrite: true });
    // create a rendition config object
    const renditionConfig = [{
        node: selection.items[0],
        outputFile: file,
        type: application.RenditionType.PNG,
        scale: 2
    }]
    // create a rendition
    const rendition = await application.createRenditions(renditionConfig);
    // export the rendition
    const renditionFile = rendition[0].outputFile;
    return renditionFile;
}

async function addNewProductWithRendition({ token, base64, sku, name, price } = {}) {
    const body = {
        "product": {
            "sku": sku,
            "name": name,
            "visibility": 4,
            "type_id": "simple",
            "price": price,
            "status": 1,
            "attribute_set_id": 4,
            "custom_attributes": [
                {
                    "attribute_code": "cost",
                    "value": ""
                },
                {
                    "attribute_code": "description",
                    "value": "Description"
                }
            ],
            "media_gallery_entries": [
                {
                    "position": 1,
                    "disabled": true,
                    "label": "tiny1",
                    "media_type": "image",
                    "types": ["image", "thumbnail", "small_image"],
                    "content": {
                        "type": "image/png",
                        "name": "xdrendition.png",
                        "base64_encoded_data": base64
                    }
                }
            ]
        }
    }

    const productResponse = await fetch(`${URL}/rest/default/V1/products`, {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const result = await productResponse.json();
    if (result) {
        createSuccessUI();
    }
    console.log(result);
}

module.exports = {
    commands: {
        myPluginCommand: exportToMagento
    }
};
