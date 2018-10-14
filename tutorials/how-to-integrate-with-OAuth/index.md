# How to Integrate with OAuth

This tutorial will show you how to implement the OAuth workflow in an XD plugin, using the Dropbox API as an example.

> **info**
> Auth workflows are necessarily complex, so this tutorial will be on the longer side and make use of some advanced concepts. Please read the each section carefully, especially the Prerequisites and Configuration sections.


## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](/tutorials/quick-start)
- [Debugging Tutorial](/tutorials/debugging/README.md)
- Familiary with your OS's command line application
- Familiarity with [OAuth](https://oauth.net/2/)
- [A registered app on Dropbox](https://www.dropbox.com/developers/apps/create) with the following settings:

	1. Choose "Dropbox API"
	1. Choose "Full Dropbox" for the access type
	1. In `Redirect URIs`, add your own `https` `ngrok` URL (example: "https://476322de.ngrok.io/callback") or a secure public URL if you have one


## Technology Used

1. [Install required] [Node.js](https://nodejs.org/en/) and the [`npm` package manager](https://www.npmjs.com)
1. [OAuth](https://oauth.net/2/)
1. [ngrok](https://ngrok.com/)
1. [Dropbox API](https://www.dropbox.com/developers/documentation/http/overview)


## Overview of the OAuth workflow

There are three parts of this workflow:

- Your XD plugin
- Your server endpoints (for this development example, we'll create a local Node.js server)
- The service providers OAuth endpoints (for this example, the Dropbox API)

The high-level workflow is as follows:

1. The XD plugin pings the server to get the session ID
1. The server returns a unique ID for the user's XD session
1. Plugin opens a tab in user's default browser with a URL pointing to an endpoint on the server
1. The server handles the entire OAuth code grant workflow
1. The user gives necessary permissions to the plugin
1. The server saves the access token paired with the session ID
1. The plugin polls the server to check if the access token is available for the session ID. If the token is available, the server sends the access token back
1. The plugin uses the access token to make API calls to the service API


## Configuration

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-integrate-with-OAuth).

The following steps will help you get the sample code from our GitHub repo up and running.


### 1. Install Node.js packages

Inside the sample repo's `server` folder, there is a `package.json` file that contains a list of dependencies. Run the following command from the top level directory of the repo to install the dependencies:

```bash
$ cd server
$ npm install
```

### 2. Use `ngrok` to create a public SSL URL

You can use either [ngrok](https://ngrok.com/) to create a public SSL endpoint, or use your own public URL.

To use `ngrok`, first [download it to your machine](https://ngrok.com/download).

You can run `ngrok` from anywhere on your machine, but since we're already in the `server` folder, we'll move `ngrok` there for convenience.

```bash
mv ~/Downloads/ngrok ./
```

Then we run it:

```bash
./ngrok http 8000
```

Now `ngrok` is forwarding all HTTP requests from port `8000` to a public SSL endpoint.

You can see the forwarding endpoint currently being used in the `ngrok` terminal output. Note the forwarding endpoint; we'll use it in the next step.


### 3. Set your API credentials and public URL

Enter the required credentials in `public/config.js`. You'll need:

- Your Dropbox API key
- Your Dropbox API secret
- Your `ngrok` public URL

```js
const dropboxApiKey = "YOUR-DROPBOX-API-KEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "YOUR-PUBLIC-URL"; // e.g. https://476322de.ngrok.io/

try {
	if (module) {
		module.exports = {
			dropboxApiKey: dropboxApiKey,
			dropboxApiSecret: dropboxApiSecret,
			publicUrl: publicUrl
		}
	}
}
catch (err) {
	console.log(err);
}
```

Our server will make use of these settings in a later step.


### 4. Start the server

After completing the configuration steps, start the server from the `server` folder:

```
$ npm start
```

Now you have a running server with an HTTPS endpoint and your Dropbox credentials ready to go.


## Development Steps

Now we can get back to the XD plugin side of things!

### 1. Require in XD API dependencies

For this tutorial, we just need access to two XD scenegraph classes.

Add the following lines to the top of your plugin's top-level `main.js` file:

```js
const { Text, Color } = require("scenegraph");
```

Now the `Text` and `Color` classes are required in and ready to be used.


### 2. Store the public URL

Your plugin will also need to know your public URL. Since we used `ngrok` earlier, we'll make a constant with that URL:

```js
const publicUrl = "YOUR-PUBLIC-URL"; 	// e.g. https://476322de.ngrok.io/
```

This url will be used to send requests to your server.


### 3. Create a variable to store the access token

Once you receive the access token from your server, you can use the token for API calls as long as the token is stored in memory and the XD session is alive.

```js
let accessToken;
```

We'll assign the value later.


### 4. Write a helper function for XHR requests



```js
// XHR helper function
function xhrRequest(url, method) {
	return new Promise((resolve, reject) => { // [1]
		const req = new XMLHttpRequest();
		req.timeout = 6000; // [2]
		req.onload = () => {
			if (req.status === 200) {
				try {
					resolve(req.response); // [3]
				} catch (err) {
					reject(`Couldn't parse response. ${err.message}, ${req.response}`);
				}
			} else {
				reject(`Request had an error: ${req.status}`);
			}
		}
		req.ontimeout = () => {
			console.log("polling..") // [4]
			resolve(xhrRequest(url, method))
		}
		req.onerror = (err) => {
			console.log(err)
      reject(err)
		}
		req.open(method, url, true); // [5]
		req.responseType = 'json';
		req.send();
	});
}
```

1. This helper function returns a promise object
2. Request timeout is set to 6000 miliseconds
3. On a successful request, the promise is resolved with `req.response`. In any other scenarios, the promise is rejected
4. If the request was timed out after 6000 miliseconds, the function loops and keeps sending XHR request until the response is received
5. The function sends the request to the specified `url` with the specified `method`


### 5. Create the main plugin function

Note the use of the `async` keyword since this function will have asynchronous calls inside.

```js
async function launchOAuth(selection) {
	...
}
```

Please see the subsequent steps below to see what goes into this function


### 6. Get the session ID

We'll make an XHR request.

```js
const rid = await xhrRequest(`${publicUrl}/getRequestId`, 'GET')
			.then(response => {
				return response.id;
			})
```

This part of the function sends a `GET` request to your server's `getRequestId` endpoint and returns `response.id`.

Let's take a look at the code on the server side:

```js
/* Authorized Request IDs (simulating database) */
const requestIds = {}; // [1]

app.get('/getRequestId', function (req, res) {
	/* Simulating writing to a database */
	for (let i = 1; i < 100; i++) { // [2]
		if (!(i in requestIds)) {
			requestIds[i] = {};
			console.log(i)
			res.json({ id: i })
			break;
		}
	}
})
```

1. Note that there is a global variable, `requestIDs`, which is an empty JavaScript object. For the sake of simplicity, we are using this object to simulate a database
2. This loop function simulates writing to a database by creating a new id, save the id in the global object, and `res.json` with the id


### 7. Open the default browser with the URL pointing to your server

To open the machine's default browser from an XD plugin, we can use UXP's `shell` module:

```js
require("uxp").shell.openExternal(`${publicUrl}/login?requestId=${rid}`)
```

This will open the browser with the url pointing to an endpoint on your server.

Let's take a look at the code on the server side.

```js
app.get('/login', function (req, res) {
	let requestId = req.query.requestId; // [1]
	/* This will prompt user with the Dropbox auth screen */
	res.redirect(`https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${dropboxApiKey}&redirect_uri=${publicUrl}/callback&state=${requestId}`) // [2]
})

app.get('/callback', function (req, res) {
	/* Retrieve authorization code from request */
	let code = req.query.code; // [3]
	let requestId = req.query.state;

	/* Set options with required paramters */
	let requestOptions = { // [4]
		uri: `https://api.dropboxapi.com/oauth2/token?grant_type=authorization_code&code=${code}&client_id=${dropboxApiKey}&client_secret=${dropboxApiSecret}&redirect_uri=${publicUrl}/callback`,
		method: 'POST',
		json: true
	}

	/* Send a POST request using the request library */
	request(requestOptions) // [5]
		.then(function (response) {
			/* Store the token in req.session.token */
			req.session.token = response.access_token; // [6]

			/* Simulating writing to a database */
			requestIds[requestId]["accessToken"] = response.access_token; // [7]
			res.end()
		})
		.catch(function (error) {
			res.json({ 'response': 'Log in failed!' });
		});
})
```

1. `/login` route grabs the `requestId` from the query parameter
2. and redirects to the Dropbox's `authorize` endpoint and pass the `requestId` to the optional parameter, `state`. This redirect will prompt the login screen on the user's browser
3. Once the dropbox API returns the `code` to the specified callback endpoint, `/callback`, which then parses the `code` and the `requestId`
4. Set `requestOptions` object with Dropbox's token URI
5. Use the `request` library to send the `POST` request
6. Store the access token received from Dropbox in the session object
7. Simulate writing to a database by paring the access token with `requestId` and storing it to `requestIds` global object


### 8. Poll the server until access token is received

```js
accessToken = await xhrRequest(`${publicUrl}/getCredentials?requestId=${rid}`, 'GET')
			.then(tokenResponse => {
				return tokenResponse.accessToken;
			})
```
As noted in step #4, the `xhrRequest` helper function is designed to poll the server if the initial request is not responded in 6000 miliseconds. Once the user completes the OAuth workflow in the browser, polling should stop and this request should be returned with the access token.


### 9. Show a dialog indicating the token has been received

```js
// create the dialog
let dialog = document.createElement("dialog"); // [1]

// main container
let container = document.createElement("div"); // [2]
container.style.minWidth = 400;
container.style.padding = 40;

// add content
let title = document.createElement("h3"); // [3]
title.style.padding = 20;
title.textContent = `XD and Dropbox are now connected`;
container.appendChild(title);

// close button
let closeButton = document.createElement("button"); // [4]
closeButton.textContent = "Got it!";
container.appendChild(closeButton);

closeButton.onclick = (e) => { // [5]
    dialog.close();
}

document.body.appendChild(dialog); // [6]
dialog.appendChild(container);
dialog.showModal()
```

Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects. Elements have the `style` property which contains metrics properties you can set
1. The `dialog` element is the modal window that pops down in XD
2. Create a container `div` element
3. Create a `h3` element to let the user know the auth workflow has been completed
4. You need at least one exit point. Create a close button and add it to the container
5. Create a listener for the click event and close the dialog
6. Attache the dialog to the document, addd the contianer, and use `showModal` method to show the modal


### 10. Make an API call to Dropbox

```js
const dropboxProfileUrl = `https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer%20${accessToken}`; // [1]
const dropboxProfile = await xhrRequest(dropboxProfileUrl, 'POST'); // [2]
```

1. Note that received `accessToken` is included in this Dropbox API call to retrieve the current account's profile
2. `xhrRequest` helper function is used again to make this `POST` call


### 10. Create a text element to show the profile information inside the current artboard

```js
const text = new Text(); // [1]
text.text = JSON.stringify(dropboxProfile); // [2]
text.styleRanges = [ // [3]
  {
    length: text.text.length,
    fill: new Color("#0000ff"),
    fontSize: 10
  }
];
selection.insertionParent.addChild(text); // [4]
text.moveInParentCoordinates(100, 100); // [5]
```

1. Create a new `Text` instance in XD
2. Populate the text with the stringified version of the profile `json` object
3. Add the `styleRanges` for the text
4. Insert the text
5. Move the text inside the artboard to make it visible


## Next Steps

Ready to explore further? Take a look at our other resources:

- [Tutorials](/tutorials)
- [Sample code repos](https://github.com/AdobeXD/plugin-samples)
