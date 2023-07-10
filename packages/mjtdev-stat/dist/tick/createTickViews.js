import { createStatView } from "./createStatView";
export const createTickViews = ({ parent, statUpdaters, }) => {
    return statUpdaters.map((updater) => {
        return createStatView({ ...updater, parent });
    });
};
//# sourceMappingURL=createTickViews.js.map