//  temporary shim until setTimeout is added to XD
global.setTimeout = (fn) => { fn() }
global.clearTimeout = (fn) => {}

const $ = require("./jquery");

async function menuCommand() {
    const dialog = $( `
<dialog id="myDialog">
    <form method="dialog" style="width:300;">
        <h1>Hello!</h1>
        <p>What's your name?</p>
        <label>
            <span>Name</span>
            <input type="text" id="name" placeholder="Your name"/>
        </label>
        <footer>
            <button id="cancel">Cancel</button>
            <button type="submit" id="ok" uxp-variant="cta">OK</button>
        </footer>
    </form>
</dialog>
`).get(1);

    $(document.body).append(dialog);
    const form = document.querySelector("form");
    form.style.width="300px";

    $("#cancel").on("click", () => {
        dialog.close();
    });

    $("#ok").on("click", () => {
        dialog.close($("#name").val());
    });

    /* will work soon:
    $(form).on("submit", () => {
        dialog.close($("#name").val());
    });
    */

    try {
        const r = await dialog.showModal();
        if (r) {
            console.log(`Your name is ${r}`);
        }
    } catch (err) {
        // cancelled with ESC
    } finally {
        dialog.remove();
    }
}

module.exports = {
    commands: {
        menuCommand
    }
};