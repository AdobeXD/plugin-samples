> **danger**
> The XD Plugin Experience Guidelines are being drafted now, and are likely to change before release. Even so, you should be able to use these guidelines to craft compelling user experiences for your users.

# 9.0 Packaging and Distribution

## 9.1 Packaging

Your plugin package should be a self-contained zip file with only the files required for the functionality of your plugin.

When submitting to the Plugin Manager, you can submit the zip file directly. When deploying for double-click-to-install, your zip file needs to be renamed to have an `xdx` extension.

- [ ] (9.1.1) Do not include extra files that are not needed by the plugin.
- [ ] (9.1.2) Do not require additional steps on the part of the user in order for your plugin to work. For example, if your plugin depends on additional files to be in the plugin’s data folder, distribute those files as part of the package and copy them over at first use.
  - If icon fonts are required for functionality, you can ask that the user install those fonts. Your plugin should provide a link to where they can download the fonts.
- [ ] (9.1.3) Keep your plugin bundle size small. The Plugin Manager has a limit of **25MB** (when compressed).
- [ ] (9.1.4)
