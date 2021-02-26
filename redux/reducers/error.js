import { SET_ERROR_MSG, SET_ERROR_SHOW } from "../actionTypes";

const initialState = {
  msg: "",
  isShowing: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR_MSG: {
      return {
        ...state,
        msg: action.payload,
        isShowing: true,
      };
    }
    case SET_ERROR_SHOW: {
      return {
        ...state,
        isShowing: action.payload,
      };
    }
    default:
      return state;
  }
}
