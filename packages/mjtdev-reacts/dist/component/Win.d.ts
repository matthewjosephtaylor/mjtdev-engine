import React, { CSSProperties, ReactNode } from "react";
import { UpdateWinCtx } from "../ctx/UpdateWinCtx";
import { WinCtx } from "../ctx/WinCtx";
import { FrameControls } from "../type/FrameControls";
export declare const WIN_CTX: React.Context<WinCtx | undefined>;
export declare const UPDATE_WIN_CTX: React.Context<UpdateWinCtx | undefined>;
export declare const useWinCtx: () => WinCtx | undefined;
export declare const useUpdateWinCtx: () => UpdateWinCtx | undefined;
export declare const Win: ({ children, style, title, controls, className, clickBringsToFont, resizeable, }: {
    resizeable?: boolean | undefined;
    clickBringsToFont?: boolean | undefined;
    className?: string | undefined;
    children?: ReactNode;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    controls?: FrameControls | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Win.d.ts.map