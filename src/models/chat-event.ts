export default interface ChatEvent {
  id: number;
  receivedAt: string;
  roomName: string;
  fromUserName: string;
  toUserName?: string;
  eventType: "Enter" | "Leave" | "Comment" | "HighFive";
  comment?: string;
}
