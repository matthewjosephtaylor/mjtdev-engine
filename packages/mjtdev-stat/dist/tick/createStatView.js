import { Htmls } from "@mjtdev/html";
export const createStatView = ({ parent, tickToStat, statName, }) => {
    const element = Htmls.createElement({
        tagName: "span",
        parent,
        style: {
            padding: "0.5em",
        },
    });
    return ({ tick }) => {
        const stat = tickToStat(tick);
        if (stat !== undefined) {
            element.textContent = `${statName}:${stat}`;
        }
    };
};
//# sourceMappingURL=createStatView.js.map