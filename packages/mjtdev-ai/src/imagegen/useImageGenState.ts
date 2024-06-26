import { create } from "zustand";
import type { MonitorFunction } from "../type/MonitorFunction";

export const useImageGenState = create(() => ({
  automaticBaseUrl: "http://localhost:7968",
  debug: false,
  monitor: (() => {}) as MonitorFunction,
}));
