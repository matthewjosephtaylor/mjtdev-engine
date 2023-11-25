import { Nlps } from "./Nlps";

export const valueOfClosestMatch = <K extends string, V>(
  from: string,
  possibles: Record<K, V>,
  options: Partial<{ minConfidence: number }> = { minConfidence: 0.8 }
): [V, number] => {
  const { minConfidence } = options;
  const needles = Object.entries(possibles)
    .map((possible) => {
      const [possibleKey = "", possibleValue = ""] = possible;
      const [distance, matchConfidence] = Nlps.levenshteinDistance(
        from,
        possibleKey
      );
      return [possibleValue, matchConfidence] as [V, number];
    })
    .filter((mp) => mp[1] >= minConfidence)
    .sort((a, b) => b[1] - a[1]);

  return needles[0];
};
