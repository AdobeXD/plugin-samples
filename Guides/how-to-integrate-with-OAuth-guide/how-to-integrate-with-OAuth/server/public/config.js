/* Replace "YOUR_ADOBE_API_KEY" with your Api key 
and "YOUR_ADOBE_API_SECRET" with your API Secret */

const dropboxApiKey = "YOUR-DROPBOX-APIKEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "YOUR-PUBLIC-URL";

try {
        if (module) {
                module.exports = {
                        dropboxApiKey: dropboxApiKey,
                        dropboxApiSecret: dropboxApiSecret,
                        publicUrl: publicUrl
                }
        }
}
catch (err) { }
