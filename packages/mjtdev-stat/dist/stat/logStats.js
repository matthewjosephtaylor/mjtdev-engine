import { Objects } from "@mjtdev/object";
import { Stats } from "./Stats";
export const logStats = (log = console.log) => {
    const names = Stats.names();
    const stats = names
        .map((name) => ({
        name,
        count: Stats.count(name).toFixed(0),
        avg: Stats.avg(name).toFixed(3),
        sum: Stats.sum(name).toFixed(3),
    }))
        .sort((a, b) => Number(b.sum) - Number(a.sum));
    const maxLengths = stats.reduce((acc, cur) => {
        Objects.entries(cur).forEach((entry) => {
            const [k, v] = entry;
            const l = acc[k] ?? 0;
            acc[k] = Math.max(l, v.length);
        });
        return acc;
    }, {});
    const fixed = (value, key) => {
        const maxLength = maxLengths[key];
        return value.padEnd(maxLength);
    };
    stats.forEach((stat) => {
        const { name, count, avg, sum } = stat;
        log(`${fixed(name, "name")} sum: ${fixed(sum, "sum")} avg:${fixed(avg, "avg")} count:${fixed(count, "count")}`);
    });
};
//# sourceMappingURL=logStats.js.map