export const set = <
  O extends object,
  K extends keyof O = keyof O,
  V extends O[K] = O[K]
>(
  obj: O,
  key: K,
  value: V
): O & { [k in K]: V } => {
  return { ...obj, ...Object.fromEntries([[key, value]]) };
};

export const setUnsafe = <
  O extends object,
  K extends keyof O = keyof O,
  V extends O[K] = O[K]
>(
  obj: O,
  key: K,
  value: V
): O & { [k in K]: V } => {
  obj[key] = value;
  return obj as O & { [k in K]: V };
};
