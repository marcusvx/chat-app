import { render } from "@testing-library/react";
import { ChatEventSummary } from "../../models/chat-event-summary";
import ChatSummary from "./ChatSummary";
import * as useEventSummaryHook from "../../hooks/useEventsSummary";

const ROOM_ID = 99;
const DATE = new Date("2021-06-09T00:00:00+00:00");

jest.mock("../../helpers/format-time", () => ({
  formatTime: (date: number) => date.toString(),
}));

const EVENT_SUMMARY: ChatEventSummary[] = [
  {
    hour: 2,
    items: [
      {
        eventCount: 4,
        eventType: "Enter",
        userCount: 0,
      },
      {
        eventCount: 6,
        eventType: "Comment",
        userCount: 0,
      },
      {
        eventCount: 3,
        eventType: "Leave",
        userCount: 0,
      },
    ],
  },
  {
    hour: 3,
    items: [
      {
        eventCount: 4,
        eventType: "Enter",
        userCount: 0,
      },
      {
        eventCount: 6,
        eventType: "Comment",
        userCount: 0,
      },
      {
        eventCount: 3,
        eventType: "Leave",
        userCount: 0,
      },
    ],
  },
];

describe("ChatSummary component", () => {
  it("should render comment chat event correctly", () => {
    jest.spyOn(useEventSummaryHook, "useEventsSummary").mockReturnValue({
      data: EVENT_SUMMARY,
      isLoading: false,
      hasError: false,
    });

    const { queryAllByRole } = render(
      <ChatSummary roomId={ROOM_ID} date={DATE} />
    );

    expect(queryAllByRole("article")).toHaveLength(EVENT_SUMMARY.length);
  });

  it("should not render any chat events when data is not ready", () => {
    jest.spyOn(useEventSummaryHook, "useEventsSummary").mockReturnValue({
      data: undefined,
      isLoading: true,
      hasError: false,
    });

    const { queryAllByRole } = render(
      <ChatSummary roomId={ROOM_ID} date={DATE} />
    );

    expect(queryAllByRole("article")).toHaveLength(0);
  });

  it("should render notification when data fetch fails", () => {
    jest.spyOn(useEventSummaryHook, "useEventsSummary").mockReturnValue({
      data: undefined,
      isLoading: false,
      hasError: true,
    });

    const { queryAllByRole, getByText } = render(
      <ChatSummary roomId={ROOM_ID} date={DATE} />
    );

    expect(getByText("No chat data found for the date")).toBeInTheDocument();
    expect(queryAllByRole("article")).toHaveLength(0);
  });

  it("should render notification when data is empty", () => {
    jest.spyOn(useEventSummaryHook, "useEventsSummary").mockReturnValue({
      data: [],
      isLoading: false,
      hasError: false,
    });

    const { queryAllByRole, getByText } = render(
      <ChatSummary roomId={ROOM_ID} date={DATE} />
    );

    expect(getByText("No chat data found for the date")).toBeInTheDocument();
    expect(queryAllByRole("article")).toHaveLength(0);
  });
});
