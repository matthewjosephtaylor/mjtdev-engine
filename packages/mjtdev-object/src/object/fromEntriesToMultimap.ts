import { isDefined } from "./isDefined";
import { fromEntries } from "./fromEntries";


export const fromEntriesToMultimap = <K extends string | number | symbol, V>(
  entries: [K, V][]
): Record<K, V[]> => {
  const keys = Array.from(new Set(entries.map((e) => e[0])));
  const result = fromEntries(keys.map((k) => [k, [] as V[]]));

  entries.forEach((entry) => {
    const [key, value] = entry;
    if (isDefined(value)) {
      const valueContainer = result[key];
      valueContainer.push(value);
    }
  });
  return result;
};
