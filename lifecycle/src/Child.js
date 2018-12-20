import React, {Component} from 'react';

class Child extends Component {

    // Child Mount Components
   constructor(props) {
        super(props);
        console.log('child constructor');
    }

    componentWillMount() {
        console.log('child comp willMount');
    }

    componentDidMount() {
        console.log('child comp didMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('ComponentWill Receive Props',nextProps)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Child;
