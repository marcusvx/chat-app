import { Link } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";

const RoomList = () => {
  const { data, isLoading, hasError } = useRooms();

  return (
    <>
      <div>{isLoading && <div>Loading...</div>}</div>

      <div>
        {data && (
          <ul>
            {data.map((room: any) => (
              <li key={room.id}>
                <Link to={`/rooms/${room.id}`}>{room.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RoomList;
