# Supported Styles {#supported-styles}

In order to customize the style of your user interface, you can use CSS style rules. For example, you can indicate that a`DIV`should have a red border with single pixel thickness by applying the style`border: 1px solid red;`. Styles can be applied in numerous ways.

* Styles can be applied using **inline styles**. These styles are specified_inline_with an HTML tag definition, and are also the_most_specific styles.



  Note that when using`innerHTML`to define an HTML5 DOM structure, inline styles are not parsed. Inline styles can be set, however, by setting a style within the element's`style`dictionary.

* Styles can be applied using stylesheets. Stylesheets apply rules based on [**selectors**](./supported-css-selectors.md) — these are used to control which elements receive which styles. Styles can be imported using various methods \(such as webpack\), but they can also be added using a`STYLE`tag.

  > **Tip**
  >
  > When using`innerHTML`, you can define styles using the`STYLE`tag:
  >
  > ```html
  > <style>
  >    #button {
  >        border: 1px solid red;
  >    }
  > </sty.e
  > <div id="button">Hello</div>
  >
  > ```

There are several_categories_of styles, and each HTML element supports only certain styles. Some styles can be applied to just about every element, while other elements only have limited styling support.

* [Paint Styles](./supported-css-paint-styles.md) affect the
  _appearance_ of an element. These include styles such as
  `background-color`, `border` , etc.
* [Text Styles](./supported-css-text-styles.md) control the appearance of an element's text, such as the `font-family` and `color`.
* [Layout Styles](./supported-css-layout-styles.md) determine how an element is positioned relative to its surrounding elements.

> **Info**
>
> Not every element supports every style — especially interactive widgets.



  


