import { ActionTypes } from "./action-types";

export const fetching = () => ({ type: ActionTypes.FETCHING, response: null });
export const success = (response: any) => ({
  type: ActionTypes.SUCCESS,
  response,
});
export const error = (response: any) => ({ type: ActionTypes.ERROR, response });
