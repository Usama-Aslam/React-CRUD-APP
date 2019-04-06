import React, { Component } from "react";

import "./App.css";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default App;
