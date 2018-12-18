import React from 'react';
import { Button } from 'semantic-ui-react';
class Counter extends React.Component{
    state = {
        number:0
    };
    // azaltma
    decf = () => {
        this.setState({
            number: --this.state.number
    });
    };
    // arttırma
    incf = () => {
        this.setState({
            number: ++this.state.number
        });
    };
    render(){
        return(
            <div>
                <h2>{ this.state.number }</h2>
                <Button.Group>
                    <Button onClick={this.decf}> - </Button>
                    <Button/>
                    <Button onClick={this.incf}> + </Button>
                </Button.Group>

            </div>
        )
    }
}
export default Counter;