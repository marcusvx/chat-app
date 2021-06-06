import axios, { AxiosResponse } from "axios";
import Event from "../models/event";

const fetchEvents = async (
  roomId: number,
  date: Date
): Promise<Event[] | null> => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fetchUrl = `${backendUrl}/events/${year}/${month}/${day}/?roomId=${roomId}`;

  try {
    return await axios.get<Event[]>(fetchUrl).then((response) => response.data);
  } catch (error) {
    return null;
  }
};

export { fetchEvents };
