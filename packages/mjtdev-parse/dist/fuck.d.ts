import type { SseConsumer } from "./SseConsumer";
export declare const processSsePartialUntilNoMoreStops: <T>(params: {
    done: boolean;
    partial: string;
    readValue: string;
    reader: ReadableStreamDefaultReader<string>;
    dataParser?: ((data: string) => T | undefined) | undefined;
    consumer: SseConsumer<T>;
}) => Promise<string>;
//# sourceMappingURL=fuck.d.ts.map