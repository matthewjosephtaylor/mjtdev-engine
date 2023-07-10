import { chatHistoryToText } from "./chatHistoryToText";
import { roleToTemplatedRole } from "./roleToTemplatedRole";
import { textToTokens } from "../textgen/textToTokens";
import { textgen } from "../textgen/textgen";
import { useTextGenState } from "../textgen/useTextGenState";
export const getCharacterDescription = (character) => {
    const { characterDescriptions } = useTextGenState.getState();
    const desc = characterDescriptions[character];
    if (!desc) {
        return "";
    }
    const { goals, actsLike, biography, looksLike, talksLike } = desc;
    return [
        biography,
        `${character} talks like:`,
        talksLike,
        `${character} looks like:`,
        looksLike,
        `${character} acts like:`,
        actsLike,
        `${character} major goal: ${goals.goal}
---steps to achieve goal---
${goals.details.map((g) => `- ${g}`).join("\n")}
`,
    ].join("\n");
};
export const expandRoleplayPrompt = (params) => {
    const { characterDescriptions, roleplayContext } = useTextGenState.getState();
    const { character, assistantLine = roleToTemplatedRole(character), prompt, summary, history, storyPlot, } = params;
    const characterDescription = getCharacterDescription(character);
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
export const roleplayAnswer = async (params, textGenParams = {}) => {
    const expandedPrompt = expandRoleplayPrompt(params);
    const { debug, characterDescriptions } = useTextGenState.getState();
    if (debug) {
        const expandedTokens = textToTokens(expandedPrompt);
        console.log(`tokens: ${expandedTokens.length}`);
    }
    const { character } = params;
    const stopingStrings = Object.keys(characterDescriptions)
        .map((c) => [roleToTemplatedRole(c), `${c}:`])
        .flat();
    return textgen(expandedPrompt, {
        stopping_strings: [...stopingStrings, "###"],
        ...textGenParams,
    });
};
//# sourceMappingURL=roleplayAnswer.js.map