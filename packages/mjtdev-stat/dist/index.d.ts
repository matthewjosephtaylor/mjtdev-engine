export * from "./sample/Samples";
export * from "./stat/Stats";
export * from "./type/ClearWhen";
export * from "./type/PerformanceMemory";
export * from "./sample/type/Sample";
export * from "./performance/memoryUsedMb";
export * from "./performance/Performances";
export * from "./tick/TickStats";
export * from "./tick/type/StatUpdater";
export * from "./tick/type/TickToStat";
export declare const time: <T>(name: string, f: () => T, options?: Partial<{
    maxSamples: number;
}>) => T;
//# sourceMappingURL=index.d.ts.map