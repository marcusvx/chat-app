import { useEventsSummary } from "../../hooks/useEventsSummary";
import { ChatEventSummary } from "../../models/chat-event-summary";
import ChatSummaryItem from "./ChatSummaryItem";

interface ChatSummaryProps {
  roomId: number;
}

const ChatSummary = ({ roomId }: ChatSummaryProps) => {
  const currentDate = new Date();
  const { data } = useEventsSummary(roomId, currentDate);

  return (
    <>
      {data?.map((chatEvent: ChatEventSummary) => (
        <ChatSummaryItem key={chatEvent.hour} chatEventSummary={chatEvent} />
      ))}
    </>
  );
};

export default ChatSummary;
