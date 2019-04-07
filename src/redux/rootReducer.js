import { combineReducers } from "redux";

import authReducer from "./reducer/authReducer";
import fetchReducer from "./reducer/fetchReducer";

export default combineReducers({ authReducer, fetchReducer });
