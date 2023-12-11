export declare const Parsers: {
    createSseParser: <T>({ consumer, reader, onDone, dataParser, }: {
        onDone?: (() => void) | undefined;
        reader: ReadableStreamDefaultReader<string>;
        dataParser: (data: string) => T | undefined;
        consumer: (value: T | undefined, done: boolean) => boolean | void | undefined;
    }) => Promise<void>;
};
//# sourceMappingURL=Parsers.d.ts.map