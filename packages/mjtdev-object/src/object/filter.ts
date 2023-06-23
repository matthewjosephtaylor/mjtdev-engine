export const filter = <O extends object, K extends keyof O, V extends O[K]>(
  obj: O,
  predicate: (key: K, value: V) => boolean
): [K, V][] => {
  return Object.entries(obj).filter((entry) => {
    const [k, v] = entry as [K, V];
    return predicate(k, v);
  }) as [K, V][];
};
