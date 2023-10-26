import { TextGens } from "@mjtdev/ai";

export const summarizeText = async (text: string) => {
  return TextGens.textgen(
    `HUMAN: Summarize the following text:
${text}
ASSISTANT: Summary of text:`,
    {
      max_new_tokens: 1024,
      temperature: 0.7,
      top_p: 0.9,
      stopping_strings: [
        "###ASSISTANT:",
        "###HUMAN:",
        "###",
        "HUMAN:",
        "ASSISTANT:",
      ],
    }
  );
};
