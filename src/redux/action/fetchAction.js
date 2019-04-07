import { FETCH_TASK } from "./types.js";
import firebase from "../../config/firebase";

export const fetchTask = ({ user }) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/task/${user.uid}`)
      .on("value", snapshot => {
        console.log(snapshot.val());
        dispatch({ type: FETCH_TASK, payload: snapshot.val() });
      });
  };
};
