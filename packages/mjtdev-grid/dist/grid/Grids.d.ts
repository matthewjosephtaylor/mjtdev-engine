import { Point2 } from "@mjtdev/math";
import { GridObject } from "./type/GridObject";
import { GridConfig } from "./type/Grid";
export type Cell = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type FullCell<T> = Cell & {
    value: T;
};
type TypeGuard<T> = (maybe: any) => maybe is T;
export declare const columnCount: (grid: GridConfig) => number;
export declare const gridToGridObject: (grid: GridConfig) => GridObject;
export declare const Grids: {
    localTopLeftOf: ({ grid, cellCount, }: {
        grid: GridConfig;
        cellCount: number;
    }) => Point2;
    isOutsideOf: ({ position, grid, cellCount, }: {
        cellCount: number;
        position: Point2;
        grid: GridObject;
    }) => boolean;
    isInsideOf: (spec: {
        cellCount: number;
        position: Point2;
        grid: GridObject;
    }) => boolean;
    worldTopLeftOf: ({ position, grid, cellCount, }: {
        position: Point2;
        grid: GridConfig;
        cellCount: number;
    }) => Point2;
    worldCenterOf: ({ position, grid, cellCount, }: {
        position: Point2;
        grid: GridConfig;
        cellCount: number;
    }) => Point2;
    localCenterOf: ({ grid, cellCount, }: {
        grid: GridConfig;
        cellCount: number;
    }) => {
        x: number;
        y: number;
    };
    cellOf: ({ grid, index }: {
        index?: number;
        grid: GridConfig;
    }) => Cell;
    colOf: ({ x, grid }: {
        x: number;
        grid: GridConfig;
    }) => number;
    fullCellOf: <T>({ grid, cells, index, }: {
        grid: GridConfig;
        cells: T[];
        index: number;
    }) => FullCell<T>;
    heightOf: ({ grid, cellCount }: {
        cellCount: number;
        grid: GridConfig;
    }) => number;
    indexOf: ({ x, y, grid }: {
        x: number;
        y: number;
        grid: GridConfig;
    }) => number;
    isCell: (maybe: any) => maybe is Cell;
    isFullCell: <T_1>(maybe: any, isType: TypeGuard<T_1>) => maybe is FullCell<T_1>;
    isGridObject: (maybe: any) => maybe is GridObject;
    rowOf: ({ y, grid }: {
        y: number;
        grid: GridConfig;
    }) => number;
    valueAt: <T_2>({ x, y, grid, cells, }: {
        grid: GridConfig;
        x: number;
        y: number;
        cells: T_2[];
    }) => T_2;
    widthOf: ({ grid }: {
        grid: GridConfig;
    }) => number;
    rowCountOf: ({ grid, cellCount }: {
        cellCount: number;
        grid: GridConfig;
    }) => number;
};
export {};
//# sourceMappingURL=Grids.d.ts.map