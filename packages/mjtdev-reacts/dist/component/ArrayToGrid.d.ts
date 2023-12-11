import { ReactNode } from "react";
export declare const ArrayToGrid: <T extends string | number | object>({ arr, columns, mapper, }: {
    mapper?: ((value: T) => ReactNode) | undefined;
    arr: T[];
    columns?: number | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ArrayToGrid.d.ts.map