import { lineToComponents } from "./lineToComponents";

export const textToReactComponents = (
  text: string,
  actions: Record<string, () => void> = {}
) => {
  return text
    .split("\n")
    .map((line, i) => lineToComponents({ line, key: i, actions }));
};
