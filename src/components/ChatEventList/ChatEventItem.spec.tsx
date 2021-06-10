import { render } from "@testing-library/react";
import ChatEvent from "../../models/chat-event";
import ChatEventItem from "./ChatEventItem";

jest.mock("../../helpers/format-time", () => ({
  formatTime: (date: string) => date.substring(11, 16),
}));

describe("ChatEventItem component", () => {
  it("should render comment chat event correctly", () => {
    const event: ChatEvent = {
      id: 99,
      roomName: "The Room",
      fromUserName: "John",
      receivedAt: "2021-06-09T13:25:00+00:00",
      eventType: "Comment",
      comment: "Lorem Ipsum Dolor Sit Amet",
    };

    const { getByText } = render(<ChatEventItem chatEvent={event} />);

    expect(getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    expect(getByText("13:25")).toBeInTheDocument();
    expect(getByText("John")).toBeInTheDocument();
  });

  it("should render enter chat event correctly", () => {
    const event: ChatEvent = {
      id: 191,
      roomName: "Other Room",
      fromUserName: "Jane",
      receivedAt: "2021-06-09T11:10:00+00:00",
      eventType: "Enter",
    };

    const { getByText } = render(<ChatEventItem chatEvent={event} />);

    expect(getByText("Jane")).toBeInTheDocument();
    expect(getByText("enters the room")).toBeInTheDocument();
    expect(getByText("11:10")).toBeInTheDocument();
  });

  it("should render leave chat event correctly", () => {
    const event: ChatEvent = {
      id: 123,
      roomName: "Another Room",
      fromUserName: "Jack",
      receivedAt: "2021-06-08T22:55:00+00:00",
      eventType: "Leave",
    };

    const { getByText } = render(<ChatEventItem chatEvent={event} />);

    expect(getByText("Jack")).toBeInTheDocument();
    expect(getByText("leaves the room")).toBeInTheDocument();
    expect(getByText("22:55")).toBeInTheDocument();
  });

  it("should render high-five chat event correctly", () => {
    const event: ChatEvent = {
      id: 345,
      roomName: "Cool Room",
      fromUserName: "Maria",
      toUserName: "Sarah",
      receivedAt: "2021-06-05T15:34:00+00:00",
      eventType: "HighFive",
    };

    const { getByText } = render(<ChatEventItem chatEvent={event} />);

    expect(getByText("Maria")).toBeInTheDocument();
    expect(getByText("high-fives")).toBeInTheDocument();
    expect(getByText("Sarah")).toBeInTheDocument();
    expect(getByText("15:34")).toBeInTheDocument();
  });
});
