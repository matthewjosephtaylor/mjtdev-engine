export declare const Nlps: {
    levenshteinDistance: (word1: string, word2: string) => number;
    levenshteinConfidence: (word1: string, word2: string) => number;
    valueOfClosestMatch: <K extends string, V>(from: string, possibles: Record<K, V>, options?: Partial<{
        minConfidence: number;
    }>) => [V, number];
    summarizeText: (text: string) => Promise<string>;
};
//# sourceMappingURL=Nlps.d.ts.map