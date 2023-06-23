export const fromEntries = <K extends string | number | symbol, V>(
  entries: readonly (readonly [K, V])[]
): Record<K, V> => {
  return Object.fromEntries(entries) as { [k in K]: V };
};
