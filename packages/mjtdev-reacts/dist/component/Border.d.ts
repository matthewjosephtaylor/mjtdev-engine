import React, { CSSProperties, ReactNode } from "react";
export declare const Border: ({ title, children, style, defaultDisclosed, collapsable, onDiscloserChange, alwaysShowChildren, resizable, onResize, }: {
    onResize?: ((bbox: DOMRect) => void) | undefined;
    resizable?: boolean | undefined;
    defaultDisclosed?: boolean | undefined;
    collapsable?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    title?: ReactNode;
    children?: ReactNode;
    alwaysShowChildren?: boolean | undefined;
    onDiscloserChange?: ((disclosed: boolean) => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Border.d.ts.map