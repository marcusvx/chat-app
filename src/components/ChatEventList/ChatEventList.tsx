import { useEvents } from "../../hooks/useEvents";
import ChatEvent from "../../models/chat-event";
import ChatEventItem from "./ChatEventItem";
import { Notification } from "react-bulma-components";
import Skeleton from "react-loading-skeleton";

interface ChatEventListProps {
  roomId: number;
  date: Date;
}

const ChatEventList = ({ roomId, date }: ChatEventListProps) => {
  const { data, isLoading, hasError } = useEvents(roomId, date);
  if (isLoading) {
    return <Skeleton height={50} count={5} className="mb-2" />;
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
        (data as ChatEvent[]).map((chatEvent: ChatEvent) => (
          <ChatEventItem key={chatEvent.id} chatEvent={chatEvent} />
        ))}
    </>
  );
};

export default ChatEventList;
