import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Note/>
      </div>
    );
  }
}

export default App;
