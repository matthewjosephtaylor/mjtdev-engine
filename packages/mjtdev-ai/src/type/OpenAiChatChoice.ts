import { OpenAiMessage } from "./OpenAiMessage";


export interface OpenAiChatChoice {
  message: OpenAiMessage;
  index: number;
  logprobs: any;
  finish_reason: string;
}
