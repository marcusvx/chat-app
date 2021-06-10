import { render } from "@testing-library/react";
import { ChatEventSummary } from "../../models/chat-event-summary";
import ChatSummaryItem from "./ChatSummaryItem";

jest.mock("../../helpers/format-time", () => ({
  formatTime: (hour: number) => hour.toFixed(2).replace(".", ":"),
}));

describe("ChatSummaryItem component", () => {
  it("should render chat event summary correctly", () => {
    const event: ChatEventSummary = {
      hour: 6,
      items: [
        {
          eventCount: 3,
          eventType: "Enter",
          userCount: 0,
        },
        {
          eventCount: 4,
          eventType: "Comment",
          userCount: 0,
        },
        {
          eventCount: 2,
          eventType: "HighFive",
          userCount: 1,
        },
        {
          eventCount: 2,
          eventType: "Leave",
          userCount: 0,
        },
      ],
    };

    const { getByText, getByRole } = render(
      <ChatSummaryItem chatEventSummary={event} />
    );

    expect(getByRole("heading", { name: "6:00" })).toBeInTheDocument();
    expect(getByText("3 people entered")).toBeInTheDocument();
    expect(getByText("4 comments")).toBeInTheDocument();
    expect(getByText("2 people high-fived 1 other person")).toBeInTheDocument();
    expect(getByText("2 left")).toBeInTheDocument();
  });
});
