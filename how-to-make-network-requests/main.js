const { ImageFill } = require("scenegraph");
const uxp = require("uxp").storage;
const fs = uxp.localFileSystem;

function applyImage(selection) {
    if (selection.items.length) {
        const url = "https://dog.ceo/api/breeds/image/random";
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                return downloadImage(selection, jsonResponse);
            });
    } else {
        console.log("Please select a shape to apply the downloaded image.");
    }
}

async function downloadImage(selection, jsonResponse) {
    try {
        const photoUrl = jsonResponse.message;
        const photoObj = await xhrBinary(photoUrl);
        const tempFolder = await fs.getTemporaryFolder();
        const tempFile = await tempFolder.createFile("tmp");
        await tempFile.write(photoObj, { format: uxp.formats.binary });
        applyImagefill(selection, tempFile);
    } catch (err) {
        console.log("error")
        console.log(err.message);
    }
}

function xhrBinary(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                try {
                    const arr = new Uint8Array(req.response);
                    resolve(arr);
                } catch (err) {
                    reject('Couldnt parse response. ${err.message}, ${req.response}');
                }
            } else {
                reject('Request had an error: ${req.status}');
            }
        }
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url, true);
        req.responseType = "arraybuffer";
        req.send();
    });
}

function applyImagefill(selection, file) {
    const imageFill = new ImageFill(file);
    selection.items[0].fill = imageFill;
}

module.exports = {
    commands: {
        applyImage
    }
}