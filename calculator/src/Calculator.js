import React, { Component } from 'react';
import './style/Calculator.css';
import Display from './components/Display'
import ControlPanel from './components/ControlPanel'
import Operators from './components/Operators'
import Digits from './components/Digits'

class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
            </main>
        )
    }
}
export default Calculator;