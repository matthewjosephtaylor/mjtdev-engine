import { chatHistoryToText } from "./chatHistoryToText";
import { roleplayAnswer } from "./roleplayAnswer";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { useTextGenState } from "./useTextGenState";

export const TextGens = {
  textgen,
  roleplayAnswer,
  useTextGenState,
  textToTokens,
  chatHistoryToText,
};
