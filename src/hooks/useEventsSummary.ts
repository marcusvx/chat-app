import useSWR from "swr";
import { getDateParts } from "../helpers/get-date-parts";
import { fetcher } from "../helpers/fetcher";
import { ApiResponse } from "../models/api-response";
import { ChatEventSummary } from "../models/chat-event-summary";

const useEventsSummary = (
  roomId: number,
  date: Date
): ApiResponse<ChatEventSummary[]> => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { year, month, day } = getDateParts(date);
  const fetchUrl = `${backendUrl}/events/${year}/${month}/${day}/hourly/?room=${roomId}`;

  const { data, error } = useSWR<ChatEventSummary[]>(fetchUrl, fetcher);

  return {
    data,
    isLoading: !error && !data,
    hasError: error,
  };
};

export { useEventsSummary };
