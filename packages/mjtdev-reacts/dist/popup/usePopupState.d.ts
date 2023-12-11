import { ReactNode } from "react";
export type PopupState = {
    content: ReactNode;
    x: number;
    y: number;
    moveEnabled: boolean;
    visible: boolean;
    offsetX: number;
    offsetY: number;
    showFrame: boolean;
};
export declare const usePopupState: import("..").State<{
    popups: Record<string, Partial<PopupState>>;
    x: number;
    y: number;
}>, updatePopupState: import("..").StateUpdater<{
    popups: Record<string, Partial<PopupState>>;
    x: number;
    y: number;
}>, getPopupState: import("..").StateGetter<{
    popups: Record<string, Partial<PopupState>>;
    x: number;
    y: number;
}>;
//# sourceMappingURL=usePopupState.d.ts.map