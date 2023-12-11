import { isDefined, isUndefined } from "@mjtdev/object";
import { createState } from "../state/createState";

export type LockFn<T = unknown> = () => Promise<T> | T;

export type LockEntry = {
  fn: LockFn;
  id: string;
};

export const [useLockState, updateLockState, getLockState] = createState({
  locks: {} as Record<string, LockEntry[]>,
});

const drainLocksDownTo = <T>(
  lockName: string,
  lockEntryId: string,
  cycleMs = 100
): Promise<T> => {
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
      if (topEntry.id === lockEntryId) {
        try {
          const value = await topEntry.fn();
          return resolve(value as T);
        } catch (err) {
          return reject(err);
        } finally {
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

export const lock = <T>(
  fn: LockFn<T>,
  options: Partial<{ cycleMs: number; name: string }> = {}
): Promise<T> | T => {
  const { cycleMs = 100, name = "" } = options;
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
  return drainLocksDownTo(name, lockId, cycleMs);

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
