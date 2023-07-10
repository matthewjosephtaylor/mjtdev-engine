import { StatUpdater } from "./type/StatUpdater";
import { createStatView } from "./createStatView";


export const createTickViews = ({
  parent, statUpdaters,
}: {
  statUpdaters: StatUpdater[];
  parent: HTMLElement;
}) => {
  return statUpdaters.map((updater) => {
    return createStatView({ ...updater, parent });
  });
};
