export type CustomEventHandler<T> = (event: CustomEvent<T>) => void;
export declare const addCustomEventListener: <E extends string = string, T = unknown>(eventType: E, handler: CustomEventHandler<T>, options?: Partial<{
    element: HTMLElement | Document | Window;
    once: boolean;
}>) => () => void;
//# sourceMappingURL=addCustomEventListener.d.ts.map