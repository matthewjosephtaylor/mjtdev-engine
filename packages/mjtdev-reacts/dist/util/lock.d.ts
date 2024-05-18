export type LockFn<T = unknown> = () => Promise<T> | T;
export type LockEntry = {
    fn: LockFn;
    id: string;
};
export declare const useLockState: import("..").State<{
    locks: Record<string, LockEntry[]>;
}>, updateLockState: import("..").StateUpdater<{
    locks: Record<string, LockEntry[]>;
}>, getLockState: import("..").StateGetter<{
    locks: Record<string, LockEntry[]>;
}>;
export declare const lock: <T>(fn: LockFn<T>, options?: Partial<{
    maxCycles: number;
    cycleMs: number;
    name: string;
}>) => Promise<T>;
//# sourceMappingURL=lock.d.ts.map