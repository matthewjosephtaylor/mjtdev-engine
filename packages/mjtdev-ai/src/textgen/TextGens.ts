import { chatHistoryToText } from "../chat/chatHistoryToText";
import { roleplayAnswer } from "../chat/roleplayAnswer";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { modelInfo } from "./modelInfo";
import { useTextGenState } from "./useTextGenState";

export type { ModelInfo } from "../type/ModelInfo";
export const TextGens = {
  textgen,
  roleplayAnswer,
  useTextGenState,
  textToTokens,
  chatHistoryToText,
  modelInfo,
};
