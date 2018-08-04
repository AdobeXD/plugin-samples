# UXP Playground

## Steps for using the playground

Clone and build the XD Master branch.

git clone git@git.corp.adobe.com:torq/uxp-xd-plugins.git

Copy the `playground` folder inside XD's `plugins`. Launch `Playground` from the `Plugins` menu.

## Steps for using the playground as a first party

Clone and build the XD Master branch.

git clone git@git.corp.adobe.com:torq/uxp-xd-plugins.git

Goto terminal and switch to XD directory.

Run the following command: `grunt inspect -flags=uxpWelcomeScreen=true --uxpUIMapping=xd-start=<PATH to playground>/welcome`
