const { alert, error } = require("./lib/dialogs.js");

async function showAlert() {
	/* we'll display a dialog here */
    await alert("Connect to the Internet", //[1]
        "In order to function correctly, this plugin requires access to the Internet. Please connect to a network that has Internet access."); //[2]
}

async function showError() {
	/* we'll display a dialog here */
    await error("Synchronization Failed", //[1]
        "Failed to synchronize all your changes with our server. Some changes may have been lost.",
        "Steps you can take:",
        "* Save your document",
        "* Check your network connection",
        "* Try again in a few minutes"); //[2]
}

module.exports = {
    commands: {
        showAlert,
        showError
    }
};