import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            gender: "",
            lunch: "",
            sade: false,
            acili: false,
            soslu: false,
        };

    }

    handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    };

    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default FormContainer
