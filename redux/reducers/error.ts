import { IAction, SET_ERROR_MSG, SET_ERROR_SHOW } from "../actionTypes";

export interface IErrorState {
  msg: string;
  isShowing: boolean;
}

const initialState = {
  msg: "",
  isShowing: false,
};

export default function userReducer(
  state: IErrorState = initialState,
  action: IAction
) {
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
