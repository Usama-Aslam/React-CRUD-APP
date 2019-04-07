import React, { Component } from "react";
import {
  Typography,
  TextField,
  Button,
  Fab,
  Grid,
  CircularProgress
} from "@material-ui/core";
import classNames from "classnames";
import {
  EmailOutlined,
  LockOutlined,
  WarningOutlined
} from "@material-ui/icons";
import "./LoginCard.css";

import { connect } from "react-redux";
import * as authActions from "../../redux/action/authAction";

class LoginCard extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleText = (name, e) => {
    this.setState({
      errorMessage: ""
    });

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
      default:
        break;
    }
  };

  loginAccount = () => {
    const { email, password } = this.state;
    const { loginUser } = this.props;

    if ((email || password) == "") {
      this.setState({
        errorMessage: "Field can not be empty"
      });
      return;
    }

    loginUser(email, password, this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.authDetail.error !== this.props.authDetail.error) {
      this.setState({
        errorMessage: this.props.authDetail.error
      });
    }
  };

  render() {
    console.log(this.props.authDetail);
    return (
      <div className="loginCardDiv">
        <div className="mini-loginCardDiv">
          <Typography className="mini-loginCardDiv-heading">Login</Typography>
        </div>

        <div className="loginCardDiv-textDiv">
          <Typography className="textDiv-tagline">
            Login With Credentials
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
                    name="email"
                    id="input-email"
                    label="Email"
                    value={this.state.email}
                    onChange={e => this.handleText("email", e)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "2vh" }}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={1}>
                  <LockOutlined />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    name="password"
                    type="password"
                    id="input-password"
                    label="Password"
                    value={this.state.password}
                    onChange={e => this.handleText("password", e)}
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
                disabled={this.props.authDetail.loading}
                className="textDiv-loginBtn"
                style={{ background: "#8e24aa" }}
                onClick={this.loginAccount}
              >
                {this.props.authDetail.loading ? (
                  <CircularProgress style={{ color: "white" }} size={29} />
                ) : (
                  <span>Log In</span>
                )}
              </Fab>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "2vh", marginBottom: 10 }}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={12}>
                  <Typography variant="caption" style={{ padding: 10 }}>
                    Don't Have Any Account ?
                    <Button
                      style={{ textDecoration: "underline" }}
                      onClick={() => {
                        console.log(this.props.history.push("signup"));
                      }}
                    >
                      <span>Sign Up</span>
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
)(LoginCard);
