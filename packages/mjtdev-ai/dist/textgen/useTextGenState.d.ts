import { TextGenParams } from "../type/TextGenParams";
import { MonitorFunction } from "../type/MonitorFunction";
export declare const useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    debug: boolean;
    promptTemplate: string;
    baseUrl: string;
    textgenParams: Partial<TextGenParams>;
    monitor: MonitorFunction;
}>>;
//# sourceMappingURL=useTextGenState.d.ts.map