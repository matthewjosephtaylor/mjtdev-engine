
export function subtract(a: number, b: number): number {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return a - b;
}
