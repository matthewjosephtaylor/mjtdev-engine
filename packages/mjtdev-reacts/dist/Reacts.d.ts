/// <reference types="react" />
import { useClickOutside } from "./hook/useClickOutside";
import { useEventListener } from "./hook/useEventListener";
import useRenderCount from "./hook/useRenderCount";
import { useDropzone } from "react-dropzone";
import { useCustomEventListener } from "./hook/useCustomEventListener";
export * from "./type/ReactTypes";
export * from "./type/MaterialIconCodes";
export declare const Reacts: {
    render: (node: import("react").ReactNode | import("react").ReactNode[], parent?: HTMLElement, container?: HTMLDivElement) => import(".").RenderControl;
    useDropzone: typeof useDropzone;
    toRoutes: (routes: import("./component/type/RouteTable").RouteTable) => import("react").ReactNode[];
    createReactContext: <T extends object>(initial?: T | undefined) => import("./createReactContext").ReactContextContainer<T>;
    dispatchCustomEvent: <T_1>(eventType: string, payload: T_1, element?: HTMLElement | Document | Window) => void;
    addCustomEventListener: <E extends string = string, T_2 = unknown>(eventType: E, handler: import("./hook/addCustomEventListener").CustomEventHandler<T_2>, options?: Partial<{
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
    useAddToDesk: () => (node: import("react").ReactNode, id?: string) => string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element;
    useRemoveFromDesk: () => () => void;
    useNav: () => (path: string) => void;
    usePreviousPath: () => any;
    useBringToFront: () => (id?: string | undefined) => void;
    useCustomEventListener: typeof useCustomEventListener;
    useAsyncEffect: (func: () => void | Promise<void | (() => void)> | (() => void), deps?: import("react").DependencyList | undefined, destructor?: (() => void) | undefined) => Promise<void>;
    useIsFocused: () => boolean | undefined;
    useKeyboardListener: (keyActions: import("@mjtdev/input").KeyActions, options?: Partial<{
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
    }> | undefined) => void;
};
//# sourceMappingURL=Reacts.d.ts.map