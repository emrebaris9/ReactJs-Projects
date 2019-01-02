import React from 'react'


class SendMessageForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)  // handlechange metoduna this bağlamak için
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}            // mesaj submit ediliyor
                className="send-message-form">
                <input
                    disabled={this.props.disabled}   
                    onChange={this.handleChange}         // yazılan mesaj içeriği değişiyor
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm