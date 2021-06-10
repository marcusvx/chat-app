import { useEventsSummary } from "../../hooks/useEventsSummary";
import { ChatEventSummary } from "../../models/chat-event-summary";
import ChatSummaryItem from "./ChatSummaryItem";

interface ChatSummaryProps {
  roomId: number;
  date: Date;
}

const ChatSummary = ({ roomId, date }: ChatSummaryProps) => {
  const { data } = useEventsSummary(roomId, date);

  return (
    <>
      {data &&
        data.map((chatEvent: ChatEventSummary) => {
          return (
            <ChatSummaryItem
              key={chatEvent.hour}
              chatEventSummary={chatEvent}
            />
          );
        })}
    </>
  );
};

export default ChatSummary;
