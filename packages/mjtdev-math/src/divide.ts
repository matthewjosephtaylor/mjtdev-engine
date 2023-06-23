
export function divide(a: number, b: number): number {
  if (b === undefined || b === 0) {
    return undefined;
  }
  if (a === undefined) {
    return undefined;
  }
  return a / b;
}
