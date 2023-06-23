import { length } from "./length";
import { subtract } from "./subtract";

export function distance(a: number, b: number): number {
  return length(subtract(a, b));
}
