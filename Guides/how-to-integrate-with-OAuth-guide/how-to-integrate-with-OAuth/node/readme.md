# OAuth 2.0 Example: Node.js

This sample app will show you how to implement Adobe OAuth 2.0 in Adobe XD with polling enabled.

After setting up the sample, you will have a Node.js app that:

1. Runs on `http://localhost:8000`
1. Simulates a database that lets you write and retrive IDs and returns the ID when asked
1. Starts the OAuth process for XD user
1. Has an endpoint where XD can poll

<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 3 -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [GitHub](#github)
1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Configuration](#configuration)
    1. [Install Node.js packages](#install-nodejs-packages)
    1. [Enter your Adobe API credentials](#enter-your-adobe-api-credentials)
1. [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitHub

This sample is based on Adobe Auth Node developer guide [on GitHub](https://github.com/adobeio/adobeio-documentation/tree/master/auth/OAuth2.0Endpoints/samples/adobe-auth-node).

Be sure to follow all instructions in the `readme`.

## Technology Used

1. Node.js and the `npm` package manager
1. ngrok or public url

## Prerequisites

This guide will assume that you have read the [Adobe OAuth 2.0 Guide for Web](../../web-oauth2.0-guide.md).

You must also have [a registered app on the Adobe I/O Console](../../web-oauth2.0-guide.md#register-your-application-and-enable-apis) with the following settings:

1. `Platform`: web
1. `Default redirect URI`: `YOUR-PUBLIC-URI` (example: "https://476322de.ngrok.io/callback")
1. `Redirect URI Pattern`: `YOUR-PUBLIC-URI` (example: ""https://476322de\.ngrok\.io")

## Configuration

The following steps will help you get this sample up and running.

### Install Node.js packages

The `package.json` file contains a list of dependencies. Run the following command from the top level directory of the app to install these dependencies:

```
$ npm install
```
### Use `ngrok` to create an SSL public URL

You can use either `ngrok` to create a SSL public endpoint or use your own pulblic URL.

```
./ngrok http 8000
```

### Enter your Adobe API credentials and public URL

Enter the required credentials in `public/config.js`:

```javascript
const adobeApiKey = "YOUR_API_KEY";
const adobeApiSecret = "YOUR_API_SECRET";
const publicUrl = "YOUR_PUBLIC_URL";

try {
  if (module) {
    module.exports = {
      adobeApiKey: adobeApiKey,
      adobeApiSecret: adobeApiSecret,
      publicUrl: publicUrl
    }
  }
}
catch (err) {}
```
You can get your Adobe API Key and Secret from your registered app page on the [Adobe I/O Console](../../web-oauth2.0-guide.md#register-your-application-and-enable-apis).


## Usage

After completing the configuration steps, start the server:

```
$ npm start
```

Now you can use the HTTPS endpoint provided by `ngrok`