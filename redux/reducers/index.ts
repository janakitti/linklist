import { combineReducers } from "redux";
import user, { IUserState } from "./user";
import lists, { IListsState } from "./lists";
import error, { IErrorState } from "./error";

export interface IRootState {
  user: IUserState;
  lists: IListsState;
  error: IErrorState;
}

export default combineReducers({ user, lists, error });
