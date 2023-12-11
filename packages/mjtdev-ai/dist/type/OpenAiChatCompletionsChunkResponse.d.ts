export interface OpenAiChatCompletionsChunkResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    system_fingerprint: string;
    choices: Choice[];
}
interface Choice {
    index: number;
    delta: Delta;
    finish_reason: any;
}
interface Delta {
    role: string;
    content: string;
}
export {};
//# sourceMappingURL=OpenAiChatCompletionsChunkResponse.d.ts.map