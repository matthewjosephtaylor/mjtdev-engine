export type { ModelInfo } from "../type/ModelInfo";
export declare const TextGens: {
    textgen: (prompt: string, paramOverrides?: Partial<import("..").TextGenParams>) => Promise<string>;
    roleplayAnswer: (params: Partial<import("../chat/RoleplayParams").RoleplayParams>, textGenParams?: Partial<import("..").TextGenParams>) => Promise<string>;
    useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
        debug: boolean;
        characterDescriptions: Record<string, import("..").CharacterDescription>;
        promptTemplate: string;
        roleplayContext: string;
        baseUrl: string;
        textgenParams: Partial<import("..").TextGenParams>;
        roleTemplate: string;
        monitor: import("..").MonitorFunction;
    }>>;
    textToTokens: (text: string) => string[];
    chatHistoryToText: (history: import("..").ChatHistory) => string;
    modelInfo: () => Promise<import("../type/ModelInfo").ModelInfo>;
};
//# sourceMappingURL=TextGens.d.ts.map