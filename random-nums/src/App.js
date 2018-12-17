import React, { Component } from 'react';
import './App.css';
import FirstNumber from './components/FirstNumber';
import SecondNumber from './components/SecondNumber';
class App extends Component  {
    state = {
        firstNumber: Math.random().toFixed(2)*100,
        secondNumber: Math.random().toFixed(2)*100
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                firstNumber: Math.random().toFixed(2)*100,
                secondNumber: Math.random().toFixed(2)*100,
            });
        },1000)
    }
    render() {
        return (
            <div className="App">
                <FirstNumber  firstNumber ={this.state.firstNumber}/>
                <SecondNumber secondNumber={this.state.secondNumber}/>
            </div>
        );
    }
}

export default App;
