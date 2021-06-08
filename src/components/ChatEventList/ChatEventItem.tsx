import { formatTime } from "../../helpers/format-time";
import ChatEvent from "../../models/chat-event";

interface ChatEventItemProps {
  chatEvent: ChatEvent;
}

const ChatEventItem = ({ chatEvent }: ChatEventItemProps) => {
  const writeEvent = (event: ChatEvent) => {
    switch (event.eventType) {
      case "Enter":
        return `${event.fromUserName} enters the room`;

      case "Leave":
        return `${event.fromUserName} leaves the room`;

      case "HighFive":
        return `${event.fromUserName} high-fives ${event.toUserName}`;

      default:
        return `${event.fromUserName} comments: ${event.comment}`;
    }
  };

  return (
    <div>
      <span>{formatTime(chatEvent.receivedAt)}: </span>
      <span>{writeEvent(chatEvent)}</span>
    </div>
  );
};

export default ChatEventItem;
