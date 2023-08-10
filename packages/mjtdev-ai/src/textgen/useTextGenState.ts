import { create } from "zustand";
import { DEFAULT_PROMPT_TEMPLATE } from "./DEFAULT_PROMPT_TEMPLATE";
import { TextGenParams } from "../type/TextGenParams";
import { MonitorFunction } from "../type/MonitorFunction";

export const useTextGenState = create(() => ({
  debug: false,
  promptTemplate: DEFAULT_PROMPT_TEMPLATE,
  baseUrl: "http://localhost:5000",
  // generationUrl: "http://localhost:5000/api/v1/generate",
  // modelUrl: "http://localhost:5000/api/v1/model",
  textgenParams: {} as Partial<TextGenParams>,

  monitor: (() => {}) as MonitorFunction,
}));
