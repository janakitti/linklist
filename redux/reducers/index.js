import { combineReducers } from "redux";
import user from "./user";
import lists from "./lists";

export default combineReducers({ user, lists });
