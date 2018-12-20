import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
//import Child from './Child';

class App extends Component {
  //Mount Components
/*
  state={
      name: 'Emre'
    };
    constructor(props) {
        super();
          console.log("constructor çalıştı");
    }
    componentWillMount() {
        console.log("component will mount çalıştı");
    }
    componentDidMount() {
        console.log("componentDidmount");
    }
    changeName =() => {
      this.setState({
          name:' Barış'
      })
    }; */

      state= {
        tl:0
      };
      changeTL = (e) => {
        this.setState({
            tl: e.target.value
        })
      };

    shouldComponentUpdate(nextProps, nextState) {
      return (nextState.tl %3) === 0,1,2,3,4,5,6,7,8,9 ;
    }

    render() {
    return (
      <div className="App">
              <Input label={{ basic: true, content: 'tl' }}
                     labelPosition='right'
                  name="tl" id="tl" onChange={this.changeTL}
                     placeholder={" para miktarı "}/>
        <br/><br/>
        Sensörün Tanesi 3 TL. <br/>
          {this.state.tl /3} tane elma alabilirsiniz.

      </div>
    );
  }
}

export default App;
