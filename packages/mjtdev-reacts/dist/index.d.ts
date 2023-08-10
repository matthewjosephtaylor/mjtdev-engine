/// <reference types="react" />
export * from "./component/ArrayToGrid";
export * from "./component/BasicWindow";
export * from "./component/Center";
export * from "./component/Click";
export * from "./component/ControlBar";
export * from "./component/Desk";
export * from "./component/Drag";
export * from "./component/DropTarget";
export * from "./component/Dropzone";
export * from "./component/Error";
export * from "./component/Frag";
export * from "./component/Frame";
export * from "./component/Grid";
export * from "./component/HighlightableIcon";
export * from "./component/Hover";
export * from "./component/Icon";
export * from "./component/ImageDropzone";
export * from "./component/ImageWindow";
export * from "./component/Menu";
export * from "./component/OpenImageWindow";
export * from "./component/RecordToGrid";
export * from "./component/Win";
export * from "./component/TextEdit";
export * from "./component/Form";
export * from "./component/Canvas";
export * from "./Reacts";
export * from "./type/FrameControl";
export * from "./type/FrameControls";
export * from "./type/ReactStateSetter";
export * from "./type/RenderControl";
export * from "./type/RenderGroup";
export * from "./type/RenderState";
export * from "./component/type/CanvasPainter";
export declare const useClickOutside: typeof import("./hook/useClickOutside").useClickOutside, useEventListener: typeof import("./hook/useEventListener").useEventListener, useGuiCtx: () => import("./ctx/GuiContextProvider").GuiCtx, useRenderCount: typeof import("./hook/useRenderCount").default, useUpdateGuiCtx: () => import("./ctx/GuiContextProvider").UpdateGuiCtx, useAddToDesk: () => (node: import("react").ReactNode, id?: string) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element, useRemoveFromDesk: () => () => void, useNav: () => (path: string) => void, usePreviousPath: () => any, useBringToFront: () => (id?: string) => void, useDropzone: typeof import("react-dropzone").useDropzone, useKeyboardListener: (keyActions: import("@mjtdev/input").KeyActions, options?: Partial<{
    ratePerSecond: number;
    parent: HTMLElement;
    debug: boolean;
    autoUp: boolean;
    propagate: boolean;
    passive: boolean;
    dropMultiple: boolean;
    animateState: import("@mjtdev/animate").AnimateState;
    keyOptions: Partial<{
        [x: string]: {
            preventDefault: boolean;
        };
    }>;
}>) => void, useIsFocused: () => boolean, useCustomEventListener: typeof import("./hook/useCustomEventListener").useCustomEventListener, useAsyncEffect: (func: () => void | Promise<void | (() => void)> | (() => void), deps?: import("react").DependencyList, destructor?: () => void) => Promise<void>, dispatchCustomEvent: <T>(eventType: string, payload: T, element?: HTMLElement | Document | Window) => void, px: (value: number) => string, unPx: (value: string) => number;
//# sourceMappingURL=index.d.ts.map