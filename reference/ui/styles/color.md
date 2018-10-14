# Color

Color is a very important part of your user interface. It can highlight important information or warn users about destructive actions.

{% tabs semantics="Semantics", examplesmac="Example (macOS)", examplesuwp="Example (Windows)", code="HTML" %}

{% content "semantics" %}

There are four classes of semantic colors beyond the normal standard text color.

* elements and text with **informative** semantics are colored blue.
* elements and text with **positive** semantics are colored green.
* elements and text intended to provide cautionary **notice** are colored orange.
* elements and text that provide warnings (**negative** semantics) are colored red.

{% content "examplesmac" %}
![](assets/macOS%20Semantic%20Color%20Example.png)

{% content "examplesuwp" %}
![](assets/Windows%20Semantic%20Color%20Example.png)

{% content "code" %}

```html
<style>
    .bright { color: white; }
    .row div { flex: 1 1 auto; }
    .row div p { border-width: 2px; border-style: none; border-radius: 4px;}
    .row div p.border { border-style: solid; }
</style>
<h1>Color</h1>
<hr />
<div class="row">
    <div class="column">
        <h3>SUFFIX</h3>
        <hr class="small">
        <p>red</p>
        <p>orange</p>
        <p>green</p>
        <p>blue</p>
    </div>
    <div class="column">
        <h3>color-*</h3>
        <hr class="small" />
        <p class="color-red">Negative</p>
        <p class="color-orange">Notice</p>
        <p class="color-green">Positive</p>
        <p class="color-blue">Informative</p>
     </div>
    <div class="column">
        <h3>background-*</h3>
        <hr class="small" />
        <p class="bright background-red">Negative</p>
        <p class="bright background-orange">Notice</p>
        <p class="bright background-green">Positive</p>
        <p class="bright background-blue">Informative</p>
     </div>
    <div class="column">
        <h3>border-*</h3>
        <hr class="small" />
        <p class="border border-red">Negative</p>
        <p class="border border-orange">Notice</p>
        <p class="border border-green">Positive</p>
        <p class="border border-blue">Informative</p>
     </div>
</div>
```

{% endtabs %}

## Usage

By default, text is rendered using a dark gray color on a light background. The specific values differ by platform. You can attach classes to your content in order to use one of the semantic color classes, however.

Color  | Text Color    | Background Color   | Border Color
-------|---------------|--------------------|---------------
blue   | `color-blue`  | `background-blue`  | `border-blue`
green  | `color-green` | `background-green` | `border-green`
orange | `color-orange`| `background-orange`| `border-orange`
red    | `color-red`   | `background-red`   | `border-red`

For example, if you want to render text with negative semantic, you could use the following HTML:

```html
<span class="color-red">This action is not reversible!</span>
```

> **Tip**
>
> When using the `background-%` classes, be sure to set the text color to `white` in order to ensure
> that the text is readable.

## Guidelines

##### Communicating with Color

Don't use color alone to convey intent. Instead add additional context in the form of icons or text.
