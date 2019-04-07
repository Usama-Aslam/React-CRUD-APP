import react from "react";
import {
  LOADER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS
} from "../action/types";

const INITIAL_STATE = {
  user: "",
  error: "",
  loading: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER:
      return { ...state, loading: true };

    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, loading: false };
      break;

    case SIGNUP_FAIL:
      return { ...state, error: action.payload, loading: false };

    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: "", loading: false };
      break;

    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };

    case SIGNOUT_FAIL:
      return { ...state, error: action.payload };

    case SIGNOUT_SUCCESS:
      return (state = INITIAL_STATE);

    default:
      return state;
      break;
  }
};

export default authReducer;
