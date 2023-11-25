import { isDefined, isUndefined } from "@mjtdev/object";
import { createState } from "../state/createState";
export const lock = (fn, options = {}) => {
    const { cycleMs = 100, name = "", maxCycles } = options;
    const { locks } = getLockState();
    const available = isUndefined(locks[name]);
    if (available) {
        return new Promise(async (resolve, reject) => {
            try {
                updateLockState((state) => {
                    state.locks[name] = Date.now();
                });
                const result = await fn();
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
            finally {
                updateLockState((state) => {
                    delete state.locks[name];
                });
            }
        });
    }
    return new Promise((resolve, reject) => {
        if (isDefined(maxCycles) && maxCycles <= 0) {
            reject(new Error(`Max cycles reached for lock ${name}`));
        }
        setTimeout(() => {
            try {
                const updatedMaxCycles = isDefined(maxCycles)
                    ? maxCycles - 1
                    : undefined;
                resolve(lock(fn, { cycleMs: cycleMs, maxCycles: updatedMaxCycles }));
            }
            catch (e) {
                reject(e);
            }
        }, cycleMs);
    });
};
export const [useLockState, updateLockState, getLockState] = createState({
    locks: {},
});
//# sourceMappingURL=lock.js.map