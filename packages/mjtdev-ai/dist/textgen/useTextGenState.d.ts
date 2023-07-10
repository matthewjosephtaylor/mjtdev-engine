import { TextGenParams } from "../type/TextGenParams";
import { CharacterDescription } from "../type/CharacterDescription";
import { MonitorFunction } from "../type/MonitorFunction";
export declare const useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    debug: boolean;
    characterDescriptions: Record<string, CharacterDescription>;
    promptTemplate: string;
    roleplayContext: string;
    baseUrl: string;
    textgenParams: Partial<TextGenParams>;
    roleTemplate: string;
    monitor: MonitorFunction;
}>>;
//# sourceMappingURL=useTextGenState.d.ts.map