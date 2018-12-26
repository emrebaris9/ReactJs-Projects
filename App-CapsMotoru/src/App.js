import React, { Component } from 'react';
import Header from "./Header"
import CapsMotor from "./CapsMotor"
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CapsMotor/>
      </div>
    );
  }
}

export default App;
