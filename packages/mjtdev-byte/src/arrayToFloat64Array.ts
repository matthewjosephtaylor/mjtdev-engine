export const arrayToFloat64Array = (arr: unknown[]): Float64Array => {
  const numbers = arr.flatMap((v) => {
    if (typeof v === "number") {
      return [v];
    }
    return JSON.stringify(v)
      .split("")
      .map((s) => s.codePointAt(0));
  });
  return new Float64Array(numbers.length).map((_, i) => numbers[i]!);
};
