export interface Feed {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
  target: string;
  event: string | null;
}