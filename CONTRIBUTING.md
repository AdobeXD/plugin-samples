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

* Pull Requests to the plugin-docs repository will be rejected; please file an issue for incorrect documentation instead. This is because we need to ensure that the issue is corrected in the internal source code.
* Pull Requests to the plugin-samples repository and other repositories in the AdobeXD organization are welcome. Please file an issue first so that your contribution can be discussed.

## Contributor License Agreement

All third-party contributions to this project and associated repositories must be accompanied by a signed contributor
license agreement. This gives Adobe permission to redistribute your contributions
as part of the project. [Sign our CLA](http://opensource.adobe.com/cla.html). You
only need to submit an Adobe CLA one time, so if you have submitted one previously,
you are good to go!

## Security Issues

Security issues shouldn't be reported on this issue tracker. Instead, [file an issue to our security experts](https://helpx.adobe.com/security/alertus.html).

## Viewing Docs Locally

To view the fully formatted docs as they will appear online, follow these steps:

```bash
# Setup
npm install
npm run book:install

# Rebuild HTML content (takes 2-3 minutes)
npm run book:build

# View HTML from a local webserver (using a file:// URL won't work)
cd _book
python -m SimpleHTTPServer 8000
# ...then open http://localhost:8000
```
