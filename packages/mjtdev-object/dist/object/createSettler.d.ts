export declare const createSettler: <T>({ settleAction, settledAfterMs, }: {
    settledAfterMs: number;
    settleAction: (value: T) => unknown;
}) => {
    update: (value: T) => void;
};
//# sourceMappingURL=createSettler.d.ts.map