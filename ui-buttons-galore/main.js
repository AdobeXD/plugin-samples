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
    p {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
</style>
<dialog id="${id}">
    <form method="dialog">
        <h1>Buttons Galore!</h1>
        <p>
            <b>Standard:</b>
            <button uxp-variant="cta">Call To Action</button>
            <button uxp-variant="primary">Primary</button>
            <button uxp-variant="secondary">Secondary</button>
            <button uxp-variant="warning">Warning</button>
        </p>
        <p>
            <b>Quiet:</b>
            <button uxp-quiet="true" uxp-variant="primary">Primary (Quiet)</button>
            <button uxp-quiet="true" uxp-variant="secondary">Secondary (Quiet)</button>
            <button uxp-quiet="true" uxp-variant="warning">Warning (Quiet)</button>
        </p>
        <p>
            <b>Action, standard</b>
            <button uxp-variant="action">
                <img src="/grid.png" />
            </button>
            <button uxp-variant="action" uxp-selected="true">
                <img src="/list.png" />
            </button>
            <b>(selected)</b>
        </p>
        <p>
            <b>Action, Quiet</b>
            <button uxp-quiet="true" uxp-variant="action">
                <img src="/grid.png" />
            </button>
            <button uxp-quiet="true" uxp-variant="action" uxp-selected="true">
                <img src="/list.png" />
            </button>
            <b>(selected)</b>
        </p>
        <footer>
            <button id="cancel">Cancel</button>
            <button type="submit" id="ok" uxp-variant="cta">OK</button>
        </footer>
    </form>
</dialog>
`;

    dialog = document.querySelector(sel);

    const [form, cancel, ok] = [`${sel} form`, "#cancel", "#ok"].map(s => $(s));

    const submit = () => {
        dialog.close();
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

    return dialog.showModal();
}

module.exports = {
    commands: {
        menuCommand
    }
};