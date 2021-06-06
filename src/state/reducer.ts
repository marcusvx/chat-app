import { Reducer } from "react";
import { ActionTypes } from "./action-types";

export interface ApiResponse {
  status: ActionTypes;
  response?: any;
}

export interface ActionType {
  type: ActionTypes;
  response: any;
}

export const initialState: ApiResponse = {
  status: ActionTypes.IDLE,
  response: null,
};

const reducer: Reducer<ApiResponse, ActionType> = (
  state = initialState,
  action: ActionType = { type: ActionTypes.IDLE, response: null }
): ApiResponse => {
  switch (action.type) {
    case ActionTypes.FETCHING:
      return { ...initialState, status: ActionTypes.FETCHING };
    case ActionTypes.SUCCESS:
      return {
        ...state,
        status: ActionTypes.SUCCESS,
        response: action.response,
      };
    case ActionTypes.ERROR:
      return { ...state, status: ActionTypes.ERROR, response: action.response };
    default:
      return state;
  }
};

export default reducer;
