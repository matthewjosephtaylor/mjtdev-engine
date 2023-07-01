export declare const TextGens: {
    textgen: (prompt: string, paramOverrides?: Partial<import("./TextGenParams").TextGenParams>) => Promise<string>;
    roleplayAnswer: (params: Partial<import("./roleplayAnswer").RoleplayParams>) => Promise<string>;
    useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
        characters: Record<string, string>;
        promptTemplate: string;
        roleplayContext: string;
        generationUrl: string;
        textgenParams: import("./TextGenParams").TextGenParams;
        roleTemplate: string;
    }>>;
    textToTokens: (text: string) => string[];
    chatHistoryToText: (history: import("./ChatHistory").ChatHistory) => string;
};
//# sourceMappingURL=TextGens.d.ts.map