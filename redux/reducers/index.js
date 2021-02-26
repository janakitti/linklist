import { combineReducers } from "redux";
import user from "./user";
import lists from "./lists";
import error from "./error";

export default combineReducers({ user, lists, error });
