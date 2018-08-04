const { Text, Color } = require("scenegraph");
const publicUrl = "https://176d0d74.ngrok.io"
let accessToken;

async function launchOAuth(selection) {
	// Retrieve he access token if it doesn't exist already
	if (!accessToken) {
		const rid = await xhrRequest(`${publicUrl}/getRequestId`, 'GET')
			.then(response => {
				return response.id;
			})

		// opens the url in the default browser
		require("uxp").shell.openExternal(`${publicUrl}/login?requestId=${rid}`)

		accessToken = await xhrRequest(`${publicUrl}/getCredentials?requestId=${rid}`, 'GET')
			.then(tokenResponse => {
				// create the dialog
				let dialog = document.createElement("dialog");

				// main container
				let container = document.createElement("div");
				container.style.minWidth = 400;
				container.style.padding = 40;

				// add content
				let title = document.createElement("h3");
				title.style.padding = 20;
				title.textContent = `XD and Dropbox are now connected`;
				container.appendChild(title);

				// close button
				let closeButton = document.createElement("button");
				closeButton.textContent = "Got it!";
				container.appendChild(closeButton);
				closeButton.onclick = (e) => {
					dialog.close();
				}

				document.body.appendChild(dialog);
				dialog.appendChild(container);
				dialog.showModal()
				return tokenResponse.accessToken;
			})
	}

	// Retrieve the current user's dropbox profile using the access toekn received from OAuth
	const dropboxProfileUrl = `https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer%20${accessToken}`;
	const dropboxProfile = await xhrRequest(dropboxProfileUrl, 'POST');

	// Create a text element with the profile JSON
	const text = new Text();
	text.text = JSON.stringify(dropboxProfile);
	text.styleRanges = [
		{
			length: text.text.length,
			fill: new Color("#0000ff"),
			fontSize: 10
		}
	];
	selection.insertionParent.addChild(text);
	text.moveInParentCoordinates(100, 100);
}

// XHR helper function
function xhrRequest(url, method) {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.timeout = 6000;
		req.onload = () => {
			if (req.status === 200) {
				try {
					resolve(req.response);
				} catch (err) {
					reject(`Couldn't parse response. ${err.message}, ${req.response}`);
				}
			} else {
				reject(`Request had an error: ${req.status}`);
			}
		}
		req.ontimeout = () => {
			console.log("polling..")
			resolve(xhrRequest(url, method))
		}
		req.onerror = (err) => {
			console.log(err)
			reject(err)
		}
		req.open(method, url, true);
		req.responseType = 'json';
		req.send();
	});
}

module.exports = {
	commands: {
		launchOAuth
	}
};