import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

const empty = {
  counter: 0,
  menu: {
    isOpen: false
  }
};

const reducer = (state = empty, action) => state;
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
