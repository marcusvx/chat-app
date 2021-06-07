import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { ApiResponse } from "../models/api-response";
import ChatEvent from "../models/chat-event";

const useEvents = (roomId: number, date: Date): ApiResponse<ChatEvent[]> => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fetchUrl = `${backendUrl}/events/${year}/${month}/${day}/?room=${roomId}`;

  const { data, error } = useSWR<ChatEvent[]>(fetchUrl, fetcher);

  return {
    data,
    isLoading: !error && !data,
    hasError: error,
  };
};

export { useEvents };
