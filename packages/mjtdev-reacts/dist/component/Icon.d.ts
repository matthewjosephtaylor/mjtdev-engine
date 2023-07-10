import React from "react";
import { MaterialIconCodes } from "../type/MaterialIconCodes";
import { ReactCssProperties } from "../type/ReactTypes";
/** requires material-icon 'google' font
 *
 *  @import url(https://fonts.googleapis.com/css2?family=Material+Icons);
 */
export declare const Icon: ({ children, style, onClick, code, }: {
    code?: keyof MaterialIconCodes;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    children?: keyof MaterialIconCodes;
    style?: ReactCssProperties;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Icon.d.ts.map