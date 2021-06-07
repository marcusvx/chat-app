export default interface ChatEvent {
  id: number;
  receivedAt: Date;
  roomName: string;
  fromUserName: string;
  toUserName?: string;
  eventType: "Enter" | "Leave" | "Comment" | "HighFive";
  comment?: string;
}
