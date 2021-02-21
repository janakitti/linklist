import { SET_LISTS } from "../actionTypes";

const initialState = [];

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
