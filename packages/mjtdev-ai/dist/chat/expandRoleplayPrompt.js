import { chatHistoryToText } from "./chatHistoryToText";
import { roleToTemplatedRole } from "./roleToTemplatedRole";
import { useTextGenState } from "../textgen/useTextGenState";
import { getCharacterDescriptionContextText } from "./getCharacterDescriptionContextText";
export const expandRoleplayPrompt = (params) => {
    const { characterDescriptions, roleplayContext } = useTextGenState.getState();
    const { character, assistantLine = roleToTemplatedRole(character), prompt, summary, history, storyPlot, } = params;
    const characterDescription = getCharacterDescriptionContextText(character);
    const historyText = chatHistoryToText(history);
    const context = roleplayContext
        .replace("<prompt>", prompt)
        .replace("<context>", roleplayContext)
        .replaceAll("<character>", character)
        .replace("<character-description>", characterDescription.trim().length > 0
        ? `${character}'s biography:\n${characterDescription}`
        : "")
        .replace("<chat-summary>", summary)
        .replace("<story-plot>", storyPlot)
        .replace("<chat-history>", historyText.trim().length > 0
        ? `The conversation continues.\n${historyText}`
        : "");
    return `${context}\n${assistantLine}`;
};
//# sourceMappingURL=expandRoleplayPrompt.js.map