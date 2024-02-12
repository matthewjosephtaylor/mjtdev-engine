export type OpenAiCommonRequest = {
    model: string;
    seed: number;
    max_tokens: number;
    temperature: number;
    top_p: number;
    top_k?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
    repetition_penalty?: number;
    stream: boolean;
    response_format?: {
        type: "text" | "json_object";
    };
    logit_bias?: {
        [key: number]: number;
    };
    transforms?: string[];
    models?: string[];
    route?: "fallback";
};
//# sourceMappingURL=OpenAiCommonRequest.d.ts.map