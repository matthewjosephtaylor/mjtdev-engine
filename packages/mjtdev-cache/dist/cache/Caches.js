import { getCachedObject } from "./getCachedObject";
import { Stats } from "@mjtdev/stat";
let nextId = 0;
const create = (
// name: string = `cache-${performance.now().toString(36)}`
name = `cache-${nextId++}`) => {
    const state = new Map();
    const cache = {
        get: (key, producer) => getCachedObject(key, state, producer),
        set: (key, value) => {
            state.set(key, value);
            Stats.set(`cache.${name}.total`, state.size);
            return cache;
        },
        clear: () => state.clear(),
        findKeys: (value) => {
            const entries = Array.from(state.entries());
            return entries.filter(([k, v]) => v === value).map(([k, v]) => k);
        },
    };
    return cache;
};
export const Caches = {
    create,
};
//# sourceMappingURL=Caches.js.map