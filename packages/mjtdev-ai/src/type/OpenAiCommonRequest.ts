export type OpenAiCommonRequest = {
  model: string; //Unused parameter. To change the model, use the /v1/internal/model/load endpoint.
  max_tokens: number;
  temperature: number;
  top_p: number;
  seed: number;
  presence_penalty: number;
  stop: string | string[];
  stream: boolean;
};
