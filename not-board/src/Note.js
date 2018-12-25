import React, { Component } from 'react'
import {GoPencil} from 'react-icons/go/index'
import {FaTrashAlt} from 'react-icons/fa/index'
import {FaRegSave} from 'react-icons/fa/index'


class Note extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit=this.edit.bind(this)
        this.remove=this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    edit() {
        this.setState({
            editing: true
        })
    }
    remove() {
        alert (' removing note')
    }

    renderForm() {
        return (
            <div className="note">
            <form>
                <textarea />
                <button> <FaRegSave/> </button>
            </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button onClick={this.edit} id="edit"> <GoPencil/> </button>
                    <button onClick={this.remove} id="remove"> <FaTrashAlt/> </button>
                </span>
            </div>
        )
    }
    render(){
        if(this.state.editing) {
            return this.renderForm()
        } else
            return this.renderDisplay()
    }
}
export default Note