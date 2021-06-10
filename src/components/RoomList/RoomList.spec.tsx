import { render } from "@testing-library/react";
import RoomList from "./RoomList";
import * as useRoomsHook from "../../hooks/useRooms";
import { Room } from "../../models/room";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const ROOMS: Room[] = [
  { id: 1, name: "Room 1" },
  { id: 2, name: "Room 2" },
  { id: 3, name: "Room 3" },
  { id: 4, name: "Room 4" },
  { id: 6, name: "Room 5" },
];

describe("RoomList Component", () => {
  it("should match snapshot", () => {
    jest.spyOn(useRoomsHook, "useRooms").mockReturnValue({
      data: ROOMS,
      hasError: false,
      isLoading: false,
    });

    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <RoomList />
      </Router>
    );

    expect(getByRole("link", { name: "Room 1" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Room 2" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Room 3" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Room 4" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Room 5" })).toBeInTheDocument();
  });
});
