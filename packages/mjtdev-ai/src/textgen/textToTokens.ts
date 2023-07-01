import llamaTokenizer from "llama-tokenizer-js";


export const textToTokens = (text: string): string[] => {
  return llamaTokenizer.encode(text);
};
