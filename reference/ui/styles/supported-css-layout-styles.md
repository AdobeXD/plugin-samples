# Supported CSS Layout Styles

* [display](#display)
* [margin](#margin)
* [padding](#padding)
* [width](#width)
* [height](#height)
* [max-width](#max-width)
* [max-height](#max-height)
* [position](#position)
* [top](#top)
* [right](#right)
* [bottom](#bottom)
* [left](#left)
* [align-items](#align-items)
* [justify-content](#justify-content)
* [flex-grow](#flex-grow)
* [flex-basis](#flex-basis)
* [flex-shrink](#flex-shrink)
* [flex](#flex)
* [overflow](#overflow)



## display

Determines whether the element is displayed and how it affects layout.

Supported values:
* `none` - the element is hidden
* `block` - the element is given 100% width of its container
* `flex` - the element is given 100% width of its container, but controls inside will be laid out according to the flexbox module.

```js
const div = document.createElement("div");
div.style.display = "flex";
```

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

## margin

Applies a margin to the element. You can use CSS shorthands to assign multiple margins at once.

```js
const div = document.createElement("div");
div.style.margin = "20px";
div.style.margin = "20px 10px";
div.style.margin = "20px 10px 5px 30px";
```

Note that `margin-left`, `margin-right`, etc. are also available.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

## padding

Applies a padding to the element. You can use CSS shorthands to assign multiple paddings at once. Note that you _cannot_ affect certain elements with padding.

```js
const div = document.createElement("div");
div.style.padding = "20px";
div.style.padding = "20px 10px";
div.style.padding = "20px 10px 5px 30px";
```

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

## width

Sets the width of an element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/width)

## height

Sets the height of an element. Not all elements can accept custom heights (such as buttons).

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/height)

## max-width

Sets the maximum width of an element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)

## max-height

Sets the maximum height of an element. Not all elements can accept custom heights (such as buttons).

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)

## position

Set the position of the element. This style also impacts layout.

Supported values:
* `static` - the element is rendered with typical layout.
* `absolute` - the element is positioned absolutely, relative to its nearest positioned ancestor. The element no longer affects layout.
* `relative` - the element is positioned relatively, and still affects layout.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

## top

Sets the top position of the element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/top)

## right

Sets the right position of the element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/right)

## bottom

Sets the bottom position of the element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)

## left

Sets the left position of the element.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/left)

## align-items

Aligns the items in a flex container.

Unsupported value: `baseline`

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

## justify-content

Justify the content in a flex container.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

## flex-grow

Indicate flex growth scale for an element. Only applies to elements inside `display: flex`.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)

## flex-basis

Specifies the flex basis. If you know the size of an element, and it won't flex, you should specify it. Otherwise the runtime will have to compute the width of the element, which may lead to slower performance.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

## flex-shrink

Indicate flex shrining scale for an element. Only applies to elements inside `display: flex`.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)

## flex

Shorthand for `flex-grow flex-shrink flex-basis`.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

## overflow

Indicates how a control handles overflow. The long-form `overflow-x` and `overflow-y` properties are also available.

View on [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)