/* 
  Get the current language the application UI is using.
  Ex: "en"
  https://adobexdplatform.com/plugin-docs/reference/application
*/
const { appLanguage } = require("application");
/* 
  Get the array of languages you support from your manifest.
  Ex: ["en", "ja"]
*/
const supportedLanguages = require("./manifest.json").languages;
/*
  Get your localized strings from a separate strings file.
  Ex: {en: {//...}, ja: {//...}}
*/
const strings = require("./strings.json");

/*
  The main command here simply serves to show the dialog,
  and capture resulting data, if any.
*/
async function mainCommand() {
  const dialog = createDialog();

  const result = await dialog.showModal();
  if (result === "reasonCanceled") return;

  console.log("Exited with OK!");

  return;
}

function createDialog() {
  /*
    uiLang will be the code for the display language of your plugin.
    If appLanguage is supported by your plugin, you use it.
    If not, you default to your first supported language.
  */
  const uiLang = supportedLanguages.includes(appLanguage)
    ? appLanguage
    : supportedLanguages[0];

  /*
    Set innerHTML for the DOM body using a JS template literal.
    Dynamically reference localized strings using uiLang as a property on the strings object.
    Ex: strings[uiLang].h1    would evaluate to →           strings["en"].h1 
                              or written another way →      strings.en.h1
  */
  document.body.innerHTML = `
    <style>
      form {
        width: 400px;
      }
    </style>
    <dialog id="dialog">
      <form method="dialog">
        <h1>${strings[uiLang].h1}</h1>
        <p>${strings[uiLang].p}</p>
        <footer>
          <button uxp-variant="primary" id="cancel-button">${
            strings[uiLang].cancelButton
          }</button>
          <button type="submit" uxp-variant="cta" id="ok-button">${
            strings[uiLang].okButton
          }</button>
        </footer>
      </form>
    </dialog>
  `;

  // Event handlers
  const cancelButton = document.querySelector("#cancel-button");
  cancelButton.addEventListener("click", e => dialog.close("reasonCanceled"));

  const dialog = document.querySelector("#dialog");
  dialog.addEventListener("close", e => dialog.remove());

  return dialog;
}

module.exports = {
  commands: {
    mainCommand
  }
};
