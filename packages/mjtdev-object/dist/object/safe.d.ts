import { ValueProducer } from "./type/Producer";
export declare const safe: <R>(producer: () => R, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: ValueProducer<string>;
}>) => R | undefined;
//# sourceMappingURL=safe.d.ts.map