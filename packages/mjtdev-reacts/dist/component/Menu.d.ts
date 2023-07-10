import { ReactChild } from "react";
import { ReactNode } from "react";
export type MenuItems = MenuItem[];
export type MenuItem = [
    content: ReactNode,
    action: () => void,
    toolTip?: ReactChild
];
export declare const Menu: ({ items, direction, className, }: {
    className?: string;
    direction?: "row" | "column";
    items: MenuItems;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Menu.d.ts.map