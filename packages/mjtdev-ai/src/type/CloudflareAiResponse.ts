export type CloudflareAiResponse = {
  response: string;
};

export const CLOUDFLARE_AI_DONE_CHUNK = "[DONE]";

export type CloudflareAiChunkResponse =
  | CloudflareAiResponse
  | typeof CLOUDFLARE_AI_DONE_CHUNK;

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

export const isCloudflareAiResponse = (
  maybe: unknown
): maybe is CloudflareAiResponse => {
  const straw = maybe as CloudflareAiResponse;
  return typeof straw === "object" && typeof straw.response === "string";
};
