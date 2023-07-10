/// <reference types="react" />
import { useClickOutside } from "./hook/useClickOutside";
import { useEventListener } from "./hook/useEventListener";
import useRenderCount from "./hook/useRenderCount";
import { useDropzone } from "react-dropzone";
import { useCustomEventListener } from "./hook/useCustomEventListener";
export * from "./type/ReactTypes";
export * from "./type/MaterialIconCodes";
export declare const Reacts: {
    render: (node: import("react").ReactNode[] | import("react").ReactChild, parent?: HTMLElement, container?: HTMLDivElement) => import(".").RenderControl;
    useDropzone: typeof useDropzone;
    toRoutes: (routes: import("./component/type/RouteTable").RouteTable) => import("react").ReactNode[];
    createReactContext: <T extends object>(initial?: T) => import("./createReactContext").ReactContextContainer<T>;
    dispatchCustomEvent: <T_1>(eventType: string, payload: T_1, element?: HTMLElement | Document | Window) => void;
    addCustomEventListener: <E extends string = string, T_2 = unknown>(eventType: E, handler: import("./hook/addCustomEventListener").CustomEventHandler<T_2>, options?: Partial<{
        element: HTMLElement | Document | Window;
        once: boolean;
    }>) => () => void;
    px: (value: number) => string;
    unPx: (value: string) => number;
    useGuiCtx: () => import("./ctx/GuiContextProvider").GuiCtx;
    useUpdateGuiCtx: () => import("./ctx/GuiContextProvider").UpdateGuiCtx;
    useClickOutside: typeof useClickOutside;
    useEventListener: typeof useEventListener;
    useRenderCount: typeof useRenderCount;
    useAddToDesk: () => (node: import("react").ReactNode, id?: string) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element;
    useRemoveFromDesk: () => () => void;
    useNav: () => (path: string) => void;
    usePreviousPath: () => any;
    useBringToFront: () => (id?: string) => void;
    useCustomEventListener: typeof useCustomEventListener;
    useAsyncEffect: (func: () => void | Promise<void | (() => void)> | (() => void), deps?: import("react").DependencyList, destructor?: () => void) => Promise<void>;
    useIsFocused: () => boolean;
    useKeyboardListener: (keyActions: import("@mjtdev/input").KeyActions, options?: Partial<{
        ratePerSecond: number;
        parent: HTMLElement;
        debug: boolean;
        autoUp: boolean;
        signal: AbortSignal;
        propagate: boolean;
        passive: boolean;
        dropMultiple: boolean;
        animateState: import("@mjtdev/animate").AnimateState;
    }>) => void;
};
//# sourceMappingURL=Reacts.d.ts.map