import React, { Component } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import classNames from "classnames";
import { EmailOutlined, LockOutlined } from "@material-ui/icons";
import "./LoginCard.css";

class LoginCard extends Component {
  state = {
    code: true
  };
  render() {
    return (
      <div className="loginCardDiv">
        <div className="mini-loginCardDiv">
          <Typography className="mini-loginCardDiv-heading">Login</Typography>
        </div>

        <div className="loginCardDiv-textDiv">
          <Typography className="textDiv-tagline">
            Login With Credentials
          </Typography>

          {this.state.code ? (
            <Grid container spacing={12} alignItems="flex-end">
              <Grid item xs="12">
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item xs="1">
                    <EmailOutlined />
                  </Grid>
                  <Grid item xs="11">
                    <TextField fullWidth id="input-email" label="Email" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs="12" style={{ marginTop: 20 }}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item xs="1">
                    <LockOutlined />
                  </Grid>
                  <Grid item xs="11">
                    <TextField
                      fullWidth
                      type="password"
                      id="input-password"
                      label="Password"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs="12" style={{ marginTop: 30 }}>
                <Button className="textDiv-loginBtn">
                  <span>Sign In</span>
                </Button>
              </Grid>

              <Grid item xs="12" style={{ marginTop: 30, marginBottom: 10 }}>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item xs="12">
                    <Typography style={{ padding: 10 }}>
                      Don't Have Any Account ?
                      <Button className="textDiv-signUp">
                        <span>Sign Up</span>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
export default LoginCard;
