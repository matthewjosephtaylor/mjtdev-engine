import { SseConsumer } from "./SseConsumer";
export declare const processSsePartialUntilNoMoreStops: <T>(params: {
    done: boolean;
    input: string;
    reader: ReadableStreamDefaultReader<string>;
    dataParser?: ((data: string) => T | undefined) | undefined;
    consumer: SseConsumer<T>;
}) => Promise<string>;
//# sourceMappingURL=processSsePartialUntilNoMoreStops.d.ts.map