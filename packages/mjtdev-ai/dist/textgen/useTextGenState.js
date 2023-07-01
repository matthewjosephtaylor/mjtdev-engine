import { create } from "zustand";
import { DEFAULT_PROMPT_TEMPLATE } from "./DEFAULT_PROMPT_TEMPLATE";
import { DEFAULT_ROLEPLAY_CONTEXT } from "./DEFAULT_ROLEPLAY_CONTEXT";
export const useTextGenState = create(() => ({
    characters: {},
    promptTemplate: DEFAULT_PROMPT_TEMPLATE,
    roleplayContext: DEFAULT_ROLEPLAY_CONTEXT,
    generationUrl: "http://localhost:5000/api/v1/generate",
    textgenParams: {},
    roleTemplate: "### <role>: ",
}));
//# sourceMappingURL=useTextGenState.js.map