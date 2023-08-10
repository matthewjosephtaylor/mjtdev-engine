import { AnimateState } from "@mjtdev/animate";
export type InputListenOptions = Partial<{
    ratePerSecond: number;
    parent: HTMLElement;
    debug: boolean;
    autoUp: boolean;
    propagate: boolean;
    passive: boolean;
    dropMultiple: boolean;
    animateState: AnimateState;
    keyOptions: Partial<{
        [k in string]: {
            preventDefault: boolean;
        };
    }>;
}>;
//# sourceMappingURL=InputListenOptions.d.ts.map