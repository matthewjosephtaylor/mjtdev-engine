import { Ticker } from "@mjtdev/animate";
import { toMany } from "@mjtdev/object";
import { createStandardStats } from "./createStandardStats";
import { createTickViews } from "./createTickViews";
import { StatUpdater } from "./type/StatUpdater";

export const createTickStatsTicker = ({
  parent,
  statUpdater: statUpdater = [],
}: {
  statUpdater?: StatUpdater | StatUpdater[];
  parent: HTMLElement;
}): Ticker => {
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
