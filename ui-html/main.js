const $ = sel => document.querySelector(sel);

function createDialog(id = "dialog") {
    const sel = `#${id}`;
    let dialog = document.querySelector(sel);
    if (dialog) {
        console.log("Reusing old dialog");
        return dialog;
    }

    document.body.innerHTML = `
<style>
    ${sel} form {
        width: 300px;
    }
</style>
<dialog id="${id}">
    <form method="dialog">
        <h1>Hello!</h1>
        <label>
            <span>What's your name?</span>
            <input uxp-quiet="true" type="text" id="name" placeholder="Your name"/>
        </label>
        <footer>
            <button id="cancel">Cancel</button>
            <button type="submit" id="ok" uxp-variant="cta">OK</button>
        </footer>
    </form>
</dialog>
`;

    dialog = document.querySelector(sel);

    const [form, cancel, ok, name] = [`${sel} form`, "#cancel", "#ok", "#name"].map(s => $(s));

    const submit = () => {
        dialog.close(name.value);
    }

    cancel.addEventListener("click", () => {
         dialog.close();
    });
    ok.addEventListener("click", e => {
        submit();
        e.preventDefault();
    });
    form.onsubmit = submit;

    return dialog;
}

async function menuCommand() {

    const dialog = createDialog();

    try {
        const r = await dialog.showModal();
        if (r) {
            console.log(`Your name is ${r}`);
        }
    } catch (err) {
        console.log("ESC dismissed dialog");
    }
}

module.exports = {
    commands: {
        menuCommand
    }
};