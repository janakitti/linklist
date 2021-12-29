import { IRootState } from "./reducers";

export const getUserState = (store: IRootState) => store.user;
