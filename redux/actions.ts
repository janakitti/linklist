import {
  SET_USER,
  SET_LISTS,
  SET_SELECTED_INDEX,
  SET_ERROR_MSG,
  SET_ERROR_SHOW,
} from "./actionTypes";
import { IUserState } from "./reducers/user";

export const setUser = (user: IUserState) => ({
  type: SET_USER,
  payload: user,
});

export const setLists = (lists: string[]) => ({
  type: SET_LISTS,
  payload: lists,
});

export const setSelectedIndex = (index: number) => ({
  type: SET_SELECTED_INDEX,
  payload: index,
});

export const setErrorMsg = (msg: string) => ({
  type: SET_ERROR_MSG,
  payload: msg,
});

export const setErrorModalShow = (isShowing: boolean) => ({
  type: SET_ERROR_SHOW,
  payload: isShowing,
});
