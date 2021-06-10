import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { ApiResponse } from "../models/api-response";
import { Room } from "../models/room";

const useRoom = (roomId: number): ApiResponse<Room> => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { data, error } = useSWR<Room>(
    `${backendUrl}/rooms/${roomId}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    hasError: error,
  };
};

export { useRoom };
