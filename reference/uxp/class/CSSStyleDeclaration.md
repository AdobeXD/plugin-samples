
<a name="cssstyledeclaration" id="cssstyledeclaration"></a>

## CSSStyleDeclaration

**Category**: browser, cssom

**See**: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

* [CSSStyleDeclaration](#cssstyledeclaration)
    * [.length](#cssstyledeclaration-length)
    * [.parentRule](#CSSStyleDeclaration+parentRule) : [`CSSStyleRule`](#cssstylerule)
    * [.item(index)](#cssstyledeclaration-item)
    * [.getPropertyValue(property)](#cssstyledeclaration-getpropertyvalue)
    * [.setProperty(property, value, [priority])](#cssstyledeclaration-setproperty)
    * [.removeProperty(property)](#cssstyledeclaration-removeproperty)

<a name="cssstyledeclaration-length" id="cssstyledeclaration-length"></a>

### cssStyleDeclaration.length
Number of properties in this style declaration

**Read only**

<a name="cssstyledeclaration-parentrule" id="cssstyledeclaration-parentrule"></a>

### cssStyleDeclaration.parentRule : [`CSSStyleRule`](#cssstylerule)
Get the parent style rule

**Read only**

<a name="cssstyledeclaration-item" id="cssstyledeclaration-item"></a>

### cssStyleDeclaration.item(index)
Return the property name at the specified index.

| Param | Type |
| --- | --- |
| index | `number` |

<a name="cssstyledeclaration-getpropertyvalue" id="cssstyledeclaration-getpropertyvalue"></a>

### cssStyleDeclaration.getPropertyValue(property)
Returns the value of the specified property

| Param | Type |
| --- | --- |
| property | `DOMString` |

<a name="cssstyledeclaration-setproperty" id="cssstyledeclaration-setproperty"></a>

### cssStyleDeclaration.setProperty(property, value, [priority])
Set the property value

| Param | Type | Default |
| --- | --- | --- |
| property | `DOMString` |  |
| value | `DOMString` |  |
| [priority] | `string` | <code>&quot;&quot;</code> |

<a name="cssstyledeclaration-removeproperty" id="cssstyledeclaration-removeproperty"></a>

### cssStyleDeclaration.removeProperty(property)
Remove the specified property

| Param | Type |
| --- | --- |
| property | `DOMString` |

