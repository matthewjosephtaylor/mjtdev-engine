export const CLOUDFLARE_AI_DONE_CHUNK = "[DONE]";
export const isCloudflareAiResponse = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.response === "string";
};
//# sourceMappingURL=CloudflareAiResponse.js.map