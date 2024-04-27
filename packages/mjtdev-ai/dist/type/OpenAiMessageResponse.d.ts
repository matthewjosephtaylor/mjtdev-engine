import type { OpenAiChatChoice } from "./OpenAiChatChoice";
import type { OpenAiUsage } from "./OpenAiUsage";
export interface OpenAiMessageResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAiChatChoice[];
    usage?: OpenAiUsage;
}
//# sourceMappingURL=OpenAiMessageResponse.d.ts.map