import { toMB } from "./toMB";
export const createStandardStats = () => {
    let deltas = [];
    let costs = [];
    return [
        {
            statName: "fps",
            tickToStat: (tick) => {
                deltas.push(tick.deltaMs);
                const deltaCount = 1000 / tick.tickStepMs;
                if (deltas.length > deltaCount) {
                    const fpsTotal = deltas.reduce((a, b) => a + b, 0);
                    const fps = (1 / (fpsTotal / deltas.length)) * 1000;
                    deltas.length = 0;
                    return fps.toFixed(1);
                }
            },
        },
        {
            statName: "cost",
            tickToStat: (tick) => {
                costs.push(tick.costMs);
                const deltaCount = 1000 / tick.tickStepMs;
                if (costs.length > deltaCount) {
                    const costTotal = costs.reduce((a, b) => a + b, 0);
                    const cost = costTotal / costs.length;
                    costs.length = 0;
                    return cost.toFixed(1).padStart(2, "0");
                }
            },
        },
        {
            statName: "frame",
            tickToStat: (tick) => tick.frameCount.toFixed(0),
        },
        {
            statName: "tick",
            tickToStat: (tick) => tick.tickCount.toFixed(0),
        },
        {
            statName: "delta",
            tickToStat: (tick) => tick.deltaMs.toFixed(0),
        },
        {
            statName: "tickStep",
            tickToStat: (tick) => tick.tickStepMs.toFixed(1),
        },
        {
            statName: "mem",
            tickToStat: (tick) => {
                if (tick.frameCount % 30 === 0) {
                    const memory = performance["memory"];
                    return `${toMB(memory.jsHeapSizeLimit)}/${toMB(memory.totalJSHeapSize)}/${toMB(memory.usedJSHeapSize)}`;
                }
            },
        },
    ];
};
//# sourceMappingURL=createStandardStats.js.map