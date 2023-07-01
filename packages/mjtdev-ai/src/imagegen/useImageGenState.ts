import { create } from "zustand";

export const useImageGenState = create(() => ({
  automaticBaseUrl: "http://localhost:7968",
}));
