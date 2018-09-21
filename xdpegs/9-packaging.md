> **danger**
> The XD Plugin Experience Guidelines are being drafted now, and are likely to change before release. Even so, you should be able to use these guidelines to craft compelling user experiences for your users.

# 9.0 Packaging and Distribution

## 9.1 Packaging

Your plugin package should be a self-contained zip file with only the files required for the functionality of your plugin. Plugin files have a `.xdx` file extension.

- [ ] (9.1.1) Do not include extra files that are not needed by the plugin.
- [ ] (9.1.2) Do not require additional steps on the part of the user in order for your plugin to work. For example, if your plugin depends on additional files to be in the plugin’s data folder, distribute those files as part of the package and copy them over at first use.
  - If icon fonts are required for functionality, you can ask that the user install those fonts. Your plugin should provide a link to where they can download the fonts.
- [ ] (9.1.3) Keep your plugin bundle size small. When submitting to the plugin manager, your plugin can be no larger than **25MB**.

## 9.2 Icons

- [ ] (9.2.1) Include at least a 512x512 icon in PNG or JPG format, no larger than **1MB**.
- [ ] (9.2.2) If you're displaying your icon elsewhere in your user interface, you should include icons at various sizes, including 24x24 and 48x48.
- [ ] (9.2.3) Don't use the Adobe logo in your icon.
- [ ] (9.2.4) Don't use the icons of any Adobe products in your icon.
- [ ] (9.2.5) Icons will have rounded corners applied automatically in a variety of contexts. Your icon should be designed as a square, but you should take care to avoid placing important graphical elements in your icon's corners as they could be clipped when rendered in other contexts.
- [ ] (9.2.6) In order to ensure the best visual fidelity, you should always fill the entire square with your design, even if that is a solid color.

## 9.3 Metadata

- [ ] (9.3.1) Do not indicate that the plugin is endorsed by or produced by Adobe.
- [ ] (9.3.2) Avoid the use of Adobe or other Adobe products in your name and description. If you wish to indicate that a plugin is for Adobe XD, you may use the language `your-plugin for Adobe XD`.
- [ ] (9.3.3) Provide useful release notes.
- [ ] (9.3.4) Don't forget to bump your plugin's version number on each submission.

