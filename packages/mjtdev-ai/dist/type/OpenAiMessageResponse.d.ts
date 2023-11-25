import { OpenAiChatChoice } from "./OpenAiChatChoice";
import { OpenAiUsage } from "./OpenAiUsage";
export interface OpenAiMessageResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAiChatChoice[];
    usage?: OpenAiUsage;
}
//# sourceMappingURL=OpenAiMessageResponse.d.ts.map