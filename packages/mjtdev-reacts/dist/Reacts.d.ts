import { useClickOutside } from "./hook/useClickOutside";
import { useEventListener } from "./hook/useEventListener";
import useRenderCount from "./hook/useRenderCount";
import { useDropzone } from "react-dropzone";
import { useCustomEventListener } from "./hook/useCustomEventListener";
export * from "./type/ReactTypes";
export * from "./type/MaterialIconCodes";
export declare const Reacts: {
    render: (node: import("react").ReactChild | import("react").ReactNode[], parent?: HTMLElement, container?: HTMLDivElement) => import(".").RenderControl;
    useDropzone: typeof useDropzone;
    toRoutes: (routes: import("./component/type/RouteTable").RouteTable) => import("react").ReactNode[];
    createReactContext: <T extends object>(initial?: T) => import("./createReactContext").ReactContextContainer<T>;
    dispatchCustomEvent: <T>(eventType: string, payload: T, element?: HTMLElement | Document | Window) => void;
    addCustomEventListener: <E extends string = string, T = unknown>(eventType: E, handler: import("./hook/addCustomEventListener").CustomEventHandler<T>, options?: Partial<{
        element: HTMLElement | Document | Window;
        once: boolean;
    }>) => () => void;
    px: (value: number) => string | undefined;
    unPx: (value: string | undefined) => number | undefined;
    useGuiCtx: () => import("./ctx/GuiContextProvider").GuiCtx | undefined;
    useUpdateGuiCtx: () => import("./ctx/GuiContextProvider").UpdateGuiCtx | undefined;
    useClickOutside: typeof useClickOutside;
    useEventListener: typeof useEventListener;
    useRenderCount: typeof useRenderCount;
    useAddToDesk: () => (node: import("react").ReactNode, id?: string) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element;
    useRemoveFromDesk: () => () => void;
    useNav: () => (path: string) => void;
    usePreviousPath: () => any;
    useBringToFront: () => (id?: string | undefined) => void;
    useCustomEventListener: typeof useCustomEventListener;
    useAsyncEffect: (func: () => void | (() => void) | Promise<void | (() => void)>, deps?: import("react").DependencyList, destructor?: () => void) => Promise<void>;
    useIsFocused: () => boolean | undefined;
    useKeyboardListener: (keyActions: import("@mjtdev/input").KeyActions, options?: import("@mjtdev/input").InputListenOptions) => void;
};
//# sourceMappingURL=Reacts.d.ts.map