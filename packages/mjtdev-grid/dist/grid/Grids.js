import { Asserts } from "@mjtdev/assert";
import { isGridObject } from "./type/GridObject";
import { isOutsideOf } from "./isOutsideOf";
import { translatePosition } from "./translatePosition";
import { isInsideOf } from "./isInsideOf";
const isCell = (maybe) => {
    return (typeof maybe === "object" &&
        typeof maybe["x"] === "number" &&
        typeof maybe["y"] === "number" &&
        typeof maybe["width"] === "number" &&
        typeof maybe["height"] === "number");
};
const isFullCell = (maybe, isType) => {
    return isCell(maybe) && isType(maybe);
};
export const columnCount = (grid) => {
    return typeof grid === "number" ? grid : grid.colCount;
};
const indexOf = ({ x, y, grid }) => {
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
export const gridToGridObject = (grid) => {
    if (typeof grid === "number") {
        return {
            colCount: grid,
            cellHeight: 1,
            cellWidth: 1,
        };
    }
    return grid;
};
const colOf = ({ x, grid }) => {
    if (x < 0) {
        return undefined;
    }
    const gridObject = gridToGridObject(grid);
    const { spacing = 0, colCount = 0, cellWidth = 0 } = gridObject;
    const tilesetWidth = (cellWidth + spacing) * colCount;
    return Math.floor((x / tilesetWidth) * colCount);
};
const rowCountOf = ({ grid, cellCount }) => {
    const { colCount = 0 } = gridToGridObject(grid);
    return Math.ceil(cellCount / colCount);
};
const rowOf = ({ y, grid }) => {
    if (y < 0) {
        return undefined;
    }
    const gridObject = gridToGridObject(grid);
    const { spacing = 0, cellHeight = 0 } = gridObject;
    const rowHeight = spacing + cellHeight;
    return Math.floor(y / rowHeight);
};
const widthOf = ({ grid }) => {
    const { cellWidth, colCount } = gridToGridObject(grid);
    return cellWidth * colCount;
};
const heightOf = ({ grid, cellCount }) => {
    const rowCount = rowCountOf({ grid, cellCount });
    const gridObject = gridToGridObject(grid);
    const { cellHeight = 0 } = gridObject;
    return cellHeight * rowCount;
};
const valueAt = ({ x, y, grid, cells, }) => {
    const idx = indexOf({ x, y, grid });
    return cells[idx];
};
const cellOf = ({ grid, index }) => {
    Asserts.assert(index >= 0, `Index: ${index} MUST be >= 0`);
    const { spacing = 0, cellWidth = 1, cellHeight = 1, colCount = 1, } = gridToGridObject(grid);
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
const fullCellOf = ({ grid, cells, index, }) => {
    const cell = cellOf({ grid, index });
    const value = valueAt({ ...cell, cells, grid });
    return { ...cell, value };
};
const localCenterOf = ({ grid, cellCount, }) => {
    const width = Grids.widthOf({ grid });
    const height = Grids.heightOf({ grid, cellCount });
    return {
        x: width / 2,
        y: height / 2,
    };
};
const localTopLeftOf = ({ grid, cellCount, }) => {
    return worldTopLeftOf({ position: [0, 0], cellCount, grid });
};
const worldTopLeftOf = ({ position, grid, cellCount, }) => {
    return translatePosition(position, localCenterOf({ grid, cellCount }));
};
const worldCenterOf = ({ position, grid, cellCount, }) => {
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
//# sourceMappingURL=Grids.js.map