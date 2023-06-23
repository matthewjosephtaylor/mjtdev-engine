export type Producer<T> = () => T;
export type ValueProducer<T> = T | Producer<T>;
export declare const isProducer: <T>(valueProducer: ValueProducer<T>) => valueProducer is Producer<T>;
//# sourceMappingURL=Producer.d.ts.map