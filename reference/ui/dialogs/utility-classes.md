# Simplified Utility Classes

There are several utility classes that are available within dialogs:

* `.row`: styles the element as a horizontal flex container.
* `.column`: styles the element as a vertical flex container.
* `.margin`: adds platform-specific margins around the element

These come in handy when developing form elements quickly:

```html
<!-- check box -->
<label class="row">
    <input type="checkbox" />
    <span>Check me!</span>
</label>

<!-- input box -->
<label class="column">
    <span>Text label</span>
    <input type="text" />
</label>

<!-- note: labels are oriented vertically by default -->
```