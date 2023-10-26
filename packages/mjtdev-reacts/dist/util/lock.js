import { create } from "zustand";
export const lock = (fn, timeoutMs = 100) => {
    const { available } = useLockState.getState();
    if (available) {
        return new Promise(async (resolve, reject) => {
            try {
                useLockState.setState((state) => ({ ...state, available: false }));
                const result = await fn();
                useLockState.setState((state) => ({ ...state, available: true }));
                resolve(result);
            }
            catch (e) {
                useLockState.setState((state) => ({ ...state, available: true }));
                reject(e);
            }
        });
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(lock(fn, timeoutMs));
            }
            catch (e) {
                reject(e);
            }
        }, timeoutMs);
    });
};
export const useLockState = create(() => ({
    available: true,
}));
//# sourceMappingURL=lock.js.map