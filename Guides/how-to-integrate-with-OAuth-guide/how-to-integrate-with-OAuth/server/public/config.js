/* Replace "YOUR_ADOBE_API_KEY" with your Api key 
and "YOUR_ADOBE_API_SECRET" with your API Secret */

const dropboxApiKey = "y87386c2j2m2x89";
const dropboxApiSecret = "gf995bqmhgdcqzv";
const publicUrl = "https://176d0d74.ngrok.io";

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
