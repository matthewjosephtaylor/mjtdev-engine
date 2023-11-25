import { OpenAiMessage } from "./OpenAiMessage";
import { OpenAiCommonRequest } from "./OpenAiCommonRequest";


export type OpenAiChatCompletionsRequest = OpenAiCommonRequest & {
  messages: OpenAiMessage[];
  mode: "instruct" | "chat" | "chat-instruct";
};
