import type { OpenAiTextChoice } from "./OpenAiTextChoice";
import type { OpenAiUsage } from "./OpenAiUsage";
export interface OpenAiTextResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAiTextChoice[];
    usage?: OpenAiUsage;
}
export declare const isOpenAiTextResponse: (maybe: unknown) => maybe is OpenAiTextResponse;
//# sourceMappingURL=OpenAiTextResponse.d.ts.map