//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//const React = require("react");
//const ReactDOM = require("react-dom");
class HelloReact extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {};
    }
    render() {
        return React.createElement("div", null, "Hello React!");
    }
}
class HelloReactComponent {
    static init(element) {
        ReactDOM.render(React.createElement(HelloReact, null), element);
    }
}
//exports.default = HelloReactComponent;
//# sourceMappingURL=HelloReact.js.map