import { UPLOAD_TASK } from "./types";
import firebase from "../../config/firebase";

export const addTask = (task, { user }) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/task/${user.uid}`)
      .push(task);
  };
};

export const updateTask = (pushID, task, { user }) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/task/${user.uid}/${pushID}`)
      .set(task);
  };
};

export const deleteTask = (pushID, { user }) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/task/${user.uid}/${pushID}`)
      .remove();
  };
};
