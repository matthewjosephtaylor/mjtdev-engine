import { Objects } from "./Objects";

export const toMultiMap = <K extends string | number, T>(
  maps: Record<K, T>[],
  options: Partial<{ compact: boolean }> = {}
): Record<K, T[]> => {
  const { compact = false } = options;
  return maps.reduce((acc, cur) => {
    Objects.entries(cur).forEach((entry) => {
      const [k, v] = entry;
      const values: T[] = acc[k] ?? [];
      acc[k] = compact && values.includes(v) ? values : [...values, v];
    });
    return acc;
  }, {} as Record<K, T[]>);
};
