import { ValueProducer } from "./type/Producer";
export declare const safeAsync: <R>(producer: () => R | Promise<R>, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: ValueProducer<string>;
}>) => Promise<R>;
//# sourceMappingURL=safeAsync.d.ts.map