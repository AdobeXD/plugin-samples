/* Replace "YOUR_ADOBE_API_KEY" with your Api key 
and "YOUR_ADOBE_API_SECRET" with your API Secret */

const adobeApiKey = "d840220eca11422f8f9eae1ae72e49ce";
const adobeApiSecret = "0e46710d-2725-4c91-94e4-ef2d08d5e570";
const publicUrl = "https://476322de.ngrok.io";

try {
        if (module) {
                module.exports = {
                        adobeApiKey: adobeApiKey,
                        adobeApiSecret: adobeApiSecret,
                        publicUrl: publicUrl
                }
        }
}
catch (err) { }
