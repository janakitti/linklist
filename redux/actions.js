import { SET_USER, SET_LISTS, SET_SELECTED_INDEX } from "./actionTypes";

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
