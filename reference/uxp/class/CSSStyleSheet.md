
<a name="cssstylesheet" id="cssstylesheet"></a>

## CSSStyleSheet

**Extends**: [`StyleSheet`](#stylesheet)

**Category**: browser, cssom

**See**: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet

* [CSSStyleSheet](#CSSStyleSheet)
    * [new CSSStyleSheet()](#new-cssstylesheet-new)
    * [.cssRules](#CSSStyleSheet+cssRules) : [`CSSRuleList`](#cssrulelist)
    * [.rules](#CSSStyleSheet+rules) : [`CSSRuleList`](#cssrulelist)
    * [.href](#stylesheet-href) : `DOMString`
    * [.type](#stylesheet-type) : `DOMString`
    * [.insertRule(rule, [index])](#cssstylesheet-insertrule)
    * [.deleteRule(index)](#cssstylesheet-deleterule)

<a name="new-cssstylesheet-new" id="new-cssstylesheet-new"></a>

### new CSSStyleSheet()
Represents a CSS style sheet

<a name="cssstylesheet-cssrules" id="cssstylesheet-cssrules"></a>

### cssStyleSheet.cssRules : [`CSSRuleList`](#cssrulelist)
Return the list of CSS Rules

**Read only**

<a name="cssstylesheet-rules" id="cssstylesheet-rules"></a>

### cssStyleSheet.rules : [`CSSRuleList`](#cssrulelist)
Return the list of CSS Rules

**Read only**

<a name="stylesheet-href" id="stylesheet-href"></a>

### cssStyleSheet.href : `DOMString`

**Read only**

<a name="stylesheet-type" id="stylesheet-type"></a>

### cssStyleSheet.type : `DOMString`

**Default**: <code>undefined</code>

**Read only**

<a name="cssstylesheet-insertrule" id="cssstylesheet-insertrule"></a>

### cssStyleSheet.insertRule(rule, [index])
Insert a CSS Rule at the specified index.

| Param | Type | Default |
| --- | --- | --- |
| rule | `\*` |  |
| [index] | `number` | <code>0</code> |

<a name="cssstylesheet-deleterule" id="cssstylesheet-deleterule"></a>

### cssStyleSheet.deleteRule(index)
Delete the rule at the specified index

| Param | Type |
| --- | --- |
| index | `\*` |

