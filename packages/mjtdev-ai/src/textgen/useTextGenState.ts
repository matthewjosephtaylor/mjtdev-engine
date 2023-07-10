import { create } from "zustand";
import { DEFAULT_PROMPT_TEMPLATE } from "./DEFAULT_PROMPT_TEMPLATE";
import { TextGenParams } from "../type/TextGenParams";
import { DEFAULT_ROLEPLAY_CONTEXT } from "../chat/DEFAULT_ROLEPLAY_CONTEXT";
import { CharacterDescription } from "../type/CharacterDescription";
import { MonitorFunction } from "../type/MonitorFunction";

export const useTextGenState = create(() => ({
  debug: false,
  characterDescriptions: {} as Record<string, CharacterDescription>,
  promptTemplate: DEFAULT_PROMPT_TEMPLATE,
  roleplayContext: DEFAULT_ROLEPLAY_CONTEXT,
  baseUrl: "http://localhost:5000",
  // generationUrl: "http://localhost:5000/api/v1/generate",
  // modelUrl: "http://localhost:5000/api/v1/model",
  textgenParams: {} as Partial<TextGenParams>,
  roleTemplate: "### <role>: ",

  monitor: (() => {}) as MonitorFunction,
}));
