export type GridObject = {
  colCount: number;
  cellWidth?: number;
  cellHeight?: number;
  spacing?: number;
};

export type GridColumnCount = number;

export const isGridObject = (maybe: any): maybe is GridObject => {
  return typeof maybe === "object" && typeof maybe["colCount"] === "number";
};
