import { IAction, SET_LISTS, SET_SELECTED_INDEX } from "../actionTypes";

export interface IListsState {
  lists: string[];
  selectedIndex: number;
}

const initialState = {
  lists: [],
  selectedIndex: 0,
};

export default function listsReducer(
  state: IListsState = initialState,
  action: IAction
) {
  switch (action.type) {
    case SET_LISTS: {
      return {
        ...state,
        lists: action.payload,
      };
    }
    case SET_SELECTED_INDEX: {
      return {
        ...state,
        selectedIndex: action.payload,
      };
    }
    default:
      return state;
  }
}
