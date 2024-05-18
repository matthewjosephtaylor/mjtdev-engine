import React, { CSSProperties, ReactNode } from "react";
import { UpdateWinCtx } from "../ctx/UpdateWinCtx";
import { WinCtx } from "../ctx/WinCtx";
import { FrameControls } from "../type/FrameControls";
export declare const WIN_CTX: React.Context<WinCtx | undefined>;
export declare const UPDATE_WIN_CTX: React.Context<UpdateWinCtx | undefined>;
export declare const useWinCtx: () => WinCtx | undefined;
export declare const useUpdateWinCtx: () => UpdateWinCtx | undefined;
export declare const Win: ({ children, style, title, controls, className, clickBringsToFont, resizeable, }: {
    resizeable?: boolean;
    clickBringsToFont?: boolean;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
    title?: string;
    controls?: FrameControls;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Win.d.ts.map