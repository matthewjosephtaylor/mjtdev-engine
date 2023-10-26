export declare const lock: <T>(fn: () => T | Promise<T>, timeoutMs?: number) => T | Promise<T>;
export declare const useLockState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    available: boolean;
}>>;
//# sourceMappingURL=lock.d.ts.map