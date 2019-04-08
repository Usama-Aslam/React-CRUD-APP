import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { connect } from "react-redux";
import * as authActions from "../redux/action/authAction";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)" }}
        >
          <Typography variant="h6" color="inherit" className={classes.grow}>
            CRUD APP
          </Typography>

          {props.authDetail.user ? (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => props.signOut()}
            >
              <span>LOG OUT</span>
            </Button>
          ) : (
            <div />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { authDetail: { ...state.authReducer } };
};

export default connect(
  mapStateToProps,
  authActions
)(withStyles(styles)(ButtonAppBar));
