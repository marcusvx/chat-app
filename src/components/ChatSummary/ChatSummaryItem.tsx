import React from "react";
import { Columns, Content, Heading, Media } from "react-bulma-components";
import { formatTime } from "../../helpers/format-time";
import {
  ChatEventSummary,
  ChatEventSummaryItem,
} from "../../models/chat-event-summary";

interface ChatSummaryItemProps {
  chatEventSummary: ChatEventSummary;
}

const ChatSummaryItem = ({ chatEventSummary }: ChatSummaryItemProps) => {
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
    <Media renderAs="article">
      <Media.Item align="center">
        <Content>
          <Columns>
            <Columns.Column size={2}>
              <Heading size={4}>{formatTime(chatEventSummary.hour)}: </Heading>
            </Columns.Column>
            <Columns.Column size={10}>
              {chatEventSummary.items.map((item) => (
                <div key={item.eventType}>{writeEvent(item)}</div>
              ))}
            </Columns.Column>
          </Columns>
        </Content>
      </Media.Item>
    </Media>
  );
};

export default ChatSummaryItem;
