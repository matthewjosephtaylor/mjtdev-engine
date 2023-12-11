import React, { ReactNode } from "react";
import { WinCtx } from "./WinCtx";
export type GuiCtx = {
    windows: WinCtx[];
};
export type UpdateGuiCtx = React.Dispatch<React.SetStateAction<GuiCtx>>;
export declare const GUI_CTX: React.Context<GuiCtx | undefined>;
export declare const UPDATE_GUI_CTX: React.Context<UpdateGuiCtx | undefined>;
export declare const useGuiCtx: () => GuiCtx | undefined;
export declare const useUpdateGuiCtx: () => UpdateGuiCtx | undefined;
export declare const GuiContextProvider: ({ children, value, }: {
    value: GuiCtx;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GuiContextProvider.d.ts.map