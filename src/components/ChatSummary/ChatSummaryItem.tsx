import { formatTime } from "../../helpers/format-time";
import {
  ChatEventSummary,
  ChatEventSummaryItem,
} from "../../models/chat-event-summary";

interface ChatSummaryItemProps {
  chatEventSummary: ChatEventSummary;
}

const ChatEventItem = ({ chatEventSummary }: ChatSummaryItemProps) => {
  const writeEvent = (event: ChatEventSummaryItem) => {
    switch (event.eventType) {
      case "Enter":
        return `${event.eventCount} people entered`;

      case "Leave":
        return `${event.eventCount} left`;

      case "HighFive":
        return `${event.eventCount} people high-fived ${event.userCount} other person`;

      default:
        return `${event.eventCount} comments`;
    }
  };

  return (
    <div>
      <span>{formatTime(chatEventSummary.hour)}: </span>
      {chatEventSummary.items.map((item) => (
        <div key={item.eventType}>{writeEvent(item)}</div>
      ))}
    </div>
  );
};

export default ChatEventItem;
