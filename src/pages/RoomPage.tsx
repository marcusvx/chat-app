import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatEventList from "../components/ChatEventList";
import ChatSummary from "../components/ChatSummary";
import DatePicker from "react-datepicker";

export const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  const roomId = Number(id);

  const [viewHourly, setViewHourly] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div>
        <span>Granularity: </span>
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />

        <button onClick={() => setViewHourly(false)}>Minute by minute</button>
        <button onClick={() => setViewHourly(true)}>Hourly</button>
      </div>
      {viewHourly ? (
        <div>
          <ChatSummary roomId={roomId} date={date} />
        </div>
      ) : (
        <ChatEventList roomId={roomId} date={date} />
      )}
    </div>
  );
};
