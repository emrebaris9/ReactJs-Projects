import React, {Component} from 'react';

class FirstNumber extends Component {
    render() {
        console.log("First Rendering");
        return (
            <div>
                {this.props.firstNumber}
            </div>
        );
    }
}

export default FirstNumber;