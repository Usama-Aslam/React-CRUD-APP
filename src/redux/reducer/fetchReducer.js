import { FETCH_TASK } from "../action/types";

const INITIAL_STATE = {
  taskList: []
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return { ...state, taskList: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export default fetchReducer;
