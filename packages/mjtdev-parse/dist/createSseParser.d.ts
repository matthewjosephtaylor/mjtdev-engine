import { SseConsumer } from "./SseConsumer";
export declare const createSseParser: <T>({ consumer, reader, onDone, dataParser, signal, }: {
    signal?: AbortSignal | undefined;
    onDone?: (() => void) | undefined;
    reader: ReadableStreamDefaultReader<string>;
    dataParser?: ((data: string) => T | undefined) | undefined;
    consumer: SseConsumer<T>;
}) => Promise<void>;
//# sourceMappingURL=createSseParser.d.ts.map