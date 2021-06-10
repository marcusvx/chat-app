import { render } from "@testing-library/react";
import ChatEventList from "./ChatEventList";
import * as useEventHook from "../../hooks/useEvents";
import ChatEvent from "../../models/chat-event";

const ROOM_ID = 99;
const DATE = new Date("2021-06-09T00:00:00+00:00");
const EVENTS: ChatEvent[] = [
  {
    id: 81,
    roomName: "Other Room",
    fromUserName: "Jane",
    receivedAt: "2021-06-09T11:10:00+00:00",
    eventType: "Enter",
  },
  {
    id: 82,
    roomName: "Other Room",
    fromUserName: "Jane",
    receivedAt: "2021-06-09T11:11:00+00:00",
    eventType: "Comment",
    comment: "Hello World",
  },
  {
    id: 83,
    roomName: "Other Room",
    fromUserName: "John",
    receivedAt: "2021-06-09T11:12:00+00:00",
    eventType: "Enter",
  },
  {
    id: 84,
    roomName: "Other Room",
    fromUserName: "Jane",
    receivedAt: "2021-06-09T11:13:00+00:00",
    eventType: "HighFive",
    toUserName: "John",
  },
  {
    id: 86,
    roomName: "Other Room",
    fromUserName: "Jane",
    receivedAt: "2021-06-09T11:14:00+00:00",
    eventType: "Leave",
  },
];
describe("ChatEventList component", () => {
  it("should render all chat events correctly", () => {
    jest.spyOn(useEventHook, "useEvents").mockReturnValue({
      data: EVENTS,
      isLoading: false,
      hasError: false,
    });

    const { queryAllByRole } = render(
      <ChatEventList roomId={ROOM_ID} date={DATE} />
    );

    expect(queryAllByRole("article")).toHaveLength(EVENTS.length);
  });

  it("should not render any chat events when data is not ready", () => {
    jest.spyOn(useEventHook, "useEvents").mockReturnValue({
      data: EVENTS,
      isLoading: true,
      hasError: false,
    });

    const { queryAllByRole } = render(
      <ChatEventList roomId={ROOM_ID} date={DATE} />
    );

    expect(queryAllByRole("article")).toHaveLength(0);
  });

  it("should render notification when data fetch fails", () => {
    jest.spyOn(useEventHook, "useEvents").mockReturnValue({
      data: undefined,
      isLoading: false,
      hasError: true,
    });

    const { queryAllByRole, getByText } = render(
      <ChatEventList roomId={ROOM_ID} date={DATE} />
    );

    expect(getByText("No chat data found for the date")).toBeInTheDocument();
    expect(queryAllByRole("article")).toHaveLength(0);
  });

  it("should render notification when data is empty", () => {
    jest.spyOn(useEventHook, "useEvents").mockReturnValue({
      data: [],
      isLoading: false,
      hasError: false,
    });

    const { queryAllByRole, getByText } = render(
      <ChatEventList roomId={ROOM_ID} date={DATE} />
    );

    expect(getByText("No chat data found for the date")).toBeInTheDocument();
    expect(queryAllByRole("article")).toHaveLength(0);
  });
});
