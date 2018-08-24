# Summary

# Adobe XD Plugin Reference

## Getting Started

* [Introduction](./README.md)
* [Core XD Concepts](./reference/core/index.md)
  * [About the scenegraph](./reference/core/scenegraph.md)
  * [Edit context rules](./reference/core/edit-context.md)
  * [Coordinate spaces & units](./reference/core/coordinate-spaces-and-units.md)
  * [Properties with object values](./reference/core/properties-with-object-values.md)
  * [Automatic cleanups](./reference/core/automatic-cleanups.md)
  * [APIs](./reference/core/apis.md)
* [Plugin Structure](./reference/structure/index.md)
  * [Plugin Location](./reference/structure/plugin-location.md)
  * [Plugin Structure](./reference/structure/overview.md)
  * [JSON manifest](./reference/structure/manifest.md)
  * [Menu command handlers](./reference/structure/handlers.md)
  * [Accessing APIs](./reference/structure/accessing-apis.md)
* [How to read this reference](./reference/how-to-read.md)
* [Frequently Asked Questions](./faq.md)
* [Change Log](./changes.md)

## XD API Reference

* [application](./reference/application.md)
* [clipboard](./reference/clipboard.md)
* [commands](./reference/commands.md)
* [scenegraph](./reference/scenegraph.md)
    * [SceneNode](./reference/scenegraph.md#SceneNode)
        * [GraphicNode](./reference/scenegraph.md#GraphicNode)
            * [Artboard](./reference/scenegraph.md#Artboard)
            * [Rectangle](./reference/scenegraph.md#Rectangle)
            * [Ellipse](./reference/scenegraph.md#Ellipse)
            * [Line](./reference/scenegraph.md#Line)
            * [Path](./reference/scenegraph.md#Path)
            * [BooleanGroup](./reference/scenegraph.md#BooleanGroup)
            * [Text](./reference/scenegraph.md#Text)
        * [Group](./reference/scenegraph.md#Group)
        * [SymbolInstance](./reference/scenegraph.md#SymbolInstance)
        * [RepeatGrid](./reference/scenegraph.md#RepeatGrid)
        * [LinkedGraphic](./reference/scenegraph.md#LinkedGraphic)
        * [RootNode](./reference/scenegraph.md#RootNode)
    * [SceneNodeList](./reference/SceneNodeList.md)
    * [Color](./reference/Color.md)
    * [BitmapFill](./reference/BitmapFill.md)
    * [LinearGradientFill](./reference/LinearGradientFill.md)
    * [Matrix](./reference/Matrix.md)
    * [Shadow](./reference/Shadow.md)
    * [Blur](./reference/Blur.md)
* [selection](./reference/selection.md)

## User Interface

* [User Interface Concepts](./reference/ui/ui-concepts.md)
* Widgets
  * [Buttons](./reference/ui/buttons.md)
  * [Input](./reference/ui/input.md)
* [Supported CSS Paint Styles](./reference/ui/supported-css-paint-styles.md)
* [Supported CSS Layout Styles](./reference/ui/supported-css-layout-styles.md)
* [Supported CSS Selectors](./reference/ui/supported-css-selectors.md)
* [Supported CSS Text Styles](./reference/ui/supported-css-text-styles.md)
* [Supported Events](./reference/ui/supported-events.md)
* [Supported HTML Tags](./reference/ui/supported-html-tags.md)

## UXP API Reference

* Storage APIs
    * [Using the File I/O APIs](./reference/uxp/using-file-apis.md)
    * [Storage module](./reference/uxp/module/storage.md)
* Network APIs
    * [XMLHttpRequest](./reference/uxp/class/XMLHttpRequest.md)
    * [fetch](./reference/uxp/function/fetch.md)
    * [WebSocket](./reference/uxp/class/WebSocket.md)
    * [openExternal](./reference/uxp/class/Shell.md)
* UI APIs
    * Classes
        * [Attr](./reference/uxp/class/Attr.md)
        * [CharacterData](./reference/uxp/class/CharacterData.md)
        * [Clipboard](./reference/uxp/class/Clipboard.md)
        * [Comment](./reference/uxp/class/Comment.md)
        * [Document](./reference/uxp/class/Document.md)
        * [DocumentFragment](./reference/uxp/class/DocumentFragment.md)
        * [DOMException](./reference/uxp/class/DOMException.md)
        * [DOMTokenList](./reference/uxp/class/DOMTokenList.md)
        * [NamedNodeMap](./reference/uxp/class/NamedNodeMap.md)
        * [Node](./reference/uxp/class/Node.md)
        * [NodeList](./reference/uxp/class/NodeList.md)
        * [Text](./reference/uxp/class/Text.md)
    * HTML Elements
        * [HTMLAnchorElement](./reference/uxp/class/HTMLAnchorElement.md)
        * [HTMLBodyElement](./reference/uxp/class/HTMLBodyElement.md)
        * [HTMLButtonElement](./reference/uxp/class/HTMLButtonElement.md)
        * [HTMLDialogElement](./reference/uxp/class/HTMLDialogElement.md)
        * [HTMLElement](./reference/uxp/class/HTMLElement.md)
        * [HTMLHeadElement](./reference/uxp/class/HTMLHeadElement.md)
        * [HTMLHtmlElement](./reference/uxp/class/HTMLHtmlElement.md)
        * [HTMLImageElement](./reference/uxp/class/HTMLImageElement.md)
        * [HTMLInputElement](./reference/uxp/class/HTMLInputElement.md)
        * [HTMLLabelElement](./reference/uxp/class/HTMLLabelElement.md)
        * [HTMLLinkElement](./reference/uxp/class/HTMLLinkElement.md)
        * [HTMLMenuElement](./reference/uxp/class/HTMLMenuElement.md)
        * [HTMLOptionElement](./reference/uxp/class/HTMLOptionElement.md)
        * [HTMLProgressElement](./reference/uxp/class/HTMLProgressElement.md)
        * [HTMLScriptElement](./reference/uxp/class/HTMLScriptElement.md)
        * [HTMLSelectElement](./reference/uxp/class/HTMLSelectElement.md)
        * [HTMLStyleElement](./reference/uxp/class/HTMLStyleElement.md)
        * [HTMLTextAreaElement](./reference/uxp/class/HTMLTextAreaElement.md)
    * Events
        * [BaseUIEvent](./reference/uxp/class/BaseUIEvent.md)
        * [CloseEvent](./reference/uxp/class/CloseEvent.md)
        * [DragEvent](./reference/uxp/class/DragEvent.md)
        * [Event](./reference/uxp/class/Event.md)
        * [EventTarget](./reference/uxp/class/EventTarget.md)
        * [GestureEvent](./reference/uxp/class/GestureEvent.md)
        * [KeyboardEvent](./reference/uxp/class/KeyboardEvent.md)
        * [MessageEvent](./reference/uxp/class/MessageEvent.md)
        * [PointerEvent](./reference/uxp/class/PointerEvent.md)
        * [ProgressEvent](./reference/uxp/class/ProgressEvent.md)

# Adobe XD Guides

## Getting Started
* [Introduction](README.md)
* [Getting Started](./Guides/getting-started-guide/README.md)
* [Debugging Plugins](./Guides/debugging-guide/readme.md)

## Working with Content
* [How to draw lines](./Guides/how-to-draw-lines-guide/README.md)
* [How to work with paths](./Guides/how-to-create-path-objects-guide/README.md)
* [How to style text](./Guides/how-to-style-text-guide/README.md)
* [Working with the SceneNode list](./Guides/how-to-work-with-scenenodelist-guide/README.md)
* [How to generate an export rendition](./Guides/how-to-generate-an-export-rendition-guide/README.md)

## Working with I/O
* [How to read a file](./Guides/how-to-import-guide/README.md)
* [How to integrate with OAuth](./Guides/how-to-integrate-with-OAuth-guide/readme.md)
* [How to make a simple network request](./Guides/how-to-make-a-network-request-guide/README.md)
* [How to connect to a websocket server](./Guides/how-to-connect-to-a-websocket-server/README.md)

## Building User Interfaces
* Asking user for confirmation
	* [With document.createElement](./Guides/how-to-ask-user-for-confirmation-guide/README.md)
	* [With HTML](./Guides/how-to-ask-user-for-confirmation-guide/README_HTML.md)
* [Using single-line text editors](./Guides/how-to-use-single-line-text-ui-guide/README.md)
* [How to display a dropdown list](./Guides/how-to-display-a-dropdown-list/README.md)
* [How to display an image](./Guides/how-to-display-an-image-guide/README.md)
* [How to package a plugin](./Guides/how-to-package-a-plugin/README.md)

## Community
* [Code of Conduct](./CODE_OF_CONDUCT.md)
* [How to contribute](./CONTRIBUTING.md)

