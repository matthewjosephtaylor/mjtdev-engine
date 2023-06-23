import { entries } from "./entries";

export const mapOf = <K extends string | number | symbol, V, R>(
  obj: Record<K, V>,
  mapper: (key: K, value: V) => R
) => {
  return entries(obj).map((entry) => {
    const [key, value] = entry;
    return mapper(key, value);
  });
};
