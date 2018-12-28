import React, { Component } from "react";
import styled from "styled-components";
import {Button, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export const logLifecycles = Wrapped => {
  let methods = [
    "componentWillMount",
    "componentDidMount",
    "componentWillReceiveProps",
    "shouldComponentUpdate",
    "componentWillUpdate",
    "componentDidUpdate",
    "componentWillUnmount"
  ];

  let oldMethods = {};

  methods.forEach(method => {
    if (Wrapped.prototype[method]) {
      oldMethods[method] = Wrapped.prototype[method];
    }
    Wrapped.prototype[method] = function() {
      console.groupCollapsed(`${Wrapped.displayName} ${method}`);
      let oldFunction = oldMethods[method];
      if (
        method === "componentWillReceiveProps" ||
        "shouldComponentUpdate" ||
        "componentWillUpdate"
      ) {
        console.log("nextProps", arguments[0]);
      }
      if (method === "shouldComponentUpdate" || "componentWillUpdate") {
        console.log("nextState", arguments[1]);
      }
      if (method === "componentDidUpdate") {
        console.log("prevProps", arguments[0]);
        console.log("prevState", arguments[1]);
      }
      console.groupEnd();
      if (oldFunction) {
        oldFunction = oldFunction.bind(this);
        oldFunction(...arguments);
      }
      if (
        method === "shouldComponentUpdate" &&
        typeof oldFunction === "undefined"
      ) {
        return true;
      }
    };
  });

  Wrapped.prototype.setState = function(partialState, callback) {
    console.groupCollapsed(`${Wrapped.displayName} setState`);
    console.log("partialState", partialState);
    console.log("callback", callback);
    console.groupEnd();
    this.updater.enqueueSetState(this, partialState, callback, "setState");
  };
  return class extends Component {
    static displayName = "Logger";

    render() {
      return <Wrapped {...this.props} />;
    }
  };
};

class ParentComponent extends Component {
  static displayName = "Parent";

  state = {
    random: 0,
    showChild: true
  };

  newRandom = () => {
    this.setState({ random: Math.round(Math.random()*100) });
  };

  toggleChild = () => {
    this.setState(prevState => {
      return {
        showChild: !prevState.showChild
      };
    });
  };

  render() {
    let { showChild } = this.state;
    return (
      <ParentContainer>
        <Header as='h1' color='darkblue'>Parent</Header>
          <hr/>
        <Button primary onClick={this.newRandom}>Yeni Propslara Geç</Button>
            <br/>
            <br/>
        <Button secondary onClick={this.toggleChild}>
          {showChild ? "Gizle:" : "Göster:"} child
        </Button>

        <h3> Random: {this.state.random}</h3>

        {showChild ? <WrappedChild random={this.state.random} /> : null}
      </ParentContainer>
    );
  }
}
class ChildComponent extends Component {
  static displayName = "Child";
  state = {
    random2: 0,
  };
  constructor(props) {
    super(props);
    this.timer = setInterval(() => {
      console.log("timer");
    }, 3000);
  }
  newRandom2 = () => {
    this.setState({ random2: Math.round(Math.random()*100) });
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <ChildContainer>
        <h3>Child</h3>
        <h4> Random: {this.props.random}</h4>  <br/><br/><br/>
        <Button onClick={this.newRandom2}>Change</Button>

        <h5> RandomChild: {this.state.random2}</h5>
      </ChildContainer>
    );
  }
}

const WrappedChild = logLifecycles(ChildComponent);

export const LoggerExample = logLifecycles(ParentComponent);

const ParentContainer = styled.div`
  width: 50%;
  height: 500px;
  margin: auto;
  background-color: salmon;
  padding-left: 15px;
  padding-top: 5px;
  
`;

const ChildContainer = styled.div`
  width: 50%;
  height: 300px;
  margin: auto;
  background-color: lightgreen;
  align-self: center;
   padding-left: 15px;
  padding-top: 5px;
`;
