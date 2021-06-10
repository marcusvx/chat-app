import { Menu } from "react-bulma-components";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";

const RoomList = () => {
  const { data, isLoading } = useRooms();

  if (isLoading) {
    return <Skeleton count={8} height={30} className="mt-2 mb-2s"></Skeleton>;
  }
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
