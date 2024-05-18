import { ReactNode } from "react";
export declare const ArrayToGrid: <T extends string | number | object>({ arr, columns, mapper, }: {
    mapper?: (value: T) => ReactNode;
    arr: T[];
    columns?: number;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ArrayToGrid.d.ts.map