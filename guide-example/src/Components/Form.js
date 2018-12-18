import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        addContact:PropTypes.func
    };
    state = {
        name:'',
        phone:''
    };
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });
        this.setState({
            name:'',
            phone:''
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name"
                           id="name"
                           value={this.state.name}
                           onChange={this.onChange}
                           placeholder="Enter a Name"/>
                    <br/>
                    <input name="phone"
                           id="phone"
                           value={this.state.phone}
                           onChange={this.onChange}
                           placeholder="Enter a Phone"/>

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;