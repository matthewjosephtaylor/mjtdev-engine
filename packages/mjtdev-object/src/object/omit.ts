export const omit = <
  K extends string | number,
  T extends { [k in K]: unknown }
>(
  object: T,
  key: K
): Omit<T, K> => {
  const { [key]: deletedKey, ...rest } = object;
  return rest;
};

export const omitUnsafe = <
  K extends string | number,
  T extends { [k in K]: unknown }
>(
  object: T,
  key: K
): Omit<T, K> => {
  object[key] = undefined;
  return object;
};
