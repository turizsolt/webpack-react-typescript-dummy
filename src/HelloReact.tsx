import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloReact extends React.Component<IHelloReactProps, IHelloReactState> {
    constructor(props, state) {
        super(props, state);

        this.state = {};
    }

    render() {
        return <div>Hello React!</div>
    }
}


class HelloReactComponent {
    static init(element) {
        ReactDOM.render(<HelloReact />, element);
    }
}

interface IHelloReactProps {}
interface IHelloReactState {}

export default HelloReactComponent;
