import { chatHistoryToText } from "./chatHistoryToText";
import { roleToTemplatedRole } from "./roleToTemplatedRole";
import { textToTokens } from "./textToTokens";
import { textgen } from "./textgen";
import { useTextGenState } from "./useTextGenState";
export const expandRoleplayPrompt = (params) => {
    const { characters, promptTemplate, roleplayContext } = useTextGenState.getState();
    const { prompt, character, summary, history, defaultBio = "" } = params;
    const characterBio = characters[character] || defaultBio;
    const userBio = characters[character] || defaultBio;
    const historyText = chatHistoryToText(history);
    return promptTemplate
        .replace("<prompt>", prompt)
        .replace("<context>", roleplayContext)
        .replaceAll("<character>", character)
        .replaceAll("<user>", character)
        .replace("<character-bio>", characterBio)
        .replace("<user-bio>", userBio)
        .replace("<chat-summary>", summary)
        .replace("<chat-history>", historyText);
};
export const roleplayAnswer = async (params) => {
    const expandedPrompt = expandRoleplayPrompt(params);
    const expandedTokens = textToTokens(expandedPrompt);
    console.log(`tl: ${expandedTokens.length}`);
    const { user, character } = params;
    return textgen(expandedPrompt, {
        stopping_strings: [
            roleToTemplatedRole(user),
            roleToTemplatedRole(character),
        ],
    });
};
//# sourceMappingURL=roleplayAnswer.js.map