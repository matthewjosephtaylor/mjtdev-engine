import { STATS } from "./constant/STATS";
import { iff, isDefined, isUndefined, last } from "@mjtdev/object";
import { logStats } from "./logStats";
const set = (name, value) => {
    clear(name);
    return pushPopName(name, () => add(value));
};
const sumAdd = (name, value) => {
    const s = sum(name);
    set(name, s + value);
};
const sumSubtract = (name, value) => {
    const s = sum(name);
    set(name, s - value);
};
const add = (value, options = {}) => {
    const { maxSamples } = options;
    const name = [...NAME_STACK].join("->");
    let stat = get(name);
    if (stat === undefined) {
        stat = {
            name,
            values: [value],
            count: 1,
            maxSamples,
        };
        STATS.push(stat);
        return;
    }
    stat.values.push(value);
    stat.count += 1;
    if (isDefined(stat.maxSamples)) {
        stat.values.length = stat.maxSamples;
    }
};
// const map = (name: string, mapper: (stat: Stat) => Stat) => {
//   const stat = get(name);
//   if (stat === undefined) {
//     return;
//   }
//   mapper({ ...stat });
// };
const names = () => {
    return STATS.map((s) => s.name);
};
const NAME_STACK = [];
export const pushName = (name) => {
    if (last(NAME_STACK) === name) {
        return false;
    }
    NAME_STACK.push(name);
    return true;
};
export const popName = () => {
    NAME_STACK.pop();
};
export const pushPopName = (name, producer) => {
    const pushedNewName = pushName(name);
    const result = producer();
    if (pushedNewName) {
        popName();
    }
    return result;
};
const time = (name, f, options = {}) => {
    if (!ENABLED) {
        return f();
    }
    return pushPopName(name, () => {
        const begin = performance.now();
        const result = f();
        const end = performance.now();
        add(end - begin, options);
        return result;
    });
};
const get = (name) => {
    return STATS.find((s) => s.name === name);
};
const clear = (name) => {
    if (isUndefined(name)) {
        STATS.length = 0;
    }
    const stat = get(name);
    if (stat !== undefined) {
        stat.values.length = 0;
    }
};
const avg = (name) => {
    const stat = get(name);
    if (stat === undefined) {
        return undefined;
    }
    const { values } = stat;
    const length = values.length;
    if (length === 0) {
        return 0;
    }
    return values.reduce((a, b) => a + b, 0) / length;
};
export const count = (name) => {
    return iff(get(name), (stat) => {
        return stat.count;
    });
};
const sum = (name) => {
    const stat = get(name);
    if (stat === undefined) {
        return 0;
    }
    const { values } = stat;
    const length = values.length;
    if (length === 0) {
        return 0;
    }
    return values.reduce((a, b) => a + b, 0);
};
let ENABLED = false;
export const enable = (enabled = true) => {
    ENABLED = enabled;
};
export const Stats = {
    sumAdd,
    sumSubtract,
    names,
    add,
    set,
    avg,
    sum,
    clear,
    time,
    get,
    count,
    pushName,
    popName,
    logStats,
    enable,
};
//# sourceMappingURL=Stats.js.map