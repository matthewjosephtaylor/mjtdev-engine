import { Htmls } from "@mjtdev/html";
import { Tick } from "@mjtdev/animate";
import { TickToStat } from "./type/TickToStat";


export const createStatView = ({
  parent, tickToStat, statName,
}: {
  statName: string;
  tickToStat: TickToStat;
  parent: HTMLElement;
}) => {
  const element = Htmls.createElement({
    tagName: "span",
    parent,
    style: {
      padding: "0.5em",
    },
  });
  return ({ tick }: { tick: Tick; }) => {
    const stat = tickToStat(tick);
    if (stat !== undefined) {
      element.textContent = `${statName}:${stat}`;
    }
  };
};
