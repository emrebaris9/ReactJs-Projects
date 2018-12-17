import React, {PureComponent} from 'react';

class SecondNumber extends PureComponent {
   /* shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.secondNumber !== this.props.secondNumber;
        // değişim varsa renderla yoksa renderlama !!!
    }*/
    render() {
        console.log("Second Rendering");
        return (
            <div>
                {this.props.secondNumber}
            </div>
        );
    }
}

export default SecondNumber;