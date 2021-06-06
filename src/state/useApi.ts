import axios, { Method } from "axios";
import { useCallback, useReducer } from "react";
import { error, fetching, success } from "./action-creators";
import reducer, { ApiResponse, initialState } from "./reducer";

const useApiRequest = (
  endpoint: string,
  { verb = "get", params = {} } = {}
): [ApiResponse, () => Promise<void>] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async () => {
    dispatch(fetching());

    try {
      const response = await axios.request({
        url: endpoint,
        method: verb as Method,
        params: params,
      });
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, verb, params]);

  return [state, makeRequest];
};

export default useApiRequest;
