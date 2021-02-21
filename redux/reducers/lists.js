import { SET_LISTS } from "../actionTypes";

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
