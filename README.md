# An overview of creating Adobe XD plugins

XD plugins extend the capabilities of [Adobe XD](https://www.adobe.com/products/xd.html) by adding new features to the app, automating workflows, connecting the app to external services, and more.

On this page, we'll give you a quick overview of **what you can create** and **what skills you need to bring**.

From there, you can **choose your own adventure**: build a "Hello, World" plugin in our [Quick Start tutorial](./tutorials/quick-start/index.md), follow our [tutorials](/tutorials/index.md), try code-complete [sample plugins](https://github.com/AdobeXD/plugin-samples), or browse the [API references](/reference/how-to-read.md).

Oh, and be sure to [join the developer community](/community.md) while you're here! We want you to say hi (we'll say hi back).

Now, let’s supercharge the future of design together with XD plugins!


## What can you build?
The XD plugin APIs enable you to build plugins for a number of use cases, including:

- **Asset Management & Import**: Provide designers with access to stock photography and assets, and integrate with your DAM or brand management system.
- **Automation & Utility**: Help designers automate repetitive or tedious tasks. Unleash their creativity by enabling generative and data-driven designs.
- **Publish & Handoff**: Make publishing and handoff a breeze by integrating with online services and content management systems.
- **Designer & Stakeholder Collaboration**: Enhance collaboration between designers and stakeholders by integrating with the workflow services your team uses.

XD plugins appear to the user in one of two ways, as a _Plugins_ menu item that:

1. Runs with **no UI** (like a script), or
2. Opens a custom **modal UI** where the user can interact with the plugin

You can learn more about the API surfaces available to you in [our tutorials](/tutorials/index.md), as well as in our [API References](/reference/how-to-read.md).


## What skills do you need?

Below are the prerequisite skills you'll need to build a plugin. It's a short list! And even if you're new to coding, we think you'll be able to build your skills as you go.

##### Required
**JavaScript**: XD plugins are written in JavaScript. The XD plugin APIs support ES6+ JavaScript features, and ES5 is perfectly fine too.

If you've never worked with JavaScript before, we recommend taking a moment to get familiar with the language first. But come back quickly; you don't need to be a JavaScript rock star to get started building XD plugins. The [Quick Start tutorial](./tutorials/quick-start/index.md) and [API feature tutorials](/tutorials/index.md) you'll find in the documentation will help get you on your way.

##### Recommended
**HTML/CSS**: If you plan to offer a UI for your plugin, some familiarity with HTML and CSS is recommended. XD plugin APIs support a _subset_ of HTML and CSS for creating plugin UI.

##### Optional
**React**: If you want to push your plugin UI even further, you can put your React skills to use. React is a great option for complex plugins that must manage both state and user interface. Please refer to the following samples for more about how to configure React:

* [ui-hello-react](https://github.com/AdobeXD/plugin-samples/tree/master/ui-hello-react)
* [e2e-adobe-stock](https://github.com/AdobeXD/plugin-samples/tree/master/e2e-adobe-stock)
* [ui-html-playground](https://github.com/AdobeXD/plugin-samples/tree/master/ui-html-playground)

## Where to start?

There are lots of ways to journey through the documentation on your way to building the next great XD plugin. If you're just getting started, we recommend following the left-hand navigation on this site from top to bottom (or until you're ready to plot your own course!).

Here are some highlights you won't want to miss:

1. **Get Started**: To begin, try our [Quick Start tutorial](./tutorials/quick-start/index.md), then follow along with [the API feature tutorials](./tutorials/index.md).
1. **Go deep**: Read up on [the structure of a plugin](./reference/structure/index.md), expand your reach with [advanced concepts](/reference/index.md), and then dig into the [API reference](/reference/how-to-read.md).
1. **See code**: If you prefer to learn from working code, we have a [samples repo on GitHub](https://github.com/AdobeXD/Plugin-Samples) for you to take a look at.
1. **Join the community**: We want to hear from you, know who you are, keep you up to date with the latest info, and grow together. See our [Community page](/community.md) to learn about how to connect.
