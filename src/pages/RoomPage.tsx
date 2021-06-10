import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatEventList from "../components/ChatEventList";
import ChatSummary from "../components/ChatSummary";
import DatePicker from "react-datepicker";
import { Box, Form, Level } from "react-bulma-components";

export const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  const roomId = Number(id);

  const [view, setView] = useState("minute");
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Box>
        <Level>
          <Level.Side>
            <Level.Item>
              <form>
                <Form.Field>
                  <Form.Label>Date: </Form.Label>
                  <Form.Control>
                    <DatePicker
                      className="input"
                      selected={date}
                      onChange={(date: Date) => setDate(date)}
                    />
                  </Form.Control>
                </Form.Field>
              </form>
            </Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Form.Field>
                <Form.Label className="block">Granularity: </Form.Label>

                <Form.Control>
                  <div className="select">
                    <select
                      value={view}
                      onChange={(event: any) => setView(event.target.value)}
                    >
                      <option value="minute">Minute by Minute</option>
                      <option value="hour">Hourly</option>
                    </select>
                  </div>
                </Form.Control>
              </Form.Field>
            </Level.Item>
          </Level.Side>
        </Level>
      </Box>
      <Box>
        {view === "hour" ? (
          <div>
            <ChatSummary roomId={roomId} date={date} />
          </div>
        ) : (
          <ChatEventList roomId={roomId} date={date} />
        )}
      </Box>
    </>
  );
};
