import { create } from "zustand";
import { DEFAULT_PROMPT_TEMPLATE } from "./DEFAULT_PROMPT_TEMPLATE";
import { DEFAULT_ROLEPLAY_CONTEXT } from "../chat/DEFAULT_ROLEPLAY_CONTEXT";
export const useTextGenState = create(() => ({
    debug: false,
    characterDescriptions: {},
    promptTemplate: DEFAULT_PROMPT_TEMPLATE,
    roleplayContext: DEFAULT_ROLEPLAY_CONTEXT,
    baseUrl: "http://localhost:5000",
    // generationUrl: "http://localhost:5000/api/v1/generate",
    // modelUrl: "http://localhost:5000/api/v1/model",
    textgenParams: {},
    roleTemplate: "### <role>: ",
    monitor: (() => { }),
}));
//# sourceMappingURL=useTextGenState.js.map