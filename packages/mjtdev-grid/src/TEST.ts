import { Grids } from "./grid/Grids";
import { GridObject } from "./grid/type/GridObject";
import { Asserts } from "@mjtdev/assert";

export const TESTS: Function[] = [
  () => {
    const grid: GridObject = {
      colCount: 16,
      cellHeight: 16,
      cellWidth: 16,
      spacing: 0,
    };
    const expected = 15;
    const actual = Grids.rowOf({ y: 255, grid });

    Asserts.assertEqual(expected, actual);
  },
  () => {
    const grid: GridObject = {
      colCount: 16,
      cellHeight: 16,
      cellWidth: 16,
      spacing: 0,
    };

    const expected = 255;
    const actual = Grids.indexOf({ x: 255, y: 255, grid });

    Asserts.assertEqual(expected, actual);
  },
];

// TODO run this only on node, but not in web-workers
// (() => {
//   if (typeof window === "undefined") {
//     TESTS.forEach((t) => t());
//     console.log("%c All Grid tests pass", "color: green");
//   }
// })();
