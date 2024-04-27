import type { OpenAiMessage } from "./OpenAiMessage";
import type { OpenAiCommonRequest } from "./OpenAiCommonRequest";
export type OpenAiChatCompletionsRequest = OpenAiCommonRequest & {
    messages: OpenAiMessage[];
    mode: "instruct" | "chat" | "chat-instruct";
};
//# sourceMappingURL=OpenAiChatCompletionsRequest.d.ts.map