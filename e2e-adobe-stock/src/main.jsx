// shims, in case they aren't present in the current environment
require("./util/reactShim");

const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App");
const PanelController = require("./controllers/PanelController");

const searchPanel = new PanelController(App);

module.exports = {
    panels: {
        search: searchPanel
    },
    commands: {
        settings: () => searchPanel.instance.showPreferences()
    }
};