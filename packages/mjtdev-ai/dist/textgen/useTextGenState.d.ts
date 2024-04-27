import type { TextGenParams } from "../type/TextGenParams";
import type { MonitorFunction } from "../type/MonitorFunction";
export declare const useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    debug: boolean;
    promptTemplate: string;
    baseUrl: string;
    textgenParams: Partial<TextGenParams>;
    monitor: MonitorFunction;
}>>;
//# sourceMappingURL=useTextGenState.d.ts.map