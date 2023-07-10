import { roleToTemplatedRole } from "./roleToTemplatedRole";
import { textToTokens } from "../textgen/textToTokens";
import { textgen } from "../textgen/textgen";
import { useTextGenState } from "../textgen/useTextGenState";
import { expandRoleplayPrompt } from "./expandRoleplayPrompt";
export const roleplayAnswer = async (params, textGenParams = {}) => {
    const expandedPrompt = expandRoleplayPrompt(params);
    const { debug, characterDescriptions } = useTextGenState.getState();
    if (debug) {
        const expandedTokens = textToTokens(expandedPrompt);
        console.log(`tokens: ${expandedTokens.length}`);
    }
    const stopingStrings = Object.keys(characterDescriptions)
        .map((c) => [roleToTemplatedRole(c), `${c}:`])
        .flat();
    return textgen(expandedPrompt, {
        stopping_strings: [...stopingStrings, "###"],
        ...textGenParams,
    });
};
//# sourceMappingURL=roleplayAnswer.js.map