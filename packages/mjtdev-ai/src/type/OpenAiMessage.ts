
export type OpenAiMessage = {
  name?: string;
  role: "user" | "assistant" | "system";
  content: string;
};
