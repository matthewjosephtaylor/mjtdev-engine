export function match(s1: string | RegExp, s2: string | RegExp): boolean | undefined {
  if (s1 === s2) {
    return true;
  }
  if (typeof s1 === "string" && s2 instanceof RegExp) {
    return s2.test(s1);
  }
  if (typeof s2 === "string" && s1 instanceof RegExp) {
    return s1.test(s2);
  }
  return undefined;
}
