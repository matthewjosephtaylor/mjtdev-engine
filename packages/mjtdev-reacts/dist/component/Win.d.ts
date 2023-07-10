import React, { ReactNode } from "react";
import { UpdateWinCtx } from "../ctx/UpdateWinCtx";
import { WinCtx } from "../ctx/WinCtx";
import { FrameControls } from "../type/FrameControls";
export declare const WIN_CTX: React.Context<WinCtx>;
export declare const UPDATE_WIN_CTX: React.Context<UpdateWinCtx>;
export declare const useWinCtx: () => WinCtx;
export declare const useUpdateWinCtx: () => UpdateWinCtx;
export declare const Win: ({ children, style, title, controls, className, clickBringsToFont, resizeable, }: {
    resizeable?: boolean;
    clickBringsToFont?: boolean;
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
    title?: string;
    controls?: FrameControls;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Win.d.ts.map