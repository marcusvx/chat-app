import { useEvents } from "../../hooks/useEvents";
import ChatEvent from "../../models/chat-event";
import ChatEventItem from "./ChatEventItem";

interface ChatEventListProps {
  roomId: number;
  date: Date;
}

const ChatEventList = ({ roomId, date }: ChatEventListProps) => {
  const { data } = useEvents(roomId, date);

  return (
    <>
      {data &&
        (data as ChatEvent[]).map((chatEvent: ChatEvent) => (
          <ChatEventItem key={chatEvent.id} chatEvent={chatEvent} />
        ))}
    </>
  );
};

export default ChatEventList;
