import { toMany } from "@mjtdev/object";
import { createStandardStats } from "./createStandardStats";
import { createTickViews } from "./createTickViews";
export const createTickStatsTicker = ({ parent, statUpdater: statUpdater = [], }) => {
    const tickViews = createTickViews({
        parent,
        statUpdaters: [...toMany(statUpdater), ...createStandardStats()],
    });
    const statViews = [...tickViews];
    return (tick) => {
        statViews.forEach((sv) => {
            sv({ tick });
        });
    };
};
//# sourceMappingURL=createTickStatsTicker.js.map