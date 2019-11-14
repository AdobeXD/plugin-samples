const fs = require("uxp").storage.localFileSystem;

/**
 * Get the current language the application UI is using.
 * Ex: "en"
 * https://adobexdplatform.com/plugin-docs/reference/application
 */
const { appLanguage } = require("application");

/**
 * The main command here simply serves to create and show the dialog,
 * then resolve the async function when the user closes the dialog.
 */
async function mainCommand() {
  const strings = JSON.parse(await getStrings());

  const dialog = createDialog(strings);
  await dialog.showModal();

  return dialog.remove();
}

/**
 * Get your localized strings from a separate strings file.
 * Ex: {"en": {//...}, "ja": {//...}}
 */
async function getStrings() {
  const pluginFolder = await fs.getPluginFolder();
  const strFile = await pluginFolder.getEntry("strings.json");

  return await strFile.read();
}

function createDialog(strings) {
  /**
   * Get your supported languages in an array.
   * Ex: ["en", "ja"]
   */
  const supportedLanguages = Object.keys(strings);

  /**
   * uiLang will be the code for the display language of your plugin.
   * If appLanguage is supported by your plugin, you use it.
   * If not, you default to your first supported language.
   */
  const uiLang = supportedLanguages.includes(appLanguage)
    ? appLanguage
    : supportedLanguages[0];

  /**
   * Set innerHTML for the DOM body using a JS template literal.
   * Dynamically reference localized strings using uiLang as a property on the strings object.
   * Ex: strings[uiLang].h1    would evaluate to →           strings["en"].h1
   *                           or written another way →      strings.en.h1
   */
  document.body.innerHTML = `
    <style>
      form {
        width: 400px;
      }
    </style>
    <dialog>
      <form method="dialog">
        <h1>${strings[uiLang].h1}</h1>
        <hr />
        <p>${strings[uiLang].p}</p>
        <footer>
          <button type="submit" id="ok" uxp-variant="cta">${strings[uiLang].okButton}</button>
        </footer>
      </form>
    </dialog>
  `;

  /**
   * Get elements for event listeners
   */
  const [dialog, form, ok] = ["dialog", "form", "#ok"].map(s => {
    return document.querySelector(s);
  });

  /**
   * Add event listeners for closing the dialog
   */
  ok.addEventListener("click", e => handleSubmit(e, dialog));
  form.onsubmit = e => handleSubmit(e, dialog);

  return dialog;
}

function handleSubmit(e, dialog) {
  dialog.close();
  e.preventDefault();
}

module.exports = {
  commands: {
    mainCommand
  }
};
