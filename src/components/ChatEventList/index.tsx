import { useEvents } from "../../hooks/useEvents";
import ChatEvent from "../../models/chat-event";
import ChatEventItem from "./ChatEventItem";

interface ChatEventListProps {
  roomId: number;
}

const ChatEventList = ({ roomId }: ChatEventListProps) => {
  const currentDate = new Date();
  const { data } = useEvents(roomId, currentDate);

  return (
    <>
      {data?.map((chatEvent: ChatEvent) => (
        <ChatEventItem key={chatEvent.id} chatEvent={chatEvent} />
      ))}
    </>
  );
};

export default ChatEventList;
