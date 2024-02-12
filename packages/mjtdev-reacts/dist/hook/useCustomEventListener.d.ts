/// <reference types="react" />
export declare function useCustomEventListener<E extends string = string, T = unknown>(eventType: E, action: (e: CustomEvent<T>) => void, options?: Partial<{
    element: HTMLElement | Document | Window;
    deps: React.DependencyList;
}>): void;
//# sourceMappingURL=useCustomEventListener.d.ts.map