import { SET_USER } from "../actionTypes";

const initialState = {
  username: "",
  email: "",
  lists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
  }
};
