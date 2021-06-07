import { useParams } from "react-router-dom";
import ChatEventList from "../components/ChatEventList";

export const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  const roomId = Number(id);
  
  return (
    <div>
      <ChatEventList roomId={roomId} />
    </div>
  );
};
