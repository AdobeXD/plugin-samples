# Supported Styles

In order to customize the style of your user interface, you can use CSS style rules. For example, you can indicate that a `DIV` should have a red border with single pixel thickness by applying the style `border: 1px solid red;`. Styles can be applied in numerous ways.

* Styles can be applied by using JavaScript by changing properties on the `style` dictionary.

  ```js
  someElement.style.backgroundColor="red";
  ```

* Styles can be applied using stylesheets. Stylesheets apply rules based on [**selectors**](./#supported-selectors) — these are used to control which elements receive which styles. Styles can be imported using various methods (such as webpack), but they can also be added using a `STYLE` tag.

  > **Tip**
  >
  > When using `innerHTML`, you can define styles using the `STYLE` tag:
  >
  > ```html
  > <style>
  >    #button {
  >        border: 1px solid red;
  >    }
  > </style>
  > <div id="button">Hello</div>
  > ```

There are several _categories_ of styles, and each HTML element supports only certain styles. Some styles can be applied to just about every element, while other elements only have limited styling support.

See the [available styles](../../uxp/namespace/css.md) for more information on what is supported.

> **Info**
>
> Not every element supports every style — especially interactive elements.

## Supported Selectors

XD understands the following CSS selectors:

* id
    ```css
    #anId {
        /* style */
    }
    ```
* class
    ```css
    .aClass {
        /* style */
    }
    ```
* tag
    ```css
    div {
        /* style */
    }
    ```
* asterisk (universal selector)
    ```css
    * {
        /* style */
    }
    ```
* Descendant selector
    ```css
    div > p {
        /* style */
    }
    ```
* Group of selectors
    ```css
    .aClass, #anID {
        /* style */
    }
    ```
* Child selector
    ```css
    div p {
        /* style */
    }
    ```
* Sibling selector
    ```css
    div + p {
        /* style */
    }
    ```
* Attribute selector
    ```css
    input[type=text] {
        /* style */
    }
    ```
* Pseudo classes
    ```css
    div:hover {
        /* style */
    }
    ```

> **Info**
>
> Only `hover`, `focus`, and `lang` are supported.