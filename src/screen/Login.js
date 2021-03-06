import React, { Component } from "react";
import LoginCard from "../view/Login/LoginCard";

export default class Login extends Component {
  render() {
    return (
      <div
        className="loginCard-block"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flex: 1,
          background: "linear-gradient(180deg, #fff, #353535)"
        }}
      >
        <LoginCard {...this.props} />
      </div>
    );
  }
}
