export const from = <T>(
  value: number | ArrayLike<T> | Iterable<T> = 0
): T[] => {
  if (typeof value === "number") {
    return Array.from({ length: value });
  }
  return Array.from(value);
};

export const Arrays = {
  from,
};
