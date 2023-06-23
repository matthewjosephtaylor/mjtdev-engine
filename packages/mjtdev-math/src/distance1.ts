import { length1 } from "./length1";
import { subtract1 } from "./subtract1";
import { Point1 } from "./type/Point";


export function distance1(a: Point1, b: Point1): number {
  return length1(subtract1(a, b));
}
