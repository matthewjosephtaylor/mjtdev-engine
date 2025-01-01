import type { ReactNode } from "react";
export type MenuItems = MenuItem[];
export type MenuItem = [
    content: ReactNode,
    action: () => void,
    toolTip?: ReactNode
];
export declare const Menu: ({ items, direction, className, }: {
    className?: string | undefined;
    direction?: "row" | "column" | undefined;
    items: MenuItems;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Menu.d.ts.map