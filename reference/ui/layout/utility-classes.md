# Utility Classes

To assist with layout, there are two utility classes that are provided to you.

## row

The `row` class will render the elements within in a row using the flexbox layout module.

> **Tip**
>
> When building input fields with labels to the left (instead of above), consider adding `align-items: center` to the styles.
>
> ```html
> <style>
>     .field {
>         align-items: center;
>     }
> </style>
> <label class="field row">
>    <span>Label</span>
>    <input type="text" />
> </label>
> ```

## column

The `column` class will render the elements within in a column using the flexbox layout module.