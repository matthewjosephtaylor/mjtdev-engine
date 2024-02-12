import { escapeRegExp } from "./escapeRegExp";
export declare const Parsers: {
    createSseParser: <T>({ consumer, reader, onDone, onError, dataParser, signal, }: {
        signal?: AbortSignal | undefined;
        onDone?: (() => void) | undefined;
        onError?: ((err: unknown) => void) | undefined;
        reader: ReadableStreamDefaultReader<string>;
        dataParser?: ((data: string) => T | undefined) | undefined;
        consumer: import("./SseConsumer").SseConsumer<T>;
    }) => Promise<void>;
    detectStop: (text: string | undefined, stopArrayOrString?: string | string[]) => [string | undefined, boolean];
    detectSimpleStop: (text: string | undefined, stops: string[]) => [string | undefined, boolean, number];
    detectStopAfter: (text: string | undefined, stopArrayOrString?: string | string[]) => [string | undefined, boolean];
    escapeRegExp: typeof escapeRegExp;
};
//# sourceMappingURL=Parsers.d.ts.map