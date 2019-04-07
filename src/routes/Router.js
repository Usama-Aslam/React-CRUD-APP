import React from "react";
import {
  Route,
  withRouter,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import Home from "../screen/Home";
import AppBar from "../component/AppBar";

const Routes = props => {
  // console.log("props", props);
  return (
    <div>
      <BrowserRouter>
        <AppBar {...props} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute
            path="/"
            component={Home}
            authDetail={props.authDetail}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const PrivateRoute = ({ component: Component, authDetail, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authDetail.user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    authDetail: { ...state.authReducer }
  };
};

export default connect(
  mapStateToProps,
  null
)(Routes);
