
let dialog;
//  lazy load the dialog
function getDialog() {
    if (dialog == null) {
        //  create the dialog
        dialog = document.createElement("dialog");

        //  create the form element
        //  the form element has default styling and spacing
        let form = document.createElement("form");
        dialog.appendChild(form);
        //  don't forget to set your desired width
        form.style.width = 200;

        //  add your content
        let hello = document.createElement("h1");
        hello.textContent = "Hello World";
        form.appendChild(hello);

        //  create a footer to hold your form submit and cancel buttons
        let footer = document.createElement("footer");
        form.appendChild(footer)
        //  include at least one way to close the dialog
        let closeButton = document.createElement("button");
        closeButton.uxpVariant = "cta";
        closeButton.textContent = "Close";
        closeButton.onclick = (e) => dialog.close();
        footer.appendChild(closeButton);
    }
    return dialog;
}

//  this file is deliberately written in low level document.appendChild format.
module.exports = {
    commands: {
        menuCommand: function () {
            //  attach the dialog to the body and show it
            document.body.appendChild(getDialog()).showModal();
        }
    }
};