import { Asserts } from "@mjtdev/assert";
import { Point2 } from "@mjtdev/math";
import { GridObject, isGridObject } from "./type/GridObject";
import { GridConfig } from "./type/Grid";
import { isOutsideOf } from "./isOutsideOf";
import { translatePosition } from "./translatePosition";
import { isInsideOf } from "./isInsideOf";

export type Cell = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FullCell<T> = Cell & {
  value: T;
};

const isCell = (maybe: any): maybe is Cell => {
  return (
    typeof maybe === "object" &&
    typeof maybe["x"] === "number" &&
    typeof maybe["y"] === "number" &&
    typeof maybe["width"] === "number" &&
    typeof maybe["height"] === "number"
  );
};

type TypeGuard<T> = (maybe: any) => maybe is T;

const isFullCell = <T>(
  maybe: any,
  isType: TypeGuard<T>
): maybe is FullCell<T> => {
  return isCell(maybe) && isType(maybe);
};

export const columnCount = (grid: GridConfig) => {
  return typeof grid === "number" ? grid : grid.colCount;
};

const indexOf = ({
  x,
  y,
  grid,
}: {
  x: number;
  y: number;
  grid: GridConfig;
}) => {
  const col = colOf({ x, grid: grid });
  if (typeof col === "undefined") {
    return undefined;
  }
  const row = rowOf({ y, grid: grid });
  if (typeof row === "undefined") {
    return undefined;
  }
  const idx = row * columnCount(grid) + col;
  if (idx < 0) {
    return undefined;
  }
  return idx;
};

export const gridToGridObject = (grid: GridConfig): GridObject => {
  if (typeof grid === "number") {
    return {
      colCount: grid,
      cellHeight: 1,
      cellWidth: 1,
    };
  }
  return grid;
};

const colOf = ({ x, grid }: { x: number; grid: GridConfig }) => {
  if (x < 0) {
    return undefined;
  }
  const gridObject = gridToGridObject(grid);
  const { spacing = 0, colCount = 0, cellWidth = 0 } = gridObject;
  const tilesetWidth = (cellWidth + spacing) * colCount;
  return Math.floor((x / tilesetWidth) * colCount);
};

const rowCountOf = ({
  grid,
  cellCount,
}: {
  cellCount: number;
  grid: GridConfig;
}) => {
  const { colCount = 0 } = gridToGridObject(grid);
  return Math.ceil(cellCount / colCount);
};

const rowOf = ({ y, grid }: { y: number; grid: GridConfig }) => {
  if (y < 0) {
    return undefined;
  }
  const gridObject = gridToGridObject(grid);
  const { spacing = 0, cellHeight = 0 } = gridObject;
  const rowHeight = spacing + cellHeight;
  return Math.floor(y / rowHeight);
};

const widthOf = ({ grid }: { grid: GridConfig }) => {
  const { cellWidth = 0, colCount } = gridToGridObject(grid);
  return cellWidth * colCount;
};

const heightOf = ({
  grid,
  cellCount,
}: {
  cellCount: number;
  grid: GridConfig;
}) => {
  const rowCount = rowCountOf({ grid, cellCount });
  const gridObject = gridToGridObject(grid);
  const { cellHeight = 0 } = gridObject;
  return cellHeight * rowCount;
};

const valueAt = <T>({
  x,
  y,
  grid,
  cells,
}: {
  grid: GridConfig;
  x: number;
  y: number;
  cells: T[];
}): T => {
  const idx = indexOf({ x, y, grid });
  return cells[idx];
};

const cellOf = ({
  grid,
  index,
}: {
  index?: number;
  grid: GridConfig;
}): Cell => {
  Asserts.assert(index >= 0, `Index: ${index} MUST be >= 0`);
  const {
    spacing = 0,
    cellWidth = 1,
    cellHeight = 1,
    colCount = 1,
  } = gridToGridObject(grid);
  const fullTileWidth = cellWidth + spacing;
  const fullTileHeight = cellHeight + spacing;
  const column = index % colCount;
  const row = Math.floor(index / colCount);
  const x = column * fullTileWidth;
  const y = row * fullTileHeight;
  return {
    x,
    y,
    width: cellWidth,
    height: cellHeight,
  };
};

const fullCellOf = <T>({
  grid,
  cells,
  index,
}: {
  grid: GridConfig;
  cells: T[];
  index: number;
}): FullCell<T> => {
  const cell = cellOf({ grid, index });
  const value = valueAt({ ...cell, cells, grid });
  return { ...cell, value };
};

const localCenterOf = ({
  grid,
  cellCount,
}: {
  grid: GridConfig;
  cellCount: number;
}) => {
  const width = Grids.widthOf({ grid });
  const height = Grids.heightOf({ grid, cellCount });
  return {
    x: width / 2,
    y: height / 2,
  };
};
const localTopLeftOf = ({
  grid,
  cellCount,
}: {
  grid: GridConfig;
  cellCount: number;
}) => {
  return worldTopLeftOf({ position: [0, 0], cellCount, grid });
};

const worldTopLeftOf = ({
  position,
  grid,
  cellCount,
}: {
  position: Point2;
  grid: GridConfig;
  cellCount: number;
}) => {
  return translatePosition(position, localCenterOf({ grid, cellCount }));
};

const worldCenterOf = ({
  position,
  grid,
  cellCount,
}: {
  position: Point2;

  grid: GridConfig;
  cellCount: number;
}) => {
  return translatePosition(localCenterOf({ grid, cellCount }), position);
};

export const Grids = {
  localTopLeftOf,
  isOutsideOf,
  isInsideOf,
  worldTopLeftOf,
  worldCenterOf,
  localCenterOf,
  cellOf,
  colOf,
  fullCellOf,
  heightOf,
  indexOf,
  isCell,
  isFullCell,
  isGridObject,
  rowOf,
  valueAt,
  widthOf,
  rowCountOf,
};
