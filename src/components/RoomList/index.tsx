import { Menu } from "react-bulma-components";
import { Link } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";

const RoomList = () => {
  const { data, isLoading } = useRooms();

  return (
    <Menu>
      <Menu.List title="Rooms">
        {data &&
          data.map((room: any) => (
            <Link key={room.id} to={`/rooms/${room.id}`}>
              {room.name}
            </Link>
          ))}
      </Menu.List>
    </Menu>
  );
};

export default RoomList;
