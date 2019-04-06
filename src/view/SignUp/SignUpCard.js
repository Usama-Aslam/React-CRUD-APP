import React, { Component } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import classNames from "classnames";
import { EmailOutlined, LockOutlined } from "@material-ui/icons";
import "../Login/LoginCard.css";
import "./SignUpCard.css";

class SignUpCard extends Component {
  state = {
    code: true
  };
  render() {
    return (
      <div className="loginCardDiv">
        <div className="mini-loginCardDiv">
          <Typography className="mini-loginCardDiv-heading">Sign Up</Typography>
        </div>

        <div className="loginCardDiv-textDiv">
          <Typography className="textDiv-tagline">
            Create A New Account.
          </Typography>

          {this.state.code ? (
            <Grid container spacing={12} alignItems="flex-end">
              <Grid item xs="12">
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item xs="1">
                    <EmailOutlined />
                  </Grid>
                  <Grid item xs="11">
                    <TextField fullWidth id="input-signUpEmail" label="Email" />
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
                      id="input-signUpPassword"
                      label="Password"
                    />
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
                      id="input-signUpConfirmPassword"
                      label="Confirm Password"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs="12" style={{ marginTop: 30 }}>
                <Button className="textDiv-loginBtn">
                  <span>Create</span>
                </Button>
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
export default SignUpCard;
