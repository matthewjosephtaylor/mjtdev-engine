import { OpenAiTextChoice } from "./OpenAiTextChoice";
import { OpenAiUsage } from "./OpenAiUsage";
export interface OpenAiTextResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAiTextChoice[];
    usage?: OpenAiUsage;
}
//# sourceMappingURL=OpenAiTextResponse.d.ts.map