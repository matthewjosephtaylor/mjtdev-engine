import { TickToStat } from "./TickToStat";

export type StatUpdater = {
  statName: string;
  tickToStat: TickToStat;
};
