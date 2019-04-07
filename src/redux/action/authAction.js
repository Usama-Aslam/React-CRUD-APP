import React from "react";
import firebase from "../../config/firebase";

import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOADER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL
} from "./types";

export const signUpUser = (email, password, props) => {
  return dispatch => {
    //loading spinner
    dispatch({ type: LOADER });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async user => {
        // console.log(user.user.uid);
        await firebase
          .database()
          .ref(`/users/${user.user.uid}`)
          .set({ email, uid: user.user.uid });
        dispatch({ type: SIGNUP_SUCCESS, payload: user });
        props.history.replace("/");
      })
      .catch(err => {
        dispatch({ type: SIGNUP_FAIL, payload: err.message });
      });
  };
};

export const loginUser = (email, password, props) => {
  return dispatch => {
    dispatch({ type: LOADER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        props.history.replace("/");
      })
      .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.message }));
  };
};

export const signOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: SIGNOUT_FAIL, payload: error.message });
      });
  };
};
