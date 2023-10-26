import { lineToComponents } from "./lineToComponents";
export const textToReactComponents = (text, actions = {}) => {
    return text
        .split("\n")
        .map((line, i) => lineToComponents({ line, key: i, actions }));
};
//# sourceMappingURL=textToReactComponents.js.map