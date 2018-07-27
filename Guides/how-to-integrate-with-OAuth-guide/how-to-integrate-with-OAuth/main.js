const { Text, Color } = require("scenegraph");
const fs = require("localFileSystem").localFileSystem;
const publicUrl = "https://476322de.ngrok.io"

function launchOAuth() {
	const idRequest = new XMLHttpRequest();
	idRequest.responseType = 'json';
	idRequest.timeout = 6000;
	idRequest.onload = function (e2) {
		var json = idRequest.response;

		// open the native browser
		// openUri(`${publicUrl}/login?requestId=${json.id}`)

		function checkCredentials(url) {
			// Poll to get the credentials
			const tokenRequest = new XMLHttpRequest();
			tokenRequest.responseType = 'json';
			tokenRequest.timeout = 6000;
			tokenRequest.onload = function (e2) {
				var json2 = tokenRequest.response;
				console.log(json2)
			}
			tokenRequest.ontimeout = function () {
				console.log("polling..")
				checkCredentials(url)
			}
			tokenRequest.open('GET', `${publicUrl}/getCredentials?requestId=${json.id}`, true);
			tokenRequest.send();
		}
		checkCredentials(`${publicUrl}/getCredentials?requestId=${json.id}`)


	}
	idRequest.ontimeout = function () {
		console.log("timedout")
	}
	idRequest.open('GET', `${publicUrl}/getRequestId`, true);
	idRequest.send();
}

return {
	commands: { launchOAuth }
};