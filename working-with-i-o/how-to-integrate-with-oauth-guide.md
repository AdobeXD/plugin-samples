# How to integrate with OAuth

This sample app will show you how to implement the OAuth workflow with Dropbox API in Adobe XD. The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Guides/tree/master/Guides/how-to-integrate-with-OAuth-guide).

After setting up the sample, you will have an XD plugin and a separate node server. See below for the high level workflow:

1. Plugin pings the server to get the session ID
2. Server returns a unique ID for the user's XD session
3. Plugin opens a tab in user's default browser with a url pointing to an endpoint of the server 
4. Server handles the entire OAuth code grant workflow
5. User gives necessary permissions to the plugin
6. Server saves the access token paired with the session ID
7. Plugin polls the server to check if the access token is available for the session ID. If it does, the server sends back the access token
8. Plugin uses the access token to make API calls

## Contents

1. [Technology Used](how-to-integrate-with-oauth-guide.md#technology-used)
2. [Prerequisites](how-to-integrate-with-oauth-guide.md#prerequisites)
3. [Configuration](how-to-integrate-with-oauth-guide.md#configuration)
4. [Development Steps](how-to-integrate-with-oauth-guide.md#development-steps)
5. [Next Steps](how-to-integrate-with-oauth-guide.md#next-steps)
6. [Other Resources](how-to-integrate-with-oauth-guide.md#other-resources)

## Technology Used

1. [OAuth](https://oauth.net/2/)
2. Node.js and the `npm` package manager
3. [ngrok](https://ngrok.com/)

## Prerequisites

This guide will assume that you are familiar with [OAuth workflow](https://oauth.net/2/).

You must also have [a registered app on Dropbox](https://www.dropbox.com/developers/apps/create) with the following settings:

1. Choose "Dropbox API"
2. Choose "Full Dropbox" for the access type
3. In `Redirect URIs`, add your a `https` `ngrok` uri \(example: "[https://476322de.ngrok.io/callback](https://476322de.ngrok.io/callback)"\) or a secure public uri if you have one

## Configuration

The following steps will help you get this sample up and running.

### Install Node.js packages

Inside the `server` folder, there is `package.json` file that contains a list of dependencies. Run the following command from the top level directory of the app to install dependencies:

```text
$ cd server
$ npm install
```

### Use `ngrok` to create an SSL public URL

You can use either [ngrok](https://ngrok.com/) to create a SSL public endpoint or use your own pulblic URL.

```text
./ngrok http 8000
```

### Enter your Dropbox API credentials and public URL

Enter the required credentials in `public/config.js`:

```javascript
const dropboxApiKey = "YOUR-DROPBOX-API-KEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "YOUR-PUBLIC-URL"; //Example : https://476322de.ngrok.io/

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
```

You can get your Dropbox API Key and Secret from your registered app page on the [Dropbox App Console](https://www.dropbox.com/developers/apps/).

### Start the server

After completing the configuration steps, start the server in the `server` folder:

```text
$ npm start
```

Now you can use the HTTPS endpoint provided by `ngrok`

## Development Steps

### 1. Get references to the `Text` and `Color` classes from XD’s `scenegraph` module

```javascript
const { Text, Color } = require("scenegraph");
```

`Text` and `Color` classes are imported and ready to be used.

### 2. Save the public URL in a global variable

```javascript
const publicUrl = "https://176d0d74.ngrok.io"
```

Make sure to acquire your own public url. This url will be used to send requests to your server.

### 3. Create a global variable to store the access token

```javascript
let accessToken;
```

Once you receive the access token from your server, you can use the token for API calls as long as the token is saved in a global variable and the XD session is alive.

### 4. Write a helper function to send XHR requests

```javascript
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

### 5. Create the main function, `launchOAuth`

```javascript
async function launchOAuth(selection) {
    ...
}
```

Note that this function is an `async` function since it has async calls inside. Please see the subsequent steps below to see what goes into this function

### 6. Write a XHR call to get the session ID

```javascript
const rid = await xhrRequest(`${publicUrl}/getRequestId`, 'GET')
            .then(response => {
                return response.id;
            })
```

This part of the function sends a `GET` request to your server's `getRequestId` endpoint and returns `response.id`. Let's take a look at the code on the server side.

```javascript
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

```javascript
require("uxp").shell.openExternal(`${publicUrl}/login?requestId=${rid}`)
```

This will open the browser with the url pointing to an endpoint in your server. Let's take a look at the code on the server side.

```javascript
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

```javascript
accessToken = await xhrRequest(`${publicUrl}/getCredentials?requestId=${rid}`, 'GET')
            .then(tokenResponse => {
                return tokenResponse.accessToken;
            })
```

As noted in step \#4, the `xhrRequest` helper function is designed to poll the server if the initial request is not responded in 6000 miliseconds. Once the user completes the OAuth workflow in the browser, polling should stop and this request should be returned with the access token.

### 9. Show a dialog indicating the token has been received

```javascript
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

Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects. Elements have the `style` property which contains metrics properties you can set 1. The `dialog` element is the modal window that pops down in XD 2. Create a container `div` element 3. Create a `h3` element to let the user know the auth workflow has been completed 4. You need at least one exit point. Create a close button and add it to the container 5. Create a listener for the click event and close the dialog 6. Attache the dialog to the document, addd the contianer, and use `showModal` method to show the modal

### 10. Make an API call to Dropbox

```javascript
const dropboxProfileUrl = `https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer%20${accessToken}`; // [1]
const dropboxProfile = await xhrRequest(dropboxProfileUrl, 'POST'); // [2]
```

1. Note that received `accessToken` is included in this Dropbox API call to retrieve the current account's profile
2. `xhrRequest` helper function is used again to make this `POST` call

### 10. Create a text element to show the profile information inside the current artboard

```javascript
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

Description

* [How to debug](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/how-to-integrate-with-OAuth-guide/how-to-debug/README.md)

## Other Resources

* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/how-to-integrate-with-OAuth-guide/link/README.md)
* [Title](https://github.com/AdobeXD/Plugin-Guides/tree/2d9ccbfb0d863bea69dadcc420a962c539c46156/Guides/how-to-integrate-with-OAuth-guide/link/README.md)

