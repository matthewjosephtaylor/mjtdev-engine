export type CloudflareAiResponse = {
    response: string;
};
export declare const CLOUDFLARE_AI_DONE_CHUNK = "[DONE]";
export type CloudflareAiChunkResponse = CloudflareAiResponse | typeof CLOUDFLARE_AI_DONE_CHUNK;
export type CloudflareAiTextGenerationRequest = {
    prompt?: string;
    stream?: boolean;
    max_tokens?: number;
    messages?: RoleScopedChatInput[];
};
type RoleScopedChatInput = {
    role: string;
    content: string;
};
export declare const isCloudflareAiResponse: (maybe: unknown) => maybe is CloudflareAiResponse;
export {};
//# sourceMappingURL=CloudflareAiResponse.d.ts.map