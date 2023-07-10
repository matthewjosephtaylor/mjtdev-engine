import { StatUpdater } from "./type/StatUpdater";
export declare const createTickViews: ({ parent, statUpdaters, }: {
    statUpdaters: StatUpdater[];
    parent: HTMLElement;
}) => (({ tick }: {
    tick: import("@mjtdev/animate").Tick;
}) => void)[];
//# sourceMappingURL=createTickViews.d.ts.map