import type { OpenAiMessage } from "./OpenAiMessage";
export interface OpenAiChatChoice {
    message: OpenAiMessage;
    index: number;
    logprobs: any;
    finish_reason: string;
}
//# sourceMappingURL=OpenAiChatChoice.d.ts.map