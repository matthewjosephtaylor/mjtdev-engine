import { extractMarkdownText } from "./extractMarkdownText";
import { getModelInfo } from "./getModelInfo";
import { loadModel } from "./loadModel";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { useTextGenState } from "./useTextGenState";

export type { ModelInfo } from "../type/ModelInfo";

export const TextGens = {
  textgen,
  useTextGenState,
  textToTokens,
  modelInfo: getModelInfo,
  loadModel,
  extractMarkdownText,
};
