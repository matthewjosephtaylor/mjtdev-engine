export declare const lock: <T>(fn: () => T | Promise<T>, options?: Partial<{
    maxCycles: number;
    cycleMs: number;
    name: string;
}>) => T | Promise<T>;
export declare const useLockState: import("..").State<{
    locks: Record<string, number>;
}>, updateLockState: import("..").StateUpdater<{
    locks: Record<string, number>;
}>, getLockState: import("..").StateGetter<{
    locks: Record<string, number>;
}>;
//# sourceMappingURL=lock.d.ts.map