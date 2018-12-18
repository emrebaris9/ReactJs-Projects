import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
    state = {
        contacts: [{
                name:'Emre',
                phone:'05548347877'
            },{
                name:'Fatih',
                phone:'05077779987'
        }]
    };
    addContact = (contact)=> {
      const {contacts} = this.state;
      contacts.push(contact);

      this.setState({
          contacts: contacts
      });
    }

    render() {
    return (
      <div className="App">
            <Contacts
                addContact={this.addContact}
                contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
