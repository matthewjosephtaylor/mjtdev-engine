import { Nlps } from "./Nlps";
export const valueOfClosestMatch = (from, possibles, options = { minConfidence: 0.8 }) => {
    const { minConfidence } = options;
    const needles = Object.entries(possibles)
        .map((possible) => {
        const [possibleKey = "", possibleValue = ""] = possible;
        const matchConfidence = Nlps.levenshteinConfidence(from, possibleKey);
        return [possibleValue, matchConfidence];
    })
        .filter((mp) => mp[1] >= minConfidence)
        .sort((a, b) => b[1] - a[1]);
    return needles[0];
};
//# sourceMappingURL=valueOfClosestMatch.js.map