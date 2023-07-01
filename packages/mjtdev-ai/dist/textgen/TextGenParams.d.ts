export type TextGenParams = {
    prompt: string;
    max_new_tokens: number;
    add_bos_token: boolean;
    skip_special_tokens: boolean;
    seed: number;
    stopping_strings: string[];
    preset: "None" | string;
    temperature: number;
};
//# sourceMappingURL=TextGenParams.d.ts.map