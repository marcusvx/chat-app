import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatEventList from "../components/ChatEventList";
import ChatSummary from "../components/ChatSummary";

export const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  const roomId = Number(id);

  const [viewHourly, setViewHourly] = useState(false);

  return (
    <div>
      <div>
        <span>Granularity: </span>
        <button onClick={() => setViewHourly(false)}>Minute by minute</button>
        <button onClick={() => setViewHourly(true)}>Hourly</button>
      </div>
      {viewHourly ? (
        <div>
          <ChatSummary roomId={roomId} />
        </div>
      ) : (
        <ChatEventList roomId={roomId} />
      )}
    </div>
  );
};
