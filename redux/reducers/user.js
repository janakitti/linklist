import { SET_USER } from "../actionTypes";

const initialState = {
  username: "",
  email: "",
  lists: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    default:
      return state;
  }
}
