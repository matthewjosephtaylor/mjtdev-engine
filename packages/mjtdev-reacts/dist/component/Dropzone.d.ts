import { CSSProperties } from "react";
import { MaterialIconCodes } from "../type/MaterialIconCodes";
export declare function Dropzone({ action, iconCode, iconSize, highlightedIconCode, activeText, inactiveText, style, }: {
    style?: CSSProperties;
    action: (files: File[]) => void;
    iconCode?: keyof MaterialIconCodes;
    highlightedIconCode?: keyof MaterialIconCodes;
    iconSize?: string;
    activeText?: string;
    inactiveText?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Dropzone.d.ts.map