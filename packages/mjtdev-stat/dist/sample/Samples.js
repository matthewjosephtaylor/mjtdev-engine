import { Asserts } from "@mjtdev/assert";
import { isDefined, isUndefined } from "@mjtdev/object";
import { parse } from "stacktrace-parser";
import { SAMPLES } from "./constant/SAMPLES";
const set = (name, value) => {
    clear(name);
    add(value, { name });
};
const stackToParentName = (stack, startFrom = 3) => {
    const parsed = parse(stack);
    return parsed
        .splice(startFrom)
        .map((frame) => frame.methodName)
        .join(":");
};
const create = (sample = {}) => {
    const { name = `${stackToParentName(new Error().stack)}`, values = [], logEnabled = true, lastLogged = 0, clearAfter = "tick", frequencySecs = 5, maxSamples = 1000, } = sample;
    const fleshedSample = {
        name,
        values,
        logEnabled,
        lastLogged,
        clearAfter,
        frequencySecs,
        maxSamples,
    };
    Asserts.assertValue(fleshedSample.name, () => {
        console.error("SAMPLE", sample);
        console.error("FLESHED_SAMPLE", fleshedSample);
        return "Sample MUST have name for creation";
    });
    SAMPLES.push(fleshedSample);
    return fleshedSample;
};
const add = (value, sample = {}) => {
    const found = get(sample);
    sample.name = found.name;
    found.values.unshift(value);
    const { maxSamples = 1000 } = found;
    found.values.length = maxSamples;
    return found;
};
const all = () => {
    return SAMPLES;
};
const names = () => {
    return SAMPLES.map((s) => s.name);
};
const get = (sample) => {
    const { name } = sample;
    const found = SAMPLES.find((s) => s.name === name);
    if (isUndefined(found)) {
        Asserts.assert(SAMPLES.length < 1000, () => {
            console.log("get-sample", sample);
            console.log("SAMPLES", SAMPLES);
            return "Max Samples reached. Did pass in constant reference to sample";
        });
        return create(sample);
    }
    return found;
};
const clear = (name) => {
    const stat = get({ name });
    stat.values.length = 0;
};
const log = (name) => {
    let sample = get({ name });
    if (isUndefined(sample)) {
        sample = create({ name });
        return;
    }
    const { logEnabled = false, frequencySecs = 60 * 10, lastLogged = -1, } = sample;
    if (!logEnabled) {
        return;
    }
    if (Date.now() > lastLogged + frequencySecs * 1000) {
        const { values } = sample;
        console.log(name, values.filter(isDefined));
        sample.lastLogged = Date.now();
    }
};
export const Samples = {
    create,
    names,
    add,
    set,
    log,
    clear,
    all,
};
//# sourceMappingURL=Samples.js.map