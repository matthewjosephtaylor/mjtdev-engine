import { createState } from "../state/createState";
export const [useLockState, updateLockState, getLockState] = createState({
    locks: {},
});
const drainLocksDownTo = (lockName, lockEntryId, cycleMs = 100, maxCycles = 300) => {
    let cycleCount = 0;
    return new Promise((resolve, reject) => {
        const check = async () => {
            const queue = getLockState().locks[lockName];
            if (!queue) {
                throw new Error(`No queue for lock: ${lockName}`);
            }
            const topEntry = queue[0];
            if (!topEntry) {
                throw new Error(`No top entry for queue for lock: ${lockName}`);
            }
            cycleCount += 1;
            if (topEntry.id === lockEntryId) {
                try {
                    if (cycleCount > maxCycles) {
                        return reject(`max cycles reacted: ${lockName}/${lockEntryId} cyclesMs: ${cycleMs} maxCycles: ${maxCycles}`);
                    }
                    const value = await topEntry.fn();
                    return resolve(value);
                }
                catch (err) {
                    return reject(err);
                }
                finally {
                    return updateLockState((state) => {
                        state.locks[lockName].shift();
                    });
                }
            }
            setTimeout(check, cycleMs);
        };
        check();
    });
};
export const lock = (fn, options = {}) => {
    const { cycleMs = 100, name = `anon-${crypto.randomUUID()}`, maxCycles, } = options;
    // const { locks } = getLockState();
    const lockId = `lock-${Date.now()}-${crypto.randomUUID()}`;
    updateLockState((state) => {
        const locks = state.locks[name] ?? [];
        locks.push({
            id: lockId,
            fn,
        });
        state.locks[name] = locks;
    });
    return drainLocksDownTo(name, lockId, cycleMs, maxCycles);
    // const available = isUndefined(locks[name]);
    // if (available) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       updateLockState((state) => {
    //         state.locks[name] = [fn];
    //       });
    //       const result = await fn();
    //       resolve(result);
    //     } catch (e) {
    //       reject(e);
    //     } finally {
    //       updateLockState((state) => {
    //         delete state.locks[name];
    //       });
    //     }
    //   });
    // }
    // return new Promise((resolve, reject) => {
    //   if (isDefined(maxCycles) && maxCycles <= 0) {
    //     reject(new Error(`Max cycles reached for lock ${name}`));
    //   }
    //   setTimeout(() => {
    //     try {
    //       const updatedMaxCycles = isDefined(maxCycles)
    //         ? maxCycles - 1
    //         : undefined;
    //       resolve(lock(fn, { cycleMs: cycleMs, maxCycles: updatedMaxCycles }));
    //     } catch (e) {
    //       reject(e);
    //     }
    //   }, cycleMs);
    // });
};
//# sourceMappingURL=lock.js.map