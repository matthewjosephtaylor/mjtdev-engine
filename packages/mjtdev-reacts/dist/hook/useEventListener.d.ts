type CombinedEventMap = HTMLElementEventMap & WindowEventMap & DocumentEventMap;
export declare function useEventListener<K extends keyof CombinedEventMap>(eventType: K, action: (e: CombinedEventMap[K]) => void, element?: HTMLElement | Document | Window | undefined): void;
export {};
//# sourceMappingURL=useEventListener.d.ts.map