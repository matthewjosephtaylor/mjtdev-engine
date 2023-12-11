import React from "react";
import { ReactNode } from "react";
import { RouteTable } from "./type/RouteTable";
export type DeskCtx = {
    nodes: IdNode[];
};
export type IdNode = [string, ReactNode];
export declare const useDesk: () => DeskCtx | undefined;
export declare const useUpdateDesk: () => React.Dispatch<React.SetStateAction<DeskCtx>> | undefined;
export declare const Desk: ({ children, routeTable, initialPath, index, }: {
    initialPath?: string | undefined;
    children?: ReactNode;
    routeTable?: RouteTable | undefined;
    index?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Desk.d.ts.map