export interface ChatEventSummaryItem {
  eventType: string;
  eventCount: number;
  userCount: number;
}

export interface ChatEventSummary {
  hour: number;
  items: ChatEventSummaryItem[];
}
