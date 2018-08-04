
/**
* Shorthand for creating Elements.
* @param {*} tag The tag name of the element.
* @param {*} [props] Optional props.
* @param {*} children Child elements or strings
*/
function h(tag, props, ...children) {
    let element = document.createElement(tag);
    if (props) {
        if (props.nodeType || typeof props !== "object") {
            children.unshift(props);
        }
        else {
            for (let name in props) {
                let value = props[name];
                if (name == "style") {
                    Object.assign(element.style, value);
                }
                else {
                    element.setAttribute(name, value);
                    element[name] = value;
                }
            }
        }
    }
    for (let child of children) {
        element.appendChild(typeof child === "object" ? child : document.createTextNode(child));
    }
    return element;
}

h("option", "Detail view screen"),
h("option", "Some other screen"),
h("option", "Yet another screen")

let cardTypes = [
    { id: "detail", name: "Detail view screen", description: "Finalized spec design for screens related to social sign-on flow for Facebook and Twitter."},
    { id: "other", name: "Some other screen", description: "Some other spec design for some other screens related to something else."},
    { id: "yetanother", name: "Yet another screen", description: "Design for screens related to yet another thing that we don't have copy for."}
]

function selectedCardChanged(index) {
    let card = cardTypes[index]
    cardNameElement.textContent = card.name
    cardDescriptionElement.textContent = card.description
}
let cardNameElement, cardDescriptionElement

function onsubmit() {
    let values = {
        board: board.options[Math.max(0, board.selectedIndex)].value,
        list: list.options[Math.max(0, list.selectedIndex)].value,
        card: card.options[Math.max(0, card.selectedIndex)].value,
        comment: comment.value
    }
    console.log("trello.submit: " + JSON.stringify(values));
    dialog.close();
}

let board, list, card, comment;

let dialog =
    h("dialog",
        h("style", `
            dialog {
                background: white;
            }
            .card {
                width: 220px;
                height: 180px;
                display: flex;
                justify-content: center;
                background: #EAEAEA;
                padding: 8px;
                border-radius: 8px;
            }
        `),
        h("form", { method:"dialog", onsubmit, style: { width: 550 /* work-around for computed width not positioning children correctly. */ } },
            h("header",
                h("img", { src: "title.png", height: 50 } )
            ),
            h("div", { class: "row" },
                h("div", { class: "column", style: { width: 300 } },
                    h("label",
                        h("span", "Board"),
                        board = h("select", { uxpQuiet: true },
                            h("option", { value: "design" }, "Design Team"),
                            h("option", { value: "dev" }, "Developer Team"),
                            h("option", { value: "test" }, "Test Team"),
                            h("option", { value: "pm" }, "Program Managers")
                        )
                    ),
                    h("label",
                        h("span", "List"),
                        list = h("select", { uxpQuiet: true },
                            h("option", { value: "inprogress" }, "In progress"),
                            h("option", { value: "development" }, "Development"),
                            h("option", { value: "testing" }, "Testing"),
                            h("option", { value: "needsreview" }, "Needs Review")
                        )
                    ),
                    h("label",
                        h("span", "Card"),
                        card = h("select", { uxpQuiet: true, onchange(e) { selectedCardChanged(this.selectedIndex) } },
                            ...cardTypes.map((card) => {
                                return h("option", { value: card.id }, card.name)
                            })
                        )
                    ),
                    h("label", { style: { height: 140 } },
                        h("label", "Card Details"),
                        cardNameElement = h("label", { style: { fontWeight: "bold" }}, cardTypes[0].name),
                        cardDescriptionElement = h("label", cardTypes[0].description)
                    )
                ),
                h("div", { class: "column" },
                    h("div", { class:"card" },
                        h("img", { src: "portrait.png", height: "100%" } )
                    ),
                    h("label",
                        h("span", "Add a comment"),
                        comment = h("input", { uxpQuiet: true })
                    )
                )
            ),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close() } }, "Cancel"),
                h("button", { uxpVariant: "cta", type:"submit" }, "Add Selection to Card")
            )
        )
    )
document.body.appendChild(dialog);

module.exports = {
    commands: {
        menuCommand: function () {
            dialog.showModal();
        }
    }
};