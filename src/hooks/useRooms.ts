import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { ApiResponse } from "../models/api-response";
import { Room } from "../models/room";

const useRooms = (): ApiResponse<Room[]> => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { data, error } = useSWR<Room[]>(`${backendUrl}/rooms`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    hasError: error,
  };
};

export { useRooms };
