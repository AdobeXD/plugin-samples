# Events

Adobe XD supports a subset of HTML events.

Event                                  | MDN Link
---------------------------------------|----------------------------------------
[blur](#blur)                          | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/blur)
[change](#change)                      | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/change)
[click](#click)                        | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/click)
[close](#close)                        | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/close)
[focus](#focus)                        | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/focus)
[input](#input)                        | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/input)
[keydown](#keydown)                    | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/keydown)
[load](#load)                          | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/load)
[message](#message)                    | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/message)
[pointerEnter](#pointerEnter)          | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/pointerEnter)
[pointerMove](#pointerMove)            | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/pointerMove)
[pointerLeave](#pointerLeave)          | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/pointerLeave)
[progress](#progress)                  | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/progress)
[resize](#resize)                      | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events/resize)

The following event classes are supported by XD:

* [BaseUIEvent](class/BaseUIEvent.md)
* [CloseEvent](class/CloseEvent.md)
* [Event](class/Event.md)
* [EventTarget](class/EventTarget.md)
* [FocusEvent](class/FocusEvent.md)
* [GestureEvent](class/GestureEvent.md)
* [KeyboardEvent](class/KeyboardEvent.md)
* [MessageEvent](class/MessageEvent.md)
* [PointerEvent](class/PointerEvent.md)
* [ProgressEvent](class/ProgressEvent.md)

## blur

Dispatched whenever the focus leaves the currently focused control. This can be useful if you want to validate the contents of a field immediately after entry.

```js
element.addEventListener("blur", evt => {
    if (Number.isNaN(Number(evt.target.value))) {
        evt.target.value = "";
    }
});
```

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | Focusable controls (input elements, buttons)
Since               | XD 13

## change

Dispatched after the contents of an input control change. This event _only_ occurs after the last input to the control; so you won't see an event for every key press or mouse move.

```js
element.addEventListener("change", evt => {
    console.log(evt.target.data);
});
```

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | Focusable controls (input elements, buttons)
Since               | XD 13

## click

Dispatched when the user clicks or taps on the element.

> **Danger**
>
> Subsequent clicks may be ignored if they fall within the "double click" time span.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All elements
Since               | XD 13

## close

Dispatched when a websocket is closed.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | `Websocket`
Since               | XD 13

## focus

Dispatched whenever a focusable control receives focus.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All focusable controls (input elements, buttons)
Since               | XD 13

## input

Dispatched whenever there is input in an input control. This will fire with every change.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All focusable controls (input elements, buttons)
Since               | XD 13

## keydown

Dispatched whenever a key is pressed.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All focusable controls (input elements, buttons)
Since               | XD 13

## load

Dispatched when the element has loaded.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | Dialogs (`HTMLDialogElement`)
Since               | XD 13

## message

Dispatched when a websocket receives a message.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | `WebSocket`
Since               | XD 13

## pointerEnter

Dispatched when the mouse cursor enters the element's bounds.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All non-interactive elements. Interactive elements do not support pointer events.
Since               | XD 13

## pointerMove

Dispatched when the mouse cursor moves within the element's bounds.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All non-interactive elements. Interactive elements do not support pointer events.
Since               | XD 13

## pointerLeave

Dispatched when the mouse cursor leaves the element's bounds.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | All non-interactive elements. Interactive elements do not support pointer events.
Since               | XD 13

## progress

Dispatched whenever there is some progress to report in an `XMLHttpRequest` transfer.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | `XMLHttpRequest`
Since               | XD 13

## resize

Dispatched whenever a dialog is resized.

> **Info**
>
> Since dialogs cannot be currently resized, this event only fires once, when the dialog is made visible.

 &nbsp;             | &nbsp;
--------------------|---------------------------------------
Applies to          | Dialogs (`HTMLDialogElement`)
Since               | XD 13
