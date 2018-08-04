
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

function onsubmit() {
    let values = {
        sourceUrl: sourceUrl.value,
        start: start.value,
        end: end.value,
        autoDetect: autoDetect.checked,
        chartType: chartType.options[Math.max(0, chartType.selectedIndex)].value
    }
    console.log("onsubmit: " + JSON.stringify(values));
    //  dialog is automatically closed after submit unless you call e.preventDefault()
}
let sourceUrl, start, end, autoDetect, chartType;

let dialog =
    h("dialog",
        h("form", { method:"dialog", style: { width: 320 }, onsubmit },
            h("label",
                h("span", "URL of source"),
                //  Should Input controls default to uxpQuiet: true?
                sourceUrl = h("input", { value: "datasource.com/user-countries.csv" })
            ),
            h("div", { class: "row" },
                h("label",
                    h("span", "Start"),
                    start = h("input", { value: "A1" })
                ),
                h("label",
                    h("span", "End"),
                    end = h("input", { value: "F20" })
                )
            ),
            h("label", { class: "row" },
                h("input", { type: "checkbox", checked: true }),
                autoDetect = h("span", "Auto-detect chart type?")
            ),
            h("label",
                h("span", "Chart type override"),
                chartType = h("select",
                    h("option", { value: "bar" }, "Bar graph"),
                    h("option", { value: "pie" }, "Pie chart"),
                    h("option", { value: "venn" }, "Venn diagram")
                )
            ),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close("Cancelled") } }, "Cancel"),
                h("button", { uxpVariant: "cta", type:"submit" }, "Create Chart")
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