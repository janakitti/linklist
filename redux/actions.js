import {
  SET_USER,
  SET_LISTS,
  SET_SELECTED_INDEX,
  SET_ERROR_MSG,
  SET_ERROR_SHOW,
} from "./actionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
});

export const setSelectedIndex = (index) => ({
  type: SET_SELECTED_INDEX,
  payload: index,
});

export const setErrorMsg = (msg) => ({
  type: SET_ERROR_MSG,
  payload: msg,
});

export const setErrorModalShow = (isShowing) => ({
  type: SET_ERROR_SHOW,
  payload: isShowing,
});
