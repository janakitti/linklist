import { SET_USER, SET_LISTS } from "./actionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
});
