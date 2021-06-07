import { useParams } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import ChatEvent from "../models/chat-event";

export const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  const currentDate = new Date();
  const { data } = useEvents(Number(id), currentDate);

  return (
    <div>
      Room
      {data?.map((event: ChatEvent) => {
        return <div>{event.eventType}</div>;
      })}
    </div>
  );
};
