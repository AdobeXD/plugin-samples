> **Danger**
>
> The XD Plugin Experience Guidelines are being drafted now, and are likely to change before release. Even so, you should be able to use these guidelines to craft compelling user experiences for your users.

# 5.0 User Interface

Not all plugins will require any user interface, but many will need to at least render error messages and such. Be sure to review the guidelines in this section to ensure that you’re providing a good user experience in your user interfaces.


## 5.1 Insertion Points

Use the correct insertion point for your user interface. Right now, this means that your plugin’s UI must be rendered within a Modal Dialog.


- [ ] (5.1.1) Render error messages using modal dialogs.
- [ ] (5.1.2) Render configuration options using modal dialogs.
- [ ] (5.1.3) Avoid displaying “success” messages at all, unless your plugin’s success is not visible to the user.
- [ ] (5.1.4) Render validation messages inline — don’t display another dialog.


## 5.2 Modal Dialog Etiquette


- [ ] (5.2.1) ***Always*** provide at least one button that can close the dialog without performing an action. Your user can always press **ESC**, but not all users are familiar with keyboard shortcuts.
- [ ] (5.2.2) Buttons that close the dialog (whether the intent is to cancel or start an operation, called **dismissive buttons**) should always be visible in the dialog without scrolling.
- [ ] (5.2.3) Dismissive buttons should be in the lower right corner of the dialog.
- [ ] (5.2.4) Dismissive buttons should respect platform-specific button order. For “Cancel/Submit”-style button arrangements, this is handled automatically. (TODO)
  - On Windows, the order of buttons is “Submit”, then “Cancel”
  - On macOS, the order of buttons is “Cancel”, then “Submit”
- [ ] (5.2.5) Don’t show more than one dialog at once. The only exception to this rule is if your dialog needs to trigger a file or folder picker.
- [ ] (5.2.6) Don’t show multiple dialogs in sequence for wizard-like flows. Use one dialog and dynamically update the content.
- [ ] (5.2.7) **ENTER** will submit your dialog — ensure that the response to this is ***never*** *destructive*.
- [ ] (5.2.8) Reuse dialogs instead of recreating them.
  - There are some exceptions here, such as error/success messages.
- [ ] (5.2.9) Validate user input before dismissal. Don’t display a second dialog indicating validation failures.


## 5.3 Alerts

Alerts are currently handled using modal dialogs, and as such, are extremely invasive to the user’s workflow. Use them sparingly and only when necessary.


- [ ] (5.3.1) Error conditions from which the plugin can’t recover should always be presented to the user in human-readable language. *Plugins should* ***never*** *fail silently!*
- [ ] (5.3.2) Success conditions *should not be displayed* unless there is no other obvious indication of success.
- [ ] (5.3.3) Alerts should ***never*** trigger destructive actions if **ENTER** or **ESC** is pressed, since the user may have reacted out of instinct instead of fully processing the intent of the alert.
- [ ] (5.3.4) Keep alerts short and sweet, but don’t delve into “programmer-speak”.
- [ ] (5.3.5) Provide options and steps the user can take in the event of an error condition.


## 5.4 Pill Buttons

Pill buttons are interactive, clickable buttons within your plugin’s user interface. These can have a variety of styles, including:

- `cta` — call to action (there should only ever be one present; see 5.4.1)
- `primary` — primary (default)
- `secondary` — secondary buttons
- `warning` — used to indicate destructive actions

Buttons can also have a border (default) or be quiet (less visually intrusive).


- [ ] (5.4.1) There should ***never*** be more than one `cta` button in a dialog at once time.
- [ ] (5.4.2) The `cta` button should *usually* be the default action (if **ENTER** is pressed).
- [ ] (5.4.3) A `warning` button must ***never*** ****be triggered if **ENTER** is pressed.
- [ ] (5.4.4) Use quiet buttons sparingly. The lack of border makes it more difficult for the user to recognize the button as a button.
- [ ] (5.4.5) Don’t overuse buttons. The number of buttons on your dialog should be kept to a minimum.
- [ ] (5.4.6) Use meaningful button labels. Avoid labels like “Yes”, “No”, “OK”, especially when it isn’t obvious to what those labels refer to. Instead use labels like “Don’t save”, “Export selection”, etc.
- [ ] (5.4.7) Buttons in the footer should respect the platform’s button order. “Cancel/Submit” button order is handled automatically. (See 5.2.4)


## 5.5 Action Buttons

Action buttons are icon or text buttons that are used to trigger actions within the plugin’s UI. They are ***never*** used to dismiss a dialog. Use cases include a button that triggers a search for stock photos, a button that adds an item to a list, adding or removing tags, and more.

Action buttons come in two flavors: standard (default, with a border) and quiet (no border).

Action buttons can also be used to indicate a selected view or option — for example, two action buttons could be used to indicate if the user is viewing data in grid mode or list mode.


- [ ] (5.5.1) ***Never*** use action buttons to dismiss a dialog. Use pill buttons instead.
- [ ] (5.5.2) Action button images should be 14x14 points. Any other size may not be aligned correctly.


## 5.6 Text Fields

Text fields are a great way to get user input and change the behavior of your plugin based on user feedback. There are two types of text fields: *single-line* and *multi-line.*


- [ ] (5.6.1) Don’t use single-line text fields for paragraph-type data entry.
- [ ] (5.6.2) Don’t use multi-line text fields for short text entry.
- [ ] (5.6.3) Text fields should be large enough to view the typical amount of data without scrolling.
- [ ] (5.6.4) ***Never*** listen for **ENTER** and use it to advance the user’s focus. Allow the user to **TAB** instead.
- [ ] (5.6.5) Text field labels should be to the left or top of the text field itself.


## 5.7 Checkboxes

Checkboxes are a great way to provide on/off options to the user.


- [ ] (5.7.1) ***Never*** use checkboxes to trigger actions or dismiss dialogs.
- [ ] (5.7.2) Checkbox labels should be rendered to the right of the checkbox itself.
- [ ] (5.7.3) Checkbox groups should be clearly indicated with layout
- [ ] (5.7.4) Checkboxes must ***always*** be changeable using their associated label

## 5.8 Dropdowns

Dropdowns provide a way for the user to select one item form a list of many using a compact form.

- [ ] (5.8.1) ***Never*** use dropdowns to trigger additional actions or dismiss dialogs.
- [ ] (5.8.2) Keep lists short; don't use dropdowns when other controls (like sliders or text fields) would be more appropriate.

## 5.9 Sliders

Sliders provide a way for the user to specify a numeric value by indicating the value on a ranged control.

- [ ] (5.9.1) Use sliders where appropriate. If there are only a few options, you might consider using a dropdown instead. If the range is very wide, it might be easier for the user if the control was a text field instead.
- [ ] (5.9.2) Don't use sliders to indicate progress.
- [ ] (5.9.3) When using sliders, you should provide some other mechanism for input.
- [ ] (5.9.4) ***Always*** display the slider value in some way, so that the user doesn't have to guess at the value of the slider.

## 5.10 Images

Images should be as crisp as possible for the user’s display. The runtime environment will typically try to select the best option if there are “@1x”, “@2x”, “@3x” options available locally, however this does not necessarily apply to remote images.


- [ ] (5.10.1) Ensure icons are provided in 1x and 2x resolutions (at least)
- [ ] (5.10.2) Icons for use in action buttons should be 14x14 points.
- [ ] (5.10.3) Avoid rescaling large images (this can cause poor performance)
- [ ] (5.10.4) Avoid using images in lieu of other more suitable elements

## 5.11 Links

Links can be used to launch web pages in the user's system browser.

- [ ] (5.11.1) Don't link to malicious content.
- [ ] (5.11.2) Prefer secure websites.

## 5.12 Layout


- [ ] (5.12.1) Don’t rely on the size of the default elements when creating your layout. Instead, your layout should be responsive.
- [ ] (5.12.2) Don’t assume that a modal dialog will be as wide or high as you expect. Design your layout responsively.
- [ ] (5.12.3) If your layout is complex and takes more than a few milliseconds to build, consider deferring some of the layout until after you show your UI.
- [ ] (5.12.4) Respect the layout conventions of the platform. On Windows, layout is on a 16px grid. On macOS, it is on a 12px grid. However, you should refrain from hard-coding these units, as the grid sizes may change in the future.


## 5.13 Menus


- [ ] (5.13.1) Menu items should be short and succinct. If menu items are too long, they will be truncated.
- [ ] (5.13.2) Menu items should use “…” whenever the operation will require additional information from the user.
  - Good: “Insert stock photo…” (if a dialog of stock photos will appear, requiring further interaction)
  - Good: “Mirror selection” (no further options required)
  - Bad: “Mirror selection…” (if no further options required)
- [ ] (5.13.3) Menu items should clearly identify the action.
- [ ] (5.13.4) When plugins provide multiple actions, consider using submenus.
- [ ] (5.13.5) Menu items that trigger an action should generally be action-oriented. For example:
  - Good: "Insert stock photo..."
  - Good: "Export selected artboards..."
- [ ] (5.13.6) When using submenus, the parent menu should be easily identified with the plugin.

## 5.14 Onboarding

- [ ] (5.14.1) Plugins should provide sufficient onboarding guidance for users who may be unfamiliar with the expected use.
- [ ] (5.14.2) Consider linking to a help or support page in your plugin's error messages.
- [ ] (5.14.3) Consider using animated GIFs to explain how to use the plugin.
- [ ] (5.14.4) Consider having an "About" menu item (if your plugin uses submenus or has UI).

