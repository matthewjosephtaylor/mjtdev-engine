export declare const createSseParser: <T>({ consumer, reader, onDone, dataParser, }: {
    onDone?: (() => void) | undefined;
    reader: ReadableStreamDefaultReader<string>;
    dataParser: (data: string) => T | undefined;
    consumer: (value: T | undefined, done: boolean) => boolean | undefined | void;
}) => Promise<void>;
//# sourceMappingURL=createSseParser.d.ts.map