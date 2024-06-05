export interface Message {
  user: string;
  content: string;
}

export interface Chat {
  id: number;
  messages: Message[];
}
