import { OpenAiCommonRequest } from "./OpenAiCommonRequest";


export type OpenAiCompletionsRequest = OpenAiCommonRequest & {
  prompt: string;
};
