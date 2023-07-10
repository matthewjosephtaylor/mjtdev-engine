import { chatHistoryToText } from "../chat/chatHistoryToText";
import { roleplayAnswer } from "../chat/roleplayAnswer";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { modelInfo } from "./modelInfo";
import { useTextGenState } from "./useTextGenState";
export const TextGens = {
    textgen,
    roleplayAnswer,
    useTextGenState,
    textToTokens,
    chatHistoryToText,
    modelInfo,
};
//# sourceMappingURL=TextGens.js.map