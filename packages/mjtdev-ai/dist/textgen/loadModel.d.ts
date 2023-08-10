import { ModelInfo } from "../type/ModelInfo";
export declare const loadModel: (modelName: string, options?: Partial<{
    loader: "AutoGPTQ" | "ExLlama" | "ExLlama_HF";
    auto_devices: boolean;
    max_seq_len: number;
    compress_pos_emb: number;
}>) => Promise<ModelInfo>;
//# sourceMappingURL=loadModel.d.ts.map