// @ts-ignore
import llamaTokenizer from "llama-tokenizer-js";

export const textToTokens = (text: string): number[] => {
  return llamaTokenizer.encode(text);
};
