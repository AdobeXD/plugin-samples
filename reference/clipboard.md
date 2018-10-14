<a name="module_clipboard"></a>

## clipboard
This module lets you copy text to the clipboard. It is not yet possible to copy other content types, or to handle paste events.

**Example**  
```js
// Copy the layer name of the selected item to the clipboard
let clipboard = require("clipboard");
clipboard.copyText(selection.items[0].name);
```

* [clipboard](#module_clipboard)
    * [.copyText()](#module_clipboard.copyText)


* * *

<a name="module_clipboard.copyText"></a>

### clipboard.copyText()
Write plain text to the clipboard.

**Kind**: static method of [<code>clipboard</code>](#module_clipboard)  

| Param | Type | Description |
| --- | --- | --- |
| text | string | Will be automatically converted to string if a different type is passed |

* * *

