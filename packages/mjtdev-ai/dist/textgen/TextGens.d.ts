export type { ModelInfo } from "../type/ModelInfo";
export declare const TextGens: {
    textgen: (prompt: string, paramOverrides?: Partial<import("..").TextGenParams>) => Promise<string>;
    useTextGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
        debug: boolean;
        promptTemplate: string;
        baseUrl: string;
        textgenParams: Partial<import("..").TextGenParams>;
        monitor: import("..").MonitorFunction;
    }>>;
    textToTokens: (text: string) => number[];
    modelInfo: () => Promise<import("../type/ModelInfo").ModelInfo> | undefined;
    loadModel: (modelName: string, options?: Partial<{
        loader: "AutoGPTQ" | "ExLlama" | "ExLlama_HF";
        auto_devices: boolean;
        max_seq_len: number;
        compress_pos_emb: number;
    }>) => Promise<import("../type/ModelInfo").ModelInfo> | undefined;
    extractMarkdownText: (markdown: string, type?: string) => string;
};
//# sourceMappingURL=TextGens.d.ts.map