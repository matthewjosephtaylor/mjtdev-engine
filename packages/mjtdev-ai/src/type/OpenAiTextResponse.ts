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

export const isOpenAiTextResponse = (
  maybe: unknown
): maybe is OpenAiTextResponse => {
  const straw = maybe as OpenAiTextResponse;
  return typeof straw === "object" && Array.isArray(straw.choices);
};
