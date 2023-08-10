import { useTextGenState } from "../textgen/useTextGenState";
export const getCharacterDescriptionContextText = (character) => {
    const { characterDescriptions } = useTextGenState.getState();
    const desc = characterDescriptions[character];
    if (!desc) {
        return "";
    }
    const { relationships, actsLike, biography, looksLike, talksLike } = desc;
    return [
        biography,
        `${character} talks like:`,
        talksLike,
        `${character} looks like:`,
        looksLike,
        `${character} acts like:`,
        actsLike,
        `${character} relationships to other characters:`,
        relationships,
        actsLike,
    ].join("\n");
};
//# sourceMappingURL=getCharacterDescriptionContextText.js.map