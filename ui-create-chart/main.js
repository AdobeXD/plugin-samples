const h = require("./h");

let dialog;
function getDialog() {
    if (dialog == null) {
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
            dialog.close();
        }
        let sourceUrl, start, end, autoDetect, chartType;
        
        dialog =
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
                        h("button", { uxpVariant: "cta", type:"submit", onclick(e) { onsubmit(); e.preventDefault() } }, "Create Chart")
                    )
                )
            )
    }
    return dialog;
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.body.appendChild(getDialog()).showModal();
        }
    }
};