let manifest;

/**
 * Reads the plugin's manifest and returns the parsed contents.
 *
 * Throws if the manifest is invalid or doesn't exist.
 *
 * Note: Reads manifest only once. Future calls will not reload
 * the manifest file.
 */
async function getManifest() {
    if (!manifest) {
        const fs = require("uxp").storage.localFileSystem;
        const dataFolder = await fs.getPluginFolder();
        const manifestFile = await dataFolder.getEntry("manifest.json");
        if (manifestFile) {
            const json = await manifestFile.read();
            manifest = JSON.parse(json);
        }
    }
    return manifest;
}

/**
 * Return the icon path that can fit the requested size without upscaling.
 *
 * @param {*} manifest
 * @param {number} size
 * @returns {string} path to the icon
 */
function getNearestIcon(manifest, size) {
    if (!manifest) {
        return;
    }

    if (manifest.icons) {
        // icons is an array of objects of the form
        // { width, height, path }

        // icons are assumed to be square, so we'll sort descending on the width
        const sortedIcons = manifest.icons.sort((a, b) => {
            const iconAWidth = a.width;
            const iconBWidth = b.width;
            return iconAWidth < iconBWidth ? 1 : iconAWidth > iconBWidth ? -1 : 0;
        });

        // next, search until we find an icon _too_ small for the desired size
        const icon = sortedIcons.reduce((last, cur) => {
            if (!last) {
                last = cur;
            } else {
                if (cur.width >= size) {
                    last = cur;
                }
            }
            return last;
        });

        return icon.path;
    }
}

module.exports = {
    getManifest,
    getNearestIcon
}