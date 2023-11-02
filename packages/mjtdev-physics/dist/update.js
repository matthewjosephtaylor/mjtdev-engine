import { Engine } from "matter-js";
export const update = (engine, deltaMs, lastDeltaMs = 0) => {
    const correction = lastDeltaMs === 0 ? undefined : deltaMs / lastDeltaMs;
    Engine.update(engine, deltaMs, correction);
};
//# sourceMappingURL=update.js.map