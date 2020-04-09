# Contributing

Thanks for choosing to contribute!

The following are a set of guidelines to follow when contributing to this project.

## Code Of Conduct

This project adheres to the Adobe [code of conduct](CODE_OF_CONDUCT.md). By participating,
you are expected to uphold this code. Please report unacceptable behavior to
[Grp-opensourceoffice@adobe.com](mailto:Grp-opensourceoffice@adobe.com).

## Have A Question?

Start by filing an issue. The existing committers on this project work to reach
consensus around project direction and issue solutions within issue threads
(when appropriate).

Please note the following:

- Pull Requests to the plugin-docs repository will be rejected; please file an issue for incorrect documentation instead. This is because we need to ensure that the issue is corrected in the internal source code.
- Pull Requests to the plugin-samples repository and other repositories in the AdobeXD organization are welcome. Please file an issue first so that your contribution can be discussed.

## Contributor License Agreement

All third-party contributions to this project and associated repositories must be accompanied by a signed contributor
license agreement. This gives Adobe permission to redistribute your contributions
as part of the project. [Sign our CLA](http://opensource.adobe.com/cla.html). You
only need to submit an Adobe CLA one time, so if you have submitted one previously,
you are good to go!

## Security Issues

Security issues shouldn't be reported on this issue tracker. Instead, [file an issue to our security experts](https://helpx.adobe.com/security/alertus.html).

## Viewing Docs Locally

### Setup

To preview the fully formatted docs as they will appear online, follow these steps:

```bash
# Setup
npm install
npm run book:install

# Rebuild HTML content (takes 3-5 minutes)
npm run book:build

# View HTML from a local webserver (using a file:// URL won't work)
cd _book
python -m SimpleHTTPServer 8000
# ...then open http://localhost:8000
```

### Preparing to push changes

When you're done making changes:

```bash
# Rebuild HTML content
npm run book:build

# Check for 404s
npm run test:404 # See notes below about this

# Push to GitHub
git push
```

From there, submit your pull request.

### Checking for 404s locally

When you run `npm run book:build`, you'll wait for a bit as the script scans the site, and then get a report of any found 404s in your terminal. Detailed logs will be dumped to `./.logs/log.txt`.

Generally you can safely ignore these 404s:

- `/plugin-docs/images/xd-logo.png` (due to the way the repo is structured, this image will only appear on the published site)
- `console.adobe.io` links (because the script isn't logged in, it gets a 404 from the Console)
- `ngrok` links (used in code samples; not expected to function as links)

### Publishing

If you're an Adobe person, when you're ready to publish the changes, run:

```bash
npm run book:publish:github
```

The changes will appear in bit!
