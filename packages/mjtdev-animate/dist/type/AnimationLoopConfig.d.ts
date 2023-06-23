import { AnimationRequestFunction } from "./AnimationRequestFunction";
import { Ticker } from "./Ticker";
export type AnimationLoopConfig = {
    ticksPerSecond?: number;
    ticker?: Ticker | Ticker[];
    running?: boolean;
    errorHandler?: (error: unknown) => void;
    request?: AnimationRequestFunction;
};
//# sourceMappingURL=AnimationLoopConfig.d.ts.map