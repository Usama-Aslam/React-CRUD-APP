import React, { Component } from "react";
import SignUpCard from "../view/SignUp/SignUpCard";

export default class SignUp extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flex: 1,
          background: "linear-gradient(180deg, #fff, #353535)"
        }}
      >
        <SignUpCard {...this.props} />
      </div>
    );
  }
}
