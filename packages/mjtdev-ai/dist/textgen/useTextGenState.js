import { create } from "zustand";
import { DEFAULT_PROMPT_TEMPLATE } from "./DEFAULT_PROMPT_TEMPLATE";
export const useTextGenState = create(() => ({
    debug: false,
    promptTemplate: DEFAULT_PROMPT_TEMPLATE,
    baseUrl: "http://localhost:5000",
    // generationUrl: "http://localhost:5000/api/v1/generate",
    // modelUrl: "http://localhost:5000/api/v1/model",
    textgenParams: {},
    roleTemplate: "### <role>: ",
    monitor: (() => { }),
}));
//# sourceMappingURL=useTextGenState.js.map