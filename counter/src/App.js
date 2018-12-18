import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Footer from './Footer';

class App extends Component {

    render() {

      return (
      <div className="App">
        <Counter/>
        <Footer/>
      </div>
    );
  }
}

export default App;
