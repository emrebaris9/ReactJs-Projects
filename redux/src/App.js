import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}
const mapStateToprops = state => {
  return state;
};
export default connect(mapStateToprops)(App);
