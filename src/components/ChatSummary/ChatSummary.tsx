import { useEventsSummary } from "../../hooks/useEventsSummary";
import { ChatEventSummary } from "../../models/chat-event-summary";
import ChatSummaryItem from "./ChatSummaryItem";
import { Notification } from "react-bulma-components";
import Skeleton from "react-loading-skeleton";

interface ChatSummaryProps {
  roomId: number;
  date: Date;
}

const ChatSummary = ({ roomId, date }: ChatSummaryProps) => {
  const { data, isLoading, hasError } = useEventsSummary(roomId, date);
  if (isLoading) {
    return <Skeleton height={50} count={4} className="mb-2" />;
  }

  if (hasError || !data?.length) {
    return (
      <Notification color="string">
        No chat data found for the date
      </Notification>
    );
  }

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
