import { loadModel } from "./loadModel";
import { modelInfo } from "./modelInfo";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { useTextGenState } from "./useTextGenState";

export type { ModelInfo } from "../type/ModelInfo";
export const TextGens = {
  textgen,
  useTextGenState,
  textToTokens,
  modelInfo,
  loadModel,
};
