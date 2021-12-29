import { IAction, SET_USER } from "../actionTypes";

export interface IUserState {
  username: string;
  email: string;
  lists: string[];
}

const initialState: IUserState = {
  username: "",
  email: "",
  lists: [],
};

export default function userReducer(
  state: IUserState = initialState,
  action: IAction
) {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    default:
      return state;
  }
}
