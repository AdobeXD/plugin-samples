const $ = sel => document.querySelector(sel);

async function menuCommand() {
    document.body.innerHTML = `
<style>
    #myDialog form {
        width: 300px;
    }
</style>
<dialog id="myDialog">
    <form method="dialog">
        <h1>Hello!</h1>
        <label>
            <span>What's your name?</span>
            <input uxp-quiet="true" type="text" id="name" placeholder="Your name"/>
        </label>
        <footer>
            <button id="cancel">Cancel</button>
            <button id="ok" uxp-variant="cta">OK</button>
        </footer>
    </form>
</dialog>
`;

    const [dialog, form, cancel, ok, name] = ["#myDialog", "#myDialog form", "#cancel", "#ok", "#name"].map(s => $(s));

    cancel.addEventListener("click", () => { dialog.close(); });
    ok.addEventListener("click", () => { dialog.close(name.value); });
    //form.addEventListener("submit", () => { dialog.close(name.value); });

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