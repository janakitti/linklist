export const SET_USER = "SET_USER";
export const SET_LISTS = "SET_LISTS";
export const SET_SELECTED_INDEX = "SET_SELECTED_INDEX";
export const SET_ERROR_MSG = "SET_ERROR_MSG";
export const SET_ERROR_SHOW = "SET_ERROR_SHOW";

export interface IAction {
  type: string;
  payload: any;
}
