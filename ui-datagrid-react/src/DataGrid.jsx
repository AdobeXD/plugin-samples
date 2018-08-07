let React = require("react");
let ReactDOM = require("react-dom");

let columns = [ {name:"name"}, {name:"version"}, {name:"stage"}, {name:"start"}, {name:"due"}, {name:"details",expand:true} ]
let header = { name: "TASK", version: "VERSION", stage: "STAGE", start: "START DATE", due: "DUE DATE", details: "DETAILS" }
let data = [
    { name: "Product Release Video", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Web Banner Ads", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Publish to Twitter", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Home Page Website Design", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Product Release Video", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Web Banner Ads", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Publish to Twitter", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Home Page Website Design", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Product Release Video", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Web Banner Ads", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Publish to Twitter", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
    { name: "Home Page Website Design", version: "v1", stage: "Stage", start: "Jan 01, 2018", due: "Dec 31, 2018", details: "More detail is here" },
]

function createCell(name, value) {
    return <span key={name}>{value}</span>
}

function createRow(data, index = -1) {
    let header = index < 0
    return (
        <div key={index.toString()} className="row">
            { columns.map(({name,expand}) => createCell(name, (expand && !header) ? "▼" : data[name])) }
        </div>
    )
}

module.exports = class DataGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="DataGrid">
                { createRow(header) }
                <div className="body">
                    { data.map(createRow) }
                </div>
            </div>
        );
    }
}
