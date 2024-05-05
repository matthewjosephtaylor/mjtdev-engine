import { ValueProducer } from "./type/Producer";
export declare const safeAsync: <R>(producer: () => Promise<R> | R, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: ValueProducer<string>;
}>) => Promise<R | undefined>;
//# sourceMappingURL=safeAsync.d.ts.map