const express = require('express');
const app = express();
const session = require('express-session')
const request = require('request-promise');
// const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const adobeApiKey = require('../public/config.js').adobeApiKey;
const adobeApiSecret = require('../public/config.js').adobeApiSecret;
const publicUrl = require('../public/config.js').publicUrl;
const fs = require('fs');
const path = require('path');

/* Declare host name, port, and public url */
const hostname = 'localhost';
const port = 8000;

/* Authorized Request IDs */
const requestIds = {};

/* Middlewares */
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
	/* Change this to your own secret value */
	secret: 'this-is-secret',
	resave: true,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: 6000000
	}
}));

/* Routes */
app.get('/login', function (req, res) {
	let requestId = req.query.requestId;
	/* This will prompt user with the Adobe auth screen */
	res.redirect(`https://ims-na1.adobelogin.com/ims/authorize?client_id=${adobeApiKey}&scope=openid,creative_sdk&response_type=code&redirect_uri=${publicUrl}/callback?requestId=${requestId}`)
})

app.get('/callback', function (req, res) {
	/* Retrieve authorization code from request */
	let code = req.query.code;
	let requestId = req.query.requestId;

	/* Set options with required paramters */
	let requestOptions = {
		uri: `https://ims-na1.adobelogin.com/ims/token?grant_type=authorization_code&client_id=${adobeApiKey}&client_secret=${adobeApiSecret}&code=${code}`,
		method: 'POST',
		json: true
	}

	/* Send a POST request using the request library */
	request(requestOptions)
		.then(function (response) {
			/* Store the token in req.session.token */
			req.session.token = response.access_token;

			/* Simulating writing to a database */
			requestIds[requestId]["accessToken"] = response.access_token;
			res.end()
		})
		.catch(function (error) {
			res.json({ 'response': 'Log in failed!' });
		});
})

app.get('/getRequestId', function (req, res) {
	/* Simulating writing to a database */
	for (let i = 1; i < 100; i++) {
		if (!(i in requestIds)) {
			requestIds[i] = {};
			res.json({ id: i })
			break;
		}
	}
})

app.get('/getCredentials', function (req, res) {
	const requestId = req.query.requestId;
	/* Simulating getting data from a database */
	if (requestId in requestIds && "accessToken" in requestIds[requestId]) {
		res.json({ access_token: requestIds[requestId].accessToken })
	} else {
		console.log("no token")
	}
})

/* Set up a HTTS server with the signed certification */
// var httpsServer = https.createServer({
// 	key: fs.readFileSync(path.join(__dirname, 'key.pem')),
// 	cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
// }, app).listen(port, hostname, (err) => {
// 	if (err) console.log(`Error: ${err}`);
// 	console.log(`listening on port ${port}!`);
// });

var httpServer = http.createServer(app).listen(port, hostname, (err) => {
	if (err) console.log(`Error: ${err}`);
	console.log(`listening on port ${port}!`);
});