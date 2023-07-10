export declare function useCustomEventListener<E extends string = string, T = unknown>(eventType: E, action: (e: CustomEvent<T>) => void, options?: {
    element: HTMLElement | Document | Window;
    once: boolean;
}): void;
//# sourceMappingURL=useCustomEventListener.d.ts.map