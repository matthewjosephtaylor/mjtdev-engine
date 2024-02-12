export type OpenAiCommonRequest = {
  // model unused parameter for oobabooga. To change the model, use the /v1/internal/model/load endpoint.
  model: string;
  seed: number;
  max_tokens: number; // Range: [1, context_length)
  temperature: number; // Range: [0, 2]
  top_p: number; // Range: (0, 1]
  top_k?: number; // Range: [1, Infinity) Not available for OpenAI models
  frequency_penalty?: number; // Range: [-2, 2]
  presence_penalty?: number; // Range: [-2, 2]
  repetition_penalty?: number; // Range: (0, 2]

  stream: boolean;
  response_format?: { type: "text" | "json_object" }; // OpenAI only
  logit_bias?: { [key: number]: number }; // OpenAI only

  // OpenRouter-only parameters
  transforms?: string[]; // See "Prompt Transforms" section
  models?: string[]; // See "Fallback Models" section
  route?: "fallback"; // See "Fallback Models" section
};
