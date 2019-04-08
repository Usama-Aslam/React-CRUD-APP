import React, { Component } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Fab
} from "@material-ui/core";
import classNames from "classnames";
import {
  EmailOutlined,
  LockOutlined,
  WarningOutlined
} from "@material-ui/icons";
import "../Login/LoginCard.css";
import "./SignUpCard.css";
import "../../animation.css";

import * as authActions from "../../redux/action/authAction";
import { connect } from "react-redux";

class SignUpCard extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: ""
  };

  handleText = (name, e) => {
    let value = e.target.value;
    switch (name) {
      case "email":
        this.setState({
          email: value
        });
        break;

      case "password":
        this.setState({
          password: value
        });
        break;

      case "confirmPassword":
        this.setState({
          confirmPassword: value
        });
      default:
        break;
    }
    this.setState({
      errorMessage: ""
    });
  };

  createAccount = () => {
    const { signUpUser } = this.props;
    const { email, password, confirmPassword } = this.state;

    if ((email && password && confirmPassword) == "") {
      this.setState({
        errorMessage: "Fields can not be empty"
      });
      return false;
    } else if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Incorrect Password"
      });
      return false;
    }

    signUpUser(email, password, this.props);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.authDetail.error !== this.props.authDetail.error) {
      this.setState({
        errorMessage: this.props.authDetail.error.message
      });
      // console.log(prevProps.)
    }
  }

  render() {
    console.log("auth", this.props.authDetail);
    return (
      <div className="loginCardDiv">
        <div className="mini-loginCardDiv">
          <Typography className="mini-loginCardDiv-heading">Sign Up</Typography>
        </div>

        <div className="loginCardDiv-textDiv">
          <Typography className="textDiv-tagline">
            Create A New Account.
          </Typography>

          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={12}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={1}>
                  <EmailOutlined />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    id="input-signUpEmail"
                    label="Email"
                    value={this.state.email}
                    onChange={e => this.handleText("email", e)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "1vh" }}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={1}>
                  <LockOutlined />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    name="password"
                    type="password"
                    id="input-signUpPassword"
                    label="Password"
                    value={this.state.password}
                    onChange={e => this.handleText("password", e)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "1vh" }}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={1}>
                  <LockOutlined />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    id="input-signUpConfirmPassword"
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={e => this.handleText("confirmPassword", e)}
                  />
                </Grid>
              </Grid>
            </Grid>

            {this.state.errorMessage.length > 0 ? (
              <Grid item xs={12} style={{ marginTop: "1vh" }}>
                <Grid container alignItems="flex-end">
                  <Grid item xs={1}>
                    <WarningOutlined style={{ color: "red", fontSize: 18 }} />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography
                      style={{
                        fontSize: 16,
                        color: "red",
                        textAlign: "left"
                      }}
                    >
                      {this.state.errorMessage}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <div style={{ height: "6vh", width: 20 }} />
            )}

            <Grid item xs={12} style={{ marginTop: "2vh" }}>
              <Fab
                variant="extended"
                aria-label="Delete"
                disabled={this.props.authDetail.loading}
                className="textDiv-signUp"
                style={{ background: "#8e24aa" }}
                onClick={this.createAccount}
              >
                {this.props.authDetail.loading ? (
                  <CircularProgress style={{ color: "white" }} size={29} />
                ) : (
                  <span>Create</span>
                )}
              </Fab>
            </Grid>

            <Grid item xs={12} style={{ marginTop: 0, marginBottom: 0 }}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={12}>
                  <Typography variant="caption" style={{ padding: 10 }}>
                    Already Have Any Account ?
                    <Button
                      style={{ textDecoration: "underline" }}
                      onClick={() => {
                        this.props.history.push("login");
                      }}
                    >
                      <span>Log In</span>
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authDetail: { ...state.authReducer }
  };
};

export default connect(
  mapStateToProps,
  authActions
)(SignUpCard);
